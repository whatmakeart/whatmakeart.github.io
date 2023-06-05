---
title: "03.07 Read Microphone Voltage"
date: 2020-01-26T23:11:13Z
draft: false
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
