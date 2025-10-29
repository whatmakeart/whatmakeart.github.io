---
title: Virtual Production
date: 2025-09-30T16:52:15
lastmod: 2025-10-29T05:10:16
---

Virtual Production uses a combination of technologies to create a realtime simulated environment for capturing video, creating experiences, or visualizing spaces.

- [Virtual Production Tutorials](./virtual-production-tutorials.md)

## LED Volumes

Virtual production with an LED Volume has many advantages over virtual production with a green screen. Since the LED Volume emits light secondary lighting and reflections are "free". One does not have to key out the subject, despill the footage, and then composite later. The LED Volume offers superior results with the downside that the take is final. There are some workflows that can capture two plates by cycling a green screen on the LEDS in between the regular shots and then shoot at a high frame rate so it is imperceptible to humans but this requires specialized equipment.

- Don't shine lights directly on the LED volume.
- Genlock is required for syncying generated environments and camera tracking

### Start Unreal Remote Control Web Interface

- Enable the _Remote Control Web Interface_ Plugin in Unreal Project Settings

Multiple presets for remote control are allowed in a single unreal project but only one cane be open at a time.

To use Unreal remote control with RenderStream add customized arguments to the workload in disguise `-RCWebControlEnable -RCWebInterfaceEnable -WebControlPort=30000` or with whatever port you specify in the Unreal Project. Then you can get the IP address of the Render Node by using `ipconfig` in the command line.
