---
title: 03.02 Objects JavaScript
date: 2024-02-03T09:30:00
lastmod: 2024-02-02T12:52:12
---

```javascript
// declare 3 variables to hold phone models
let phone1 = "iPhone";
let phone2 = "Galaxy";
let phone3 = "Pixel";
```

Unlike variables, objects objects can have multiple properties. The properties of objects are described with key value pairs. **_Note: Everything in JavaScript is an object, even variables._**

Objects can be created as "Object Literals" or with a "Constructor Function." What is the difference? Object literals are single objects referred to as singletons in JavaScript. They are simple, one off containers for data pairs. A constructor function can create "instances" of objects. Usually when you need a lot of similar objects, it is better to use a constructor function than to create a bunch of object literals.

```javascript
//empty variable vs empty array vs empty object
let myVariable; // empty variable
let myArray = []; // empty array
const myObject = {}; // empty object with curly braces
```

```js
// object literal object creation
// creates a phone1 object with specific properties
const phone1 = { maker: "Apple", name: "iPhone", model: "85", color: "green" };
console.log(
  "This is a " +
    phone1.color +
    " " +
    phone1.name +
    " " +
    phone1.model +
    " made by " +
    phone1.maker +
    "."
);
// outputs the following to the console
// This phone is a green iPhone 85 made by Apple.
```

```js
// two more object literals

const phone1 = { maker: "Apple", name: "iPhone", model: "85", color: "green" };
const phone2 = {
  maker: "Samsung",
  name: "Galaxy",
  model: "62",
  color: "fuchsia",
};
const phone3 = {
  maker: "Google",
  name: "Pixel",
  model: "47",
  color: "tangerine",
};

console.log("This is a " + phone1.name);
console.log("This is a " + phone2.name);
console.log("This is a " + phone2.name);

// Console Output
// This is a iPone
// This is a Galaxy
// This is a Pixel
```

### Object Constructor

```js
function Phone(maker, name, model, color) {
  this.maker = maker;
  this.name = name;
  this.model = model;
  this.color = color;
  this.describePhone = function () {
    console.log(
      "This is a " +
        this.color +
        " " +
        this.name +
        " " +
        this.model +
        " made by " +
        this.maker +
        "."
    );
  };
}

// Create an instance of Phone
const phone1 = new Phone("Apple", "iPhone", "85", "green");
const phone2 = new Phone("Samsung", "Galaxy", "62", "fuchsia");
const phone3 = new Phone("Google", "Pixel", "47", "tangerine");

console.log("Made by " + phone1.maker);
console.log("Made by " + phone2.maker);
console.log("Made by a " + phone2.maker);

// Console Output
// Made by Apple
// Made by Samsung
// Made by Google
```

## Objects Doing Things

We can add functions, called methods, to objects. This allows the object to do things. In the example below there is a `describePhone` method that prints a message to the console based on the contents of the object.

```js
function Phone(maker, name, model, color) {
  this.maker = maker;
  this.name = name;
  this.model = model;
  this.color = color;
  this.describePhone = function () {
    console.log(
      "This is a " +
        this.color +
        " " +
        this.name +
        " " +
        this.model +
        " made by " +
        this.maker +
        "."
    );
  };
}

// Create an instance of Phone
const phone1 = new Phone("Apple", "iPhone", "85", "green");
const phone2 = new Phone("Samsung", "Galaxy", "62", "fuchsia");
const phone3 = new Phone("Google", "Pixel", "47", "tangerine");

phone1.describePhone();
phone2.describePhone();
phone3.describePhone();

// Console Output
// This phone is a green iPhone 85 made by Apple.
// This phone is a fuchsia Galaxy 62 made by Samsung.
//This phone is a tangerine Pixel 47 made by Google.
```
