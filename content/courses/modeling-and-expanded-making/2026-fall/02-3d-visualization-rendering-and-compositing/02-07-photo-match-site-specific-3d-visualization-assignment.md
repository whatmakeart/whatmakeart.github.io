---
title: 02.07 Photo Matching Site Specific 3D Visualization Assignment
date: 2026-09-03T09:00:00-04:00
lastmod: 2026-09-05T10:36:56-04:00
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
2. [Add the photo as a background image for the camera in Blender](https://www.youtube.com/watch?v=q9U0xGSFKTI&t=14s)
3. [Match the camera resolution to the photo resolution](https://www.youtube.com/watch?v=q9U0xGSFKTI&t=47s)
4. [Draw perspective matching lines](https://www.youtube.com/watch?v=q9U0xGSFKTI&t=65s)
5. [Solve the matched camera](https://www.youtube.com/watch?v=q9U0xGSFKTI&t=207s)
6. [Set the world origin and real-world scale](https://www.youtube.com/watch?v=q9U0xGSFKTI&t=221s)
7. [Scale the camera without changing object size](https://www.youtube.com/watch?v=q9U0xGSFKTI&t=353s)

<div class="video-grid">
<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/q9U0xGSFKTI?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

[Simple Camera Reversal - Perspective Match Blender Addon](https://github.com/Witty-Ming/Simple-Camera-Reversal)

### Blender Modeling, Texturing and Lighting

1. [Build shadow-catching scene geometry](https://www.youtube.com/watch?v=q9U0xGSFKTI&t=412s)
2. [Project the photo onto 3D geometry](https://www.youtube.com/watch?v=q9U0xGSFKTI&t=519s)
3. [Import and position a 3D object](https://www.youtube.com/watch?v=q9U0xGSFKTI&t=585s)
4. [Set up Cycles render engine and shadow catchers](https://www.youtube.com/watch?v=q9U0xGSFKTI&t=643s)
5. [Optimize render resolution](https://www.youtube.com/watch?v=q9U0xGSFKTI&t=692s)
6. [Set up the Blender compositor](https://www.youtube.com/watch?v=q9U0xGSFKTI&t=719s)
7. [Composite the shadow catcher](https://www.youtube.com/watch?v=q9U0xGSFKTI&t=796s)
8. [Match CGI color and black levels](https://www.youtube.com/watch?v=q9U0xGSFKTI&t=865s)
9. [Add HDRI lighting](https://www.youtube.com/watch?v=q9U0xGSFKTI&t=927s)
10. [Match exposure and color](https://www.youtube.com/watch?v=q9U0xGSFKTI&t=996s)
11. [Add blur to match the photograph](https://www.youtube.com/watch?v=q9U0xGSFKTI&t=1030s)
12. [Add sensor noise for realism](https://www.youtube.com/watch?v=q9U0xGSFKTI&t=1100s)
13. [Render and export an image](https://www.youtube.com/watch?v=q9U0xGSFKTI&t=1134s) _Remember to change the output scale back to 100% in the output menu and in the Compositor in Blender_

## Assignment Resources

### Notes

- Pay close attention to scale when placing your 3D models in the scene.
- Experiment with different lighting setups to see how they impact the interaction between your sculpture and its environment.

### Video Guides

<div class="video-grid">

<div class="video-card">

#### [Simple Camera Reversal Perspective Match Blender Addon](../../../../3d-modeling/blender/simple-camera-reversal-perspective-match-blender-addon.md)

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/q9U0xGSFKTI?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
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

<div class="video-card">

#### [Fix Broken Texture Links in Blender](https://youtu.be/t5ayHdRapCw)

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/t5ayHdRapCw?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

#### [Missing Textures in Blender](https://youtu.be/SwGwjaSoNIw)

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/SwGwjaSoNIw?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
