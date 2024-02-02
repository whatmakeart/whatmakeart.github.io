---
title: 03.03 Classes JavaScript
date: 2024-02-03T09:30:00
lastmod: 2024-02-02T13:14:20
---

Classes in JavaScript are a way to make reusable templates for objects and to clearly define functions/methods for those objects without duplicating everything. There are other ways to achieve the same results in JavaScript without using classes, but classes are a good way to organize your program for readability and reusability.

A class uses a `constructor()` function to define the attributes of an object. After the `constructor()` function, methods can be defined.

[Simple Class Demo](https://editor.p5js.org/whatmakeart/sketches/alPi-5hDW)

```js
// simple class demo
// https://editor.p5js.org/whatmakeart/sketches/alPi-5hDW
class Student {
  constructor(name, major) {
    this.name = name;
    this.major = major;
  }

  showName() {
    console.log(this.name);
  }

  showMajor() {
    console.log(this.major);
  }
}

// give the new object parameters as strings of text
let student1 = new Student("Jimmy", "Sculpture");
let student2 = new Student("Borris", "Cat Biology");

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  // Call the class methods
  student1.showName();
  student1.showMajor();
  student2.showName();
  student2.showMajor();
}

function draw() {}
```

## Classes with Arrays and Loops

While the `class Student` example above makes a good template, we are still needlessly repeating our code by manually making `student1` and `student2`. This is fine for a few objects, but what about 25 objects? Or 200 objects? Or 2456535 objects? There must be a better way. There is.

We can create the objects with a loop, and then store them in an array. We can use the index number of the array to get a specific object.

[Modification of ball bound example with multiple balls](https://editor.p5js.org/whatmakeart/sketches/36YIBlx3Z)

```js
// modification of ball bounce example with multiple balls
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

  // method to change the color of each ball
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
let ballMinSize = 32;
let ballMaxSize = 66;

function setup() {
  createCanvas(windowWidth, windowHeight);
  numBalls = random(15, 80); // random number of initial balls created
  // create the list / array of balls
  for (let i = 0; i < numBalls; i++) {
    balls.push(
      new Ball(
        random(ballMaxSize, width - ballMaxSize),
        random(ballMaxSize, height - ballMaxSize),
        random(ballMinSize, ballMaxSize),
        random(-5, 5),
        random(-5, 5)
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
