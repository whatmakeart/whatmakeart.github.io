---
title: 07.02 Sewing Tubes to Circles and Holes
date: 2026-03-16T09:00:00-04:00
lastmod: 2026-03-16T08:19:49-04:00
---

Sewing circles into tubes requires different size circles depending if the circle is a cap on the end of a tube or a hold the tube is inserting into.

The circle sewn onto the end of the fabric tube is not cut the same size as the circle for the hole the fabric tube inserts into. The finished sewn diameter is the same, but the cut edge is different because seam allowance is added in opposite directions.

A tube cap needs seam allowance added outside the finished circle.

A receiving hole in a larger fabric piece needs seam allowance accounted for inside the opening, so the cut hole must be smaller than the finished diameter.

- Cap circle cut size = finished diameter + 1"
- Hole cut size = finished diameter - 1"
- This assumes a .5" seam allowance

### Why the cap and the hole are different sizes

Suppose you want a tube with a finished diameter of 8". The seam line is what must match, not the raw cut edge.

For a cap:

- The seam is sewn .5" in from the cut edge
- So the pattern must extend .5" beyond the finished circle all the way around
- That adds 1" total to the diameter
- Cut diameter = 9"

For a hole:

- The seam is also sewn .5" in from the cut edge
- But here the cut edge is inside the opening
- So the opening must start 1" smaller than the finished diameter
- Cut diameter = 7"

Both pieces sew to the same tube because their seam-line diameter is 8".

<div class="container py-4">
    <div class="card shadow-sm">
        <div class="card-header bg-success text-white">
            <h1 class="h5 mb-0">Fabric Tube & Cylinder Template Generator</h1>
        </div>
        <div class="card-body">
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="mb-3">
                        <label class="form-label fw-bold small text-uppercase text-success">Tube Diameter (D)</label>
                        <input type="number" id="tubeDiam" class="form-control" value="8" step="0.1">
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-bold small text-uppercase">Tube Length / Height (H)</label>
                        <input type="number" id="tubeHeight" class="form-control" value="12" step="0.1">
                    </div>
                    <hr class="my-3">
                    <div class="mb-3">
                        <label class="form-label fw-bold small text-uppercase">End Cap 1 (Top/Left)</label>
                        <select id="capStyle1" class="form-select">
                            <option value="cap">Solid Cap</option>
                            <option value="hole">Receiver Hole in Square Panel</option>
                        </select>
                    </div>
                    <div class="mb-3 d-none" id="sqSizeContainer1">
                        <label class="form-label fw-bold small text-uppercase">Square 1 Size</label>
                        <input type="number" id="sqSize1" class="form-control" value="10" step="0.5">
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-bold small text-uppercase">End Cap 2 (Bottom/Right)</label>
                        <select id="capStyle2" class="form-select">
                            <option value="cap">Solid Cap</option>
                            <option value="hole">Receiver Hole in Square Panel</option>
                        </select>
                    </div>
                    <div class="mb-3 d-none" id="sqSizeContainer2">
                        <label class="form-label fw-bold small text-uppercase">Square 2 Size</label>
                        <input type="number" id="sqSize2" class="form-control" value="10" step="0.5">
                    </div>
                    <hr class="my-3">
                    <div class="mb-3">
                        <label class="form-label fw-bold small text-uppercase">Seam Allowance (Inches)</label>
                        <input type="number" id="seam" class="form-control" value="0.5" step="0.0625">
                    </div>
                    <div id="output" class="alert alert-secondary py-2 small font-monospace"></div>
                    <button class="btn btn-success w-100 fw-bold shadow-sm" onclick="exportSVG()">
                        Download 1:1 SVG
                    </button>
                </div>
                <div class="col-md-8">
                    <label class="form-label fw-bold small text-uppercase text-muted">Template Preview</label>
                    <div class="border rounded bg-light p-2 text-center">
                        <canvas id="tubeCanvas" style="max-width: 100%; height: auto;"></canvas>
                    </div>
                    <p class="text-muted small mt-2 text-center">
                        Solid Green/Black: Cut Lines | Dashed: Stitch Lines | Ticks: Quarter Marks
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    const inputs = ['tubeDiam', 'tubeHeight', 'capStyle1', 'sqSize1', 'capStyle2', 'sqSize2', 'seam'];
    const canvas = document.getElementById('tubeCanvas');
    const ctx = canvas.getContext('2d');
    let currentData = {};

    function calculate() {
        const D = parseFloat(document.getElementById('tubeDiam').value) || 0;
        const H = parseFloat(document.getElementById('tubeHeight').value) || 0;
        const capStyle1 = document.getElementById('capStyle1').value;
        const sqSize1 = parseFloat(document.getElementById('sqSize1').value) || (D + 4);
        const capStyle2 = document.getElementById('capStyle2').value;
        const sqSize2 = parseFloat(document.getElementById('sqSize2').value) || (D + 4);
        const seam = parseFloat(document.getElementById('seam').value) || 0;

        // Pure Bootstrap 5 display toggles
        document.getElementById('sqSizeContainer1').classList.toggle('d-none', capStyle1 !== 'hole');
        document.getElementById('sqSizeContainer2').classList.toggle('d-none', capStyle2 !== 'hole');

        const circumference = Math.PI * D;

        currentData = { D, H, capStyle1, sqSize1, capStyle2, sqSize2, seam, circumference };

        document.getElementById('output').innerHTML = `
            <div>Stitch Circumference: <strong>${circumference.toFixed(2)}"</strong></div>
            <div>Wall Cut Width: <strong>${(circumference + seam * 2).toFixed(2)}"</strong></div>
            <div>Wall Cut Height: <strong>${(H + seam * 2).toFixed(2)}"</strong></div>
        `;

        drawCanvas();
    }

    function drawTick(ctx, x, y, angle, depth, scale) {
        ctx.beginPath();
        ctx.moveTo(x - Math.cos(angle) * depth * scale, y - Math.sin(angle) * depth * scale);
        ctx.lineTo(x + Math.cos(angle) * depth * scale, y + Math.sin(angle) * depth * scale);
        ctx.stroke();
    }

    function drawCanvas() {
        canvas.width = 800;
        canvas.height = 600;
        const { D, H, capStyle1, sqSize1, capStyle2, sqSize2, seam, circumference } = currentData;
        
        const maxEnd1 = capStyle1 === 'hole' ? sqSize1 : D + seam * 2;
        const maxEnd2 = capStyle2 === 'hole' ? sqSize2 : D + seam * 2;
        
        const maxPatternWidth = Math.max(circumference + seam * 2, maxEnd1 + maxEnd2 + 60);
        const maxPatternHeight = (H + seam * 2) + Math.max(maxEnd1, maxEnd2) + 60;
        
        const scale = Math.min((canvas.width - 40) / maxPatternWidth, (canvas.height - 40) / maxPatternHeight);
        const cx = canvas.width / 2;
        
        const tickDepth = seam * 0.5;

        ctx.clearRect(0,0, canvas.width, canvas.height);
        
        // --- 1. DRAW TUBE WALL PATTERN ---
        const rectY = 40;
        const rectW = circumference * scale;
        const rectH = H * scale;
        const cutW = (circumference + seam * 2) * scale;
        const cutH = (H + seam * 2) * scale;
        const rectX = cx - (cutW / 2);

        // Cut Line
        ctx.beginPath();
        ctx.strokeStyle = '#198754'; // Bootstrap Success
        ctx.lineWidth = 2;
        ctx.rect(rectX, rectY, cutW, cutH);
        ctx.fillStyle = 'rgba(25, 135, 84, 0.05)';
        ctx.fill();
        ctx.stroke();

        // Stitch Line
        ctx.beginPath();
        ctx.setLineDash([5, 5]);
        ctx.strokeStyle = '#146c43';
        ctx.rect(rectX + seam * scale, rectY + seam * scale, rectW, rectH);
        ctx.stroke();
        ctx.setLineDash([]);

        // Wall Quarter Marks
        ctx.strokeStyle = '#198754';
        for (let i = 0; i <= 4; i++) {
            const xOffset = rectX + seam * scale + (rectW * (i / 4));
            // Top ticks
            drawTick(ctx, xOffset, rectY + seam * scale, Math.PI / 2, tickDepth, scale);
            // Bottom ticks
            drawTick(ctx, xOffset, rectY + cutH - seam * scale, Math.PI / 2, tickDepth, scale);
        }

        // --- 2. DRAW END CAPS ---
        const capCenterY = rectY + cutH + Math.max(maxEnd1, maxEnd2) * scale / 2 + 20;
        const cap1X = cx - (maxEnd1 * scale / 2) - 15;
        const cap2X = cx + (maxEnd2 * scale / 2) + 15;

        const drawEndPiece = (style, sqSize, x, y, title) => {
            ctx.strokeStyle = '#212529';
            if (style === 'cap') {
                ctx.beginPath();
                ctx.arc(x, y, (D/2 + seam) * scale, 0, Math.PI * 2);
                ctx.stroke();
                
                for(let i=0; i<4; i++) {
                    const angle = i * Math.PI/2;
                    drawTick(ctx, x + Math.cos(angle)*(D/2 + seam)*scale, y + Math.sin(angle)*(D/2 + seam)*scale, angle, tickDepth, scale);
                }

                ctx.beginPath();
                ctx.setLineDash([5, 5]);
                ctx.arc(x, y, (D/2) * scale, 0, Math.PI * 2);
                ctx.stroke();
            } else {
                ctx.beginPath();
                ctx.rect(x - (sqSize*scale/2), y - (sqSize*scale/2), sqSize*scale, sqSize*scale);
                ctx.stroke();
                
                const holeRadius = Math.max(0.1, D/2 - seam);
                ctx.beginPath();
                ctx.arc(x, y, holeRadius * scale, 0, Math.PI * 2);
                ctx.stroke();

                for(let i=0; i<4; i++) {
                    const angle = i * Math.PI/2;
                    drawTick(ctx, x + Math.cos(angle)*holeRadius*scale, y + Math.sin(angle)*holeRadius*scale, angle, tickDepth, scale);
                }
                
                ctx.beginPath();
                ctx.setLineDash([5, 5]);
                ctx.arc(x, y, (D/2) * scale, 0, Math.PI * 2);
                ctx.stroke();
            }
            ctx.setLineDash([]);

            // Labels
            ctx.fillStyle = '#212529';
            ctx.font = 'bold 12px sans-serif';
            ctx.fillText(title, x, y - (style === 'hole' ? sqSize*scale/2 + 15 : D/2*scale + seam*scale + 15));
            ctx.font = '12px sans-serif';
            ctx.fillText(`Stitch: Ø${D}"`, x, y + (style === 'hole' ? 0 : 5));
        };

        drawEndPiece(capStyle1, sqSize1, cap1X, capCenterY, capStyle1 === 'cap' ? 'END CAP 1' : 'END RECEIVER 1');
        drawEndPiece(capStyle2, sqSize2, cap2X, capCenterY, capStyle2 === 'cap' ? 'END CAP 2' : 'END RECEIVER 2');

        // --- 3. WALL LABELS & SCALE ---
        ctx.fillStyle = '#212529';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = 'bold 14px sans-serif';
        ctx.fillText('TUBE WALL', cx, rectY + cutH / 2 - 12);
        ctx.font = '12px sans-serif';
        ctx.fillText(`Includes ${seam}" Seam Allowance`, cx, rectY + cutH / 2 + 5);

        const sSize = 1 * scale; 
        ctx.strokeStyle = '#000';
        ctx.strokeRect(20, 20, sSize, sSize);
        ctx.textAlign = 'left';
        ctx.fillText('1x1" SCALE', 20 + sSize + 10, 20 + sSize/2);
    }

    function getSvgTick(x, y, angle, depth) {
        return `M ${x - Math.cos(angle) * depth} ${y - Math.sin(angle) * depth} L ${x + Math.cos(angle) * depth} ${y + Math.sin(angle) * depth} `;
    }

    function exportSVG() {
        const { D, H, capStyle1, sqSize1, capStyle2, sqSize2, seam, circumference } = currentData;
        
        const maxEnd1 = capStyle1 === 'hole' ? sqSize1 : D + seam*2;
        const maxEnd2 = capStyle2 === 'hole' ? sqSize2 : D + seam*2;

        const widthIn = Math.max(circumference + seam*2, maxEnd1 + maxEnd2 + 1) + 2;
        const heightIn = (H + seam*2) + Math.max(maxEnd1, maxEnd2) + 3;
        const tickDepth = seam * 0.5;

        let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${widthIn}in" height="${heightIn}in" viewBox="0 0 ${widthIn} ${heightIn}">`;

        // 1. TUBE WALL
        const wallX = 1;
        const wallY = 1;
        const cutW = circumference + seam * 2;
        const cutH = H + seam * 2;

        svg += `<rect x="${wallX}" y="${wallY}" width="${cutW}" height="${cutH}" fill="none" stroke="green" stroke-width="0.02" />`;
        svg += `<rect x="${wallX + seam}" y="${wallY + seam}" width="${circumference}" height="${H}" fill="none" stroke="green" stroke-dasharray="0.1, 0.1" stroke-width="0.01" />`;

        let wallTicks = "";
        for (let i = 0; i <= 4; i++) {
            const xOffset = wallX + seam + (circumference * (i / 4));
            wallTicks += getSvgTick(xOffset, wallY + seam, Math.PI / 2, tickDepth);
            wallTicks += getSvgTick(xOffset, wallY + cutH - seam, Math.PI / 2, tickDepth);
        }
        svg += `<path d="${wallTicks}" fill="none" stroke="green" stroke-width="0.02" />`;

        // 2. END CAPS
        const capY = wallY + cutH + Math.max(maxEnd1, maxEnd2)/2 + 1;
        const cap1X = wallX + maxEnd1/2;
        const cap2X = wallX + maxEnd1 + maxEnd2/2 + 1;

        const buildSvgEndPiece = (style, sqSize, x, y, title) => {
            let out = "";
            let ticks = "";
            if (style === 'cap') {
                out += `<circle cx="${x}" cy="${y}" r="${D/2 + seam}" fill="none" stroke="black" stroke-width="0.02" />`;
                for(let i=0; i<4; i++) {
                    const angle = i * Math.PI/2;
                    ticks += getSvgTick(x + Math.cos(angle)*(D/2 + seam), y + Math.sin(angle)*(D/2 + seam), angle, tickDepth);
                }
                out += `<circle cx="${x}" cy="${y}" r="${D/2}" fill="none" stroke="black" stroke-dasharray="0.1, 0.1" stroke-width="0.01" />`;
            } else {
                out += `<rect x="${x - sqSize/2}" y="${y - sqSize/2}" width="${sqSize}" height="${sqSize}" fill="none" stroke="black" stroke-width="0.02" />`;
                const holeRad = Math.max(0.01, D/2 - seam);
                out += `<circle cx="${x}" cy="${y}" r="${holeRad}" fill="none" stroke="black" stroke-width="0.02" />`;
                for(let i=0; i<4; i++) {
                    const angle = i * Math.PI/2;
                    ticks += getSvgTick(x + Math.cos(angle)*holeRad, y + Math.sin(angle)*holeRad, angle, tickDepth);
                }
                out += `<circle cx="${x}" cy="${y}" r="${D/2}" fill="none" stroke="black" stroke-dasharray="0.1, 0.1" stroke-width="0.01" />`;
            }
            out += `<path d="${ticks}" fill="none" stroke="black" stroke-width="0.02" />`;
            
            const textOffset = style === 'hole' ? sqSize/2 : D/2 + seam;
            out += `<text x="${x}" y="${y - textOffset - 0.2}" font-family="sans-serif" font-size="0.15" font-weight="bold" fill="black" text-anchor="middle">${title}</text>`;
            return out;
        };

        svg += buildSvgEndPiece(capStyle1, sqSize1, cap1X, capY, capStyle1 === 'cap' ? 'END CAP 1' : 'END RECEIVER 1');
        svg += buildSvgEndPiece(capStyle2, sqSize2, cap2X, capY, capStyle2 === 'cap' ? 'END CAP 2' : 'END RECEIVER 2');

        // 3. LABELS & TEXT
        svg += `<text x="${wallX + cutW/2}" y="${wallY + cutH/2 - 0.1}" font-family="sans-serif" font-size="0.2" font-weight="bold" fill="black" text-anchor="middle">TUBE WALL</text>`;
        svg += `<text x="${wallX + cutW/2}" y="${wallY + cutH/2 + 0.15}" font-family="sans-serif" font-size="0.15" fill="black" text-anchor="middle">Includes ${seam}" Seam Allowance</text>`;

        // 4. SCALE CHECK
        svg += `<rect x="${wallX}" y="${wallY - 0.8}" width="1" height="1" fill="none" stroke="black" stroke-width="0.01" />`;
        svg += `<text x="${wallX + 1.2}" y="${wallY - 0.2}" font-family="sans-serif" font-size="0.18" font-weight="bold" fill="black">1x1" SCALE CHECK</text>`;

        svg += `</svg>`;

        const blob = new Blob([svg], {type: 'image/svg+xml'});
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `fabric-tube-template.svg`;
        link.click();
    }

    inputs.forEach(id => document.getElementById(id).addEventListener('input', calculate));
    calculate();
</script>
