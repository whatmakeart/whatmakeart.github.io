---
title: Electrical Wire Basics
lastmod: 2025-12-23T10:12:35-04:00
date: 2024-11-10T16:01:02
tags:
  - Electronics
---

Wires come in different sizes. They can be thick or thin, stranded or solid, copper or aluminum, the insulation can be PVC or silicone or other material. Depending on application. It is important to to choose the proper wire for your application. As a general [electricity basics](electricity-basics.md) rule of thumb, thicker wire will have a lower resistance and be able to carry more current or longer distance without voltage drop, while a thinner wire will have more resistance, heat up faster, and have more voltage drop when it is used over distances.

## AWG American Wire Gauge

In the AWG system a smaller number indicates a bigger wire, so a #1 wire is much, much larger than a #30 wire. For every three sizes the cross section of the wire and its current carrying capacity doubles. 12 AWG has double the current capacity of 15 AWG. Refer to wire guage table below.

## Home Wiring

In the United States, household wiring is typically 14 AWG or 12 AWG. This is commonly denoted by the outside installation color of yellow for 12 AWG and white for 14 AWG but that has not always been the case. Always check the writing on the insulation of a particular wire or measure it with [digital calipers](../making/how-to-use-digital-calipers.md) to determine it's size.

## Electronics Wiring

Electronics projects use much thinner wire than household wiring for DC circuits. For transmitting power to LEDs or motors often. 16 or 18 gauge wire is more than sufficient. When hooking up small circuits to a breadboard, 22 gauge wire is often used. When using small wires over long distances. It's important to consider voltage drop, especially in DC circuits. Using a larger gauge wire can help with voltage drop over long distances by reducing resistance in the wire.

## Solid vs Stranded / Multi-core Wiring

A solid wire will have less resistance then stranded wire and has more structural integrity, but does not do well with vibration or movement. Solid wire is made up of a single copper or aluminum conductor inside the insulation, while stranded wire is made up of multiple strands of copper or aluminum inside the wiring insulation. Solid core wire can be attached to screw terminals directly with a secure connection, but stranded wire needs to be crimped into into a connector to have structural support and strain relief. If stranded wire is inserted into a screw terminal it will compress and become flat and not have a good connection. Stranded wire can also be soldered, but this often will wick solder up the strands, converting it to a solid core wire and negating the effects of the flexibility of the stranded wire. Wire. In any project that will have vibration or motion. It is generally better to use crimped connections rather than soldered connections unless the wire will not be moving.

## Strain Relief

Wires are flexible and will hang from the locations that they are secured. This is especially true where wires terminate with crimp terminals or soldered connections. Chords coming from devices also receive a lot of stress. It is important to add strain relief to these connection points to prevent the wire from prematurely becoming damaged. Sometimes it can be as simple as the wire insulation crimped in the crimped terminal. For power supply cords, there are specific rubber strain relief devices that can be put around the cord. For smaller size wires, [heat shrink tubing](heat-shrink-tubing.md) can be used to add some strain relief to wire connections.

### Wire Gauge Table [^1]

<div class="responsive-table-markdown">

| AWG | Diameter mils d | Area, circular mils, d2 | Area, mm2 | Ohms per 1000 ft. |
| --- | --------------- | ----------------------- | --------- | ----------------- |
| 8   | 129.49          | 16,768                  | 8.49647   | 0.6282            |
| 9   | 114.43          | 13,094                  | 6.63483   | 0.7921            |
| 10  | 101.89          | 10,382                  | 5.26064   | 0.9989            |
| 11  | 90.742          | 8,234.10                | 4.17228   | 1.26              |
| 12  | 80.808          | 6,529.90                | 3.30875   | 1.588             |
| 13  | 71.961          | 5,178.40                | 2.62393   | 2.003             |
| 14  | 64.064          | 4,106.80                | 2.08095   | 2.525             |
| 15  | 57.068          | 3,256.80                | 1.65024   | 3.184             |
| 16  | 50.82           | 2,582.70                | 1.30867   | 4.016             |
| 17  | 45.257          | 2,048.20                | 1.03784   | 5.064             |
| 18  | 40.303          | 1,624.30                | 0.82304   | 6.385             |
| 19  | 35.89           | 1,288.10                | 0.65269   | 8.051             |
| 20  | 31.961          | 1,021.50                | 0.51760   | 10.15             |
| 21  | 28.465          | 810.1                   | 0.41048   | 12.8              |
| 22  | 25.347          | 642.47                  | 0.32554   | 16.14             |
| 23  | 22.571          | 509.45                  | 0.25814   | 20.36             |
| 24  | 20.1            | 404.01                  | 0.20471   | 25.67             |
| 25  | 17.9            | 320.41                  | 0.16235   | 32.37             |
| 26  | 15.94           | 254.08                  | 0.12874   | 40.81             |
| 27  | 14.195          | 201.5                   | 0.10210   | 51.47             |
| 28  | 12.641          | 159.79                  | 0.08097   | 64.9              |
| 29  | 11.257          | 126.72                  | 0.06421   | 81.83             |
| 30  | 10.025          | 100.5                   | 0.05092   | 103.2             |

</div>

[^1]: Handbook of Electronic Tables and Formulas
