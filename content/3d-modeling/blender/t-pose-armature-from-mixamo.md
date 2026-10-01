---
title: T-Pose Armature From Mixamo
date: 2025-11-16T04:40:23
lastmod: 2026-10-01T06:46:32-04:00
tags:
  - Blender
  - Motion-Capture
  - Mixamo
---

<div class="video-grid">   - [How to Download T-Pose from Mixamo](https://youtu.be/cpR-j2gfZ6Q)

<div class ="video-card">

### [How to Download T-Pose from Mixamo](https://youtu.be/cpR-j2gfZ6Q)

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/cpR-j2gfZ6Q?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class ="video-card">

### [T-Pose Armature from Mixamo](https://youtu.be/48e2Gaq83x0)

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/48e2Gaq83x0?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

</div>

This guide shows how to upload a character mesh to [Mixamo](https://mixamo.com), place a few markers so Mixamo understands where the joints are, let it auto-rig and weight-paint, [download a T-pose](https://youtu.be/cpR-j2gfZ6Q) as an `FBX` with the armature and skin, and import that straight into [Blender](blender.md). It’s one of the quickest way to go from an “unrigged mesh” to a “mocap-ready armature” without setting up an entire rig by hand.

1. In Blender, make sure your mesh is one object and has a neutral pose.
2. Apply transforms so Mixamo sees clean values:
   - Object mode > select the mesh > Ctrl+A > Apply All Transforms
   - Remove any pre-existing armature modifiers if you’re starting from scratch
3. Export to FBX
   - File > Export > FBX.
   - Limit to Selected Objects if you’ve got a busy scene
   - Apply Transform on export if you need to zero things out
4. Go to the Mixamo website
   - Log in
   - Click Upload Character
5. Choose your FBX and upload. Mixamo will process the mesh for a moment.
6. If the preview looks rotated or tilted, use Mixamo’s alignment controls to straighten it before continuing. You want the character upright, facing front, arms relaxed.=
7. Place the auto-rig markers in Mixamo. I like leaving symmetry (mirror) on. Even if your character isn’t perfectly symmetrical, symmetry speeds up placement and you can nudge one side after initial setup by turning symmetry off.
   - Chin: center of the jawline under the mouth.
   - Wrists: right on the wrist joints-where the forearm meets the hand.
   - Elbows: the hinge point midway on each arm.
   - Knees: the hinge point midway on each leg.
   - Groin: where the legs meet the torso.
8. Choose the skeleton and fingers. Mixamo gives you a few skeleton options. Pick what matches your needs. Mixamo previews the joint layout so you can check it before committing.:
   - Standard skeleton: For complete meshes with fully modeled hands and fingers.
   - Three-chain fingers: Less finger joints than the Standard Skeleton but still has detailed hand motion.
   - Two-chain fingers: simpler hands and great for low-poly or stylized meshes.
   - No fingers: For simple models with no hands or no fingers.
9. Click Next and let Mixamo generate the rig. Under the hood, it’s placing an armature and auto-generating weight paints that bind your mesh to the bones. You’ll see a preview animation to confirm deformation. If elbows or knees look off, you can step back, nudge the markers, and try again.
10. Download clean T-pose from Mixamo. This gives you a neat T-pose FBX-perfect for importing to Blender or using as the target armature for retargeting later.
    - In Mixamo’s animation search, type tpose and select the T-pose entry.
    - Click Download.
    - Choose `FBX` for the format
    - Choose "With Skin: On" so you get the mesh, the armature, and the weights in one `fbx` file
11. Import the T-pose into Blender
    - In Blender, File > Import > FBX, choose the T-pose FBX.
    - In the FBX importer options, these toggles often help:
      - Armatures > Automatic Bone Orientation: On (reduces weird bone rolls).
      - Armatures > Ignore Leaf Bones: On (keeps the bone tree clean).
      - Apply Transform: On if you need Blender-friendly orientation.
12. Import. You’ll see your Mixamo-rigged character with its armature in T-pose.

### Optional Polish and Troubleshooting

- Not perfectly symmetrical? Keep symmetry on for placement, then fine-tune individual markers if elbows or knees aren’t lining up.
- Elbow/knee collapsing in preview? The hinge markers are usually too close to the joint. Pull them a touch toward the limb’s centerline and regenerate.
- Fingers deform strangely? Re-rig with the other finger option. Three-chain fingers can improve fidelity for detailed hand motion; two-chain keeps things clean for broad motion.
- Scale/orientation mismatch on import? Re-import the FBX with Apply Transform checked, or in Object mode use Ctrl+A to apply rotation/scale.
- Need only the armature in Blender? You can keep the Mixamo mesh hidden and transfer weights or retarget motion onto your original mesh by binding it to the Mixamo armature or by retargeting animation from Mixamo bones to your own rig.
