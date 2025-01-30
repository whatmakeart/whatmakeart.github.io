---
title: 02.08 Photogrammetry Assignment
date: 2025-01-29T09:00:00
lastmod: 2025-01-30T09:00:09
---

## Assignment Deliverables

1. Upload Photogrametry Scan 3D Model file
   - If using Photocatch:
     1. Upload `.obj` file of photogrammetry scan
        - Label file YYYYMMDD Lastname Firstname model.obj
     2. Upload texture image file from photogrammetry scan (.jpg or .png)
        - Label file YYYYMMDD Lastname Firstname texture.png
     3. Upload `.mtl' file of photogrammetry scan
        - Label file YYYYMMDD Lastname Firstname material.mtl
   - If using Adobe Substance Sampler
     1. Upload the .usd file (Universal Scene Description)
        - Label file YYYYMMDD Lastname Firstname model.usd
2. Upload render image from Blender or Maya of Photogrammetry scan (.jpg or png)
   - Label file YYYYMMDD Lastname Firstname render image.png

## Process

1. Select an object for photogrammetry. This can be the original object that you made a mold of or a pulled slip-cast of from the mold.
2. Set you object on an approximately waist hig platform in a bright but flatly lit room. If a well lit room with even lighting is not available, then noon on a cloudy day outside works well.
3. Capture the object for photogrammetry:
   - Each part of the object must be taken from a minimum of two angles with overlapping information from other images.
   - A video from 360 degrees around the object. One pass should be a low angle, one pass should be perpendicular, and one pass should be from a high angle. Move steady, keeping the object in focus.
   - A series of photos taken from around the object works well. Fill the frame and make sure the object is in focus. One 360 pass from a low angle, one from perpendicular, and one from a high angle. You can take additional detail shots from closer in.
4. Use photogrammetry software to create a textured 3D mesh of your object.
5. Download the [prepared render scene for Blender](./02-07-import-3d-model-into-pedestal-render-scene-blender.md).
6. Import the mesh into Blender.
7. Scale and position the object on the virtual pedestal.
8. Clean up the mesh of unwated parts as needed.
9. Adjust the camera and lights.
10. Render and save an image.

<div class="video-grid">
<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/XLAeTAi-2gI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

## Assignment Resources

### FAQ

1. Hoq do I move an object in Blender? [Move objects in Blender](../../../../3d-modeling/blender/how-to-move-blender.md)
2. How do I rotate the object in Blender? [Rotate Video Guide](https://youtu.be/XLAeTAi-2gI&t=92)
3. How do I scale the object in Blender? [Scale Video Guide](https://youtu.be/XLAeTAi-2gI?&t=124)
4. How do I duplicate the object in Blender?
5. How do I see the textures on the object in Blender?
6. How do I move the camera in Blender? [Move Camera Video Guide](https://youtu.be/XLAeTAi-2gI?si=_BcabZNWRrZp9Yrf&t=163)
7. How do I change the lights in Blender? [Change Lights Video Guide](https://youtu.be/XLAeTAi-2gI&t=197)

### Photogrammetry 3D Model Creation

- [Photogrammetry with Adobe Substance Sampler](./02-05-photogrammetry-adobe-substance-sampler.md) - needs a folder of images
- [Photogrammetry with Photocatch](./02-05-photogrammetry-adobe-substance-sampler.md) - works with a video or a folder of images
- [Additional Photogrammetry Software](../../../../3d-modeling/photogrammetry-software.md)

### Working with Photogrammetry Models in Blender

- [Calibrate size of 3D Scanned Photogrammetry Mesh in Blender](https://youtu.be/MUb7I4lBSZs)
- [Rendering Basics in Blender](../../../../3d-modeling/blender/rendering-basics-blender.md)

### Exporting Frames from Video for Photogrammetry

- [Export Video Frames with Adobe Media Encoder](../../../../video/export-video-frames-as-images-adobe-media-encoder.md)
- [Export Video Frames as Images with Adobe Premiere Pro](../../../../video/adobe-premiere-pro/export-fames-as-images-premiere.md)

#### FFMPEG Commandline Video Frame Export

- [Install Homebrew Mac](../../../../coding/install-homebrew.md)
- [Export Video Frames with ffmpeg](../../../../video/export-frames-from-video-as-images-ffmpeg.md)
- [Export Only Keyframes from Video with ffmpeg](../../../../video/export-only-keyframes-from-video-as-images-ffmpeg.md)
