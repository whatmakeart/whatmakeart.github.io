---
title: 07.04 LED DC Power Injection
date: 2023-10-06T09:30:00
lastmod: 2023-10-08T07:04:37
---

LED power injection is a technique used to improve the performance and reliability of long LED strips. It involves connecting additional power supplies to the LED strip at multiple points along its length. This helps to reduce the voltage drop and current draw along the strip, which can cause brightness variations and premature LED failure.

Parallel power injection involves connecting the positive and negative terminals of a power supply to the corresponding terminals on the LED strip at the point of injection. This is the most common type of power injection and is typically used for long LED strips.

Generally, the lower the voltage of the LEDs the more often power injection is needed. A 5V LED strip will need power injected more often than a 12v strip or a 24v strip. The intervals between power injection points will depend on the length of the LED strip, the type of LED strip, and the brightness level at which it is being used.

For example, a 10-meter run of WS2812B LED strip at full brightness may require power injection every 5 meters. However, the same 10-meter run of LEDs at half brightness may not require any power injection at all.

- Always disconnect the power supply from the LED strip before making any connections and follow basic [electricity safety](../../../../electronics/electricity-safety.md).
- Use power supplies with the same voltage and current rating.
- Always maintain a common DC ground connection point between all power supplies used in the system.
- Don't connect the positive terminals of separate power supplies.
- Connect the power supplies to the LED strip at evenly spaced intervals.
- Make sure that the power supply wires are of sufficient gauge to handle the current load.
- Make sure that the connections are secure and insulated to prevent electrical shock. [heat shrink tubing](../../../../electronics/heat-shrink-tubing.md) can protect the connections and add some structural support
- Do not overload the power supplies or the LED strip.
