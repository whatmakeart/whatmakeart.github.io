---
title: 07.03 Sewing Cones to Receiving Holes
date: 2026-03-16T09:00:00-04:00
lastmod: 2026-03-16T07:58:51-04:00
---

Sewing cones, or spikes, into receiving fabric holes requires calculation of the diameters and seam allowances.

<div class="container py-4">
    <div class="card shadow-sm">
        <div class="card-header bg-primary text-white">
            <h1 class="h5 mb-0">Cone & Cap Template Generator</h1>
        </div>
        <div class="card-body">
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="mb-3">
                        <label class="form-label fw-bold small text-uppercase">Cone Style</label>
                        <select id="coneType" class="form-select">
                            <option value="pointy">Pointy (Full Cone)</option>
                            <option value="truncated">Truncated (Frustum)</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-bold small text-uppercase">Base Diameter (D)</label>
                        <input type="number" id="baseDiam" class="form-control" value="10" step="0.1">
                    </div>
                    <div id="topDiamContainer" class="mb-3" style="display:none;">
                        <label class="form-label fw-bold small text-uppercase">Top Diameter (d)</label>
                        <input type="number" id="topDiam" class="form-control" value="4" step="0.1">
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-bold small text-uppercase">Vertical Height (H)</label>
                        <input type="number" id="height" class="form-control" value="8" step="0.1">
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
                        <canvas id="coneCanvas" style="max-width: 100%; height: auto;"></canvas>
                    </div>
                    <p class="text-muted small mt-2 text-center">
                        Blue: Wall Pattern | Black: End Caps (1:1 Scale in SVG)
                    </p>
                </div>
            </div>
        </div>
    </div>

</div>

<script>
    const inputs = ['coneType', 'baseDiam', 'topDiam', 'height', 'seam'];
    const canvas = document.getElementById('coneCanvas');
    const ctx = canvas.getContext('2d');
    let currentData = {};

    function calculate() {
        const type = document.getElementById('coneType').value;
        const D = parseFloat(document.getElementById('baseDiam').value) || 0;
        const H = parseFloat(document.getElementById('height').value) || 0;
        const seam = parseFloat(document.getElementById('seam').value) || 0;
        let d = type === 'pointy' ? 0 : parseFloat(document.getElementById('topDiam').value) || 0;

        if (d >= D) d = D * 0.99;
        document.getElementById('topDiamContainer').style.display = type === 'truncated' ? 'block' : 'none';

        const slant_seg = Math.sqrt(Math.pow((D/2) - (d/2), 2) + Math.pow(H, 2));
        const Ro = (D / 2) * (slant_seg / ((D - d) / 2));
        const Ri = (d / 2) * (slant_seg / ((D - d) / 2));
        const angle = (D / (2 * Ro)) * 360;

        currentData = { D, d, H, seam, Ro, Ri, angle };

        // Simple result update
        document.getElementById('output').innerHTML = `
            <div>Outer Rad: <strong>${Ro.toFixed(2)}"</strong></div>
            ${Ri > 0 ? `<div>Inner Rad: <strong>${Ri.toFixed(2)}"</strong></div>` : ''}
            <div>Arc Angle: <strong>${angle.toFixed(1)}°</strong></div>
            <div>Base Cap: <strong>Ø${D}"</strong></div>
        `;

        drawCanvas();
    }

    function drawCanvas() {
        canvas.width = 800;
        canvas.height = 600;
        const { Ro, Ri, angle, D, d, seam } = currentData;
        
        const scale = (canvas.width * 0.6) / Math.max(Ro * 2, D + d);
        const cx = canvas.width / 2;
        const cy = 100;

        const sA = (90 - angle / 2) * (Math.PI / 180);
        const eA = (90 + angle / 2) * (Math.PI / 180);

        ctx.clearRect(0,0, canvas.width, canvas.height);
        
        // --- 1. CONE CORNERS ---
        const p1x = cx + Ro * scale * Math.cos(sA);
        const p1y = cy + Ro * scale * Math.sin(sA);
        const p2x = cx + Ro * scale * Math.cos(eA);
        const p2y = cy + Ro * scale * Math.sin(eA);
        const p3x = cx + Ri * scale * Math.cos(eA);
        const p3y = cy + Ri * scale * Math.sin(eA);
        const p4x = cx + Ri * scale * Math.cos(sA);
        const p4y = cy + Ri * scale * Math.sin(sA);

        // --- 2. SEAM ALLOWANCE ---
        const normalAngle = sA - (Math.PI / 2);
        const scaledSeam = seam * scale;
        const dx = scaledSeam * Math.cos(normalAngle);
        const dy = scaledSeam * Math.sin(normalAngle);

        const p1_seamX = p1x + dx, p1_seamY = p1y + dy;
        const p4_seamX = p4x + dx, p4_seamY = p4y + dy;

        // --- 3. DRAW MAIN SHAPE ---
        ctx.beginPath();
        ctx.strokeStyle = '#0d6efd';
        ctx.lineWidth = 2;
        ctx.moveTo(p1_seamX, p1_seamY);
        ctx.lineTo(p1x, p1y);
        ctx.arc(cx, cy, Ro * scale, sA, eA);
        ctx.lineTo(p3x, p3y);
        if (Ri > 0) ctx.arc(cx, cy, Ri * scale, eA, sA, true);
        else ctx.lineTo(cx, cy);
        ctx.lineTo(p4_seamX, p4_seamY);
        ctx.closePath();
        ctx.fillStyle = 'rgba(13, 110, 253, 0.05)';
        ctx.fill();
        ctx.stroke();

        // Fold line
        if (seam > 0) {
            ctx.beginPath();
            ctx.setLineDash([5, 5]);
            ctx.moveTo(p1x, p1y);
            ctx.lineTo(p4x, p4y);
            ctx.stroke();
            ctx.setLineDash([]);
        }

        // --- 4. DRAW CAPS ---
        ctx.setLineDash([5, 5]);
        ctx.strokeStyle = '#6c757d';
        
        const baseCapX = cx - (D*scale/2) - 10;
        const capY = cy + (Ro * scale) + 80;
        
        ctx.beginPath();
        ctx.arc(baseCapX, capY, (D/2) * scale, 0, Math.PI * 2);
        ctx.stroke();

        let topCapX = 0;
        if (d > 0) {
            topCapX = cx + (d*scale/2) + 10;
            ctx.beginPath();
            ctx.arc(topCapX, capY, (d/2) * scale, 0, Math.PI * 2);
            ctx.stroke();
        }
        ctx.setLineDash([]);

        // --- 5. DRAW LABELS & DIMENSIONS ---
        ctx.fillStyle = '#212529'; // Bootstrap Dark
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Wall Pattern Text (Centered in the arc)
        const midR = Ri + (Ro - Ri) / 2;
        const textY = cy + midR * scale;
        ctx.font = 'bold 14px sans-serif';
        ctx.fillText('WALL PATTERN', cx, textY - 12);
        ctx.font = '12px sans-serif';
        ctx.fillText(`Ro: ${Ro.toFixed(2)}" | Ri: ${Ri.toFixed(2)}"`, cx, textY + 5);
        ctx.fillText(`Angle: ${angle.toFixed(1)}° | Seam: ${seam}"`, cx, textY + 20);

        // Caps Text
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText('BASE CAP', baseCapX, capY - 8);
        ctx.font = '12px sans-serif';
        ctx.fillText(`Ø ${D}"`, baseCapX, capY + 8);

        if (d > 0) {
            ctx.font = 'bold 12px sans-serif';
            ctx.fillText('TOP CAP', topCapX, capY - 8);
            ctx.font = '12px sans-serif';
            ctx.fillText(`Ø ${d}"`, topCapX, capY + 8);
        }

        // --- 6. DRAW SCALE CHECK SQUARE ---
        const sqSize = 1 * scale; // 1 inch scaled
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 1;
        ctx.strokeRect(20, 20, sqSize, sqSize);
        ctx.textAlign = 'left';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText('1x1" SCALE CHECK', 20 + sqSize + 10, 20 + sqSize/2);
    }

function exportSVG() {
        const { Ro, Ri, angle, seam, D, d } = currentData;
        
        const sA = (90 - angle / 2) * (Math.PI / 180);
        const eA = (90 + angle / 2) * (Math.PI / 180);
        
        // 1. Calculate Y-offset and center points
        const minYOffset = Math.min(0, Ro * Math.sin(sA), Ro * Math.sin(eA));
        const cx = (Math.max(Ro * 2, D + d + 2) / 2) + seam; 
        const cy = Math.abs(minYOffset) + seam + 1; 
        
        const widthIn = cx * 2;
        const heightIn = cy + Ro + Math.max(D, d) + 2;

        // 2. Cone points and Seam math
        const p1x = cx + Ro * Math.cos(sA), p1y = cy + Ro * Math.sin(sA);
        const p2x = cx + Ro * Math.cos(eA), p2y = cy + Ro * Math.sin(eA);
        const p3x = cx + Ri * Math.cos(eA), p3y = cy + Ri * Math.sin(eA);
        const p4x = cx + Ri * Math.cos(sA), p4y = cy + Ri * Math.sin(sA);

        const normalAngle = sA - (Math.PI / 2);
        const dx = seam * Math.cos(normalAngle);
        const dy = seam * Math.sin(normalAngle);
        const p1_seamX = p1x + dx, p1_seamY = p1y + dy;
        const p4_seamX = p4x + dx, p4_seamY = p4y + dy;

        const largeArc = angle > 180 ? 1 : 0;

        let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${widthIn}in" height="${heightIn}in" viewBox="0 0 ${widthIn} ${heightIn}">`;
        
        // 3. Draw Shapes
        svg += `<path d="M ${p1_seamX} ${p1_seamY} L ${p1x} ${p1y} A ${Ro} ${Ro} 0 ${largeArc} 1 ${p2x} ${p2y} L ${p3x} ${p3y} `;
        if (Ri > 0) svg += `A ${Ri} ${Ri} 0 ${largeArc} 0 ${p4x} ${p4y} `;
        else svg += `L ${cx} ${cy} `;
        svg += `L ${p4_seamX} ${p4_seamY} Z" fill="none" stroke="blue" stroke-width="0.02" />`;

        if (seam > 0) {
            svg += `<line x1="${p4x}" y1="${p4y}" x2="${p1x}" y2="${p1y}" stroke="blue" stroke-dasharray="0.1, 0.1" stroke-width="0.01" />`;
        }

        const baseCy = cy + Ro + (D/2) + seam + 0.5;
        const baseCapX = cx - (D/2) - 0.5;
        svg += `<circle cx="${baseCapX}" cy="${baseCy}" r="${D/2}" fill="none" stroke="black" stroke-width="0.01" />`;
        
        let topCapX = 0;
        if (d > 0) {
            topCapX = cx + (d/2) + 0.5;
            svg += `<circle cx="${topCapX}" cy="${baseCy}" r="${d/2}" fill="none" stroke="black" stroke-width="0.01" />`;
        }

        // 4. DRAW LABELS & DIMENSIONS (Scaled for inches)
        const midR = Ri + (Ro - Ri) / 2;
        const textY = cy + midR;
        
        // Wall Pattern Text
        svg += `<text x="${cx}" y="${textY - 0.2}" font-family="sans-serif" font-size="0.2" font-weight="bold" fill="black" text-anchor="middle">WALL PATTERN</text>`;
        svg += `<text x="${cx}" y="${textY + 0.1}" font-family="sans-serif" font-size="0.15" fill="black" text-anchor="middle">Ro: ${Ro.toFixed(2)}" | Ri: ${Ri.toFixed(2)}"</text>`;
        svg += `<text x="${cx}" y="${textY + 0.35}" font-family="sans-serif" font-size="0.15" fill="black" text-anchor="middle">Angle: ${angle.toFixed(1)}° | Seam: ${seam}"</text>`;

        // Caps Text
        svg += `<text x="${baseCapX}" y="${baseCy - 0.1}" font-family="sans-serif" font-size="0.15" font-weight="bold" fill="black" text-anchor="middle">BASE CAP</text>`;
        svg += `<text x="${baseCapX}" y="${baseCy + 0.15}" font-family="sans-serif" font-size="0.15" fill="black" text-anchor="middle">Ø ${D}"</text>`;

        if (d > 0) {
            svg += `<text x="${topCapX}" y="${baseCy - 0.1}" font-family="sans-serif" font-size="0.15" font-weight="bold" fill="black" text-anchor="middle">TOP CAP</text>`;
            svg += `<text x="${topCapX}" y="${baseCy + 0.15}" font-family="sans-serif" font-size="0.15" fill="black" text-anchor="middle">Ø ${d}"</text>`;
        }

        // 5. DRAW SCALE CHECK SQUARE
        svg += `<rect x="0.5" y="0.5" width="1" height="1" fill="none" stroke="black" stroke-width="0.01" />`;
        svg += `<text x="1.7" y="1.05" font-family="sans-serif" font-size="0.18" font-weight="bold" fill="black">1x1" SCALE CHECK</text>`;

        svg += `</svg>`;

        const blob = new Blob([svg], {type: 'image/svg+xml'});
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `cone-template.svg`;
        link.click();
    }

    inputs.forEach(id => document.getElementById(id).addEventListener('input', calculate));
    calculate();
</script>
