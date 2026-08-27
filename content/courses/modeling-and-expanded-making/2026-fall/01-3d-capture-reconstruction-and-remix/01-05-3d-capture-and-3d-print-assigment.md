---
title: 01.05 3D Capture and 3D Print Assignment
date: 2026-08-27T09:00:00-04:00
lastmod: 2026-08-27T07:51:18-04:00
---

## Assignment Deliverables

1. Raw Photogrammetry Capture
   - Exported 3D file of a photogrammetry capture of a room, object, or physical environment.
   - Label file `YYYY-MM-DD Lastname Firstname Photogrammetry Capture` (`.usd`, `.obj`, `.blend`)
2. Raw 3D Scan Capture
   - Exported 3D scan of a **human head**.
   - A partial-body or full-body scan may also be created and used.
   - Label file `YYYY-MM-DD Lastname Firstname 3D Scan Capture` (`.usd`, `.obj`, `.blend`)
3. Humanoid Sculpture Blender File
   - Clean, modify, distort, duplicate, combine, and/or sculpt human scan data into an original humanoid sculpture.
   - Label file `YYYY-MM-DD Lastname Firstname Humanoid Sculpture` (`.blend`)
4. 3D Printed Humanoid Sculpture
   -Prepare the modified humanoid sculpture for 3D printing and produce a physical 3D print.

## Assignment Overview

3D capture brings information from the physical world into a digital 3D environment. This project explores three different methods of 3D capture: [photogrammetry](01-03-photogrammetry.md), [3D scanning](01-01-3d-scanning.md), and [gaussian splatting](01-04-gaussian-splatting.md).

Rather than treating a 3D scan as a finished object, you will use captured human geometry as **raw material for a new sculpture**. Explore repetition, distortion, scale, proportion, combination, or other transformations rather than simply printing an unchanged scan.

After scanning a human head and potentially additional parts of the body, bring the scan into Blender, briefly clean the geometry, and transform it into an original humanoid form. Stretch proportions, duplicate limbs, combine multiple body parts, enlarge or shrink features, remove sections, merge forms together, or sculpt directly into the scan.

Your final sculpture should clearly move beyond simply reproducing the scanned person. Use the strange possibilities of digital modeling to make a body that would be difficult or impossible to construct in the physical world and then return that altered digital body to the physical world through 3D printing.

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

The goal is **not to create a perfectly realistic digital human**. The goal is to learn how captured geometry can be cleaned, manipulated, assembled, and fabricated as a new sculptural form.

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

### Human 3D Scan

1. Working with a partner, use a 3D scanner to capture a **human head**.
2. Follow the [3D Head Scanning Guide](01-02-3d-head-scanning-guide.md).
3. If time and scanning conditions allow, also experiment with capturing:
   - Bust / shoulders
   - Torso
   - Arms or hands
   - Legs or feet
   - Partial body
   - Full body
4. The person being scanned must remain as still as possible while the scanner moves around them.
5. Hair, reflective surfaces, deep shadows, moving clothing, and difficult-to-reach areas may produce missing or inaccurate geometry. Perfect scan data is not required for this assignment.
6. Only scan classmates who have agreed to be scanned. Discuss how the scan will be used before beginning.
7. Process and clean the scan with the scanner software.
8. Export the resulting mesh for use in Blender.

### Gaussian Splat Capture

1. Select a three-dimensional scene or environment. This could be a studio area, desk, piece of furniture, work surface, installation, or other physical space.
2. Record a video moving around the scene.
3. Move from side to side, up and down, forward and backward, and change viewing angles so the reconstruction receives overlapping information from many positions.
4. Convert the video into a folder of images if required by the workflow.
   - [How to Export Frames from Video in Premiere](https://youtu.be/JCawZdzQgFA)
5. Use COLMAP and/or GLOMAP to process the images into a Gaussian Splat reconstruction.
6. View the completed reconstruction and save at least one image showing the result.

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

### 2. Build an Original Humanoid

Use the scan as raw material for a new sculpture.

You may duplicate entire scans or separate parts of the mesh into different objects before modifying them.

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

You do not need to use every tool.

Your sculpture should use **multiple intentional transformations** that substantially change the original scan.

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

Avoid making modifications that are only noticeable from the front.

### 4. Prepare the Model for 3D Printing

Before printing:

1. Remove unnecessary internal geometry and disconnected fragments.
2. Join or Boolean intersecting pieces when appropriate.
3. Check that major parts of the sculpture are physically connected.
4. Make thin elements thick enough to print.
5. Check the mesh for obvious holes or non-manifold geometry.
6. Orient and scale the sculpture appropriately for the printer.
7. Use the Blender 3D Print Tools Add-On to identify potential problems.
8. Export the finished model as an STL.

A highly detailed texture is **not required** for the final 3D print. At this stage, the geometry of the sculpture is the primary concern.

## Assignment Resources

### 3D Capture Resources

#### Photogrammetry

- [Photogrammetry](01-03-photogrammetry.md)
- [RealityScan](https://www.realityscan.com/en-US)
- [Photocatch](https://youtu.be/yMqH0GskhgY)
- [Meshroom](https://alicevision.org/)

#### 3D Scanning

- [3D Scanning](01-01-3d-scanning.md)
- [3D Head Scanning Guide](01-02-3d-head-scanning-guide.md)
- [EinScan H Series Scanner Quick Start Guide](https://support.einscan.com/en/support/solutions/articles/60000955990-einscan-h2-quick-start-guide)
- [EinScan Scanning Tips](https://support.einscan.com/en/support/solutions/60000334498)
- [EinScan H Series Guides](https://support.einscan.com/en/support/solutions/60000323052)
- [EinScan H2 Scanner](https://www.einscan.com/handheld-3d-scanner/einscan-h/)

#### Gaussian Splatting

- [Gaussian Splatting](01-04-gaussian-splatting.md)
- [How to Export Frames from Video in Premiere](https://youtu.be/JCawZdzQgFA)

### 3D Mesh Cleanup and Modeling

- [Scale Photogrammetry Mesh in Blender](https://youtu.be/MUb7I4lBSZs)
- [Clean Up Photogrammetry Mesh in Blender](https://youtu.be/asyItetJkbU)

Useful Blender techniques for this assignment include:

- Object transforms
- Edit Mode
- Proportional Editing
- Sculpt Mode
- Remesh
- Decimate
- Mirror Modifier
- Boolean Modifier
- Joining and separating meshes

### 3D Printing

- [3D Printing Design Guidelines](../../../../digital-fabrication/3d-printing/3d-print-design-guidelines.md)
- [How to Export STL from Blender](../../../../digital-fabrication/3d-printing/export-stl-blender.md)
- [3D Print Tools Add-On Blender](https://youtu.be/_E-b6CENHms)

If using the Bambu X1 Carbon 3D printers, use the [Bambu Studio Installation](../../../../digital-fabrication/3d-printing/bambu-studio-installation.md).

If using Ultimaker or Creality Ender printers, use the [Cura Slicer](../../../../digital-fabrication/3d-printing/cura-slicing-basics.md).

## Grading Rubric

<div class="responsive-table-markdown">

| Objective                                      | Points |
| ---------------------------------------------- | -----: |
| Photogrammetry Capture                         |     20 |
| Human 3D Scan Capture                          |     25 |
| Gaussian Splat Capture                         |     15 |
| 3D Scan Mesh Cleanup and Preparation           |     20 |
| Humanoid Sculpture Transformation and Modeling |     35 |
| Successful 3D Print                            |     25 |
| File Management and Labeling                   |     10 |

</div>
