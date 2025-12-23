---
title: Read Microphone Voltage
date: 2023-06-17T10:42:36
lastmod: 2023-09-07T20:34:22
tags:
  - Arduino
  - Electronics
---

```C
/* Read Microphone Voltage */
const int sampleWindow = 50;         // milliseconds of microphone sample
unsigned int sample;                 // sample value
const long samplePotInterval = 500;  // time between reading and printing Potentiometer value for testing

void setup {}
void loop {
  void readMicVoltRange() {
    unsigned long startMillis = millis();
    unsigned int peakToPeak = 0;
    unsigned int signalMax = 0;
    unsigned int signalMin = 1024;

    while (millis() - startMillis < sampleWindow)
      sample = analogRead(micPin);
    if (sample < 1024) {
      if (sample > signalMax) {
        signalMax = sample;
      } else if (sample < signalMin) {
        signalMin = sample;
      }
    }
    peakToPeak = signalMax - signalMin;
    double volts = (peakToPeak \* 5.0) / 1024;

    //Serial.println(volts);
  }
}

```
