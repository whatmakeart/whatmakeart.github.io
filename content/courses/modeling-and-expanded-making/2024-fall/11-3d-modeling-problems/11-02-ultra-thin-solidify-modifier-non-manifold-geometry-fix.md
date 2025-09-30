---
title: 11.02 Ultra Thin Solidify Modifier Non-Manifold Geometry Fix
date: 2024-10-30T09:00:00
lastmod: 2025-09-30T17:53:45
---

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/v4WXZjwB9tY?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<details>
<summary>

## Video Transcript

</summary>

In a previous video, I showed how to correct the solidify modifier when it makes non manifold edges. When three faces join together at a single edge, but that was done with a thick solidify modifier. What if we have a very thin solidify modifier? In this case 0.2 millimeters. This is very thin and it creates the same non manifold geometry.

The process is exactly the same as before. But it can be a little tricky because it's so thin. First I'll apply this modifier tab in edit mode. And if I zoom in notice I can't see what's going on. To fix that, go to your view options in the top right here. And at the clip start add a couple of zeros. Now we can zoom in and it won't clip.

We need to add edge loops to fix this problem. Press control R to add an edge loop. And then I'll slide it over as close as possible to right there. Press control R on this edge and slide an edge loop over. Now we can create the missing geometry. It can be a little bit hard to navigate in. So if you press one select two vertices then view frame selected.

It can zoom you in so you can see what's going on. Press two for edge mode. If you notice this edge goes all the way through. And this edge goes all the way through. So this is where we need to have our fix. So actually this edge is in the wrong spot. If you accidentally put it edge loop in the wrong spot. Select option for the whole edge loop and then command or control X to dissolve it.

Now we need to have an edge loop on this side so I can press control R. There's my edge loop and it's very close. Now if I zoom in we can see where the problem is. It's where the two edges overlap and there's no geometry. Press two. Select this edge hold option to select all of it. Go to slide it closer again. Slide it closer. So that looks pretty good.

Press Alt or option. Select this edge loop. Go to slide it closer just so it's easier to manipulate. Now select not the entire edge loop, but just this edge. Slide it in until it's at the corner. Now we need to join these vertices. So press one. Select this vertex. Hold shift.

Select this vertex. Merge L for last and we select this vertex and this vertex m l merge at last. You can press to select this edge x. Delete edges. Now we can zoom out and remember your framed selected there. So if you zoom out press one. Select a vertex at the bottom. View frames selected. Now we're looking at the bottom. It can be lot easier to see what's going on.

Here we do the exact same thing. So it's the ones that are far away. So for example this one here we need to move into here if you ever forget. You can always see which edges are going through. So this is the corner that we need to fix because those edges go through. I'll press one. Hold shift ML merge at last click this vertex. Hold shift ML press to select this edge delete edges.

Now everything is fixed but it has created a hidden face inside. Press three for face mode. Select this face H to hide it temporarily. Select the interior face X faces. Then press option or alt H to bring the face back. We can type view frame all. Select two for edge mode, then select select by trait non manifold.

As you can see now we have no non manifold edges. Hopefully this helps you fix non manifold edges with the solidify modifier. When you've made very thin solidifies happy 3D modeling.

</details>
