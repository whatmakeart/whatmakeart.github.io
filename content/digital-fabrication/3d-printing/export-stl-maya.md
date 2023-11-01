---
title: Export STL Maya
date: 2023-06-16T05:46:02
lastmod: 2023-11-01T08:13:57
---

Before exporting a mesh as an STL for 3D printing, it is important to make sure that the mesh is manifold or watertight. Otherwise the file will not be able to be 3D printed.

## Enable STL Translator Bundle Plugin

By default [Maya](../../3d-modeling/maya/maya.md) does not have an STL export option. The STL plugin needs to be enabled.

Go to Windows > Settings / Preferences > Plug In Manager ...

[![Maya Plugin Manager](attachments/2023-maya-plugin-manager.png)](attachments/2023-maya-plugin-manager.png)

In the search box, type "STL"

[![Maya STL Translator Bundle](attachments/2023-maya-stl-translator-bundle.png)](attachments/2023-maya-stl-translator-bundle.png)

Click the checkbox for enable and auto load.

Now if you export a selection, STL is one of the file format options.

[![Maya export STL Option](attachments/2023-maya-export-stl-option.png)](attachments/2023-maya-export-stl-option.png)
