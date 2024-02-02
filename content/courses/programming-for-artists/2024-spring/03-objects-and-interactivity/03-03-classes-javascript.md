---
title: 03.03 Classes JavaScript
date: 2024-02-03T09:30:00
lastmod: 2024-02-02T09:24:37
---

Classes in JavaScript are a way to make reusable templates for objects and to clearly define functions/methods for those objects without duplicating everything. There are other ways to achieve the same results in JavaScript without using classes, but classes are a good way to organize your program for readability and reusability.

A class uses a `constructor()` function to define the attributes of an object. After the `constructor()` function, methods can be defined.

```js
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

let student1 = new Student(Jimmy, Scultpure);

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  student1.showMajor;
  student1.showName;
}

function draw() {}
```
