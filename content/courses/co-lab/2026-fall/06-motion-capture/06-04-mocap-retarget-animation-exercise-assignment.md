---
title: 06.04 Mocap Retarget Animation Exercise Assignment
date: 2026-09-30T12:00:00-04:00
lastmod: 2026-10-03T10:56:40-04:00
---

## Assignment Deliverables

1. Rendered video of original 3D character retargeted to Motion Capture Animation with sound
   - Label file YYYY-MM-DD Lastname Firstname Motion Capture Animation (`.mp4`)

### Requirements

- Minimum 1 retargeted Mocap Animation onto an original humanoid character
- Minimum 2 lights in the scene
- Minimum 2 additional 3D mesh objects in the scene _(For example: a plane and a cube)_
- Minimum 2 different camera angles
- Minimum 1 original sound effect created by you

## Assignment Overview

Use [Blender](../../../../3d-modeling/blender/blender.md) to [retarget motion capture](../../../../3d-modeling/motion-capture-retargeting.md) from Motive onto a character auto rigged in t-pose with Mixamo. In this assignment, you will connect raw motion capture data and final 3D character animation.

### Process

#### 1. Export as `FBX` for Auto Rigging with Mixamo

1. Prepare character for export from Blender.
   1. Create a duplicate Blender file and apply all modifiers.
   2. Join mesh objects into a single mesh.
      - [Blender Cylinder Character Single Mesh](https://youtu.be/h-QnVcXeKJ0)
   3. UV Unwrap and bake textures if needed.
2. Export an `fbx` version of your character from Blender. Open your Mixamo-rigged character in Blender and confirm that it is in a T-pose or A-pose with its textures connected.
   - [FBX Embed Textures Blender](https://youtu.be/cA2NO3riP8I)

#### 2. Auto Rig character with Mixamo.

1. Log in to [Mixamo](https://www.mixamo.com/) with your Adobe credentials.
2. Upload your exported `fbx` character to Mixamo.
3. Use Mixamo to auto rig your character. Choose the no fingers skeleton if your character does not have fingers.
4. Download rigged T-pose of character from Mixamo.
   - [T-Pose Armature From Mixamo](../../../../3d-modeling/blender/t-pose-armature-from-mixamo.md)

#### 3. Retarget Motion Capture with Rokoko Plugin in Blender

1. Create a free Rokoko account
   - [Create a free Rokoko Account](https://youtu.be/J53gs9C_0bw)
2. Install and enable the Rokoko plugin. Select the Motive armature as the source and the Mixamo character armature as the target.
   - [Install Rokoko Plugin in Blender 5.0 / 5.1](https://youtu.be/APki_ztXyvA)
3. Build and review the bone mapping, then retarget the motion onto the character.
   - [Retarget Motion Capture Animation with Rokoko Plugin](../../../../3d-modeling/blender/retarget-motion-capture-animation-with-rokoko-plugin.md)
4. Fix `AttributeError: 'Action' object has no attribute 'fcurves'`. If you get this error when clicking build bone list, then you need to install the Beta version of the Rokoko Plugin and restart Blender.
   - [How to Fix _AttributeError 'Action' object has no attribute 'fcurves'_](../../../../3d-modeling/blender/fix-attributeerror-action-object-has-no-attribute-fcurves.md)
5. Import the `FBX` motion-capture file exported from Motive.
   - [How to import mocap armature with Aligned Bones](../../../../3d-modeling/blender/fix-broken-armature-when-importing-motive-mocap.md)
6. Confirm that the animation plays.
7. Extend the length of the Blender animation beyond the default 250 frames so you can see the entire mo-cap animation.
   - [How to Extend the Blender Timeline](../../../../3d-modeling/blender/extend-frames-on-timeline-blender.md)

#### 4. Render and Export Animation from Blender

1. Trim the timeline to the strongest section by setting the beginning and end frames.
   - [How to Set Start and End Frames in Blender](../../../../3d-modeling/blender/set-start-and-end-frames-blender.md)
2. Add at least two lights and two additional mesh objects, such as a ground plane and a cube, to establish a simple 3D environment.
3. Create at least two cameras. Switch camera angles with timeline markers. To bind a camera on the timeline, position the playhead on the desired frame, hover your mouse in the timeline, press Control + B or Command + B and that camera will be set on the timeline. Move the playhead to a new frame, select the second camera and press Control + B or Command + B.
   - [How to Use Multiple Cameras in Blender Animation](../../../../3d-modeling/blender/multiple-camera-angles-animation-blender.md)
4. Render the finished animation as an `MP4` with sound. Watch the exported file before submitting it to confirm that the animation, camera changes, lighting, and audio rendered correctly.
   - [Render Animation Sequence Blender](../../../../3d-modeling/blender/render-animation-sequence-blender.md)
5. Import the exported animation frames into [Adobe Premiere](../../../../video/adobe-premiere-pro/adobe-premiere.md) as an Image Sequence. You need to import as an image sequence so it plays like an animation in Premiere.
   - [Adobe Premiere Import Image Sequence](../../../../video/adobe-premiere-pro/import-image-sequence-adobe-premiere.md)
   - [Change Frame Rate Adobe Premiere](../../../../video/adobe-premiere-pro/change-frame-rate-adobe-premiere.md) to match Blender animation if needed to speed up or slow down animation in Premiere.
6. Add at least one original sound effect and synchronize it with the movement.
   - [Adobe Premiere Add Music and Sound](../../../../video/adobe-premiere-pro/adobe-premiere-add-music-and-sound.md)
7. Export `.mp4` with Sound Effects from Adobe Premiere.
   - [Export Video from Adobe Premiere](../../../../video/adobe-premiere-pro/export-video-adobe-premiere.md)

## Assignment Resources

### Mocap Retargeting

<div class="video-grid">

<div class="video-card">

#### [T-Pose Armature From Mixamo](../../../../3d-modeling/blender/t-pose-armature-from-mixamo.md)

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/cpR-j2gfZ6Q?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

#### [How to Install the Rokoko Plugin for Blender](../../../../3d-modeling/blender/install-rokoko-plugin-for-blender.md)

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/APki_ztXyvA?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

#### [Retarget Motion Capture Animation with Rokoko Plugin](../../../../3d-modeling/blender/retarget-motion-capture-animation-with-rokoko-plugin.md)

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/fEwmjBCrJ88?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

#### [How to import mocap armature with Aligned Bones](../../../../3d-modeling/blender/fix-broken-armature-when-importing-motive-mocap.md)

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/a4kJnGC2__0?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

#### [Fix AttributeError 'Action' object has no attribute 'fcurves'](../../../../3d-modeling/blender/fix-attributeerror-action-object-has-no-attribute-fcurves.md)

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/kKSy7bpu7xk?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

#### [How to Extend the Blender Timeline ](https://youtu.be/u53X88pXGuw)

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/u53X88pXGuw?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

#### [How to Set Start and End Frames in Blender](../../../../3d-modeling/blender/set-start-and-end-frames-blender.md)

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/zp4Jc3BGg3k?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

#### [How to Use Multiple Cameras in Blender Animation](../../../../3d-modeling/blender/multiple-camera-angles-animation-blender.md)

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/zQ6yNGFbZqM?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

#### [Render Animation Sequence Blender](../../../../3d-modeling/blender/render-animation-sequence-blender.md)

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/KUF6M9pmjak?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

#### [Adobe Premiere Import Image Sequence](../../../../video/adobe-premiere-pro/import-image-sequence-adobe-premiere.md)

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/X7w0xOprNDk?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

#### [Adobe Premiere Add Music and Sound](../../../../video/adobe-premiere-pro/adobe-premiere-add-music-and-sound.md)

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/Ds2QJryBf84?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

#### [Export Video from Adobe Premiere](https://youtu.be/O5KaEQGW0CQ)

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/JCawZdzQgFA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

</div>

## Grading Rubric

<div class="responsive-table-markdown">

| Assessment                                    | Weight    |
| --------------------------------------------- | --------- |
| 3D Character Retargeted to Mocap Animation    | 30 points |
| Minimum 2 Lights in Scene                     | 15 points |
| Minimum 2 Additional 3D Mesh Objects in Scene | 15 points |
| Mocap Character in Frame                      | 15 points |
| Sound Effect Added                            | 15 points |
| File Management and Labeling                  | 10 Points |

</div>
