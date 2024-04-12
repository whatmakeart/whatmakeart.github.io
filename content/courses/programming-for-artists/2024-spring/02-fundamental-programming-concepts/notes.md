---
title: Draft Notes
date: 2024-01-13T06:32:31
lastmod: 2024-04-12T06:17:42
draft: true
---

### Coding Tips

- How to cycle a number from positive to negative to positive?

  - Multiply the number by -1. `myNumber = myNumber * -1;`
  - -4 \* -1 = 4
  - 4 \* -1 = -4
  - -4 \* -1 = 4
  - ...

- How to cycle a boolean variable between true and false?

```javascript
var myVariable = true;
// mousePressed is a p5.js function that returns a true value once if the mouse is clicked
if (mousePressed == true) {
  // This can be shortened to if (mousePressed) {
  myVariable = false;
} else {
  myVariable = true;
}

// Can be condensed further with the Not ! operator
var myVariable = true;
if (mousePressed) {
  myVariable = !myVariable;
  // This changes the variable to whatever it is not. So if it is true it changes to not true or false.
  // If it is false then it changes to not false or true.
}
```

## Arrays

Arrays are a list of values. Multiple variables can also be a list of values but an array is a better way to handle multiple values since each item in the array can hold more information in the case of holding objects.

For example, I could make 3 car variables and then print their values to the console.

```javascript
// declare three car variables
let car1 = "wagon";
let car2 = "truck";
let car3 = "convertible";

// print each variable to the console
console.log(car1);
console.log(car2);
console.log(car3);

// make an array and fill it with cars
let cars = ["wagon", "truck", "convertible"];

// print each array item to the console
// Note this could be done with a loop but using three console.log statements to be clear
// Arrays start with a 0 index number
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
```

- How to refer to items in the array? How to access them?
- Strings vs Numbers in an array
- show how to use the array length property `arrayname.length`
- make text joke generator example
- How to deal with large or long arrays? - use a loop
