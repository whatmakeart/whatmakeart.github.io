---
title: Fab Environment to disguise RenderStream Setup Unreal 5.5.4
date: 2025-10-10T06:10:29
lastmod: 2025-10-10T06:40:56
---

<div class="video-grid">

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/gJLWQFV2bWA?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

</div>

[Fab Environment to disguise RenderStream Setup Unreal 5.5.4](https://youtu.be/gJLWQFV2bWA)

### Setup New Unreal Project

1. Start with a blank project. Name it something you’ll recognize later in disguise. Click Create.
2. Open Edit → Project Settings. We’ll touch two items right away because one of them needs a restart.
   - In the search box, type `pixel`
     - Set Framebuffer Pixel Format to 8-bit. This requires restarting Unreal.
   - In the search box, type `alpha`
     - Enable Support for Alpha Channel (a.k.a. turn on alpha output).
   - Close Project Settings, File → Save All
3. Make sure the RenderStream plugin is present in this project. [How to Install RenderStream Plugin](./install-disguise-renderstream-plugin.md)
   - Place the RenderStream plugin inside your project’s Plugins folder.
4. Restart Unreal.

### Add Fab Environment

1.  Open the Fab (Marketplace) Library. This example uses a coffee shop environment, but any compatible environment works.
2.  Choose Add to Project, pick MyFabProject, and click Add to Project. Unreal will download any required assets.
3.  When it finishes, relaunch or reopen the project.
4.  Open the Content Drawer. You should see the environment’s folders. Note the name of maps you want to use.
5.  Go to Edit → Project Settings again. Search for `maps`
6.  Set all of these to the desired default map, in this example it is the Showcase Map.
    - Editor Startup Map → Showcase
    - Game Default Map → Showcase
    - Transition Map → Showcase
    - Server Default Map → Showcase
7.  While still in Project Settings, search for `scene selection`
    - Set Scene Selector to Maps.
8.  Close Project Settings.
9.  From the Content Browser, open the selected map so you can see it.

### disguise Cine Camera Actor Setup

Make one clean “camera root” that moves with tracking, and then parent three cine cameras to it.

1. Create a Basic Actor as the camera root
   - Add → Create Basic Actor
   - Name it RS_Actor.

RS_Actor is your tracked root. It will receive location/rotation updates from Disguise. Because of that, the child cameras must be zeroed so they ride along correctly.

Add three cameras: Add → search “Cinema” → Cinema Camera Actor. Duplicate it so you have three total (Ctrl+C, then Ctrl+V twice). Select all three, hold Shift, and drag them into RS_Actor so they’re children.

With the three cameras selected, zero their transforms under the Transform section (Location X/Y/Z = 0, Rotation = 0, Scale = 1). This ensures Disguise tracking applied to RS_Actor moves all three together without stacking offsets.

Name them using Disguise-friendly labels:

- RS_MainCam — This is the inner frustum: what the physical camera sees on the LED volume.
- RS_OffCam — This is the outer frustum: everything on the LED that the physical camera does not see, great for lighting and reflections continuity.
- RS_ARCam — This is your augmented reality camera for elements composited over the plate.

Select each of the three cameras and add the same component: Add Component → RenderStream Channel Definition. Do this for RS_MainCam, RS_OffCam, and RS_ARCam.

Now tweak the AR camera’s channel definition. Select RS_ARCam, find its RenderStream Channel Definition component:

- Set Default Visibility to Hidden. This keeps the base world from showing through the AR pass by default.
- Search for Fog in that component and uncheck Fog and Volumetric Fog.
- Optionally search for Sky and uncheck Sky Lighting to prevent baked or ambient sky light from leaking into AR.

These visibility choices keep the AR pass clean so it only shows what you explicitly force visible.

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
   - RS_Actor receives tracking from Disguise.
   - RS_Main_Cam is your inner frustum render to LED.
   - RS_Off_Cam fills the outer frustum for lighting/reflections beyond the physical camera’s view.
   - RS_ARC_am outputs a clean AR layer with the world hidden by default and AR_Cube forced visible.
6. You can now transfer the project to your render nodes and connect it in disguise.

If the little camera preview window is blocking your view, go to Edit → Editor Preferences, search for camera view, and uncheck Preview Selected Cameras.
