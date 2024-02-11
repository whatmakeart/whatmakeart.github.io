---
title: 04.05 ml5.js Experiment Assignment
date: 2024-02-09T09:30:00
lastmod: 2024-02-11T14:00:28
---

## Assignment Deliverables

1. Upload a URL to your online **ml5.js Experimental** art project via one of the following options:
   - Self published GitHub repository published to GitHub Pages
   - or
   - Link to sketch on p5.js Web Editor

## Requirements

1. Load the ml5.js library into the `<head>` of the html page.
2. Use one of the models such as handpose, facemesh, or posenet
3. Modify the provided demo examples to change the look of the hand, or face or pose
4. Combine the model with one of your previous projects.
5. Use your body for interaction rather than the keyboard or mouse
6. Experiment and have fun
7. Look at the many example on the web and be inspired by them, just make sure to create your own project and [cite](../00-getting-started/00-07-citing-code.md) any and all references and sources in your code comments

### Possible Concepts

- make a graphic or image overlay over the hand, face, or pose
- have different images appear based on the position
- Use your face or hand to make images
- Experiment with p5.js `createGraphics()` to have multiple layered surfaces on the canvas

Remember that this is an experiment and you are building upon the tools of others. It is ok if the program does weird and unexpected things. Try to add new elements to the program to see what happens. Don't try to memorize everything or to work in a vacuum. Look to other's examples as listed on the ml5.js website.

### How to Access the Detected Data?

`console.log(nameOfVariable)` can show the contents of the objects produced by the detection algorithms. You can then assign these values to variables to use to draw items on the canvas or interact with your program.

## How to Combine ml5.js Example with Previous p5.js Sketch

To combine two p5.js sketches, you will need to:

1. Open both sketches in different browser tabs in the Web Editor
2. Copy the contents of the first sketch above the `setup()` function and paste above the `setup()` function in the second sketch.
   - Make sure that there are no duplicate variable names, class names or function names.
3. Copy the contents of the first sketch's `setup()` function and paste into the `setup()` function of the second sketch.
   - Make sure that there are no duplicate variable names, only one `createCanvas()`
   - check for other redundant `setup()` code.
4. Copy the contents of the first sketch's `draw()` function and paste into the `draw())` function of the second sketch.
   - Make sure that there are no duplicate variable names or function calls.
   - check for other redundant `draw()` code.
5. Copy the contents of the first sketch below the `draw()` function and paste into the second sketch below the `draw()` function
   - Make sure that there are no duplicate variable names or function calls.
6. Check the `<head>` section of the index.html file and make sure to include all necessary JavaScript libraries from each sketch.

More complicated sketches with multiple files can be combined with similar methods but there is more to check so a refactoring of the code may be a more efficient option.

## Resources

- [Hand Landmarks for the handpose model](https://developers.google.com/mediapipe/solutions/vision/hand_landmarker)
- [Pose Landmarks for the posenet model](https://developers.google.com/mediapipe/solutions/vision/pose_landmarker)
- Person, Jen. [7 dos and don'ts of using ML on the web with MediaPipe](https://developers.googleblog.com/2023/10/7-dos-and-donts-of-using-ml-on-web-with-mediapipe.html) Google for Developers. October 05, 2023.
- [Combining Arduino Code](../../../../arduino/combine-two-arduino-sketches.md) - This covers combining Arduino Sketches together but the basic concept is the same for combining two p5.js sketches.
