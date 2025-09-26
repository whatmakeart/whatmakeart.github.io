---
title: 05.05 3D Capture and 3D Print Assignment
date: 2025-09-26T09:30:00
lastmod: 2025-09-26T17:10:23
---

## Assignment Deliverables

1. Exported 3D file of photogrammetry capture of a room or an object
   - Label file YYY-MM-DD Lastname Firstname Photogrammetry Capture (`.usd`, `.obj`, `.blend`)
2. Exported 3D file of a 3D scan of an object
   - Label file YYY-MM-DD Lastname Firstname 3D Scan Capture (`.usd`, `.obj`, `.blend`)
3. Render image of on of the 3D captures
   - Label file YYY-MM-DD Lastname Firstname Gaussian Splat Capture (`.png`, `.jpg`)
4. 3D print of 1 of the above 3D captures

## Assignment Overview

3D capture brings the physical world into the digital 3D model world. This project explores three different methods of 3D capture, [photogrammetry](./05-02-photogrammetry.md), [3D scanning](./05-01-3d-scanning.md), and [gaussian splatting](./05-03-gaussian-splatting.md).

### Process

#### Photogrammetry Capture

1. Select an interior room for photogrammetry. With your back to the perimiter of the room capture mulptiple angles and photos of the opposite facing wall. Capture from multiple heights and angles looking at the opposing wall. You may use a video capture as well.
2. Import the photos or video into a photogrammetry app and process the inputs.
3. If desired, clean up and modify the captured mesh. [How to Clean Up Photogrammetry Mesh in Blender](https://youtu.be/asyItetJkbU)
4. Export the completed mesh with textures.

#### 3D Scan Captures

5. Use a 3D scanner to capture an object and / or a person. You can use the 3D scanners at the IML or the think\[box\].
6. Clean up and process the scan with the built in software. [How to Clean Up Photogrammetry Mesh in Blender](https://youtu.be/asyItetJkbU)
7. Export a 3D model with textures.

#### Gaussian Splat Capture

4. Take a video of a 3D scene / setup. This could be a desk in your studio, a piece of furniture, a counter or work surface.
5. The video should move from side to side, up and down, and change angles to capture as much information as possible.
6. Convert the video to a folder of images. [How to Export Frames from Video in Premiere](https://youtu.be/JCawZdzQgFA)
7. Use Colmap and/or Glomap to process a Gaussian Splat 3D Reconstruction.
8. The Colmap GUI allows viewing of the reconstructed splat, camera views, and rendering.

## Assignment Resources

### 3D Capture Resouces

#### Photogrammetry Tools

- [Reality Scan](https://www.realityscan.com/en-US)
- [Photocatch](https://youtu.be/yMqH0GskhgY)
- [Meshroom](https://alicevision.org/)

#### 3D Scan Tools

- [Einscan H Series Scanner Quick Start Guide](https://support.einscan.com/en/support/solutions/articles/60000955990-einscan-h2-quick-start-guide)
- [Einscan Scanning Tips](https://support.einscan.com/en/support/solutions/60000334498)
- [Einscan H Series Guides](https://support.einscan.com/en/support/solutions/60000323052)
- [Einscan H2 Scanner](https://www.einscan.com/handheld-3d-scanner/einscan-h/)

### 3D Mesh Clean Up

- [Scale Photogrammetry Mesh in Blender](https://youtu.be/MUb7I4lBSZs)
- [Clean Up Photogrammetry Mesh in Blender](https://youtu.be/asyItetJkbU)

### 3D Printing

- [3D Printing Design Guidelines](../../../../digital-fabrication/3d-printing/3d-print-design-guidelines.md)
- [How to Export STL from Blender](../../../../digital-fabrication/3d-printing/export-stl-blender.md)
- [3D Print Tools Add-On Blender](https://youtu.be/_E-b6CENHms)

If using the Bambu X1 Carbon 3D printers, then use the [Bambu Studio Slicer](../01-introduction/01-04-bambu-studio-installation.md). If using Ultimaker Printers or Creality Ender Printers, then use the [Cura Slicer](../../../../digital-fabrication/3d-printing/cura-slicing-basics.md).

## Grading Rubric

<div class="responsive-table-markdown">

| Objective                       | Points |
| ------------------------------- | ------ |
| Photogrammetry Capture Uploaded | 45     |
| 3D Scan Capture Uploaded        | 45     |
| Minimum 1 Render Image          | 20     |
| 3D Print of 1 Capture           | 30     |
| File Management and Labeling    | 10     |

</div>
