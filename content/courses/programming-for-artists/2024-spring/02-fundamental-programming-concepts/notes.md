---
title: Draft Notes
date: 2024-01-13T06:32:31
lastmod: 2024-01-23T10:16:04
draft: true
---

## Generative Art Notes

What is generative art?

> Generative art refers to any art practice where the artist uses a system, such as a set of natural language rules, a computer program, a machine, or other procedural invention, which is set into motion with some degree of autonomy contributing to or resulting in a completed work of art.
>
> Philip Galanter [What is Generative Art?](https://philipgalanter.com/downloads/ga2003_what_is_genart.pdf)

- [So you want to build a generator](https://galaxykate0.tumblr.com/post/139774965871/so-you-want-to-build-a-generator)
- [Philip Galanter](https://www.philipgalanter.com/)
- [What is generative art? - Philip Galanter](https://philipgalanter.com/downloads/ga2003_what_is_genart.pdf)

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
