---
title: "02.03 Fusion 360 Sketch Constraints and Fully Defined Sketches"
date: 2020-01-26T23:11:13Z
draft: false
---

## Fusion 360 Sketch Constraints

Fusion 360 uses digital sketches to describe and define 3D geometry. The sketches can have precise hard coded dimensions but sketches can also use sketch constraints for efficiency and flexibility.

For example, instead of labeling all 4 sides of a square as 50mm, it is possible to label one side of the square 50mm and apply and "equal" constraint to the other sides. They will be equal to the first side. This makes it easier to make design changes since only one dimension needs to be updated instead of four. Continuing the square example, it is possible to give a 90 degrees dimension to all the angles of the square or a simpler way would add a "perpendicular" constraint to the corners of the square.

Fusion 360 has many different useful sketch constraints including horizontal/vertical, coincident, tangent, equal, perpendicular, locked, midpoint, concentric, colinear, symmetry, and curvature. Using these constrains in combination with dimensions and defined user parameters you can create a "fully defined sketch" in Fusion 360. [Sketch Constraints Demo Video](https://www.youtu.be/vNdBkiO8Nfc)

## What is a fully defined sketch?

The goal is to fully define each sketch you create in Fusion 360. When new sketch lines ore elements are drawn in Fusion 360 they appear blue, indicating that there is not enough information to determine how the line or rectangle should appear. It could be missing a dimension, not know what angle it should be at, not know where the line starts or stops, or many other "undefined" aspects of the sketch. If a sketch is not fully defined then small changes can have big effects and can move parts of your design around in unexpected and frustrating ways. Once everything is defined, then the sketch lines turn black and a red padlock appears on the sketch name in the outline, indicating that the sketch is fully defined.

With the use of sketch constraints, it is not necessary to give dimensions to every part of a sketch. Often it is better to use constraints rather than dimensions so the sketch and 3D model is more resilient to change and modification. [Fully Defined Sketch Demo Video](https://www.youtu.be/9k7nsXpbZ5A)

## Types of Sketch Constraints

- **Horizontal / Vertical** - Keeps a line, or two points, including a midpoint or the origin in a vertical or horizontal relationship. When the constraint is applied it picks the orientation that is closest to how the elements are on the screen at the time.
- **Coincident** - two points are stuck together or a single point is constrained along a line or a curve
- **Tangent** - A line is constrained to a single point on a circle, arc, or curve and are not able to cross over each other even if the line is short and does not touch the curve.
- **Equal** - Makes two lines the same length, or two circles the same size, or two angles the same degree.
- **Parallel** - Keeps two lines or the edges of shapes parallel so that they never intersect.
- **Perpendicular** - Constrains two lines, or the edge of a shape and a line to a 90 degree angle.
- **Locked** - Keeps the selected sketch objects locked in place even if there are not enough other constraints. Turns the sketch lines green.
- **Midpoint** - Keeps the objects half way between the ends of a line.
- **Concentric** - Keeps two circles, arcs, or ellipses locked to the same center point
- **Colinear** - Locks two object along a line.
- **Symmetry** - Makes two objects stay the same size and in the same position across an axis.
- **Curvature** - Keeps continuous G2 curvature between two sketch objects.

## Fusion 360 Sketch Constraints Example Videos

<div class="video-grid">

<div class="video-card">

### 1. Fusion 360 Sketch Constraints

<div class="iframe-16-9-container"><iframe class="youTubeIframe" src="https://www.youtube.com/embed/vNdBkiO8Nfc?rel=0" width="300" height="150" allowfullscreen="allowfullscreen"></iframe></div>

</div>
<div class="video-card">

### 2. Fusion 360 Fully Defined Sketch

<div class="iframe-16-9-container"><iframe class="youTubeIframe" src="https://www.youtube.com/embed/9k7nsXpbZ5A?rel=0" width="300" height="150" allowfullscreen="allowfullscreen"></iframe></div>

</div>

</div>

## Additional Reading

[Fusion 360 Sketch Constraints User Guide Online](https://help.autodesk.com/view/fusion360/ENU/?guid=SKT-CONSTRAINTS)
