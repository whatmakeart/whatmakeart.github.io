---
title: Combine Two Arduino Sketches
date: 2023-06-17T10:40:39
lastmod: 2023-09-07T20:33:59
description: How do you take one Arduino sketch and combine it with the code of another Arduino sketch? This tutorial shows how to join two sketches together to make one program.
featured_image: /attachments/featured-images/combine-arduino-sketches.jpg
tags:
  - Arduino
  - Electronics
  - Coding
aliases:
  - /posts/how-to-combine-two-arduino-sketches/
---

## How to Combine Two Arduino Sketches

In this [Arduino](arduino-introduction.md)tutorial, I will show you how to combine two Arduino sketches into one single program. This is a useful skill to know if you want to reuse code from existing sketches or if you want to combine two sketches that do different things.

To combine two Arduino sketches, you will need to:

1. Open both sketches in the Arduino IDE.
2. Copy the contents of the first sketch.
3. Paste the contents of the first sketch into the second sketch.
4. Make sure that there are no duplicate variable names or pin numbers.
5. Compile and upload the sketch to your Arduino board.
6. Here are some tips for combining Arduino sketches:

- Use descriptive variable names to make your code easier to read and understand.
- Use comments to explain what your code is doing.
- Use functions to organize your code and make it easier to reuse.
- Test your code thoroughly before uploading it to your Arduino board.

## Guide for Combining Arduino Sketches

### 1. Copy all of the variables from before `setup();`

The information before `setup();` includes libraries, variables, and other parameters. Select everything from one sketch above setup and copy it. Then paste it above `setup();` in the second sketch. It is a good idea to put a comment above and below the pasted code such as `// begin pasted code` and `// end pasted code`, that way you know which code is from the previous sketch.

Look for duplicate pin assignments. If two variables such as two LEDs share pin 13, then you could change one to pin 10 or pin 8 or another open digital pin.

Look for duplicate variable names. If names are duplicated, determine if both variables are needed or if only one is. If there are two variables called `led` then you probably need to rename one to `led1` and the other to `led2` but if there are two variables labeled `currentMilliseconds` then you only need to keep one because you only need to have the current time recorded in one variable.

If you change a variable name before setup then it need to be changed everywhere in the code.

1. Copy all of the variables
2. Rename any duplicates
3. Reassign pins that are the same to different pins
4. Make notes about variable renaming
5. Make notes about pin reassignment
6. Put comments above and below the code indicating that it was added

### 2. Copy information from `setup();`

Now we will copy the information from the `setup();` function. This will include specific setting, `pinMode();`, `beginSerial();` and other single run lines of code. Do not copy the `beginSerial();` as a sketch only needs one. Add comments to your code to show what you added. If you updated variable names before `setup();` make sure to change them here.

1. Copy the new information
2. Update any variable names from previous step
3. Update any reassigned pins
4. Add comments to indicate the added code.

### 3. Copy information from `loop();`

Now copy the code from inside the `loop();` from the other sketch. Make sure to not include the ending `}` bracket. After pasting the code into the combined sketch, put code comments above and below the pasted code. Change variable names as needed to match the names above.

1. Copy the new information
2. Update any variable names from previous step
3. Update any reassigned pins

### 4. Copy information from below `loop();`

There are likely additional functions below `loop();`. Copy everything and then paste it at the very bottom of the combined sketch. Put a comment indicating where the pasted code starts. Make sure to update any variable names.

### 5. Test, Test, Test

Then we must test the code to fix unexpected errors and problems. Click the checkmark at the top left of the Arduino IDE to see if the code compiles. If the text at the bottom is white and it says compile complete, then the code does not have syntax errors. It may still need tweaking to work with the electronics hardware though.

If the text at the bottom is red, then read the error messages and attempt to correct them. Often it will be a typo in a variable name or a missing `}` or an extra `}`. One trick is to copy the error message and paste it into a search engine. There is often an explanation of the error and instructions on how to fix it.

Do your best but you may not be able to remove all the errors. Turn in you best attempt.

<div class="video-grid">

<div class="video-card">
<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/nepj56gusuk?=rel" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

</div>
