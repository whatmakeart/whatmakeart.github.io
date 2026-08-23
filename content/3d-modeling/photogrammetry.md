---
title: Photogrammetry
date: 2024-09-25T05:06:07-04:00
lastmod: 2026-08-23T15:25:22-04:00
---

Photogrammetry is a useful tool for capturing 3D geometry and visual texture information from the real physical world. [Photogrammetry software](photogrammetry-software.md) uses pixel point information from multiple 2D images takes from different but overlapping camera positions to calculate a 3D mesh with textures.

Photogrammetry is accessible because compelling results can be produced with little more than a cell phone camera. Purpose built, industrial photogrammetry rigs and workflows can achieve a high level of accuracy, general photogrammetry often produces stunning visual textures but potentially underwhelming 3D geometry. To achieve the highest physical detail and most accurate 3D model from the real world, [3D scanning](3d-scanning.md) is recommended.

## Photogrammetry Best Practices

- Fill the camera frame with the object to efficiently use the available camera resolution. This give more photographic data to work with as well as reduces processing of pixels from the background that are not part of the scan
- Overlap photos by 60% - 70% for good scan coverage
- Keep the object in focus. Ensure that the aperture of your camera is small enough to have a wide depth of field. A high F-stop such as F-22, which has a small aperture, will give a deep depth of field.
- Keep the same focus setting, don't change the focus if possible
- Keep a wide depth of field, or a larger section that is in focus. In general for the same camera aperture a wider depth of field is possible the farther aay the object and focal plane is from the camera
- Avoid changing the zoom on the camera since it will create calculation errors, keep the zoom fixed across all photos
- Use a high shutter speed to avoid blurry images
- Refer to [basic camera settings](../photography/basic-camera-settings.md) for more information about setting up a camera for photogrammetry.
- Add multiple scale references. Lay down rulers, markers and other scale calibration devices near the object or location to scan. Make sure to capture the scale devices in detail so they can be used to tell the software what the real world scale and dimensions are. It is best to use long scale distances to improve accuracy. If you lay down a 2 meter measuring stick, then use the full 2 meters to set scale, rather than just a few millimeters or centimeters, even if the object is small.
- For the most predictable results, use uncropped original images with identical pixel dimensions. Avoid individually cropping, resizing, warping, perspective-correcting, or applying different edits to photographs before reconstruction.
- You can either move the object with camera stationary or move camera and keep object stationary.
- Shoot on cloudy days if shooting outdoor objects or scenes since the clouds provide even lighting without harsh shadows.
- If possible move the camera around an object in a circular or spiral path to ensure consistent and even coverage without missing anypare of the object.
- Elevate objects off the ground with a post or armature to make it easier to capture low angle photos.

### Keep Camera Settings Consistent

Consistent images are easier for photogrammetry software to compare. When possible, use manual exposure and keep the aperture, shutter speed, ISO, focus, focal length, and white balance consistent throughout the capture.
Automatic exposure can cause the same surface to appear significantly lighter or darker in different photographs. Automatic white balance can similarly change surface colors during the sequence.

Disable unnecessary computational photography effects when possible. Portrait mode, artificial background blur, beauty filters, aggressive HDR processing, and other effects that alter the geometry or appearance of individual images can interfere with reconstruction.

Use the highest useful image resolution available and preserve the original files. Avoid sending photographs through messaging or social media services that significantly reduce their resolution or compress them before reconstruction.

### Create Parallax

Parallax is essential for calculating three-dimensional depth. Rather than standing in one location and turning the camera toward different parts of the subject, move the camera through space.

For a wall or relatively flat surface, translate the camera parallel to the wall while keeping it approximately perpendicular to the surface. For a freestanding object, move around the object in circular or spiral paths while also changing camera height.

Photographs taken from exactly the same camera position but pointed in different directions may provide good panoramic coverage, but they provide little information for calculating depth.

<figure>

![Photogrammetry Create Parallax](./attachments/2026-08-23-photogrammetry-no-panning-create-parallax-guide-whatmakeart.jpg)

<figcaption>

Do not rotate the camera in position, move the camera to the side to create parallax.

</figcaption>
</figure>

### Small Objects

For a small freestanding object, make several complete passes around the object at different heights. Capture a middle-height ring, a lower ring angled upward, and a higher ring angled downward.

Add photographs looking toward the top of the object and additional close-range passes for small details.

If possible, elevate the object so the lower edges and underside can also be photographed.

### Large Sculptures and Freestanding Objects

Walk completely around the object several times at different camera heights. Maintain similar camera-to-object distance within each pass and make sure each ring overlaps the rings above and below it.

For very large objects, additional closer passes can capture areas requiring more surface detail.

Pay particular attention to undercuts, overlapping forms, deep recesses, and areas where one part of the sculpture blocks another.

<figure>

![Photogrammetry Object Shooting Technique](./attachments/2026-08-23-photogrammetry-object-shooting-technique-guide-whatmakeart.jpg)

<figcaption>

Take pictures 360° around the object from multiple heights change the position and angle of the camera along the circular path.

</figcaption>
</figure>

### Walls and Relief Surfaces

Move the camera parallel to the wall in a grid-like pattern rather than standing in one location and panning.

Keep the camera approximately perpendicular to the surface whenever practical. Make multiple horizontal or vertical passes with substantial overlap between neighboring photographs and between rows.

Additional passes at different distances can help connect overall geometry with high-resolution detail.

<figure>

![Photogrammetry Wall Workflow Guide](./attachments/2026-08-23-photogrammetry-wall-workflow-guide-whatmakeart.jpg)

<figcaption>

Keep the camera approximately perpendicular to a wall. Make multiple parallel passes at different heights and distances while maintaining substantial overlap.

</figcaption>
</figure>

### Rooms and Interior Spaces

Interior spaces require photographs that connect walls, corners, floors, ceilings, doorways, and architectural features into one continuous reconstruction.

Move physically through the room rather than standing in the center and creating a panorama. Make overlapping passes along the room perimeter and photograph the surrounding architectural surfaces.

Corners are especially useful because they visually connect multiple planes of the room. Make sure there is substantial overlap between photographs of neighboring walls and between wall, floor, and ceiling surfaces.

Large blank walls may be difficult to reconstruct because they contain few recognizable features.

<figure>

![Photogrammetry Room Workflow Guide](./attachments/2026-08-23-photogrammetry-room-workflow-guide-whatmakeart.jpg)

<figcaption>

Move around the perimeter of an interior space while photographing the surrounding walls, corners, floor, ceiling, and architectural features. Maintain substantial overlap between neighboring views.

</figcaption>
</figure>

### Is the Object Suitable for Photogrammetry?

1. Is the object stationary?
2. Is its surface matte enough to photograph consistently?
3. Does it have visible texture and features?
4. Can I photograph most of its surfaces?
5. Can I keep lighting and camera settings reasonably consistent?

### Specialized Photogrammetry Equipment

Equipment built specifically for photogrammetry capture can speed up the process and produce extremely high-quality scans. Cameras can be controlled by software and automated for repeatable 3D capture of objects. Controlled and consistent lighting can also produce extremely detailed high-resolution textures.

#### Photogrammetry Lightboxes

- [Otery 3D Photobench 180](https://ortery.eu/photography-equipment/product-photography-systems/3d-photobench-180/)
- [Ortery 3D Multiarm 1000](https://ortery.eu/photography-equipment/3d-product-photography/3d-multiarm-1000/) - Useful for capturing highly detailed photogrammetry of small objects such as jewelry and small electronics.

## Photogrammetry Tutorials

### Photogrammetry Software Guides

- [Photogrammetry with Photocatch](../3d-modeling/photogrammetry-with-photocatch.md) - works with a video or a folder of images
- [Epic Games Reality Scan - Convert GLB to OBJ in Blender](https://youtu.be/Lj1Z2XmpOM0)

### Exporting Frames from Video for Use in Photogrammetry

- [Export Video Frames with Adobe Media Encoder](../video/export-video-frames-as-images-adobe-media-encoder.md)
- [Export Image Sequence from Adobe Premiere](../video/adobe-premiere-pro/adobe-premiere.md)
- [Export only Keyframes with ffmpeg Video Tutorial](../video/export-only-keyframes-from-video-as-images-ffmpeg.md)
- [Export Frames from Video as Images with ffmpeg](../video/export-frames-from-video-as-images-ffmpeg.md)

### Working with Photogrammetry Created 3D Meshes

- [Calibrate Photogrammetry Scanned Object Scale in Blender](photogrammetry-with-photocatch.md)
- [Place 3D Models in 2d Photos with Blender](blender/place-3d-model-in-2d-photo-blender-fspy.md)
