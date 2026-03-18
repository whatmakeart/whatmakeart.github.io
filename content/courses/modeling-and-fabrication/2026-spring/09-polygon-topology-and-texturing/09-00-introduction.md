---
title: 09.00 Introduction
date: 2026-03-17T09:00:00-04:00
lastmod: 2026-03-17T11:55:16-04:00
---

## Overview

Not all 3D meshes are built for the same purpose. Some models, such as 3D scans, may contain millions of densely packed triangles that capture surface detail very accurately but are difficult to edit, animate, unwrap, or optimize. Other models, such as a basic polygon cube, may contain only a small number of clean quad faces. Most production models fall somewhere between these extremes, and the ideal polygon count and topology depend on how the model will be used.

A mesh intended for real-time rendering, animation, game engines, XR, or efficient editing usually needs a cleaner and more intentional structure than a raw scan. This is where remeshing and retopology become important.

**Remeshing** is an automated process that reorganizes and redistributes polygons across the surface of a model. It is often used to simplify dense geometry, create more even polygon distribution, and make a mesh easier to sculpt or edit. Remeshing can be fast and useful, but it does not always preserve the edge flow needed for deformation, animation, or clean UVs.

**Retopology** is a more deliberate process of rebuilding the surface of a high-resolution mesh using cleaner, lower-resolution polygons, usually quads. Unlike remeshing, retopology is often done manually or with guided tools so that edge loops can follow important anatomical, structural, or design features. Good topology is especially important when a model needs to bend, deform, unwrap cleanly, or be reused in other workflows.

Even a well-built polygon mesh is only part of a finished 3D model. Without materials, textures, and lighting, a mesh is simply a collection of vertices, edges, and faces in 3D space. Shaded or smooth display can make a form appear less faceted, but it does not add actual surface information such as color, roughness, bumps, wear, or fine detail. To make a model feel convincing, that visual information must be added through UVs, textures, and materials.

**UV mapping** is the process of assigning points on a 3D surface to locations on a 2D image. Because the model already uses X, Y, and Z coordinates in 3D space, the texture coordinates are called **U** and **V** instead of X and Y. Unwrapping a model creates a flattened version of the surface so that 2D images can be painted, edited, or baked onto the 3D mesh.

When a model is remeshed or retopologized, it usually needs a new UV layout. This often requires adding seams and unwrapping the mesh again, either manually or with automated tools. Once the new UVs are created, texture information from the original high-resolution model can be transferred, or **baked**, onto the new low-resolution mesh. These baked maps can include color, normals, ambient occlusion, roughness, and other surface details.

In this module, you will learn how remeshing, retopology, UV unwrapping, texture painting, and baking work together as part of a complete 3D modeling workflow. These skills are essential for turning raw or high-resolution models into clean, efficient, and visually convincing assets for rendering, animation, digital fabrication, and real-time media.

## Learning Objectives

- Explain the difference between dense scan data, remeshed geometry, and retopologized geometry
- Remesh a 3D scan or high-polygon model into a cleaner working mesh
- Retopologize a mesh to create cleaner quad-based topology and better edge flow
- Mark seams and UV unwrap a 3D model for texturing
- Create and edit seamless textures for use on 3D models
- Use texture painting tools to paint directly onto a model or its UV layout
- Apply physically based material properties to create more realistic surfaces
- Add and control image maps such as color, roughness, bump, and normal maps
- Bake texture information from a high-resolution mesh onto a lower-resolution UV-mapped mesh
- Evaluate how topology, UVs, and materials affect the final quality and usability of a 3D model

## Key Terms

- Polygon Mesh
- Topology
- Quad
- Triangle
- Vertex
- Edge
- Face
- Edge Flow
- Remesh / Remeshing
- Retopology
- High Poly
- Low Poly
- UV Space
- UV Seam
- UV Unwrap / UV Unwrapping
- Texture
- Texture Map
- Seamless Texture
- Material
- Physically Based Material (PBR)
- Diffuse / Base Color Map
- Roughness Map
- Normal Map
- Bump Map
- Baking / Texture Baking
