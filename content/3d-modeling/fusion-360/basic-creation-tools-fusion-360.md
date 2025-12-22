---
title: Fusion 360 Basic Creation Tools
date: 2023-06-13T14:13:56
lastmod: 2025-12-22T07:16:23
tags:
  - Fusion-360
---

## Polygon Primitives and Shapes

[Fusion 360](fusion-360.md) allows you to create fast [3D polygon primitives](./primitive-3d-forms-fusion-360.md) of specific sizes easily. You can create a a box, cylinder, sphere, torus, coil, or a pipe. To create any of these forms usually involves an initial click to define the starting surface or point, then a drag to set the first dimensions, a manipulation of parameters and then a confirmation of your choices. If you hover over most tools with your cursor in Fusion 360 it provides as brief description of what the tool does and how to use it.

When creating a new shape it defaults to a new body but you can also create a new component. Often it is helpful to create a new component to represent a part of your model or assembly as a first step, known as [Rule #1](./rule-number-one-fusion-360.md) in Fusion 360. If there are existing shapes in the model when you create a new form, then there are options for joining, cutting, intersect, as well as new body and new component.

### Creating New Forms

- **Join** - Adds the new body onto existing geometry to make a single more complex body.
- **Cut** - Uses the new body as a cutting tool to remove any place that it overlaps an existing body. The part to be cut is shown in red.
- **Intersect** - Keeps the geometry that exists in the new body and an existing body. Only works if the new body is overlapping an existing body. The part that will be kept is shown in yellow.
- **New Body** - Creates a new body even if that body is overlapping existing bodies in the design.
- **New Component** - Creates a new component with the newly created body as part of that component.
- [Join, Cut, Intersect Video Demo](https://youtu.be/iLr9d8Gp7Ls)

Without any additional knowledge of Fusion 360, relatively complex and detailed forms can be made through the combination of new primitive shapes and the use of joining, cutting and intersecting. It is not wrong to 3D model using only these tools, but once the idea goes beyond simple designs there are more efficient, easier, and better ways to create a 3D model.

## Basic Creation Tools

Additional creation tools help make more complex forms and designs. The basic creation tools include Extrude, Revolve, Sweep, Loft, Rib, Web, Emboss, and Mirror. These creation tools are found in many different 3D modeling programs. It is important to understand the underlying concept of these operations for form creation so you can model in Fusion 360 as well as other software as needed in the future. In different software, sometimes they may have different names or different controls but the method of form creation is the name.

- **Extrude** - Pulls a flat face, plane or curved surface in or out in a uniform way to create new geometry. It can be used to join, cut, or intersect. The extrude tool is a bedrock function of most 3D modeling software, including Fusion 360. It is so fundamental to 3D modeling that it has a space on the top menu bar in Fusion 360 and is the only creation tool that automatically shows its keyboard shortcut of (E).
- **Revolve** - Spins a sketch profile or a face around a central axis to create a radial form. It can spin a full 360 degrees or only a partial amount. [Revolve Demo Video](https://youtu.be/VzossdZbGtk)
- **Sweep** - Unlike revolve, the sweep tool takes a profile sketch and "sweeps" or pulls it along another path. This can be a straight path or a curved path. Note that the path used for the sweep cannot be a "closed" path.
- **Loft** - Loft connects two or more sketch planes together in a smooth way. These can be lined up along a curve to create transitions. A guide rail can be used to further customize how the transitions from shape to shape occur. [Loft Demo video](https://youtu.be/OTBZuSGG6bc)
- **Rib** - Creates structural supports of a specified thickness from sketch lines that connect to the nearest faces in the object.
- **Web** - Creates internal structural supports from sketch lines that connect to the nearest faces in the object.
- **Emboss** - Pulls out a sketch profile from a surface an even amount to create a raised surface. Can also be used to cut.
- **Mirror** - The mirror tool can mirror geometry across a mid-plane. This is useful for creating symmetrical objects so you only have to model one side. Then if changes need to be made, only one side needs to be modified and the mirrored side updates automatically. [Mirror Demo Video](https://youtu.be/vwCUjtsghdI)

## Additional Creation Tools

Fusion 360 offers many more tools including [pattern making tools](./basic-pattern-tools-fusion-360.md), thickening tools, boundary fill tools, tools for creating printed circuit boards, and many more.

## Fusion 360 Basic Creation Tools Example Videos

<div class="tutorial-video-grid">

<div class="video-card">

### 3D Primitive Forms

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/4XFlH1HGziM?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="video-card">

### Revolve Tool

<div class="iframe-16-9-container"><iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/VzossdZbGtk?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### Loft Tool with Rails

<div class="iframe-16-9-container"><iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/OTBZuSGG6bc?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### Mirror Tool

<div class="iframe-16-9-container"><iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/vwCUjtsghdI?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### Join, Cut, Intersect

<div class="iframe-16-9-container"><iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/iLr9d8Gp7Ls?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

</div>
