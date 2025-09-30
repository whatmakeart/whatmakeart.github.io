---
title: Rendering Basics - Maya
date: 2023-06-14T13:49:46
lastmod: 2025-09-30T17:53:45
---

## Maya Rendering

### Lighting

To render an object there needs to be light. Add lights just as you would with a real scene in real life. A good way to light an object is with multiple lights pointed at the object at 45 degree angles.

Often the power of lights needs to be turned up tremendously to be able light the scene due to light fall off.

[![Maya two light setup](./attachments/2023-maya-two-light-setup.png)](./attachments/2023-maya-two-light-setup.png)

- [Maya Basic Render](https://youtu.be/9RHh4OSPKQQ)
- [Maya Infinite Photo Backdrop](https://youtu.be/y2ylWfbrC58)
- [3 Point Lighting](https://youtu.be/1nYSVw6-GxA)

## Render Tips

- Set Camera AA and all indirect options to 1 for quick preview renders in Arnold
- Avoid the temptation to simply increase the Camera AA to reduce noise this this can oversample and needlessly increase render times
- Try increasing the samples on individual lights to help with reducing noise in shadows before increasing Camera AA, often 2 samples per light is a good place to start
- Use the smaller render preview window when testing increased render settings so you don't need to render the entire image to see results
- Avoid mesh lights if possible since they produce more noise than Arnold Area lights

- If using an HDRI environment image, use as low of resolution as possible

<div class="video-grid">

<div class="video-card">

### Maya Basic Render

<div class="iframe-16-9-container">
<iframe class="youTubeIframe"  width="560" height="315" src="https://www.youtube.com/embed/9RHh4OSPKQQ?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### Maya Infinite Photo Backdrop

<div class="iframe-16-9-container">
<iframe class="youTubeIframe"  width="560" height="315" src="https://www.youtube.com/embed/y2ylWfbrC58?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

### 3 Point Lighting

<div class="iframe-16-9-container">
<iframe class="youTubeIframe"  width="560" height="315" src="https://www.youtube.com/embed/1nYSVw6-GxA?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

</div>
