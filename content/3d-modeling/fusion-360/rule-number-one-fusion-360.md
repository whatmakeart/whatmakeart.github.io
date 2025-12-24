---
title: Fusion 360 Rule Number One
date: 2023-06-13T14:42:56-04:00
lastmod: 2025-12-24T06:42:09-04:00
tags:
  - Fusion-360
---

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/ZYXSJ6EQ9S4?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Fusion 360 Rule # 1

[Fusion 360](fusion-360.md) is a [parametric](../parametric-modeling.md) 3D modeling program that organizes a model into sketches, construction planes, bodies, surfaces, components, and assemblies. There are more elements to Fusion 360 but these are the most important. Everything done to the model in Fusion 360 is captured in a design history as a "feature." This is powerful because features can be edited at a later time to update a model.

For example, if you are modeling a table and already finished the legs but want them to be taller or shorter, you can go back to the original sketch or feature, make the dimension change and the rest of the model will update automatically. Wow, sounds too good to be true. Well, it almost is. This automatic updating only works if you plan out your models and follow some best practices.

One best practices is referred to as Rule #1 in the Fusion 360 community. This says that the first thing to do before modeling a piece is to make a component, then name the component with a descriptive name, and then activating the component. A component can contain multiple sketches, bodies (3d objects), construction planes, surfaces and other elements. By creating a component first, and then "activating" the component, the design history is captured within that component's timeline and it makes it easier to organize your model and make changes. Otherwise the design history is all on the main Fusion 360 timeline and things get messy quickly.

When getting started try to follow Rule #1:

1. Make a component
2. Name the component
3. Activate the component

Of course you might not always do this when you are experimenting or trying something out, but it is still a good habit to get into because often a simple experiment becomes a full working design.

## Fusion Rule #1 for Intent Driven Design

Now Rule #1 = "Choose the correct design intent first."

1. Choose Part Design to model a single standalone object meant to be manufactured or inserted into an assembly.
2. Choose Assembly Design to build an assembly by inserting or creating external components and sometimes editing them in place.
3. Choose Hybrid Design to use the historical Fusion workflow with core modeling tools and assembly tools in the same file. This is best for quick restriction free ideation and concept development.

Even though some workflows are changing some best practices remain the same. It is still best to name everything immediately. Working in the new intent driven design paradigm, activating the component can be thought of as having one purpose per file.
