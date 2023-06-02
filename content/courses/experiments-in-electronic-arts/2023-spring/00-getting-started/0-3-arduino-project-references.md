---
title: "00.03 Arduino Project Reference"
date: 2020-01-26T23:11:13Z
draft: false
---

## Arduino Code

- [Official Arduino Code Reference](https://www.arduino.cc/reference/en/)
- [How to Combine Arduino Sketches](https://youtu.be/nepj56gusuk)
- [How to Remove Delay from Arduino Sketch](https://youtu.be/EdpFZ8iCXo4)
- [How to Put Code into a Function](https://youtu.be/eBAeqSWm_hw)

## From Arduino Forum Posts

The Arduino forums are a great place to ask questions about projects and to search for existing answers. Sometimes the amount of existing posts make it hard to find the best answers for a specific project. You are encouraged to post questions to the forums. Below are forum posts with reasonably concise answers and solutions.

[Overview Post with Links to Helpful Topics](https://forum.arduino.cc/t/useful-links-check-here-for-reference-posts-tutorials/370268)

- [Make old telephones ring](https://forum.arduino.cc/t/making-old-telephone-s-ring/60821/9)
- [Daft Punk Inspired LED Light Chase](https://forum.arduino.cc/index.php?topic=200736.0)

### Arduino LED Heartbeat Code - From Arduino Forums

Simple Code that blinks an LED on Pin 13 like a beating heart. It is amazing for its simplicity and brevity. [^1]

```C
void setup() { pinMode(13, OUTPUT); }
void loop()  { digitalWrite(13, !(millis() & 640)); }
```

## Electronics Tools

- [Voltage Drop Calculator](https://www.calculator.net/voltage-drop-calculator.html)

## Project Examples

- [Pulse Heart Sensor Headband](https://pulsesensor.com/blogs/news/6327710-heartbeat-headband-dyi-video)
- [Pulse Heart Sensor Headband Article on Makezine](https://makezine.com/projects/beating-heart-headband/)

[^1]: First made by user dlloyd and then shortened by user nickgammon in this [Arduino Forum Post](https://forum.arduino.cc/t/trying-to-create-an-asymmetrical-blink-without-delay-please-help/294231/30)
