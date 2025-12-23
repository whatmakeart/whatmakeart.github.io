---
title: Javascript
date: 2023-05-23T21:59:41
lastmod: 2025-12-23T10:12:35-04:00
---

JavaScript is a programming language used in web development with an ability to add interactivity to web pages. It is one of many different program languages. Just like a spoken language, JavaScript has "grammar rules" called syntax, and a set of vocabulary that it understands. Everything must be programmed within this set of tools, step by step in sequence.

JavaScript is an "interpreted language", which means that it goes step by step through the instructions in the code and does tasks in sequence. This is different than a compiled language like C used in programming an [Arduino](../arduino/arduino-introduction.md) micro-controller. Before the Arduino can "run" the instructions in the code, it must be compiled first. That is not the case with interpreted languages like JavaScript or Python.

It's a client-side language, meaning it executes in the user's web browser rather than on the web server. Javascript can create interactive features like animated graphics, responsive forms, and complex user interfaces. It is an essential part of web development, along with [HTML](html.md) and [CSS](css.md). JavaScript works in tandem with HTML for content structuring and CSS for styling, to create engaging and interactive web experiences and web applications.

## JavaScript Libraries

A library adds additional functionality to JavaScript without having to write functions from scratch in "vanilla" JavaScript. Its like adding caramel, hot fudge, nuts, and sprinkles to your vanilla ice cream sundae. Nothing wrong with vanilla ice cream but sometimes life is better with sprinkles. Software libraries can make specific tasks easier to complete.

- p5.js
- three.js
- pixi.js
- React.js
- Vue.js

## JavaScript Resources

- [Mozilla Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/en)

## JavaScript Snippets

```javascript
// Random and Floor
let myNumber;
myNumber = Math.random(); // makes a decimal value between 0 and 1
myNumber = Math.random() * 256; // makes a decimal value between 0 and 256
myNumber = Math.floor(Math.random() * 256); // Rounds value down to nearest whole number between 0 and 256
```
