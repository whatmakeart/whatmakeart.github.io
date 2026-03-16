---
title: 07.04 Sewing Mitred Fabric Tubes
date: 2026-03-16T09:00:00-04:00
lastmod: 2026-03-16T08:16:35-04:00
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
                        <small class="text-muted" style="font-size: 0.75rem;">The tube being attached to (Receiving)</small>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-bold small text-uppercase">Intersection Angle (°)</label>
                        <input type="number" id="angle" class="form-control" value="90" step="1" min="10" max="90">
                        <small class="text-muted" style="font-size: 0.75rem;">90° is perpendicular (T-joint)</small>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-bold small text-uppercase">Base Length (L)</label>
                        <input type="number" id="height" class="form-control" value="5" step="0.1">
                        <small class="text-muted" style="font-size: 0.75rem;">Length of the shortest side (Branch)</small>
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
                        <strong>Blue:</strong> Branch Cut & Seams | <strong>Green:</strong> Main Wrap | <strong>Red:</strong> Main Hole<br>
                        <span style="font-size: 0.8rem;">(Downloads as a 1:1 Scale SVG for Printing)</span>
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
        const resolution = 360; 

        // 2. Generate true cut line for BRANCH tube
        let rawPoints = [];
        for (let i = 0; i <= resolution; i++) {
            let theta = (i / resolution) * Math.PI * 2;
            let x = r1 * theta;
            
            let term1 = (r1 * Math.cos(theta)) / Math.tan(alphaRad);
            let rootVal = Math.pow(r2, 2) - Math.pow(r1 * Math.sin(theta), 2);
            let term2 = Math.sqrt(Math.max(0, rootVal)) / Math.sin(alphaRad);
            
            let y = term1 + term2;
            rawPoints.push({x, y});
        }

        let minY = Math.min(...rawPoints.map(p => p.y));
        let maxY = Math.max(...rawPoints.map(p => p.y));
        
        let points = rawPoints.map(p => ({
            x: p.x,
            y: (p.y - minY) + H 
        }));

        let newMaxY = (maxY - minY) + H;

        // 3. Generate seam allowance points via normal angle offset
        let seamPoints = [];
        for (let i = 0; i <= resolution; i++) {
            let prev = points[i === 0 ? resolution - 1 : i - 1];
            let next = points[i === resolution ? 1 : i + 1];

            let px = prev.x, nx = next.x;
            if (i === 0) px -= width;
            if (i === resolution) nx += width;

            let dx = nx - px;
            let dy = next.y - prev.y;
            let len = Math.sqrt(dx*dx + dy*dy);
            
            let normX = -dy / len;
            let normY = dx / len;

            seamPoints.push({
                x: points[i].x + normX * seam,
                y: points[i].y + normY * seam
            });
        }

        // 4. Generate hole pattern for MAIN tube
        let rawHolePoints = [];
        let minHY = Infinity, maxHY = -Infinity;
        const mainWidth = Math.PI * D2;
        
        for (let i = 0; i <= resolution; i++) {
            let theta = (i / resolution) * Math.PI * 2;
            
            // X on flattened main tube (Arc length)
            let sinVal = (r1 * Math.sin(theta)) / r2;
            sinVal = Math.max(-1, Math.min(1, sinVal)); // Protect precision
            let hX = (mainWidth / 2) + r2 * Math.asin(sinVal);
            
            // Y on flattened main tube (Axial projection)
            let rootVal = Math.max(0, Math.pow(r2, 2) - Math.pow(r1 * Math.sin(theta), 2));
            let hY = (Math.sqrt(rootVal) * Math.cos(alphaRad) / Math.sin(alphaRad)) + 
                     (r1 * Math.cos(theta) / Math.sin(alphaRad));
                     
            rawHolePoints.push({x: hX, y: hY});
            if (hY < minHY) minHY = hY;
            if (hY > maxHY) maxHY = hY;
        }

        const holeHeight = maxHY - minHY;
        const mainPadding = 1.0; // 1-inch padding top and bottom of hole
        const mainWrapHeight = holeHeight + (mainPadding * 2);
        
        let holePoints = rawHolePoints.map(p => ({
            x: p.x,
            y: (p.y - minHY) + mainPadding
        }));

        currentData = { D1, D2, angleDeg, H, seam, width, points, seamPoints, newMaxY, mainWidth, mainWrapHeight, holePoints, holeHeight };

        document.getElementById('output').innerHTML = `
            <div class="mb-1 border-bottom pb-1">Branch: <strong>Ø${D1.toFixed(2)}"</strong> | Main: <strong>Ø${D2.toFixed(2)}"</strong></div>
            <div>Branch Pattern Size: <strong>${(width+2*seam).toFixed(2)}" W x ${(newMaxY+seam).toFixed(2)}" H</strong></div>
            <div>Main Hole Wrap Size: <strong>${mainWidth.toFixed(2)}" W x ${mainWrapHeight.toFixed(2)}" H</strong></div>
        `;

        drawCanvas();
    }

    function drawCanvas() {
        canvas.width = 800;
        canvas.height = 700; // Taller to fit both
        const { D1, D2, angleDeg, seam, width, points, seamPoints, newMaxY, mainWidth, mainWrapHeight, holePoints } = currentData;
        
        const gap = 1.5; // Gap between templates
        const totalMathWidth = Math.max(width + 2 * seam, mainWidth);
        const totalMathHeight = (newMaxY + 2 * seam) + gap + mainWrapHeight;
        
        const scale = Math.min((canvas.width - 60) / totalMathWidth, (canvas.height - 60) / totalMathHeight);
        
        const drawStartX = (canvas.width - totalMathWidth * scale) / 2;
        const drawStartY = canvas.height - (canvas.height - totalMathHeight * scale) / 2;

        // Coordinate Translators
        const bX = (x) => drawStartX + (x + seam + (totalMathWidth - (width + 2*seam))/2) * scale;
        const bY = (y) => drawStartY - (y + seam + mainWrapHeight + gap) * scale;
        
        const mX = (x) => drawStartX + (x + (totalMathWidth - mainWidth)/2) * scale;
        const mY = (y) => drawStartY - y * scale;

        ctx.clearRect(0,0, canvas.width, canvas.height);

        // --- 1. DRAW BRANCH PATTERN ---
        ctx.beginPath();
        ctx.strokeStyle = '#0d6efd';
        ctx.lineWidth = 2;
        
        ctx.moveTo(bX(-seam), bY(-seam));
        ctx.lineTo(bX(width + seam), bY(-seam));
        ctx.lineTo(bX(width + seam), bY(seamPoints[seamPoints.length-1].y));
        ctx.lineTo(bX(seamPoints[seamPoints.length-1].x), bY(seamPoints[seamPoints.length-1].y));
        
        for (let i = seamPoints.length - 1; i >= 0; i--) {
            ctx.lineTo(bX(seamPoints[i].x), bY(seamPoints[i].y));
        }
        ctx.lineTo(bX(-seam), bY(seamPoints[0].y));
        ctx.closePath();

        ctx.fillStyle = 'rgba(13, 110, 253, 0.05)';
        ctx.fill();
        ctx.stroke();

        if (seam > 0) {
            ctx.beginPath();
            ctx.setLineDash([5, 5]);
            ctx.strokeStyle = '#0d6efd';
            
            ctx.moveTo(bX(0), bY(0));
            ctx.lineTo(bX(width), bY(0));
            ctx.moveTo(bX(0), bY(0));
            ctx.lineTo(bX(0), bY(points[0].y));
            ctx.moveTo(bX(width), bY(0));
            ctx.lineTo(bX(width), bY(points[points.length-1].y));

            ctx.moveTo(bX(points[0].x), bY(points[0].y));
            for (let i = 1; i < points.length; i++) {
                ctx.lineTo(bX(points[i].x), bY(points[i].y));
            }
            ctx.stroke();
            ctx.setLineDash([]);
        }

        // Branch Labels
        ctx.fillStyle = '#212529';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = 'bold 16px sans-serif';
        ctx.fillText('BRANCH TUBE PATTERN', bX(width/2), bY(newMaxY / 2) - 15);
        ctx.font = '14px sans-serif';
        ctx.fillText(`D1: ${D1.toFixed(1)}" | D2: ${D2.toFixed(1)}"`, bX(width/2), bY(newMaxY / 2) + 5);
        ctx.fillText(`Angle: ${angleDeg}° | Seam: ${seam}"`, bX(width/2), bY(newMaxY / 2) + 25);

        // --- 2. DRAW MAIN TUBE PATTERN ---
        ctx.beginPath();
        ctx.strokeStyle = '#198754';
        ctx.lineWidth = 2;
        ctx.rect(mX(0), mY(mainWrapHeight), mainWidth * scale, mainWrapHeight * scale);
        ctx.fillStyle = 'rgba(25, 135, 84, 0.05)';
        ctx.fill();
        ctx.stroke();

        // The Hole Cutout
        ctx.beginPath();
        ctx.strokeStyle = '#dc3545';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.moveTo(mX(holePoints[0].x), mY(holePoints[0].y));
        for(let i=1; i<holePoints.length; i++) {
            ctx.lineTo(mX(holePoints[i].x), mY(holePoints[i].y));
        }
        ctx.closePath();
        ctx.stroke();
        ctx.setLineDash([]);

        // Main Labels
        ctx.fillStyle = '#212529';
        ctx.font = 'bold 16px sans-serif';
        ctx.fillText('MAIN TUBE HOLE (RECEIVER)', mX(mainWidth/2), mY(mainWrapHeight) + 30);

        // --- 3. SCALE CHECK ---
        const sqSize = 1 * scale; 
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 1;
        ctx.strokeRect(20, 20, sqSize, sqSize);
        ctx.textAlign = 'left';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText('1x1" SCALE CHECK', 20 + sqSize + 10, 20 + sqSize/2);
    }

    function exportSVG() {
        const { D1, D2, angleDeg, seam, width, points, seamPoints, newMaxY, mainWidth, mainWrapHeight, holePoints } = currentData;
        
        const gap = 1.0;
        const totalMathWidth = Math.max(width + 2 * seam, mainWidth);
        const totalMathHeight = (newMaxY + 2 * seam) + gap + mainWrapHeight;
        
        const sX = (x) => x + seam + (totalMathWidth - (width + 2*seam))/2;
        const sY = (y) => totalMathHeight - (y + seam + mainWrapHeight + gap);

        const mX = (x) => x + (totalMathWidth - mainWidth)/2;
        const mY = (y) => totalMathHeight - y;

        let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${totalMathWidth}in" height="${totalMathHeight}in" viewBox="0 0 ${totalMathWidth} ${totalMathHeight}">`;
        
        // 1. BRANCH PATTERN
        svg += `<path d="M ${sX(-seam)} ${sY(-seam)} L ${sX(width + seam)} ${sY(-seam)} L ${sX(width + seam)} ${sY(seamPoints[seamPoints.length-1].y)} L ${sX(seamPoints[seamPoints.length-1].x)} ${sY(seamPoints[seamPoints.length-1].y)} `;
        for (let i = seamPoints.length - 1; i >= 0; i--) {
            svg += `L ${sX(seamPoints[i].x)} ${sY(seamPoints[i].y)} `;
        }
        svg += `L ${sX(-seam)} ${sY(seamPoints[0].y)} Z" fill="none" stroke="blue" stroke-width="0.02" />`;

        if (seam > 0) {
            svg += `<line x1="${sX(0)}" y1="${sY(0)}" x2="${sX(width)}" y2="${sY(0)}" stroke="blue" stroke-dasharray="0.1, 0.1" stroke-width="0.01" />`;
            svg += `<line x1="${sX(0)}" y1="${sY(0)}" x2="${sX(0)}" y2="${sY(points[0].y)}" stroke="blue" stroke-dasharray="0.1, 0.1" stroke-width="0.01" />`;
            svg += `<line x1="${sX(width)}" y1="${sY(0)}" x2="${sX(width)}" y2="${sY(points[points.length-1].y)}" stroke="blue" stroke-dasharray="0.1, 0.1" stroke-width="0.01" />`;
            svg += `<path d="M ${sX(points[0].x)} ${sY(points[0].y)} `;
            for (let i = 1; i < points.length; i++) {
                svg += `L ${sX(points[i].x)} ${sY(points[i].y)} `;
            }
            svg += `" fill="none" stroke="blue" stroke-dasharray="0.1, 0.1" stroke-width="0.01" />`;
        }

        const bTextY = sY(newMaxY / 2);
        svg += `<text x="${sX(width/2)}" y="${bTextY - 0.2}" font-family="sans-serif" font-size="0.25" font-weight="bold" fill="black" text-anchor="middle">BRANCH TUBE PATTERN</text>`;
        svg += `<text x="${sX(width/2)}" y="${bTextY + 0.15}" font-family="sans-serif" font-size="0.18" fill="black" text-anchor="middle">D1: ${D1.toFixed(1)}" | D2: ${D2.toFixed(1)}"</text>`;
        svg += `<text x="${sX(width/2)}" y="${bTextY + 0.4}" font-family="sans-serif" font-size="0.18" fill="black" text-anchor="middle">Angle: ${angleDeg}° | Seam: ${seam}"</text>`;

        // 2. MAIN TUBE PATTERN
        svg += `<rect x="${mX(0)}" y="${mY(mainWrapHeight)}" width="${mainWidth}" height="${mainWrapHeight}" fill="none" stroke="green" stroke-width="0.02" />`;
        svg += `<path d="M ${mX(holePoints[0].x)} ${mY(holePoints[0].y)} `;
        for(let i=1; i<holePoints.length; i++) {
            svg += `L ${mX(holePoints[i].x)} ${mY(holePoints[i].y)} `;
        }
        svg += `Z" fill="none" stroke="red" stroke-dasharray="0.1, 0.1" stroke-width="0.02" />`;
        
        svg += `<text x="${mX(mainWidth/2)}" y="${mY(mainWrapHeight) + 0.4}" font-family="sans-serif" font-size="0.25" font-weight="bold" fill="black" text-anchor="middle">MAIN TUBE HOLE (RECEIVER)</text>`;

        // 3. SCALE CHECK
        svg += `<rect x="0.5" y="0.5" width="1" height="1" fill="none" stroke="black" stroke-width="0.01" />`;
        svg += `<text x="1.7" y="1.05" font-family="sans-serif" font-size="0.18" font-weight="bold" fill="black">1x1" SCALE CHECK</text>`;

        svg += `</svg>`;

        const blob = new Blob([svg], {type: 'image/svg+xml'});
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `tube-templates.svg`;
        link.click();
    }

    inputs.forEach(id => document.getElementById(id).addEventListener('input', calculate));
    calculate();
</script>
