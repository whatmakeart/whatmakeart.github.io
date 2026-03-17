---
title: 6 and 7 in Other Bases
date: 2026-03-16T16:06:22-04:00
lastmod: 2026-03-16T20:14:59-04:00
aliases:
  - /zalgorithmic/fun-videos/6-and-7-any-number/
---

<div class="container py-5">
  <div class="mx-auto">
    <div
      id="memeContainer"
      class="card shadow-lg border-0 py-5 px-3 mb-4 position-relative"
      style="min-height: 400px; transition: background-color 0.4s ease, transform 0.2s ease;">
      <button
        id="cornerDownloadBtn"
        type="button"
        class="btn btn-sm btn-light position-absolute top-0 end-0 m-3 text-uppercase fw-bold"
        title="Click to download JPG">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download me-1" viewBox="0 0 16 16">
          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
        </svg>
        Save JPG
      </button>
      <div class="card-body d-flex flex-column justify-content-center align-items-center text-center">
        <div id="memeText" class="display-2 fw-bolder lh-sm text-break">
          Initializing Math...
        </div>
      </div>
    </div>
    <div class="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 mt-4 mb-5">
      <button id="toggleBtn" type="button" class="btn btn-dark btn-lg rounded-pill shadow-sm fw-bold text-uppercase" style="min-width: 220px;">
        Pause Madness
      </button>
      <button id="copyBtn" type="button" class="btn btn-outline-primary btn-lg rounded-pill shadow-sm fw-bold" style="min-width: 220px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard me-2" viewBox="0 0 16 16">
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
        </svg>
        Copy Sentence
      </button>
      <button id="downloadBtn" type="button" class="btn btn-outline-success btn-lg rounded-pill shadow-sm fw-bold" style="min-width: 220px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download me-2" viewBox="0 0 16 16">
          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
        </svg>
        Download JPG
      </button>
    </div>
  </div>
</div>

<script>
(function () {
  const memeText = document.getElementById('memeText');
  const memeContainer = document.getElementById('memeContainer');
  const toggleBtn = document.getElementById('toggleBtn');
  const copyBtn = document.getElementById('copyBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  const cornerDownloadBtn = document.getElementById('cornerDownloadBtn');

  const themeData = [
    { className: 'bg-primary text-white', bgHex: '#0d6efd', textHex: '#ffffff' },
    { className: 'bg-danger text-white', bgHex: '#dc3545', textHex: '#ffffff' },
    { className: 'bg-success text-white', bgHex: '#198754', textHex: '#ffffff' },
    { className: 'bg-warning text-dark', bgHex: '#ffc107', textHex: '#212529' },
    { className: 'bg-info text-dark', bgHex: '#0dcaf0', textHex: '#212529' },
    { className: 'bg-dark text-white', bgHex: '#212529', textHex: '#ffffff' }
  ];

  let themeIndex = 0;
  let intervalId = null;
  let isPlaying = true;
  let lastBase = null;

  let currentData = {
    b6: '0',
    b7: '0',
    base: '0',
    sentence: ''
  };

  function generateMeme() {
    // Locked to a maximum of base 7
    const basePool = [2, 2, 3, 3, 4, 5, 5, 6, 6, 7];

    let availableBases = basePool;
    if (lastBase !== null && basePool.length > 1) {
      availableBases = basePool.filter(base => base !== lastBase);
    }

    const base = availableBases[Math.floor(Math.random() * availableBases.length)];
    lastBase = base;

    const b6Str = (6).toString(base).toUpperCase();
    const b7Str = (7).toString(base).toUpperCase();

    currentData.b6 = b6Str;
    currentData.b7 = b7Str;
    currentData.base = base.toString();
    currentData.sentence = `${currentData.b6} and ${currentData.b7} are 6 and 7 in base ${currentData.base}`;

    memeText.innerHTML = `
      <div class="display-1 fw-bolder text-break mb-1">${currentData.b6}</div>
      <div class="fs-4 fw-bold text-uppercase my-2 opacity-75">and</div>
      <div class="display-1 fw-bolder text-break mt-1">${currentData.b7}</div>
      <div class="fs-3 fw-bold mt-4 opacity-75">are basically 6 and 7 in base</div>
      <div class="display-1 fw-bolder mt-2 font-monospace text-break">${currentData.base}</div>
    `;

    const theme = themeData[themeIndex];
    memeContainer.className = `card shadow-lg border-0 py-5 px-3 mb-4 position-relative ${theme.className}`;

    memeContainer.style.transform = 'scale(1.02)';
    window.setTimeout(() => {
      memeContainer.style.transform = 'scale(1)';
    }, 150);

    themeIndex = (themeIndex + 1) % themeData.length;
  }

  function toggleMadness() {
    if (isPlaying) {
      clearInterval(intervalId);
      intervalId = null;
      toggleBtn.textContent = 'Resume Madness';
      toggleBtn.classList.remove('btn-dark');
      toggleBtn.classList.add('btn-secondary');
    } else {
      generateMeme();
      intervalId = setInterval(generateMeme, 3000);
      toggleBtn.textContent = 'Pause Madness';
      toggleBtn.classList.remove('btn-secondary');
      toggleBtn.classList.add('btn-dark');
    }

    isPlaying = !isPlaying;
  }

  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      console.error('Clipboard copy failed:', err);
      return false;
    }
  }

  async function copySentence() {
    const originalHTML = copyBtn.innerHTML;
    const ok = await copyToClipboard(currentData.sentence);

    copyBtn.innerHTML = ok ? 'Copied!' : 'Copy Failed';
    copyBtn.classList.remove('btn-outline-primary');
    copyBtn.classList.add(ok ? 'btn-primary' : 'btn-danger', 'text-white');

    setTimeout(() => {
      copyBtn.innerHTML = originalHTML;
      copyBtn.classList.remove('btn-primary', 'btn-danger', 'text-white');
      copyBtn.classList.add('btn-outline-primary');
    }, 1500);
  }

  function downloadJPG(event) {
    if (event) event.stopPropagation();

    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1080;

    const ctx = canvas.getContext('2d');
    const currentTheme = themeIndex === 0 ? themeData[themeData.length - 1] : themeData[themeIndex - 1];
    const centerX = canvas.width / 2;

    ctx.fillStyle = currentTheme.bgHex;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = currentTheme.textHex;
    ctx.lineWidth = 15;
    ctx.strokeRect(30, 30, 1020, 1020);

    ctx.textAlign = 'center';
    ctx.fillStyle = currentTheme.textHex;

    ctx.font = '900 160px sans-serif';
    ctx.fillText(currentData.b6, centerX, 260);

    ctx.font = '700 50px sans-serif';
    ctx.globalAlpha = 0.9;
    ctx.fillText('AND', centerX, 410);

    ctx.globalAlpha = 1;
    ctx.font = '900 160px sans-serif';
    ctx.fillText(currentData.b7, centerX, 590);

    ctx.font = '700 55px sans-serif';
    ctx.globalAlpha = 0.9;
    ctx.fillText('are 6 and 7 in base', centerX, 760);

    ctx.globalAlpha = 1;
    ctx.font = '900 180px monospace';
    ctx.fillText(currentData.base, centerX, 960);

    ctx.font = '700 26px sans-serif';
    ctx.textAlign = 'right';
    ctx.globalAlpha = 0.7;
    ctx.fillText('whatmakeart.com', 1010, 1010);

    const safeFilename = `6-and-7-base-${currentData.base.replace(/[^a-zA-Z0-9-]/g, '-')}-whatmakeart.jpg`;
    const link = document.createElement('a');
    link.download = safeFilename;
    link.href = canvas.toDataURL('image/jpeg', 0.95);
    link.click();
  }

  toggleBtn.addEventListener('click', toggleMadness);
  copyBtn.addEventListener('click', copySentence);
  downloadBtn.addEventListener('click', downloadJPG);
  cornerDownloadBtn.addEventListener('click', downloadJPG);

  generateMeme();
  intervalId = setInterval(generateMeme, 3000);
})();
</script>
