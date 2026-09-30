---
title: 05.04 Custom Laser Cut Display Stand Modeling Assignment
date: 2026-09-24T09:00:00-04:00
lastmod: 2026-09-29T20:20:02-04:00
canvas_mobile_fallback: true
---

## Assignment Deliverables

1. Fusion file of updated laser cut display stand design
   - Label file YYYY-MM-DD Lastname Firstname Laser Cut Display Stand (`.f3d`)
2. Render image from Fusion of display stand design
   - Label file YYYY-MM-DD Lastname Firstname Laser Cut Display Stand Render (`.png`, `.jpg`)

_Note: You do not need to laser cut the new design. We will cut the new designs in class._

## Assignment Overview

### Process

1. Create Body Extension 3D Print model in [Blender](../../../../3d-modeling/blender/blender.md) or in Fusion or both.
2. Export an `obj` of the mesh from Blender.
3. Import the `obj` Body Extension Mesh into [Fusion](../../../../3d-modeling/fusion-360/fusion-360.md). Set the imported mesh units as Meters if importing from Blender or Centimeters if importing from [Maya](../../../../3d-modeling/maya/maya.md)
4. Center the mesh near the origin in Fusion and rotate it upright and facing front.
5. Create a new component at the top level.
   - [How to Create New Component in Fusion](../../../../3d-modeling/fusion-360/create-new-component-fusion.md)
6. Create a construction plane in the center of the body extension.
7. Use the intersect project feature in a sketch or the mesh section sketch feature to mark where the mesh touches the sketch.
   - [Mesh Section Sketch Fusion](../../../../3d-modeling/fusion-360/mesh-section-sketch-fusion.md)
8. Use these intersection points to begin to form the flat laser cut parts at the correct size for the display of your 3D print.
9. Create a new component for each part of the laser cut stand.
   - [How to Create New Component in Fusion](../../../../3d-modeling/fusion-360/create-new-component-fusion.md)
10. Use interlocking [Laser Cut Joints](../../../../digital-fabrication/laser-cutting/laser-cut-joints.md) and or fasteners to hold the stand together. You can all design 3d printed connectors to join the planar laser cut parts together.
11. Apply appearances to the components in the model.
    - [Change Appearances Fusion](../../../../3d-modeling/fusion-360/change-appearances-fusion.md)
12. Make a render of the the design. (Set the render aspect ratio to anything but _viewport_. 1:1, 3:2, 2:3, 16:9, 9:16)
    - [Set Render Aspect Ratio Fusion](../../../../3d-modeling/fusion-360/render-aspect-ratio-fusion.md)
    - [Fusion Basic Rendering](../../../../3d-modeling/fusion-360/basic-rendering-fusion-360.md)
13. Export a `.f3d` Fusion file.
    - [Export .f3d File from Fusion](../../../../3d-modeling/fusion-360/export-f3d-file-fusion-360.md)
14. Upload to Canvas.

## Assignment Resources

### Modeling for Laser Cutting in Fusion

- [3D Modeling for Laser Cutting in Fusion](../../../../digital-fabrication/laser-cutting/3d-modeling-for-laser-cutting-fusion-360.md)
- [Laser Cut 3D Model Revisions Autodesk Fusion](../../../../digital-fabrication/laser-cutting/laser-cut-3d-model-revisions-autodesk-fusion.md)

### Laser Cutting File Preparation in Fusion

<div class="video-grid">

<div class="video-card">

#### [Mesh Section Sketch Fusion](../../../../3d-modeling/fusion-360/mesh-section-sketch-fusion.md)

<div class="iframe-16-9-container"><iframe class="youTubeIframe" title="YouTube video player" src="https://www.youtube.com/embed/oJXvHp0Zq6w?rel=0" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

#### [Export .f3d File from Fusion](../../../../3d-modeling/fusion-360/export-f3d-file-fusion-360.md)

<div class="iframe-16-9-container"><iframe class="youTubeIframe" title="YouTube video player" src="https://www.youtube.com/embed/8JkuSyMHgZY?rel=0" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

#### [Install DXF Post Processor in Fusion](../../../../3d-modeling/fusion-360/install-dxf-post-processor-fusion-360.md)

<div class="iframe-16-9-container"><iframe class="youTubeIframe" title="YouTube video player" src="https://www.youtube.com/embed/P833NlDhbIs?rel=0" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

#### [Create Laser Cutting Tool in Fusion](../../../../digital-fabrication/laser-cutting/fusion-360-create-laser-cutting-tool.md)

<div class="iframe-16-9-container"><iframe class="youTubeIframe" title="YouTube video player" src="https://www.youtube.com/embed/qEuV48SeFSQ?rel=0" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
</div>

<div class="video-card">

#### [Lay Parts Flat for Laser Cutting in Fusion](../../../../digital-fabrication/laser-cutting/lay-parts-flat-for-laser-cutting-fusion-360.md)

<div class="iframe-16-9-container"><iframe class="youTubeIframe" title="YouTube video player" src="https://www.youtube.com/embed/ix77FYfocHg?rel=0" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

#### [Export Laser Cut Toolpaths to DXF in Fusion](../../../../digital-fabrication/laser-cutting/export-laser-cut-toolpaths-to-dxf-in-autodesk-fusion.md)

<div class="iframe-16-9-container"><iframe class="youTubeIframe" title="YouTube video player" src="https://www.youtube.com/embed/o5QOq5gu24w?rel=0" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

</div>

</div>

## Grading Rubric

<div class="responsive-table-markdown">

| Objective                                     | Points |
| --------------------------------------------- | ------ |
| Mesh Inserted into Fusion                     | 20     |
| Intersect Project Sketch Used                 | 20     |
| Revisions to prototype stand modeled in class | 30     |
| Render Image Uploaded                         | 20     |
| Render Image Aspect Ration 1:1 or 2:3 or 16:9 | 10     |
| Fusion `.f3d` file uploaded                   | 10     |
| File Management and Labeling                  | 10     |

</div>
