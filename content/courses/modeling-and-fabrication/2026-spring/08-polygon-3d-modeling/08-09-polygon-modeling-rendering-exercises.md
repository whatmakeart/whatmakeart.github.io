---
title: 08.09 Polygon Modeling Rendering Exercise Assignment
date: 2026-03-04T09:00:00-04:00
lastmod: 2026-03-04T08:42:46-04:00
---

## Assignment Deliverables

1. Render image of example block object modeled in Blender
   - Label file YYYYMMDD Lastname Firstname Polygon Modeling Blender Render Image (`.png`, `.jpg`)
2. Upload Blender file with external assets packed
   - Label file YYYY-MM-DD Lastname Firstname Polygon Modeling Exercise (`.blend`)
3. Render image of example block object modeled in Maya
   - Label file YYYYMMDD Lastname Firstname Polygon Modeling Maya Render Image (`.png`, `.jpg`)
4. Upload Maya project file saved as a Maya Scene Archive
   - Label file YYYY-MM-DD Lastname Firstname Polygon Modeling Exercise (`.zip`)

## Assignment Overview

Rendering in Blender and Maya take a bit more setup than rendering in Fusion. The extra steps required ultimately allow for more customization of the renders. Once a scene is setup with lights and objects, then everything can be animated.

This exercise introduces using lights and physical based material shaders in [Blender](../../../../3d-modeling/blender/blender.md) and [Maya](../../../../3d-modeling/maya/maya.md). To render an image, it must have lights setup in the correct locations to light the object or scene. Varying the intensity and distance of the lights will change the look of the render dramatically. Experiment and render multiple versions of the scene that you create.

### Render Image Requirements

- Contain the Basic Block Model from the example. You can add more to the image or the model but there must be one modeled block.
- Minimum 1920 x 1080 pixel render image
- Minimum of 2 lights (can have more lights)
- Minimum of 2 objects, model and ground plane (can have many more objects)
- Apply materials and/or shaders to objects and background

### Model File Export Requirements

File and asset management is important in digital content creation. Blender and Maya handle file in similar but different ways.

#### Blender Asset Management

For small scenes it is efficient to "pack" all assets such as image textures and model files inside a single `.blend` file. While convenient for sending the complete model to another computer, it can create unnecessarily large file sizes on bigger projects.

- When sharing a Blender scene, make sure to [pack all external assets](https://youtu.be/x6H6HFBLRlUl) File > External Data > Automatically Pack Resources.

#### Maya Asset Management

Maya projects are set up with a folder structure in the file system of the computer OS. If the location or the path to the files changes then Maya will not be able to locate them as the image textures are not saved in the Maya project file. This keeps the Maya file small and allows for collaboration with teams, but requires attention to detail to make sure assets stay organized.

- When sharing a Maya project, make sure to export [Maya Scene Archive](https://youtu.be/gic-kMWKjNI) of the scene with all of the texture files.

## Assignment Resources

### Maya

- [Add Materials - Maya](../../../../3d-modeling/maya/add-materials-maya.md)
- [Maya Basic Render](../../../../3d-modeling/maya/basic-render-maya.md)
- [Archive a Maya Scene](../../../../3d-modeling/maya/archive-maya-scene.md)
- [Maya Infinite Photo Backdrop](../../../../3d-modeling/maya/infinite-photo-backdrop-maya.md)
- [Maya Three Point Lighting Tutorial](../../../../3d-modeling/maya/three-point-lighting-maya-tutorial.md)

### Blender

- [Add Materials - Blender](../../../../3d-modeling/blender/add-materials-blender.md)
- [Rendering Basics - Blender](../../../../3d-modeling/blender/rendering-basics-blender.md)
- [Pack External Resources in Blender](../../../../3d-modeling/blender/pack-external-resources-blender.md)
- [Infinite Background - Blender](../../../../3d-modeling/blender/infinite-background-blender.md)
- [3 Point Lighting Addon - Blender](../../../../3d-modeling/blender/3-point-lighting-add-on-blender.md)

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

| Assessment                             | Weight    |
| -------------------------------------- | --------- |
| 1920 x 1080 pixel render image Maya    | 20 points |
| Minimum of 2 lights Maya               | 20 points |
| Minimum of 2 objects Maya              | 20 points |
| Non Default Materials Maya             | 15 points |
| 1920 x 1080 pixel render image Blender | 30 points |
| Minimum of 2 lights Blender            | 20 points |
| Minimum of 2 objects Blender           | 20 points |
| Non Default Materials Blender          | 15 points |
| Maya Archive Scene File Uploaded       | 20 points |
| .blend file uploaded                   | 20 points |
| File Management and Labeling           | 10 points |

</div>
