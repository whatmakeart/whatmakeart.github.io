---
title: Basic Unreal RenderStream Ready Project
date: 2025-10-08T06:58:37
lastmod: 2025-10-08T07:03:41
---

The goal here is a clean, predictable template you can drop into a virtual production workflow: a tidy map, three correctly named cine cameras, and the RenderStream Channel Definition on each, plus an AR-only element to prove the routing works. I’ll walk you through what to click and why, with a few guardrails so you don’t get tripped up by default editor behavior.

### Initial Setup

- Make sure the version of Unreal Engine matches the version of disguise you’re using.
- You’ll also need the disguise RenderStream plugin placed inside your Unreal project’s Plugins folder.
- Open Unreal with the correct engine version and make a new project.
- When the empty level appears, the Content Drawer won’t show any Levels yet because you haven’t saved one.
- Go to File → Save Current Level and name it something sensible. In the video I call it NewMap
- After saving, open the Content Drawer and you’ll see your map asset living in the project.

Drop the RenderStream plugin into YourProject/Plugins. Relaunch the project so Unreal detects the new plugin. On reopen, Unreal will notify you about new plugins and may prompt you to update the .uproject for the plugin—go ahead and accept. Once updated, we’ll tune a few project settings so RenderStream behaves exactly like we want.

## Tuning project settings for RenderStream

Head to Edit → Project Settings.

Search for “pixel.” Change the output from 10-bit to 8-bit for this setup. When we flip this bit depth, Unreal will later ask for a restart—plan for that.

Search for “alpha.” Enable alpha output. This allows you to send transparency where needed.

Search for “scene selection.” Under Scene Selector, choose Maps. Streaming Levels can be great for interactive content, but the general RenderStream workflow is simpler and more stable if you target maps.

Search for “map.” Under Default Maps, set every startup/transition slot to your NewMap:
• Editor Startup Map → NewMap
• Game Default Map → NewMap
• Transition Map → NewMap
• Server Default Map → NewMap
You can override these later in disguise or Unreal, but defaulting everything to one known map saves headaches.

Close Project Settings, then File → Save All. Because you switched from 10-bit to 8-bit, restart Unreal now.

## Build a clean camera rig: root + three cine cameras

Back in the level, add a simple parent to drive everything. Click the Add button and choose Basic Actor. Name it CameraRoot (this will be our rig handle). With CameraRoot selected, zero out its transform so it lives at 0,0,0. You can move CameraRoot later to position the rig in your world, but keeping the children zeroed prevents double transforms once tracking data arrives from disguise.

Add a camera: click Add and search for “Cine.” Choose Cine Camera Actor. If you don’t see a Cine Camera Actor at all, that’s a red flag—the RenderStream plugin may not be installed or recognized yet.

By default, Unreal likes to show the selected camera’s viewport in the editor. If that preview distracts you, go to Edit → Editor Preferences, search for “Camera View,” and uncheck “Preview Selected Cameras.”

Duplicate the cine camera twice (Ctrl+C, then Ctrl+V twice) so you have three. Shift-select all three and drag them onto CameraRoot in the Outliner so they become children. Now select each cine camera and zero out its transform. The rule is simple: never move the individual cine cameras; always move CameraRoot. Tracking data from disguise will add on top of the rig, and keeping the children at 0,0,0 maintains clean, predictable math.

Rename the cameras precisely:
• RS_Main_Cam — this is your hero view, the frustum captured by the physical camera on set.
• RS_OOf_Cam — the “outer frustum” camera. It renders everything your main frustum is not showing. It’s useful for lighting, reflections, and set extension on the LED volume.
• RS_AR_Cam — the augmented reality camera. We’ll use this to render AR-only elements.

## Add the RenderStream Channel Definition to each camera

Select RS_Main_Cam, search in the Details panel for “render,” and add the RenderStream Channel Definition component. Repeat for RS_OOf_Cam and RS_AR_Cam. All three cameras should now have their own Channel Definition.

## Special tweaks for the AR camera

Select RS_AR_Cam and click its RenderStream Channel Definition component.

Set Default Visibility to Hidden. AR elements should not leak into your main or outer frustum by default.

Search “fog” and uncheck Fog and Volumetric Fog. AR passes often need to be perfectly clean so they composite predictably—turning off atmospheric effects helps.

Search “sky.” Depending on your setup, you may also need to disable skylight or sky lighting contributions for the AR pass so it stays artifact-free. If you start seeing lighting contamination in AR, this is the first place to look.

## Create a quick AR-only test object

We’ll make a tiny AR proof so you can see the routing working end-to-end.

Click Add → Shapes → Cube. Name it something like AR_Cube. In the Details panel, set Mobility to Movable. That’s important—Unreal won’t let you parent a Static object where we need it.

Drag AR_Cube under CameraRoot in the Outliner so it’s part of the camera rig hierarchy.

Now tell the AR channel to force this object visible only for AR. Select RS_AR_Cam, select its RenderStream Channel Definition, find the Force Visible list, click the plus icon, grab the eyedropper, and pick your AR_Cube in the viewport or Outliner. That’s it: AR_Cube will only appear in the AR camera’s RenderStream, not in the main or outer frustum outputs.

## Save and sanity-check

File → Save All.

Quick checklist before you move on:
• NewMap exists and is set as every default map.
• RenderStream plugin lives in YourProject/Plugins and the project was restarted after adding it.
• Project Settings: 8-bit output and alpha enabled; Scene Selector = Maps.
• One Basic Actor named CameraRoot at 0,0,0.
• Three child cine cameras at 0,0,0 named RS_Main_Cam, RS_OOf_Cam, RS_AR_Cam.
• Each camera has a RenderStream Channel Definition component.
• RS_AR_Cam: Default Visibility = Hidden; Fog and Volumetric Fog disabled; skylight off if needed.
• An AR_Cube parented under CameraRoot, set to Movable, and added to RS_AR_Cam’s Force Visible list.

At this point you have a lean Unreal scene that’s ready to drop into a disguise virtual production project. The cameras are named in a way your disguise project can target, the AR path is isolated, and the map defaults keep Unreal from spawning you into the wrong level. From here, get the project onto your render nodes for your specific disguise setup and start wiring up tracking and color workflows. This template is small on purpose so it’s easy to duplicate for new scenes and hard to accidentally break.
