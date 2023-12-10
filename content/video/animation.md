---
title: Animation
date: 2023-05-23T21:59:42
lastmod: 2023-09-07T20:57:01
tags:
  - stub
---

Animation can be broadly separated into to categories: 2D Animation and 3D Animation.

## 2D Animation

### Animate CC Code Snippets

#### Animate CC ActionScript for Looping Animation

Loop animation X times - place code on desired end frame

```
if (!this.looped) this.looped = 1;
if (this.looped++ == 3) this.stop();

Frame 60 (Timeline endframe)
this.gotoAndPlay(0); // This loops the whole time line but can just click loop in publish settings
```

## 3D Animation

3D animation is accomplished with 3D modeling software such as [Blender](../3d-modeling/blender/blender.md) or [Maya](../3d-modeling/maya/maya.md)
