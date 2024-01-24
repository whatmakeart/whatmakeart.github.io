---
title: Draft Notes
date: 2024-01-13T06:32:31
lastmod: 2024-01-24T14:36:12
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
