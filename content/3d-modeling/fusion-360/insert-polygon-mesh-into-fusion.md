---
title: Insert Polygon Mesh into Fusion
date: 2026-09-30T06:00:15-04:00
lastmod: 2026-09-30T06:10:33-04:00
---

<div class="video-grid">
<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/We1fL0uUUT4?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

[Autodesk Fusion](./fusion-360.md) is best known for [parametric solid modeling](../parametric-modeling.md), but it can also work with polygon meshes created in programs like [Blender](../blender/blender.md) and [Maya](../maya/maya.md). This tutorial shows how to import an OBJ or STL mesh into Autodesk Fusion and prepare it for use alongside parametric geometry.

This workflow is especially useful for combining organic 3D models with precisely modeled parts for 3D printing, fabrication, assemblies, stands, fixtures, and other projects. You can also [Insert 3D Scan Meshes into Autodesk Fusion](insert-3d-scan-mesh-fusion.md).

It shows how to switch Fusion from Part Design to Hybrid Design, create a dedicated mesh component, insert a mesh from your computer, choose the correct units, center and orient the model, and preserve quad geometry when importing an OBJ.

OBJ files can be particularly useful when moving geometry from Blender into Fusion because they can retain quad faces, while STL files are typically triangulated and are more commonly used as a final format for 3D printing.

- [Insert Polygon Mesh into Fusion](https://youtu.be/We1fL0uUUT4)

<details>
<summary>

### Video Transcript

</summary>

Fusion is generally thought of as a parametric solid modeling program, but you can also use polygon meshes in Fusion, such as those created in Blender or Maya. This is especially useful when you're making 3D printed organic parts that you want to have some parametric features with, maybe interact with other parametric models In order to get a mesh into Fusion to work with it. We need to do a couple of things first.

Up in the browser, look to see if you're in part design. We want to be in hybrid design, so click this pencil And change to hybrid design. If you're already in hybrid design, just leave it as is. Then at the top level component in your browser, right click that's this unsaved section here and select New Component label this component Mesh. Then we can insert a mesh by clicking the Insert Mesh button in the top right. Select from your computer then navigate to where your mesh is. I have an STL and an OBJ. an STL is great for 3D printing OBJ is better for importing to Fusion because it can still have quad faces. I'll select the obj and open.

I see it come in. It's going to assume a unit type Since this mesh was created in blender and blender uses meters, I can leave the unit as meters. But if I made it in Maya, I could change it to centimeters and it would be the right size. So make sure you know what units you use to model your object. Then I can click center and it's going to center it in the fusion workspace. And I can move it to the ground. Now I can look at different directions and rotate the mesh. So it's a little bit easier to use. I can rotate it up vertically and then once I get it close, I can always make adjustments later. So I'll press okay.

And now I have a mesh inside fusion. And this should work really well with different modeling operations. Notice that since it's an OBJ it comes in as quads. Hopefully you're able to insert a mesh into Autodesk Fusion. Happy 3D modeling!

</details>
