---
title: "08.07 Export STL Maya"
date: 2020-01-26T23:11:13Z
draft: false
---

Before exporting a mesh as an STL for 3D printing, it is important to make sure that the mesh is manifold or watertight. Otherwise the file will not be able to be 3D printed.

## Enable STL Translator Bundle Plugin

By default Maya does not have an STL export option. The STL plugin needs to be enabled.

Go to Windows > Settings / Preferences > Plug In Manager ...

[![Maya Plugin Manager](2023-maya-plugin-manager.png)](2023-maya-plugin-manager.png)

In the search box, type "STL"

[![Maya STL Translator Bundle](2023-maya-stl-translator-bundle.png)](2023-maya-stl-translator-bundle.png)

Click the checkbox for enable and auto load.

Now if you export a selection, STL is one of the file format options.

[![Maya export STL Option](2023-maya-export-stl-option.png)](2023-maya-export-stl-option.png)
