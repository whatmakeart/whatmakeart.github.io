---
title: 03.04 Mouse Interaction
date: 2024-02-03T09:30:00
lastmod: 2024-02-05T16:37:39
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

## Simple Mouse Click Interaction Game Demo

[p5.js simple click game demo without objects, arrays, and classes](https://editor.p5js.org/whatmakeart/sketches/iF8fQX3kL)

```js
// simple click game demo without objects, arrays, and classes
// https://editor.p5js.org/whatmakeart/sketches/iF8fQX3kL

let circleX;
let circleY;
let resetSize = 50;
let circleSize = resetSize;
let changeAmmount = 5;
let distance;
let clicksCount = 0;
let missesCount = 0;
function setup() {
  createCanvas(400, 400);
  circleX = width / 2; // circle in the horizontal center
  circleY = height / 2; // circle in the vertical center
}

function draw() {
  background(220);

  ellipseMode(CENTER);
  circle(circleX, circleY, circleSize);
  // draw line from center of circle to mouse
  line(circleX, circleY, mouseX, mouseY);
  // calculate distance
  // https://p5js.org/reference/#/p5/dist
  distance = dist(circleX, circleY, mouseX, mouseY);

  fill(0); // make text black
  textAlign(CENTER); // center text
  text("Distance from center of circle = " + distance, width / 2, height / 4); // print distance to mouse
  text("radius of circle = " + circleSize / 2, width / 2, height / 5); // print radius of circle diameter / 2

  text("Total Misses = " + missesCount, width / 4, height / 1.1); // print number of miss clicks
  text("Total Hits = " + clicksCount, width / 1.3, height / 1.1); // print number of miss clicks

  // change color of circle if mouse inside
  if (distance < circleSize / 2) {
    fill(255, 0, 0);
  } else {
    fill(255);
  }

  // keep circle from going off screen

  if (circleX < 0 || circleX > width) {
    circleX = width / 2;
    circleSize = resetSize;
    missesCount = 0;
    clicksCount = 0;
  }
}

// move circle right if clicked inside and left if outside
// make circleSize Bigger or Smaller if clicked in or out
// keep track of clicks
function mousePressed() {
  if (distance < circleSize / 2) {
    circleSize += changeAmmount; // increase size by changeAmmount
    circleX = circleX + 10; // move to the right
    clicksCount++;
    console.log("clicked inside");
  } else if (distance > circleSize) {
    if (circleSize > changeAmmount) {
      circleSize -= changeAmmount; // decrease size by changeAmmount only if bigger than changeAmmount
    }
    circleX = circleX - 10; // move to the left
    missesCount++;
    console.log("clicked outside");
  }
}
```

## References

[^p5-reference]: [p5.js Reference](https://p5js.org/reference/)
