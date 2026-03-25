---
title: Keyframes
date: 2023-06-14T11:42:20
lastmod: 2026-03-25T07:19:07-04:00
---

Keyframes describe an attribute at a specific point in time. That attribute could be position, scale, rotation, opacity, color or many other parameters.

A single keyframe by itself does not create visible motion or change, nothing happens. Change or animation happens if a second keyframe is set at a different point in time and has a different value for that same attribute as the first keyframe. , then software can "tween" or animate the transition from one keyframe value to another by interpolation between the keyframe values.

How far apart the keyframes are on the timeline determines the speed of the change. If two keyframes are close together, the change happens quickly. If they are farther apart, the change happens more slowly. The way that motion progresses between keyframes is determined by the interpolation type.

## Keyframe Interpolation

Interpolation describes how animation moves from one keyframe to the next. Different interpolation types change the feeling of motion and can make an animation appear mechanical, smooth, abrupt, or more natural.

- Step or Hold
- Linear
- Ease In
- Ease Out
- Bezier

<figure>

[![Step or Hold Keyframes](attachments/Step-Hold-Keyframe-Interpolation.gif)](attachments/Step-Hold-Keyframe-Interpolation.gif)

<figcaption>

Step or Hold Keyframes

</figcaption>
</figure>
<figure>

[![Linear Keyframes](attachments/Linear-Keyframe-Interpolation.gif)](attachments/Linear-Keyframe-Interpolation.gif)

<figcaption>

Linear Key Frames

</figcaption>
</figure>

<figure>

[![All Ease In Keyframes](attachments/Ease-In-Keyframe-Interpolation.gif)](attachments/Ease-In-Keyframe-Interpolation.gif)

<figcaption>

All Ease In Key Frames

</figcaption>
</figure>

<figure>

[![All Ease Out Keyframes](attachments/Ease-Out-Keyframe-Interpolation.gif)](attachments/Ease-Out-Keyframe-Interpolation.gif)

<figcaption>

All Ease Out Key Frames

</figcaption>
</figure>

<figure>

[![Ease In then Ease Out Key Frames](attachments/Ease-In-Then-Ease-Out-Keyframe-Interpolation.gif)](attachments/Ease-In-Then-Ease-Out-Keyframe-Interpolation.gif)

<figcaption>

Ease In then Ease Out Key Frames

</figcaption>
</figure>

<figure>

[![Ease Out then Ease In Key Frames](attachments/Ease-Out-Then-Ease-In-Keyframe-Interpolation.gif)](attachments/Ease-Out-Then-Ease-In-Keyframe-Interpolation.gif)

<figcaption>

Ease Out then Ease In Key Frames

</figcaption>
</figure>

## Keyframe Graph Editor

Graph editors in programs like [After Effects](../video/after-effects/after-effects.md), [Maya](../3d-modeling/maya/maya.md), [Blender](../3d-modeling/blender/blender.md) and other animation and motion graphics software, allow you to fin tune the interpolation of keyframes. On a standard timeline you can change the frame of the keyframe and its basic interpolation but with the graph editor more complex interpolations, including "overshooting" the keyframe value are possible.

In the graphs the X axis show time and the Y axis shows the value of the parameter being animated.

<div class="gallery-grid">
<figure>

[![Hold Keyframe Graph](attachments/hold-keyframe-graph.jpg)](attachments/hold-keyframe-graph.jpg)

<figcaption>

Hold Keyframe Graph

</figcaption>
</figure>

<figure>

[![Linear Keyframe Graph](attachments/linear-keyframe-graph.jpg)](attachments/linear-keyframe-graph.jpg)

<figcaption>

Linear Keyframe Graph

</figcaption>
</figure>

<figure>

[![All Ease In Keyframe Graph](attachments/ease-in-keyframe-graph.jpg)](attachments/ease-in-keyframe-graph.jpg)

<figcaption>

All Ease In Keyframe Graph

</figcaption>
</figure>

<figure>

[![All Ease Out Keyframe Graph](attachments/ease-out-keyframe-graph.jpg)](attachments/ease-out-keyframe-graph.jpg)

<figcaption>

All Ease Out Keyframe Graph

</figcaption>
</figure>

<figure>

[![Ease In then Ease Out Keyframe Graph](attachments/ease-in-then-ease-out-keyframe-graph.jpg)](attachments/ease-in-then-ease-out-keyframe-graph.jpg)

<figcaption>

Ease In then Ease Out Keyframe Graph

</figcaption>
</figure>

<figure>

[![Ease Out thn Ease In Keyframe Graph](attachments/ease-out-then-ease-in-keyframe-graph.jpg)](attachments/ease-out-then-ease-in-keyframe-graph.jpg)

<figcaption>

Ease Out thn Ease In Keyframe Graph

</figcaption>
</figure>
</div>

## Examples of Keyframe Use

- [maya-3d-animation](../3d-modeling/maya/3d-animation-maya.md)
- [animation](animation.md)
- [blender-3d-animation](../3d-modeling/blender/3d-animation-blender.md)
