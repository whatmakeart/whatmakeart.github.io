---
title: 02.05 Programming Concepts
date: 2024-01-13T06:32:11
lastmod: 2024-01-24T05:50:23
---

## Loops

Loops are a programming structure that allows code to run multiple times instead of just one time like a conditional statement. Of course loops could be put inside a conditional statement but the then the loop is run once while the contents of the loop may be run multiple times.

The structure of a loop is similar to a conditional statement. A loop checks a value or condition to see if it is true and as long as it continues to be true, it loops through its instructions.

### `while` and `for` Loops

There are different types of loops, but two common loops in p5.js are the `while` loop and the `for` loop. The `for` loop is much more common than the `while` loop.

These loops do something while something is true. The `for` loop can be though of as a specific shorthand version of a `while` loop.

```javascript
let myVariable = 0;

while (myVariable < 5) {
  console.log(myVariable); // prints the value of myVariable in the console
  myVariable = myVariable + 1; // adds 1 to x each time through the loop
}
```

The above code will output `0, 1 , 2, 3, 4` to the console. This can be rewritten as a `for` loop.

```javascript
for (let myVariable = 0, myVariable < 5, myVariable = myVariable + 1;) {
   console.log(myVariable); // prints the value of myVariable in the console
}
```

The above code will also output `0, 1 , 2, 3, 4` to the console. The `for` loop condenses the declaring of the variable, checking of the condition, and the changing of the value into a single line.

### Incrementing a Variable

```javascript
// this is explicitly adding 1 to x and setting a new value for x
x = x + 1;
// this can be shortened to
x++;

// this explicitly adds 75 to x and sets the new larger value to x
x = x + 75;
// this can be shorted to
x += 75;
```

## Nested Loops

What is the difference between having 2 loops in sequence and having 2 loops but one loop is inside or "nested" in the first loop?
