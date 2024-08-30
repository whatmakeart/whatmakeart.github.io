---
title: HDRI Background - Blender
date: 2023-04-26T8:30:00-04:00
lastmod: 2024-08-30T06:37:12
description: How to add an HDRI background environment texture to your Blender 3D modeling scenes.
featured_image: /3d-modeling/blender/attachments/blender-hdri-background.jpg
tags:
  - Blender
  - 3D Modeling
  - HDRI
  - Tutorial
---

<div class="video-grid">
<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/VaGfn4i5dKQ?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/k-moDmBUrrI?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

## How to Add an HDRI Background Environment in Blender

HDRIs are a great way to add a photorealistic look to your renders, and they can also be used to create interesting lighting effects.

Start by creating a new scene and adding a cube to the scene. Then, we will add an HDRI to the background using the World settings.

## Instructions

1. Open Blender.
2. Create a new scene.
3. In the World settings, click on the "Environment Texture" node.
4. Click on the "Open" button and select an HDRI image file.
5. The HDRI will now be applied to the background of the scene.

## Tips

- Use the lowest resolution HDRI image for the level of detail needed in the scene to keep render times low.
- Experiment with different HDRI image files to create different looks for your scenes.
- Use this technique to add realistic and interesting HDRI backgrounds to your renders.

<details><summary>

## Add HDRI to Blender Video Transcript 1

</summary>

How do you add an HDRI image to a Blender scene? This Blender tutorial will show you everything you need to know to add an HDRI image to your Blender scene so you can get nice reflections and other lighting that comes from using HDRIs and 3D modeling.

An HDRI has a high dynamic range of lighting information and information from 360° that you can use to light your scene. Blender comes up with a few of these installed by default. Right now with the default cube, I am in the normal shading mode. Here if I go to material preview by clicking this button in the top right it will show the material preview and if I click on materials and then change the metallic to 100%, and then lower the roughness. Where is that coming from? That's coming from right here. We can go ahead and select different HDRIs that are built into Blender but these won't show up in your render.

So how can we get one to show up in our render view. Watch if I click the render preview right now I'm in Eevee but even if I switch to Cycles notice that nothing comes in. So first we need to click on the World Tab and then click on Color. Then select Environment Texture. Everything turns purple because we don't have any HDRI selected.

So where can we get an HDRI? You can create your own. You can even just use a photos sphere that you've created with your cell phone but you can also get lots of free public domain creative commons zero HDRIs from PolyHaven. Go ahead to a web browser type in HDRI into Google and then go to PolyHaven. They have a number of HDRIs that you can use for free for commercial projects. So let's go ahead and take a look.

We can go ahead and see an urban scene, maybe something high contrast and look at this night scene right here, the Golden Bay. I'm going to go ahead and download that. Please note that you can download up to 24K images. Most of the time that's way overkill if you just need some reflections and ambient light that's coming into your project. In fact even 4K can be overkill and you'll probably get away with 1 or 2K images and that will really keep your render times in Blender down when adding complex HDRIs to your project. So I'm going to download the 2K version.

Navigate back to Blender and then click open under Environment Texture to add the HDRI image to your Blender scene. Here I have the Golden_Bay_2K.exr I'll click on that and then I'll open the image. Automatically we start to see that the HDRI is included in our render and you can see how all the light is reflected now onto our little cube. Ff we add other objects such as a plane you can see how the light reflects onto the plane, effects the quality of the shadows, and we can still see lots of that HDRI especially up in the top here it's reflecting the sky. If we were to subdivide this and make it more of a round object, so for example if I add subdivision surface and then click shade smooth.
We now have this sphere that is reflecting the HDRI as well as the bottom background.

So hopefully this helps you add HDRIs to your Blender project so you can have nice great reflections and extra ambient light to make your Blender scenes and renders seem even more real. Happy 3D modeling.

</details>
