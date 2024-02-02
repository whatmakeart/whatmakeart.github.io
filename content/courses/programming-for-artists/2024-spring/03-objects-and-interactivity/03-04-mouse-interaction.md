---
title: 03.04 Mouse Interaction
date: 2024-02-03T09:30:00
lastmod: 2024-02-02T07:18:29
---

## p5.js Built in Mouse Functions and Variables [^p5-reference]

### Mouse Functions

mouseMoved(), mouseDragged(), mousePressed(), mouseReleased(), mouseClicked(), doubleClicked(), mouseWheel(), requestPointerLock(), exitPointerLock()

### Mouse Variables

movedX, movedY, mouseX, mouseY, pmouseX, pmouseY, winMouseX, winMouseY, pwinMouseX, pwinMouseY, mouseButton, mouseIsPressed

[Mouse Dragged Example Sketch](https://editor.p5js.org/whatmakeart/sketches/_4hpJnzHE)

```js
// example showing mouseDragged creating box objects from a class and using array to hold the objects
// https://editor.p5js.org/whatmakeart/sketches/_4hpJnzHE

let boxes = [];
let multiplier = 3; // box size multiplier

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  // Draw all boxes
  // Loop over the boxes array in reverse order to avoid skipping array elements if looping forwards due to the splice removal
  for (let i = boxes.length - 1; i >= 0; i--) {
    boxes[i].drawBox(); // Use the draw method to display each box
    boxes[i].dropBox(); // Update the falling position of each box

    // Check if the box has fallen off the screen and remove it if it has
    if (boxes[i].isOffScreen()) {
      // This will call the new method we'll add
      boxes.splice(i, 1); // Remove the box from the array
    }
  }
}

function mouseDragged() {
  // Create a new Box object with size affected by the 'multiplier'
  boxes.push(new Box(mouseX, mouseY, movedX * multiplier, movedY * multiplier));
}

class Box {
  constructor(w, h, sizeW, sizeH) {
    this.w = w; // x position
    this.h = h; // y position (height from top)
    this.sizeW = sizeW; // width of the box
    this.sizeH = sizeH; // height of the box
    this.speed = 0; // speed of the box falling
    this.gravity = 0.1; // gravity effect, increasing the speed over time
  }
  drawBox() {
    rect(this.w, this.h, this.sizeW, this.sizeH);
  }
  dropBox() {
    this.speed += this.gravity; // Simulate gravity
    this.h += this.speed; // Move the box down based on its speed
  }
  isOffScreen() {
    // Check if the box has fallen off the bottom of the screen
    // Ensure the entire box has moved past the bottom edge of the screen by doubling screen height
    // could be written shorter but kept in conditional for understanding
    if (this.h > height * 2) {
      return true;
    }
  }
}
```

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
