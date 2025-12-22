---
title: How to Extrude a Nurbs Curve in Maya Tutorial
date: 2022-03-31T8:30:00-04:00
lastmod: 2025-09-30T17:53:45
description: Extrude a nurbs curve in Maya
featured_image: /3d-modeling/maya/attachments/extrude-nurbs-curves-title.jpg
tags:
  - 3D-Modeling
  - Maya
  - Tutorial
aliases: /posts/extrude-nurbs-curves-maya-tutorial/
---

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/j7bCUkwxRTw?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<details>
<summary>

## Video Transcript

</summary>

In this Autodesk Maya tutorial I'm going to show you how to extrude a nurbs shape along a nurbs curve. This can be very confusing in Maya because sometimes when you click extrude on the nurbs it doesn't look like you expect. For example a lot of times when you click extrude it will look something like this, not along the path that you chose. So how can we fix this?

Let's start at the beginning. We can go to create curves CV curve tool and then we can draw a curve here. We have a curve in space press enter to accept the curve. I can right click and go to control vertex. I’ll orbit a bit I’ll select these press W move them up just to have some three-dimensional space. So now our curve is existing in three-dimensional space then I’m going to go ahead and make a circle. My circle is at the origin, I’m going to go ahead and move the circle, rotate the circle in two different directions, so now it is definitely not oriented like the curve.

So the extrude tool for nurbs is up here. So then I click here then I hold shift, click here then I click extrude and it's all crazy. It's not really following the curve so we can do two things if you go to your attribute editor of the extrude command you can click fixed path that helps a lot but then you can change use component pivot to component pivot so that way it'll follow the curve centered on the circle.

And you don't even have to move the circle. Look my circle is still right here this is very convenient because maybe you drew a complex shape and you want to extrude it on many different curves but look the normals are the wrong way so how do we fix that if you select the curve and then you go to surfaces reverse direction. And then you can change this into a polygon if you want. The nice thing is if I select the curve one and then I right click control vertex I can select these vertices and then I can move them and it's in the design history so I can move these around and I can update my curve however I want. And then if I go back and I press 6 to go to shaded mode you can see that my curve has updated.

So hopefully this allows you to use the strange and sometimes confusing nurbs extrude tool. Just remember to click center on component pivot in fixed path and your nurbs curve extrudes will work great in Maya. Hopefully you have fun 3d modeling in Maya with nurbs curves and extrudes.

</details>
