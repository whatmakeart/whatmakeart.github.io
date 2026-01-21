---
title: Fusion 360 Basic Pattern Tools
date: 2023-06-13T14:39:39
lastmod: 2026-01-20T20:43:47-04:00
tags:
  - Fusion-360
  - 3D-Modeling
---

A pattern is a repeated unit arranged with a specific rules and parameters. Once you start looking for patterns, you’ll notice they’re all around you, both in nature and in designed objects, because repetition is one of the fastest ways to build structure, texture, and unity in a [design](../../art-faq/design.md).

## Examples of Patterns in the Environment

Examine everyday objects around you and look for different types of patterns. Pause and look around where you are. Find one rectangular pattern, one circular pattern, and one pattern that follows a path. The goal is to build the habit of seeing repetition as a design choice you can control.

### Examples of Rectangular Patterns

A rectangular pattern can have 1, 2, or 3 directional axis to form a grid to arrange the pattern. The windows in a building, legs of a table or chair, drawers in a cabinet, buttons on a game controller, wheels on a car, pixels on a computer monitor, and the aisles in a retail store are all laid out in neat rectangular rectangular patterns.

Where else do you see rectangular patterns?

### Examples of Circular Patterns

A circular pattern follows the contour of a circle. It may or may not go all the way around the circumference of the circle. The blades on a drone, cutouts on a custom car rim, bars on a merry-go-round, ridges on a cut drinking glass, grid fins on a rocket, nubs on the grip handle of a mountain bike are examples of circular patterns.

Where else do you see circular patterns?

### Examples of Patterns Along a Path

The lamp posts along a winding parkway, LEDs in a fancy car headlight, cut outs in an organic chair, and ridges along the grip of a cordless drill are examples of patterns along a path.

Where else do you see patterns along a path?

## Pattern Tools in Autodesk Fusion

In [3D modeling](../3d-modeling.md) , patterns save time and keep your design editable. Instead of modeling the same feature 20 times, a pattern allows you to model it once and let the computer repeat it. This is similar to the concept of `DRY - Do No Repeat Yourself` in computer programming. If you find yourself doing a repetitive action, often there is a way to make the process more efficient with batch processing or automation. Patterning is a form of automation after an initial design decision is made. Then when you change the size, spacing, or count, the whole design updates consistently. This is useful for iteration, fabrication constraints, and other revisions.

[Fusion](fusion-360.md) allows you to create patterns of objects or features. This is a powerful way to make complex additions to a model in a quick and editable way. You can create a rectangular pattern, a circular pattern, or a pattern on a path.

- **Rectangular Pattern** - Lays out objects or features along a rectangular pattern from a central origin.
  - [Rectangular Pattern Video Demo](https://youtu.be/Y0nYNZvL0EA)
- **Circular Pattern** - Lays out objects or features along a circular pattern from a central origin.
  - [Circular Pattern Video Demo](https://youtu.be/As3TVfDPu4g)
- **Pattern Along a Path** - Lays out objects or features along a custom linear path that can be organic, geometric, or a combination.
  - [Video demonstration of pattern along a path.](https://youtu.be/9xit7JRPQ0A)
  - [Cut out shapes in a pattern along a path](https://youtu.be/do4VSfm782Y)

### Pattern Best Practices in Fusion

In Fusion it is better to make patterns in the 3D workspace rather than in 2D sketches. This is also true for [mirroring objects](how-to-mirror-a-body-fusion-360.md) in Fusion. Avoiding 2D sketch patterns increases efficiency, improves performance, and allows more flexibility for design iteration. The recommended workflow is to create a solid, or extrude, or design feature and pattern that rather than the sketch. <!-- TODO 3D Patterns vs 2D Sketch Patterns video Fusion>

If the file becomes sluggish and hangs while computing, adjust the pattern to have fewer details. Try to pattern features instead of bodies, and keep patterned geometry lightweight until the final design. Pattern the simplest feature you can since complex patterned geometry can slow Fusion down. Use [user parameters](basic-user-parameters-fusion-360.md) for pattern spacing and item count when you anticipate iterating on your design or having changes in the future. Use suppression in the pattern feature instead of deleting unneeded pattern instances when you need irregularly shaped patterns.

## Pattern Example Videos

<div class="video-grid">

<div class="video-card">

### Rectangular Pattern Tool

<div class="iframe-16-9-container"><iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/Y0nYNZvL0EA?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### Circular Pattern Tool

<div class="iframe-16-9-container"><iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/As3TVfDPu4g?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### Pattern Along a Path Tool

<div class="iframe-16-9-container"><iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/9xit7JRPQ0A?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### Cut Out Shapes in a Pattern Along a Path

<div class="iframe-16-9-container"><iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/do4VSfm782Y?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

</div>
