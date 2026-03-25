---
title: 10.08 3D Animation Exercies Assignment
date: 2026-03-25T09:00:00-04:00
lastmod: 2026-03-25T08:57:26-04:00
---

## Assignment Deliverables

1. Exported video file with .h264 compression of a minimum 5 second animation
   - Label file YYYY-MM-DD Lastname Firstname 3D Animation (`.mp4`)
2. Blender file with all external resources packed _or_ Maya scene archive file with all scenes and assets
   - Label file YYYY-MM-DD Lastname Firstname 3D Animation Project File (`.blend`, `.zip`)

## Assignment Requirements

Create a minimum 5 second long video composed in Adobe Premiere using images created and rendered in [Blender](../../../../3d-modeling/blender/blender.md) or [Maya](../../../../3d-modeling/maya/maya.md).

- Include multiple animated objects from Blender or Maya
- Have UV mapped objects with textures
- Use keyframes to show at least 1 animation principle such as movement in arcs, acceleration / deceleration, easing in / easing out
- Add a minimum of 1 light
- Include sounds created by you

### Assignment Challenges

- Use a minimum of 2 different camera angles and distances from subject
- Leverage basic [animation](../../../../video/animation.md) principles such as squash and stretch.

## Objectives

Designing and applying textures to the 3D objects using UV mapping and texturing tools, will add visual interest to your project. The incorporation of custom lighting and the strategic use of sound effects will be crucial in enhancing the overall impact of the animations.

## Process

1. Apply textures to your objects.
   - [Maya UV / Texturing Exercise](https://youtu.be/D3q2HleBJIs)
   - [Blender UV / Texturing Exercise](https://youtu.be/OOmQNgawF8c)
2. Add light(s) to the scene.
3. Add a cameras to the scene. Animate camera that move in some way. Could be a simple keyframe move or follow a path.
   - [Camera Follow Curve in Maya](https://youtu.be/FYtc27jxIXg)
   - [Camera Follow Path in Blender](https://youtu.be/5EQdQdtg-ao)
4. Use at least 1 animation principle.
   - [Set Keyframes Maya](https://youtu.be/T2zB0u4dZdU)
   - [Set Keyframes Blender](https://youtu.be/pNtni7oPrLU)
5. Render your animation frames.
   - [Render Image Sequence in Maya](https://youtu.be/vxvIUBeTkL0)
   - [Render Animation in Blender](https://youtu.be/KUF6M9pmjak)
6. Import the animation frames as a image sequence into Adobe Premiere.
   - [How to Import Image Sequence into Premiere](https://youtu.be/X7w0xOprNDk)
7. Add sounds created by you and sound effects from Adobe's free Sound Effect Libraries
   - [Organize Sound Effects, Music, and Image Sequences](https://youtu.be/zf8IDYvvUkY)
   - [How to Add Sound and Music to 3D Animation](https://youtu.be/Ds2QJryBf84)
8. Export an .h264 `.mp4` video file

## Resources and Tips

- [List of Maya and Blender Tutorials](../../../../3d-modeling/blender-vs-maya.md)

### Blender

- Blender has two different render engines, Eevee and Cycles. Eevee generally renders faster but has less realistic lighting and images. Cycles renders slower but has more realistic light and material rendering.
- Set the maximum render duration of Cycles to ~5 seconds per frame to keep render times reasonable. Adjust up or down depending of the quality of render needed in the final output.

### Maya

- When adding lights to a Maya scene, make sure to only add "Arnold Lights." Do not use any of the older Maya lights.
- Remember that you will have to increase the exposure of the lights to make your render show up in the Arnold Renderer.
- Increase the render resolution to HD1080 in the render settings.
- If you can't render multiple images in Maya, you need to change the file extension in the render settings in order to [Render an Image Sequence](https://youtu.be/vxvIUBeTkL0)
- When using external image editors such as Photoshop to paint textures onto the UV snapshots exported from the UV Editor make sure to save the new textures to your "sourceimages" folder in your Maya project.

## Grading Rubric

<div class="responsive-table-markdown">

| Assessment                       | Weight    |
| -------------------------------- | --------- |
| Multiple Objects Animated        | 15 points |
| Camera Animated                  | 15 points |
| Multiple Objects Animated        | 15 points |
| Show 1 Basic Animation Principle | 15 points |
| Include 1 Light                  | 10 points |
| UV Textures Applied to Objects   | 10 points |
| Include 1 Sound Effect           | 10 points |
| File Management and Labeling     | 10 Points |

</div>
