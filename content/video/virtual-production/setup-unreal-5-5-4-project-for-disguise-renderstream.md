---
title: Setup Unreal Engine 5.5.4 Project for disguise RenderStream
date: 2025-10-07T04:35:38
lastmod: 2025-10-08T06:54:32
---

To use an Unreal Project in disguise for [virtual production](./virtual-production.md) it must be setup correctly with the disguise RenderStream plugin with properly named "Cine Camera" actors. The versions of Unreal Engine, RenderStream plugin, and disguise must all match based on your specific setup. This guide shows how to setup virtual Production with Unreal Engine 5.5.4.

## Basic Instructions for Empty Unreal Scene

1. Make sure you have the correct version (5.5.4) of Unreal Engine installed [How to install previous versions of Unreal Engine](../../3d-modeling/unreal-engine/install-previous-version-of-unreal-engine.md)
2. Create a new Unreal Project version (5.5.4) - [How to Create a New Project in Unreal Engine 5.5.4](../../3d-modeling/unreal-engine/create-new-project-in-unreal-engine.md)
3. Download the RenderStream Plugin from disguise and place it in a Plugins folder inside the Unreal Project [How to Install RenderStream for Unreal Engine 5.5](./install-disguise-renderstream-plugin.md)
4. Setup cameras for virtual production in the Unreal Project
   - Create an Actor labeled `RS_Actor` for the camera root
   - Create 3 Cine Camera Actors labled `RS_Main_Cam`, `RS_OOF_Cam`, and `RS_AR_Cam`
   - Place these cameras under the camera root
   - [How to setup RenderStream Cameras in Unreal for disguise](https://youtu.be/Vb0-OxnYzB0)
