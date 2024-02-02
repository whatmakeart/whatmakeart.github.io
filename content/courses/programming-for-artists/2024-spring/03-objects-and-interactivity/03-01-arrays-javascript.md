---
title: 03.01 Arrays Javascript
date: 2024-02-03T09:30:00
lastmod: 2024-02-02T07:23:11
---

## Arrays

Arrays are like lists that contain multiple items in a particular sequence. The items can be numbers, strings, or even more arrays and can be stored inside a variable like other objects in JavaScript. Arrays allow you to manage a ton of items without having a variable for each one. having 10-20 variables to keep track of is doable. What happens when the number of items is in the hundreds or the thousands? Arrays allow for the storing and retrieval of items from a list of any length as long as the computer has enough memory to store it. JavaScript has built in functions for manipulating and working with arrays. [^mdn-docs]

## Array Counting

Arrays start counting at 0.

This can be confusing if you are used to counting from 1 but most humans have some experience counting from 0, their age. When you were born, on your first day of life, if someone asked, "How old are you?" Your answer was likely not, "I'm 1 going on 2." _You were probably just crying or sleeping_ In the US we count age starting at 0 years. Some cultures start age counting at 1 at birth. In South Korea, which has three age counting systems, a baby born on December 31, would be considered 1 and then would gain one more year on New Years, and be considered 2 years old based on the traditional “Korean age” (“세는 나이” \[se-neun-na-i\]) system counting system. [^casey-loc]

Regardless of how many candles are on your birthday cake, each year has a "counting number", and could be referred to by that number. In arrays we call this "counting number" the index number of the array. We can use the index of the array to access any specific item, to reorder the items, add items, remove items, and loop through all the items. This makes tasks possible that would be nearly impossible to do manually.

### Declaring an Array

To declare an array in javascript, you assign it to a variable and use two square brackets `[]`. You can declare an empty array to be filled later or you can start the array with a list of items. Each item in the list should be separated by a comma.

```javascript
// declaring an array
// declare an empty array
let myArray = [];

// declare an array with some numbers inside
let myDigits = [4, 2, 11, 5, 2, 1];

// declare an array with strings (text) and numbers
let myStuff = [9, "wonderful", 6.2, 7, "sneaky"];
```

### Array Index

Since arrays start counting at `0` it is important to remember which "number" each item in the array is. For example, what is the `[1]` indexed item in the `myStuff` array? It is `wonderful`.

<div class="responsive-table-markdown">

| Array Name | 0   | 1         | 2   | 3   | 4      | 5   |
| ---------- | --- | --------- | --- | --- | ------ | --- |
| myArray    |     |           |     |     |        |     |
| myDigits   | 4   | 2         | 11  | 5   | 2      | 1   |
| myStuff    | 9   | wonderful | 6.2 | 7   | sneaky |     |

</div>

To retrieve a specific item in an array, type the name of the array followed by the index number inside two square brackets `[]`.

- `myDigits[2]` gives the "third" value that has index `[2]` which is `11`.
- `myStuff[4]` gives the "fifth" value that has index `[4]` which is `sneaky`.

## Array Code Snippets

### Get the length of an Array

Since arrays can have varied lengths in JavaScript, it is best to not unnecessarily hardcode their lengths. Javascript has a built in method for returning the length of an array.

```javascript
// get the length of an array
// use .length after the array variable name to get the length of the array

let myCoolArray = ["dog", "elephant", "kangaroo", "walrus", "buffalo"];

console.log(myCoolArray.length);
```

The code above outputs `5` to the console.

### Replace an Item in an Array

If you set a value to an array index that already has an item, then you "replace" or overwrite that existing item in the array.

```javascript
let myCoolArray = ["dog", "elephant", "kangaroo", "walrus", "buffalo"];
myCoolArray[1] = "porcupine";
console.log(myCoolArray);
// this returns ["dog", "porcupine", "kangaroo", "walrus", "buffalo"]
```

### What is the Item's Index?

Sometimes you want to know what the index number of a particular item in an array it. Rather than counting each item, we can use the built in JavaScript function `indexOf`.

```javascript
let myCoolArray = ["dog", "elephant", "kangaroo", "walrus", "buffalo"];
console.log(myCoolArray.indexOf("kangaroo"));
// returns 2
console.log(myCoolArray.indexOf("giraffe"));
// returns -1 since giraffe is not in the array
```

### Adding Items to an Array

### Removing Items from an Array

## References

[^mdn-docs]: Mozilla Developer Docs[Arrays](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)
[^casey-loc]: Casey, Heather. [Koreans Becoming Younger - Unification of Age Counting Systems](https://blogs.loc.gov/law/2023/01/koreans-becoming-younger-unification-of-age-counting-systems/). Library of Congress Blogs. January 27, 2023.
