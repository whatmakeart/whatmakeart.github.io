/**
 * Standalone UE Blueprint Renderer for Web
 * Usage: <script src="bp-render.js" bp-file="my-blueprint.txt"></script>
 */

(function () {
  // --- START FIX: Prevent multiple initializations ---
  if (window.bpRenderInitialized) return;
  window.bpRenderInitialized = true;
  // --- END FIX ---

  // --- 1. INJECT CSS (UE5 Style) ---
  const css = `
        .bp-container {
            position: relative;
            width: 100%;
            height: 500px; /* Default height */
            background-color: #1a1a1a;
            background-image: 
                linear-gradient(#252525 1px, transparent 1px), 
                linear-gradient(90deg, #252525 1px, transparent 1px);
            background-size: 20px 20px;
            border-radius: 6px;
            overflow: hidden;
            border: 1px solid #000;
            font-family: 'Segoe UI', sans-serif;
            margin: 20px 0;
            box-shadow: inset 0 0 30px rgba(0,0,0,0.7);
            transition: width 0.2s, height 0.2s;
        }

        /* Full Screen State */
        .bp-container.bp-fullscreen {
            position: fixed !important;
            top: 0; left: 0;
            width: 100vw !important;
            height: 100vh !important;
            z-index: 9999;
            margin: 0;
            border-radius: 0;
            border: none;
        }
        
        .bp-canvas {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            transform-origin: 0 0;
            transition: opacity 0.2s;
        }

        /* Text View Mode */
        .bp-text-view {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background-color: #111;
            color: #bbb;
            font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
            font-size: 12px;
            padding: 50px 20px 20px 20px; /* Top padding for controls space */
            box-sizing: border-box;
            overflow: auto;
            white-space: pre;
            z-index: 20;
            display: none;
            opacity: 0;
            transition: opacity 0.2s;
        }
        .bp-text-view.visible { display: block; opacity: 1; }

        /* Controls Overlay */
        .bp-controls {
            position: absolute;
            top: 10px;
            right: 10px;
            display: flex;
            gap: 5px;
            z-index: 100;
        }

        .bp-btn {
            background: rgba(30, 30, 30, 0.9);
            border: 1px solid #555;
            color: #ccc;
            padding: 5px 10px;
            font-size: 11px;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.2s;
            font-family: inherit;
            min-width: 70px;
            text-align: center;
        }
        .bp-btn:hover { background: #444; color: #fff; border-color: #777; }
        .bp-btn:active { background: #222; }
        .bp-btn.active { background: #0055AA; border-color: #0077CC; color: white; }

        /* Node Styling */
        .bp-node {
            position: absolute;
            min-width: 180px;
            background: rgba(20, 20, 20, 0.95);
            border: 1px solid #333;
            border-radius: 8px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.5);
            color: #e0e0e0;
            font-size: 12px;
            z-index: 10;
            user-select: none;
            backdrop-filter: blur(4px);
        }
        
        /* Header Colors */
        .bp-header {
            padding: 6px 12px;
            border-radius: 8px 8px 0 0;
            font-weight: 700;
            font-size: 13px;
            display: flex; align-items: center;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
            border-bottom: 1px solid rgba(0,0,0,0.3);
            background: linear-gradient(to bottom, rgba(255,255,255,0.15), transparent);
        }
        
        .bp-node.event .bp-header { background-color: #8B0000; }
        .bp-node.function .bp-header { background-color: #0055AA; }
        .bp-node.macro .bp-header { background-color: #AA6600; }
        .bp-node.variable .bp-header { background-color: #007755; }

        .bp-body { padding: 10px; display: flex; gap: 20px; justify-content: space-between; }
        .bp-col { display: flex; flex-direction: column; gap: 10px; min-width: 20px; }
        
        /* Pins */
        .bp-pin { display: flex; align-items: center; gap: 8px; height: 18px; white-space: nowrap; }
        .bp-pin.out { justify-content: flex-end; }
        
        .bp-pin-icon { 
            width: 10px; height: 10px; 
            border: 2px solid #999; border-radius: 50%; 
            background: #111; transition: background 0.2s;
        }
        
        /* Pin Types */
        .type-exec .bp-pin-icon { 
            border-radius: 0; border: none; background: #fff; width: 12px; height: 13px;
            clip-path: polygon(0% 0%, 60% 0%, 100% 50%, 60% 100%, 0% 100%);
        }
        .type-bool .bp-pin-icon { border-color: #920101; }
        .type-int .bp-pin-icon { border-color: #22cc99; }
        .type-float .bp-pin-icon { border-color: #99ff22; }
        .type-string .bp-pin-icon { border-color: #ff00d4; }
        .type-vector .bp-pin-icon { border-color: #ffc000; }
        .type-object .bp-pin-icon { border-color: #00a8f0; }

        /* Connected State */
        .bp-pin.connected .bp-pin-icon { background-color: inherit; border-color: inherit; }
        .type-bool.connected .bp-pin-icon { background: #920101; }
        .type-float.connected .bp-pin-icon { background: #99ff22; }

        /* SVG Wires */
        .bp-svg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; overflow: visible; z-index: 1; }
        path { fill: none; stroke-width: 2.5; stroke-linecap: round; opacity: 0.85; }
        
        .bp-loading { 
            position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); 
            color: #666; font-weight: bold; 
        }
        .bp-error { color: #ff4444; }
    `;

  const styleSheet = document.createElement("style");
  styleSheet.textContent = css;
  document.head.appendChild(styleSheet);

  // --- 2. LOGIC CLASS ---
  class BlueprintViewer {
    constructor(container, fileUrl) {
      this.container = container;
      this.fileUrl = fileUrl;
      this.nodes = [];
      this.connections = [];
      this.pan = { x: 0, y: 0 };
      this.isPanning = false;
      this.isDragging = false;
      this.dragNode = null;
      this.isFullscreen = false;
      this.isTextView = false;
      this.rawText = "";

      this.init();
    }

    async init() {
      // DOM Setup
      this.canvas = document.createElement("div");
      this.canvas.className = "bp-canvas";

      this.svgLayer = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      );
      this.svgLayer.classList.add("bp-svg");

      this.nodeLayer = document.createElement("div");
      this.nodeLayer.style.position = "absolute";
      this.nodeLayer.style.width = "100%";
      this.nodeLayer.style.height = "100%";

      // Text View Element (Hidden by default)
      this.textView = document.createElement("div");
      this.textView.className = "bp-text-view";

      this.canvas.appendChild(this.svgLayer);
      this.canvas.appendChild(this.nodeLayer);

      this.container.appendChild(this.canvas);
      this.container.appendChild(this.textView);

      // Loader
      this.msg = document.createElement("div");
      this.msg.className = "bp-loading";
      this.msg.textContent = "Loading...";
      this.container.appendChild(this.msg);

      this.createControls();
      this.setupInteraction();
      await this.loadData();
    }

    createControls() {
      const controls = document.createElement("div");
      controls.className = "bp-controls";

      // 1. Copy Text Button
      const btnCopy = document.createElement("button");
      btnCopy.className = "bp-btn";
      btnCopy.textContent = "Copy Text";
      btnCopy.title = "Copy blueprint text to clipboard";
      btnCopy.onclick = () => this.copyText(btnCopy);

      // 2. Toggle View Button
      const btnToggle = document.createElement("button");
      btnToggle.className = "bp-btn";
      btnToggle.textContent = "Show Text";
      btnToggle.onclick = () => this.toggleView(btnToggle);

      // 3. Reset View Button
      const btnReset = document.createElement("button");
      btnReset.className = "bp-btn";
      btnReset.textContent = "Reset View";
      btnReset.onclick = () => this.autoCenter();

      // 4. Full Screen Button
      const btnFS = document.createElement("button");
      btnFS.className = "bp-btn";
      btnFS.textContent = "Full Screen";
      btnFS.onclick = () => this.toggleFullScreen(btnFS);

      controls.appendChild(btnCopy);
      controls.appendChild(btnToggle);
      controls.appendChild(btnReset);
      controls.appendChild(btnFS);
      this.container.appendChild(controls);
    }

    copyText(btn) {
      if (!this.rawText) return;

      // Create a hidden textarea to handle the copy
      const ta = document.createElement("textarea");
      ta.value = this.rawText;
      ta.style.position = "fixed"; // Avoid scrolling to bottom
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();

      try {
        document.execCommand("copy");
        const originalText = btn.textContent;
        btn.textContent = "Copied!";
        btn.classList.add("active");
        setTimeout(() => {
          btn.textContent = originalText;
          btn.classList.remove("active");
        }, 1500);
      } catch (err) {
        console.error("Failed to copy", err);
        alert("Failed to copy text.");
      }

      document.body.removeChild(ta);
    }

    toggleView(btn) {
      this.isTextView = !this.isTextView;
      if (this.isTextView) {
        this.textView.classList.add("visible");
        this.canvas.style.opacity = "0";
        this.canvas.style.pointerEvents = "none"; // Disable interaction with hidden canvas
        btn.textContent = "Show Graph";
        btn.classList.add("active");
      } else {
        this.textView.classList.remove("visible");
        this.canvas.style.opacity = "1";
        this.canvas.style.pointerEvents = "";
        btn.textContent = "Show Text";
        btn.classList.remove("active");
      }
    }

    toggleFullScreen(btn) {
      this.isFullscreen = !this.isFullscreen;
      if (this.isFullscreen) {
        this.container.classList.add("bp-fullscreen");
        btn.textContent = "Exit Full Screen";
        btn.classList.add("active");
        document.body.style.overflow = "hidden";
      } else {
        this.container.classList.remove("bp-fullscreen");
        btn.textContent = "Full Screen";
        btn.classList.remove("active");
        document.body.style.overflow = "";
      }
      setTimeout(() => {
        this.renderWires();
        // If we are in graph mode, re-center might be nice or keep relative pos
      }, 250);
    }

    async loadData() {
      try {
        const res = await fetch(this.fileUrl);
        if (!res.ok) throw new Error("File not found: " + res.status);

        const text = await res.text();
        this.rawText = text;
        this.textView.textContent = text; // Set text for the text view

        this.parseUEText(text);
        this.render();
        this.autoCenter();
        this.msg.remove();
      } catch (e) {
        this.msg.textContent = e.message;
        this.msg.classList.add("bp-error");
      }
    }

    parseUEText(text) {
      // Robust Regex Parsing for UE Copy/Paste Format
      const lines = text.split("\n");
      let curr = null;

      lines.forEach((line) => {
        line = line.trim();

        // Start Node
        if (line.startsWith("Begin Object")) {
          const cls = line.match(/Class=([^\s]+)/)?.[1] || "";
          const name = line.match(/Name="([^"]+)"/)?.[1];

          let type = "function";
          if (cls.includes("Event")) type = "event";
          else if (cls.includes("Variable")) type = "variable";
          else if (cls.includes("K2Node_Macro")) type = "macro";

          curr = {
            id: name,
            type: type,
            title: name,
            x: 0,
            y: 0,
            inputs: [],
            outputs: [],
          };
        }
        // End Node
        else if (line.startsWith("End Object") && curr) {
          this.nodes.push(curr);
          curr = null;
        }
        // Parse Properties
        else if (curr) {
          // Position
          const x = line.match(/NodePosX=(-?\d+)/);
          const y = line.match(/NodePosY=(-?\d+)/);
          if (x) curr.x = parseInt(x[1]);
          if (y) curr.y = parseInt(y[1]);

          // Better Title
          const memberName = line.match(/MemberName="([^"]+)"/);
          const funcRef = line.match(
            /FunctionReference=\(MemberName="([^"]+)"/
          );
          if (funcRef) curr.title = funcRef[1].replace(/_/g, " ");
          else if (memberName) curr.title = memberName[1].replace(/_/g, " ");

          // Pins
          if (line.includes("CustomProperties Pin")) {
            const props = line.match(/\((.+)\)/)?.[1] || "";

            const pinId = props.match(/PinId=([^,]+)/)?.[1];
            const pinName = props.match(/PinName="([^"]+)"/)?.[1] || "";
            const pinDir = props.includes("EGPD_Output") ? "out" : "in";
            const pinCat = props.match(/PinCategory="([^"]+)"/)?.[1] || "exec";
            const linkedTo = props.match(/LinkedTo=\((.+?)\)/);

            // Clean Names
            let display = pinName;
            if (pinName === "execute" || pinName === "then") display = "";

            const pin = {
              id: pinId,
              name: display,
              type: pinCat,
              dir: pinDir,
              connected: !!linkedTo,
            };

            if (pinDir === "out") curr.outputs.push(pin);
            else curr.inputs.push(pin);

            // Connections
            if (linkedTo) {
              // Format: (NodeName PinId, NodeName PinId)
              const links = linkedTo[1].split(",");
              links.forEach((link) => {
                const parts = link.trim().split(/\s+/);
                if (parts.length >= 2 && pinDir === "out") {
                  this.connections.push({ from: pinId, to: parts[1] });
                }
              });
            }
          }
        }
      });
    }

    render() {
      this.nodeLayer.innerHTML = "";

      this.nodes.forEach((node) => {
        const el = document.createElement("div");
        el.className = `bp-node ${node.type}`;
        el.style.left = node.x + "px";
        el.style.top = node.y + "px";
        el.id = node.id;

        let html = `<div class="bp-header">${node.title}</div>`;
        html += `<div class="bp-body">`;

        // Inputs
        html += `<div class="bp-col">`;
        node.inputs.forEach((p) => {
          html += `<div class="bp-pin in type-${p.type} ${
            p.connected ? "connected" : ""
          }" id="pin-${p.id}">
                        <div class="bp-pin-icon" id="${p.id}"></div>
                        <span>${p.name}</span>
                    </div>`;
        });
        html += `</div>`;

        // Outputs
        html += `<div class="bp-col">`;
        node.outputs.forEach((p) => {
          html += `<div class="bp-pin out type-${p.type} ${
            p.connected ? "connected" : ""
          }" id="pin-${p.id}">
                        <span>${p.name}</span>
                        <div class="bp-pin-icon" id="${p.id}"></div>
                    </div>`;
        });
        html += `</div></div>`;

        el.innerHTML = html;
        this.nodeLayer.appendChild(el);

        // Drag Logic
        el.addEventListener("mousedown", (e) => {
          e.stopPropagation();
          this.isDragging = true;
          this.dragNode = node;
          this.dragEl = el;
          // Bring to front
          document
            .querySelectorAll(".bp-node")
            .forEach((n) => (n.style.zIndex = 10));
          el.style.zIndex = 50;
        });
      });

      this.renderWires();
    }

    renderWires() {
      this.svgLayer.innerHTML = "";
      this.connections.forEach((conn) => {
        const startEl = this.nodeLayer.querySelector(`[id="${conn.from}"]`);
        const endEl = this.nodeLayer.querySelector(`[id="${conn.to}"]`);

        if (!startEl || !endEl) return;

        const getCenter = (el) => {
          const r = el.getBoundingClientRect();
          const c = this.nodeLayer.getBoundingClientRect();
          return {
            x: r.left - c.left + r.width / 2,
            y: r.top - c.top + r.height / 2,
          };
        };

        const p1 = getCenter(startEl);
        const p2 = getCenter(endEl);

        // Pin Color Logic (simplified)
        let color = "#fff";
        if (startEl.closest(".type-bool")) color = "#920101";
        if (startEl.closest(".type-float")) color = "#99ff22";

        // Bezier Curve
        const dist = Math.abs(p2.x - p1.x) * 0.6;
        const d = `M ${p1.x} ${p1.y} C ${p1.x + dist} ${p1.y}, ${p2.x - dist} ${
          p2.y
        }, ${p2.x} ${p2.y}`;

        const path = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        path.setAttribute("d", d);
        path.setAttribute("stroke", color);
        this.svgLayer.appendChild(path);
      });
    }

    autoCenter() {
      if (this.nodes.length === 0) return;
      let minX = Infinity,
        minY = Infinity;
      this.nodes.forEach((n) => {
        if (n.x < minX) minX = n.x;
        if (n.y < minY) minY = n.y;
      });

      // Center in current view
      const cw = this.container.clientWidth;
      const ch = this.container.clientHeight;

      this.pan.x = cw / 2 - minX - 100; // -100 approx half node width
      this.pan.y = ch / 2 - minY - 50;
      this.updateTransform();
    }

    updateTransform() {
      this.canvas.style.transform = `translate(${this.pan.x}px, ${this.pan.y}px)`;
    }

    setupInteraction() {
      // Pan Container
      this.container.addEventListener("mousedown", (e) => {
        // Don't pan if clicking a button or controls or if in text view
        if (this.isTextView) return;
        if (e.target.closest(".bp-controls") || e.target.closest(".bp-btn"))
          return;

        if (e.target === this.container || e.target === this.svgLayer) {
          this.isPanning = true;
          this.startPan = {
            x: e.clientX - this.pan.x,
            y: e.clientY - this.pan.y,
          };
          this.container.style.cursor = "grabbing";
        }
      });

      window.addEventListener("mousemove", (e) => {
        if (this.isPanning) {
          this.pan.x = e.clientX - this.startPan.x;
          this.pan.y = e.clientY - this.startPan.y;
          this.updateTransform();
        }
        if (this.isDragging && this.dragNode) {
          this.dragNode.x += e.movementX;
          this.dragNode.y += e.movementY;
          this.dragEl.style.left = this.dragNode.x + "px";
          this.dragEl.style.top = this.dragNode.y + "px";
          this.renderWires();
        }
      });

      window.addEventListener("mouseup", () => {
        this.isPanning = false;
        this.isDragging = false;
        this.dragNode = null;
        this.container.style.cursor = "default";
      });
    }
  }

  // --- 3. AUTOMATIC INITIALIZATION ---
  // Scans for <script bp-file="..."> and replaces/appends the viewer
  document.addEventListener("DOMContentLoaded", () => {
    const scripts = document.querySelectorAll("script[bp-file]");
    scripts.forEach((script) => {
      const url = script.getAttribute("bp-file");

      const wrapper = document.createElement("div");
      wrapper.className = "bp-container";

      // Insert viewer immediately after the script tag
      script.parentNode.insertBefore(wrapper, script.nextSibling);

      new BlueprintViewer(wrapper, url);
    });
  });
})();
