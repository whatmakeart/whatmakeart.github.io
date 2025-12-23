---
title: Draw a Floor Plan Blender
date: 2024-09-03T20:44:53
lastmod: 2025-12-23T10:12:35-04:00
---

After an image of a floor plan is imported into Blender and then [adjusted for the correct scale](scale-floor-plan-blender.md), then 3D model geometry needs to be created. It is easiest to draw the outline of the floor plan while looking down from the top view. A simple floor plan can be drawn with straight edges.

## 3D Model from 2D Floor Plan Workflow in Blender

1. Adjust your view port so you are looking down on the imported floor plan.
2. Press Shift > A to create a new mesh edge.
3. Press Tab to switch to edit mode.
4. By default, edit mode should be set to editing points or vertices. If it is not, then click the "dot" icon at the top left or press 1.
5. Select one of the points on the first edge. Press G, then press Shift+Z to constrain the motion to the ground plane.
6. Move the point to a corner of a feature on the floor plan. Repeat fro the other point.
7. With one of the points selected, press E to extrude another edge. Move this edge to the next feature corner on the floor plan.
8. Repeat this process until you have gone all the way around the perimeter of the floor plan.
9. This created polygon floor can be extruded up.

[Link to basic 3D Model of Example Gallery](attachments/2023-Gallery-Model.blend)

<figure>

[![Basic Gallery Model for use in Blender](attachments/2023-basic-blender-gallery-model-image.png)](attachments/2023-Gallery-Model.blend)

<figcaption>

Example of a basic prebuilt model of the gallery ready for ideation and visualization. [Link to Blender file](attachments/2023-Gallery-Model.blend)

</figcaption>

</figure>

## Blender Modeling Resources

- [Blender 3D Modeling Basics](3d-modeling-basics-blender.md)
- [Scale a Floor Plan in Blender](scale-floor-plan-blender.md)
