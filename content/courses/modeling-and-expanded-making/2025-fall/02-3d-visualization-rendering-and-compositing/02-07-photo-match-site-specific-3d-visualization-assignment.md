---
title: 02.07 Photo Matching Site Specific 3D Visualization Assignment
date: 2025-09-04T09:30:00
lastmod: 2025-09-09T20:31:17
---

## Assignment Deliverables

1. Composite image of 3D model in outdoor location. (`.jpg`, `.png`)
   - Label file YYYY-MM-DD Lastname Firstname 3D Composite outdoor
2. Composite image of 3D model in indoor location. (`.jpg`, `.png`)
   - Label file YYYY-MM-DD Lastname Firstname 3D Composite indoor
3. Composite image of 3D model in location from Google Street View. (`.jpg`, `.png`)
   - Label file YYYY-MM-DD Lastname Firstname 3D Composite street view

## Overview

This assignment is designed to help you develop skills in using fSpy, [Blender](../../../../3d-modeling/blender/blender.md), [Photoshop](../../../../software/adobe-photoshop/photoshop.md), Adobe Substance 3D Stager, and Google Street View to create realistic visualizations of potential public art installations. You will learn how to photo match images for outdoor public spaces or indoor gallery environments using fSpy and utilize your previous modular form 3d model arrangements as large-scale sculptures. The goal is to understand site context and how your sculptures interact with the potential environment.

## Instructions

### Collect Photos

1. Choose three different potential sites for public art installation:
   - A photo of an outdoor location where public art might be installed. This photo should be taken by you.
   - A photo of an indoor gallery or public indoor space (e.g., a museum lobby, a large hall, or a gallery space). This photo should be taken by you.
   - A screen shot from Google Street View to choose a location in a distant city or country for a potential public art installation.
2. Use Photoshop tools and generative fill to remove unwanted elements from the photos and correct levels and [white balance](../../../../software/adobe-photoshop/white-balance-quick-photoshop-tutorial.md) as needed.

### Photo Match with fSpy and Blender Render

1. Import each image into fSpy to set up the correct camera perspective
   - [Photo Matching with fSpy](../../../../3d-modeling/photo-perspective-matching-with-fspy.md)
2. Import the fSpy file into Blender with the fSpy Blender Addon.
   - [Place 3D Model in 2D Photo Blender](../../../../3d-modeling/blender/place-3d-model-in-2d-photo-blender-fspy.md)
3. Append or insert the 3D models of your modular form arrangements from the previous assignment.
   - [Import obj into Blender](https://youtu.be/JG1msAX7PFo)
   - [Reconnect Textures in Blender](https://youtu.be/t5ayHdRapCw)
4. Scale and position the 3D models within the Blender scene to simulate how they would look as large-scale sculptures in the real-world environment.

### Texture and Lighting

1. Apply the image texture from your reference image onto simple 3D geometry that matches the scene (e.g., ground planes or building facades).
2. Create an emissive texture using the image texture to simulate a pseudo HDRI lighting setup. This will allow your sculpture to reflect the colors and light from the environment.
3. Adjust lighting and shadow settings to match the scene's natural light conditions (e.g., sunlight for outdoor, gallery lighting for indoor).
4. Use HDRIs for the sky for outdoor images. You can [create an HDRI from a photo](https://youtu.be/Co9qokfI_Mc) in Adobe Substance 3D Stager.

### Rendering:

1. Render and composite an image for each site.
2. Use Photoshop and other image editing tools to further composite and touch up the renders. Adobe Substance 3D Stager can export a PSD file with multiple layers for straight forward composite post processing.

## Assignment Resources

### Notes

- Pay close attention to scale when placing your 3D models in the scene.
- Experiment with different lighting setups to see how they impact the interaction between your sculpture and its environment.
- Try using Blender's compositor to enhance the final render, adjusting color grading and exposure as needed.
- Blender units default to meters while Adobe Substance 3D Stager defaults to centimeters. For real world scale in Substance Stager [change the export scale in Blender](https://youtu.be/6bg3M0-8MvE) to 100 to export in centimeters.

### Guides

#### Adobe Substance 3D Stager

The assignment can be completed using Adobe Substance 3D Stager.

- [Street View 3D Model Render Composite Adobe Substance 3D Stager](https://youtu.be/e8iiHMe5mCQ)
- [Interior Scene 3D Model Render Composite Adobe Substance 3D Stager](https://youtu.be/3PGf4lv7i84)
- [Exterior Scene 3D Model Render Composite Adobe Substance 3D Stager](https://youtu.be/H1xpa2vYvx8)
- [Set Scene Scale in Adobe Substance 3D Stager](https://youtu.be/XlGehCSkZ-o)
- [Create an HDRI from a photo](https://youtu.be/Co9qokfI_Mc)

#### Blender and fSpy

- [HDRI Background Blender](../../../../3d-modeling/blender/hdri-background-blender.md)
- [Photo Matching with fSpy](../../../../3d-modeling/photo-perspective-matching-with-fspy.md)
- [Place 3D Model in 2D Photo Blender](../../../../3d-modeling/blender/place-3d-model-in-2d-photo-blender-fspy.md)
- [Reflections, Shadows, and Materials for fSpy Compositing](../../../../3d-modeling/blender/reflections-shadows-and-materials-for-fspy-compositing-blender.md)
- [How to Scale fSpy Camera to Existing 3D Model in Blender](../../../../3d-modeling/blender/scale-fspy-camera-to-existing-3d-model-in-blender.md)
- [How to Rotate HDRI Environment Texture](../../../../3d-modeling/blender/rotate-hdri-blender.md)

#### Blender OBJ Handling

- [Import OBJ in Blender](https://youtu.be/JG1msAX7PFo)
- [Fix Broken Texture Links in Blender](https://youtu.be/t5ayHdRapCw)
- [Blender Export Unit Scale](https://youtu.be/6bg3M0-8MvE)

### Video Guides

<div class="video-grid">

<div class="video-card">

### Match Perspective with fSpy

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/7pgDrQzThH0?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### Perfect Camera Match - Scale fSpy Camera to 3D Model

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/okPjal2aFG4?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

#### How to Place 3D Models in 2D Photos

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/qBePDl2l2hI?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

#### 3D Models in 2D Photos with Shadows and Reflection in Blender

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/BSqLLKbcd24?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

#### How to Rotate an HDRI Environment Texture in Blender

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/B013GO9Xy1o?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

#### Street View 3D Model Photo Composite Rendering in Adobe Substance 3D Stager

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/e8iiHMe5mCQ?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

#### Interior Scene 3D Model Render Composite Adobe Substance 3D Stager

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/3PGf4lv7i84?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

#### Exterior Scene 3D Model Render Composite Adobe Substance 3D Stager

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/H1xpa2vYvx8?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

</div>

## Grading Rubric

<div class="responsive-table-markdown">

| Objective                                 | Points |
| ----------------------------------------- | ------ |
| Perspective match of outdoor photo        | 10     |
| Reflections and shadows outdoor photo     | 10     |
| 3D Model composite in outdoor photo       | 10     |
| Perspective match of indoor photo         | 10     |
| Reflections and shadows indoor photo      | 10     |
| 3D Model composite in indoor photo        | 10     |
| Perspective match of Street View photo    | 10     |
| Reflections and shadows Street View photo | 10     |
| 3D Model composite in Street View photo   | 10     |
| File Management and Labeling              | 10     |

</div>
