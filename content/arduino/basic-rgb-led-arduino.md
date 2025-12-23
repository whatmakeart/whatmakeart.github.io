---
title: Basic RGB LED Arduino
date: 2023-06-17T15:14:02
lastmod: 2023-09-07T20:33:50
tags:
  - Arduino
---

Through hole single RGB LEDS have 4 legs, one for each of the colors (red, green, blue), and one for the common anode or cathode. Unfortunately the best way to tell if an RGB LED has a common cathode (-) or anode (+) is to check with the supplier. The cathode/anode will be the longer leg. To be safe, make sure you install a resistor on each of the color legs.

## RGB LED Circuit

<figure>

[![RGB LED Circuit](attachments/2023-rgb-led-circuit.png)](attachments/2023-rgb-led-circuit.png)

<figcaption>

Image made with [Tinkercad Circuits](https://www.tinkercad.com/circuits) [^1]

</figcaption>
</figure>

## Pick a Single RGB LED Color

The [Arduino](arduino-introduction.md)sketch below has a function `ledColorPicker();` that accepts 3 parameters, red, green, and blue. The `loop();` has the function. Experiment with inputting different values for the colors. Use an [online color picker]() to select a specific RGB color. Once you have one color, try to add a `delay();` and another `ledColorPicker();` function to have the LED switch between colors.

Once successful try to incorporate the `millis();` timer function to remove the `delay();`.

### Pick a Single RGB LED Color Sketch

```C
// Sets and RGB LED to a desired color

const byte RED_LED = 10;   //set a variable for the red led
const byte GREEN_LED = 8;  //set a variable for the green led
const byte BLUE_LED = 9;   //set a variable for the blue led

void setup() {
  Serial.begin(9600);                                   // start the serial port
  Serial.println("Starting RGB LED Set Color Sketch");  // Print a message to serial monitor so we know it started

  pinMode(RED_LED, OUTPUT);    // set the red led pin as output
  pinMode(GREEN_LED, OUTPUT);  // set the green led pin as output
  pinMode(BLUE_LED, OUTPUT);   // set the blue led pin as output
}

void loop() {
  ledColorPicker(134, 22, 83);  // enter numbers between 0 and 255 for each color
}

void ledColorPicker(int redValue, int greenValue, int blueValue) {
  analogWrite(RED_LED, redValue);
  analogWrite(GREEN_LED, greenValue);
  analogWrite(BLUE_LED, blueValue);
}
```

### Pick Single RGB LED Color on TinkerCad

<!-- TinkerCad RGB LED -->
<div class="iframe-tinkercad-container">
<iframe class="responsiveIframe" width="725" height="453" src="https://www.tinkercad.com/embed/jn5ytr5V1kk?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
</div>

## Fade RGB LED Primary Colors

Using the same circuit set up from above, the sketch below fades through each primary color, one by one. In the next section we will investigate how to fade through a series of colors. This sketch uses the `millis();` timer function.

### Fade RGB LED Primary Colors Sketch

```C
// Fade Primary Colors RGB LED

const byte RED_LED = 10;   //set a variable for the red led
const byte GREEN_LED = 8;  //set a variable for the green led
const byte BLUE_LED = 9;   //set a variable for the blue led

int fadeRate = 10;  // in milliseconds

int red = 0;
int green = 0;
int blue = 0;
unsigned long ledTimer;       // tracks last time ledTimer expired
unsigned long currentMillis;  // tracks current time in milliseconds

enum colorStates { RED_UP,
                   RED_DOWN,
                   GREEN_UP,
                   GREEN_DOWN,
                   BLUE_UP,
                   BLUE_DOWN

};

colorStates colorState = RED_UP;

void setup() {
  Serial.begin(9600);                                             // start the serial port
  Serial.println("Starting RGB LED Fade Primary Colors Sketch");  // Print a message to seraial monitor so we know it started

  pinMode(RED_LED, OUTPUT);    // set the red led pin as output
  pinMode(GREEN_LED, OUTPUT);  // set the green led pin as output
  pinMode(BLUE_LED, OUTPUT);   // set the blue led pin as output

  ledTimer = millis();  // initiallized the timer
}

void loop() {
  currentMillis = millis();
  ledColorPicker(red, green, blue);  // uses variables passed to the function
  fadeRGBLED();
}

void ledColorPicker(int redValue, int greenValue, int blueValue) {
  analogWrite(RED_LED, redValue);
  analogWrite(GREEN_LED, greenValue);
  analogWrite(BLUE_LED, blueValue);
}

void fadeRGBLED() {


  switch (colorState) {

    case RED_UP:
      if (checkTime(ledTimer, fadeRate)) {
        red++;
      }
      if (red >= 255) {
        colorState = RED_DOWN;
      }
      break;

    case RED_DOWN:
      if (checkTime(ledTimer, fadeRate)) {
        red--;
      }
      if (red <= 00) {
        colorState = GREEN_UP;
      }
      break;

    case GREEN_UP:
      if (checkTime(ledTimer, fadeRate)) {
        green++;
      }
      if (green >= 255) {
        colorState = GREEN_DOWN;
      }
      break;

    case GREEN_DOWN:
      if (checkTime(ledTimer, fadeRate)) {
        green--;
      }
      if (green <= 00) {
        colorState = BLUE_UP;
      }
      break;

    case BLUE_UP:
      if (checkTime(ledTimer, fadeRate)) {
        blue++;
      }
      if (blue >= 255) {
        colorState = BLUE_DOWN;
      }
      break;

    case BLUE_DOWN:
      if (checkTime(ledTimer, fadeRate)) {
        blue--;
      }
      if (blue <= 0) {
        colorState = RED_UP;
      }
      break;
  }
}

  // variable names modified from original by Larry D for clarity
  // timerLength is how long the timer is in Milliseconds
  // lastTimerExpiredTime is the time in Milliseconds of the last time the timer expired
  // BEGIN CheckTime()
  boolean checkTime(unsigned long &lastTimerExpiredTime, unsigned long timerLength) {
    // is the time up for this task?
    if (currentMillis - lastTimerExpiredTime >= timerLength) {
      lastTimerExpiredTime += timerLength;  //get ready for the next iteration
      return true;
    }
    return false;
  }
  //END CheckTime()

```

### Fade RGB LED Primary Colors on TinkerCad

<!-- TinkerCad RGB LED -->
<div class="iframe-tinkercad-container">
<iframe class="responsiveIframe" width="725" height="453" src="https://www.tinkercad.com/embed/iff1pSVoHwJ?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
</div>

[^1]: https://www.tinkercad.com/circuits
