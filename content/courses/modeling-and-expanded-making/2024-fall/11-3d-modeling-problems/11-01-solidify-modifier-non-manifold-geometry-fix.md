---
title: 11.01 Solidify Modifier Non-Manifold Geometry Fix
date: 2024-10-30T09:00:00
lastmod: 2024-10-31T11:50:19
---

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/vnZPsf6FuMQ?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<details>
<summary>

## Video Transcript

</summary>
In this Blender tutorial I'm going to show you how to fix the solidify modifier when it doesn't create a manifold form, when you have three edges joined together, This can affect booleans that won't separate other objects.

This is just three planes joined together. If I turn off the solidify modifier you can see it is just three planes. If I tab back into object mode, select apply, now the solidify modifier is applied. If I tab into edit mode, you can see this strange geometry that's created. In this case we know where the strange geometry is but if you don't know where it is, select 2 for Edge mode. Then select - select by trait non- manifold. This will show you right away where the problem is.

In order to fix this we should go to Edge mode and then we need to add some Edge Loops. Press control R to add an edge loop. I'll add one here and slide it over. Control R again to add an edge loop here. The reason we need these Edge Loops is because some of these edges go all the way through. Notice this Edge goes through this form and there's no vertice here. The same thing happens here. There's no vertice, so we need to create vertices in this corner to make everything manifold. The faces are intersecting.

We can press 2, select this Edge tap GG to slide it. Now the edge has been slid over to where the corner is at the top and bottom. Press 1 for vertex mode. Now we can join these vertices to create a manifold form. Select this vertex, hold shift, select this vertex. Type M for merge, then last. Then we can take this vertex over here. Then hold shift select this one, M L for last. Finally we can press 2 X delete that edge. Now this side is complete.

Let's go down to the bottom to see how that looks. On the bottom we do the same thing. We need to merge the vertices together. Press 1 for vertex. I'll select this one and this one on the inner corner. M L for last. Select this one and this one M L for last. Press 2. Select this vertex. Press 2, select this edge. X delete edges.

Now everything is back together but there's a hidden face inside. So press 3 for face mode. Press h then we can select this inside face X delete faces option or alt H to unhide faces.

Now if I press 2 for Edge mode, go to select, select by trait, non- manifold. Now there are no non-manifold edges. So that's how you can fix the solidified modifier when you have three planes joining at a single edge and you solidify it and it doesn't create manifold geometry.

</details>
