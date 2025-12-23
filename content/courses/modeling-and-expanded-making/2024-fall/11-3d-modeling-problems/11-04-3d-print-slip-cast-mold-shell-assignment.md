---
title: 11.04 3D Print Slip Cast Mold Shell Assignment
date: 2024-10-30T09:00:00
lastmod: 2025-12-23T10:12:35-04:00
---

## Assignment Deliverables

1. Upload Blender file with all parts of mold shell (.blend)
   - Label file YYYYMMDD Lastname Firstname Mold Shell.blend
2. 3D Print of at least 1 mold shell piece (physical object)

## Assignment Overview

Clean up and fix any remaining problems with your 3D print slip cast mold 3D model files. Then 3D print the mold shell pieces in preparation for pouring plaster into the shells to create slip cast molds.

## Process

1. Fix any remaining [undercuts](../10-3d-printed-molds/10-03-remove-undercuts-blender.md) in your model if needed.
2. Create a mesh to be the form of your mold. This can be a cube but can also be a more contoured shape related to your model.
3. Add parting lines to separate mold into multiple parts. You can [add parting lines in Blender](../10-3d-printed-molds//10-04-add-mold-parting-lines-blender.md)
4. [Solidify the parting lines](11-03-fix-non-manifold-edges-on-solidify-modifier-examples.md) in preparation for separating the mold block.
   - Make sure solidified parting line is completely manifold and all normals are facing outside.
   - Double check that the parting lines are not creating new undercuts that might prevent the mold pieces from separating.
5. First subtract the head from the mold block with a difference Boolean.
   - Use the `Boolean Modifier` in Blender.
6. After subtracting the head from the block, then subtract the parting line from the mold block with a difference Boolean.
7. Separate the Mold Parts.
8. [Hollow out the mold](https://youtu.be/jZhWRZBb05c?&t=991) to make a negative space for the plaster to fill. Thickness of the walls should be ~1.6 mm - 2.0mm or a multiple of the diameter of the 3D Printer nozzle, often 0.4mm.
9. Save your 3D modeling file from Blender.
10. Export each part of the mold. Label the parts.
11. 3D Print at least 1 mold shell. Print all shells if time allows.

## Assignment Resources

### Creating Manifold Solid Parting Lines Fastest and Easiest Way

[Fastest Way to Solidify Parting Lines](https://youtu.be/0GSKckejrkw)

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/0GSKckejrkw?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Thanks to [@WWS3D's](https://www.youtube.com/@WWS3D) comment on a video using the Boolean Modify, to make manifold parting lines, there is now the [fastest and easiest way](https://youtu.be/0GSKckejrkw) to make thin parting lines for 3D printed slip cast molds in Blender. Per the comment suggestion, this video shows you how to use the complex mode of the solidify modifier to create perfect parting lines every time. It is important to check for and fix flipped normals and non-flat faces, ensuring your models are ready for boolean operations.

### Manual Methods to Create Solid Parting Lines

Use the above method to make manifold and solidified parting lines. These videos show previous workflows and techniques that may be useful if the above recommended method does not work on a particular model.

<div class="video-grid">

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/HZAVFpYvAoo?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/OeGvo_zpz74?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/vnZPsf6FuMQ?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/v4WXZjwB9tY?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

</div>

### Separate and Shell Out Mold Parts

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/jZhWRZBb05c?start=991" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
