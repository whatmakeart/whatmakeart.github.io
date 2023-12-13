---
title: CNC Basics
date: 2023-05-23T21:59:41
lastmod: 2023-12-13T05:49:29
---

CNC or computer numeric control is a great way to fabricate precise parts. CNC tools very based on the type of material they cut, the dimensions and directions they are able to cut in, and the type of cutting head.

Common CNC machines are three axis machines, 5-axis machines and multiple access machines that even tilt the stock that is being cut to allow for undercuts.

Often, CNC machines use a spinning cutting tool. This limits the insides of corners from being perfectly square.

Is important to consider tolerances when making tool paths for CNC machining. A 3D model is made to nominal dimensions, meaning the ideal perfect dimensions of the piece. If something has a 2-in hole and it is made 2 in then it will not fit. Either. The hole needs to be slightly larger or the part needs to be slightly smaller.

Best practice is to design a 3D model to nominal dimensions, and then build in the [tolerances](./cnc-tolerance-and-fit.md) based on the materials and the design into the [tool paths](./shopbot-toolpaths-fusion-360.md) before cutting out the part.

## ShopBot Two Axis CNC Machine

A ShopBot is a brand of 2 Axix CNC machine. It is realatively user freindly and affordable. Models can be made in [3D modeling software](../../3d-modeling/3d-modeling-software.md) and then converted to G-Code toolpaths. The tool paths are loaded into the ShopBot for cutting.

- [CNC Tolerance and Fit](./cnc-tolerance-and-fit.md)
- [Pocket Cuts and Joints](./cnc-pocket-cuts-and-joints.md)
- [Dog Bone Fillets Fusion 360](./dogbone-fillets-fusion-360.md)

## Fusion 360 CNC

- [Create Shopbot Tool Fusion 360](./create-shopbot-tool-fusion-360.md)
- [Shopbot Toolpaths Fusion 360](./shopbot-toolpaths-fusion-360.md)
- [Secure Workpiece Shopbot](./shopbot-securing-the-workpiece.md)

## CNC Video Tutorials

- [Make Dogbone Fillets](https://youtu.be/fjrEmJeM-qw)
- [Make Tool for Shopbot](https://youtu.be/M9MQzYrLhGQ)
- [Make toolpath](https://youtu.be/_G-0i8BFEFs)
- [Add Tolerance](https://youtu.be/W8AcI8LkIrg)
- [Import DXF](https://youtu.be/aMBnke14Wgg)

<div class="video-grid">

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/fjrEmJeM-qw?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/M9MQzYrLhGQ?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/_G-0i8BFEFs?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/W8AcI8LkIrg?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/aMBnke14Wgg?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</div>
