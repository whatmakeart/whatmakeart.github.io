---
title: 02.10 Functions p5.js
date: 2024-01-26T09:30:00
lastmod: 2024-02-02T13:25:25
---

## Functions

There are built in functions in p5.js. `background(220);` is a built in function that draws a background on a canvas created by the built in function `createCanvas(400,400);`. Functions can help organize your program by breaking it up into smaller, understandable parts and by making code more reusable. Anytime that you notice the same code repeated in your program, there is likely a better way to write it. Perhaps it should be written as a loop, or it might be better to write it as a function. A loop is kind of like a built in function in Javascript.

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/dHKhVQ7aQcw?si=Ujtz4Rg0_NjFp89h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

https://editor.p5js.org/whatmakeart/sketches/NGOVoTnMd

### Defining Functions

```javascript
// defining a function

function myFunction() {
  console.log("Functions are rad.");
}
```

### Calling Functions

```javascript
// calling a function

myFunction();
```

## Organizing Code with Modular Functions

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/bHlJxg3kgpY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

```javascript

setup(){
  createCanvas(400,400);
  background(220);
}

draw(){

  myFunction();
  myOtherFunction();
  noWayAnotherFunction();
}

function myFunction() {
  console.log("This is myFunction running.");
}

function myOtherFunction() {
  console.log("This is myOtherFunction running.");
}

function noWayAnotherFunction() {
  console.log("This is noWayAnotherFunction running.");
}

```

## Function Parameter Demos

[Function Demo](https://editor.p5js.org/whatmakeart/sketches/XBmTet_rd)

```js
// function demo
// https://editor.p5js.org/whatmakeart/sketches/XBmTet_rd

let myVariable;
function setup() {
  createCanvas(400, 400);
  myVariable = random(35, 45);
}

function draw() {
  background(220);
  whoIsBorris(myVariable, 14, 212, 0); // send parameter
}
// function with color parameter
function whoIsBorris(scleraSize, irisSize, scleraColor, irisColor) {
  ellipseMode(CENTER);
  fill(scleraColor);
  circle(120, 120, scleraSize);
  circle(170, 120, scleraSize);
  fill(irisColor); // use parameter
  circle(120, 120, irisSize);
  circle(170, 120, irisSize);
  circle(145, 150, 15);
  console.log("Borris rad.");
}
```

## Add and Subtract Function Parameter Demo with Mouse Interaction

[Add and Subtract Function Parameter Demo with Mouse Interaction](https://editor.p5js.org/whatmakeart/sketches/pTLKbwWNp)

```js
// add and subtract function parameter demo
// https://editor.p5js.org/whatmakeart/sketches/pTLKbwWNp
let number1 = 2;
let number2 = 24;
let myNumber;
let operation = "add";

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function jimmysCalculator(a, b, operation) {
  let result;
  if (operation === "add") {
    result = a + b;
  } else if (operation === "subtract") {
    result = a - b;
  }
  return result;
}

function mousePressed() {
  if (mouseButton === LEFT) {
    operation = "add";
    console.log("Added " + number2);
  }
  if (mouseButton === CENTER) {
    operation = "subtract";
    console.log("Subtracted " + number2);
  }
  myNumber = jimmysCalculator(number1, number2, operation);
  number1 = myNumber;
  console.log(myNumber);
}
```
