---
title: 04.05 ml5.js Experiment Assignment
date: 2024-02-09T09:30:00
lastmod: 2024-02-12T06:12:11
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

## Grading Rubric

<div class="responsive-table-markdown">

| Assessment                                          | Weight    |
| --------------------------------------------------- | --------- |
| Load ml5.js library                                 | 10 points |
| Use handpose, facemesh, or posenet models           | 10 points |
| Modify look of hand, face, or pose from the demo(s) | 10 points |
| Combine model with previous project or new project  | 20 points |
| Use hand, face, or pose for interaction             | 20 points |
| Upload URL                                          | 10 points |

</div>

## Example Assignment Combining Posenet and Falling Pebbles Sketch

The code below shows how to combine the Pebbles sketch from a previous class and the Posenet Demo sketch.

[Posenet & Pebbles Basic Combination Demo](https://editor.p5js.org/whatmakeart/sketches/GRTUFw-FD)

```js
// Posenet & Pebbles Basic Combination Demo
// https://editor.p5js.org/whatmakeart/sketches/GRTUFw-FD

// Combines Pebbles https://editor.p5js.org/whatmakeart/sketches/mHoGNjdbF
// and
// ml5.js Posenet Demo https://editor.p5js.org/ml5/sketches/PoseNet_webcam

///////////////////////////////////////////
// #1 Copy Posenet above setup()
// Don't forget to include ml5 library in the <head> of index.html
// Don't forget to include the status code in <body> or change the modelReady() to only console.log
///////////////////////////////////////////

// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
PoseNet example using p5.js
=== */

let video;
let poseNet;
let poses = [];

///////////////////////////////////////////
// #2 Copy Pebbles above setup()
///////////////////////////////////////////

// How to make the pebbles stop at the ground
// https://editor.p5js.org/whatmakeart/sketches/mHoGNjdbF

let pebbles = []; // create an array to hold the pebble objects
let gravity = 1.04; // set a value for gravity

// create a Pebble class
class Pebble {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  // add method to show pebble
  showPebble() {
    // pass the parameters for "this" specific pebble
    circle(this.x, this.y, this.size);
  }

  // add drop method to pebble class
  dropPebble(ground) {
    // pebble falls by multiplying "this" specific "y" by "gravity"
    this.y = this.y * gravity;

    // check if pebble hit the ground
    // add half the size (radius) to height and see if greater than the "ground" value passed in
    // could pass a different value for ground to make pebbles stop sooner
    // if it is at the ground then set the "this.y" to the ground minus the radius since the pixels count from the top of the screen
    if (this.y + this.size / 2 >= ground) {
      this.y = ground - this.size / 2;
      //this.x++
    }
  }
}

function setup() {
  ///////////////////////////////////////////
  // #3 Copy Posenet in setup()
  ///////////////////////////////////////////
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on("pose", function (results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();

  ///////////////////////////////////////////
  // #4 Copy Pebbles in setup()
  ///////////////////////////////////////////
  // comment out duplicate createCanvas in Pebbles
  // createCanvas(400, 400);
  for (i = 0; i < 50; i++) {
    pebbles.push(new Pebble(random(width), random(height), random(10, 50)));
  }
}

///////////////////////////////////////////
// #4.1 Copy Posenet modelReady() after setup()
///////////////////////////////////////////

// Note: either include the html " <p id='status'>Loading model...</p>"
// from posenet or change the select() to a console.log
function modelReady() {
  select("#status").html("Model Loaded");
  // optional console.log
  // console.log("Model Loaded");
}

function draw() {
  ///////////////////////////////////////////
  // #5 Copy Posenet in draw()
  ///////////////////////////////////////////

  image(video, 0, 0, width, height);

  // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();
  drawSkeleton();
  ///////////////////////////////////////////
  // #6 Copy Pebbles in draw()
  ///////////////////////////////////////////

  for (let i = 0; i < pebbles.length; i++) {
    pebbles[i].showPebble();
    // pass the height in for ground or any other y position then call dropPebble
    pebbles[i].dropPebble(height);
  }

  // add nosePebbles() function to draw()
  nosePebbles();
}

///////////////////////////////////////////
// #7 Copy Posenet after draw()
///////////////////////////////////////////
// A function to draw ellipses over the detected keypoints
function drawKeypoints() {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i++) {
    // For each pose detected, loop through all the keypoints
    let pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j++) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      let keypoint = pose.keypoints[j];
      // Only draw an ellipse is the pose probability is bigger than 0.2
      if (keypoint.score > 0.2) {
        fill(255, 0, 0);
        noStroke();
        ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
      }
    }
  }
}

// A function to draw the skeletons
function drawSkeleton() {
  // Loop through all the skeletons detected
  for (let i = 0; i < poses.length; i++) {
    let skeleton = poses[i].skeleton;
    // For every skeleton, loop through all body connections
    for (let j = 0; j < skeleton.length; j++) {
      let partA = skeleton[j][0];
      let partB = skeleton[j][1];
      stroke(255, 0, 0);
      line(
        partA.position.x,
        partA.position.y,
        partB.position.x,
        partB.position.y
      );
    }
  }
}

///////////////////////////////////////////
// #8 Copy Pebbles after draw()
///////////////////////////////////////////

// can be mouseClicked or mouseDragged
function mouseDragged() {
  pebbles.push(new Pebble(mouseX, mouseY, random(10, 50)));
}

///////////////////////////////////////////
// #9 Add new function to drop pebbles from hand
///////////////////////////////////////////

function nosePebbles() {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i++) {
    // For each pose detected, loop through all the keypoints
    let noseX = poses[i].pose.nose.x;
    let noseY = poses[i].pose.nose.y;

    //console.log("Nose x = " + noseX);
    //console.log("Nose y = " + noseY);

    pebbles.push(new Pebble(noseX, noseY, random(10, 20)));
  }
}
```
