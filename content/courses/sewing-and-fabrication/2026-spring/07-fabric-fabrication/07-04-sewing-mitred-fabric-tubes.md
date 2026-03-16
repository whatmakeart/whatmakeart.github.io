---
title: 07.04 Sewing Mitred Fabric Tubes
date: 2026-03-16T09:00:00-04:00
lastmod: 2026-03-16T07:59:38-04:00
---

<div class="container py-4">
    <div class="card shadow-sm">
        <div class="card-header bg-primary text-white">
            <h1 class="h5 mb-0">Tube-to-Tube Mitre Template Generator</h1>
        </div>
        <div class="card-body">
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="mb-3">
                        <label class="form-label fw-bold small text-uppercase">Branch Tube Diam (D1)</label>
                        <input type="number" id="branchDiam" class="form-control" value="4" step="0.1">
                        <small class="text-muted" style="font-size: 0.75rem;">The tube being cut</small>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-bold small text-uppercase">Main Tube Diam (D2)</label>
                        <input type="number" id="mainDiam" class="form-control" value="6" step="0.1">
                        <small class="text-muted" style="font-size: 0.75rem;">The tube being attached to</small>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-bold small text-uppercase">Intersection Angle (°)</label>
                        <input type="number" id="angle" class="form-control" value="90" step="1" min="10" max="90">
                        <small class="text-muted" style="font-size: 0.75rem;">90° is perpendicular (T-joint)</small>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-bold small text-uppercase">Base Length (L)</label>
                        <input type="number" id="height" class="form-control" value="5" step="0.1">
                        <small class="text-muted" style="font-size: 0.75rem;">Length of the shortest side</small>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-bold small text-uppercase">Seam Allowance (Inches)</label>
                        <input type="number" id="seam" class="form-control" value="0.5" step="0.0625">
                    </div>
                    <div id="output" class="alert alert-secondary py-2 small font-monospace">
                        </div>
                    <button class="btn btn-primary w-100 fw-bold shadow-sm" onclick="exportSVG()">
                        Download 1:1 SVG
                    </button>
                </div>
                <div class="col-md-8">
                    <label class="form-label fw-bold small text-uppercase text-muted">Template Preview</label>
                    <div class="border rounded bg-light p-2 text-center">
                        <canvas id="tubeCanvas" style="max-width: 100%; height: auto;"></canvas>
                    </div>
                    <p class="text-muted small mt-2 text-center">
                        Blue: Cut Pattern & Seams (1:1 Scale in SVG)
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    const inputs = ['branchDiam', 'mainDiam', 'angle', 'height', 'seam'];
    const canvas = document.getElementById('tubeCanvas');
    const ctx = canvas.getContext('2d');
    let currentData = {};

    function calculate() {
        // 1. Get and sanitize inputs
        let D1 = parseFloat(document.getElementById('branchDiam').value) || 0;
        const D2 = parseFloat(document.getElementById('mainDiam').value) || 0;
        let angleDeg = parseFloat(document.getElementById('angle').value) || 90;
        const H = parseFloat(document.getElementById('height').value) || 0;
        const seam = parseFloat(document.getElementById('seam').value) || 0;

        // Constraint: Branch tube cannot be larger than Main tube for standard coping
        if (D1 >= D2) D1 = D2 * 0.999; 
        if (angleDeg < 10) angleDeg = 10;
        if (angleDeg > 90) angleDeg = 90;

        const r1 = D1 / 2;
        const r2 = D2 / 2;
        const alphaRad = angleDeg * (Math.PI / 180);
        const width = Math.PI * D1;
        const resolution = 360; // Calculate point for every degree

        // 2. Generate true cut line (coping formula)
        let rawPoints = [];
        for (let i = 0; i <= resolution; i++) {
            let theta = (i / resolution) * Math.PI * 2;
            let x = r1 * theta;
            
            // Standard pipe intersection formula
            let term1 = (r1 * Math.cos(theta)) / Math.tan(alphaRad);
            // Protect against floating point precision errors causing negative square roots
            let rootVal = Math.pow(r2, 2) - Math.pow(r1 * Math.sin(theta), 2);
            let term2 = Math.sqrt(Math.max(0, rootVal)) / Math.sin(alphaRad);
            
            let y = term1 + term2;
            rawPoints.push({x, y});
        }

        // 3. Shift curve so the shortest side equals the Base Length (H)
        let minY = Math.min(...rawPoints.map(p => p.y));
        let maxY = Math.max(...rawPoints.map(p => p.y));
        
        let points = rawPoints.map(p => ({
            x: p.x,
            y: (p.y - minY) + H // Math Y coordinates (Up is positive)
        }));

        let newMaxY = (maxY - minY) + H;

        // 4. Generate seam allowance points via normal angle offset
        let seamPoints = [];
        for (let i = 0; i <= resolution; i++) {
            let prev = points[i === 0 ? resolution - 1 : i - 1];
            let next = points[i === resolution ? 1 : i + 1];

            // Adjust X for wrap-around to get correct slope at edges
            let px = prev.x, nx = next.x;
            if (i === 0) px -= width;
            if (i === resolution) nx += width;

            let dx = nx - px;
            let dy = next.y - prev.y;
            let len = Math.sqrt(dx*dx + dy*dy);
            
            // Normal vector pointing UP (outward)
            let normX = -dy / len;
            let normY = dx / len;

            seamPoints.push({
                x: points[i].x + normX * seam,
                y: points[i].y + normY * seam
            });
        }

        currentData = { D1, D2, angleDeg, H, seam, width, points, seamPoints, newMaxY };

        document.getElementById('output').innerHTML = `
            <div>Branch (D1): <strong>Ø${D1.toFixed(2)}"</strong> | Main (D2): <strong>Ø${D2.toFixed(2)}"</strong></div>
            <div>Pattern Width: <strong>${width.toFixed(2)}"</strong></div>
            <div>Max Piece Length: <strong>${(newMaxY + seam).toFixed(2)}"</strong></div>
        `;

        drawCanvas();
    }

    function drawCanvas() {
        canvas.width = 800;
        canvas.height = 600;
        const { D1, D2, angleDeg, H, seam, width, points, seamPoints, newMaxY } = currentData;
        
        // Setup scaling and offsets so Math coordinates translate to Canvas (Y-flipped)
        const totalMathWidth = width + 2 * seam;
        const totalMathHeight = newMaxY + 2 * seam;
        
        // Leave a 40px margin
        const scale = Math.min((canvas.width - 40) / totalMathWidth, (canvas.height - 40) / totalMathHeight);
        
        // Center the drawing
        const offsetX = (canvas.width - totalMathWidth * scale) / 2 + seam * scale;
        const offsetY = (canvas.height + totalMathHeight * scale) / 2 - seam * scale;

        // Helper to convert Math coords to Canvas coords
        const cX = (x) => offsetX + x * scale;
        const cY = (y) => offsetY - y * scale;

        ctx.clearRect(0,0, canvas.width, canvas.height);

        // --- 1. DRAW OUTER SEAM SHAPE ---
        ctx.beginPath();
        ctx.strokeStyle = '#0d6efd';
        ctx.lineWidth = 2;
        
        // Start bottom-left seam corner
        ctx.moveTo(cX(-seam), cY(-seam));
        // Bottom edge
        ctx.lineTo(cX(width + seam), cY(-seam));
        // Right edge
        ctx.lineTo(cX(width + seam), cY(seamPoints[seamPoints.length-1].y));
        // Top right seam corner
        ctx.lineTo(cX(seamPoints[seamPoints.length-1].x), cY(seamPoints[seamPoints.length-1].y));
        
        // Trace top seam curve backwards
        for (let i = seamPoints.length - 1; i >= 0; i--) {
            ctx.lineTo(cX(seamPoints[i].x), cY(seamPoints[i].y));
        }
        
        // Top left seam corner
        ctx.lineTo(cX(-seam), cY(seamPoints[0].y));
        // Close back to bottom-left
        ctx.closePath();

        ctx.fillStyle = 'rgba(13, 110, 253, 0.05)';
        ctx.fill();
        ctx.stroke();

        // --- 2. DRAW FOLD/CUT LINES ---
        if (seam > 0) {
            ctx.beginPath();
            ctx.setLineDash([5, 5]);
            ctx.strokeStyle = '#0d6efd';
            
            // Bottom geometric base
            ctx.moveTo(cX(0), cY(0));
            ctx.lineTo(cX(width), cY(0));
            
            // Side geometric seams
            ctx.moveTo(cX(0), cY(0));
            ctx.lineTo(cX(0), cY(points[0].y));
            ctx.moveTo(cX(width), cY(0));
            ctx.lineTo(cX(width), cY(points[points.length-1].y));

            // Top actual cut line
            ctx.moveTo(cX(points[0].x), cY(points[0].y));
            for (let i = 1; i < points.length; i++) {
                ctx.lineTo(cX(points[i].x), cY(points[i].y));
            }
            
            ctx.stroke();
            ctx.setLineDash([]);
        }

        // --- 3. DRAW LABELS ---
        ctx.fillStyle = '#212529';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        const textY = cY(newMaxY / 2);
        ctx.font = 'bold 16px sans-serif';
        ctx.fillText('BRANCH TUBE PATTERN', cX(width/2), textY - 15);
        ctx.font = '14px sans-serif';
        ctx.fillText(`D1: ${D1.toFixed(1)}" | D2: ${D2.toFixed(1)}"`, cX(width/2), textY + 5);
        ctx.fillText(`Angle: ${angleDeg}° | Seam: ${seam}"`, cX(width/2), textY + 25);

        // --- 4. DRAW SCALE CHECK SQUARE ---
        const sqSize = 1 * scale; 
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 1;
        ctx.strokeRect(20, 20, sqSize, sqSize);
        ctx.textAlign = 'left';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText('1x1" SCALE CHECK', 20 + sqSize + 10, 20 + sqSize/2);
    }

    function exportSVG() {
        const { D1, D2, angleDeg, seam, width, points, seamPoints, newMaxY } = currentData;
        
        const totalMathWidth = width + 2 * seam;
        const totalMathHeight = newMaxY + 2 * seam;
        
        const offsetX = seam;
        const offsetY = totalMathHeight - seam; // SVG Y goes down

        const sX = (x) => offsetX + x;
        const sY = (y) => offsetY - y;

        let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${totalMathWidth}in" height="${totalMathHeight}in" viewBox="0 0 ${totalMathWidth} ${totalMathHeight}">`;
        
        // 1. Draw Outer Shape Path
        svg += `<path d="M ${sX(-seam)} ${sY(-seam)} L ${sX(width + seam)} ${sY(-seam)} L ${sX(width + seam)} ${sY(seamPoints[seamPoints.length-1].y)} L ${sX(seamPoints[seamPoints.length-1].x)} ${sY(seamPoints[seamPoints.length-1].y)} `;
        for (let i = seamPoints.length - 1; i >= 0; i--) {
            svg += `L ${sX(seamPoints[i].x)} ${sY(seamPoints[i].y)} `;
        }
        svg += `L ${sX(-seam)} ${sY(seamPoints[0].y)} Z" fill="none" stroke="blue" stroke-width="0.02" />`;

        // 2. Draw Fold Lines
        if (seam > 0) {
            // Bottom & Sides
            svg += `<line x1="${sX(0)}" y1="${sY(0)}" x2="${sX(width)}" y2="${sY(0)}" stroke="blue" stroke-dasharray="0.1, 0.1" stroke-width="0.01" />`;
            svg += `<line x1="${sX(0)}" y1="${sY(0)}" x2="${sX(0)}" y2="${sY(points[0].y)}" stroke="blue" stroke-dasharray="0.1, 0.1" stroke-width="0.01" />`;
            svg += `<line x1="${sX(width)}" y1="${sY(0)}" x2="${sX(width)}" y2="${sY(points[points.length-1].y)}" stroke="blue" stroke-dasharray="0.1, 0.1" stroke-width="0.01" />`;
            
            // Top Cut Line
            svg += `<path d="M ${sX(points[0].x)} ${sY(points[0].y)} `;
            for (let i = 1; i < points.length; i++) {
                svg += `L ${sX(points[i].x)} ${sY(points[i].y)} `;
            }
            svg += `" fill="none" stroke="blue" stroke-dasharray="0.1, 0.1" stroke-width="0.01" />`;
        }

        // 3. Draw Labels (Scaled for inches)
        const textY = sY(newMaxY / 2);
        svg += `<text x="${sX(width/2)}" y="${textY - 0.2}" font-family="sans-serif" font-size="0.25" font-weight="bold" fill="black" text-anchor="middle">BRANCH TUBE PATTERN</text>`;
        svg += `<text x="${sX(width/2)}" y="${textY + 0.15}" font-family="sans-serif" font-size="0.18" fill="black" text-anchor="middle">D1: ${D1.toFixed(1)}" | D2: ${D2.toFixed(1)}"</text>`;
        svg += `<text x="${sX(width/2)}" y="${textY + 0.4}" font-family="sans-serif" font-size="0.18" fill="black" text-anchor="middle">Angle: ${angleDeg}° | Seam: ${seam}"</text>`;

        // 4. Draw Scale Check Square
        svg += `<rect x="0.5" y="0.5" width="1" height="1" fill="none" stroke="black" stroke-width="0.01" />`;
        svg += `<text x="1.7" y="1.05" font-family="sans-serif" font-size="0.18" font-weight="bold" fill="black">1x1" SCALE CHECK</text>`;

        svg += `</svg>`;

        const blob = new Blob([svg], {type: 'image/svg+xml'});
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `tube-mitre.svg`;
        link.click();
    }

    inputs.forEach(id => document.getElementById(id).addEventListener('input', calculate));
    calculate();
</script>
