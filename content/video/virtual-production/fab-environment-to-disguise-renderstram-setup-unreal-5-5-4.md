---
title: Fab Environment to disguise RenderStream Setup Unreal 5.5.4
date: 2025-10-10T06:10:29
lastmod: 2025-12-23T10:12:35-04:00
---

<div class="video-grid">

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/gJLWQFV2bWA?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

</div>

The following [virtual production](virtual-production.md) guide shows [how to setup a Fab Environment for disguise RenderStream with Unreal 5.5.4](https://youtu.be/gJLWQFV2bWA). If you do not need an environment from Fab then refer to [How to setup a Blank Environment for disguise RenderStream with Unreal 5.5.4](blank-environment-to-disguise-renderstream-setup-unreal-5-5-4.md).

### Setup New Unreal Project

1. Make sure you use the Unreal Engine Version that works with your version of disguise. [How to install previous versions of Unreal Engine](../../3d-modeling/unreal-engine/install-previous-version-of-unreal-engine.md)
2. Start with a blank project. Name it something you’ll recognize later in disguise. Click Create. [How to create a new Project in Unreal Engine](../../3d-modeling/unreal-engine/create-new-project-in-unreal-engine.md)
3. Open Edit → Project Settings. We’ll touch two items right away because one of them needs a restart.
   - In the search box, type `pixel`
     - Set Framebuffer Pixel Format to 8-bit. This requires restarting Unreal.
   - In the search box, type `alpha`
     - Enable Support for Alpha Channel (a.k.a. turn on alpha output).
   - Close Project Settings, File → Save All
4. Make sure the RenderStream plugin is present in this project. [How to Install RenderStream Plugin](install-disguise-renderstream-plugin.md)
   - Place the RenderStream plugin inside your project’s Plugins folder.
5. Restart Unreal.

### Add Fab Environment

1.  Open the Fab (Marketplace) Library.
2.  If you do not have any environments from Fab in your Library, make sure to add some. [How to add environments from Fab to your library in Unreal](../../3d-modeling/unreal-engine/add-epic-games-fab-assets-to-library.md) This example uses a coffee shop environment, but any compatible environment works.
3.  Choose Add to Project, pick MyFabProject, and click Add to Project. Unreal will download any required assets. [How to add a Fab Environment to an Existing Unreal Project](../../3d-modeling/unreal-engine/add-fab-3d-environment-to-unreal-project.md)
4.  When it finishes, relaunch or reopen the project.
5.  Open the Content Drawer. You should see the environment’s folders. Note the name of maps you want to use.
6.  Go to Edit → Project Settings again. Search for `maps`
7.  Set all of these to the desired default map, in this example it is the Showcase Map.
    - Editor Startup Map → Showcase
    - Game Default Map → Showcase
    - Transition Map → Showcase
    - Server Default Map → Showcase
8.  While still in Project Settings, search for `scene selection`
    - Set Scene Selector to Maps.
9.  Close Project Settings.
10. From the Content Browser, open the selected map so you can see it.

### disguise Cine Camera Actor Setup

Make one clean “camera root” that moves with tracking, and then parent three cine cameras to it.

1. Create a Basic Actor as the camera root
   - Add → Create Basic Actor
   - Name it `RS_Actor`.
   - `RS_Actor` is your tracked root. It will receive tracking updates from disguise, so the child cameras must be zeroed so they ride along correctly.
2. Add three Cine Camera Actors.
   - Go to Add → search “Cine” → Cinema Camera Actor.
   - Duplicate it so you have three total (Ctrl+C, then Ctrl+V twice)
   - Select all three, hold Shift, and drag them into `RS_Actor` so they are children.
   - _If the camera preview window is blocking your view, go to Edit → Editor Preferences, search for camera view, and uncheck Preview Selected Cameras._
3. Select each of the cameras individually and zero their transforms under the Transform section (Location X/Y/Z = 0, Rotation = 0, Scale = 1). This ensures the Cine Camera Actors Unreal position is not added to the disguise tracking data.
4. Relabel each of the cameras
   - `RS_Main_Cam` — This is the main cam or inner frustum shows what the physical camera sees on the LED volume.
   - `RS_OOF_Cam` — This is the outer frustum for everything on the LED that the physical camera does not see and is used for lighting and reflections.
   - `RS_AR_Cam` — This is the augmented reality camera.
5. Select each of the three cameras and add the RenderStream Channel Definition
   - Add Component → RenderStream Channel Definition. Do this for `RS_Main_Cam`, `RS_OOF_Cam`, and `RS_AR_Cam`.
6. Open the `RS_AR_Cam` RenderStream Channel Definition.
   - Set Default Visibility to Hidden.
   - Search for Fog in that component and uncheck Fog and Volumetric Fog.
   - Optionally search for Sky and uncheck Sky Lighting.

### Add a simple AR element and force it visible

Add an AR cube so you can confirm your layers are correct inside disguise.

1. Add → Shapes → Cube. Name it `AR_Cube`.
2. By default the cube is Static. Switch it to Movable so you can parent it to the camera root.
3. Drag `AR_Cube` onto `RS_Actor` so it becomes a child of the tracked root.
4. Select `RS_AR_Cam` again.
   - Go to its RenderStream Channel Definition component.
   - Find Force Visible.
   - Click the plus icon.
   - Use the eyedropper to pick AR_Cube.
   - Even though `RS_AR_Cam` default visibility is Hidden, this cube will still render on the AR pass because it’s forced visible.
5. File → Save All. At this point your Unreal scene is RenderStream-ready:
   - `RS_Actor` receives tracking from Disguise.
   - `RS_Main_Cam` is your inner frustum render to LED.
   - `RS_OOF_Cam` fills the outer frustum for lighting/reflections beyond the physical camera’s view.
   - `RS_AR_Cam`outputs a clean AR layer with the world hidden by default and AR_Cube forced visible.
6. You can now transfer the project to your render nodes and connect it in disguise.
7. The disguise template your are using may have different cine camera actors.
