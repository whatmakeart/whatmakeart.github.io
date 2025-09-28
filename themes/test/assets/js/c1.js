<script>
// ===== Canvas LTI postMessage helpers (modern, efficient) =====
(() => {
  // ---- Config (override via data-* attributes or query params if needed) ----
  const cfg = {
    // Optional: PostMessage token provided by Canvas launch (if present)
    token: new URLSearchParams(location.search).get('post_message_token') || null,
    // Optional: Canvas OIDC auth origin for lti.get/put_data (spec requires exact origin)
    oidcOrigin: new URLSearchParams(location.search).get('lti_oidc_origin') || null, // e.g. "https://sso.canvaslms.com"
    // Optional: named frame for platform storage (from capabilities/launch param lti_storage_target)
    storageTarget: new URLSearchParams(location.search).get('lti_storage_target') || null
  };

  // ---- Target resolution per Canvas guidance: parent (or opener) ----
  function getTargetWindow() {
    // If launched as popup/new tab
    if (window.opener && !window.opener.closed) return window.opener;
    // If embedded (typical)
    if (window.parent && window.parent !== window) return window.parent;
    // Last resort: self (acts no-op for postMessage)
    return window;
  }

  // ---- Optionally resolve a named sibling frame for platform storage ----
  function getNamedFrame(name) {
    try {
      if (!name) return null;
      const p = window.parent;
      if (!p || p === window) return null;
      return p.frames && p.frames[name] ? p.frames[name] : null;
    } catch {
      return null;
    }
  }

  // ---- Unified sender ----
  function sendMessage({ subject, data = {}, frame = null, exactOrigin = null }) {
    const payload = { subject, ...data };
    // Token is optional; include if available and not already provided
    if (cfg.token && payload.token == null) payload.token = cfg.token;

    const target = frame || getTargetWindow();
    const origin = exactOrigin || '*';
    try {
      target.postMessage(payload, origin);
    } catch (e) {
      // Swallow to avoid breaking page flow
      console.debug('postMessage failed', e);
    }
  }

  // ---- Promise-based request/response helper ----
  const pending = new Map(); // message_id -> {resolve,reject}
  function uuid() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

  window.addEventListener('message', (event) => {
    const msg = event?.data || {};
    if (!msg || typeof msg !== 'object' || !msg.subject) return;

    // Match the simple .response convention or lti.get_data response echoing subject
    const responseKey = msg.message_id && pending.get(msg.message_id);
    if (responseKey) {
      if (msg.error) {
        responseKey.reject(msg);
      } else {
        responseKey.resolve(msg);
      }
      pending.delete(msg.message_id);
    }
  });

  function requestResponse(subject, data = {}, { frame, exactOrigin } = {}) {
    const message_id = uuid();
    const promise = new Promise((resolve, reject) => {
      pending.set(message_id, { resolve, reject });
      // Timeout safety
      setTimeout(() => {
        if (pending.has(message_id)) {
          pending.delete(message_id);
          reject({ error: { code: 'timeout', message: `${subject} timed out` } });
        }
      }, 4000);
    });
    sendMessage({ subject, data: { ...data, message_id }, frame, exactOrigin });
    return promise;
  }

  // ---- lti.get/put_data with spec-compliant fallback chain ----
  async function storageSend(subject, data) {
    // 1) Try named frame from cfg.storageTarget (common: "post_message_forwarding") with exact origin
    const named = getNamedFrame(cfg.storageTarget);
    if (named && cfg.oidcOrigin) {
      try {
        return await requestResponse(subject, data, { frame: named, exactOrigin: cfg.oidcOrigin });
      } catch {}
    }
    // 2) Try direct parent with exact origin (if provided)
    if (cfg.oidcOrigin) {
      try {
        return await requestResponse(subject, data, { frame: getTargetWindow(), exactOrigin: cfg.oidcOrigin });
      } catch {}
    }
    // 3) Last resort (non-spec): parent with wildcard origin
    return requestResponse(subject, data, { frame: getTargetWindow(), exactOrigin: '*' });
  }

  // ---- Height sync (efficient) ----
  const sendResize = (() => {
    let rafPending = false;
    return () => {
      if (window === window.parent && !window.opener) return; // not embedded
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(() => {
        rafPending = false;
        const height = Math.max(
          document.documentElement.scrollHeight,
          document.body?.scrollHeight || 0
        );
        sendMessage({ subject: 'lti.frameResize', data: { height } });
      });
    };
  })();

  // Observe DOM changes and element resizes
  const ro = new ResizeObserver(() => sendResize());
  const mo = new MutationObserver(() => sendResize());

  function startObservers() {
    try { ro.observe(document.body); } catch {}
    try { mo.observe(document, { subtree: true, childList: true, characterData: true }); } catch {}
    // Initial bursts (handles late fonts/images)
    let n = 8;
    const id = setInterval(() => { sendResize(); if (!--n) clearInterval(id); }, 50);
  }

  // ---- Remove navigation & adjust layout when embedded ----
  function removeNavigationEmbed() {
    if (window.parent === window) return; // not embedded

    // Make in-frame links escape Canvas iframe
    const base = document.createElement('base');
    base.target = '_top';
    document.head.appendChild(base);

    // Compact, idempotent removals
    [
      'wiki-navbar','course-sidebar','wiki-sidebar','course-page-intro','wiki-page-intro',
      'course-toc','wiki-toc','backlinks-container','header','footer','pageTitleH1',
      'top-prev-next','bottom-prev-next','breadcrumbs','topTOC'
    ].forEach(id => document.getElementById(id)?.remove());

    // Zero out container padding quickly (covers common Bootstrap containers)
    document.querySelectorAll(
      '.container, .container-fluid, .container-xxl, .container-xl, .container-lg, .container-md, .container-sm'
    ).forEach(el => { el.style.padding = '0'; });

    // Promote main content areas to full width and avoid nested scrollbars
    ['wiki-content','course-content','course-main','wiki-main'].forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      el.classList.add('containerfluid','keep-wide-canvas-lms');
      el.classList.remove('bd-content','ps-lg-2','bd-main');
      el.style.overflowX = 'auto';
      el.style.overflowY = 'auto';
    });
  }

  // ---- Optional: fetch parent window size (debug or alignment use) ----
  async function fetchWindowSize() {
    try {
      const res = await requestResponse('lti.fetchWindowSize');
      // res: { subject: 'lti.fetchWindowSize.response', height, width, footer, offset, scrollY }
      return res;
    } catch (e) {
      return null;
    }
  }

  // ---- Public API (optional) ----
  window.CanvasLtiHelpers = {
    resize: () => sendResize(),
    fetchWindowSize,
    async putData(key, value) {
      const message_id = uuid();
      return storageSend('lti.put_data', { key, value, message_id });
    },
    async getData(key) {
      const message_id = uuid();
      return storageSend('lti.get_data', { key, message_id });
    },
    showModuleNav(show=true) {
      sendMessage({ subject: 'lti.showModuleNavigation', data: { show } });
    },
    hideRightSide() {
      sendMessage({ subject: 'lti.hideRightSideWrapper' });
    },
    alert(body, {alertType='success', title} = {}) {
      sendMessage({ subject: 'lti.showAlert', data: { body, alertType, title }});
    },
    requestFullWindowLaunch(opts) {
      sendMessage({ subject: 'requestFullWindowLaunch', data: { ...opts }});
    }
  };

  // ---- Print helper: replace iframes with thumbnails (YouTube/Vimeo) ----
  // (unchanged behavior, but a touch safer)
  function replaceVideosWithThumbnails() {
    const iframes = document.querySelectorAll('iframe[src*="youtube.com"], iframe[src*="vimeo.com"]');
    const originals = [];
    iframes.forEach(iframe => {
      originals.push({ iframe, parent: iframe.parentNode, next: iframe.nextSibling });
      const src = iframe.src || '';
      let videoPageUrl = '#', thumb = null;

      if (src.includes('youtube.com')) {
        const m = src.match(/\/embed\/([^?]+)/);
        const id = m && m[1];
        if (id) {
          videoPageUrl = `https://www.youtube.com/watch?v=${id}`;
          thumb = `https://img.youtube.com/vi/${id}/0.jpg`;
        }
      } else if (src.includes('vimeo.com')) {
        const m = src.match(/video\/(\d+)/);
        const id = m && m[1];
        if (id) {
          videoPageUrl = `https://vimeo.com/${id}`;
          // Vimeo thumbnail would require API; leave placeholder transparent image
          thumb = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
        }
      }

      const a = document.createElement('a');
      a.href = videoPageUrl; a.target = '_blank'; a.rel = 'noopener';
      const img = document.createElement('img');
      if (thumb) img.src = thumb; img.alt = 'Video thumbnail';
      a.appendChild(img);
      iframe.replaceWith(a);
    });

    window.onafterprint = () => {
      originals.forEach(({ iframe, parent, next }) => {
        if (next) parent.insertBefore(iframe, next);
        else parent.appendChild(iframe);
      });
      sendResize();
    };
  }

  // ---- Init ----
  function init() {
    const embedded = window.parent && window.parent !== window;
    if (embedded) removeNavigationEmbed();

    // Start observers after content settles
    startObservers();

    // Optionally ask for capabilities; useful if you want to know the storage frame name
    requestResponse('lti.capabilities').then((res) => {
      // Try to learn storage target frame name from capabilities if not provided
      if (!cfg.storageTarget && Array.isArray(res?.supported_messages)) {
        const storageMsg = res.supported_messages.find(m => m.subject === 'lti.put_data' && m.frame);
        if (storageMsg?.frame) cfg.storageTarget = storageMsg.frame;
      }
    }).catch(() => { /* fine if unsupported */ });

    // Print listeners
    window.onbeforeprint = replaceVideosWithThumbnails;

    // One early resize + a follow-up after images/fonts
    sendResize();
    window.addEventListener('load', () => {
      sendResize();
      // Optional: enable scroll event stream if you need it
      // sendMessage({ subject: 'lti.enableScrollEvents' });
    }, { once: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
</script>
