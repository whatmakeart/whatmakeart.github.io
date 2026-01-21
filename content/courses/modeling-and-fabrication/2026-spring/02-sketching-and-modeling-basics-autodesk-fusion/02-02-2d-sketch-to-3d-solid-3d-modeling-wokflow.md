---
title: 02.02 2D Sketch to 3D Solid 3D Modeling Workflow
date: 2026-01-21T09:00:00-04:00
lastmod: 2026-01-21T08:27:43
---

[3D Modeling](../../../../3d-modeling/3d-modeling.md) can transform your two-dimensional ideas into three-dimensional forms.

The foundation of most parametric and "CAD" [3D modeling software](../../../../3d-modeling/3d-modeling-software.md) is the 2D Sketch to 3D Solid workflow. Instead of directly modeling solids or meshes, this workflow is parametric, meaning you define shapes using dimensions and relationships. The benefit is that if you change a measurement in your initial sketch, the entire 3D model updates automatically to match.

The transition from a flat idea to a physical-looking object follows a simple, repeatable cycle. This workflow allows you to design with intent. The Sketch to Solid method gives you the technical control to iterate quickly and prepare your files for [3D Printing](../../../../digital-fabrication/3d-printing/3d-printing.md), [Laser Cutting](../../../../digital-fabrication/laser-cutting/laser-cutting.md), [CNC](../../../../digital-fabrication/cnc/cnc-basics.md), or an other inteded use.

### 1. Create a 2D Sketch

Every 3D object starts on a 2D plane. This can be a virtual digital plane, the face of a 3D object, or a physical plane like a piece of paper. Consider the object or form that you plan to model. Choose an appropriate starting point view such as the front, side, or top. Select the corrisponding origin plane, Z-X, Z-Y, or X-Y to use as a starting sketch plane. Use sketch tools like lines, circles, and rectangles to draw the profile of your object.

### 2. Apply Dimensions and Sketch Constraints

A sketch is just geometry without specific measurements or defined dimensions. As dimensions are defined in the sketch it begins to take the exact form and proportions of the intended profile. [Sketch constraints](../../../../3d-modeling/fusion-360/sketch-constraints-fusion-360.md), rules like "these two lines must be equal", help make your sketch flexible and adaptable without hard coding every dimension. This ensures your design stays predictable as it gets more complex.

### 3. Create a 3D Feature

Once your 2D sketch profile is finished, you use [basic creation tools](../../../../3d-modeling/fusion-360/basic-creation-tools-fusion-360.md) and operations to turn the 2D profile into a 3D volume, solid, or surface. The most common tool is the Extrude Tool, which pushes your flat sketch into the third dimension, turning a circle into a cylinder or a square into a rectangular prism.

### 4. Refine and Modify

After you have a basic 3D solid, you can refine it using Modify tools. You might add Fillets to round off sharp edges or Shell a block to make it a hollow container. If you want to change the size of the 3D form, it is best practice to go to the original sketch or feature in the timeline rather than adding a new feature. If you draw a 50 mm diameter circle and extrude it 100mm but really want a 90 mm circle, it is better to edit the extrude feature value to be 90 mm instead of adding a new cut operation to remove 10 mm from the cylinder. [User parameters](../../../../3d-modeling/fusion-360/basic-user-parameters-fusion-360.md) make changing and updated multiple features at the same time possible and efficient.
