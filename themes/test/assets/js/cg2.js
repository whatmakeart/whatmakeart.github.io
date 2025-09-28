<script>
/* ---------- Helpers: environment & target ---------- */
const UA = navigator.userAgent || '';

function getTargetWindow() {
  if (window.opener && !window.opener.closed) return window.opener;
  if (window.parent && window.parent !== window) return window.parent;
  return null;
}
function isEmbedded() {
  try { return window.parent && window.parent !== window; } catch { return true; }
}

/* Optional: token from query string if Canvas supplied it */
const POST_MESSAGE_TOKEN = new URLSearchParams(location.search).get('post_message_token');

/* ---------- Theme block: keep your logic, remove referrer dependence ---------- */
(function () {
  const isIframe = isEmbedded();
  const isCanvasMobileApp = /Canvas/i.test(UA) || (/(iPhone|iPad|Android)/i.test(UA) && /\b(wv|WebView)\b/i.test(UA));

  // If inside an iframe AND not the native app => Canvas web iframe
  const env = (isIframe && !isCanvasMobileApp) ? 'canvas-web' : (isCanvasMobileApp ? 'canvas-mobile' : 'web');

  function getUserPreferredTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function applyTheme(mode){ document.documentElement.setAttribute('data-bs-theme', mode); }

  if (env === 'canvas-web') {
    applyTheme('light');
  } else {
    applyTheme(getUserPreferredTheme());
    const mq = matchMedia('(prefers-color-scheme: dark)');
    const sync = e => { if (!localStorage.getItem('theme')) applyTheme(e.matches ? 'dark' : 'light'); };
    mq.addEventListener('change', sync);
  }
})();

/* ---------- Resize messaging: rAF-throttled + robust height ---------- */
const sendIframeHeight = (() => {
  let rafPending = false;
  return function sendIframeHeight() {
    if (!isEmbedded()) return;
    if (rafPending) return;
    rafPending = true;
    requestAnimationFrame(() => {
      rafPending = false;
      const de = document.documentElement;
      const b = document.body || {};
      const height = Math.max(
        de.scrollHeight, de.offsetHeight, de.clientHeight,
        b.scrollHeight || 0, b.offsetHeight || 0, b.clientHeight || 0
      );
      const message = { subject: 'lti.frameResize', height };
      if (POST_MESSAGE_TOKEN) message.token = POST_MESSAGE_TOKEN;

      const target = getTargetWindow();
      if (target) target.postMessage(message, '*');
      // console.debug(`[LTI] frameResize → ${height}px`);
    });
  };
})();

/* ---------- DOM ready hooks (shallow changes) ---------- */
function removeNavigationEmbed() {
  if (!isEmbedded()) return;

  // idempotent base
  if (!document.querySelector('base[target="_top"]')) {
    const base = document.createElement('base');
    base.target = '_top';
    document.head.appendChild(base);
  }

  const ids = [
    'wiki-navbar','course-sidebar','wiki-sidebar','course-page-intro','wiki-page-intro',
    'course-toc','wiki-toc','backlinks-container','header','footer','pageTitleH1',
    'top-prev-next','bottom-prev-next','breadcrumbs','topTOC'
  ];
  ids.forEach(id => document.getElementById(id)?.remove());

  document.querySelectorAll(
    '.container, .container-fluid, .container-xxl, .container-xl, .container-lg, .container-md, .container-sm'
  ).forEach(el => { el.style.padding = '0'; });

  ['wiki-content','course-content','course-main','wiki-main'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.add('container-fluid','keep-wide-canvas-lms');
    el.classList.remove('bd-content','ps-lg-2','bd-main');
    el.style.overflow = 'auto';
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    if (isEmbedded()) { removeNavigationEmbed(); sendIframeHeight(); }
  }, { once: true });
} else {
  if (isEmbedded()) { removeNavigationEmbed(); sendIframeHeight(); }
}

window.addEventListener('load', () => {
  checkIfMobile();
  // one more after assets settle
  sendIframeHeight();
}, { once: true });

/* ---------- ResizeObserver (keep) ---------- */
const ro = new ResizeObserver(() => { if (isEmbedded()) sendIframeHeight(); });
if (document.body) ro.observe(document.body);
else document.addEventListener('DOMContentLoaded', () => ro.observe(document.body), { once: true });

/* ---------- The rest of your functions stay the same ---------- */
function checkIfMobile() {
  if (/Mobi|Android/i.test(UA)) document.body.style.overflow = 'visible';
}

/* replaceVideosWithThumbnails unchanged (optional) */
window.onbeforeprint = replaceVideosWithThumbnails;
</script>
