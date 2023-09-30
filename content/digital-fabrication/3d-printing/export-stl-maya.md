---
title: Export STL Maya
date: 2023-06-16T05:46:02
lastmod: 2023-09-30T06:37:56
---

Before exporting a mesh as an STL for 3D printing, it is important to make sure that the mesh is manifold or watertight. Otherwise the file will not be able to be 3D printed.

## Enable STL Translator Bundle Plugin

By default [Maya](../../3d-modeling/maya/maya.md) does not have an STL export option. The STL plugin needs to be enabled.

Go to Windows > Settings / Preferences > Plug In Manager ...

[![Maya Plugin Manager](2023-maya-plugin-manager.png)](2023-maya-plugin-manager.png)

In the search box, type "STL"

[![Maya STL Translator Bundle](2023-maya-stl-translator-bundle.png)](2023-maya-stl-translator-bundle.png)

Click the checkbox for enable and auto load.

Now if you export a selection, STL is one of the file format options.

[![Maya export STL Option](2023-maya-export-stl-option.png)](2023-maya-export-stl-option.png)
