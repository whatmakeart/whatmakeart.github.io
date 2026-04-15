---
title: 13.03 3D Virtual Environment USD Export Assignment
date: 2026-04-15T09:00:00-04:00
lastmod: 2026-04-15T08:54:50-04:00
---

## Assignment Deliverables

1. 3D virtual environment scene built in [Blender](../../../../3d-modeling/blender/blender.md) or [Maya](../../../../3d-modeling/maya/maya.md)
2. One exported **USD package** for Unreal Engine
   - `.usdc` or `.usd`
   - include all linked texture files in a labeled `textures` folder
3. Two render images of the scene
   - Label files YYYY-MM-DD Lastname Firstname USD scene render image (`.png`, `.jpg`)
4. Compress the USD export, the `textures` folder, and the render images into a `.zip` archive
   - Label file YYYY-MM-DD Lastname Firstname USD scene (`.zip`)

## Assignment Overview

In this assignment you will build a small environment scene for use in **Unreal Engine virtual production**. You may model the scene yourself, download existing assets, or use a combination of both. The goal is not simply to collect random objects, but to create a coherent, believable scene with a clear visual idea.

Your scene might be a room, alley, village corner, interior, stage set, landscape fragment, or another contained environment that can be used as a backdrop or setting in virtual production.

You do **not** need to set up the final Unreal Engine cameras or the Disguise / RenderStream workflow yourself. Faculty will import your USD scene into the Unreal Engine project and assign it to a student level for virtual production. Your job is to make a clean, organized, properly scaled scene that transfers successfully.

## Learning Goals

By completing this assignment, you should be able to:

- build and organize a complete 3D environment scene
- use real-world scale
- work with downloaded and self-made assets responsibly
- prepare simple game-engine-friendly materials
- set up basic lighting for a readable scene
- export a scene to USD for Unreal Engine
- avoid common scene-transfer problems

## Scene Requirements

Your scene must include:

- a clear environment or setting
- at least **8 to 12 visible objects or architectural elements**
- at least **3 different materials**
- at least **2 light sources**
- believable real-world scale
- organized object naming
- textures that are linked correctly
- one strong wide camera view for presentation

Optional additions:

- moving doors, rotating props, floating objects, blinking signs, or other simple animated objects
- one animated character in the scene
- fog, atmosphere, or emissive elements
- repeated objects such as lamps, barrels, windows, chairs, or trees

## Asset Sources

You may create all assets yourself, or combine your own work with downloaded models, textures, and characters.

### Good sources for models, textures, and characters

#### General model libraries

- [Fab](https://www.fab.com/)
- [Sketchfab](https://sketchfab.com/)
- [BlenderKit](https://www.blenderkit.com/)

#### Free textures, HDRIs, and models

- [Poly Haven](https://polyhaven.com/)

#### Characters and animation

- [Mixamo](https://www.mixamo.com/)

## Important Rules About Downloaded Assets

You are allowed to use downloaded assets, but your final scene should still show intentional design decisions. Do not just drop random objects into a file and call it finished.

Your scene should demonstrate:

- thoughtful composition
- object placement
- scale relationships
- lighting decisions
- material cleanup
- visual consistency

If you download assets, you are still responsible for:

- checking the license or usage terms
- fixing scale problems
- reconnecting missing textures
- removing broken materials
- making the scene look coherent

## Technical Rules for Unreal Transfer

These rules are extremely important.

### 1. Use real-world scale

Your scene must be built at believable size.

Examples:

- door height about `200 cm`
- table height about `75 cm`
- chair seat height about `45 cm`

### 2. Keep the scene near the origin

Build your scene close to `0,0,0`.

Do not leave objects scattered thousands of units away from the center of the scene.

### 3. Name objects clearly

Use names like:

- `wall_north`
- `wood_table_A`
- `lantern_01`
- `window_small_02`
- `tree_pine_01`

Do not leave objects named:

- `Cube`
- `Cube.001`
- `pCube17`
- `Sphere12`

### 4. Keep materials simple

Use image-based materials whenever possible.

Good:

- Base Color / Albedo map
- Roughness map
- Normal map
- Metallic map if needed
- Opacity map if needed

Avoid relying on:

- procedural textures that only exist inside Blender or Maya
- complex node networks
- renderer-specific materials
- very layered shaders
- displacement setups that only work in your modeling software

### 5. If you use procedural textures, bake them first

Procedural textures often do **not** transfer cleanly to Unreal Engine through USD.

If you use procedural materials, bake them to image textures before export.

### 6. Keep polygon counts reasonable

You do not need film-level asset density for this project.

Avoid scenes with:

- millions of unnecessary polygons
- excessive subdivision
- hidden duplicate objects
- high-density meshes for tiny background props

### 7. Organize repeated objects carefully

If you use repeated props like chairs, lamps, windows, or barrels, keep them organized and consistent.

### 8. Save all texture files with the project

Do not submit a USD file with missing image references.

## Blender Workflow

## 1. Start the scene

1. Open a new Blender file.
2. Save the file immediately in your project folder.
3. In **Scene Properties**, set **Units** to a real-world scale.
4. Keep the scene centered near the origin.
5. Delete objects you do not need.

## 2. Gather or make assets

You may:

- model your own objects
- import downloaded `.fbx`, `.obj`, `.glb`, or other supported files
- use BlenderKit assets
- use texture sets from Poly Haven
- use characters or animations from Mixamo after importing them into Blender

When importing assets:

1. check the size immediately
2. rotate them correctly
3. apply scale problems before continuing
4. clean up names and collections

## 3. Organize the file

Use Collections such as:

- `ENV_Architecture`
- `ENV_Props`
- `ENV_Ground`
- `LIGHTS`
- `CHARACTERS`
- `CAMERAS`

Rename major objects and keep the outliner clean.

## 4. Fix transforms

Before export, select objects and apply transforms where appropriate.

In general:

- apply scale
- apply rotation if needed
- keep object origins sensible

Be careful with rigs and animated objects. Do not randomly apply transforms to armatures without understanding the consequences.

## 5. Build materials

Use simple material setups based on:

- Principled BSDF
- UV mapped image textures

Preferred maps:

- Base Color
- Roughness
- Normal
- Metallic if needed

Avoid:

- overly procedural node trees
- complicated shader tricks
- generated coordinates without proper UVs
- materials that only look correct in Blender because of Blender-specific nodes

## 6. Light the scene

Set up basic readable lighting.

For preview:

1. switch the viewport to **Rendered**
2. turn on **Scene Lights**
3. turn on **Scene World**

Suggested lighting setups:

### Interior

- one main light
- one fill light
- one practical or accent light

### Exterior

- one sun light
- one sky or world contribution
- optional practical lights such as windows, signs, lanterns, or streetlights

Do not over-light the scene until everything is flat and washed out.

## 7. Optional animation

You may animate simple objects such as:

- rotating fans
- moving cubes
- opening doors
- floating signs
- drifting objects

Use simple keyframed transforms.

If you include an animated character, keep it simple and test the scene carefully.

## 8. Preview your final scene

Before export, check:

- scale looks believable
- objects are not intersecting badly
- textures are not missing
- UVs are not stretched badly
- lighting reads clearly
- the scene has a strong main view

## 9. Export USD from Blender

Export a USD file for Unreal Engine.

Recommended settings:

- export only the needed scene content
- include materials
- include UV maps
- include normals
- include animation if used
- use relative texture paths if available
- include the linked texture folder with your submission

After export, reopen the project and make sure the exported package is organized and complete.

## Maya Workflow

## 1. Start the scene

1. Open a new Maya scene.
2. Save immediately in a project folder.
3. Keep the linear working unit at a real-world scale.
4. Build the set near the origin.
5. Group your scene under one main top node if helpful.

Example top group:

- `VP_Scene_GRP`

## 2. Gather or make assets

You may:

- model assets directly in Maya
- import downloaded models
- clean and rearrange existing assets
- add a character or simple animated object

When importing assets:

1. inspect scale immediately
2. fix orientation
3. rename objects
4. remove extra junk nodes if needed
5. reconnect missing textures

## 3. Organize the outliner

Create clean groups such as:

- `Architecture_GRP`
- `Props_GRP`
- `Lights_GRP`
- `Characters_GRP`
- `Cameras_GRP`

A clean outliner makes export and troubleshooting much easier.

## 4. Build materials

Use simple, image-based materials.

Good practice:

- UV your models
- use image files for color, roughness, normal, and metallic where needed
- keep shader networks simple

Avoid:

- complicated renderer-specific shading setups
- heavy procedural shading that has not been baked
- textures with broken file paths
- relying on materials that only work in one renderer

If you use procedural materials, bake them before export.

## 5. Light the scene

Use a basic, readable light setup.

Suggested approaches:

### Interior

- one key light
- one fill light
- one practical or accent light

### Exterior

- one main directional light
- a simple ambient or sky contribution
- a few practical lights if needed

Use **Viewport 2.0** to preview textures and lights while working.

## 6. Optional animation

You may animate:

- transforms on props
- moving geometry
- rotating or oscillating objects
- one simple animated character

Keep object animation clean and intentional.

If you use a character, keep the setup simple and make sure it is properly organized before export.

## 7. Check the scene before export

Make sure:

- scale is believable
- object names are cleaned up
- textures are linked
- lights are named
- scene hierarchy is organized
- hidden junk is removed
- no accidental duplicate geometry is left behind

## 8. Export USD from Maya

Export a USD scene for Unreal Engine.

Recommended goals for export:

- export the final scene only
- include geometry
- include materials
- include UVs
- include animation if used
- use relative texture paths if possible
- package all texture files with the USD

Do not assume that your scene file alone contains everything Unreal needs.

## Camera and Composition Tips

Even though faculty will set up the final Unreal virtual production cameras, you should still compose your scene intentionally.

Helpful practices:

- create at least one strong wide shot in your modeling software
- set up one close or medium shot for detail
- think about foreground, middle ground, and background
- avoid placing all objects against one flat wall with no depth
- create spaces a virtual camera could move through or look into

## Tips for Better Results

- choose a limited visual theme
- keep your materials consistent
- use repeated props intentionally
- vary scale slightly when appropriate
- add small details only after the main forms work
- test the scene in preview mode often
- simplify materials before export
- organize your file before submission, not after

## Common Problems to Avoid

### 1. Procedural textures not baked to images

If a material only exists as a procedural node setup, it may not transfer correctly to Unreal Engine.

### 2. Missing texture files

If your textures live somewhere random on your computer, the scene may break when moved to another machine.

### 3. Incorrect scale

Scenes that are too tiny or too huge are difficult to use in Unreal Engine virtual production.

### 4. Broken object names

Messy naming creates confusion during import and troubleshooting.

### 5. Too many polygons

Do not use ultra-dense geometry for every object, especially background props.

### 6. Lighting that is too dark or too bright

Aim for readable forms and clear separation, not total darkness or blown-out highlights.

### 7. Too many different visual styles

Try to make the environment feel like it belongs together.

### 8. Exporting without checking the package

Always verify that your exported USD file and texture folder are complete.

## Submission Checklist

Before you submit, confirm that you have:

- [ ] one complete scene
- [ ] one original `.blend`, `.ma`, or `.mb` file
- [ ] one exported `.usd` or `.usdc` file
- [ ] one `textures` folder with all required images
- [ ] two preview images
- [ ] clear object naming
- [ ] real-world scale
- [ ] simple transferable materials
- [ ] lights in the scene
- [ ] a short process note listing outside assets and sources
