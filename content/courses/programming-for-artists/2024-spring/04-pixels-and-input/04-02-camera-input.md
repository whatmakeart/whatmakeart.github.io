---
title: 04.02 Camera Input
date: 2024-02-09T09:30:00
lastmod: 2024-02-09T08:58:59
---

p5.js has a [video capture](https://p5js.org/examples/dom-video-capture.html) ability built into the library.

```js
// video capture example from p5.js Reference
// https://p5js.org/examples/dom-video-capture.html
let capture;

function setup() {
  createCanvas(390, 240);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  //capture.hide();
}

function draw() {
  background(255);
  image(capture, 0, 0, 320, 240);
  filter(INVERT);
}
```
