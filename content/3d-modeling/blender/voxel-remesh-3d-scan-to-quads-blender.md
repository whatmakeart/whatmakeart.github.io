---
title: Voxel Remesh 3D Scan to Quads in Blender
date: 2024-10-14T21:20:30
lastmod: 2026-02-25T06:59:48-04:00
tags:
  - Blender
  - 3D-Modeling
  - 3D-Scanning
---

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/-8A4AWW4y24?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

Before you start, make sure your scan is already cleaned up. The workflow here assumes you’ve already done your earlier cleanup steps to remove junk, fix holes, and make the mesh manifold. Then make a backup copy of the mesh.

### Duplicate and prep your mesh

1. In Object Mode, select your cleaned scan mesh.
2. Press Shift + D to duplicate it. If you accidentally move it, press Esc to snap it back into place.
3. Hide the new duplicate (or hide whichever version you want to keep untouched).
4. A nice habit is to keep multiple versions so you can try stuff without losing data
   - one cleaned original
   - one working copy
   - sometimes even another backup copy specifically in case you want to shrinkwrap or remesh and later realize you need to step back
