---
title: 02.07 Photo Matching Site Specific 3D Visualization Assignment
date: 2026-09-03T09:00:00-04:00
lastmod: 2026-09-05T10:07:13-04:00
canvas_mobile_fallback: true
---

## Assignment Deliverables

1. Rendered export of composite image of 3D model in outdoor or indoor location.
   - Label file YYYY-MM-DD Lastname Firstname 3D Composite Render (`.jpg`, `.png`)
2. Blender file with matched photo, 3d object, compositor nodes, with all resources packed
   - Label file YYYY-MM-DD Lastname Firstname 3D Composite (`.blend`)

_Note: You can upload a single `.zip` archive of all your files labeled inside the archive for easier submission to Canvas._

## Overview

This assignment is designed to help you develop skills using perspective matching in [Blender](../../../../3d-modeling/blender/blender.md) to create realistic visualizations of potential public art installations. You will learn how to photo match images for outdoor public spaces or indoor gallery environments using perspective matching tools and use your previous photogrammetry or 3D scanned 3D model as large-scale sculptures. The goal is to understand site context and how your sculptures interact with the potential environment. You may use any 3D model of your own creation as the sculpture representation.

## Instructions

### 1. Collect Site Photos

1. Choose potential sites for a public art installation:
   - A photo of an outdoor location where public art might be installed. This photo should be taken by you.
   - A photo of an indoor gallery or public indoor space (e.g., a museum lobby, a large hall, or a gallery space). This photo should be taken by you.
   - A screen shot from Google Street View to choose a location in a distant city or country for a potential public art installation.
2. Use Photoshop tools and generative fill to remove unwanted elements from the photos and correct levels and [white balance](../../../../software/adobe-photoshop/white-balance-quick-photoshop-tutorial.md) as needed. Do not change the resolution or crop the photo.
3. Keep a copy of the original photo without any modifications for perspective matching

### 2. Photo Perspective Match

#### Simple Camera Reversal Perspective Match

Simple Camera Reversal Addon allows for perspective matching of photos directly in Blender.

1. Install the Simple Camera Reversal Perspective Match Addon [Github Repository](https://github.com/Witty-Ming/Simple-Camera-Reversal)
2. Select the camera in Blender.
3. Add a background image to the camera.
4. Uses the Simple Camera Reversal Tool to Draw Perspective lines on the background image.

<div class="video-grid">
<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/q9U0xGSFKTI?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

[Simple Camera Reversal - Perspective Match Blender Addon](https://github.com/Witty-Ming/Simple-Camera-Reversal)

### Texture and Lighting

1. Apply the scene textures from your reference image onto simple 3D geometry that matches the scene (e.g., ground planes or building facades).
2. Create an a material using the site photo as its base color. This will allow your sculpture to reflect the colors and light from the environment.
3. Add a UV Project and simple Subdivision Surface Modifier to the place holder geometry.
4. Use the compositor in Blender to adjust lighting and shadow settings to match the scene's natural light conditions (e.g., sunlight for outdoor, gallery lighting for indoor). Pay attention to the size, shape, height, and falloff of the lights so they match the existing lights in the background photo.
5. Use HDRIs for the sky for outdoor images. You can [create an HDRI from a photo](https://youtu.be/Co9qokfI_Mc) in Adobe Substance 3D Stager.

### Rendering:

1. Render and composite an image for each site. Use Blender and/or Adobe Substance 3D Stager to render.
2. Use Photoshop and other image editing tools to further composite and touch up the renders. Adobe Substance 3D Stager can export a PSD file with multiple layers for straight forward composite post processing.
   - [Export Material, Object and Depth Masks from 3D Stager to Photoshop](https://youtu.be/V6QnXeIPQ28)

## Assignment Resources

### Notes

- Pay close attention to scale when placing your 3D models in the scene.
- Experiment with different lighting setups to see how they impact the interaction between your sculpture and its environment.
- Try using Blender's compositor to enhance the final render, adjusting color grading and exposure as needed.
- Blender units default to meters while Adobe Substance 3D Stager defaults to centimeters. For real world scale in Substance Stager [change the export scale in Blender](https://youtu.be/6bg3M0-8MvE) to 100 to export in centimeters.

### Guides

#### Blender OBJ Handling

- [Import OBJ in Blender](https://youtu.be/JG1msAX7PFo)
- [Fix Broken Texture Links in Blender](https://youtu.be/t5ayHdRapCw)

### Video Guides

<div class="video-grid">

<div class="video-card">

#### [Simple Camera Reversal Perspective Match Blender Addon](../../../../3d-modeling/blender/simple-camera-reversal-perspective-match-blender-addon.md)

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/q9U0xGSFKTI?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="video-card">

#### [HDRI Background - Blender](../../../../3d-modeling/blender/hdri-background-blender.md)

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/VaGfn4i5dKQ?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

#### [HDRI Background - Blender](../../../../3d-modeling/blender/hdri-background-blender.md)

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/k-moDmBUrrI?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

#### [Rotate HDRI in Blender](../../../../3d-modeling/blender/rotate-hdri-blender.md)

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/B013GO9Xy1o?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

</div>

## Grading Rubric

<div class="responsive-table-markdown">

| Objective                             | Points |
| ------------------------------------- | ------ |
| Perspective Match of Photo in Blender | 25     |
| 3D object Added to Blender Scene      | 20     |
| Use of Compositor Nodes in Blender    | 25     |
| Exported Render Image                 | 20     |
| File Management and Labeling          | 10     |

</div>
