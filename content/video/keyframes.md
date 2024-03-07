---
title: Keyframes
date: 2023-06-14T11:42:20
lastmod: 2024-03-07T05:06:43
---

Keyframes describe an attribute at a point in time. This could be position, scale, rotation, opacity or many other parameters. With only a single keyframe, nothing happens. If a second keyframe is set at a different point in time and has a different value for that same attribute as the first keyframe, then software can "tween" or animate the transition from one keyframe value to another keyframe value.

How far apart the keyframes are on the timeline determines the speed of the change. This can also be changed by changing the type of the keyframe to influence its interpolation.

## Keyframe Interpolation

- Step
- Linear
- Ease In
- Ease Out
- Bezier

<figure>

[![Step or Hold Keyframes](./attachments/Step-Hold-Keyframe-Interpolation.gif)](./attachments/Step-Hold-Keyframe-Interpolation.gif)

<figcaption>

Step or Hold Keyframes

</figcaption>
</figure>
<figure>

[![Linear Keyframes](./attachments/Linear-Keyframe-Interpolation.gif)](./attachments/Linear-Keyframe-Interpolation.gif)

<figcaption>

Linear Key Frames

</figcaption>
</figure>

<figure>

[![All Ease In Keyframes](./attachments/Ease-In-Keyframe-Interpolation.gif)](./attachments/Ease-In-Keyframe-Interpolation.gif)

<figcaption>

All Ease In Key Frames

</figcaption>
</figure>

<figure>

[![All Ease Out Keyframes](./attachments/Ease-Out-Keyframe-Interpolation.gif)](./attachments/Ease-Out-Keyframe-Interpolation.gif)

<figcaption>

All Ease Out Key Frames

</figcaption>
</figure>

<figure>

[![Ease In then Ease Out Key Frames](./attachments/Ease-In-And-Ease-Out-Keyframe-Interpolation.gif)](./attachments/Ease-In-And-Ease-Out-Keyframe-Interpolation.gif)

<figcaption>

Ease In then Ease Out Key Frames

</figcaption>
</figure>

<figure>

[![Ease Out then Ease In Key Frames](./attachments/Ease-Out-and-Ease-In-Keyframe-Interpolation.gif)](./attachments/Ease-Out-and-Ease-In-Keyframe-Interpolation.gif)

<figcaption>

Ease Out then Ease In Key Frames

</figcaption>
</figure>

## Keyframe Graph Editor

Graph editors in programs like After Effects, Maya, Blender and other animation and motion graphics software, allow you to fin tune the interpolation of keyframes. On a standard timeline you can change the frame of the keyframe and its basic interpolation but with the graph editor more complex interpolations, including "overshooting" the keyframe value are possible.

## Examples of Keyframe Use

- [maya-3d-animation](../3d-modeling/maya/3d-animation-maya.md)
- [animation](animation.md)
- [blender-3d-animation](../3d-modeling/blender/3d-animation-blender.md)
