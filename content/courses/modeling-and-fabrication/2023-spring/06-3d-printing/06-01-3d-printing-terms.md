---
title: "06.01 3D Printing Terms"
date: 2020-01-26T23:11:13Z
draft: false
---

These are some common words and terminology used in 3D Printing and 3D Mesh Modeling:

## 3D Modeling Terms

- **Vertex** - the base unit of a polygon model. It is a point in space defined by an x, y and z coordinate. Can be moved around and "welded" to other vertexes or connected to another vertex with an edge.
- **Edge** - the line connecting two vertexes in a polygon model. Edges make closed shaped that are called faces
- **Face** - the enclosed shape made by connected vertexes and edges. Can be a triangle, a quad (four-sides) or an N-Gon
- **Triangle** - simplest planar shape. STLs are made of triangle but triangles should be avoided if possible when modeling since they cannot be subdivided easily and do not make smooth forms.
- **Quad** - A four sided polygon. This is generally the best shape to make your model from.
- **N-Gon** - A polygon with (n) sides. These should be avoided. With T-Splines you may have some n-gons but it is best to make them into quads if you can.
- **Mesh** - The structure of a 3D model. It is made of of points (vertexes), edges and polygon faces.
- **Bounding Box** - the smallest box that your model can fit in. It is a rectangular prism defined by a height, width and length.
- **Parametric** - A 3D model driven by defined dimensions and parameters
- **Solid** - A 3D model that is not a plane or open shape. It is a full solid object.
- **Polygon** - A 3 or more sided shape. The surfaces of 3D models are made of polygons

## 3D Printing Terms

- **Overhang** - Part of a 3D model that extends out horizontally at an angle less than 45 degrees. Overhangs require supports so the print does not sag or fall to the printing bed.
- **Raft** - Bottom support for a 3D print to help it adhere to the print bed when the print starts and to keep the print from falling over when the print gets taller.
- **Infill** - Support material in the middle of a 3D print. Can be made of different patterns and is usually not solid. Sometimes described in percentage terms, less infill will make a faster print and use less material while a higher percentage infill will take longer to print and use more material.
- **Support Material** - extra printed material used to support parts of the print that overhang more than 45 degrees in the horizontal direction. Sometime a model can be orientated on the printer at a different angle to avoid support material. Can be removed but often messes up the surface where it attached to the print.
- **STL (STereoLithography)** - the most common file format used for 3D printing. It is made of a fine triangle mesh. This file format works for 3D printing but is not good for modeling. Always save the original model file so you can make changes. It is possible to edit an STL file but it is much easier to edit the original 3D model.
- **Print in Place (PIP)** - Method of printing moving parts such as hinges and joints in a 3D print in one operation. This produces forms that would not be possible with traditional manufacturing techniques.
- **Fused Filament Fabrication (FFF)** - Most common method of affordable 3D printing. This method uses a thermoplastic filament, or wire, on a spool that is fed through a nozzle. Heat melts the thermoplastic and new layers are fused to previous layers in order to make the print.
- **Fused Deposition Modeling (FDM)** - similar to FFF but has a heated enclosed space that better regulates the print temperature. This creates stronger and more accurate parts.
- **Slicer** - Software that "slices" a 3D model into thin layers that represent the layers of filament deposited during the printing process. It makes a g-code file that the 3D printer will use to make the print.
