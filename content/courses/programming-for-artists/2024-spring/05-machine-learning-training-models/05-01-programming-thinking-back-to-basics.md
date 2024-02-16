---
title: 05.01 Programming Thinking Back to Basics
date: 2024-02-16T09:30:00
lastmod: 2024-02-16T09:19:52
---

As more and more "coding" and "coding concepts" and "coding syntax" and other "coding, blah" are introduced, it is important to not fall into the trap of trying to memorize things that can be looked up. This concept is often attributed to Einstein, but who knows if he ever said it. It doesn't matter, the concept exists in the common domain of humanity. Of course we need to memorize the meaning of words in our native language, or the meaning of words in a second language that we are studying. It is also probably a good idea to memorize that fire is hot, candy tastes good, a web page uses HTML, code can tell a computer what to do, 4 x 7 = 28, and many other fundamental tidbits.

Depending on the context there may be more specific tidbits worth memorizing. If you are in a cooking class, memorizing the difference between blanche, saute, simmer, broil, roast, steam, poach and other esoteric cooking terms would be useful for quickly understanding recipes. More importantly it is necessary to have a basic understanding of the concepts.

> A human being should be able to change a diaper, plan an invasion, butcher a hog, conn a ship, design a building, write a sonnet, balance accounts, build a wall, set a bone, comfort the dying, take orders, give orders, cooperate, act alone, solve equations, analyze a new problem, pitch manure, **program a computer**, cook a tasty meal, fight efficiently, die gallantly. Specialization is for insects.
>
> Time Enough for Love (1973) written by Robert A. Heinlein [^love]

This quote from _Time Enough for Love_ puts the concept of programming a computer squarely into just another thing domain where it belongs. If you wanted to "cook a tasty meal" or "butcher a hog" or "write a sonnet" or any other human endeavor, you could, even if you had no idea how. You could look up the information. As you become more familiar with the information you would realize certain concepts that are important and you would naturally memorize the abstract concepts and you may remember the rules of a sonnet while working on it. While the sonnet rules can be quickly forgotten without consequence, the concept of a sonnet stays with you.

The same is true for the domain of programming a computer.

While working in a specific programming language, you may "memorize" certain functions or coding syntax, but that is not important at all. The important part is thinking critically and logically about flow and purpose of the program and how to solve a desired problem or accomplish a particular task. If you can describe what you want to do, then you have an instruction manual of what to look up. if you don't have those instructions then you are flailing in the dark.

## Conceptualizing a Program

What do you want the programm to do?

I want to put pretty colors on a screen.

- What colors?
- Where on the screen?
- Do the colors change? How? When?
- Can there be multiple colors?

Even a simple program such as displaying colors requires some logic. A good way to approach writing a program is to describe in plain language what you want the program to do.

1. Make a list of colors
2. Define each color
3. Describe the size or location of the screen
4. Change the colors every 5 seconds

Then you can write empty functions to represent your plain language. In the context of p5.js it might look something like this:

```js

colorList = [red, pink, purple];
let red = [255,0,0];
let pink = ;
let purple = ;

setup(){

}

draw() {

}

function describeScreen(){
    // p5.js has the createCanvas() function so we don't need describeScreen but how would you know that?
    // as you work with a language you will discover things
    // not knowing something should not inhibit your ability to design a program.
}

function putColorOnScreen(){

}

function changeColor(){

}





```

## References

[^love]: [Time Enough for Love](https://en.wikiquote.org/wiki/Time_Enough_for_Love)
