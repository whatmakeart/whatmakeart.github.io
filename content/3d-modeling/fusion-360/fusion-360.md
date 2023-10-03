---
title: Fusion 360
date: 2023-05-26T02:50:47
lastmod: 2023-10-03T04:15:45
---

Fusion 360 is a [Parametric-Modeling](../parametric-modeling.md) program combined with CAM output for [CNC milling](../../digital-fabrication/cnc/cnc-basics.md), [laser cutting](../../digital-fabrication/laser-cutting/laser-cutting.md), and [3D printing](../../digital-fabrication/3d-printing/3d-printing.md) that simplifies going from digital ideas inside the computer to physical output.

- [Fusion 360 Rule #1](./fusion-360-rule-number-one.md)
- [Fusion 360 FAQ](./fusion-360-faq.md)

## Fusion 360 Sculpting

In addition to traditional parametric CAD modeling tools, Fusion 360 also has a sculpting workspace that uses [t-splines to make organic forms](./fusion-360-organic-forms-with-t-splines.md).

- [T-Splines Introduction](https://youtu.be/8vGrRR_TLEg)
- [Fusion-360-Sculpting-Tips](fusion-360-sculpting-tips.md)

## Fusion 360 Rendering

Fusion 360 has a robust local and cloud rendering engine with built in materials. Some materials are fully 3D mapped and seamlessly cover complex shapes and forms. Get started with [basic rendering in Fusion 360](./fusion-360-basic-rendering.md)

## Parametric Modeling

Parametric modeling allows the use of variables or parameters to stand in for hard coded dimensions in the 3D model. Instead of defining a dimension "height" as 50mm one could define "height" as "width x 2" where width = 25mm.

### Parametric Formulas for Fusion 360

#### Geodesic Formula for Fusion 360

golden_ratio = (1+sqrt(5))/2 length = width * golden_ratio width = sqrt(4*sphere_radius^2/(1+golden_ratio^2))
