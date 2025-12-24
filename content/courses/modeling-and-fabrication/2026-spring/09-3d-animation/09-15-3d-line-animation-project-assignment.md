---
title: 09.15 3D Line Animation Project Assignment
date: 2026-03-18T09:00:00-04:00
lastmod: 2025-12-23T14:56:48-04:00
---

## Line Animation Starter Project Files

- [Maya Line Animation Starter Project File](2025-Line-Animation-Maya.zip)
- [Blender Line Animation Starter Project Archive File](2025-Line-Animation-Blender.blend)

## Assignment Deliverables

1. Exported `.mp4` video file with .h264 compression of a 30 second 3D animation with sound
   - Label file YYYYMMDD Lastname Firstname 3D Line Animation.mp4
2. Blender file with all external resources packed `.blend` or Maya scene archive file `.zip` with all scenes and assets (.zip)
   - Label file YYYYMMDD Lastname Firstname 3D Animation Project File
3. Project Description and Credits Sheet (`.docx` or `.pdf`)
   - Label file YYYYMMDD Lastname Firstname 3D Animation Project Description and Credits.pdf

## Assignment Requirements

Create a 30 second long video composed in Adobe Premiere using images created and rendered in Blender or Maya

- Begin with "line" as first frame
- End with "line" as last frame
- Ease gradually away from first frame and ease gradually into last frame
- Include multiple animated sequences from Blender or Maya
- Use a minimum of 2 different camera angles and distances from subject
- Have UV mapped objects with textures created by you
- Show basic animation principles such as squash and stretch, movement in arcs, acceleration / deceleration, easing in / easing out
- Include sounds created by you

## Example Animation

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/jhpDobTmsHc?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

[Assignment Example Animation](https://youtu.be/jhpDobTmsHc)

## Objectives

<div class="two-column-grid">

<figure>

[![Blender Line Animation Frame](2025-blender-line-animation-frame.jpg)](2025-blender-line-animation-frame.jpg)

<figcaption>

Starting and Ending "Line" Animation Frame Rendered in Blender

[Blender Line Animation Starter Project File](2025-Line-Animation-Blender.blend)

</figcaption>
</figure>

<figure>

[![Maya Line Animation Frame](2025-maya-line-animation-frame.jpg)](2025-maya-line-animation-frame.jpg)

<figcaption>

Starting and Ending "Line" Animation Frame Rendered in Maya

[Maya Line Animation Starter Project Archive File](2025-Line-Animation-Maya.zip)

</figcaption>
</figure>

</div>

You are tasked with creating a captivating 30 second animation using Blender, or Maya, with self-created sound. The narrative will start and end with the exact same frame, simulating a single horizontal line drawn across the frame. The animations will be joined into a larger video with other students' animations. Each student will start and stop their animations with the same "line" frame so the animations seamlessly transition from one to another.

Composes an animation that navigates through an inventive 3D environment crafted by you, using modeling, texturing, and animating various elements within the setting. Through the creation of a story spine and storyboards, students will plan and execute their animation, leverage basic animation principles such as squash and stretch, and employing a minimum of two camera angles to add depth and interest. Designing and applying textures to the 3D objects using UV mapping and texturing tools, will add visual interest to your project. The incorporation of custom lighting and the strategic use of sound effects will be crucial in enhancing the overall impact of the animations.

## Process

1. Draft a [Story Spine](09-05-story-spines.md) that follows a basic narrative arc. This will give you guidelines and a plan to make your animation.
2. Use the story spine to draw [storyboards](09-06-storyboards.md) of the scenes and different camera angles that you want to use. Draw a page of storyboards to use a a guide for production.
3. Start with the animation template files that have the "background cube" and the "line." Keep the beginning and the end of the scenes as is but modify the rest of the frames and objects outside the view of the beginning and ending camera to create a 3D environment or "animation set" of 3D modeled objects. This environment should be real world scale and be interesting enough to use as a setting for your animation. You can model different items for your scene and combine the meshes and group them together. You can save the items all in one scene or save each item as a different scene and import them into your main scene.
4. Use the UV mapping editor in Maya to map the UVs of your objects Apply the Textures and edit as needed. You can also use Adobe's Substance Painter to add detailed textures. Smooth your object and then save it as an .obj file to import into Substance Painter. Then you can use all of the materials in Substance Painter.
5. Add lights to the scene.
6. Add multiple cameras to the scene. Animate camera(s) that travel through the scene in an interesting way.
   - [Camera Follow Curve in Maya](https://youtu.be/FYtc27jxIXg)
   - [Camera Follow Path in Blender](https://youtu.be/5EQdQdtg-ao)
7. Use a minimum of 2 different camera angles and shot types. Remember that the beginning and the ending of the animation must be exactly the same and show the horizontal line.
8. Use the animation principles of squash, stretch, exaggeration, anticipation and follow through.
   - [Set Keyframes Maya](https://youtu.be/T2zB0u4dZdU)
   - [Set Keyframes Blender](https://youtu.be/pNtni7oPrLU)
9. Apply textures to your objects.
10. Render your animation frames.
    - [Render Image Sequence in Maya](https://youtu.be/vxvIUBeTkL0)
    - [Render Animation in Blender](https://youtu.be/KUF6M9pmjak)
11. Import the animation frames as a image sequence into Adobe Premiere.
    - [How to Import Image Sequence into Premiere](https://youtu.be/X7w0xOprNDk)
12. Add sounds created by you and sound effects from Adobe's free Sound Effect Libraries
    - [Organize Sound Effects, Music, and Image Sequences](https://youtu.be/zf8IDYvvUkY)
    - [How to Add Sound and Music to 3D Animation](https://youtu.be/Ds2QJryBf84)
13. Export an .h264 `.mp4` video file

## Resources and Tips

- [List of Maya and Blender Tutorials](../../../../3d-modeling/blender-vs-maya.md)

### Blender

- Blender has two different render engines, Eevee and Cycles. Eevee generally renders faster but has less realistic lighting and images. Cycles renders slower but has more realistic light and material rendering.
- Set the maximum render duration of Cycles to ~10 seconds per frame to keep render times reasonable. Adjust up or down depending of the quality of render needed in the final output.

### Maya

- When adding lights to a Maya scene, make sure to only add "Arnold Lights." Do not use any of the older Maya lights.
- Remember that you will have to increase the exposure of the lights to make your render show up in the Arnold Renderer.
- Increase the render resolution to HD1080 in the render settings.
- If you can't render multiple images in Maya, you need to change the file extension in the render settings in order to [Render an Image Sequence](https://youtu.be/vxvIUBeTkL0)
- When using external image editors such as Photoshop to paint textures onto the UV snapshots exported from the UV Editor make sure to save the new textures to your "sourceimages" folder in your Maya project.

## Grading Rubric

<div class="responsive-table-markdown">

| Assessment                                   | Weight    |
| -------------------------------------------- | --------- |
| Start with Line Frame                        | 25 points |
| End With Line Frame                          | 25 points |
| Have Multiple Camera Angles / Shots          | 25 points |
| Show Basic Animation Principles              | 25 points |
| Use of Lighting                              | 25 points |
| UV Textures Applied to Objects               | 25 points |
| Use Sound Effects                            | 25 points |
| Project Description and Credits PDF Uploaded | 25 Points |

</div>
