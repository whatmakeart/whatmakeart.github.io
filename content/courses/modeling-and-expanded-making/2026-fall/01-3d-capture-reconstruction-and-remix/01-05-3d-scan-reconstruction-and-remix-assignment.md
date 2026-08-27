---
title: 01.05 3D Scan Reconstruction and Remix Assignment
date: 2026-08-27T09:00:00-04:00
lastmod: 2026-08-27T14:13:41-04:00
---

## Assignment Deliverables

1. Raw Photogrammetry Capture
   - Exported 3D file of a photogrammetry capture of a room, object, or physical environment.
   - Label file YYYY-MM-DD Lastname Firstname Photogrammetry Capture (`.usd`, `.obj`, `.blend`, `.zip`)
2. Raw 3D Scan Capture
   - Exported 3D scan of a human head, human body
   - A partial-body or full-body scan may also be created and used.
   - Label file YYYY-MM-DD Lastname Firstname 3D Scan Capture (`.usd`, `.obj`, `.blend`, `.zip`)
3. 3D Scan Remix Blender File
   - Clean, modify, distort, duplicate, combine, and/or sculpt human scan data into an original humanoid sculpture.
   - Label file YYYY-MM-DD Lastname Firstname Remix Sculpture (`.blend`)
4. Render image of remix
   - - Label file YYYY-MM-DD Lastname Firstname Remix Render (`.blend`)

_Note: You can upload a single `.zip` archive of all your files labeled inside the archive for easier submission to Canvas_

## Assignment Overview

3D capture brings information from the physical world into a digital 3D environment. This project explores different methods of 3D capture including [photogrammetry](01-03-photogrammetry.md), [3D scanning](01-01-3d-scanning.md).

Rather than treating a 3D scan as a finished object, you will use captured human geometry as raw material for a new sculpture. Explore repetition, distortion, scale, proportion, combination, or other transformations rather than simply printing an unchanged scan.

After scanning a human head and potentially additional parts of the body, bring the scan into [Blender](../../../../3d-modeling/blender/blender.md) , briefly clean the geometry, and transform it into an original humanoid form. Stretch proportions, duplicate limbs, combine multiple body parts, enlarge or shrink features, remove sections, merge forms together, or sculpt directly into the scan.

Your final sculpture should clearly move beyond simply reproducing the scanned person. Use the strange possibilities of digital modeling to make a body that would be difficult or impossible to construct in the physical world and then return that altered digital body to the physical world through [3D Printing](../../../../digital-fabrication/3d-printing/3d-printing.md).

Possible approaches include:

- Multiple arms, hands, heads, faces, or legs
- Extremely long or compressed proportions
- Oversized or miniature body parts
- Repeated or mirrored anatomy
- Limbs emerging from unexpected locations
- Combined scans from different people
- Intersecting or merged bodies
- Missing or simplified anatomy
- Distorted facial features
- Stretched, twisted, inflated, or flattened forms
- Boolean cuts and additions
- Sculpted transitions between scanned parts
- Abstract forms that still retain evidence of the human body

The goal is not to create a perfectly realistic digital human. The goal is to learn how captured geometry can be cleaned, manipulated, assembled, and fabricated as a new sculptural form.

- Successfully demonstrate the required 3D capture workflows.
- Preserve usable human scan geometry while removing unnecessary scanning artifacts.
- Make substantial and intentional changes to the original scanned body.
- Consider the sculpture as a three-dimensional form from multiple viewpoints.
- Use Blender tools purposefully rather than applying effects randomly.
- Produce geometry that is appropriate for physical 3D printing.
- Submit clearly labeled and organized digital files.

## Process

### Photogrammetry Capture

1. Select an interior room, object, or physical environment to capture.
2. Capture many overlapping views from different positions, heights, and angles. You may use photographs or an appropriate video capture workflow.
3. Import the photographs or video into a photogrammetry application and process the capture into a 3D reconstruction.
4. If needed, briefly clean up the captured mesh.
   - [How to Clean Up Photogrammetry Mesh in Blender](https://youtu.be/asyItetJkbU)
5. Export the completed mesh with textures.

## Humanoid Sculpture in Blender

### 1. Import and Inspect

Import your human 3D scan into Blender.

Before making major changes:

- Inspect the mesh from all sides.
- Delete obvious unwanted scanning debris.
- Remove large disconnected fragments.
- Fill or repair major holes when necessary.
- Check the overall scale.
- Save a copy of the original scan before modifying it.

Do not spend excessive time attempting to make the scan perfect. Small scanning errors can become part of the sculpture.

### 2. Remix the 3D Scan Data

Use the scan as raw material for a new sculpture. You may duplicate entire scans or separate parts of the mesh into different objects before modifying them.

Experiment with basic Blender tools including:

- Move
- Rotate
- Scale
- Duplicate
- Mirror
- Proportional Editing
- Separate
- Join
- Extrude
- Sculpt Mode
- Grab
- Smooth
- Inflate
- Boolean Union
- Boolean Difference
- Remesh
- Decimate

You do not need to use every tool but your sculpture should use multiple intentional transformations that substantially change the original scan.

For example, you could duplicate both arms several times, stretch the torso vertically, enlarge the head, compress the legs, and sculpt the intersections between the parts into a continuous form.

### 3. Consider the Sculpture From All Sides

This is a three-dimensional sculpture rather than a single rendered image.

Rotate around the model frequently and consider:

- Silhouette
- Balance
- Proportion
- Repetition
- Symmetry and asymmetry
- Negative space
- Relationship between body parts
- Where the sculpture touches the ground
- How the form changes when viewed from different angles

Avoid making modifications that are only noticeable from the front. A highly detailed texture is not required for the final 3D print. At this stage, the geometry of the sculpture is the primary concern.

## Assignment Resources

### 3D Capture Resources

#### Photogrammetry

- [Photogrammetry](01-03-photogrammetry.md)
- [RealityScan](https://www.realityscan.com/en-US)
- [Photocatch](https://youtu.be/yMqH0GskhgY)

#### 3D Scanning

- [3D Scanning](01-01-3d-scanning.md)
- [3D Head Scanning Guide](01-02-3d-head-scanning-guide.md)
- [EinScan H Series Scanner Quick Start Guide](https://support.einscan.com/en/support/solutions/articles/60000955990-einscan-h2-quick-start-guide)
- [EinScan Scanning Tips](https://support.einscan.com/en/support/solutions/60000334498)
- [EinScan H Series Guides](https://support.einscan.com/en/support/solutions/60000323052)
- [EinScan H2 Scanner](https://www.einscan.com/handheld-3d-scanner/einscan-h/)

### 3D Mesh Cleanup and Modeling

- [Scale Photogrammetry Mesh in Blender](https://youtu.be/MUb7I4lBSZs)
- [Clean Up Photogrammetry Mesh in Blender](https://youtu.be/asyItetJkbU)

### Useful Blender techniques for this assignment include:

- Object transforms
- Edit Mode
- Proportional Editing
- Sculpt Mode
- Remesh
- Decimate
- Mirror Modifier
- Boolean Modifier
- Joining and separating meshes

## Grading Rubric

<div class="responsive-table-markdown">

| Objective                                      | Points |
| ---------------------------------------------- | -----: |
| Photogrammetry Capture                         |     20 |
| Human 3D Scan Capture                          |     25 |
| 3D Scan Mesh Cleanup and Preparation           |     20 |
| Humanoid Sculpture Transformation and Modeling |     35 |
| Render Image                                   |     25 |
| File Management and Labeling                   |     10 |

</div>

## Tutorials and Guides

<div class="video-grid">

<div class="video-card">

### Import a 3D Head Scan into Blender (OBJ) and Fix Scale, Rotation, and Origin

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/xaECwQMOOAw?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### Fix Shiny 3D Scan Textures in Maya Using OpenPBR (Quick IOR Trick)

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/IOt3nEgCeF4?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### How to Convert Epic Games Reality Scan GLB to OBJ in Blender (Photogrammetry Export)

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/Lj1Z2XmpOM0?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### Blender Object Mode vs Edit Mode Explained (Move Objects vs Edit Mesh)

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/w8DLBlx_jCE?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### Make Any 3D Model Manifold in Blender: 3D Print Toolbox Guide

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/beAfWDEdjCc?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### Blender 3D Printing: Reduce Triangles, Make Manifold, Export a Clean STL

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/xkMdZJDfE3o?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### Blender 3D Printing: Reduce Triangles, Make Manifold, Export a Clean STL

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/xkMdZJDfE3o?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### Reconnect Textures to OBJ in Blender

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/t5ayHdRapCw?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### Duplicate Objects in Blender

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/XtumSUXtkHY?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### How to Change Viewport Display in Blender | Viewport Shading Modes Explained

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/6j0aGrgFCcs?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### How to Scale Objects in Blender

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/EGn3BvyRVlY?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### How to Rotate Objects in Blender

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/y6nwGRkL1k4?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### Clean Up 3D Scan Mesh in Blender

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/f7F8jNDWae0?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

</div>

### RealityScan Mobile Photogrammetry Guides

<div class="video-grid">

<div class="video-card">

#### Object Masking Photogrammetry Capture - RealityScan Tutorial

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/tBc4yoMWaSM?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

#### Indoor Photogrammetry Capture - RealityScan Tutorial

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/bI_ix3ZDGWI?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

#### Outdoor Photogrammetry Capture - Reality Scan Tutorial

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/VmVBUGjP5CU?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

</div>
