---
title: Rendering Basics - Blender
date: 2023-06-14T13:53:02
lastmod: 2025-09-30T17:53:45
---

## Eevee and Cycles

[Blender](blender.md) comes with two render engines installed, the real-time renderer Eevee and the light transport renderer Cycles. Eevee will render much faster than Cycles with the down side of not having true light bounces. Cycles can produce stunning renders but the processing can take much longer than Eevee. For many simple projects, Eevee is the preferred way for speed unless your project needs some of the advanced rendering capabilities of Cycles.

## Add Lights in Blender

The default scene in Blender starts with a point light, a cube and a camera. Lights available in Blender include point, spot, sun, and area.

### Point Light - Blender

The Point Light has adjustments for color, power, diffuse, specular, volume, and radius. All of the attributes of a light are able to be keyframed and animated.

- Color - Changes the color cast of the light
- Power - starts with 1000 W and can increase a lot for large scenes. Light "falls off" or decreases rapidly as it is moved away from its target so often lights need more power to properly illuminate a scene

### Spot Light - Blender

### Sun Light - Blender

- Covers the whole scene and can indicate weather and time of day
- Can add a photo sphere or an HDRI image for more detail in reflections and shadows in a render

### Area Light - Blender

## Blender Rendering Tutorials

- [Blender Basic Render](https://youtu.be/Qw8jl8mKEsY)
- [Blender Tri Lighting Add On](https://youtu.be/SbMuowrbKe0)
- [Blender Infinite Background for Render](https://youtu.be/lsEYDk00WFs)
- [Add HDRI Background Blender](https://youtu.be/k-moDmBUrrI)
- [Render Animation Sequence](https://youtu.be/KUF6M9pmjak)

<div class="video-grid">

<div class="video-card">

### Blender Basic Render

<div class="iframe-16-9-container">
<iframe class="youTubeIframe"  width="560" height="315" src="https://www.youtube.com/embed/Qw8jl8mKEsY?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### Blender Tri Lighting Add On

<div class="iframe-16-9-container">
<iframe class="youTubeIframe"  width="560" height="315" src="https://www.youtube.com/embed/SbMuowrbKe0?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### Blender Infinite Background

<div class="iframe-16-9-container">
<iframe class="youTubeIframe"  width="560" height="315" src="https://www.youtube.com/embed/lsEYDk00WFs?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### Render Animation Sequence

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/KUF6M9pmjak?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### Add HDRI Background Blender

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/k-moDmBUrrI?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

</div>
