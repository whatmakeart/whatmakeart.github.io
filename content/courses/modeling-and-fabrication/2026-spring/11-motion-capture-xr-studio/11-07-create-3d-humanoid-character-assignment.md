---
title: 11.07 Create 3D Humanoid Character Assignment
date: 2026-04-01T09:00:00-04:00
lastmod: 2026-04-04T06:12:19-04:00
---

## Assignment Deliverables

1. 3D modeled, textured, and rigged humanoid character in t-pose
   - Label file YYYY-MM-DD Lastname Firstname T-pose (`.fbx`)

## Assignment Overview

Now that we have successfully captured motion data in the XR studio, we need digital avatars to use the motion data. For this assignment, you will design, model, texture, and auto-rig a simple 3D humanoid character. In our next class, we will be retargeting the mocap data you recorded onto these characters. The geometry can be simple or complex.

Your character can be very simple. It may be built from primitive forms such as cylinders, spheres, and cubes, or it can be box modeled, sculpted, remeshed, or generated with 3D tools from images or text prompts and then cleaned up. The goal is to create a readable humanoid form that can be successfully uploaded to [Mixamo](https://www.mixamo.com/#/) and returned as a rigged character in a [T-pose](https://youtu.be/cpR-j2gfZ6Q).

### Character Requirements

- be a humanoid form by having a head, torso, two arms, and two legs
- have a texture or painted material design
- auto-rigged in Mixamo, Blender, or Maya
- saved as an FBX in a T-Pose from [Mixamo](https://www.mixamo.com/#/) or other rigging method

## Assignment Process

### 1. Character Modeling

Starting with ideation sketching and idea development is the best first step. You can then import a sketch into a 3D modeling program to use as reference as you model your character. It is usually easier to model from a reference sketch than a blank screen. Before modeling, decide on a clear character concept.

- [How to Insert a Reference Image into Maya](../../../../3d-modeling/maya/how-to-insert-reference-image-maya-tutorial.md)
- [How to Insert a Reference Image into Blender](../../../../3d-modeling/blender/reference-image-blender.md)

#### Modeling Workflows

- Build the character from basic forms such as cubes, cylinders, and spheres.
- Use Box Modeling to model a low-poly humanoid form using extrusions and simple topology.
- Sculpt a character, then retopologize or remesh it into a cleaner form that Mixamo can process.
- Use a model created from AI, image-based generation, or text-prompt generation, but you must still clean it up, texture it, and prepare it correctly for Mixamo.

#### Character Modeling Tips

### 2. Texture the Character

Your character should have at least a basic painted surface treatment. The textures do not need to be complex, but the character should look intentionally designed rather than left as default gray material.

- [Add Materials - Blender](../../../../3d-modeling/blender/add-materials-blender.md)
- [Add Materials - Maya](../../../../3d-modeling/maya/add-materials-maya.md)

#### Texture and Material Ideas

- paint a shirt, pants, and shoes
- paint robot panels and stripes
- paint simple facial features
- use color blocking to separate body parts
- paint a stylized skin/clothing design

### 3. Export as FBX

#### Maya FBX Export

[How to Export FBX with Embedded Textures from Maya](../../../../3d-modeling/maya/export-fbx-with-embeded-textures-maya.md)

1. Select the character mesh.
2. Go to File > Export Selection.
3. Choose FBX.
4. Make sure to check Embed Media in the options.
5. Save the file.

#### Blender FBX Export

[How to Embed Textures in FBX Export - Blender](../../../../3d-modeling/blender/embed-textures-in-fbx-export-blender.md)

1. Select the character object or objects.
2. Go to File > Export > FBX.
3. Export only selected objects if needed.
4. Apply transforms before export.
5. Use the correct forward/up axis if necessary for clean transfer.
6. Save the file.

### 4. Upload to Mixamo to Auto Rig and Download T-Pose

1. Upload the character `fbx` file to [Mixamo](https://www.mixamo.com/#/) to auto rig.
2. After rigging, download a rigged T-Pose from Mixamo.
3. Upload the T-pose to the assignment page.

## Assignment Resources

- [Simple Geometry Character Maya](https://youtu.be/M0i1Srs39kE)
- [Simple Geometry Character Blender](https://youtu.be/h-QnVcXeKJ0)
- [T-Pose from Mixamo](https://youtu.be/cpR-j2gfZ6Q)

<div class="video-grid">

<div class="video-card">

### Simple Geometry Character Maya

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/M0i1Srs39kE?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### Simple Geometry Character Blender

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/h-QnVcXeKJ0?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### T-pose from Mixamo

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/cpR-j2gfZ6Q?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

</div>

## Grading Rubric

<div class="responsive-table-markdown">

| Assessment                   | Weight    |
| ---------------------------- | --------- |
| Head                         | 15 points |
| Torso                        | 15 points |
| Arms                         | 15 points |
| Legs                         | 15 points |
| Texture Applied              | 10 points |
| Rigged with Armature         | 10 points |
| T-Pose FBX file              | 10 points |
| File Management and Labeling | 10 Points |

</div>
