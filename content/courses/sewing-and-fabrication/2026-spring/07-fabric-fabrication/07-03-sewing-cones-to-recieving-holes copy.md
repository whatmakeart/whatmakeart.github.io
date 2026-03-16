---
title: 07.03 Sewing Cones to Receiving Holes
date: 2026-03-16T09:00:00-04:00
lastmod: 2026-03-16T08:12:27-04:00
---

Sewing cones, or spikes, into receiving fabric holes requires calculation of the diameters and seam allowances.

<div class="container py-4">
    <div class="card shadow-sm">
        <div class="card-header bg-primary text-white">
            <h1 class="h5 mb-0">Fabric Cone & Pillow Template Generator</h1>
        </div>
        <div class="card-body">
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="mb-3">
                        <label class="form-label fw-bold small text-uppercase">Cone Style</label>
                        <select id="coneType" class="form-select">
                            <option value="pointy">Pointy (Full Cone)</option>
                            <option value="truncated">Truncated (Flat Top)</option>
                        </select>
                    </div>
                    <hr class="my-3">
                    <div class="mb-3">
                        <label class="form-label fw-bold small text-uppercase text-primary">Base Diameter (D)</label>
                        <input type="number" id="baseDiam" class="form-control" value="10" step="0.1">
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-bold small text-uppercase">Base Piece Style</label>
                        <select id="baseStyle" class="form-select">
                            <option value="cap">Solid Cap (Cone Bottom)</option>
                            <option value="hole">Receiver Hole in Square Panel</option>
                        </select>
                    </div>
                    <div class="mb-3" id="baseSqSizeContainer" style="display:none;">
                        <label class="form-label fw-bold small text-uppercase">Base Square Size</label>
                        <input type="number" id="baseSqSize" class="form-control" value="12" step="0.5">
                    </div>
                    <hr class="my-3" id="topDivider" style="display:none;">
                    <div id="topDiamContainer" style="display:none;">
                        <div class="mb-3">
                            <label class="form-label fw-bold small text-uppercase text-primary">Top Diameter (d)</label>
                            <input type="number" id="topDiam" class="form-control" value="4" step="0.1">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-bold small text-uppercase">Top Piece Style</label>
                            <select id="topStyle" class="form-select">
                                <option value="cap">Solid Cap (Cone Top)</option>
                                <option value="hole">Receiver Hole in Square Panel</option>
                            </select>
                        </div>
                        <div class="mb-3" id="topSqSizeContainer" style="display:none;">
                            <label class="form-label fw-bold small text-uppercase">Top Square Size</label>
                            <input type="number" id="topSqSize" class="form-control" value="6" step="0.5">
                        </div>
                    </div>
                    <hr class="my-3">
                    <div class="mb-3">
                        <label class="form-label fw-bold small text-uppercase">Vertical Height (H)</label>
                        <input type="number" id="height" class="form-control" value="8" step="0.1">
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-bold small text-uppercase">Seam Allowance (Inches)</label>
                        <input type="number" id="seam" class="form-control" value="0.5" step="0.0625">
                    </div>
                    <div id="output" class="alert alert-secondary py-2 small font-monospace"></div>
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
                        Solid Blue/Black: Cut Lines | Dashed: Stitch Lines | Ticks: Quarter Marks
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    const inputs = ['coneType', 'baseDiam', 'baseStyle', 'baseSqSize', 'topDiam', 'topStyle', 'topSqSize', 'height', 'seam'];
    const canvas = document.getElementById('coneCanvas');
    const ctx = canvas.getContext('2d');
    let currentData = {};

    function calculate() {
        const type = document.getElementById('coneType').value;
        const D = parseFloat(document.getElementById('baseDiam').value) || 0;
        const baseStyle = document.getElementById('baseStyle').value;
        const baseSqSize = parseFloat(document.getElementById('baseSqSize').value) || (D + 4);
        
        let d = type === 'pointy' ? 0 : parseFloat(document.getElementById('topDiam').value) || 0;
        const topStyle = document.getElementById('topStyle').value;
        const topSqSize = parseFloat(document.getElementById('topSqSize').value) || (d + 4);
        
        const H = parseFloat(document.getElementById('height').value) || 0;
        const seam = parseFloat(document.getElementById('seam').value) || 0;

        if (d >= D) d = D * 0.99;
        
        // UI Toggles
        document.getElementById('baseSqSizeContainer').style.display = baseStyle === 'hole' ? 'block' : 'none';
        
        const isTruncated = type === 'truncated';
        document.getElementById('topDiamContainer').style.display = isTruncated ? 'block' : 'none';
        document.getElementById('topDivider').style.display = isTruncated ? 'block' : 'none';
        document.getElementById('topSqSizeContainer').style.display = topStyle === 'hole' ? 'block' : 'none';

        const slant_seg = Math.sqrt(Math.pow((D/2) - (d/2), 2) + Math.pow(H, 2));
        const Ro = (D / 2) * (slant_seg / ((D - d) / 2));
        const Ri = (d / 2) * (slant_seg / ((D - d) / 2));
        const angle = (D / (2 * Ro)) * 360;

        currentData = { type, baseStyle, baseSqSize, topStyle, topSqSize, D, d, H, seam, Ro, Ri, angle };

        document.getElementById('output').innerHTML = `
            <div>Outer Rad (Stitch): <strong>${Ro.toFixed(2)}"</strong></div>
            ${Ri > 0 ? `<div>Inner Rad (Stitch): <strong>${Ri.toFixed(2)}"</strong></div>` : ''}
            <div>Sweep Angle: <strong>${angle.toFixed(1)}°</strong></div>
        `;

        drawCanvas();
    }

    function getGeometry(data) {
        const { Ro, Ri, angle, seam } = data;
        const sA = (90 - angle / 2) * (Math.PI / 180);
        const eA = (90 + angle / 2) * (Math.PI / 180);

        const p1 = { x: Ro * Math.cos(sA), y: Ro * Math.sin(sA) };
        const p2 = { x: Ro * Math.cos(eA), y: Ro * Math.sin(eA) };
        const p3 = { x: Ri * Math.cos(eA), y: Ri * Math.sin(eA) };
        const p4 = { x: Ri * Math.cos(sA), y: Ri * Math.sin(sA) };

        const dx1 = seam * Math.cos(sA - Math.PI / 2);
        const dy1 = seam * Math.sin(sA - Math.PI / 2);
        const dx2 = seam * Math.cos(eA + Math.PI / 2);
        const dy2 = seam * Math.sin(eA + Math.PI / 2);

        const Ro_cut = Ro + seam;
        const Ri_cut = Ri > seam ? Ri - seam : 0;

        const c1 = { x: Ro_cut * Math.cos(sA) + dx1, y: Ro_cut * Math.sin(sA) + dy1 };
        const c2 = { x: Ro_cut * Math.cos(eA) + dx2, y: Ro_cut * Math.sin(eA) + dy2 };
        const c3 = { x: Ri_cut * Math.cos(eA) + dx2, y: Ri_cut * Math.sin(eA) + dy2 };
        const c4 = { x: Ri_cut * Math.cos(sA) + dx1, y: Ri_cut * Math.sin(sA) + dy1 };

        const radOuter = Math.hypot(c1.x, c1.y);
        const sA_outer = Math.atan2(c1.y, c1.x);
        const eA_outer = Math.atan2(c2.y, c2.x);

        let radInner = 0, sA_inner = 0, eA_inner = 0;
        if (Ri_cut > 0) {
            radInner = Math.hypot(c4.x, c4.y);
            sA_inner = Math.atan2(c4.y, c4.x);
            eA_inner = Math.atan2(c3.y, c3.x);
        }

        return { sA, eA, p1, p2, p3, p4, c1, c2, c3, c4, radOuter, sA_outer, eA_outer, radInner, sA_inner, eA_inner };
    }

    // Canvas helper for notches
    function drawTick(ctx, cx, cy, rad, angle, isInner, depth, scale) {
        const r1 = rad * scale;
        const r2 = (isInner ? rad + depth : rad - depth) * scale;
        ctx.beginPath();
        ctx.moveTo(cx + r1 * Math.cos(angle), cy + r1 * Math.sin(angle));
        ctx.lineTo(cx + r2 * Math.cos(angle), cy + r2 * Math.sin(angle));
        ctx.stroke();
    }

    function drawCanvas() {
        canvas.width = 800;
        canvas.height = 600;
        const { type, baseStyle, baseSqSize, topStyle, topSqSize, D, d, seam, Ro, Ri, angle } = currentData;
        const geo = getGeometry(currentData);
        
        const maxBase = baseStyle === 'hole' ? baseSqSize : D + seam*2;
        const maxTop = d > 0 ? (topStyle === 'hole' ? topSqSize : d + seam*2) : 0;
        
        // Find maximum dimension to set scale properly
        const maxPatternWidth = Math.max(geo.radOuter * 2, maxBase + maxTop + 60);
        const maxPatternHeight = geo.radOuter + Math.max(maxBase, maxTop) + 60;
        
        const scale = Math.min((canvas.width - 40) / maxPatternWidth, (canvas.height - 40) / maxPatternHeight);
        const cx = canvas.width / 2;
        const cy = 100;
        const sX = (val) => cx + val * scale;
        const sY = (val) => cy + val * scale;
        const tickDepth = seam * 0.5;

        ctx.clearRect(0,0, canvas.width, canvas.height);
        
        // --- 1. DRAW WALL PATTERN ---
        ctx.beginPath();
        ctx.strokeStyle = '#0d6efd';
        ctx.lineWidth = 2;
        ctx.arc(cx, cy, geo.radOuter * scale, geo.sA_outer, geo.eA_outer);
        ctx.lineTo(sX(geo.c3.x), sY(geo.c3.y));
        if (geo.radInner > 0) ctx.arc(cx, cy, geo.radInner * scale, geo.eA_inner, geo.sA_inner, true);
        else ctx.lineTo(sX(geo.c4.x), sY(geo.c4.y));
        ctx.closePath();
        ctx.fillStyle = 'rgba(13, 110, 253, 0.05)';
        ctx.fill();
        ctx.stroke();

        // Quarter Marks for Cone Wall
        ctx.strokeStyle = '#0d6efd';
        const span = geo.eA - geo.sA;
        [0.25, 0.5, 0.75].forEach(pct => {
            const ang = geo.sA + span * pct;
            drawTick(ctx, cx, cy, geo.radOuter, ang, false, tickDepth, scale);
            if (geo.radInner > 0) drawTick(ctx, cx, cy, geo.radInner, ang, true, tickDepth, scale);
        });

        // Stitch Lines
        ctx.beginPath();
        ctx.setLineDash([5, 5]);
        ctx.strokeStyle = '#0a58ca';
        ctx.arc(cx, cy, Ro * scale, geo.sA, geo.eA);
        ctx.lineTo(sX(geo.p3.x), sY(geo.p3.y));
        if (Ri > 0) ctx.arc(cx, cy, Ri * scale, geo.eA, geo.sA, true);
        ctx.closePath();
        ctx.stroke();
        ctx.setLineDash([]);

        // --- 2. DRAW BASE PIECE ---
        const capY = cy + (geo.radOuter * scale) + Math.max(maxBase, maxTop)*scale/2 + 20;
        const baseCapX = cx - (maxBase*scale/2) - 15;
        
        ctx.strokeStyle = '#212529';
        if (baseStyle === 'cap') {
            ctx.beginPath();
            ctx.arc(baseCapX, capY, (D/2 + seam) * scale, 0, Math.PI * 2);
            ctx.stroke();
            
            for(let i=0; i<4; i++) drawTick(ctx, baseCapX, capY, D/2 + seam, i * Math.PI/2, false, tickDepth, scale);

            ctx.beginPath();
            ctx.setLineDash([5, 5]);
            ctx.arc(baseCapX, capY, (D/2) * scale, 0, Math.PI * 2);
            ctx.stroke();
        } else {
            ctx.beginPath();
            ctx.rect(baseCapX - (baseSqSize*scale/2), capY - (baseSqSize*scale/2), baseSqSize*scale, baseSqSize*scale);
            ctx.stroke();
            
            const holeRadius = Math.max(0.1, D/2 - seam);
            ctx.beginPath();
            ctx.arc(baseCapX, capY, holeRadius * scale, 0, Math.PI * 2);
            ctx.stroke();

            for(let i=0; i<4; i++) drawTick(ctx, baseCapX, capY, holeRadius, i * Math.PI/2, true, tickDepth, scale);
            
            ctx.beginPath();
            ctx.setLineDash([5, 5]);
            ctx.arc(baseCapX, capY, (D/2) * scale, 0, Math.PI * 2);
            ctx.stroke();
        }
        ctx.setLineDash([]);

        // --- 3. DRAW TOP PIECE ---
        let topCapX = 0;
        if (d > 0) {
            topCapX = cx + (maxTop*scale/2) + 15;
            
            if (topStyle === 'cap') {
                ctx.beginPath();
                ctx.arc(topCapX, capY, (d/2 + seam) * scale, 0, Math.PI * 2);
                ctx.stroke();
                
                for(let i=0; i<4; i++) drawTick(ctx, topCapX, capY, d/2 + seam, i * Math.PI/2, false, tickDepth, scale);

                ctx.beginPath();
                ctx.setLineDash([5, 5]);
                ctx.arc(topCapX, capY, (d/2) * scale, 0, Math.PI * 2);
                ctx.stroke();
            } else {
                ctx.beginPath();
                ctx.rect(topCapX - (topSqSize*scale/2), capY - (topSqSize*scale/2), topSqSize*scale, topSqSize*scale);
                ctx.stroke();
                
                const holeRadius = Math.max(0.1, d/2 - seam);
                ctx.beginPath();
                ctx.arc(topCapX, capY, holeRadius * scale, 0, Math.PI * 2);
                ctx.stroke();

                for(let i=0; i<4; i++) drawTick(ctx, topCapX, capY, holeRadius, i * Math.PI/2, true, tickDepth, scale);
                
                ctx.beginPath();
                ctx.setLineDash([5, 5]);
                ctx.arc(topCapX, capY, (d/2) * scale, 0, Math.PI * 2);
                ctx.stroke();
            }
            ctx.setLineDash([]);
        }

        // --- 4. DRAW LABELS & SCALE ---
        ctx.fillStyle = '#212529';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const textY = cy + (Ri + (Ro - Ri) / 2) * scale;
        ctx.font = 'bold 14px sans-serif';
        ctx.fillText('CONE WALL', cx, textY - 12);
        ctx.font = '12px sans-serif';
        ctx.fillText(`Includes ${seam}" Seam Allowance`, cx, textY + 5);

        ctx.font = 'bold 12px sans-serif';
        ctx.fillText(baseStyle === 'cap' ? 'BASE CAP' : 'BASE RECEIVER', baseCapX, capY - (baseStyle === 'hole' ? baseSqSize*scale/2 + 15 : D/2*scale + seam*scale + 15));
        ctx.font = '12px sans-serif';
        ctx.fillText(`Stitch: Ø${D}"`, baseCapX, capY + (baseStyle === 'hole' ? 0 : 5));

        if (d > 0) {
            ctx.font = 'bold 12px sans-serif';
            ctx.fillText(topStyle === 'cap' ? 'TOP CAP' : 'TOP RECEIVER', topCapX, capY - (topStyle === 'hole' ? topSqSize*scale/2 + 15 : d/2*scale + seam*scale + 15));
            ctx.font = '12px sans-serif';
            ctx.fillText(`Stitch: Ø${d}"`, topCapX, capY + (topStyle === 'hole' ? 0 : 5));
        }

        const sSize = 1 * scale; 
        ctx.strokeStyle = '#000';
        ctx.strokeRect(20, 20, sSize, sSize);
        ctx.textAlign = 'left';
        ctx.fillText('1x1" SCALE', 20 + sSize + 10, 20 + sSize/2);
    }

    // SVG Helper for notches
    function getSvgTick(cx, cy, rad, angle, isInner, depth) {
        const r1 = rad;
        const r2 = isInner ? rad + depth : rad - depth;
        return `M ${cx + r1 * Math.cos(angle)} ${cy + r1 * Math.sin(angle)} L ${cx + r2 * Math.cos(angle)} ${cy + r2 * Math.sin(angle)} `;
    }

    function exportSVG() {
        const { type, baseStyle, baseSqSize, topStyle, topSqSize, D, d, seam, Ro, Ri, angle } = currentData;
        const geo = getGeometry(currentData);
        
        const maxBase = baseStyle === 'hole' ? baseSqSize : D + seam*2;
        const maxTop = d > 0 ? (topStyle === 'hole' ? topSqSize : d + seam*2) : 0;

        const minYOffset = Math.min(0, geo.radOuter * Math.sin(geo.sA_outer), geo.radOuter * Math.sin(geo.eA_outer));
        
        // Calculate safe bounding boxes to prevent clipping
        const cx = Math.max(geo.radOuter, maxBase) + maxTop/2 + 1; 
        const cy = Math.abs(minYOffset) + 1; 
        
        const widthIn = cx * 2.5;
        const heightIn = cy + geo.radOuter + Math.max(maxBase, maxTop) + seam*2 + 4;
        const tickDepth = seam * 0.5;

        let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${widthIn}in" height="${heightIn}in" viewBox="0 0 ${widthIn} ${heightIn}">`;
        let sweepOuter = geo.eA_outer - geo.sA_outer;
        if (sweepOuter < 0) sweepOuter += 2 * Math.PI; 
        const largeArcOuter = sweepOuter > Math.PI ? 1 : 0;

        let sweepInner = geo.eA_inner - geo.sA_inner;
        if (sweepInner < 0) sweepInner += 2 * Math.PI;
        const largeArcInner = sweepInner > Math.PI ? 1 : 0;

        // 1. CONE WALL CUT LINE
        svg += `<path d="M ${cx + geo.c1.x} ${cy + geo.c1.y} A ${geo.radOuter} ${geo.radOuter} 0 ${largeArcOuter} 1 ${cx + geo.c2.x} ${cy + geo.c2.y} L ${cx + geo.c3.x} ${cy + geo.c3.y} `;
        if (geo.radInner > 0) svg += `A ${geo.radInner} ${geo.radInner} 0 ${largeArcInner} 0 ${cx + geo.c4.x} ${cy + geo.c4.y} `;
        else svg += `L ${cx + geo.c4.x} ${cy + geo.c4.y} `;
        svg += `Z" fill="none" stroke="blue" stroke-width="0.02" />`;

        // 1b. CONE WALL QUARTER MARKS
        let coneTicks = "";
        const span = geo.eA - geo.sA;
        [0.25, 0.5, 0.75].forEach(pct => {
            const ang = geo.sA + span * pct;
            coneTicks += getSvgTick(cx, cy, geo.radOuter, ang, false, tickDepth);
            if (geo.radInner > 0) coneTicks += getSvgTick(cx, cy, geo.radInner, ang, true, tickDepth);
        });
        svg += `<path d="${coneTicks}" fill="none" stroke="blue" stroke-width="0.02" />`;

        // 2. CONE WALL STITCH LINE
        svg += `<path d="M ${cx + geo.p1.x} ${cy + geo.p1.y} A ${Ro} ${Ro} 0 ${largeArcOuter} 1 ${cx + geo.p2.x} ${cy + geo.p2.y} L ${cx + geo.p3.x} ${cy + geo.p3.y} `;
        if (Ri > 0) svg += `A ${Ri} ${Ri} 0 ${largeArcInner} 0 ${cx + geo.p4.x} ${cy + geo.p4.y} `;
        svg += `Z" fill="none" stroke="blue" stroke-dasharray="0.1, 0.1" stroke-width="0.01" />`;

        // 3. BASE PIECE
        const capY = cy + geo.radOuter + Math.max(maxBase, maxTop)/2 + 1;
        const baseCapX = cx - maxBase/2 - 0.5;
        let baseTicks = "";

        if (baseStyle === 'cap') {
            svg += `<circle cx="${baseCapX}" cy="${capY}" r="${D/2 + seam}" fill="none" stroke="black" stroke-width="0.02" />`;
            for(let i=0; i<4; i++) baseTicks += getSvgTick(baseCapX, capY, D/2 + seam, i * Math.PI/2, false, tickDepth);
            svg += `<circle cx="${baseCapX}" cy="${capY}" r="${D/2}" fill="none" stroke="black" stroke-dasharray="0.1, 0.1" stroke-width="0.01" />`;
        } else {
            svg += `<rect x="${baseCapX - baseSqSize/2}" y="${capY - baseSqSize/2}" width="${baseSqSize}" height="${baseSqSize}" fill="none" stroke="black" stroke-width="0.02" />`;
            const holeRad = Math.max(0.01, D/2 - seam);
            svg += `<circle cx="${baseCapX}" cy="${capY}" r="${holeRad}" fill="none" stroke="black" stroke-width="0.02" />`;
            for(let i=0; i<4; i++) baseTicks += getSvgTick(baseCapX, capY, holeRad, i * Math.PI/2, true, tickDepth);
            svg += `<circle cx="${baseCapX}" cy="${capY}" r="${D/2}" fill="none" stroke="black" stroke-dasharray="0.1, 0.1" stroke-width="0.01" />`;
        }
        svg += `<path d="${baseTicks}" fill="none" stroke="black" stroke-width="0.02" />`;
        
        // 4. TOP PIECE
        let topCapX = 0;
        if (d > 0) {
            topCapX = cx + maxTop/2 + 0.5;
            let topTicks = "";

            if (topStyle === 'cap') {
                svg += `<circle cx="${topCapX}" cy="${capY}" r="${d/2 + seam}" fill="none" stroke="black" stroke-width="0.02" />`;
                for(let i=0; i<4; i++) topTicks += getSvgTick(topCapX, capY, d/2 + seam, i * Math.PI/2, false, tickDepth);
                svg += `<circle cx="${topCapX}" cy="${capY}" r="${d/2}" fill="none" stroke="black" stroke-dasharray="0.1, 0.1" stroke-width="0.01" />`;
            } else {
                svg += `<rect x="${topCapX - topSqSize/2}" y="${capY - topSqSize/2}" width="${topSqSize}" height="${topSqSize}" fill="none" stroke="black" stroke-width="0.02" />`;
                const holeRad = Math.max(0.01, d/2 - seam);
                svg += `<circle cx="${topCapX}" cy="${capY}" r="${holeRad}" fill="none" stroke="black" stroke-width="0.02" />`;
                for(let i=0; i<4; i++) topTicks += getSvgTick(topCapX, capY, holeRad, i * Math.PI/2, true, tickDepth);
                svg += `<circle cx="${topCapX}" cy="${capY}" r="${d/2}" fill="none" stroke="black" stroke-dasharray="0.1, 0.1" stroke-width="0.01" />`;
            }
            svg += `<path d="${topTicks}" fill="none" stroke="black" stroke-width="0.02" />`;
        }

        // 5. LABELS & TEXT
        const textY = cy + Ri + (Ro - Ri) / 2;
        svg += `<text x="${cx}" y="${textY}" font-family="sans-serif" font-size="0.2" font-weight="bold" fill="black" text-anchor="middle">CONE WALL</text>`;
        svg += `<text x="${cx}" y="${textY + 0.25}" font-family="sans-serif" font-size="0.15" fill="black" text-anchor="middle">Includes ${seam}" Seam Allowance</text>`;
        
        const baseTitle = baseStyle === 'cap' ? 'BASE CAP' : 'BASE RECEIVER';
        const baseOffset = baseStyle === 'hole' ? baseSqSize/2 : D/2 + seam;
        svg += `<text x="${baseCapX}" y="${capY - baseOffset - 0.2}" font-family="sans-serif" font-size="0.15" font-weight="bold" fill="black" text-anchor="middle">${baseTitle}</text>`;
        
        if (d > 0) {
            const topTitle = topStyle === 'cap' ? 'TOP CAP' : 'TOP RECEIVER';
            const topOffset = topStyle === 'hole' ? topSqSize/2 : d/2 + seam;
            svg += `<text x="${topCapX}" y="${capY - topOffset - 0.2}" font-family="sans-serif" font-size="0.15" font-weight="bold" fill="black" text-anchor="middle">${topTitle}</text>`;
        }

        // 6. SCALE CHECK
        svg += `<rect x="0.5" y="0.5" width="1" height="1" fill="none" stroke="black" stroke-width="0.01" />`;
        svg += `<text x="1.7" y="1.05" font-family="sans-serif" font-size="0.18" font-weight="bold" fill="black">1x1" SCALE CHECK</text>`;

        svg += `</svg>`;

        const blob = new Blob([svg], {type: 'image/svg+xml'});
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `fabric-cone-template.svg`;
        link.click();
    }

    inputs.forEach(id => document.getElementById(id).addEventListener('input', calculate));
    calculate();
</script>
