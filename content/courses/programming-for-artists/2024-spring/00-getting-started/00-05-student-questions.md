---
title: 00.05 Student Questions
date: 2024-01-27T10:10:03
lastmod: 2024-02-04T12:04:58
---

_Click on questions to expand solution._

## Week 2 Questions

<button class="text-start btn btn-outline-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse2">

1. How can you make the circles that randomly appear on the screen start to disappear after some time like rain drops?

</button>
<div class="collapse" id="collapse1">

[Link to p5.js Web Editor Example of Drops that Disappear](https://editor.p5js.org/whatmakeart/sketches/7zil20gY6)

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

</div>

<hr>

<button class="text-start btn btn-outline-dark" style="width:100%;" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">

2. How can we modify the ball bounce example from class to have multiple balls bouncing?

</button>
<div class="collapse" id="collapse2">

[Link to p5.js Web Editor Example using a Ball class](https://editor.p5js.org/whatmakeart/sketches/36YIBlx3Z)

To make multiple instances of a bouncing ball we can use a class. We will cover classes and objects later in the course but for now remember that each ball has its own characteristics such as its `x` and `y` and `speedX` and `speedY` and color. These characteristics are defined in the class and then kept track of individually in a list or an array.

```javascript
// modification of ball bounce example from with multiple balls
// https://editor.p5js.org/whatmakeart/sketches/36YIBlx3Z

// create a Ball class to have multiple independent ball objects
class Ball {
  // constructor is like a setup() function for the class
  constructor(x, y, size, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
    this.r = random(255); // initial random red value
    this.g = random(255); // initial random green value
    this.b = random(255); // initial random blue value
    this.a = random(255); // initial random alpha value
  }

  // create a move method / function
  // in the previous sketch this was x = x + speedX; and y = y + SpeedY;
  // and both incrementors were in the draw() function in the draw() function
  // since it is a class the "this" keyword is needed for the variables
  move() {
    this.x = this.x + this.speedX; // could be shortened but left explicit for clarity
    this.y = this.y + this.speedY; // could be shortened but left explicit for clarity

    if (this.x >= width - this.size / 2 || this.x <= this.size / 2) {
      // reverses the X speed by multiplying by -1
      this.speedX = this.speedX * -1; // could be shortened but left explicit for clarity
      this.changeColor(); // same as previous example but now a method of the class
    }
    if (this.y > height - this.size / 2 || this.y < this.size / 2) {
      // reverses the Y speed by multiplying by -1
      this.speedY = this.speedY * -1; // could be shortened but left explicit for clarity
      this.changeColor(); // same as previous example but now a method of the class
    }
  }

  // create a display method / function for drawing the ellipse / ball
  display() {
    fill(this.r, this.g, this.b, this.a); // was previously in the draw function
    ellipse(this.x, this.y, this.size, this.size); // was previously in the draw function
  }

  changeColor() {
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.a = random(255);
  }
}

// create the balls array to hold the Ball objects
let balls = [];

let numBalls;
let ballMinSize = 25;
let ballMaxSize = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  numBalls = random(10, 80); // random number of initial balls created
  // create the list / array of balls
  for (let i = 0; i < numBalls; i++) {
    balls.push(
      new Ball(
        random(ballMaxSize, width - ballMaxSize),
        random(ballMaxSize, height - ballMaxSize),
        random(ballMinSize, ballMaxSize),
        random(1, 3),
        random(1, 3)
      )
    );
  }
  noStroke(); // remove the stroke
  background(random(255), random(255), random(255)); // start with random color background
}

function draw() {
  //background(0, 150, 100); // You can comment this out for a trail effect
  for (let i = 0; i < balls.length; i++) {
    // move is still in the draw function but now is a method from the Ball class working on the [i] object
    balls[i].move();
    // display is still in the draw function but now is a method from the Ball class working on the [i] object
    balls[i].display();
  }
}

// built in p5.js window resize function
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
```

</div>

## Week 3 Questions

<button class="text-start btn btn-outline-dark" style="width:100%;" type="button" data-bs-toggle="collapse" data-bs-target="#week3-1" aria-expanded="false" aria-controls="collapse2">

1. How do you use a sprite instead of a circle for the pebble?

</button>

<div class="collapse" id="week3-1">

To use an image in a p5.js sketch you first need to upload the image to the p5.js Web Editor or have the image in your GitHub Repository, or hosted on your web hosting.

Then you set a variable to hold the image. After the variable is set, you "pre-load" the image into the variable. Then you use the `image()` function and the variable holding the image to display it. You only need the starting x and y coordinates, but the `image()` function has options for scaling the image and for cropping the top left corner and the bottom right corner of the image. There are additional parameters for determining which part of a cropped image to show. See the [p5.js image() Reference Page](https://p5js.org/reference/#/p5/image) for more details.

```js
// p5.js use an image demo
// https://editor.p5js.org/whatmakeart/sketches/WlIN-W1S5

// set a variable to hold the image
let myImage;

// preload the image file
function preload() {
  myImage = loadImage("snowflake.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  image(myImage, 25, 25, 150, 150);
}
```

</div>
<hr>

<button class="text-start btn btn-outline-dark" style="width:100%;" type="button" data-bs-toggle="collapse" data-bs-target="#week3-2" aria-expanded="false" aria-controls="collapse2">

2. How do you make a color pallet cycle with a key press?

</button>

<div class="collapse" id="week3-2">

[Example showing cycling of colors when any key is pressed](https://editor.p5js.org/whatmakeart/sketches/h2YKjNmTp)

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

</div>

<hr>

<button class="text-start btn btn-outline-dark" style="width:100%;" type="button" data-bs-toggle="collapse" data-bs-target="#week3-3" aria-expanded="false" aria-controls="collapse2">

3. How do you make the pebbles stop at the ground after falling?

</button>

<div class="collapse" id="week3-3">

[How to make the pebbles stop at the ground](https://editor.p5js.org/whatmakeart/sketches/mHoGNjdbF)

```js
// How to make the pebbles stop at the ground
// https://editor.p5js.org/whatmakeart/sketches/mHoGNjdbF

let pebbles = []; // create an array to hold the pebble objects
let gravity = 1.04; // set a value for gravity

// create a Pebble class
class Pebble {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  // add method to show pebble
  showPebble() {
    // pass the parameters for "this" specific pebble
    circle(this.x, this.y, this.size);
  }

  // add drop method to pebble class
  dropPebble(ground) {
    // pebble falls by multiplying "this" specific "y" by "gravity"
    this.y = this.y * gravity;

    // check if pebble hit the ground
    // add half the size (radius) to height and see if greater than the "ground" value passed in
    // could pass a different value for ground to make pebbles stop sooner
    // if it is at the ground then set the "this.y" to the ground minus the radius since the pixels count from the top of the screen
    if (this.y + this.size / 2 >= ground) {
      this.y = ground - this.size / 2;
      //this.x++
    }
  }
}

function setup() {
  createCanvas(400, 400);
  for (i = 0; i < 50; i++) {
    pebbles.push(new Pebble(random(width), random(height), random(10, 50)));
  }
}

function draw() {
  background(220);
  for (let i = 0; i < pebbles.length; i++) {
    pebbles[i].showPebble();
    // pass the height in for ground or any other y position then call dropPebble
    pebbles[i].dropPebble(height);
  }
}

// can be mouseClicked or mouseDragged
function mouseDragged() {
  pebbles.push(new Pebble(mouseX, mouseY, random(10, 50)));
}
```

</div>

<hr>

<button class="text-start btn btn-outline-dark" style="width:100%;" type="button" data-bs-toggle="collapse" data-bs-target="#week3-4" aria-expanded="false" aria-controls="collapse2">

4. How to turn the cursor into a rocket ship that tilts in the direction the mouse is moving?

</button>

<div class="collapse" id="week3-4">

[rotate rocket cursor demo](https://editor.p5js.org/whatmakeart/sketches/tFBgKYYlc)

```js
// rotate rocket cursor demo
// https://editor.p5js.org/whatmakeart/sketches/tFBgKYYlc

let rocketX = 200; // initial X position of the rocket
let rocketOffset = 100;
let fontSize = 32;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  textSize(fontSize);

  // rocketY offset above the bottom of the canvas
  let rocketY = height - rocketOffset;

  // lerp function smoothly interpolates the rocketX position towards the mouseX position
  // third argument determines the amount of movement per frame (0.05 for a slower, delayed following effect, and 0.15 for a more snappy effect)
  // https://p5js.org/reference/#/p5.Vector/lerp
  rocketX = lerp(rocketX, mouseX, 0.05);

  // calculate the direction vector pointing from the rocket to the cursor
  // a vector is a (x,y) coordinate
  let directionX = mouseX - rocketX;
  let directionY = mouseY - rocketY;

  // set angle mode to RADIANS
  angleMode(RADIANS);
  // "Calculates the angle formed by a specified point, the origin, and the positive x-axis."
  // "The atan2() function is most often used for orienting geometry to the mouse's position."
  // https://p5js.org/reference/#/p5/atan2
  let angle = atan2(directionY, directionX);

  // push() and pop() needed to perform translations in p5.js
  push();
  // move the origin to the rocket's interpolated (lerp) X position and fixed Y position
  // would be fun to add a small range for interpolated up down Y movement
  translate(rocketX, rocketY);
  // add the initial angle of rocket emoji (45 degrees or PI/4 radians) to the calculated angle
  rotate(angle + PI / 4);

  // draw the rocket emoji at 0, 0 for rotation
  text("🚀", 0, 0);
  pop();
}
```

</div>

#### In Progress

How to generate multiple particles that appear on the screen and have independent motion?
How to add a second moving object bounce off edges of canvas without duplicating if statements for first object?
How to have balls bounce against the sides of a shape that is not the edge of the canvas?
How to move objects across the screen with varying opacity over time and at varying speeds?
How to add an image background?
