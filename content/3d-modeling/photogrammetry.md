---
title: Photogrammetry
date: 2024-09-25T05:06:07
lastmod: 2025-12-23T10:12:35-04:00
---

Photogrammetry is a useful tool for capturing 3D Geometry and visual texture information from the real physical world. [Photogrammetry software](photogrammetry-software.md) uses multiple 2D images takes from different yet overlapping angles to create a 3D mesh with textures. It is accessible with little more than a cell phone camera needed for compelling results. While purpose built, industrial photogrammetry rigs and workflows can achieve a high level of accuracy, general photogrammetry often produces stunning visual textures but underwhelming 3D geometry. To achieve the highest physical detail and most accurate 3D model from the real world, [3D scanning](3d-scanning.md) is recommended.

## Photogrammetry Best Practices

- Keep the object in focus. Ensure that the aperture of your camera is small enough to have a wide depth of field. A high F-stop such as F-22, which has a small aperture, will give a deep depth of field.
- Use a high shutter speed.
- Refer to [basic camera settings](../photography/basic-camera-settings.md) for more information about setting up a camera for photogrammetry.
- Add multiple scale references. Lay down rulers, markers and other scale calibration devices near the object or location to scan. Make sure to capture the scale devices in detail so they can be used to tell the software what the real world scale and dimensions are. It is best to use long scale distances to improve accuracy. If you lay down a 2 meter measuring stick, then use the full 2 meters to set scale, rather than just a few millimeters or centimeters, even if the object is small.

### Specialized Photogrammetry Equipment

Equipment built specifically for photogrammetry capture can speed up the process and result in extremely high quality scans. Cameras can be controlled by software and automated for repeatable 3d capture of objects. Controlled and consistent lighting give great high resolution texture detail.

#### Photogrammetry Lightboxes

- [Otery 3D Photobench 180](https://ortery.eu/photography-equipment/product-photography-systems/3d-photobench-180/)
- [Ortery 3D Multiarm 1000](https://ortery.eu/photography-equipment/3d-product-photography/3d-multiarm-1000/) - Useful for capturing highly detailed photogrammetry of small objects such as jewlery and small electronics.

## Photogrammetry Tutorials

### Software Guides

- [Photogrammetry with Photocatch](../3d-modeling/photogrammetry-with-photocatch.md) - works with a video or a folder of images
- [Photogrammetry with Adobe Substance Sampler](../3d-modeling/photogrammetry-with-adobe-substance-sampler.md) - needs a folder of images _Note: Substance 3D Sampler removed 3D Object creation in version 5.1 but it is still included in version 5.0 and earlier._

### Exporting Frames from Video for Photogrammetry

- [Export Video Frames with Adobe Media Encoder](../video/export-video-frames-as-images-adobe-media-encoder.md)
- [Export Image Sequence from Adobe Premiere](../video/adobe-premiere-pro/adobe-premiere.md)
- [Export only Keyframes with ffmpeg Video Tutorial](../video/export-only-keyframes-from-video-as-images-ffmpeg.md)
- [Export Frames from Video as Images with ffmpeg](../video/export-frames-from-video-as-images-ffmpeg.md)

### Working with Photogrammetry Created 3D Meshes

- [Calibrate Photogrammetry Scanned Object Scale in Blender](photogrammetry-with-photocatch.md)
- [Place 3D Models in 2d Photos with Blender](blender/place-3d-model-in-2d-photo-blender-fspy.md)
