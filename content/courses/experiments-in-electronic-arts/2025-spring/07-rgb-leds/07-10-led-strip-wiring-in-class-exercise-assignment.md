---
title: 07.10 LED Strip Wiring In Class Exercise Assignment
date: 2025-03-03T12:00:00Z
lastmod: 2025-03-17T05:52:25
---

## Assignment Deliverables

1. Follow in class instructions to fabricate wiring harness with crimp connections to power an addressable LED strip and send data from a microcontroller

## Overview

LEDs are fun to control but if you use individual LEDs then your microcontrollwer will quickly run out of GPIO pins. Addressable LEDs overcome this limitation by sending a signal through all of the LEDs that tells each individual LED what color and brightness to operate at. This usually only requires 1 to 2 wires.

Using the [fastLED library examples](../../../../arduino/arduino-fast-led.md), enter the correct LED protocol, LED pin number on the Arduino, and the number of LEDs. We are using strips of 7 LEDs that work with WS2811 protocol using only 1 data line.

## Resources

[fastLED Example](../../../../arduino/arduino-fast-led.md)

## Grading Rubric

<div class="responsive-table-markdown">

| Assessment                   | Value     |
| ---------------------------- | --------- |
| Wiring to LED Strip          | 30 points |
| Crimp Connectors Used        | 30 points |
| Use FastLED Library Examples | 40 points |

</div>
