---
title: 09.07 3D Scan Mesh Cleanup Assignment
date: 2024-02-22T12:00:00Z
lastmod: 2024-10-16T06:19:02
---

## Assignment Deliverables

1. Blend file with the original imported obj mesh and a cleaned up copy meshes
   - Label file YYYYMMDD Lastname Firstname cleaned up 3d scan mesh.blend

## Requirements

- original 3D scanned mesh scaled and orientated properly
- 1st duplicate mesh cleaned up and manifold
- 2nd duplicate mesh remeshed to quads

## Assignment Overview

1. [Import the Artec LEO Scan into Blender](./09-01-import-artec-leo-scan-to-blender.md)
2. [Clean up the 3D Mesh](./09-02-clean-up-3d-scan-imported-mesh-in-blender.md). Make sure to make a backup of the original mesh in your `.blend` file. Put the backup mesh in a hidden collection. You can also make multiple in progress backups. _Remember that once you start editing the duplicate mesh, don't move it from the position the original mesh if you want to be able to bake / transfer the image texture later._ Image textures are not required for this project but you may want the option.
3. [Remesh a copy of your mesh to quads](./09-03-voxel-remesh-3d-scan-to-quads-blender.md)
4. Save your `.blend` file. Make sure to [pack external resources](../../../../3d-modeling/blender/pack-external-resources-blender.md) or any texture files will not be included with the `.blend` file.
