---
title: Fade LED with Arduino
date: 2023-06-16T17:30:04
lastmod: 2025-01-07T04:17:44
tags:
  - Electronics
---

Now that we have the LED blinking with the Arduino, how can we adjust the brightness of the LED? We can vary the input into the LED very quickly over time to simulate a fading effect. Remember the Arduino is looping so fast that in most cases the program executes instantaneously as far as human perception is concerned. Although the Arduino is a digital device it can simulate analog signal output using Pulse Width Modulation or PWM. This is like turning a switch on and off vary quickly and leaving it on or off for specific amounts of time.

The circuit is the same as the blink example except that the LED is connected to pin 9 by default instead of pin 13 in order to use Pulse Wave Modulation (PWM) to fade the LED.

## Example Fade Code

The Arduino example sketch below introduces some new coding concepts such as variables, math, and conditional statements. We will go over each of these.

### Variables

At the top of the sketch we have 3 integer (number) variables with initial values. The syntax for declaring a variable is to say what kind it is, then its name and then optionally what its initial value is. So the line `int led = 9;` says that the type of variable is an integer, the name is led, and the initial value is 9. There is also a variable called brightness with an initial value of 0 and a variable called `fadeAmount` with an initial value of 5.

### Setup Function

Next comes the `setup();` function. This uses the same `pinMode();` function from the Blink example to set the variable `led` (which is pin 9) to be an `OUTPUT`. Nothing else happens in the `setup();` function and remember this function only runs once.

### Loop Function

Then the `loop();` function begins. It introduces a new function called `analogWrite();` this is similar to the `digitalWrite();` function from the Blink example except that it can use PWM to simulate an analog output signal. This function tells the `led` to be set at the value of the variable `brightness` rather than a simple `HIGH` or `LOW`, on or off, like in `digitalWrite();`.

### Math

Next is a math equation. After the led has been set to the brightness value, this line says to change the value of variable `brightness` to be be `brightness` plus the value of the variable `fadeAmount`. So it is 0 + 5 = 5.

### Conditional If statement

Next is one of the most useful pieces of computer logic, the conditional if statement. If something happens then do a thing. In this case the "if" is **IF** the value of `brightness` is less than or equal to zero **OR** if the value of `brightness` is greater than or equal to 255 **THEN** flip the value or direction of the fade.

### Delay

Then the `delay();` function is used to pause for 30 milliseconds. This value controls the speed of the fade.

### fadeAmount

The `fadeAmount` value controls the rate of increase of each step of brightness. If it is at the default of 5 then it steps up by 5 each time through the loop. If it is at 25 then it steps up in brightness by 25 each time through the loop.

### Full Sketch

```C

/*
  Fade

  This example shows how to fade an LED on pin 9 using the analogWrite()
  function.

  The analogWrite() function uses PWM, so if you want to change the pin you're
  using, be sure to use another PWM capable pin. On most Arduino, the PWM pins
  are identified with a "~" sign, like ~3, ~5, ~6, ~9, ~10 and ~11.

  This example code is in the public domain.

  https://www.arduino.cc/en/Tutorial/BuiltInExamples/Fade
*/

int led = 9;         // the PWM pin the LED is attached to
int brightness = 0;  // how bright the LED is
int fadeAmount = 5;  // how many points to fade the LED by

// the setup routine runs once when you press reset:
void setup() {
  // declare pin 9 to be an output:
  pinMode(led, OUTPUT);
}

// the loop routine runs over and over again forever:
void loop() {
  // set the brightness of pin 9:
  analogWrite(led, brightness);

  // change the brightness for next time through the loop:
  brightness = brightness + fadeAmount;

  // reverse the direction of the fading at the ends of the fade:
  if (brightness <= 0 || brightness >= 255) {
    fadeAmount = -fadeAmount;
  }
  // wait for 30 milliseconds to see the dimming effect
  delay(30);
}

```

### Arduino Fade LED without `delay();`

The example below fades the LED without using the `delay();` function that blocks code.

```C

unsigned long currentMilliseconds = 0;          // variable for current time in milliseconds
unsigned long previousMillisecondsFadeLed = 0;  // previous time in milliseconds
int fadeInterval = 30;                          // milliseconds for the LED fade

int led = 9;         // the PWM pin the LED is attached to
int brightness = 0;  // how bright the LED is
int fadeAmount = 5;  // how many points to fade the LED by

// the setup routine runs once when you press reset:
void setup() {
  // declare pin 9 to be an output:
  pinMode(led, OUTPUT);
}

// the loop routine runs over and over again forever:
void loop() {
  // set the brightness of pin 9:
  analogWrite(led, brightness);

  unsigned long currentMilliseconds = millis();  // set the current time to the current milliseconds

  // check if the fadeInterval time has passed since the previous time
  if (currentMilliseconds - previousMillisecondsFadeLed >= fadeInterval) {
    // save the last time you changed LED brightness
    previousMillisecondsFadeLed = currentMilliseconds;

    // change the brightness for next time through the loop:
    brightness = brightness + fadeAmount;

    // reverse the direction of the fading at the ends of the fade:
    if (brightness <= 0 || brightness >= 255) {
      fadeAmount = -fadeAmount;
    }
  }
}

```
