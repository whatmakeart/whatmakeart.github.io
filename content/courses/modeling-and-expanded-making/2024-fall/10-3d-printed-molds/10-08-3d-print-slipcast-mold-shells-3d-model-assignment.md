---
title: 10.08 3D Print Slipcast Mold Shells 3D Model Assignment
date: 2024-10-23T09:00:00
lastmod: 2024-10-27T12:11:45
---

## Assignment Deliverables

1. 3D model file of prepared mold pieces, divided and shelled (.blend, .f3d, .ma, .mb)
   - Label file YYYYMMDD Lastname Firstname prepared mold model file
2. Exported OBJs or STLs of prepared mold pieces ready for 3D Printing (.obj, .stl, 3mf)
   - Label files YYYYMMDD Lastname Firstname mold piece for 3D printing

## Assignment Overview

Use 3D modeling tools to identify undercuts, simplify undercuts, create parting lines, and ultimately make hollow forms for 3D printing to cast plaster inside to make a multipart slip cast mold.

## Process

1. [Install 3D Print Toolkit](../../../../3d-modeling/blender/3d-print-toolbox-addon-blender.md) Blender Addon to assist with the detection and removal of undercuts.
2. Add parting lines to separate mold into multiple parts. You can [add parting lines in Blender](./10-04-add-mold-parting-lines-blender.md) or [add parting lines in Fusion 360](./10-06-add-mold-parting-lines-fusion-360.md).
3. Separate the parts of the mold along the parting lines.
   - Use the `Boolean Modifier` in Blender
   - Use `Modify > Combine` in Fusion 360
4. Hollow out the mold to make a negative space for the plaster to fill. Thickness of the walls should be ~1.6 mm - 2.0mm or a multiple of the diameter of the 3D Printer nozzle, often 0.4mm.
   - Use the `Solidify Modifier` in Blender. First remove the top and bottom of the mold piece to make a tube like structure, then solidify it.
   - Use `Modify > Shell` in Fusion 360. After shelling, use the `Extrude` tool to remove the bottom part of the mold to make it a hollow tube.
5. Save your 3D modeling file from Blender or Fusion 360.
6. Export each part of the mold. Label the parts.

## Assignment Resources

**Tutorial Videos for adding parting lines and removing undercuts in progress**

<div class="video-grid">

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/GHersJCQUVc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/9s7woWfZ84U?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/f_WTsl64QR8?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

</div>
