---
title: Fusion 360
---

Fusion 360 is a [Parametric-Modeling](parametric-modeling.md) program combined with CAM output that simplifies going from digital ideas inside the computer to physical output.

[Fusion-360-Sculpting-Tips](fusion-360-sculpting-tips.md)

## Parametric Modeling

Parametric modeling allows the use of variables or parameters to stand in for hard coded dimensions in the 3D model. Instead of defining a dimension "height" as 50mm one could define "height" as "width x 2" where width = 25mm.

### Parametric Formulas for Fusion 360

#### Geodesic Formula for Fusion 360

golden_ratio = (1+sqrt(5))/2 length = width * golden_ratio width = sqrt(4*sphere_radius^2/(1+golden_ratio^2))
