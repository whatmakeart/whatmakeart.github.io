---
title: 13.03 3D Virtual Environment USD Export Assignment
date: 2026-04-15T09:00:00-04:00
lastmod: 2026-04-22T06:01:37-04:00
---

## Assignment Deliverables

1. 3D virtual environment scene built in [Blender](../../../../3d-modeling/blender/blender.md) or [Maya](../../../../3d-modeling/maya/maya.md)
2. One exported **USD package** for Unreal Engine
   - `.usdc` or `.usd`
   - include all linked texture files in a labeled `textures` folder
3. Two render images of the scene
   - Label files YYYY-MM-DD Lastname Firstname USD scene render image (`.png`, `.jpg`)
4. Compress the USD export, the `textures` folder, and the render images into a `.zip` archive
   - Label file YYYY-MM-DD Lastname Firstname USD scene (`.zip`)

## Assignment Overview

In this assignment you will build a small environment scene for use in Virtual Production in the XR Studio at the CIA Interactive Media Lab. You may model the scene yourself, download existing assets, or use a combination of both. The goal is not simply to collect random objects, but to create a coherent, believable scene with a clear visual idea.

Your scene might be a room, alley, village corner, interior, stage set, landscape fragment, or another contained environment that can be used as a backdrop or setting in virtual production.

Next week we will import your USD scene into the Unreal Engine project for virtual production.

### Scene Requirements

Your scene must include:

- a clear environment or setting
- at least 8 to 12 visible objects or architectural elements
- at least 3 different materials
- at least 2 light sources
- believable real-world scale
- textures that are linked correctly

### Asset Sources

You may create all assets yourself, or combine your own work with downloaded models, textures, and characters. You are allowed to use downloaded assets, but your final scene should still show intentional design decisions. Do not just drop random objects into a file and call it finished.

### Good sources for models, textures, and characters

#### General model libraries

- [Fab](https://www.fab.com/)
- [Polyhaven](https://polyhaven.com/)
- [Photogrammetry](../../../../3d-modeling/photogrammetry.md)
- [BlenderKit](https://www.blenderkit.com/)

### Best Practices

- Your scene must be built at believable size.
- Build your scene close to `0,0,0`.
- Do not leave objects scattered thousands of units away from the center of the scene.
- Name objects clearly
  - Use names like: `wall_north`, `wood_table_A`, `lantern_01`, `window_small_02`,`tree_pine_01`
  - Avoid names like: `Cube`, `Cube.001`, `pCube17`, `Sphere12`
- Keep materials simple

### Save all texture files with the project

1. Gather all files together in a folder.
2. Export a USD scene
   - [How to Export USD from Blender](https://youtu.be/u3qluW3IVVI)
   - [How to Export USD from Maya](https://youtu.be/9Ta5ZyD59vY)
3. Export 2 different render images
4. Compress everything into a zip archive.
   - [How to compress `zip` archive on a Mac](https://youtu.be/bJa_i7X-fkc)

## Grading Rubric

<div class="responsive-table-markdown">

| Assessment                   | Weight    |
| ---------------------------- | --------- |
| Clear Environment or Setting | 30 points |
| Minimum 8 - 12 Objects       | 20 points |
| 3 Different Materials        | 15 points |
| 2 Light Sources              | 15 points |
| Textures                     | 10 points |
| File Management and Labeling | 10 Points |

</div>
