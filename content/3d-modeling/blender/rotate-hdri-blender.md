---
title: Rotate HDRI in Blender
date: 2024-08-30T16:01:04
lastmod: 2025-12-23T10:12:35-04:00
---

<div class="container-16-9-iframe">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/B013GO9Xy1o?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Often after [adding an HDRI](hdri-background-blender.md) to [Blender](blender.md) scene it is ofter necessary to rotate the HDRI so it matches the desired lighting direction. Rotating an HDRI in Blender is straightforward using a texture coordinate node in the World shading tab.

<details>
<summary>

## How to Rotate an HDRI in Blender Video Transcript

</summary>

How many times have you found a great HDRI image to use in Blender to light your scene only to find out that the sun or the lights aren't in the right spot so the shadows just aren't correct. You have a shadow falling down on your amazing 3D model and the HDRI is just in position in Blender. How can you rotate an HDRI in Blender so you don't have this problem?

In order to rotate an HDRI go to the shading tab. Then instead of selecting objects, click world. Now we have access to the background texture that is the HDRI. We need to add a couple nodes. Press shift a, search for texture coordinate, then we need a mapping node. Press shift a again, search mapping.

Then we can simply plug the generated from the texture coordinate node into the vector of the mapping then the vector node from the mapping into the vector of the exr or our environment texture. Switch to render preview. Look through the camera.

Now if I rotate on the z-axis you'll see that the environment texture rotates around so now I can completely position my HDRI. In fact I can even rotate it on the X and Y axis if I want to have a more dramatic sunlight. So this is a really nice way to take those beautiful HDRI images and then rotate them so they work more for what you need for your particular scene.

Hopefully this helps you rotate HDRI images in in Blender. Happy 3D modeling!

</details>
