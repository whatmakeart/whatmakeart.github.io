---
title: Delete All Materials Blender Script
date: 2024-09-04T20:30:59
lastmod: 2024-09-05T06:25:51
tags:
  - Blender
  - Scripts
---

This Blender Python Script deletes and materials and material slots from Object meshes in Blender.

```python
import bpy

# Function to remove all material slots and materials from objects
def remove_materials_and_slots():
    # Loop through all objects in the scene
    for obj in bpy.data.objects:
        if obj.type == 'MESH' and obj.material_slots:
            # Select the object
            bpy.context.view_layer.objects.active = obj
            obj.select_set(True)
            # Remove all material slots
            while obj.material_slots:
                bpy.ops.object.material_slot_remove()

    # Remove any unused materials from the file
    bpy.ops.outliner.orphans_purge(do_local_ids=True, do_linked_ids=True, do_recursive=True)
    print("All materials and slots have been removed, and unused materials have been purged.")

# Run the function
remove_materials_and_slots()
```
