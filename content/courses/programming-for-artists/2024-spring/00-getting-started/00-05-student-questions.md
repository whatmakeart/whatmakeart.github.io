---
title: 00.05 Student Questions
date: 2024-01-27T10:10:03
lastmod: 2024-01-27T12:28:50
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

2. How can we modify the ball bounce example from class to have multiple balls bouncing?

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

    // create a move method / function
    // in the previous sketch this was x = x + speedX; and y = y + SpeedY;
    // and both incrementors were in the draw() function in the draw() function
    // since it is a class the "this" keyword is needed for the variables
    this.move = function () {
      this.x = this.x + this.speedX; // could be shortened but left explicit for clarity
      this.y = this.y + this.speedY; // could be shortened but left explicit for clarity

      if (this.x >= width - this.size / 2 || this.x <= this.size / 2) {
        // reverses the X speed by multiplying by -1
        this.speedX = this.speedX * -1; // could be shortened but left explicit for clarity
        this.changeColor();
      }
      if (this.y > height - this.size / 2 || this.y < this.size / 2) {
        // reverses the Y speed by multiplying by -1
        this.speedY = this.speedY * -1; // could be shortened but left explicit for clarity
        this.changeColor();
      }
    };

    // create a display method / function for drawing the ellipse / ball
    this.display = function () {
      fill(this.r, this.g, this.b, this.a);
      ellipse(this.x, this.y, this.size, this.size);
    };

    this.changeColor = function () {
      this.r = random(255);
      this.g = random(255);
      this.b = random(255);
      this.a = random(255);
    };
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
  noStroke();
  background(random(255), random(255), random(255));
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
