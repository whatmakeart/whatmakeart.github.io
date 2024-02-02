---
title: 03.07 Object Method Interaction
date: 2024-02-03T09:30:00
lastmod: 2024-02-02T13:52:33
---

The example below uses `array.splice` [^mdn-splice] instead of the p5.js `splice()` which is depreciated in p5.js. [^p5-splice]

[Falling Boxes Remove from Array Demo](https://editor.p5js.org/whatmakeart/sketches/rmWuJXYSO)

```js
// Falling Boxes Remove from Array Demo
// https://editor.p5js.org/whatmakeart/sketches/rmWuJXYSO
let boxes = [];

let multiplier = 3; // box size multiplier

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  // Loop through Draw and update all boxes
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].drawBox(); // Use the draw method to display each box
    boxes[i].dropBox(); // Update the falling position of each box
  }

  // Filter boxes that haven't fallen off the screen
  let filteredBoxes = []; // This will hold boxes that are not off-screen
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].isOffScreen()) {
      // Verbose conditional to make it clear what's happening
    } else {
      // This box is not off-screen, so we include it in the new array
      filteredBoxes.push(boxes[i]);
    }
  }
  boxes = filteredBoxes; // Replace the original array with the filtered one
}

function mouseDragged() {
  // Create a new Box object with size affected by the 'multiplier'
  boxes.push(new Box(mouseX, mouseY, movedX * multiplier, movedY * multiplier));
}

class Box {
  constructor(x, y, sizeW, sizeH) {
    this.x = x; // x position
    this.y = y; // y position (height from top)
    this.sizeW = sizeW; // width of the box
    this.sizeH = sizeH; // height of the box
    this.speed = 0; // speed of the box falling
    this.gravity = 0.1; // gravity effect, increasing the speed over time
  }
  drawBox() {
    rect(this.x, this.y, this.sizeW, this.sizeH);
  }
  dropBox() {
    this.speed += this.gravity; // Simulate gravity
    this.y += this.speed; // Move the box down based on its speed
  }
  isOffScreen() {
    // Check if the box has fallen off the bottom of the screen
    if (this.y > height) {
      // If true, return true indicating 'y' is greater than height
      return true;
    } else {
      // Otherwise, return false indicating 'y' is not greater than height
      return false;
    }
  }
}
```

## References

[^mdn-splice]: [MDN array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
[^p5-splice]: [p5.js splice()](https://p5js.org/reference/#/p5/splice)
