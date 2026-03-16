---
title: 07.02 Sewing Tubes to Circles and Holes
date: 2026-03-16T09:00:00-04:00
lastmod: 2026-03-16T07:51:21-04:00
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

<div class="container py-4 py-lg-5">
    <div class="row g-4">
      <div class="col-12">
        <div class="border rounded-4 p-4 bg-body">
          <h1 class="display-6 fw-semibold mb-3">Tube Pattern Piece Calculator</h1>
          <p class="lead mb-0">
            Enter the <strong>finished tube diameter</strong> and <strong>finished tube length</strong> to calculate the cut sizes for the tube body,
            the end cap, and the insertion hole in a larger fabric panel.
          </p>
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div class="card h-100">
          <div class="card-header">
            <h2 class="h5 mb-0">Inputs</h2>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <label for="diameter" class="form-label fw-semibold">Finished tube diameter</label>
              <input id="diameter" type="number" min="0" step="0.01" value="8" class="form-control" />
              <div class="form-text">This is the sewn diameter of the finished tube.</div>
            </div>
            <div class="mb-3">
              <label for="length" class="form-label fw-semibold">Finished tube length</label>
              <input id="length" type="number" min="0" step="0.01" value="12" class="form-control" />
              <div class="form-text">This is the sewn length from one seam line to the other.</div>
            </div>
            <div class="row g-3">
              <div class="col-12 col-sm-6 col-lg-12 col-xl-6">
                <label for="seam" class="form-label fw-semibold">Seam allowance</label>
                <input id="seam" type="number" min="0" step="0.01" value="0.5" class="form-control" />
                <div class="form-text">Default is 0.5 inches.</div>
              </div>
              <div class="col-12 col-sm-6 col-lg-12 col-xl-6">
                <label for="decimals" class="form-label fw-semibold">Round display to</label>
                <select id="decimals" class="form-select">
                  <option value="2" selected>2 decimals</option>
                  <option value="3">3 decimals</option>
                  <option value="4">4 decimals</option>
                </select>
                <div class="form-text">Display only. Internal math stays full precision.</div>
              </div>
            </div>
            <div class="d-flex flex-wrap gap-2 mt-4">
              <button class="btn btn-primary" id="resetBtn" type="button">Reset Example</button>
              <button class="btn btn-outline-secondary" id="copyBtn" type="button">Copy Results</button>
            </div>
            <div class="text-danger fw-semibold mt-3" id="error" aria-live="polite"></div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-8">
        <div class="card h-100">
          <div class="card-header">
            <h2 class="h5 mb-0">Calculated pattern pieces</h2>
          </div>
          <div class="card-body">
            <div class="alert alert-primary mb-4" role="note">
              <div><strong>Tube body cut width</strong> = π × finished diameter + 2 × seam allowance</div>
              <div><strong>Tube body cut height</strong> = finished length + 2 × seam allowance</div>
              <div><strong>Tube cap cut diameter</strong> = finished diameter + 2 × seam allowance</div>
              <div><strong>Insertion hole cut diameter</strong> = finished diameter − 2 × seam allowance</div>
            </div>
            <div class="row g-3 mb-4">
              <div class="col-12 col-md-4">
                <div class="card h-100">
                  <div class="card-body">
                    <div class="badge text-bg-success mb-2">Tube body</div>
                    <h3 class="h6">Cut rectangle</h3>
                    <div class="fs-3 fw-bold" id="bodyRect">—</div>
                    <p class="text-body-secondary mb-0" id="bodyRectDetail">—</p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div class="card h-100">
                  <div class="card-body">
                    <div class="badge text-bg-success mb-2">End cap</div>
                    <h3 class="h6">Cut circle diameter</h3>
                    <div class="fs-3 fw-bold" id="capDia">—</div>
                    <p class="text-body-secondary mb-0" id="capDetail">—</p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div class="card h-100">
                  <div class="card-body">
                    <div class="badge text-bg-success mb-2">Insertion opening</div>
                    <h3 class="h6">Cut hole diameter</h3>
                    <div class="fs-3 fw-bold" id="holeDia">—</div>
                    <p class="text-body-secondary mb-0" id="holeDetail">—</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="table-responsive mb-4">
              <table class="table table-bordered align-middle mb-0">
                <thead>
                  <tr>
                    <th>Pattern piece</th>
                    <th>Cut size</th>
                    <th>What it does</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Tube Body</strong></td>
                    <td id="rowBody">—</td>
                    <td>Roll into a cylinder and sew the short ends together.</td>
                  </tr>
                  <tr>
                    <td><strong>Tube Cap</strong></td>
                    <td id="rowCap">—</td>
                    <td>Sews onto one end of the tube to close it.</td>
                  </tr>
                  <tr>
                    <td><strong>Insertion Hole</strong></td>
                    <td id="rowHole">—</td>
                    <td>Cut this opening in the larger fabric piece, then sew the other end of the tube into it.</td>
                  </tr>
                  <tr>
                    <td><strong>Finished Circumference</strong></td>
                    <td id="rowCirc">—</td>
                    <td>This is the finished seam-line width that the tube wraps around.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card mb-4">
              <div class="card-body">
                <h3 class="h6 mb-3">Diagram</h3>
                <svg viewBox="0 0 860 430" aria-labelledby="diagramTitle diagramDesc" role="img">
                  <title id="diagramTitle">Tube pattern diagram</title>
                  <desc id="diagramDesc">A diagram showing the body rectangle, tube cap circle, and smaller insertion hole.</desc>
                  <rect x="20" y="24" width="390" height="250" rx="18" fill="none" stroke="currentColor" stroke-opacity="0.25" stroke-width="2"/>
                  <text x="44" y="60" font-size="22" font-weight="700" fill="currentColor">Tube body rectangle</text>
                  <rect x="70" y="95" width="290" height="115" rx="10" fill="none" stroke="currentColor" stroke-width="3"/>
                  <line x1="70" y1="230" x2="360" y2="230" stroke="currentColor" stroke-width="2" stroke-dasharray="6 6"/>
                  <line x1="380" y1="95" x2="380" y2="210" stroke="currentColor" stroke-width="2" stroke-dasharray="6 6"/>
                  <text x="172" y="248" text-anchor="middle" font-size="17" fill="currentColor">width = circumference + seam allowance</text>
                  <text x="398" y="158" font-size="17" fill="currentColor" transform="rotate(90 398 158)">height = finished length + seam allowance</text>
                  <rect x="438" y="24" width="402" height="382" rx="18" fill="none" stroke="currentColor" stroke-opacity="0.25" stroke-width="2"/>
                  <text x="462" y="60" font-size="22" font-weight="700" fill="currentColor">Circular pieces</text>
                  <circle cx="555" cy="180" r="88" fill="none" stroke="currentColor" stroke-width="3"/>
                  <circle cx="555" cy="180" r="64" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 6"/>
                  <text x="555" y="295" text-anchor="middle" font-size="18" font-weight="700" fill="currentColor">Tube cap</text>
                  <text x="555" y="320" text-anchor="middle" font-size="15" fill="currentColor" opacity="0.7">cut larger than finished diameter</text>
                  <rect x="650" y="95" width="130" height="130" fill="none" stroke="currentColor" stroke-opacity="0.25" stroke-width="2"/>
                  <circle cx="715" cy="160" r="40" fill="none" stroke="currentColor" stroke-width="3"/>
                  <circle cx="715" cy="160" r="64" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 6" opacity="0.4"/>
                  <text x="715" y="295" text-anchor="middle" font-size="18" font-weight="700" fill="currentColor">Insertion hole</text>
                  <text x="715" y="320" text-anchor="middle" font-size="15" fill="currentColor" opacity="0.7">cut smaller than finished diameter</text>
                  <text x="555" y="180" text-anchor="middle" font-size="16" fill="currentColor">finished seam line</text>
                  <text x="715" y="160" text-anchor="middle" font-size="14" fill="currentColor">cut hole</text>
                </svg>
              </div>
            </div>
            <div class="alert alert-warning mb-3" role="note">
              The cap and the insertion hole are cut to different sizes because the seam allowance is added in opposite directions.
              The <strong>cap</strong> is cut larger than the finished diameter, while the <strong>hole</strong> is cut smaller.
              What must match is the <strong>seam line</strong>, not the raw cut edge.
            </div>
            <p class="text-body-secondary mb-0" id="summary"></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script>
    (function () {
      const diameterEl = document.getElementById('diameter');
      const lengthEl = document.getElementById('length');
      const seamEl = document.getElementById('seam');
      const decimalsEl = document.getElementById('decimals');
      const resetBtn = document.getElementById('resetBtn');
      const copyBtn = document.getElementById('copyBtn');
      const errorEl = document.getElementById('error');

      const bodyRectEl = document.getElementById('bodyRect');
      const bodyRectDetailEl = document.getElementById('bodyRectDetail');
      const capDiaEl = document.getElementById('capDia');
      const capDetailEl = document.getElementById('capDetail');
      const holeDiaEl = document.getElementById('holeDia');
      const holeDetailEl = document.getElementById('holeDetail');
      const rowBodyEl = document.getElementById('rowBody');
      const rowCapEl = document.getElementById('rowCap');
      const rowHoleEl = document.getElementById('rowHole');
      const rowCircEl = document.getElementById('rowCirc');
      const summaryEl = document.getElementById('summary');

      function n(value) {
        return Number(value);
      }

      function fmt(value, decimals) {
        return Number(value).toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }

      function update() {
        const d = n(diameterEl.value);
        const len = n(lengthEl.value);
        const sa = n(seamEl.value);
        const decimals = parseInt(decimalsEl.value, 10);

        errorEl.textContent = '';

        if (![d, len, sa].every(Number.isFinite)) {
          errorEl.textContent = 'Please enter valid numeric values.';
          return;
        }

        if (d <= 0) {
          errorEl.textContent = 'Finished tube diameter must be greater than 0.';
          return;
        }

        if (len <= 0) {
          errorEl.textContent = 'Finished tube length must be greater than 0.';
          return;
        }

        if (sa < 0) {
          errorEl.textContent = 'Seam allowance cannot be negative.';
          return;
        }

        const circumference = Math.PI * d;
        const bodyCutWidth = circumference + (2 * sa);
        const bodyCutHeight = len + (2 * sa);
        const capCutDiameter = d + (2 * sa);
        const holeCutDiameter = d - (2 * sa);

        if (holeCutDiameter <= 0) {
          errorEl.textContent = 'The seam allowance is too large for this diameter. The insertion hole would be zero or negative.';
        }

        bodyRectEl.textContent = `${fmt(bodyCutWidth, decimals)} × ${fmt(bodyCutHeight, decimals)} in`;
        bodyRectDetailEl.textContent = `Finished rectangle before seam allowance: ${fmt(circumference, decimals)} × ${fmt(len, decimals)} in`;

        capDiaEl.textContent = `${fmt(capCutDiameter, decimals)} in`;
        capDetailEl.textContent = `Finished sewn diameter: ${fmt(d, decimals)} in`;

        holeDiaEl.textContent = holeCutDiameter > 0 ? `${fmt(holeCutDiameter, decimals)} in` : 'Invalid';
        holeDetailEl.textContent = `Cut smaller so the sewn opening finishes at ${fmt(d, decimals)} in`;

        rowBodyEl.textContent = `${fmt(bodyCutWidth, decimals)} in wide × ${fmt(bodyCutHeight, decimals)} in tall`;
        rowCapEl.textContent = `${fmt(capCutDiameter, decimals)} in diameter circle`;
        rowHoleEl.textContent = holeCutDiameter > 0 ? `${fmt(holeCutDiameter, decimals)} in diameter cut hole` : 'Invalid with current inputs';
        rowCircEl.textContent = `${fmt(circumference, decimals)} in`;

        summaryEl.innerHTML = `
          For a finished tube diameter of <strong>${fmt(d, decimals)} in</strong> and a finished length of <strong>${fmt(len, decimals)} in</strong>,
          cut the tube body as a <strong>${fmt(bodyCutWidth, decimals)} × ${fmt(bodyCutHeight, decimals)} in</strong> rectangle,
          cut the cap as a <strong>${fmt(capCutDiameter, decimals)} in</strong> diameter circle,
          and cut the insertion opening as a <strong>${holeCutDiameter > 0 ? fmt(holeCutDiameter, decimals) + ' in' : 'non-usable size'}</strong> diameter hole.
        `;
      }

      function resetExample() {
        diameterEl.value = '8';
        lengthEl.value = '12';
        seamEl.value = '0.5';
        decimalsEl.value = '2';
        update();
      }

      async function copyResults() {
        const text = [
          'Tube Pattern Piece Calculator Results',
          `Finished tube diameter: ${diameterEl.value} in`,
          `Finished tube length: ${lengthEl.value} in`,
          `Seam allowance: ${seamEl.value} in`,
          '',
          `Tube body cut rectangle: ${rowBodyEl.textContent}`,
          `Tube cap cut size: ${rowCapEl.textContent}`,
          `Insertion hole cut size: ${rowHoleEl.textContent}`,
          `Finished circumference: ${rowCircEl.textContent}`
        ].join('\n');

        try {
          await navigator.clipboard.writeText(text);
          copyBtn.textContent = 'Copied';
          setTimeout(() => { copyBtn.textContent = 'Copy Results'; }, 1400);
        } catch (err) {
          copyBtn.textContent = 'Copy failed';
          setTimeout(() => { copyBtn.textContent = 'Copy Results'; }, 1400);
        }
      }

      [diameterEl, lengthEl, seamEl, decimalsEl].forEach(el => el.addEventListener('input', update));
      resetBtn.addEventListener('click', resetExample);
      copyBtn.addEventListener('click', copyResults);

      update();
    })();
  </script>
