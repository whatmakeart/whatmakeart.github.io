---
title: 05.02 Generated 3D Model from 2D Image 3D Print Assignment
date: 2025-09-24T12:00:00
lastmod: 2025-09-24T11:55:47
---

## Assignment Deliverables

1. 2D Image from the Public Domain
   - Label file YYYY-MM-DD Lastname Firstname 2D Image (`.png`, `.jpg`)
2. Generated 3D Model File from 2D Image
   - Label file YYYY-MM-DD Lastname Firstname Generated Model (`.glb`, `.obj`, `.3mf`, `.stl`)
3. 3D Print of the Generated Model

## Overview

Use the [Sparc3D](https://lizhihao6.github.io/Sparc3D/) 2D image to 3D M=model generator to make a 3D model from a 2D public domain image. Make a 3D Print of this generated model as a method of [reproducibility](../01-mold-making/01-01-reproducibility-in-art.md). Once the model is 3D printed it can be printed again, and again, and again. Multiples can be printed simultaneously.

### Process

1. Choose a 2D image file from the [Public Domain](../../../../copyright/public-domain.md) or an image of your own creation.
2. Isolate the subject from the background and remove any unnecessary information.
3. Add missing parts of the subject that may have been hidden by other objects or not included in the original image.
4. Transform the image into a 3D mesh with Sparc3D. Download the `GLB` mesh file. [How to Turn 2D Image into High-Res 3D Mesh with Sparc3D](https://youtu.be/1auPRUakffQ)
5. Import the `GLB` into Blender. [How to Import a GLB into Blender](https://youtu.be/V1q5w6onuCE)
6. Check number of triangles in 3D model. [How to View Triangle Statistics in Blender](https://youtu.be/hR83_OUozhY)
7. Reduce the number of triangles in the mesh file to under 1 million. [How to Reduce Triangles in Blender](https://youtu.be/xkMdZJDfE3o)
8. Clean up the mesh as needed to remove unwanted parts or add additional parts.
9. Install the Blender 3D Print Toolbox. [How to Install 3D Print Toolbox Blender Addon](https://youtu.be/_E-b6CENHms)
10. Ensure that the mesh is _manifold_ or watertight. [How to Make 3D Model Manifold](https://youtu.be/beAfWDEdjCc)
11. Export an `STL` file for 3D printing.
12. Import the `STL` file into Bambu Studio. [How to Import STL into Bambu Studio](https://youtu.be/oy8qJwpbzyQ)
13. Size the model appropriately with the scale tool. Enable add supports for overhangs. Slice the model and view the total amount of filament and estimated print time. _Prints consuming over 250g of filament cost an additional $0.50 per 25g._ [Fab Studios Filament Store](https://my.cia.edu/ICS/Departments/CIA_Store/Fabrication_Studios/Rapid_Prototyping/)
14. Print the model on the 3D printers in Fab Studios. _Note: Prints (or series of prints) under 250g are free and do not require purchase.
    Prints (or series of prints) that exceed 250g must be payed for._

### Resources

#### External Resources

- [Sparc3D Project Page](https://lizhihao6.github.io/Sparc3D/)
- [Hitem3D](https://hitem3d.ai/) - As of writing, offeres 2 free model generations with textures without waiting. Requires email signup.
- [Bambu Studio Quick Start Wiki](https://wiki.bambulab.com/en/software/bambu-studio/studio-quick-start)

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

<div class="video-card">

#### Import STL into Bambu Studio

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/oy8qJwpbzyQ?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

</div>

## Grading Rubric

<div class="responsive-table-markdown">

| Assessment                   | Weight    |
| ---------------------------- | --------- |
| 2D Source Image uploaded     | 15 points |
| Generated 3D Model Uploaded  | 30 points |
| 3D Print of Generated Model  | 30 points |
| File Management and Labeling | 25 points |

</div>
