---
title: 08.09 Polygon Modeling Rendering Exercise Assignment
date: 2026-03-04T09:00:00-04:00
lastmod: 2026-03-03T20:28:50-04:00
---

## Assignment Deliverables

1. Render image of an object modeled in [Blender](../../../../3d-modeling/blender/blender.md) or [Maya](../../../../3d-modeling/maya/maya.md)
   - Label file YYYYMMDD Lastname Firstname Polygon Modeling Render Image (`.png`, `.jpg`)
2. Upload Blender file **or** a Maya project saved as a Maya Scene Archive
   - Label file YYYY-MM-DD Lastname Firstname Polygon Modeling Render Image
     (.blend and a Maya scene archive .zip)

## Assignment Overview

Rendering in Blender and Maya take a bit more setup than rendering in Fusion 360. The extra steps required ultimately allow for more customization of the renders. Once a scene is setup with lights and objects, then everything can be animated.

This exercise introduces using lights and physical based material shaders in Blender in Maya. To render an image, it must have lights setup in the correct locations to light the object or scene. Varying the intensity and distance of the lights will change the look of the render dramatically. Experiment and render multiple versions of the scene that you create.

### Render Image Requirements

- Contain the Basic Block Model from the example. You can add more to the image or the model but there must be one modeled block.
- Minimum 1920 x 1080 pixel render image
- Minimum of 2 lights (can have more lights)
- Minimum of 2 objects, model and background (can have many more objects)
- Apply materials and/or shaders to objects and background

### Model File Export Requirements

File and asset management is important in digital content creation. Blender and Maya handle file in similar but different ways.

#### Blender Asset Management

For small scenes it is efficient to "pack" all assets such as image textures and model files inside a single `.blend` file. While convenient for sending the complete model to another computer, it can create unnecessarily large file sizes on bigger projects.

- When sharing a Blender scene, make sure to [pack all external assets](https://youtu.be/x6H6HFBLRlUl) File > External Data > Automatically Pack Resources.

#### Maya Asset Management

Maya projects are set up with a folder structure in the file system of the computer OS. If the location or the path to the files changes then Maya will not be able to locate them as the image textures are not saved in the Maya project file. This keeps the Maya file small and allows for collaboration with teams, but requires attention to detail to make sure assets stay organized.

- When sharing a Maya project, make sure to export [Maya Scene Archive](https://youtu.be/gic-kMWKjNI) of the scene with all of the texture files.

<div class="video-grid">

<div class="video-card">

### Blender Basic Block Model

<div class="iframe-16-9-container">
<iframe class="youTubeIframe"  width="560" height="315" src="https://www.youtube.com/embed/L5e7ysUUI7A?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### Blender Basic Render

<div class="iframe-16-9-container">
<iframe class="youTubeIframe"  width="560" height="315" src="https://www.youtube.com/embed/Qw8jl8mKEsY?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### Maya Basic Block Model

<div class="iframe-16-9-container">
<iframe class="youTubeIframe"  width="560" height="315" src="https://www.youtube.com/embed/lLItO9mBwxM?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### Maya Basic Render

<div class="iframe-16-9-container">
<iframe class="youTubeIframe"  width="560" height="315" src="https://www.youtube.com/embed/9RHh4OSPKQQ?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

</div>

## Grading Rubric

<div class="responsive-table-markdown">

| Assessment                     | Weight    |
| ------------------------------ | --------- |
| 1920 x 1080 pixel render image | 30 points |
| Minimum of 2 lights            | 20 points |
| Minimum of 2 objects           | 20 points |
| Apply Materials                | 20 points |
| File Management and Labeling   | 10 points |

</div>
