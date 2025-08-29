---
title: 01.03 3D Generation and Modeling 3D Print Exercise
date: 2025-08-29T09:30:00
lastmod: 2025-08-29T09:22:00
---

## Exercise Deliverables

1. Upload an STL or OBJ or STEP or 3MF of your cleaned up mesh from the in class mesh generation experiments
   - Label the file 2025-08-29 Lastname Firstname name of mesh
2. Upload an STL or OBJ or STEP or 3MF of your modeled mesh from the in class modeling into
   - Label the file 2025-08-29 Lastname Firstname name of mesh

## Exercise Overview

### 1 Clean Up Generated Mesh for 3D Printing

1. Select an interesting mesh and open it in a 3D modeling program.
2. Edit and modify the mesh with sculpting and other 3D modeling tools.
3. Save the edited version as an OBJ or STL if using a mesh modeling program, or as a STEP if using a parametric solid modeling program.

### In Class Exercise

1. Use images and photos of objects and the mesh generation tools above to create 3D meshes.
2. Try images made with AI image generators for different results.
3. Save and label your mesh files.

### 2 Create New Mesh for 3D Printing

Some images convert to relatively good 3D meshes. Other images produce an unusable mess. Create a new 3D mesh with the modeling program of your choice.

1. Keep the spirit of simple 3D forms that can be quickly modeled.
2. You can even use the same reference images.
3. Save the and label the mesh file.

## AI Mesh Generation Tools

### Adobe

- [Adobe Substance 3D Stager](https://www.adobe.com/products/substance3d/apps/stager.html) - Text to 3D Mesh generator inside Adobe Substance Stager

### Research Models on GitHub and Hugging Face

#### Hunyuan 3D

- [Hunyuan 3D Project Page](https://hunyuan-3d.com/) - generates 3d meshs and textures from images and text
- [Hunyuan 3D on GitHub](https://github.com/Tencent-Hunyuan/Hunyuan3D-2)

#### Sparc3D

- [Sparc3D on GitHub](https://lizhihao6.github.io/Sparc3D/)
- [Sparc3D Project Page](https://sparc3d.org/)

#### Additional Models

- [PartCrafter](https://wgsxm.github.io/projects/partcrafter/) - generates multi-part meshes from images
- [InstandMesh](https://github.com/TencentARC/InstantMesh) - generates 3D mesh from single image
- [VFusion3D Demo on Hugging Face](https://huggingface.co/spaces/facebook/VFusion3D) - Makes good videos but the meshes are blocky
- [VFusion3D Demo on Google Colab](https://github.com/whatmakeart/VFusion3D-colab) - Requires access to Google Drive
- [StableVision123 Demo on Hugging Face](https://huggingface.co/spaces/p4vv37/Stable-Zero123)

### Freemium but Require Sign in 3D Generators

- [Meshy AI](https://www.meshy.ai/) - Requires sign in
- [Luma Labs Genie](https://lumalabs.ai/genie?view=create) - Requires sign in
- [Rodin](https://hyperhuman.deemos.com/rodin) - Requires sign in
- [Spline AI Generate](https://spline.design/ai-generate) - Requires Sign in
- [MasterpieceX](https://www.masterpiecex.com/) - Requires Sign in

## Technical Resources

### Exporting Meshes

If exporting an STL or OBJ from Blender, make sure to subdivide the mesh multiple times so there is enough geometry to make it smooth. Select shade flat in object mode to see how the mesh looks.

- [Export STL From Blender](../../../../digital-fabrication/3d-printing/export-stl-fusion-360.md)
- [Export STL Fusion 360](../../../../digital-fabrication/3d-printing/export-stl-fusion-360.md)
- [Export STL Maya](../../../../digital-fabrication/3d-printing/export-stl-maya.md)

### Slice Meshes and 3D Print with Bambu Studio

Using Bambu Studio, students will slice their 3D objects and combine them into printable 3mf project files.

AI mesh generation uses trained models to generate a 3D mesh from a 2D source image or a text prompt. This technology does not currently produce high quality meshes but it is important to be aware of ongoing developments in the field in order to take advantage of them in your artistic practice.

## Further Reading

[LRM: Large Reconstruction Model for Single Image to 3D](https://yiconghong.me/LRM/)
