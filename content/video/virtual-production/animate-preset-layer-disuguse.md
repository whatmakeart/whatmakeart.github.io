---
title: AnimateObjectPreset Layer in disguise
date: 2025-11-12T05:16:52
lastmod: 2025-11-12T05:40:24
---

To create a new layer in disguise, select the timeline and press Control + L.

1. To see the origin of a RenderStream layer, click on a frame in the timeline below the RenderStream Layer.
2. Left Click on the Layer.
3. Then Right Click on the Workload name.
4. Click on the mrset mapping.
5. This will have a property called `Scene origin` which may be set to NONE by default.
6. Click to create a scene origin and label it as you prefer, such as _sceneOrigin_.
7. Once a Scene origin is created then you can change the offset and rotation of the scene origin.

### Using Animate Object Preset to Control Scene Origin

1. Press Control L to create a new layer in the timeline.
2. Select `AnimateObjectPreset`
3. Click on Config to make a new `ScreenConfiguration` instead of the default NONE and label it _sceneOriginPosition01_
4. Click the + button to add the previously created object _sceneOrigin_ from the mrset mapping.
5. This imports the object options, Position, Rotation, and Animate, into the _sceneOriginPosition01_ Config
6. Change the position and rotation as desired.
7. Duplicate the Config and label it _sceneOriginPosition02_

### Setup Switchable Camera Positions

1. Split up the timeline under the AnimateObjectPreset on the timeline to as many shots as needed.
2. Select the circular icon on the Config of the AnimateObjectPreset to start adding keyframes to keyframe between different Configs or in this case camera origins.
3. Select a point farther down the timeline and change to the other Config to set a new keyframe.
4. If you don't want to animate between camera positions then add keyframes to the Master control and set to 0.
5. The keyframed AnimateObjectPreset can extend over multiple RenderStream instances on the disguise timeline.
