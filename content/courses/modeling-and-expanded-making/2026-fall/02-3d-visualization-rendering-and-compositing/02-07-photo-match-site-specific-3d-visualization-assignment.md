---
title: 02.07 Photo Matching Site Specific 3D Visualization Assignment
date: 2026-09-03T09:00:00-04:00
lastmod: 2026-09-05T11:01:52-04:00
canvas_mobile_fallback: true
---

## Assignment Deliverables

1. Rendered export of composite image of 3D object in outdoor or indoor location.
   - Label file YYYY-MM-DD Lastname Firstname 3D Composite Render (`.jpg`, `.png`)
2. Blender file with matched photo, 3d object, compositor nodes, with all resources packed
   - Label file YYYY-MM-DD Lastname Firstname 3D Composite (`.blend`)

_Note: You can upload a single `.zip` archive of all your files labeled inside the archive for easier submission to Canvas._

## Overview

This assignment is designed to help you develop skills using perspective matching in [Blender](../../../../3d-modeling/blender/blender.md) to create realistic visualizations of potential public art installations. You will match an image of an outdoor public space, or indoor gallery environment using perspective matching tools. Then place a 3D sculpture into the photographed environment at a believable scale, recreate important scene geometry and lighting, and composite the rendered object into the original photograph. You may use any 3D model of your own creation as the sculpture representation.

The final image should function as a convincing proposal for how a sculpture could exist at a specific location. Pay particular attention to perspective, scale, contact shadows, occlusion, lighting direction, color, contrast, and image sharpness.

## Instructions

### 1. Collect Site Photo

1. Choose one site for your final visualization:
   - A photo of an outdoor location where public art might be installed. This photo should be taken by you.
   - A photo of an indoor gallery or public indoor space (e.g., a museum lobby, a large hall, or a gallery space). This photo should be taken by you.
   - A screenshot from Google Street View to choose a location in a distant city or country for a potential public art installation.
2. Use Photoshop tools and generative fill as needed to remove unwanted elements from the photo and correct levels and [white balance](../../../../software/adobe-photoshop/white-balance-quick-photoshop-tutorial.md) as needed. Do not change the resolution or crop the photo.
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

### 3. Blender Modeling, Texturing and Lighting

1. [Build simple scene geometry as needed for shadows, occlusion, or photo projection](https://www.youtube.com/watch?v=q9U0xGSFKTI&t=412s)
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

### 4. Evaluate the Final Composite

Consider the following before accepting the final render.

- Does the perspective match the photograph?
- Is the sculpture a believable physical size?
- Does it appear firmly connected to the ground?
- Do shadows travel in the correct direction?
- Do foreground objects correctly pass in front of the sculpture when necessary?
- Does the sculpture have similar contrast, color, sharpness, and noise to the photograph?
- Does the final image read as a plausible site-specific installation proposal?

### 5. Render and Export

1. Render the final composite at the original image resolution and export it as a `.jpg` or `.png`.
2. [Render and export an image](https://www.youtube.com/watch?v=q9U0xGSFKTI&t=1134s) _Remember to return both the Output Properties resolution percentage and any compositor scaling used during test renders to 100% before creating the final image._

## Assignment Resources

### Notes

- Scale is particularly important. Use architectural features, doors, furniture, people, paving units, or other recognizable objects in the photograph to estimate real-world dimensions.
- You do not need to model the entire photographed environment. Only create geometry necessary for shadows, contact, occlusion, reflections, or other interactions with the sculpture.
- A simple lighting setup that accurately matches the photograph is more successful than a complicated lighting setup that does not.

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

| Objective                                      | Points |
| ---------------------------------------------- | ------ |
| Perspective Match of Photo in Blender          | 25     |
| 3D Object Placement, Scale, and Orientation    | 20     |
| Lighting, Shadows, and Compositing Integration | 25     |
| Quality of Final Render Image                  | 20     |
| File Management and Labeling                   | 10     |

</div>
