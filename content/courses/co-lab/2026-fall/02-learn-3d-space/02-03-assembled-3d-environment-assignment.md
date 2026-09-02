---
title: 02.03 Assembled 3D Environment Assignment
date: 2026-09-02T12:00:00-04:00
lastmod: 2026-09-02T15:57:26-04:00
---

## Assignment Deliverables

1. Blender file containing multiple arranged imported photogrammetry scans in a simple environment
   - Label file YYYY-MM-DD Lastname Firstname 3D Scan (`.blend`)
2. One rendered image made from the assembled environment
   - Label file YYYY-MM-DD Lastname Firstname 3D Scan Render (`.jpg`)

_Note: You can upload a single `.zip` archive of all your files labeled inside the archive for easier submission to Canvas._

## Assignment Overview

Next week, your Blender scene will be brought into Unreal Engine and displayed on the XR Stage through disguise. You will use the LED wall, tracked camera, and a live performer to record footage inside the virtual environment.

For this assignment, combine multiple 3D assets into a simple environment that could function as a virtual production set.

You may use:

- your previous photogrammetry scans
- new photogrammetry scans
- your structured-light 3D scans
- simple Blender modeling
- assets from BlenderKit [Install BlenderKit](../../../../3d-modeling/blender/install-blenderkit-blender.md)

The scene does not need to be large or complicated. It does not need to be realistic but should make sense spatially. Concentrate on creating an environment with a clear visual idea and enough space for a performer to appear within or in front of it.

The goal is to become comfortable navigating a 3D scene and working with a captured 3D asset before beginning more extensive 3D modeling.

### Prepare Photogrammetry Scans and 3D Assets

[Photogrammetry](../../../../3d-modeling/photogrammetry.md) software creates a 3D mesh, but the resulting model may import into other software at an unexpected scale, position, or orientation.

Use the [Blender](../../../../3d-modeling/blender/3d-modeling-basics-blender.md) navigation and transformation tools demonstrated in class to:

1. Locate the model if it appears off screen
   - [Can’t Find Your Model in Blender? Here’s the Quick Fix](https://youtu.be/bdErTcIZyZs)
2. Move, rotate, and scale the scan as needed
   - [How to Move Objects in Blender](../../../../3d-modeling/blender/move-objects-blender.md)
   - [How to Scale Objects in Blender](../../../../3d-modeling/blender/scale-objects-blender.md)
   - [How to Rotate Objects in Blender](../../../../3d-modeling/blender/rotate-objects-blender.md)
3. Correct the object origin if the model rotates around an unexpected point
   - [How to Change the Rotation Point in Blender - Set Object Origin](https://youtu.be/YqC7VpP98rU)
   - [Set Object Origin Blender](https://youtu.be/vZ3wjjNaDUM)
4. Remove obvious unwanted scan geometry only if necessary. Do not spend significant time cleaning or remodeling the scan. More extensive mesh editing and 3D modeling will be introduced later.
   - [Clean Scans with Boolean Intersect Blender](https://youtu.be/bnJud-sBrbA)
   - [Clean Up 3D Scan Mesh](https://youtu.be/f7F8jNDWae0)
5. Confirm that the photographic texture is visible
   - [How to Fix Missing Textures in Blender Photogrammetry Scans](https://youtu.be/SwGwjaSoNIw)

### Build a Scene

After importing scans and 3d object, arrange multiple 3D assets in Blender to create a new environment. You may combine captured locations in unrealistic ways, repeat objects, change scale, add simple modeled geometry, or mix scanned assets with [BlenderKit](../../../../3d-modeling/blender/install-blenderkit-blender.md) assets. Consider how the scene might appear from the viewpoint of a physical camera on the XR Stage.

Your environment should have:

- an intentional foreground, middle ground, and background
- a clear area where a performer could appear
- enough surrounding geometry to support the intended camera view
- a visual idea that could support a short action or event

_A simple, well-composed environment is preferable to a very large unfinished scene._

### Add a Camera and Export Render Image

1. Add a camera and compose one view that represents how you imagine the scene might appear during virtual production.

- [Add and Position Camera in Blender](https://youtu.be/MIDwBLmeCec)

Add simple lighting as needed and create one rendered image showing the scene.

## Plan for Virtual Production

Before finishing, imagine a simple 5-10 second event that could happen in the scene.

For example, a performer might walk through the environment, discover something, react to an oversized object, enter or leave the frame, interact with an implied event, or perform another simple action. Keep the idea achievable in a short continuous shot.

Your sound recordings for the accompanying Sound Capture Assignment should make sense with this environment and possible action.

## Grading Rubric

<div class="responsive-table-markdown">

| Objective                                    | Points |
| -------------------------------------------- | -----: |
| Photogrammetry Scan Successfully Imported    |     25 |
| Model Positioned, Oriented, and Scaled       |     25 |
| Virtual Camera Positioned Intentionally      |     20 |
| Render Demonstrates an Interesting Viewpoint |     20 |
| File Management and Labeling                 |     10 |

</div>

## Assignment Resources

- [Blender](../../../../3d-modeling/blender/blender.md)
- [Photogrammetry](../../../../3d-modeling/photogrammetry.md)

<div class="video-grid">

<div class="video-card">

### [Delete Faces X-Ray Mode Blender](https://youtu.be/sOYVLYZ_XQ4)

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/sOYVLYZ_XQ4?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### [How to Change the Rotation Point in Blender - Set Object Origin](https://youtu.be/YqC7VpP98rU)

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/YqC7VpP98rU?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### [Can’t Find Your Model in Blender? Here’s the Quick Fix](https://youtu.be/bdErTcIZyZs)

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/bdErTcIZyZs?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### [Clean Scans with Boolean Intersect Blender](https://youtu.be/bnJud-sBrbA)

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/bnJud-sBrbA?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### [Add and Position Camera in Blender](https://youtu.be/MIDwBLmeCec)

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/MIDwBLmeCec?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### [How to Fix Missing Textures in Blender Photogrammetry Scans](https://youtu.be/SwGwjaSoNIw)

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/SwGwjaSoNIw?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### [Install BlenderKit](https://youtu.be/DM2eyg3dxP4)

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/DM2eyg3dxP4?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### [Set Object Origin Blender](https://youtu.be/vZ3wjjNaDUM)

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/DM2eyg3dxP4?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

</div>
