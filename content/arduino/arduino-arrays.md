---
title: Arduino Arrays
date: 2023-06-17T14:59:41
lastmod: 2023-09-07T20:32:51
---

Arrays are a data structure that can store multiple values. Arrays can also be used to write less code for repeating actions such as `pinMode();`.

The previous traffic light state machine example used arrays to set the pins. It lists the pins in an array called `LEDPinArray[]`. This array has 6 items. Items in an array are zero indexed, meaning that it counts six items as 0-5, with 0 being the first item.

Then it uses the built in function `sizeof();` to get the size of the array and store that value in the variable `LED_NUMBER`.

Later in `setup();` a `for` loop is used to iterate through the array and set every pin as output. This saves lots of repeated code in the `setup();` fuction. If 20 pins or even 50 pins, if using an Arduino Mega or shift register, were used, the savings would be greater.

```C
const unsigned char  LEDPinArray[] = { northSouthRed,
                             northSouthYellow,
                             northSouthGreen,
                             eastWestRed,
                             eastWestYellow,
                             eastWestGreen };

const unsigned char  LED_NUMBER = sizeof(LEDPinArray);  // get the size of the array and store as variable

void setup() {
  // use a for loop to iterate through the array of LED pins
  for (int i = 0; i < LED_NUMBER; i++) {
    pinMode(LEDPinArray[i], OUTPUT);
  }
}
```
