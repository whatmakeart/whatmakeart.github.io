---
title: UV Mapping - Maya
date: 2023-06-15T05:48:39
lastmod: 2026-03-18T06:50:20-04:00
---

## UV Mapping in Maya

UV mapping in [Maya](maya.md) is the process of assigning 2D [UV coordinates](../uv-coordinates.md) to 3D objects. This allows texture images to be placed on the object in a way that is controlled, consistent, and predictable.

Because most 3D forms cannot be flattened without cutting, UV mapping usually involves splitting the surface into separate UV shells and then unfolding those shells into a 2D layout. A good UV unwrap helps textures appear at the correct scale and with as little stretching or distortion as possible.

Maya's UV Editor is a powerful tool for creating, editing, unfolding, cutting, sewing, and arranging UVs. It can be used for both simple and complex models, from basic hard-surface forms to more detailed organic or scanned objects. Learning how to use the UV Editor effectively is an important step in creating high-quality textured models.

Use symmetry to your advantage. If a model is symmetrical, symmetry can sometimes speed up the process. You may be able to unwrap one half of the model and then mirror the results. This can save time, but it is important to remember that overlapping mirrored UVs are only appropriate in some workflows. If each side of the model needs unique painted detail, the UVs should remain separate.

When laying out your UVs, try to minimize distortion. This will help to ensure that the textures look good on the object.

### Basic Maya UV Mapping Workflow

Maya has a number of tools and features that make it easy to UV map your models. Here is a basic guide to UV mapping in Maya:

1. **Prepare your model.** Make sure that your model is clean and well-organized. This will make it easier to UV map. You may also want to consider using symmetry to simplify the process.
2. **Create UV shells.** UV shells are the basic building blocks of a UV map. They are 2D shapes that represent the different parts of your model. You can create UV shells manually or use one of Maya's automatic UV mapping tools.
3. **Unfold your model.** Once you have created your UV shells, you need to unfold them. This will flatten your model onto a 2D plane. You can use Maya's Unfold tool to do this.
4. **Layout your UV shells.** Once your model is unfolded, you need to layout your UV shells. This involves moving and resizing the shells so that they fit together efficiently and make best use of the texture space.
5. **Relax your UV shells.** Once you are happy with the layout of your UV shells, you can relax them. This will help to reduce any distortion in the UV map. You can use Maya's Relax tool to do this.
6. **Export your UV map.** Once your UV map is complete, you need to export it. This will create a file that you can use in your game engine or other software.

- [UV Map a Cube](https://youtu.be/BFf4L5vDR84)
- [Maya UV Planar Mapping Basics](https://youtu.be/X0KGwPadukE)
- [UV Unwrap Fast Auto Seams](https://youtu.be/8-TMjuvzZEU)
- [Maya 3D Cut and Sew](https://youtu.be/-KhoMBOqx0g)

<div class="video-grid">

<div class="video-card">

### UV Map a Cube

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/BFf4L5vDR84?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### Maya UV Planar Mapping Basics

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/X0KGwPadukE?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### UV Unwrap Fast Auto Seams

<div class="iframe-16-9-container">
<iframe class="youTubeIframe"  width="560" height="315" src="https://www.youtube.com/embed/8-TMjuvzZEU?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### Maya 3D Cut and Sew

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/-KhoMBOqx0g?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

</div>

## Basic Maya UV Workflow

A typical UV mapping workflow in Maya looks like this:

1. Model or import the object
2. Clean the mesh and check for symmetry if useful
3. Open the **UV Editor**
4. Create initial UV shells using automatic mapping or manual cuts
5. Use **Unfold** to flatten the shells
6. Use **Cut** and **Sew** to improve seam placement and shell structure
7. Arrange and scale the UV shells in the UV Editor
8. Check the result with a checker texture
9. Refine the UVs to reduce stretching and make better use of texture space

## Common Maya UV Tools

Some of the most useful UV tools in Maya include:

- **UV Editor** for viewing and editing the UV layout
- **Unfold** for flattening shells with less distortion
- **Cut** for adding seams
- **Sew** for reconnecting UV shells
- **Layout** for packing shells into UV space
- **Symmetrize** or mirrored workflows for some symmetrical models

These tools are often used together rather than separately.

## Common Problems to Watch For

When UV mapping in Maya, a few common problems can reduce texture quality:

- stretched or compressed UV shells
- inconsistent scale between shells
- overlapping UVs when unique texture space is needed
- too many unnecessary cuts from automatic mapping
- visible seams in important areas
- poor use of texture space
- mirrored UVs when the model actually needs unique detail on both sides

Applying a checker texture is one of the easiest ways to spot these problems before painting or baking textures.
