---
date: 2023-02-05T8:30:00-04:00
description: Simplify your Arduino program by putting blocks of code into functions that are called in the loop. This way your Arduino sketch stays more organized and is easier to use.
featured_image: /posts/images/make arduino functions.jpg
tags:
  - Arduino
title: Make Arduino Functions
draft: false
spellcheck: off
---

{{< youtube id="eBAeqSWm_hw" title="Make Arduino Functions" >}}

## How to Create Functions in Arduino

In this [Arduino](../arduino/arduino-introduction.md) tutorial, I'll show you how to create simple functions to wrap code in, so you can clean up your `loop()` function and eventually make functions that return values and make your program run better.

First, we'll combine the default Servo knob example and the Blink without Delay example into one sketch. Then, we'll look at the `loop()` function and see if there's anything that we can separate from the loop and replace with a function call.

We have two main parts of the `loop()` function: the servo if conditional statement that is running the servo in the potentiometer, and the if statement that is blinking the LED from the Blink without Delay LED sketch. We'll go ahead and remove the servo code and put it in a function, and replace it with a function call in the loop.

First, we'll leave the `currentMillis()` function call at the top of the loop, because we want that to always be called. Then, we'll highlight lines 49 to 55 and press `Ctrl`+`X` or `Command`+`X` to cut the code.

Next, we'll type the function name in the `loop()` function, so we don't forget to add it back later. We can call it `checkServoKnob()`. Then, we'll put two parentheses and a semicolon.

Now, if we try to compile the code, it will give us an error because the `checkServoKnob()` function doesn't exist yet. So, we'll go all the way down to the bottom of the `loop()` function and create the function.

To create a function, we start with the keyword `void`. Then, we type the name of the function, which is `checkServoKnob()`. After the name, we put two parentheses, even though we're not passing any parameters to the function yet. Finally, we put curly braces to open the function body.

Now, we can paste the code that we cut earlier into the function body. Once we've done that, we can compile the code and it should work.

Now, our `loop()` function is much shorter and easier to read. We can also see exactly what the `checkServoKnob()` function is doing, because we added a comment.

We can use the same process to create another function called `blinkWithoutDelay()`. This function will blink the onboard LED every second.

Once we've created both functions, our `loop()` function is very short and easy to read. This is especially helpful when we start making state machines to control our sketches.

I hope this tutorial has shown you how to create simple functions in Arduino. By wrapping code in functions, you can make your programs more organized and easier to read.
