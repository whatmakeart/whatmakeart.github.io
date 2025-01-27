---
title: 02.13 Interactive Sculpture
date: 2025-01-27T12:00:00Z
lastmod: 2025-01-27T18:13:42
---

## Assignment Deliverables

1. Upload a 5 second to 30 second video of an interactive sculpture reacting to user input.
   - Label the file YYYYMMDD Lastname Firstname Interactive Sculpture Video.mp4
2. Bring a version of the interactive sculpture to class for everyone to try.

## Overview

Now that we can capture basic user input with buttons, potentiometer knobs, and potential WiFi connected devicers, we will use this input to create simple interactive sculptures or experiences. Turning the potentiometer knob might decide when to move the servo motor or pressing the button might make a sound or blink a LED.

You can use the example sketches with user input from this lesson. You can build from the work you did on the previous [Servo Shenanigans Assignment]. It can be an expansion and refinement of your original, such as adding LEDs.

## Instructions

While these are experiments with kinetic sculpture, we still want to add enough structure and other materials to make them interesting and useable. Remember that the combination of electronics with other techniques tends to make more interesting and creative output. For example, simple attaching your potentiometer knob through a hole in sheet material makes it appear more robust and inviting to the user. If your servo motor is securely attached, then it will me more predictable and responsive.

Additional servo motors, stronger servo motors, longer wires, extra potentiometers and LEDs are available. Your instructor can help your set up additional devices. Below are some additional ideas and concepts to try out. Don't hesitate to ask questions about this or adding additional actions / inputs.

### Consider

- Hot glue to keep things in place
- Use scrap wood and hot glue to build quick structures
- Use wire to make mechanical parts
- Cover objects with scrap fabric

## Things to Try

- Use the ESP32 WROOM modules to make a web interface to control the sculptures. This will likely require the assistance of an LLM but it well within reach.
- Use random numbers to introduce "unpredictability" to make it seem more alive or real. When the knob turns it could turn the servo 2 degrees plus a random number that could even make it go backwards. `random()` + `randomSeed()` with `min() max()` can accomplish this.
- Use button to switch between the the Potentiometer controlling LEDs or a servo.
- Add translucent materials over LEDs
- Separate the buttons and the LEDs / Servo with longer wires

## Assistance

Don't hesitate to ask for help with:

- wiring
- coding
- adding features or behavior to code
- adding more servos
- adding more LEDs
- adding buttons
- anything else
