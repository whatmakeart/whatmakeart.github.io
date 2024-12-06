---
date: 2022-03-05T8:30:00-04:00
lastmod: 2024-12-06T05:36:42
description: How to remove the delay in an Arduino sketch? The delay(); is a blocking function and does not let you multitask with the Arduino or do more than one thing at a time.
featured_image: /arduino/attachments/arduino-no-delay.jpg
tags:
  - Arduino
  - Electronics
  - Coding
title: How to Remove Delay from Arduino Sketch
---

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/EdpFZ8iCXo4?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

How to remove the delay in an Arduino sketch? The delay(); is a blocking function and does not let you multitask with the Arduino or do more than one thing at a time. You want to do two things at once with the Arduino. Therefore you need to get rid of delay in your sketch. This shows how to use a millisecond timer to replace the delay function in an Arduino sketch and have a much better non blocking sketch that can be combined with other sketches.

## How to Remove Delay from an Arduino Sketch

In this Arduino tutorial, I will show you how to remove the delay function from an Arduino sketch so that you can use it in multitasking with the Arduino. The delay function is a blocking function, so it prevents the Arduino from doing anything else while it is waiting for the delay to finish.

To remove the delay function from an Arduino sketch, you will need to:

1. Create a new variable to store the current time in milliseconds.
2. Create another variable to store the previous time in milliseconds.
3. Create an if statement that checks if the current time is greater than or equal to the previous time plus the desired delay time.
4. If the condition is met, then execute the code that you want to run every time the delay time elapses. Reset the previous time variable to the current time.
