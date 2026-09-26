---
title: 05.03 Redesigned Body Extension 3D Print Assignment
date: 2026-09-24T09:00:00-04:00
lastmod: 2026-09-26T11:01:46-04:00
canvas_mobile_fallback: true
---

## Assignment Deliverables

1. 3D Print of redesigned body extension sculpture
   - _bring updated physical 3D print to class_
2. Revised Blender File
   - Label file YYYY-MM-DD Lastname Firstname Revised Body Extension Model (`.blend`)
3. Updated Render image of Body Extension 3D Print Redesign
   - Label file YYYY-MM-DD Lastname Firstname Revised Body Extension Render (`.png`, `.jpg`)

## Assignment Overview

Consider your first Body Extension 3D print as a prototype. Use the physical print to evaluate what worked, what did not work, and what could become more interesting before producing a second version.

Examine the first print from multiple angles and compare it to the original Blender model. Look for areas that are too thin, fragile, awkwardly connected, difficult to print, visually unresolved, or less dramatic than they appeared on screen.

Return to your Blender file and make meaningful revisions to both the design and the printability of the body extension. Your second version should not simply be a reprint of the first model. _If you printed a second version in class, then continue the revision process and bring a third version to next class._

### Process

#### 1. Evaluate the First Body Extension 3D Print

Before changing the Blender file, inspect the physical print. Use the print as physical evidence of the design. Do not merely rely only on how the model looks on screen.

- Are any parts too thin or fragile?
- Did any parts fail or deform during printing?
- Are connections between forms strong enough?
- Does the extension fit the body as intended?
- Are there areas that feel unfinished or accidental?
- Does the form look interesting from multiple viewpoints?
- Are some extensions too small or visually weak?
- Could parts be longer, larger, thicker, repeated, stretched, twisted, or exaggerated?
- Could transitions between the body shell and extensions be sculpted more intentionally?
- Are there areas where additional modeling or Boolean operations could improve the form?

#### 2. Revise the Blender Model

Preserve your original version in an `Archive` collection in Blender before beginning major revisions. It is also a good idea to save your file incrementally. Version control is essential to make non-destructive modifications and iterative design changes. Keep versions with modifiers unapplied and versions with the modifiers applied in your `Archive` collection. You can make multiple collections for different design pathways. Remember to label individual meshes and objects in your file as much as possible. Your future self will thank you.

Make changes based on your evaluation of the first physical 3D print. The goal is not simply to repair technical problems. Use the second version as an opportunity to push the sculptural idea further. The revised model should show clear development from the first version. The first or second or third print is not a failure if something does not work. They are all interative prototypes that give you information for the next version.

Possible revisions include:

- Thicken fragile areas.
- Strengthen connections between parts.
- Increase the size or length of extensions.
- Make forms more dramatic or exaggerated.
- Improve transitions with Sculpt Mode.
- Add or subtract geometry with Boolean operations.
- Stretch or distort proportions.
- Duplicate or repeat forms.
- Simplify areas that became too complicated.
- Improve the silhouette from different viewpoints.
- Change the relationship between the extension and the body.
- Remove forms that do not contribute to the overall sculpture.

#### 3. 3D Print the New Model

_There are a number of Tanslucent PLA Filament colors for you to use as well as semi-flexible TPU filaments._

1. Make sure all mesh components are physically connected in 3D space.
   - Review the [3D Print Design Guidelines](../../../../digital-fabrication/3d-printing/3d-print-design-guidelines.md)
2. Apply modifiers when appropriate to confirm a manifold mesh. You can export a `STL` file from Blender by choosing selection only and applying the modifies on export also.
3. Remove unwanted internal geometry.
4. Use Boolean Union or other modeling techniques to combine intersecting forms when necessary.
5. Check for non-manifold geometry with the 3D Print Toolbox add on in Blender
   - [3D Print Toolbox Addon in Blender](../../../../3d-modeling/blender/3d-print-toolbox-addon-blender.md)
   - [Make Any 3D Model Manifold in Blender - 3D Print Toolbox Guide](../../../../digital-fabrication/3d-printing/make-any-model-manifold-3d-print-toolbox-blender.md)
6. Export the completed extension as an `STL` file. _Make sure to have the mesh selected in Blender and to check the selection only box in the export dialogue._
   - [Export STL Blender](../../../../digital-fabrication/3d-printing/export-stl-blender.md)
7. Slice and 3D print the model.
   - [Slice Model in Bambu Studio](../../../../digital-fabrication/3d-printing/slice-model-in-bambu-studio.md)

## Grading Rubric

<div class="responsive-table-markdown">

| Objective                                | Points |
| ---------------------------------------- | ------ |
| Meaningful Development of Body Extension | 30     |
| Revised Physical 3D Print                | 40     |
| Revised Blender File Uploaded            | 10     |
| Revised Render Image Uploaded            | 10     |
| File Management and Labeling             | 10     |

</div>
