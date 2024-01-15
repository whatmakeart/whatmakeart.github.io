---
title: Todo
date: 2024-01-11T07:00:04
lastmod: 2024-01-15T16:49:35
draft: true
---

## Videos to make

- javascript syntax

- variables
- incrementing operators
- conditionals
- JavaScript `Math.random()` vs p5.js `random()`
- p5ljs Responsive canvas `ressizeCanvas()`
- console errors
- println statements for debugging

- p5.js

  - Web Editor
  - createCanvas();
  - background();
    - color and color modes RGB HSB
  - Shapes `arc(); ellipse(); circle(); point(); line(); quad(); rect(); square(); triangle();`
    - coordinate system starts with (0,0) at the top left
    - variables for dynamic shapes
    - `fill()` and `noFill()`
    - `stroke()` and `noStroke()` and `strokeWeight()`
    - global vs local variables
    - p5.js color transparency (alpha) and custom color ranges
    - use `map()` function to change color inputs
  - draw order (make a donut)
    - createGraphic() - virtual canvas
    - pixelDensity for screen resolutions or double the virtual canvas
  - random
    - noise
    - random vs noise
    - map random and noise ranges
  - for loop to make many shapes
    - increment
    - operators to offset positions (make a row of rectangles - make a grid of rectangles)
  - transformation operations on shapes
    - rotate
    - push and pop
    - scale
    - translate
  - Setup Local p5.js Project
  - add media
    - images
      1. put image in folder
      2. make a variable to store the image
      3. use a `preload()` function to "pre-load" the image file to make it ready to use. This comes before the `setup()` function in the sketch
      4. use the `image()` function to draw the image and position it `image(name,x,y,width,height);` width and height are in pixels
    - image types jpg, GIF, PNG
    - make images be inserted with classes and then many image objects of different sizes and positions that interact
    - use image data from the pixels to make a impresioninst poitilist image and other effects
  - custom functions to help keep code organized
    - passing arguments to functions
    - review global and local variables
    - coding DRY
  - arrays
    - make a list and then make code select some items from the list - could become a text generator
    - draw an array of a creative p5.js graphic or image like a face or car or flower or cat
  - Particle Systems
    - may need classes and objects
  - capture from cameras `createCapture()`
    - use multidimensional arrays to analyze the pixel data from the camera - push pop
  - Playing Sounds
  - Playing Videos
  - millis() timers
  - classes and objects
    - create objects from classes
    - pass arguments
    - create an array of objects
  - 3D objects and fun
    - lights and materials
    - texture
    - import obj model
  - Manipulating the DOM - What is the DOM?
  - Program Control and Flow
    - Timer
    - State Machines
    - Conditionals
  - Games
    - Collisions and detecting hits
    - sprites?
    - event handeling

- p5.js Misc
- write text on screen
- createshape for more complex things
- `saveCanvas()` button to save what you see on screen
- fonts and text on screen
- p5.js Animation
- draw a grid with loops
- add sliders and interactive input contorlsa
- make controls react to hands and computer vision
- optimize for performance

  - use `frameCount` variable built in for an x or y value
  - frame rate comparisons and setting the framerate with `frameRate()`
  - use variables for positions and sizes
  - use increment to change the position and size variables
  - Ball Bounce
    - use an if conditional to reset position when off screen
    - use an if conditional to change direction of incrementer
    - show the problem with not using a variable and something geting stuck in an "if loop"

- p5.js random
- random vs noise

## Assignments
