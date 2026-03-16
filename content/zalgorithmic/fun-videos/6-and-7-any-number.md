---
title: 6 and 7 any number
date: 2026-03-16T16:06:22-04:00
lastmod: 2026-03-16T17:30:42-04:00
---

<div class="container py-5 text-center" style="max-width: 900px;">
  <div class="mb-4">
    <h1 class="display-6 fw-bolder text-uppercase text-body-emphasis mb-1">The 6 & 7 Fever Dream</h1>
  </div>
  <div id="memeContainer" class="card shadow-lg border-0 py-5 px-3 mb-4 position-relative" style="transition: background-color 0.4s ease, transform 0.2s ease; min-height: 400px; display: flex; justify-content: center;">
    <div id="cornerDownloadBtn" class="position-absolute top-0 end-0 p-3 opacity-75 fw-bold small text-uppercase" style="cursor: pointer; transition: opacity 0.2s;" title="Click to download JPG" role="button" onmouseover="this.classList.replace('opacity-75', 'opacity-100')" onmouseout="this.classList.replace('opacity-100', 'opacity-75')">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download me-1" viewBox="0 0 16 16" style="margin-top:-3px;">
        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
      </svg>Click to save
    </div>
    <div class="card-body d-flex flex-column justify-content-center align-items-center">
      <div id="memeText" class="display-2 fw-bolder lh-sm text-break pointer-events-none">
        Initializing Math...
      </div>
    </div>
  </div>
  <div class="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 mt-4">
    <button id="toggleBtn" class="btn btn-dark border border-3 border-secondary btn-lg rounded-pill px-4 shadow-sm fw-bold text-uppercase">
      Pause Madness
    </button>
    <button id="copyBtn" class="btn btn-outline-primary btn-lg rounded-pill px-4 shadow-sm fw-bold">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard me-2" viewBox="0 0 16 16" style="margin-top:-3px;">
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
      </svg>Copy Sentence
    </button>
    <button id="downloadBtn" class="btn btn-outline-success btn-lg rounded-pill px-4 shadow-sm fw-bold">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download me-2" viewBox="0 0 16 16" style="margin-top:-3px;">
        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
      </svg>Download JPG
    </button>
  </div>
</div>

<script>
  (function () {
    const memeText = document.getElementById('memeText');
    const memeContainer = document.getElementById('memeContainer');
    const toggleBtn = document.getElementById('toggleBtn');
    const copyBtn = document.getElementById('copyBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const cornerDownloadBtn = document.getElementById('cornerDownloadBtn'); // Added specific reference
    
    const themeData = [
      { class: 'bg-primary text-white', bgHex: '#0d6efd', textHex: '#ffffff' },
      { class: 'bg-danger text-white', bgHex: '#dc3545', textHex: '#ffffff' },
      { class: 'bg-success text-white', bgHex: '#198754', textHex: '#ffffff' },
      { class: 'bg-warning text-dark', bgHex: '#ffc107', textHex: '#212529' },
      { class: 'bg-info text-dark', bgHex: '#0dcaf0', textHex: '#212529' },
      { class: 'bg-dark text-white', bgHex: '#212529', textHex: '#ffffff' }
    ];
    
    let themeIndex = 0;
    let intervalId = null;
    let isPlaying = true;
    
    let currentData = { b6: "0", b7: "0", base: "0", sentence: "" };

    function formatNumber(value) {
      if (value === 0) return "0";
      const abs = Math.abs(value);
      let formatted;
      if (abs >= 100000 || (abs > 0 && abs < 0.001)) {
        formatted = value.toExponential(3).replace(/\.?0+e/, 'e');
      } else {
        formatted = parseFloat(value.toFixed(4)).toString();
      }
      return String(formatted).slice(0, 8); 
    }

    function generateMeme() {
      const randomBaseValue = Math.pow(10, (Math.random() * 6) - 2);
      const isB6 = Math.random() > 0.5;
      
      let b6, b7, base;

      if (isB6) {
        b6 = randomBaseValue;
        base = Math.pow(b6, 1 / 6);
        b7 = Math.pow(base, 7);
      } else {
        b7 = randomBaseValue;
        base = Math.sign(b7) * Math.pow(Math.abs(b7), 1 / 7); 
        b6 = Math.pow(base, 6);
      }

      currentData.b6 = formatNumber(b6);
      currentData.b7 = formatNumber(b7);
      currentData.base = formatNumber(base);
      currentData.sentence = `${currentData.b6} and ${currentData.b7} are basically 6 and 7 in base ${currentData.base}`;

      memeText.innerHTML = `
        <div class="display-1 fw-black text-break mb-1">${currentData.b6}</div>
        <div class="fs-4 fw-bold text-uppercase my-2 opacity-75">and</div>
        <div class="display-1 fw-black text-break mt-1">${currentData.b7}</div>
        <div class="fs-3 fw-bold mt-4 opacity-75">are basically 6 and 7 in base</div>
        <div class="display-1 fw-black mt-2 font-monospace">${currentData.base}</div>
      `;

      // Update the class string without touching our position/relative setup
      memeContainer.className = `card shadow-lg border-0 py-5 px-3 mb-4 position-relative ${themeData[themeIndex].class}`;
      memeContainer.style.transform = 'scale(1.02)';
      setTimeout(() => memeContainer.style.transform = 'scale(1)', 150);

      themeIndex = (themeIndex + 1) % themeData.length;
    }

    function toggleMadness() {
      if (isPlaying) {
        clearInterval(intervalId);
        toggleBtn.innerText = "Resume Reality";
        toggleBtn.classList.replace('btn-dark', 'btn-outline-dark');
      } else {
        generateMeme();
        intervalId = setInterval(generateMeme, 3000);
        toggleBtn.innerText = "Pause Madness";
        toggleBtn.classList.replace('btn-outline-dark', 'btn-dark');
      }
      isPlaying = !isPlaying;
    }

    function copySentence() {
      const originalHTML = copyBtn.innerHTML;
      navigator.clipboard.writeText(currentData.sentence).then(() => {
        copyBtn.innerHTML = "Copied!";
        copyBtn.classList.replace('btn-outline-primary', 'btn-primary');
        copyBtn.classList.add('text-white');
        setTimeout(() => {
          copyBtn.innerHTML = originalHTML;
          copyBtn.classList.replace('btn-primary', 'btn-outline-primary');
          copyBtn.classList.remove('text-white');
        }, 1500);
      });
    }

    function downloadJPG(e) {
      if (e) e.stopPropagation(); // Stop event bubbling if needed
      
      const canvas = document.createElement('canvas');
      canvas.width = 1080;
      canvas.height = 1080;
      const ctx = canvas.getContext('2d');
      
      const currentTheme = themeIndex === 0 ? themeData[themeData.length - 1] : themeData[themeIndex - 1];

      // Solid background
      ctx.fillStyle = currentTheme.bgHex;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Thick inner meme border
      ctx.strokeStyle = currentTheme.textHex;
      ctx.lineWidth = 15;
      ctx.strokeRect(30, 30, 1020, 1020);

      const centerX = canvas.width / 2;
      ctx.textAlign = 'center';

      // Draw the core meme content
      ctx.font = '900 160px sans-serif';
      ctx.fillStyle = currentTheme.textHex;
      ctx.fillText(currentData.b6, centerX, 260);

      ctx.font = 'bold 50px sans-serif';
      ctx.fillStyle = currentTheme.textHex + 'E6'; 
      ctx.fillText('AND', centerX, 410);

      ctx.font = '900 160px sans-serif';
      ctx.fillStyle = currentTheme.textHex;
      ctx.fillText(currentData.b7, centerX, 590);

      ctx.font = 'bold 55px sans-serif';
      ctx.fillStyle = currentTheme.textHex + 'E6';
      ctx.fillText('are basically 6 and 7 in base', centerX, 760);

      ctx.font = '900 180px monospace';
      ctx.fillStyle = currentTheme.textHex;
      ctx.fillText(currentData.base, centerX, 960);

      // Subdued but clear watermark
      ctx.font = 'bold 26px sans-serif';
      ctx.textAlign = 'right';
      ctx.fillStyle = currentTheme.textHex + 'AA'; 
      ctx.fillText('whatmakeart.com', 1010, 1010);

      // Fire off the download
      const safeFilename = `6-and-7-base-${currentData.base.replace(/[^a-zA-Z0-9-]/g, '-')}-whatmakeart.jpg`;
      const link = document.createElement('a');
      link.download = safeFilename;
      link.href = canvas.toDataURL('image/jpeg', 0.95); 
      link.click();
    }

    // Attach all event listeners
    toggleBtn.addEventListener('click', toggleMadness);
    copyBtn.addEventListener('click', copySentence);
    downloadBtn.addEventListener('click', downloadJPG);
    
    // Wire up ONLY the corner badge to trigger the download
    cornerDownloadBtn.addEventListener('click', downloadJPG);

    generateMeme();
    intervalId = setInterval(generateMeme, 3000);
  })();
</script>

## 6 and 7 Calculator

Enter one number, choose whether it represents <strong>b⁶</strong> or <strong>b⁷</strong>, and the calculator solves the real-number base and shows both the 6th and 7th powers in that base, or what 6 and 7 would be in that base.

<div class="container py-4" style="max-width: 800px;">
  <div class="card shadow-sm mb-4 border-0 bg-body-tertiary">
    <div class="card-body">
      <form id="solverForm" class="row g-3 align-items-end">
        <div class="col-12 col-md-5">
          <label for="knownValue" class="form-label fw-bold small text-uppercase">Known number</label>
          <input id="knownValue" type="number" step="any" value="128" class="form-control form-control-lg shadow-sm" />
        </div>
        <div class="col-12 col-md-4">
          <label for="knownPower" class="form-label fw-bold small text-uppercase">This number is</label>
          <select id="knownPower" class="form-select form-select-lg shadow-sm">
            <option value="7" selected>b⁷</option>
            <option value="6">b⁶</option>
          </select>
        </div>
        <div class="col-12 col-md-3">
          <button type="submit" class="btn btn-primary btn-lg w-100 shadow-sm fw-bold">Calculate</button>
        </div>
      </form>
    </div>
  </div>
  <div id="results"></div>
  <div class="card mt-4 border-0 bg-body-tertiary text-muted">
    <div class="card-body text-center">
      <h2 class="h6 text-uppercase fw-bold mb-2 text-body-emphasis">How it works</h2>
      <p class="small mb-0">
        The calculator solves for the underlying real-number base <strong>b</strong>, then calculates both the 6th (<strong>b⁶</strong>) and 7th (<strong>b⁷</strong>) powers to complete the pair.
      </p>
    </div>
  </div>
</div>

<script>
  (function () {
    const form = document.getElementById('solverForm');
    const knownValueInput = document.getElementById('knownValue');
    const knownPowerSelect = document.getElementById('knownPower');
    const results = document.getElementById('results');

    function formatNumber(value) {
      if (!Number.isFinite(value)) return 'Not finite';
      if (Object.is(value, -0)) value = 0;

      const abs = Math.abs(value);
      if ((abs !== 0 && abs < 0.000001) || abs >= 1000000) {
        return value.toExponential(12).replace(/\.?0+e/, 'e');
      }
      return Number(value.toFixed(12)).toString();
    }

    function realOddRoot(value, n) {
      return Math.sign(value) * Math.pow(Math.abs(value), 1 / n);
    }

    function card(html) {
      return `<div class="card shadow-sm border-0 mb-3"><div class="card-body p-4">${html}</div></div>`;
    }

    function solutionBlock(base, b6, b7, knownPower, isSecondary = false) {
      const isB6 = knownPower === '6';
      const themeColor = isSecondary ? 'secondary' : 'primary';
      
      const b6Str = formatNumber(b6);
      const b7Str = formatNumber(b7);
      const baseStr = formatNumber(base);
      const copySentence = `${b6Str} and ${b7Str} are basically 6 and 7 in base ${baseStr}`;
      
      return `
        <div class="card shadow border-${themeColor} mb-4 overflow-hidden">
          <div class="card-body p-4">
            
            <div class="p-4 mb-4 bg-${themeColor} bg-opacity-10 text-${themeColor} rounded-3 text-center border border-${themeColor}">
              <div class="fs-4 mb-3"><strong>${b6Str}</strong> and <strong>${b7Str}</strong> are basically 6 and 7 in base <strong>${baseStr}</strong></div>
              <button class="btn btn-${themeColor} copy-btn fw-bold text-white shadow-sm px-4" data-clipboard="${copySentence}">Copy Sentence</button>
            </div>

            <div class="text-center mb-4">
              <div class="text-muted small text-uppercase fw-bold mb-1">Solved Base (b)</div>
              <div class="display-6 fw-bold font-monospace text-body-emphasis text-break">${baseStr}</div>
            </div>

            <div class="row g-3 text-center">
              <div class="col-sm-6">
                <div class="p-3 rounded-3 h-100 ${isB6 ? `bg-${themeColor} bg-opacity-10 border border-${themeColor}` : 'bg-body-tertiary border'}">
                  <div class="text-uppercase small fw-bold ${isB6 ? `text-${themeColor}` : 'text-muted'} mb-2">
                    b⁶ Power ${isB6 ? '(Your Input)' : ''}
                  </div>
                  <div class="fs-4 fw-semibold font-monospace text-body-emphasis text-break">${b6Str}</div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="p-3 rounded-3 h-100 ${!isB6 ? `bg-${themeColor} bg-opacity-10 border border-${themeColor}` : 'bg-body-tertiary border'}">
                  <div class="text-uppercase small fw-bold ${!isB6 ? `text-${themeColor}` : 'text-muted'} mb-2">
                    b⁷ Power ${!isB6 ? '(Your Input)' : ''}
                  </div>
                  <div class="fs-4 fw-semibold font-monospace text-body-emphasis text-break">${b7Str}</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      `;
    }

    function solve() {
      const knownValue = parseFloat(knownValueInput.value);
      const knownPower = knownPowerSelect.value;

      if (!Number.isFinite(knownValue)) {
        results.innerHTML = card('<div class="alert alert-warning mb-0 fw-bold">Please enter a valid number.</div>');
        return;
      }

      if (knownPower === '7') {
        const base = realOddRoot(knownValue, 7);
        const b6 = Math.pow(base, 6);
        const b7 = Math.pow(base, 7);

        results.innerHTML = solutionBlock(base, b6, b7, knownPower);
        return;
      }

      if (knownValue < 0) {
        results.innerHTML = card(`
          <div class="text-center py-3">
            <h2 class="h4 text-danger fw-bold mb-3">No Real Solution</h2>
            <p class="mb-0 text-muted">
              You entered <strong>${formatNumber(knownValue)}</strong> as <strong>b⁶</strong>, but a real number raised
              to an even power (6) cannot be negative.
            </p>
          </div>
        `);
        return;
      }

      if (knownValue === 0) {
        results.innerHTML = solutionBlock(0, 0, 0, knownPower);
        return;
      }

      // If it's b^6 and positive, we have two solutions
      const positiveBase = Math.pow(knownValue, 1 / 6);
      const negativeBase = -positiveBase;
      const positiveB6 = Math.pow(positiveBase, 6);
      const positiveB7 = Math.pow(positiveBase, 7);
      const negativeB6 = Math.pow(negativeBase, 6);
      const negativeB7 = Math.pow(negativeBase, 7);

      results.innerHTML = `
        <div class="alert alert-info border-0 shadow-sm d-flex align-items-center mb-4">
          <div>
            <strong>Multiple Solutions Found:</strong> You entered a positive <strong>b⁶</strong>. Because 6 is an even power, there are two valid real roots (one positive, one negative).
          </div>
        </div>
        ${solutionBlock(positiveBase, positiveB6, positiveB7, knownPower)}
        ${solutionBlock(negativeBase, negativeB6, negativeB7, knownPower, true)}
      `;
    }

    // Global event listener for copy buttons
    document.addEventListener('click', function(e) {
      if (e.target && e.target.classList.contains('copy-btn')) {
        const textToCopy = e.target.getAttribute('data-clipboard');
        const originalText = e.target.innerText;
        
        navigator.clipboard.writeText(textToCopy).then(() => {
          e.target.innerText = 'Copied!';
          e.target.classList.add('btn-success');
          e.target.classList.remove('btn-primary', 'btn-secondary');
          
          setTimeout(() => {
            e.target.innerText = originalText;
            e.target.classList.remove('btn-success');
            // Re-apply original class based on context
            if (e.target.getAttribute('data-clipboard') === textToCopy) {
              const themeColor = e.target.closest('.border-secondary') ? 'secondary' : 'primary';
              e.target.classList.add(`btn-${themeColor}`);
            }
          }, 1500);
        }).catch(err => {
          console.error('Failed to copy: ', err);
        });
      }
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      solve();
    });

    knownValueInput.addEventListener('input', solve);
    knownPowerSelect.addEventListener('change', solve);

    solve();
  })();
</script>
