---
title: 05.03 CHaracter Creation Assignment
date: 2026-09-23T12:00:00-04:00
lastmod: 2026-09-24T06:04:37-04:00
---

## Assignment Deliverables

1. Blender file containing one completed character with textures
   - Label file YYYY-MM-DD Lastname Firstname Character Model (`.blend`)
2. Minimum 1 render image showing the completed character
   - Label file YYYY-MM-DD Lastname Firstname Character Render Image (`.png`, `.jpg`)
3. Brief process note identifying how the character was created
   - Label file YYYY-MM-DD Lastname Firstname Character Creation Process Note (`.pdf`, `.docx`)

_Note: You can upload a single `.zip` archive of all your files labeled inside the archive for easier submission to Canvas._

## Assignment Overview

Create a character that can be prepared for motion capture and animation next week.
Characters may begin with generated 3D geometry, BlenderKit assets, 3D scans, traditional modeling, sculpting, or a combination of methods.
The starting method is not the final work. Modify, combine, sculpt, model, texture, or otherwise transform the source material to create your own character.
Next week, motion capture data will be recorded in the XR Studio. The character will then be rigged and the recorded motion will be retargeted onto the character.

## Explore Character Creation Methods

During class, experiment with several approaches to creating 3D characters.

These may include:

- image-to-3D generation
- BlenderKit kitbashing
- 3D scanning
- polygon modeling
- sculpting

You do not need to use every method in the final character.
Use the experiments to decide which workflow or combination of workflows best supports your character.

## Build the Character

Develop one character that can eventually receive human motion capture.

The character may be realistic, abstract, exaggerated, mechanical, creature-like, or strange, but it should have enough recognizable body structure for the motion capture data you intend to use.

Modify the source assets rather than simply submitting a generated, scanned, or downloaded model.

Consider changing:

- body proportions
- head or facial form
- limbs
- clothing
- objects attached to the body
- surface detail
- materials and textures
- scale and repetition of forms

Hybrid approaches are encouraged.

## Prepare for Motion Capture

Before next class, place the character in a neutral A-pose or T-pose.

Make sure:

- arms are separated from the torso
- legs are separated
- major body parts are clearly defined
- unnecessary scan or generated geometry is removed
- the character is correctly oriented and scaled
- the mesh is not unnecessarily dense
- materials and textures appear correctly

Do not rig the character yet. Rigging and motion retargeting will be introduced after motion capture data is recorded next week.

## High and Low Resolution Geometry

Detailed scans, generated meshes, and sculptures may contain substantially more geometry than is needed for animation.

Preserve a copy of the original detailed character before reducing or modifying the geometry.

Create a working version with a manageable amount of geometry when necessary. We will continue discussing retopology, UVs, texture baking, and optimization as the characters are prepared for animation.

### Blender File Organization

Create an `Archive` collection containing untouched copies of important source meshes and objects as backups.

Create a `Character` or `Working` collection containing the version you intend to prepare for animation.

#### Avoid Losing Textures

To avoid losing texture images and other external data, make sure to [pack external resources](https://youtu.be/x6H6HFBLRlU) in your Blender file.

Go to File → External Data → Pack Resources [How to Pack External Resources in Blender](../../../../3d-modeling/blender/pack-external-resources-blender.md)

Save the file again after packing.

## Process Note

Briefly identify:

- which character creation methods you experimented with
- which methods were used in the final character
- where any external assets came from
- what you substantially changed or created yourself
- one problem that still needs to be solved before animation

## Grading Rubric

<div class="responsive-table-markdown">

| Objective                                              | Points |
| ------------------------------------------------------ | ------ |
| Character Design and Transformation of Source Material | 30     |
| Character Prepared for Future Rigging and Motion       | 25     |
| Use and Exploration of Character Creation Methods      | 20     |
| Materials, Texture, and Visual Development             | 15     |
| File Organization, Documentation, and Labeling         | 10     |

</div>
