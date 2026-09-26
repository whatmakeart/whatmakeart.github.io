---
title: 04.04 Retopology 3D Scan Body Extension Assignment
date: 2026-09-17T09:00:00-04:00
lastmod: 2026-09-26T09:15:14-04:00
canvas_mobile_fallback: true
---

## Assignment Deliverables

1. 3D printed output of body extension from 3D scan data
   - Bring physical print to class
2. Blender file showing original scan and body extension
   - Label file YYYY-MM-DD body extension 3D model (`.blend`)
3. Render image of body extension
   - Label file YYYY-MM-DD body extension render image (`.png`, `.jpg`)

## Assignment Overview

Using a mesh created with [3D Scanning](../../../../3d-modeling/3d-scanning.md) and the [Polyquilt Retopology Tool Blender Addon](../../../../3d-modeling/blender/install-polyquilt-retopology-tool-blender-addon.md), create a base surface that conforms to the 3D scanned mesh. Then create sculptural extensions to the mesh. Export the new extension as an `stl` file and 3D print it.

Using a mesh created with [3D Scanning](../../../../3d-modeling/3d-scanning.md) and the [PolyQuilt Retopology Tool Blender Addon](../../../../3d-modeling/blender/install-polyquilt-retopology-tool-blender-addon.md), create a clean low-poly surface that conforms to part of the scanned body.

This first surface functions as a digital mask, shell, or fitted skin. Once the shell fits the scanned body mesh, duplicate and preserve the original version of the shell. Then use Blender modeling tools, Sculpt Mode, modifiers, additional geometry, and Boolean operations to transform the duplicate shell into a sculptural body extension.

The final extension should still relate directly to the scanned body but should become something that changes, exaggerates, protects, extends, obstructs, or otherwise alters the body.

The completed extension will be prepared as a printable mesh, exported as an `.stl`, 3D printed, and brought to class.

### Process

#### 1. Import Scan and Retopologize Base Shell

1. Import your 3D scan into Blender.
   - [Import 3D Head Scan Blender](../../../../3d-modeling/blender/import-3d-head-scan-blender.md)
2. Remove unnecessary floating geometry or scan artifacts that make the surface difficult to work with.
   - [Flat Bottom 3D Scan with Boolean Intersect in Blender](../../../../3d-modeling/blender/flat-bottom-3d-scan-boolean-intersect-blender.md)
   - [Boolean Intersect Photogrammetry Scan in Blender](../../../../3d-modeling/blender/boolean-intersect-photogrammetry-scan-blender.md)
3. Position and scale the scan as needed.
   - [Change Rotation Point Blender](../../../../3d-modeling/blender/change-rotation-point-blender.md)
4. Do not spend excessive time repairing the entire scan. Evaluate the area where your extension will attach to the body. If that part of the scan is useable, then ignore the rest.
5. Install and activate the [PolyQuilt Retopology Tool Blender Addon](../../../../3d-modeling/blender/install-polyquilt-retopology-tool-blender-addon.md).
6. Create an empty mesh object and select it.
7. Switch to Edit Mode to begin using the PolyQuilt Retopology Tool.
8. In the "Mesh Edit Mode Overlays" menu in edit mode, click the box for "Retopology" so you can see your new mesh on top of the 3D Scan.
9. Remember to enable automatic snapping by clicking the magnet 🧲 at the top of the viewport and to switch the snapping mode to Face ⬜.
10. Create a small planar mesh close to the surface of the 3D scan.
11. Use PolyQuilt to draw and extend connected polygons across the area of the body where your extension will be located.
12. Build the mesh gradually around important anatomical details and changes in surface direction rather than attempting to cover the entire area with a few large polygons.
13. Keep the topology relatively simple. The goal is to create a clean editable shell that follows the body rather than reproduce every detail of the scan.
14. Regularly rotate around the scan and inspect the mesh from multiple angles.
15. Add edge loops and divisions as needed to get a good form. Remember to "ring around the details" as you retopologize the shell.

#### 2. Add the Modifier Stack to Create Shell with Thickness

Add the following modifiers to the retopologized shell in this order

1. Shrinkwrap Modifier
   - Use a Shrinkwrap Modifier to keep the retopologized mesh attached to the surface of the scanned body.
   - Set the 3D scan as the Shrinkwrap target.
   - Use a small offset such as .001 m or .0005 if necessary so the new mesh sits slightly above the scan instead of intersecting it.
   - _Sometimes the Shrinkwrap modifier makes the shell worse. Test on your shell and use as appropriate since every shell is different._
2. Subdivision Surface Modifier
   - Add a Subdivision Surface Modifier after Shrinkwrap. This allows you to work with relatively simple polygons while viewing a smoother surface.
   - Change the viewport divisions to ~3 or until it looks smooth. Remember that when exporting an `STL` for 3D printing from a polygon modeling program like Blender, what you see in the viewport is how rough or smooth the 3D print will be.
3. Solidify Modifier
   - Add a Solidify Modifier after Subdivision Surface. Solidify gives the surface physical thickness so that it can eventually become a printable object.
   - Experiment with both the "Simple" mode and the "Complex" mode with the Solidify Modifier.
   - Experiment with enabling and disabling "even thickness".
   - Remember to change the Solidify offset from -1.0000 to 1.0000 so it becomes thicker outward from the base mesh.
   - Experiment with different thicknessesAdjust the thickness based on the scale of your object and the requirements of the 3D printer.
   - Use a multiple of 0.4 mm for compatibility with the 3D printer nozzle. 1.6 mm, 2.0 mm, 2.4 mm or 2.8 mm are reasonable starting thicknesses.

While drawing and editing the base topology, the modifiers may make the mesh visually complicated. You cna turn modifier visibility off in Edit Mode so that you can clearly see and edit the original low poly mesh shell. Then when you switch back to Object Mode, the modifiers will show and you can evaluate the smooth fitted shell and then switch back to edit mode to make changes.Move repeatedly between Edit Mode and Object Mode while working.

#### 3. Preserve the Base Shell

Once the base shell fits the body correctly make a duplicate and save it as as a backup archive. Do not modify this copy. It gives you a clean version to return to if later modeling or sculpting damages the working mesh.

1. Duplicate the completed shell.
2. Keep one copy completely unchanged.
3. Create a collection named something similar to `Archive`
4. Move the untouched copy into this collection.
5. Hide the archive collection.

#### 4. Create the Body Extension

Use the second copy of the shell to develop your sculpture. You may stretch the original shell directly or attach completely new geometry to it. The connection between the fitted body surface and the new extension should feel intentional. Avoid simply placing an unrelated object on top of the scan.

#### 5. Export for 3D Printing

2. Make sure all mesh components are physically connected in 3D space.
3. Apply modifiers when appropriate to confirm a manifold mesh. You can export a STL file from Blender by choosing selection only and applying the modifies on export also.
4. Remove unwanted internal geometry.
5. Use Boolean Union or other modeling techniques to combine intersecting forms when necessary.
6. Check for non-manifold geometry with the 3D Print Toolbox add on in Blender
   - [3D Print Toolbox Addon in Blender](../../../../3d-modeling/blender/3d-print-toolbox-addon-blender.md)
   - [Make Any 3D Model Manifold in Blender - 3D Print Toolbox Guide](../../../../digital-fabrication/3d-printing/make-any-model-manifold-3d-print-toolbox-blender.md)
7. Export the completed extension as an `STL` file. _Make sure to have the mesh selected in Blender and to check the selection only box in the export dialogue._
   - [Export STL Blender](../../../../digital-fabrication/3d-printing/export-stl-blender.md)
8. Slice and 3D print the model.

### Body Extension Ideas

How you make a body extension is completely up to you. The following starter concepts are meant to stir your imagination as you work on your projects. These are completely optional.

#### Protective Growth

Create an armor-like shell that grows outward from part of the body. Allow the protection to exaggerate the body's existing shape rather than simply covering it.

#### Extended Fingers

Create extremely long fingers or claws extending from a scanned hand. Experiment with repetition, tapering, curves, and different lengths.

#### Shoulder Architecture

Turn the shoulder into a large structural form that expands upward or outward. Think about architectural elements such as ribs, arches, frames, or scaffolding.

#### Second Spine

Create an external spine that follows the back but gradually separates from the body. Exaggerate the vertebrae into increasingly sculptural forms.

#### Facial Extension

Create a mask that fits closely around part of the face and then grows dramatically outward. Extend the nose, forehead, jaw, ears, or another feature beyond normal proportions.

#### Additional Limb

Use the fitted shell as the starting point for an extra arm, hand, horn, tentacle, or other appendage. The transition from the body into the new limb should appear continuous.

#### Repeated Anatomy

Duplicate a recognizable anatomical form such as fingers, ears, noses, or facial features across the extension. Repetition can gradually change scale, spacing, or orientation.

#### Body Handle

Design an exaggerated handle, grip, or attachment point emerging from the body. Consider what it would mean if another person could physically hold or manipulate the wearer through the object.

#### Organic Growth

Use sculpting and remeshing to create a branching, swollen, folded, or cellular growth emerging from the fitted surface. Allow the geometry to transition gradually from recognizable anatomy into abstraction.

#### Impossible Prosthetic

Invent a prosthetic for a function the human body does not actually need. It might amplify balance, hearing, reach, storage, display, movement, communication, or some imaginary ability.

## Grading Rubric

<div class="responsive-table-markdown">

| Objective                                      | Points |
| ---------------------------------------------- | ------ |
| PolyQuilt Retopology and Base Shell            | 15     |
| Shrinkwrap, Subdivision, and Solidify Workflow | 10     |
| Design and Development of Body Extension       | 20     |
| Physical 3D Print                              | 25     |
| Blender File Uploaded                          | 10     |
| Render File Uploaded                           | 10     |
| File Management and Labeling                   | 10     |

</div>
