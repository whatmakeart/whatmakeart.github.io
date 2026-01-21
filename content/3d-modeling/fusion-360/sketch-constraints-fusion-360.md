---
title: Fusion Sketch Constraints
date: 2023-06-13T14:40:45
lastmod: 2026-01-21T06:14:35-04:00
tags:
  - Fusion-360
---

[Fusion](fusion-360.md) uses digital sketches to describe and define 3D geometry. The sketches can have precise hard coded dimensions but sketches can also use sketch constraints for efficiency and flexibility.

For example, instead of labeling all 4 sides of a square as 50mm, it is possible to label one side of the square 50mm and apply and "equal" constraint to the other sides. They will be equal to the first side. This makes it easier to make design changes since only one dimension needs to be updated instead of four. Continuing the square example, it is possible to give a 90 degrees dimension to all the angles of the square or a simpler way would add a "perpendicular" constraint to the corners of the square.

Fusion has many different useful sketch constraints including horizontal/vertical, coincident, tangent, equal, perpendicular, locked, midpoint, concentric, colinear, symmetry, and curvature. Using these constrains in combination with dimensions and defined user parameters you can create a "fully defined sketch" in Fusion. [Sketch Constraints Demo Video](https://www.youtu.be/vNdBkiO8Nfc)

## What is a fully defined sketch?

The goal is to fully define each sketch you create in Fusion. When new sketch lines ore elements are drawn in Fusion they appear blue, indicating that there is not enough information to determine how the line or rectangle should appear. It could be missing a dimension, not know what angle it should be at, not know where the line starts or stops, or many other "undefined" aspects of the sketch. If a sketch is not fully defined then small changes can have big effects and can move parts of your design around in unexpected and frustrating ways. Once everything is defined, then the sketch lines turn black and a red padlock appears on the sketch name in the outline, indicating that the sketch is fully defined.

With the use of sketch constraints, it is not necessary to give dimensions to every part of a sketch. Often it is better to use constraints rather than dimensions so the sketch and 3D model is more resilient to change and modification. [Fully Defined Sketch Demo Video](https://www.youtu.be/9k7nsXpbZ5A)

## Types of Sketch Constraints

- **Horizontal / Vertical** - Keeps a line, or two points, including a midpoint or the origin in a vertical or horizontal relationship. When the constraint is applied it picks the orientation that is closest to how the elements are on the screen at the time. <!-- TODO Horizontal Constraint Tutorial Fusion -->
- **Coincident** - two points are stuck together or a single point is constrained along a line or a curve <!-- TODO Coincident Constraint Tutorial Fusion -->
- **Tangent** - A line is constrained to a single point on a circle, arc, or curve and are not able to cross over each other even if the line is short and does not touch the curve. <!-- TODO Tangent Constraint Tutorial Fusion -->
- **Equal** - Makes two lines the same length, or two circles the same size, or two angles the same degree. <!-- TODO Equal Constraint Tutorial Fusion -->
- **Parallel** - Keeps two lines or the edges of shapes parallel so that they never intersect. <!-- TODO Horizontal Parallel Tutorial Fusion -->
- **Perpendicular** - Constrains two lines, or the edge of a shape and a line to a 90 degree angle. <!-- TODO Perpendicular Constraint Tutorial Fusion -->
- **Locked** - Keeps the selected sketch objects locked in place even if there are not enough other constraints. Turns the sketch lines green.
- **Midpoint** - Keeps the objects half way between the ends of a line.
- **Concentric** - Keeps two circles, arcs, or ellipses locked to the same center point
- **Colinear** - Locks two object along a line.
- **Symmetry** - Makes two objects stay the same size and in the same position across an axis.
- **Curvature** - Keeps continuous G2 curvature between two sketch objects.

<!-- TODO Add Constraint Quick Tips Videos such as Did You Know? -->

## Fusion Sketch Constraints Example Videos

<div class="video-grid">

<div class="video-card">

### Fusion Sketch Constraints

<div class="iframe-16-9-container"><iframe class="youTubeIframe" src="https://www.youtube.com/embed/vNdBkiO8Nfc?rel=0" title="YouTube video player" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

</div>
<div class="video-card">

### Fusion Fully Defined Sketch

<div class="iframe-16-9-container"><iframe class="youTubeIframe" src="https://www.youtube.com/embed/9k7nsXpbZ5A?rel=0" title="YouTube video player" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

</div>

<div class="video-card">

### Fusion Fully Defined Spline

<div class="iframe-16-9-container"><iframe class="youTubeIframe" src="https://www.youtube.com/embed/ynBl9XJesDs?rel=0" title="YouTube video player" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

</div>

</div>

## Additional Reading

[Fusion 360 Sketch Constraints User Guide Online](https://help.autodesk.com/view/fusion360/ENU/?guid=SKT-CONSTRAINTS)
