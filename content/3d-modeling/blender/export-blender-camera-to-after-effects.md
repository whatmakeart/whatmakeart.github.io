---
title: Export Blender Camera Animation to After Effects
date: 2023-09-27T12:39:58
lastmod: 2023-10-23T07:00:49
---

<div class="video-grid">
<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/-XJ1_ZN4Qx4?si=Uo3lCMRRljqEdSXP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

This tutorial shows you how to export [Blender](blender.md) camera animation and 3D space points to [After Effects](../../video/after-effects/after-effects.md). This allows you to add 3D motion graphics and other elements to your rendered Blender animation, and have them track withe the 3D camera, without having to track the camera in After Effects.

To do this, you will need to install the Blender "Export to After Effects" add-on. Once installed, select the camera you want to export and then go to File > Export > Adobe After Effects (.jsx).

In After Effects, go to File > Scripts > Run Script File and select the .jsx file that you exported from Blender. This will create a new composition with the camera motion and null objects.

You can then import your rendered Blender animation into the composition and add any 3D motion graphics or other elements that you want. The camera motion will be tracked automatically, so you don't have to worry about tracking it yourself.

## Additional Information:

- This tutorial is for beginners and assumes that you have a basic understanding of Blender and After Effects.
- The Blender "Export to After Effects" add-on is free to download and use.
- You can use this technique to add tracked camera motion to any type of Blender animation, including 3D scenes, particle effects, and motion graphics.

## Export Blender Camera to After Effects Video Transcript

In this [Blender](blender.md) and After Effects tutorial I'm going to show you how you can export Blender camera animation and 3D space and then import it into After Effects. This then becomes a 3D camera inside After Effects so you can add different 3D motion graphics and other elements to your rendered Blender animation. This is a really great way to be able to have tracked camera motion without having to track the camera in After Effects, since the animated camera was already created in Blender.

So how do we do that? Here in Blender I have a 3D scene that has camera motion. It can have any motion this is just a simple forward and backwards motion. We need a special add-on to Blender to export this. It is not in the default add-ons for Blender. If we go to edit, preferences and we search for "after", nothing comes up. That's because we need to install it manually.

In order to do that, go to a web browser and then type in this GitHub address. It is no longer hosted on Blender's own site but it's still here and it's license under a GNU general public license, so you can just download this file. The link is in the description. Go ahead and click download. Once it's downloaded, go back to Blender.

Now inside Blender, after you click edit preferences, close the search window then click install. Navigate to where you downloaded the .py file. This is a python script file. Select that file, then click install add-on. Automatically it will have it in the search bar. If it doesn't, just type After Effects and then click this little box. Now we have the Blender export to After Effects add-on installed.

Next select the camera you want to export over in your scene collection. Here I've selected the camera. Then go file export. Down at the bottom there should be a new menu called Adobe After Effects .jsx. Select that, then select export to Adobe After Effects. Once it's exported you can go to After Effects.

In After Effects I have the footage that I exported from Blender. This is just the animation that we had previously. Now we need to import the camera information from Blender. So in After Effects we go to file and in this case it's not import, we want to come down here to scripts and we're going to run a script file. Locate the script file. Here I have the script file right here, then click open. After Effects will ask you what comp name you want to use. You can type in anything you want then click ok. This creates a composition so we can double click this composition and it opens it in the timeline.

Right now there's nothing really to see, but if we click to four views, you can see that the camera is going along the keyframes just like it did in Blender. But without any footage it kind of just is the camera motion. So what we can do is bring the footage in. So if I drag the footage down to the composition and then I go to one view, we can see here that the footage will be matched with the camera movement. But what we need to do to actually take advantage of this is add some new layers.

So in After Effects let's add some text. I'll go layer new text then I'll click and I'll type, "Blender to After Effects" now I can select this text and if I select the 3D button it becomes 3D. But where is it? If I go to my four views I can now see my text and I need to bring it up in the Z plane. Here is my text then I can move it over and then if I want I can go ahead and move it backwards.

So now I've moved it backwards I'm going to move it back up in the Y direction again. Then I'll move it over and I can scale it up if I want or I could move it closer.

So we manipulate it in 3D space. So this is a really great way to have text and objects be along with an animation from Blender. Once you position your text then you're ready to see how it looks with the camera motion. I'm going to switch back to a single view. Now as I move forward we can see that our text sticks right along with the rest of the footage.

So this is a really great way that you can add a 3D camera from Blender and then add motion graphics in After Effects.

Happy 3D modeling and happy visual effects.
