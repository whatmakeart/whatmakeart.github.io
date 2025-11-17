---
title: T-Pose Armature From Mixamo
date: 2025-11-16T04:40:23
lastmod: 2025-11-17T05:50:58
tags:
  - Blender
  - Motion Capture
  - Mixamo
---

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/48e2Gaq83x0?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

[T-Pose Armature From Mixamo](https://youtu.be/48e2Gaq83x0)

This guide shows how to upload a character mesh to Mixamo, place a few markers so Mixamo understands where the joints are, let it auto-rig and weight-paint, download a T-pose as an FBX with the armature and skin, and import that straight into Blender. It’s one of the quickest way to go from an “unrigged mesh” to a “mocap-ready armature” without setting up an entire rig by hand.

1. In Blender, make sure your mesh is one object and has a neutral pose.
2. Apply transforms so Mixamo sees clean values:
   - Object mode > select the mesh > Ctrl+A > Apply All Transforms.
   - Remove any pre-existing armature modifiers if you’re starting from scratch.
3. Export to FBX works great:
   • File > Export > FBX.
   • Limit to Selected Objects if you’ve got a busy scene.
   • Apply Transform on export if you need to zero things out.
   • Forward: -Z Forward, Up: Y Up is a safe default for Blender→FBX.
4. Go to the Mixamo website, log in, click Upload Character.
5. Choose your FBX and upload. Mixamo will process the mesh for a moment.

If the preview looks rotated or tilted, use Mixamo’s alignment controls to straighten it before continuing. You want the character upright, facing front, arms relaxed.

Step 3 — Place the auto-rig markers
Mixamo shows a few draggable markers. Place them carefully:
• Chin: center of the jawline under the mouth.
• Wrists: right on the wrist joints—where the forearm meets the hand.
• Elbows: the hinge point midway on each arm.
• Knees: the hinge point midway on each leg.
• Groin: where the legs meet the torso.

I like leaving symmetry (mirror) on. Even if your character isn’t perfectly symmetrical, symmetry speeds up placement and you can nudge one side after.

Step 4 — Choose the skeleton and fingers
Mixamo gives you a few skeleton options. Pick what matches your needs:
• Standard skeleton: general use.
• Three-chain fingers: more finger joints for detailed hand motion.
• Two-chain fingers: simpler hands; great for low-poly or stylized meshes.

For a simple mesh, two-chain fingers keeps things tidy and less noisy when you retarget. Mixamo previews the joint layout so you can sanity-check it before committing.

Step 5 — Generate the rig
Click Next and let Mixamo do its thing. Under the hood, it’s placing an armature and auto-generating weight paints that bind your mesh to the bones. You’ll see a preview animation to confirm deformation. If elbows or knees look off, you can step back, nudge the markers, and try again.

Step 6 — Grab a clean T-pose from Mixamo
In Mixamo’s animation search, type tpose and select the T-pose entry. With the T-pose active:
• Click Download.
• Format: FBX.
• With Skin: On (this ensures you get the mesh, the armature, and the weights all together).

This gives you a neat T-pose FBX—perfect for importing to Blender or using as the target armature for retargeting later.

Step 7 — Import the T-pose into Blender

1. In Blender, File > Import > FBX, choose the T-pose FBX.
2. In the FBX importer options, these toggles often help:
   • Armatures > Automatic Bone Orientation: On (reduces weird bone rolls).
   • Armatures > Ignore Leaf Bones: On (keeps the bone tree clean).
   • Apply Transform: On if you need Blender-friendly orientation.
3. Import. You’ll see your Mixamo-rigged character with its armature in T-pose.

If you still have your original unrigged mesh in the scene, move the new imported rig slightly to the side so you can compare. You’ll notice its proportions match the mesh, and weight paints are already in place.

Why this is handy for mocap
• Mixamo’s armatures are a common denominator. Many mocap sources and retargeting tools already speak “Mixamo,” so mapping from various mocap skeletons to this armature is straightforward.
• You get consistent naming and hierarchy. That predictability speeds up retargeting with Blender’s Retarget addon or other tools.
• It’s fast. When the goal is motion transfer—not building a custom control rig—this path gets you animating right away.

Optional polish and troubleshooting
• Not perfectly symmetrical? Keep symmetry on for placement, then fine-tune individual markers if elbows or knees aren’t lining up.
• Elbow/knee collapsing in preview? The hinge markers are usually too close to the joint. Pull them a touch toward the limb’s centerline and regenerate.
• Fingers deform strangely? Re-rig with the other finger option. Three-chain fingers can improve fidelity for detailed hand motion; two-chain keeps things clean for broad motion.
• Scale/orientation mismatch on import? Re-import the FBX with Apply Transform checked, or in Object mode use Ctrl+A to apply rotation/scale.
• Need only the armature in Blender? You can keep the Mixamo mesh hidden and transfer weights or retarget motion onto your original mesh by binding it to the Mixamo armature or by retargeting animation from Mixamo bones to your own rig.
