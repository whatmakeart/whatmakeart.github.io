---
title: p5.js Conditional Statements
date: 2024-01-24T05:16:23
lastmod: 2024-01-25T05:03:39
---

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/ka-LMj_VfNU?si=4VE4Zv64WjUsEo2t?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Conditional Statements

Conditional statements allows the program to do different things based on information or conditions. To this point, the program in p5.js starts with the `setup()` function and then moves to the `draw()` function. Once in the `draw()` function it keeps repeating over and over until we stop the program. What if we wanted the program to run during the day but turn off at night? What if we wanted the program to draw pineapples on Wednesdays, lots of wavy lines on Fridays, and alligators on every remaining day?

To do these tasks and other specific tasks we need to have control over the flow of the program. One way to control a program is with `if` statements. We can see the program logic in the hypothetical situations above. Even plain language explanations in English use the word "if." Think of a conditional statement as basically meaning, "If something then do something." or "If there isn't something then do something else." There are many more permutations, but the basic idea is that if a condition is met in the program then a specific set of instructions is run, and if those conditions are not met then the instructions are not run.

### Booleans True and False

The if statement compares a boolean expression. What is a boolean expression? A boolean expression can either be `TRUE` or `FALSE`. Often in computers this is shortened to `1` or `0` with 1 being true and 0 being false.

### if Statement

```javascript
if (mouseX > 125) {
  fill(0, 255, 0); // fill green
}
```

### Comparative Operators

How does the program know if something is or not? The program needs to evaluate something and decide if it is correct. In computers, a program will evaluate a conditional statement as "true" or "false" by using comparative operators. In p5.js there are a number of comparative operators available.

- `<` Less than
- `>` Greater than
- `<=` Less than or equal to
- `>=` Greater than or equal to
- `===` Equal to (strict)
- `==` Equal to (not-strict)

_It is very easy to mistake `=` for equal to. Remember that `=` is setting or assigning a value, while `===` or `==` are comparing or testing a value._

### `else` and `else if` Statements

You can check multiple conditions in a single statement. For example, "If the store has pizza, buy 20 pizzas and eat, otherwise stay hungry." The "otherwise" is converted to `else` in programming. The program will check the first condition "if there is pizza in the store" and if that is true it will do the first task, "buy 20 pizzas" but if the store doesn't have any pizza, then the program does a different "task", it "stays hungry."

In a conditional statement there can only be a single `if` and a single `else`. So how can I check if there is pizza, and then if there isn't pizza check if there are sandwiches, and if there aren't sandwiches check if there is ice cream, and if thee isn't ice cream, check if there is sushi, and then finally "otherwise" stay hungry? For multiple conditional checks in a single statement `else if` is used.

_Note: Once any `if` or `else if` evaluates to `TRUE` then the program will jump out of the conditional statement, even if later the next `else if` becomes true._

For example, maybe the store was originally out of ice cream but has lots of sandwiches. So the program keeps buying sandwiches. Then there is an ice cream delivery but the store still has lots of sandwiches in stock. If the "sandwiches `else if`" is before the "ice cream `else if`" then the program will always stop at sandwiches unless the store sells out.

### Additional Evaluations with Boolean Variables and ! Not

`and` and `or` allow for multiple conditions to be checked in a single `if` or `else if`

"and" is represented by two ampersands `&&` and "or" is represented by two pipes `||` (these are usually on the right hand side of a US keyboard)

```javascript
// an and conditional
let myVariable = 23;

if (myVariable >= 20 && myVariable <= 86) {
  fill(0, 255, 0); // fill green
} else {
  fill(255, 0, 0); // fill red
}
```

[![Conditional Statements p5.js](./attachments/if-else-introduction-thumb.jpg)](./attachments/if-else-introduction-thumb.jpg)
