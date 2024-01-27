---
title: 00.05 Student Questions
date: 2024-01-27T10:10:03
lastmod: 2024-01-27T10:23:11
---

1. **How can you make the circles that randomly appear on the screen start to disappear after some time like rain drops?**

In the first `random()` example, we just filled the p5.js Canvas with more randomly spaced circles or shapes as the `draw()` function looped. Each shape was drawn and then the next ones drawn on top with no way to keep track of the shapes.

In order to keep track of the shapes we need to make a list of the circles. To make a list in JavaScript we can use an Array. We will talk about arrays more, but you can think of it as a list.

Then instead of just drawing a circle, we need to make a circle object. _We will cover objects in the course_. But for now think of it as there are students in the classroom, and each student has a unique name. We could then write down the students names in order on a list, or in an Array.

An object is a list of name value pairs. In the case of the "drops" each drop has an x, y, size, and color.

```javascript
// example of name value pairs in object literal
drops.push({
  x: random(0 - dropMaxSize, width + dropMaxSize), // drops can fill the full horizontal canvas
  y: random(0 - dropMaxSize, height + dropMaxSize), // drops can fill the full vertical canvas
  size: random(dropMinSize, dropMaxSize), // drops in the size range
  r: random(255), // red
  g: random(255), // green
  b: random(255), // blue
  a: random(255), // alpha
});
```

Then we can use a loop to cycle through the list and add a new object at the end of the list and remove the first object from the list. We will cover loops later in the course.

To add an object we can use `push`.

To remove an object, we can use `pop` or `shift`.

- `pop` removes the last object in the list
- `shift` removes the first object in the list

[Link to p5.js Web Editor Example of Drops that Disappear](https://editor.p5js.org/whatmakeart/sketches/7zil20gY6)

```javascript
// random drops on screen that get removed in order ass drops increase above limit
// https://editor.p5js.org/whatmakeart/sketches/7zil20gY6

let drops = []; // create an array to hold the list of drops
let numDrops = 250; // max number of drops before removing
let dropMaxSize = 50; // max drop size
let dropMinSize = 5; // min drop size
let backRed; // variable for background red
let backGreen; // variable for background green
let backBlue; // variable for background blue

function setup() {
  createCanvas(windowWidth, windowHeight); // canvas the size of the window
  backRed = random(255); // set a random  Red value once in setup()
  backGreen = random(255); // set a random Green value once in setup()
  backBlue = random(255); // set a random Blue value once in setup()
}

function draw() {
  // set the background color in draw() so the first dots can disappear
  background(backRed, backGreen, backBlue);

  // Add a new drop object to the array if there are less than numDrops in the drops array
  // remember to use , commas at end not semi colons;
  if (drops.length < numDrops) {
    // adds or pushes an object literal {} representing an individual drop into the drops array if there are less than numDrops
    // each object literal has its own index in the array starting with [0]
    drops.push({
      x: random(0 - dropMaxSize, width + dropMaxSize), // drops can fill the full horizontal canvas
      y: random(0 - dropMaxSize, height + dropMaxSize), // drops can fill the full vertical canvas
      size: random(dropMinSize, dropMaxSize), // drops in the size range
      r: random(255), // red
      g: random(255), // green
      b: random(255), // blue
      a: random(255), // alpha
    });
  }

  // Draw all of the drops
  // as the for loop iterates i increases and it uses that number object from the drops array
  for (let i = 0; i < drops.length; i++) {
    noStroke();
    fill(drops[i].r, drops[i].g, drops[i].b, drops[i].a);
    ellipse(drops[i].x, drops[i].y, drops[i].size);
  }

  // Remove the first drop if array length is greater than or equal to numDrops
  // needs to have equal so it doesn't freeze at the same as numDrops
  if (drops.length >= numDrops) {
    drops.shift(); // Remove the first drop from the array
  }
}

// built in p5.js function that updates the canvas size when the user resizes the browser window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
```
