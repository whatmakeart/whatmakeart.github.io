---
title: Import Artec LEO Scan into Blender
date: 2024-10-13T18:39:32
lastmod: 2024-10-14T06:37:44
tags:
  - 3D Modeling
  - Blender
  - 3D Scanning
---

<div class="video-grid">
<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/-8Tvn8UFG0Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

The objective is to prepare the scan for further use in [Blender](./blender.md) and [Fusion 360](../fusion-360/fusion-360.md) for modeling and [3D printing](../../digital-fabrication/3d-printing/3d-printing.md).

## Importing and Scaling the OBJ Fil

The [3D scan](../3d-scanning.md) from the Artec Leo is exported as an `OBJ` file, which contains both mesh data and texture information. The file at a very large scale, due to the Artec Leo’s high-resolution scanning (up to 0.1mm accuracy), while Blender’s default unit is meters.

1. Navigate in Blender to `File > Import > OBJ`. Locate the `OBJ` file on your system and import it into Blender.
2. Select the mesh.
3. Press `S` to scale and enter **0.001** to reduce the model's size to accurate real world units.
4. Press `N` to view item properties and confirm that the scale in all directions is now set to **0.001**.

### 3. **Orienting the Model**

- Use Blender's cardinal directions (X, Y, Z) to adjust the orientation:
  - Press **R** to rotate the mesh in the appropriate axis.
  - Use the X, Y, and Z axes to fine-tune the rotation until the scan is aligned correctly.
- To position the mesh:
  - Click on **Object > Set Origin > Origin to Geometry** to center the origin.
  - Move the object along the **Z-axis** by pressing **G** followed by **Z**.

### 4. **Applying Transformations**

- It’s crucial to apply all transformations before further editing:
  - Select the mesh and press **Ctrl + A**, then choose **All Transforms**. This ensures that the object scale and orientation are fully applied.
- If you skip this step, issues may arise during remeshing, potentially causing Blender to crash.

### 5. **Saving the Project**

- Save your project under a suitable name (e.g., **head_scan_cleanup**) before proceeding with mesh editing. This acts as a backup.

### 6. **Duplicating the Mesh**

- **Reason for Duplicating**:
  - Before modifying the mesh for 3D printing, duplicate it to preserve the original texture data.
  - Textures will be lost during mesh editing, so having a backup of the original model is important.
- **Steps**:
  - Select the mesh, press **Shift + D** to duplicate it.
  - If the mesh moves accidentally, press **Esc** to snap it back into position.
  - Create a new **collection** (e.g., **Original**) and move the original scan there. Hide the collection to keep it safe.

### 7. **Viewing and Adjusting Textures**

- **Texture Check**:
  - Switch to **Material Preview** mode to inspect the textures.
  - If the texture appears too glossy, adjust the **Index of Refraction (IOR)** of the material to **1**. This will make the textures appear more natural.

### 8. **Entering Edit Mode and Assessing the Mesh**

- **Edit Mode**:
  - Press **Tab** to enter **Edit Mode** and examine the mesh.
  - The scan will likely consist of a large number of triangles, which is common for 3D scans.
- **Identifying Errors**:
  - Structured light scans often come with reconstruction errors (e.g., holes, rough edges), which need to be cleaned up before remeshing.
  - Common areas with issues might include shoulders, edges, or areas with complex geometry.

### 9. **Next Steps**

- In the next part of the tutorial, the focus will be on cleaning up the mesh by removing errors and smoothing out imperfections.
- Once cleaned up, the mesh will be prepared for remeshing and export to Fusion 360 for [parametric modeling](../parametric-modeling.md) and final preparation for 3D printing.

1. [Import Artec LEO Scan into Blender](https://youtu.be/-8Tvn8UFG0Y)
2. [Clean Up 3D Scan Imported Mesh in Blender](https://youtu.be/f7F8jNDWae0)
