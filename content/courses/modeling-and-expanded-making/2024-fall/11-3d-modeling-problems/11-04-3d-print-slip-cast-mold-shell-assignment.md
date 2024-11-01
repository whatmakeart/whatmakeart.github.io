---
title: 11.04 3D Print Slip Cast Mold Shell Assignment
date: 2024-10-30T09:00:00
lastmod: 2024-11-01T09:07:37
---

## Assignment Deliverables

1. Upload Blender file with all parts of mold shell (.blend)
   - Label file YYYYMMDD Lastname Firstname Mold Shell.blend
2. 3D Print of at least 1 mold shell piece (physical object)

## Assignment Overview

Clean up and fix any remaining problems with your 3D print slip cast mold 3D model files. Then 3D print the mold shell pieces in preparation for pouring plaster into the shells to create slip cast molds.

## Process

1. Fix any remaining [undercuts](../10-3d-printed-molds/10-03-remove-undercuts-blender.md) in your model if needed.
2. Add any needed parting lines.
3. [Solidify the parting lines](./11-03-fix-non-manifold-edges-on-solidify-modifier-examples.md) in preparation for separating the mold block.
   - Make sure solidified parting line is completely manifold and all normals are facing outside.
   - Double check that the parting lines are not creating new undercuts that might prevent the mold pieces from separating.
4. Subtract the head from the mold block with a difference Boolean.
5. Subtract the parting line from the mold block with a difference Boolean.
6. Separate the Mold Parts.
7. [Shell out the mold parts](https://youtu.be/jZhWRZBb05c?&t=991) and solidify the sides to the outside of the shells.
8. 3D Print at least 1 mold shell. Print all shells if time allows.

## Assignment Resources

### Creating Manifold Solid Parting Lines Easy Way

The video below shows a relatively streamlined process to fix problems with parting lines and solidiby them so they are completely manifold and have all normals facing to the outside. It shows 3 different example parting lines from class.

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/HZAVFpYvAoo?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

### Manual Method to Create Solid Parting Lines

<div class="video-grid">

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/OeGvo_zpz74?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/vnZPsf6FuMQ?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/v4WXZjwB9tY?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</div>

### Separate and Shell Out Mold Parts

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/jZhWRZBb05c?start=991" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
