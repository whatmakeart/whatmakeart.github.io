---
title: Draft Notes
date: 2024-01-13T06:32:31
lastmod: 2024-01-15T05:57:44
draft: true
---

## Generative Art Notes

What is generative art?

> Generative art refers to any art practice where the artist uses a system, such as a set of natural language rules, a computer program, a machine, or other procedural invention, which is set into motion with some degree of autonomy contributing to or resulting in a completed work of art.
>
> Philip Galanter [What is Generative Art?](https://philipgalanter.com/downloads/ga2003_what_is_genart.pdf)

[So you want to build a generator](https://galaxykate0.tumblr.com/post/139774965871/so-you-want-to-build-a-generator)
https://www.philipgalanter.com/
[What is generative art? - Philip Galanter](https://philipgalanter.com/downloads/ga2003_what_is_genart.pdf)

## Variables

Variables are representations of value. In JavaScript, variables need to be defined adn then given an initial value. This value may or may not be updated during the program while the variable is used. To define a variable in JavaScript you use `var`, `const`, or `let` followed by the variable name and then a semicolon `;`. In JavaScript variables are not typed. What does that mean? It means that a variable can store any type of value and that type can change. It can store an integer, then a string, then a floating point number, and then an array, and then back to a string. Other programming languages like C++ are more strict with variable types.

An example of a variable we all have is age. Each of us has a specific value for our current age, yet this value is ever changing. You are a different age now, and even now you are a different age. Instead of "hard coding" the value of your age we can use a variable `let age = 7;` or whatever your age is. The program of life constantly updates your age. In a computer program you can make an instruction to add a year to the variable `age`.

```javascript
// three variables defined
var myVariable1;
const myConstantVariable;
let myVariable2;

// giving the variables initial values

myVariable = 76; // initial value of an integer
myConstantVariable = "Always"; // initial value of a string
myVariable2 = 0.93847; // initial value of a float
```

The defining and initializing of variables can be combined into one step.

```javascript
// three variables defined and initialized in a single step
var myVariable1 = 76;
const myConstantVariable = "Always";
let myVariable2 = 0.093847;
```

### Using a Variable

To use a variable, it must be defined and have an initial value. Then it can be used in place of that value.

```javascript
// this defines a variable and gives it a value of 76
// then the variable is used in the setup() function
// to set the background to the value of the variable
var myVariable1 = 76;

setup() {
    createCanvas( 400, 400 );
    background(myVariable1);
}
```

### Built in Variables in p5.js

There are many variables built into the p5.js library that can be helpful in your coding projects since you do not need to code the logic that produces these variable values. Examples include `mouseX` and `mouseY` which give the (x,y) positions of the mouse as well as `width` and `height` that give the width and height of the canvas.
