---
title: 03.05 Keyboard Interaction
date: 2024-02-03T09:30:00
lastmod: 2024-02-02T13:02:23
---

## p5.js Keyboard Functions and variables [^p5-reference]

- keyPressed()
- keyReleased()
- keyTyped()
- keyIsDown()
- keyIsPressed
- key
- keyCode

### `keyPressed()` function

The `keyPressed()` function works differently if it is inside or outside of `draw()`. If it is inside, then the key needs to be held, if it is outside, then it acts like a toggle.

[keyPressed Example Sketch](https://editor.p5js.org/whatmakeart/sketches/h2YKjNmTp)

```js
// Example showing cycling of colors when any key is pressed
// https://editor.p5js.org/whatmakeart/sketches/h2YKjNmTp

let keyColor = []; // Holds the array of colors
let colorIndex; // Holds the current index of the color array

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  colorMode(HSB); // Use HSB color mode
  // Initialize the array of colors
  keyColor = [
    [155, 167, 55],
    [23, 44, 189],
    [123, 144, 49],
    [12, 244, 229],
  ];
  colorIndex = 0; // Start with the first color
}

function draw() {
  fill(keyColor[colorIndex]); // Set the fill color before drawing shapes
  rectMode(CENTER); // draw rectangle from center
  rect(width / 2, height / 2, 100, 100);
  fill(0);
  textSize(50);
  textAlign(CENTER);
  text("Press any key to cycle the colors", width / 2, height / 4);
}

// This function is called whenever any key is pressed
function keyPressed() {
  colorIndex++; // Move to the next color
  if (colorIndex >= keyColor.length) {
    // If beyond the last color, cycle back to the first
    colorIndex = 0;
  }

  return false; // Prevent any default behavior triggered by key presses
}
```

## References

[^p5-reference]: [p5.js Reference](https://p5js.org/reference/)
