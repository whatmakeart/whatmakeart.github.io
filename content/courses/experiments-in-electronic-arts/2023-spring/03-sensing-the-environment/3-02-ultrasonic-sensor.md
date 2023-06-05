---
title: "03.02 - Ultrasonic Sensor Ping"
date: 2020-01-26T23:11:13Z
draft: false
---

An ultrasonic sensor can send a sound wave out and measure the time it takes for it to bounce back off an object. By using the speed of sound, the distance to the "pinged" object can be determined. The Arduino can then perform functions based on the distance of objects.

## UltraSonic Sensor Circuit

Hook up GND and 5V to the breadboard power rail and connect the same GND and 5V pins on the ultrasonic sensor module to their respective spots on the breadboard power rail. The ultrasonic trig pin connects to 11 and the the ultrasonic echo pin connects to 12. To blink an LED based on the distance reading, hook up an LED and a resistor to pin 10.

[![Ultrasonic Sensor Circuit](3-0-introduction/ultrasonic-sensor-circuit-with-led.png)](3-0-introduction/ultrasonic-sensor-circuit-with-led.png)

## UltraSonic Code without the Delay

```C

/* Uses a state machine to read the ultrasonic sensor without delay */

const int ultraLEDPin = 13;  // pin of LED
const int trigPin = 11;      // trig pin of the ultrasonic sensor
const int echoPin = 12;      // echo pin of the ultrasonic sensor

long duration;           // duration of the pin
int distance;            // Distance calculated by ultrasonic sensor
int reactDistance = 40;  // Distance the sensor reacts to in centimeters

const long sampleSensorsInterval = 500;  // time between printing sensor values
const long ultraSonicInterval = 100;     // time between reading Ultrasonic Sensor
const long clearTrigInterval = 2;        // time between clearing the Trig Pin
const long pulseTrigInterval = 10;       // time between pulsing the Trig Pin

// enumerates the states of the ultrasonic sensor state machine
enum sensorStates { CLEAR_TRIG_PIN,
                    PULSE_TRIG_PIN,
                    READ_DISTANCE,
                    TRIGGER_EVENT,
                    WAIT_DELAY };

enum sensorStates ultraSonicState = CLEAR_TRIG_PIN;  // sets the initial state to CLEAR_TRIG_PIN

unsigned long currentMilliseconds = 0;
unsigned long currentMicroseconds = 0;
unsigned long previousMillisecondsSampleSensors = 0;  // Time track for sensor reading
unsigned long previousMillisecondsUltra = 0;          // Time track for Ultrasonic Sensor
unsigned long previousMicrosecondsUltra = 0;          // Time track for Ultrasonic Sensor

void setup() {
  Serial.begin(9600);            // start serial monitor
  pinMode(trigPin, OUTPUT);      // Sets the trigPin as an Output
  pinMode(echoPin, INPUT);       // Sets the echoPin as an Input
  pinMode(ultraLEDPin, OUTPUT);  // Sets the ultraLEDPin as an Input
}

void loop() {
  currentMilliseconds = millis();
  currentMicroseconds = micros();
  ultraSonic();
  printData();
}

void printData() {
  if (currentMilliseconds - previousMillisecondsSampleSensors >= sampleSensorsInterval) {
    // save the last time you checked the sensors
    previousMillisecondsSampleSensors = currentMilliseconds;
    // Prints the Ultrasonic distance on the Serial Monitor
    Serial.print("Distance: ");
    Serial.print(distance);
    Serial.println(" centimeters");
  }
}
void ultraSonic() {

  switch (ultraSonicState) {
    case CLEAR_TRIG_PIN:           // toggle the LED
      digitalWrite(trigPin, LOW);  // Clears the trigPin
      if (micros() - previousMicrosecondsUltra >= clearTrigInterval)
        previousMicrosecondsUltra = micros();
      ultraSonicState = PULSE_TRIG_PIN;
      break;

    case PULSE_TRIG_PIN:            // wait for the delay period
      digitalWrite(trigPin, HIGH);  // Sets the trigPin on HIGH state for 10 micro seconds
      if (millis() - previousMicrosecondsUltra >= pulseTrigInterval)
        ultraSonicState = READ_DISTANCE;
      break;

    case READ_DISTANCE:                   // wait for the delay period
      digitalWrite(trigPin, LOW);         // Clears the trigPin
      duration = pulseIn(echoPin, HIGH);  // Reads echoPin, returns sound travel in microseconds
      distance = duration * 0.034 / 2;    // Calculating the distance
      ultraSonicState = TRIGGER_EVENT;
      break;

    case TRIGGER_EVENT:  // do some cool thing
      if (distance <= reactDistance) {
        digitalWrite(ultraLEDPin, HIGH);  // Turns on the LED

      } else {
        digitalWrite(ultraLEDPin, LOW);  // Turns off the LED
      }
      ultraSonicState = WAIT_DELAY;
      break;

    case WAIT_DELAY:  // wait for the delay period
      if (millis() - previousMillisecondsUltra >= ultraSonicInterval) {
        ultraSonicState = CLEAR_TRIG_PIN;
      }
      break;

    default:
      ultraSonicState = WAIT_DELAY;
      break;
  }
}

```
