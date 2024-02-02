---
title: 03.04 Mouse Interaction
date: 2024-02-03T09:30:00
lastmod: 2024-02-02T13:12:03
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

## References

[^p5-reference]: [p5.js Reference](https://p5js.org/reference/)
