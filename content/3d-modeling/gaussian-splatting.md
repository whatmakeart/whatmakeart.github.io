---
title: Gaussian Splatting
date: 2024-09-11T06:45:54
lastmod: 2025-09-26T13:33:15
---

Gaussian Splatting is a method of using "splats" or gaussian "smears" to rebuild a 3D scene rather than a mesh. It became more well known from a [Siggraph 2023 3D Gaussian Splatting Paper](https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/). It is a technique that overcomes some of the limitations of [photogrammetry](./photogrammetry-software.md) when creating 3D representations from photographic sources. Since the technology is relatively new, it is computationally intensive but will likely be a large part of the future of 3D modeling and representation

Carl Friedrich Gauss was a mathematician with numerous original ideas and discoveries that influence everyone's lives. Gaussian splats use overlapping gaussian blur "smudges" that overlap and in totality produce a coherent image.

## Gaussian Splatting Links and Software

### Colmap

Colmap has a Graphical User Interface (GUI) that can make using Colmap easier than the command line. To use the GUI download the precompiled binary, extract it, and run the bat file.

- [Colmap Project Page](https://colmap.github.io/)
- [Colmap Prebuilt Windows Binary](https://github.com/colmap/colmap/releases/tag/3.12.6)
- [Colmap GitHub Repo Page](https://github.com/colmap/colmap)

### Glomap

Glomap can be 2 - 10 times faster in recontruction than Colmap. It also has a precompiled binary but must be run from the command line. Glomap required Colmap to build the initial database before running reconstruction.

- [Glomap Project Page](https://lpanaf.github.io/eccv24_glomap/)
- [Glomap Precompiled Binaries](https://github.com/colmap/glomap/releases)
- [Glomap GitHub Repo Page](https://github.com/colmap/glomap)

### Miscilaneous Gaussian Splatting Projects

- [Opensplat](https://github.com/pierotofy/opensplat)
  - [Gaussian Splatting](https://github.com/graphdeco-inria/gaussian-splatting)
- [Gaussian Splatting Colab Notebook](https://github.com/camenduru/gaussian-splatting-colab)
- [SuGaR](https://github.com/Anttwo/SuGaR)

### Paid Software

- [Polycam](https://poly.cam/tools/gaussian-splatting)
- [Postshot from Jawset](https://www.jawset.com/)

### Blender Gaussian Splat Add-ons

- [3D Gaussian Splatting Blender Addon](https://github.com/ReshotAI/gaussian-splatting-blender-addon)
- [3DGS Render Blender Addon by KIRI Engine](https://github.com/Kiri-Innovation/3dgs-render-blender-addon)
