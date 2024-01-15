let yoff = 0.0; // 2nd dimension of perlin noise

function setup() {
  // Instead of windowWidth and windowHeight use the parent container's dimensions
  let canvas = createCanvas(getParentWidth(), getParentHeight());
  canvas.parent("sketch-holder"); // Attaches the canvas to a parent element with id 'sketch-holder'
}

function draw() {
  background(51);
  // yStart and yEnd parameters are dynamically set the Y-coordinate range for each composition, adapting to the canvas size.
  // Perlin Noise (top half of the canvas)
  drawPerlinNoise(0, height / 2);
  drawLabel("Perlin Noise", 10, 20); // Label for Perlin Noise

  // Random Function (bottom half of the canvas)
  drawRandomFunction(height / 2, height);
  drawLabel("Random Function", 10, height / 2 + 20); // Label for Random Function
}

function windowResized() {
  // Resize the canvas when the window is resized
  resizeCanvas(getParentWidth(), getParentHeight());
}

// get the width of the parent container
function getParentWidth() {
  return document.getElementById("sketch-holder").clientWidth;
}

// get the height of the parent container
function getParentHeight() {
  return document.getElementById("sketch-holder").clientHeight;
}

// yStart and yEnd parameters dynamically set the Y-coordinate range for each composition, adapting to the canvas size

function drawPerlinNoise(yStart, yEnd) {
  push(); // stores information related to the current transformation state and style settings
  fill(255);
  beginShape(); // draw a polygon out of the wave points
  let xoff = 0;
  // Iterate over horizontal pixels
  for (let x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to start and end
    let y = map(noise(xoff, yoff), 0, 1, yStart, yEnd);
    vertex(x, y);
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 0.01;
  vertex(width, yEnd);
  vertex(0, yEnd);
  endShape(CLOSE);
  pop(); // restores these settings
}

// visualizes a wave pattern where the y-coordinates of each vertex are determined using the random() function.
function drawRandomFunction(yStart, yEnd) {
  push(); // stores information related to the current transformation state and style settings
  fill(255, 0, 0);
  beginShape();
  for (let x = 0; x <= width; x += 10) {
    let y = map(random(), 0, 1, yStart, yEnd);
    vertex(x, y);
  }
  vertex(width, yEnd);
  vertex(0, yEnd);
  endShape(CLOSE);
  pop(); //restores these settings
}

// Function to draw labels
function drawLabel(textString, x, y) {
  push();
  fill(255);
  noStroke();
  textSize(16);
  text(textString, x, y);
  pop();
}
