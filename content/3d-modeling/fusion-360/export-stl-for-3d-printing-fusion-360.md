---
date: 2021-02-03T8:30:00-04:00
description: "Export STL File From Fusion 360"
featured_image: "/3d-modeling/fusion-360/attachments/Fusion 360 Export STL for 3D Printing Title.jpg"
tags:
  - Fusion 360
  - 3D Printing
title: "Export STL File From Fusion 360"
---

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/I-ltiZdUFOA?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Transcript

Once we model something in Fusion 360 we want to be able to 3D print it or manufacture it in another way. To do that with a 3D printer, we need to be able to export an STL file. Here I have a pen holder for my Wacom drawing tablet. It didn't come with a holder, so what I did is, I modeled the pen and then I made a holder. We can export this holder as an STL file. The first thing we need to decide is if we want to export multiple components. We can do that by selecting the visibility of the components. So now I only have the holder visible. So that's the only thing that will export as the STL, but sometimes you might have a file with many many components and it can be cumbersome to go through and select all the eyeballs and visibility of your components. So let's say I had two components or many components and I really only want to print the holder. I don't want to print the reference pen in this design, that's okay. So I have everything visible. I have the pen holder assembly selected. I'll go to File > 3D print. That's going to bring up a new dialog box. What we want to do is select "selection" here. So what I can do is go ahead and just pick the holder. So now even though I can see the pen, only the holder is what is printing. Then we have a couple refinement options. So we have refinement high, medium, and low. It used to be the case that we wanted to save disk space and processing power and have small STL files. Unless you have a very complicated design, it's best to choose high. That will give you more triangles.

So if I click on preview, it's going to show the mesh and you can see this gives a very fine detail of the mesh of this holder. If I click it down to low, you can see it's much more coarse. This will still probably give a decent print but we have much more powerful computers and larger disk drives so go ahead and pick high unless you have a very complicated design and this will give you even an extra smooth STL file. The next option is you can send this to Meshmaker. Most of the time you're going to want to use your own slicer that comes with your 3D printer, so I recommend unchecking this then the next thing you do is just press ok. Label your STL file. Save it in your Downloads folder. It's now saved. If I open that up in my Downloads folder I can preview the file to see what it's going to look like. This is very convenient and then I can take this STL file to the slicer of my choice and 3D print it. So that's an easy way to export 3D printable STL files from Fusion 360. You always want to double check your STL file before printing it. You'll see it either in a preview program like this or in the slicer to make sure you have all the parts that you need.
