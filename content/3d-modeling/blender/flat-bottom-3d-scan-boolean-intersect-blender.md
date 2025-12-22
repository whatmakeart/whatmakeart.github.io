---
title: Flat Bottom 3D Scan with Boolean Intersect in Blender
date: 2024-10-26T06:33:27
lastmod: 2025-12-22T07:03:00
tags:
  - Blender
  - Tutorial
  - 3D-Modeling
---

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/GHersJCQUVc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

- [Flat Bottom with Boolean Intersect Tool in Blender](https://youtu.be/GHersJCQUVc)

<details>
<summary>

## Video Transcript

</summary>

In this blender tutorial, I'm going to show you how you can subtract from your 3D skin mesh with the Boolean tools inside blender to make a more manageable form. And I have a flat bottom. This is a 3D scanned mesh made with a structured light scanner. I want to have just the neck and not the shoulders.

In order to do that, I need to add a new mesh. So I'm going to look directly at my current mesh, then press shift a to get a mesh. And I'm going to select a cube. I can't see anything, so I'll zoom backwards with the scroll wheel and click the See-through icon up at the top. Here.

Next, press S x to scale the cube in the x direction, then s z to scale it in the z direction. Zoom in a bit, press gz to move it in the z direction and position it so it overlaps the parts of your mesh you want to keep it. Once you're happy with that, double check from the side to see if everything is inside. In this case, it is.

I may want to orient my mesh just a little bit, so I'll select the mesh, press R and then just rotate it a little bit straighter G to move it. And I think that will chop off the neck perfectly fine. I can turn off C through. The head is encased in the cube.

Select the scanned mesh or the part that you want to cut. Add a modifier under generate boolean. We don't want to use difference or union. We want to use intersect. This will keep the part of the model that's in both sections. The object we want to use is the cube.

Once it does this, we can hide the cube and you'll see that only the head remains. We need to apply this because I need to remesh this cleaned it up for inclusion in other projects, I select apply and now the boolean modifier is applied.

Once you've done this, you'll notice at the bottom of your mesh you have a large section that is undefined. You can simply press GZ to bring this down a little bit, so you have extra space to cut off and other programs tab out, and then you can remesh this object. So all of that is the same. Happy 3D modeling.

</details>
