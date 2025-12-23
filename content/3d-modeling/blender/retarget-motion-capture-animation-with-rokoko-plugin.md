---
title: Retarget Motion Capture Animation with Rokoko Plugin
date: 2025-09-30T17:53:52
lastmod: 2025-12-23T10:12:35-04:00
tags:
  - Blender
  - Motion-Capture
  - Rokoko
---

<div class="video-grid">
<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/fEwmjBCrJ88?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

[Retarget Motion Capture Animation with Rokoko Plugin](https://youtu.be/fEwmjBCrJ88)

## Mocap Retargeting Instructions

1. Import your target character armature into [Blender](blender.md). This is the character that will receive the mocap animation. Having this character armature in a T-pose is ideal. [How to make a quick T-Pose Armature](t-pose-armature-from-mixamo.md)
2. Import the captured mocap animation FBX into Blender correctly.
   - Go to File → Import → FBX and navigate to your motion-capture animation file.
   - Before you click Import, open the Armature options in the FBX importer and enable Automatic Bone Orientation. [How to import mocap armature with Aligned Bones](fix-broken-armature-when-importing-motive-mocap.md)
   - Then click Import FBX.
3. Make sure the Rokoko plugin is installed in Blender. [How to Install the Rokoko Plugin in Blender](install-rokoko-plugin-for-blender.md)
4. Press the `n` key while your cursor is in the 3D Viewport to open the Rokoko side panel. Switch to the Rokoko tab.
5. Move the playhead to frame 1 in the timeline so you have a consistent starting point.
6. Select the imported mocap armature, this is your source animation. Select the green armature/figure icon on the right of the screen. Then set the armature to its Rest Position. You should see the mocap skeleton pop into a T-pose, matching your character’s T-pose. Having both armatures in the same pose is key for a clean retarget.
7. In the Rokoko Retarget panel:
   - Set Source Armature to the imported mocap armature.
   - Set Target Armature to your character’s armature.
8. Click Build Bone List. Rokoko will try to auto-match bones based on their names.
9. If your rigs use similar naming, most entries will line up automatically. If bones are missing or mismatched, use the slots to correctly match the bones even if the names are different the bones must match.
10. In the Rokoko Retarget panel, choose how to handle scale. Auto Scale often works well or you can manually set scale if your rigs are wildly different sizes. For Pose State, select Rest Pose since both armatures art in T-pose/rest.
11. Click Retarget Animation.
12. You may notice your character jump away from the world origin. That's likely ok. Mocap systems often track in their own coordinate space with a distinct origin point. When the data comes into Blender and gets transferred to your rig, the rig inherits that offset. If you need your character at Blender’s origin, you can parent it to an empty after retargeting.
13. Hide the original mocap armature.
14. Press play. You should see your character performing the motion from the FBX.

## Troubleshooting

1. The import looks twisted or rotated strangely.
   - Re-import the FBX with `Automatic Bone Orientation` enabled.
2. The retargeted motion looks offset or scaled oddly.
   - Use `Auto Scale` in the Rokoko panel, or manually tweak scale until the limbs line up.
3. Some limbs don’t move or move incorrectly.
   - Open the bone list and check those specific mappings. A single wrong shoulder/elbow/knee assignment can break a bone chain.

<details>
<summary>

### Video Transcript

</summary>

How do you quickly retarget motion capture animations to an armature in Blender? Here I have a space suit armature that's in T pose, but it doesn't have any animation on it. I want to use an animation armature that I captured with motion capture, with the mode of an object track system, and then have it go on to this character in Blender. How do I do that?

First, let's import our motion capture animation. Go to File Import. Navigate to where your mode of motion capture animations are. Select the one you want to import and then the most important step is under armature. Make sure you select automatic bone orientation. If you don't do this, it will come in and be all messed up. Select import FBX. Now we have the FX imported, but how do I get this FBX to control this armature? We can use our Coco plugin in Blender to do that. Press and on your keyboard to bring out this window. Then select Rokoko. If you don't have the Rokoko plugin installed, I have a link in the description showing you how.

Down here we have retargeting for we retarget. We want to reset this animation, so I'll pause. Go back to frame one. Select this motion capture animation armature that you're going to use for retargeting. Then select pose and go to the rest position. Notice that now this motion capture animation that we'll use for retargeting is in a T pose, just like our character. Now I need to select the source armature. I'll select this armature. Then for the target armature I'll select this armature. Then I'll build the bone list.

If I look down here because I selected the armature is with the eyedropper. And they have very similar names. Most of the bones are already lined up. If this isn't the case, it's very simple. For example, if I didn't have right shoulder selected, I could just search for shoulder and then select right shoulder. So hopefully you have similar names in your armatures for motion capture. But if you don't, it's easy to redo. Then if I scroll down in the Rokoko Studio plugin for Blender, I can select auto scale or scale them myself. And then I want to select if it's in the rest pose or a current pose. Since we're in the rest pose, I'll leave it at rest and then retarget the animation.

Notice that everything jumped away from the origin. That's because Motive tracks everything from an origin. Now, if I press and hide that and I press play, check it out. We have retargeted motion capture animation.

Hopefully this allows you to retarget your motion capture animation from Motive and RPG track systems into your armatures and characters inside Blender. Happy 3D modeling and motion capture.

</details>
