---
title: Physical Computing
date: 2023-05-23T21:59:41
lastmod: 2025-01-09T07:13:26
---

Physical computing is the field of study and practice that combines computer science with electronics and mechanics to create interactive systems that can sense and respond to the physical world. It is also known as embedded systems design, interactive electronics, or DIY electronics.

Physical computing projects often involve using microcontrollers, such as the [Arduino](../arduino/arduino-introduction.md) or [Raspberry Pi](../raspberry-pi/raspberry-pi.md), to connect sensors and actuators to a computer. The microcontroller can then be programmed to read the sensor data and control the actuators accordingly. This allows people to create all sorts of interactive devices, such as robots, musical instruments, and home automation systems, and [art installations](../sculpture/art-installations.md).

Physical computing is popular for people of all ages and skill levels. It is also used in education to teach students about science, technology, engineering, and math (STEM). Additionally, physical computing is used in many industries, such as robotics, manufacturing, and healthcare.

Physical computing projects are typically programmed using a variety of software languages, such as C++, Python, and JavaScript. These languages allow one to write code that controls the behavior of the microcontroller and the other hardware components.

## Electronics Fabrication

- Wire crimping connections
- Heat shrink tape
- Fuses
- Wire gauge [electrical wire basics](./electrical-wire-basics.md)
- Stranded vs solid
- Solder vs crimped

## Raspberry Pi

The [Raspberry Pi](../raspberry-pi/raspberry-pi.md) is an example of a single board computer.

## Arduino

The [Arduino](../arduino/arduino-introduction.md) is a cheap, simple single board multiprocessor with digital and analog input and output pins.

## Arduino Tutorials

- [Drum Robot Machine](https://llllllll.co/t/solenoid-drum-strikers/7955/6)
- [Letter of Recommendation: Piezo Mics](https://www.nytimes.com/2019/07/16/magazine/letter-of-recommendation-piezo-mics.html)
- [Arduino Subwoofer Code Low Hz Sinewave on GitHub](https://github.com/cmasenas/SineWave)
- [Arduino Subwoofer Code on Arduino Forums](https://forum.arduino.cc/index.php/topic,26983.0.html)
- [Spherical LED Matrix - Sphere Shaped LED Screen From LED Pixel Strip: 11 Steps](https://www.instructables.com/id/Spherical-LED-Matrix-Sphere-Shaped-LED-Screen-From/)
- [nRF24L01 and 4 Relay](https://forum.arduino.cc/index.php?topic=506265.0)
- [Trouble getting two SPI devices working at the same time (nRF24L01 and SD card)](https://forum.arduino.cc/index.php?topic=435717.0)

### Count 2 Dimensional Array

[Count 2 dimensional or Multi dimensional Array Arduino](https://forum.arduino.cc/index.php?topic=410749.0)

```C
#define ArrayCount(array) (sizeof array / sizeof array[0])
const SomeType TwoDArray[5][4];

ArrayCount(TwoDArray) should evaluate to 5
ArrayCount(TwoDArray[0]) should evaluate to 4
```

Arduino LED Heartbeat Code - From Arduino Forums First made by user dlloyd and then shortened by user nickgammon in this [Arduino Forum Post](https://forum.arduino.cc/t/trying-to-create-an-asymmetrical-blink-without-delay-please-help/294231/30)

```C
void setup() { pinMode(13, OUTPUT); }
void loop()  { digitalWrite(13, !(millis() & 640)); }
```

### Daft Punk Light Chase Arduino Code

https://forum.arduino.cc/index.php?topic=200736.0

```C
const byte CheekLEDPins[] = {
  3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4
};  // gives forward and back
const int CHEEK_COUNT = sizeof CheekLEDPins / sizeof CheekLEDPins[0];
const unsigned CheekIntervals[CHEEK_COUNT] = {  // Milliseconds
  300, 300, 300, 300, 300, 300,
  300, 300, 300, 300, 300, 300
};
unsigned long CheekTime = millis();
int CheekStep = 0;

const int ChinLEDPins[] = {
  10, 11, 12, 13
};
const int CHIN_COUNT = sizeof ChinLEDPins / sizeof ChinLEDPins[0];
const unsigned ChinIntervals[] = {  // Milliseconds
  300, 300, 300, 300
};
unsigned long ChinTime = millis();
int ChinStep = 0;

void setup() {
  int i;
  /* Cheek LED's */
  for (i = 0; i < CHEEK_COUNT; i++)
    pinMode(CheekLEDPins[i], OUTPUT);  // Yes, it's OK to set the pinMode twice on some pins

  /* Chin LED's */
  for (i = 0; i < CHIN_COUNT; i++)
    pinMode(ChinLEDPins[i], OUTPUT);
}

void loop() {
  unsigned long currentMillis = millis();

  // Do the cheek animation
  if ((currentMillis - CheekTime) >= CheekIntervals[CheekStep])
  {
    CheekTime += CheekIntervals[CheekStep];
    digitalWrite(CheekLEDPins[CheekStep], LOW); // Previous pin OFF
    CheekStep = (CheekStep + 1) % CHEEK_COUNT;
    digitalWrite(CheekLEDPins[CheekStep], HIGH);  // New pin ON
  }

  // Do the chin animation
  if ((currentMillis - ChinTime) >= ChinIntervals[ChinStep])
  {
    ChinTime += ChinIntervals[ChinStep];
    digitalWrite(ChinLEDPins[ChinStep], LOW); // Previous pin OFF
    ChinStep = (ChinStep + 1) % CHIN_COUNT;
    digitalWrite(ChinLEDPins[ChinStep], HIGH);  // New pin ON
  }
}
```

[Led text scroll with Arduino and Raspberry Pi](http://victorsand.com/ledmatrix/)

### Flip LED strands Python

```C
if y % 2 == 0: # if column even
    out[ x + (h * y)] = color ( *[int( round( c * plasmaBright ) ) for c in hsv ] )
else: # if column odd
    out[ (y * h) + (h -1 -x) ] = color ( *[int( round( c * plasmaBright ) ) for c in hsv ] )
```

- [LEDs with added trigonometry – sandyjmacdonald](http://sandyjmacdonald.github.io/2015/01/20/leds-with-added-trigonometry/)
- [Taking the Leap Off Board: An Introduction to I2C Over Long Wires | Hackaday](https://hackaday.com/2017/02/08/taking-the-leap-off-board-an-introduction-to-i2c-over-long-wires/)
