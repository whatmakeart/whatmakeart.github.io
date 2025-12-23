---
title: Sense Light and Dark with Photoresistor
date: 2023-06-17T10:39:27
lastmod: 2023-09-07T20:34:30
tags:
  - Arduino
---

This example from Arduino uses a photoresistor to sense the ambient light. It also introduces a switch case statement. This will be useful for studying how to schedule tasks in Arduino sketches and how to make a state machine to control complex operations in a predictable sequence rather than with separate timers.

```C
/*
  Switch statement

  Demonstrates the use of a switch statement. The switch statement allows you
  to choose from among a set of discrete values of a variable. It's like a
  series of if statements.

  To see this sketch in action, put the board and sensor in a well-lit room,
  open the Serial Monitor, and move your hand gradually down over the sensor.

  The circuit:
  - photoresistor from analog in 0 to +5V
  - 10K resistor from analog in 0 to ground

  created 1 Jul 2009
  modified 9 Apr 2012
  by Tom Igoe

  This example code is in the public domain.

  https://www.arduino.cc/en/Tutorial/BuiltInExamples/SwitchCase
*/

// these constants won't change. They are the lowest and highest readings you
// get from your sensor:
const int sensorMin = 0;    // sensor minimum, discovered through experiment
const int sensorMax = 600;  // sensor maximum, discovered through experiment

void setup() {
  // initialize serial communication:
  Serial.begin(9600);
}

void loop() {
  // read the sensor:
  int sensorReading = analogRead(A0);
  // map the sensor range to a range of four options:
  int range = map(sensorReading, sensorMin, sensorMax, 0, 3);

  // do something different depending on the range value:
  switch (range) {
    case 0:  // your hand is on the sensor
      Serial.println("dark");
      break;
    case 1:  // your hand is close to the sensor
      Serial.println("dim");
      break;
    case 2:  // your hand is a few inches from the sensor
      Serial.println("medium");
      break;
    case 3:  // your hand is nowhere near the sensor
      Serial.println("bright");
      break;
  }
  delay(1);  // delay in between reads for stability
}

```

## Photoresistor Example Code Without `delay();`

```C
// these constants won't change. They are the lowest and highest readings you
// get from your sensor:
const int sensorMin = 0;    // sensor minimum, discovered through experiment
const int sensorMax = 600;  // sensor maximum, discovered through experiment

// timer code
unsigned long currentMilliseconds = 0;             // current time in milliseconds
unsigned long previousMillisecondsReadSensor = 0;  // previous time sensor was read
int readSensorInterval = 1;                        // time between reading the sensor in milliseconds

void setup() {
  // initialize serial communication:
  Serial.begin(9600);
}

void loop() {

  currrentMilliseconds = millis();  // get the current time in milliseconds

  if (currentMilliseconds - previousMillisecondsReadSensor >= sensorReadInterval) {
    previousMillisecondsReadSensor = millis();  // set previous time to now

    // read the sensor:
    int sensorReading = analogRead(A0);
    // map the sensor range to a range of four options:
    int range = map(sensorReading, sensorMin, sensorMax, 0, 3);

    // do something different depending on the range value:
    switch (range) {
      case 0:  // your hand is on the sensor
        Serial.println("dark");
        break;
      case 1:  // your hand is close to the sensor
        Serial.println("dim");
        break;
      case 2:  // your hand is a few inches from the sensor
        Serial.println("medium");
        break;
      case 3:  // your hand is nowhere near the sensor
        Serial.println("bright");
        break;
    }
  }
}

```
