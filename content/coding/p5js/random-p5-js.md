---
title: Random p5.js
date: 2024-01-24T11:43:45
lastmod: 2024-01-24T14:02:47
---

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/2LJuwA_olPc?si=KfVpq-ruHa-3nLCD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

The built in `random()` function in p5.js needs two parameters to work. It needs a minimum value and a maximum value. If no parameters are given to the `random()` function then it defaults to a minimum of `0` and a maximum of `1`. If a single value is given, then the function assumes the minimum is `0` and the passed parameter becomes the maximum. That means that `random(42);` is the same as `random(0, 42);` and each would give a random number between 0 and 42.

```javascript
// random(minimum, maximum);
// random number between 37 and 92
random(37, 92);
```

_Note: The `random(37, 92)` function will not give 37 or 92. It will give from 37 up to 92. So it could be 91.999594 but never 92._

What does it mean to "give" a value? Functions in programming in JavaScript and in other coding languages, have the option to "return" something. This can be a value or other activity. Instead of "creating" something like the [primitive shape functions](./primitive-shapes-p5-js.md) such as `circle(100,150,50);` the `random()` function returns a value. You can set a variable to this random value.

```javascript
// set variable to random value
// must be called either within setup() or draw()
let myRandomVariable = random(0, 42);
// use variable in circle() function
circle(100, 150, myRandomVariable);
```

Or you can use it in place of a variable or value.

```javascript
// use random() function for the size of the circle
circle(100, 150, random(0, 42));
```

It is also possible to pass an array to the random function. An array is a list of values. If the array is passed to random then it will pick one of the items from the array. The p5.js reference use a fun example of an array of animal emojis for the `random()` function, but it works for numbers, vectors, or any other array content. [^random-reference]

```javascript
// declare an array of vegetables as text strings
let myArray = ["brocolli", "carrot", "daikon", "cabbage", "eggplant", "potato"];

//use the random() function to pick a random vegetable
random(myArray);

// declare an array of emoji
let myEmojiArray = ["⛴️", "🚒", "🚜", "🚑", "🛺", "🏎️", "🚛", "🚐", " 🚚"];

//use the random() function to pick a random emoji
random(myEmojiArray);
```

Each time the program is run or the function is called, a new random number will be given or returned. It is possible to always get the same random number by using the function `randomSeed()`. [^random-seed-reference]

[![Random p5.js](./attachments/random-p5js-thumb.jpg)](./attachments/random-p5js-thumb.jpg)

## References

[^random-reference]: [p5.js random() Reference](https://p5js.org/reference/#/p5/random)
[^random-seed-reference]: [p5.js randomSeed() Reference](https://p5js.org/reference/#/p5/randomSeed)
