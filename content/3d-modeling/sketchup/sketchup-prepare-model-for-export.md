---
date: 2022-10-12T8:30:00-04:00
description: In this tutorial, I will show you how to prepare your SketchUp models for export to Blender so you can make photorealistic renders.
featured_image: /posts/sketchup-prepare-model-for-export.md
tags:
  - SketchUp
  - 3D Modeling
title: SketchUp Prepare Model for Export
---

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/512jqCvfyU0?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## How to Prepare SketchUp Models for Export to Blender

In this tutorial, I will show you how to prepare your SketchUp models for export to [Blender](../blender/blender.md) so you can make photorealistic renders.

### Step 1: Remove Multiple Materials

SketchUp allows you to apply materials to both sides of an object and to groups and individual faces. However, [Blender](../blender/blender.md) can't handle this and will interpret it as having extra vertices or faces. To fix this, go through your model and remove any materials that are applied to groups or individual faces.

### Step 2: Export Your Model as a Collada File

Once you've removed all of the multiple materials, you can export your model as a Collada file. To do this, go to File > Export > 3D Model. In the Export Options window, make sure that the "Export Texture Maps" option is checked. Then, click OK to export your model.

### Step 3: Import Your Model into Blender

Now that you've exported your model, you can import it into Blender. To do this, go to File > Import > COLLADA (.dae). In the Import COLLADA window, select the Collada file you just exported and click Open.

### Step 4: Add Materials and Lights

Once your model is imported into Blender, you can add materials and lights to it. To add a material, go to the 3D Viewport Header and click on the Add > Materials button. Then, select the type of material you want to add and click OK.

To add a light, go to the 3D Viewport Header and click on the Add > Lights button. Then, select the type of light you want to add and click OK.

### Step 5: Render Your Scene

Once you've added materials and lights to your scene, you can render it. To do this, go to the 3D Viewport Header and click on the Render button.

Your rendered scene will be saved to the file you specified in the Render Settings window.

I hope this tutorial was helpful!
