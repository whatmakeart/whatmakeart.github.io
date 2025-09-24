---
title: 05.02 Generated 3D Model from 2D Image 3D Print Assignment
date: 2025-09-24T12:00:00
lastmod: 2025-09-23T20:43:00
---

## Assignment Deliverables

1. 2D Image from the Public Domain
   - Label file YYYY-MM-DD Lastname Firstname 2D Image (`.png`, `.jpg`)
2. Generated 3D Model File from 2D Image
   - Label file YYYY-MM-DD Lastname Firstname Generated Model (`.glb`, `.obj`, `.3mf`, `.stl`)
3. 3D Print of the Generated Model

## Overview

Use a 2D to 3D Model generator to make a 3D model from a 2D public domain image. Make a 3D Print of this generated model as a method of [reproducibility](../01-mold-making/01-01-reproducibility-in-art.md). Once the model is 3D printed it can be printed again, and again, and again. Multiples can be printed simultaneously.

### Process

1. Choose a 2D image file from the [Public Domain](../../../../copyright/public-domain.md) or an image of your own creation.
2. Isolate the subject from the background and remove any unnecessary information.
3. Add missing parts of the subject that may have been hidden by other objects or not included in the original image.
4. Transform the image into a 3D mesh with Sparc3D. [Turn 2D Image into High-Res 3D MEsh with Sparc3D](https://youtu.be/1auPRUakffQ)
5. Download the `GLB` mesh file.
6. Import the `.glb` into Blender. [How to Import a GLB into Blender](https://youtu.be/V1q5w6onuCE)
7. Reduce the number of triangles in the mesh file to under 1 million. [How to Reduce Triangles in Blender](https://youtu.be/xkMdZJDfE3o)
8. Clean up the mesh as needed to remove unwanted parts or add additional parts.
9. Install the Blender 3D Print Toolbox. [How to Install 3D Print Toolbox Blender Addon](https://youtu.be/_E-b6CENHms)
10. Ensure that the mesh is _manifold_ or watertight.
11. Export an `STL` file for 3D printing.
12. Import the `STL` file into Bambu Studio.
13. Size the model appropriately, add supports, slice the model.
14. Print the model on the 3D printers in Fab Studios.

### Resources

- [Sparc3D Project Page](https://lizhihao6.github.io/Sparc3D/)
- [From 2D to High-Res 3D with Sparc3D](https://youtu.be/1auPRUakffQ)
- [How to Import a GLB into Blender](https://youtu.be/V1q5w6onuCE)
- [Triangle Statistics in Blender](https://youtu.be/hR83_OUozhY)
- [Blender 3D Printing: Reduce Triangles](https://youtu.be/xkMdZJDfE3o)
- [Install 3D Print Toolbox Blender Addon](https://youtu.be/_E-b6CENHms)

<div class="video-grid">

<div class="video-card">

#### From 2D to High-Res 3D with Sparc3D

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/1auPRUakffQ?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

#### How to Import a GLB into Blender

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/V1q5w6onuCE?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

#### Triangle Statistics in Blender

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/hR83_OUozhY?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

#### Blender 3D Printing: Reduce Triangles

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/xkMdZJDfE3o?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

#### Install 3D Print Toolbox Blender Addon

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/_E-b6CENHms?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

</div>

## Grading Rubric

<div class="responsive-table-markdown">

| Assessment                   | Weight    |
| ---------------------------- | --------- |
| 2D Source Image uploaded     | 25 points |
| Generated 3D Model Uploaded  | 25 points |
| 3D Print of Generated Model  | 25 points |
| File Management and Labeling | 25 points |

</div>
