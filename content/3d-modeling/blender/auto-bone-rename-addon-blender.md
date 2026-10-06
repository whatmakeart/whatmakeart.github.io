---
title: Auto Bone Rename Addon in Blender
date: 2026-10-05T21:06:49-04:00
lastmod: 2026-10-06T05:33:06-04:00
---

<div class="video-grid">

<div class="video-card">

[Auto Bone Rename Addon in Blender](https://youtu.be/GTG2_WLAyP0)

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/GTG2_WLAyP0?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>
</div>

Quickly rename bones in [Blender](blender.md) and build a Rokoko bone list for [motion capture retargeting](retarget-motion-capture-animation-with-rokoko-plugin.md). This tutorial demonstrates how to normalize Motive, OptiTrack, and Mixamo armature bone names so you can map bones and retarget animation with less manual setup.

When Rokoko’s `Build Bone List` leaves the bone mappings blank, inconsistent names and prefixes may be getting in the way. Using the Motive Mixamo Bone Normalizer add-on, you can preview name changes, remove prefixes, and normalize multiple selected armatures before building the bone list in Rokoko.

[How to Install Bone Normalizer Rename Add On Blender](install-bone-normalizer-remame-addon-blender.md)

<details>
<summary>

### Video Transcript

</summary>

How can we quickly rename bones and build a bone list with the Rokoko Motion cap retargeting plugin in Blender?

Normally when you select retargeting in Rokoko here I have a mesh with an armature and some mocap data. Normally to retarget this I have to select retargeting. Then my source armature will be this armature right here. Then I can select a source armature. then a target armature. I can select as armature over here. if I click Build bone list doesn't really do anything. It has bones here but they're all blank. It would be great if Mixamo could automatically notice which is which, and then match them automatically. I mean, left hand means left hand. Luckily there's an add on.

If I click on this retarget tab, can go ahead and select all the armatures that I want to automatically normalize and retarget. If I shift click all of these armatures here, under the retarget automatic rename add on I can select preview names. Then it's going to show it's going to label all these. You can see it removes the prefix. Then I just select Normalize Selected armatures.

Now if I select a Rokoko plugin I can just build the bone list. Here you can see they are all automatically added. That means I can just retarget the animation automatically. Here you can see that my animation is retargeting, what makes this really great that I can pause and then just choose a different armature, build the bone list. And since they're all normalized, I can instantly change between different motion capture characters then retarget the animation.

This is much simpler than manually renaming bones and saving custom presets, because this automatically works with all Mixamo and motive OptiTrack motion capture armatures.

Hopefully, you can quickly rename bones for motion retargeting from OptiTrack, Motive and Mixamo using the add on for bone normalization. Happy 3D modeling!

</details>
