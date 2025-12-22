---
title: Bridge Edge Loops 90 Degree Pipe Blender
date: 2024-08-25T06:41:48
lastmod: 2025-12-22T06:59:29
tags:
  - Blender
  - Tutorial
  - 3D-Modeling
---

<div class="container-16-9-iframe">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/9SCNEIp2Wp8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

This [Blender](../blender/blender.md) tutorial shows how to create a 90-degree bend between two pipe-like objects, specifically for making something like an Allen key, which is a hexagonal wrench. This method of bridging edge loops and adding modifiers is a powerful technique in Blender that you can use to create complex, smooth bends in various objects.

<details><summary>

## Bridge Edge Loops 90 Degree Pipe Video Transcript

</summary>

In this Blender tutorial, I'm going to show you how you can make a perfect 90 degree bend with even spacing between two pipe like objects. This is great if you're making any kind of sci fi object, or just want to recreate an object from the real world, such as a pipe elbow that bends at 90 degrees.

To get started, I'm going to press shift A create a new mesh. I'll make a cylinder. Then down in the options I'm going to select six because I'm going to be making kind of an allen key or a hexagonal key for using wrenches. Once I have this one, I can either duplicate it by pressing shift D, then G to move it straight up with the Z key, then press R to rotate the object. Press X for the x axis, then type 90. Now I can press G again, then y and move it along the y axis. Now I have the two pieces that I want to bridge together. I'll select them both and press Command or Control J to join them into a single object.

Press tab to go into edit mode in Blender and we need to get rid of these faces. So press three to select face mode, hold shift and select both faces. Now press X to delete and select faces. Press two to select edges. Now I'm selecting these edges. Hold the option or Alt key to select all of the edges. Then hold shift and select the other edges. Right click select Bridge Edge Loops automatically.

We get this right here. That is, bridge them. But to make it look better, go down to this menu in the lower left and add more cuts. We can add as many cuts as we want until we're happy with the results. This is already starting to look like a nice 90 degree bend on this Allen key.

Sometimes there may be some issues with what you've done. You may have your normals slipped, or there might be some vertices or extra edges on top of each other. Another thing that can happen is you might get something that's all weird like this. So if your profile is at a strange place, it can make strange shapes or reasons for this. But sometimes you may have been using the tool earlier and you forgot that you had these settings. So it's a good idea to go ahead and check this. If you want a perfect 90 degree bend in blender with bridge edge loops, make sure your profile factor is zero.

And I'll press 3 for face mode. And I'll extrude this straight down. Select this one G. Extend it out a bit. And now I have an Allen looking key. To make this a little bit more interesting I can fix up these edges because right now we can see all these facets. So if I right click and shade smooth I can shaded smooth. But because there's not enough geometry it doesn't look good.

So click the wrench for the modifiers add modifier generate bevel. Go ahead and increase the segments. And then for an Allen key this is kind of a little big of a bevel. So I'm going to decrease that bevel until I think it looks good. This is much more sharper for a tool. Then we can add a subdivision modifier by add modifier generate subdivision surface, add two subdivisions. And this already looks a lot better. And you can see that was much easier than modeling that myself. And I have a nice bend in this piece of steel to make an Allen key.

Hopefully this helps you bridge edge loops in Blender to create all the interesting geometry that you need for your project. Happy 3D modeling.

</details>
