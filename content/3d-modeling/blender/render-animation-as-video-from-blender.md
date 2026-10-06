---
title: Render Animation as Video from Blender
date: 2026-10-06T14:35:39-04:00
lastmod: 2026-10-06T14:48:53-04:00
---

<div class="video-grid">
<div class="video-card">

[Render Animation as Video from Blender](https://youtu.be/QK_kvmtHyXU)

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/QK_kvmtHyXU?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

</div>

Learn how to export an animation from [Blender](blender.md) as an MP4 video or a PNG image sequence. This tutorial walks through render settings, frame ranges, output folders, frame rates, and MPEG-4 encoding using a retargeted motion capture animation with multiple camera cuts.

Although image sequences offer more flexibility for editing and render crashes, sometimes a direct video export is useful for quickly sharing your animation.

<details>
<summary>

### Video Transcript

</summary>

In Blender, how do I export an animation? Here I have an animation from a mocap retargeting character in blender with a couple camera changes. These are simple cameras that are pointed in different directions, and they are bound to markers on the timeline. To bind a camera Just click the camera and press Ctrl or CMD B with your cursor over the timeline. I have a link in the description showing you how to do that in detail.

Once I have my animation plane here, I have two ways of exporting it. Notice that I have a start is not zero. Often we don't want to start on zero because maybe that's not where the action is. So I'm animating from 352 to 867. I need to do a couple settings to make sure we're exporting correctly.

First thing is to pick your render engine simple test animations like this. Eevee is really great because it'll render fast and won't be time consuming. You can also select Cycles, but that will take longer to render in most cases. Now I can go ahead and turn on ray tracing if I want. This will also take a bit longer in Eevee, but it can give you a better result depending on your scene is. It'll give all these gradients a nicer flow.

Next thing to do to go ahead and go to the output here. In the output I can choose my frame rate of 60 frames per second or 30 frames per second is perfectly fine for animation. Then most important, we want to choose where we're going to output it. If you see right here on this output tab, it defaults to this temporary directory. I want to click the folder. Then select a folder where I know it's going to be. Here I have a folder on my desktop called Animation Folder. That way I can export everything to the animation folder.

By default it's going to export as PNGs. You can change this to just RGB unless you need the alpha channel. Sometimes you want to export as an actual video. Its a little bit more dangerous. It's always safer to export as images and then import the images to a video editor as an image sequence, but sometimes we really want to see it as a video. Here I can select video if I click render animation it'll make a video.

But we need to change one other thing. Under encoding Instead of Matroska, we want to choose MPEG-4. This will allow it to be an MP4 video that you can automatically watch. Now I have all of those settings. It has my frame start and my frame end. I'm ready to render my animation. I can simply go to Render, Render animation.

Now it'll go through each frame and render that animation. Once it's done rendering, I'll have an MP4 video that I can import into my video editor. Again, generally we want to render image sequences. That way we have more flexibility in the end. But sometimes you just want to have a video so you can show people quickly and not have to open up a video editor and piece together all the image sequences. Hopefully this allows you render video straight from blender. Happy 3D modeling!

</details>
