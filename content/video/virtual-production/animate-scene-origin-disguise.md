---
title: Animate Scene Origin in disguise
date: 2026-10-21T12:00:00-04:00
lastmod: 2026-10-21T21:05:41-04:00
---

## Animate Object Preset layer

1. Create a RenderStream layer with a workload running in Unreal Engine
2. Open the RenderStream layer in the disguise timeline _left click on layer_
3. Open the Workload of the RenderStream layer
4. Click on the mrset backplate mapping to show the scene origin property
5. Create a new Scene origin by typing a name and clicking the OK button
   - Label it `SceneOrigin1` _or other appropriate name such as `shot_1`_
6. Create a new layer in the timeling `Control + L`
7. Select the layer type `Animate Object Preset`
8. Create a new `Config`
   - Label it `SceneOriginLocation`
9. Add an object to the `Config`
   - Select the scene origin created earlier
10. Change the Position and Rotation parameters of the selected scene origin object
11. Right click on the text of the name of the scene origin to bring up the duplicate option.
    - Type in a new scene origin name and click OK
12. Change the Position and Rotation parameters of the new scene origin object
13. Split the timeline into a new section
14. Click the keyframe stopwatch for the Scene Origin Config
15. Add a keyframe in each timeline section to be able to switch to each origin
16. By default the origin will interpolate between the two keyframed scene origins
    - Prevent or control this by adding master keyframes that either control the rate or make it toggle
