---
title: Export Laser Cut Toolpaths to DXF in Fusion 360
date: 2023-06-14T12:58:56
lastmod: 2026-02-16T06:06:31-04:00
tags:
  - Fusion-360
  - laser-cutting
---

## Create Toolpaths in the Manufacture Workspace

Follow the steps to create a new setup in Fusion. This is done in the Manufacture Workspace. You need to create the laser cutter tool first. It is important to create a new "Cutting" setup so you can make a new 2D Profile to cut out.

[![Laser Cut Stand Toolpaths](../../3d-modeling/fusion-360/attachments/2021-Laser-Cut-Stand-CAM-Toolpaths.jpg)](../../3d-modeling/fusion-360/attachments/2021-Laser-Cut-Stand-CAM-Toolpaths.jpg)

## Save your Tool Paths as a DXF via Post Process

Select the tool path from your setup and then click on post process. Use the DXF post process that you installed earlier to export a DXF file. Make sure to add the .dxf file extension. [How to Install DXF Post Processor in Autodesk Fusion](../../3d-modeling/fusion-360/install-dxf-post-processor-fusion-360.md)

[![Laser Cut Stand Post Process](../../3d-modeling/fusion-360/attachments/2021-Laser-Cut-Stand-Post-Process.jpg)](../../3d-modeling/fusion-360/attachments/2021-Laser-Cut-Stand-Post-Process.jpg)

Example of each part of the stand as a separate component at the top level assembly in Fusion 360.

## Export Tool Paths

After you modified the ply thickness, re-generate and re-export your tool paths with the DXF post processor. In the manufacture workspace, right click on the process and click generate. Then click on post process to export a new DXF. Make sure you label the dxf exports so you know which one is the most recent.

If you have a complicated model with etching or interior contour cuts, you can make these as different profile cuts in the Fusion manufacture workspace. Then you can check the box to export each operation as a different layer. This can be helpful to select the paths in Illustrator and make them different colors. You can order the cuts on the laser cutter by dragging and dropping in the Epilog print menu. It is a good idea to do all etching and interior cutting before cutting the outside contours so you pieces do not move.

[Export Laser Cut Toolpaths with Multiple Thickness to DXF in Fusion](export-laser-cut-toolpaths-mutiple-thickness-to-dxf-fusion.md)

<div class="video-grid">

<div class="video-card">

### Export DXF for Multiple Thickness Parts

<div class="iframe-16-9-container"><iframe class="youTubeIframe" title="YouTube video player" src="https://www.youtube.com/embed/qD1ih2MjHAQ?rel=0" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

</div>

<div class="video-card">

### Export DXF Toolpath with Kerf Compensation

<div class="iframe-16-9-container"><iframe class="youTubeIframe" title="YouTube video player" src="https://www.youtube.com/embed/6JFHMV7A9TU?rel=0" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

</div>
</div>
