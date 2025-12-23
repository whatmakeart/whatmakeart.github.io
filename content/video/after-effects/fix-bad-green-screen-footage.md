---
title: Fix Bad Green Screen Footage
date: 2023-09-04T20:42:37-04:00
lastmod: 2025-12-23T06:54:48-04:00
tags:
  - After-Effects
---

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/hQbYGQ97aMQ?si=0kXwysj3AHpRL9Hy?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Introduction

In this tutorial, I will show you how to key out green screen footage in [After Effects](./after-effects.md), even if you don't have a perfect green screen setup.

1. Import your green screen footage into After Effects.
2. In the Effects & Presets window, type "key" and select the Keylight effect. Drag the effect onto your footage.
3. Use the eyedropper tool to select the green color of your green screen.
4. Under the Screen Matte section, clip the black and white levels to remove any green from the background.
5. If there are any areas of the green screen that are not being keyed out properly, you can use a garbage matte to mask them out.
6. Use the Choker effect to expand the matte and get a cleaner key.
7. Pre-compose the footage with the Keylight and Choker effects applied. This will help to keep your project organized.
8. Apply the Advanced Spill Suppressor effect to the pre-composed footage. This will help to remove any remaining green from the background.
9. Add an animation layer below the footage and add some keyframes to move the animation around.
10. Import a background image and place it below the animation layer.

With a little practice, you can get excellent results even with imperfect green screen setups.

### Tips

- For best results, use a well-lit green screen that is free of wrinkles and folds. Refer to [Green Screen Shooting Basics](../green-screen-shooting-basics.md).
- Use a garbage matte to mask out any areas of the green screen that are not being keyed out properly.
- Experiment with the settings of the Keylight and Choker effects to get the best possible key.

<details><summary>

## Video Transcript

</summary>

Let's face it, we don't always have access to perfect green screen setups but that shouldn't stop us from being able to use green screen footage in our projects. In this tutorial, I'm going to show you tools you already have available to shoot some green screen footage and then key it out with pretty decent results.

The first thing we need to do is import our green screen footage. To do that, go to file, import. Drag the footage to the new comp button. As you can see here, I have some green screen footage that I took with my cell phone, handheld, in front of a green shirt that I just held up, in the air, did not use any special lighting, have lots of wrinkles. This is pretty much the worst case scenario when you are trying to do a green screen. But I'm going to show you how you can key it out pretty simply with After Effects.

In your Effects and Presets window type in key. Then what we need to select is a single instance of the Keylight plugin. Drag it onto the clip. Get the eyedropper by screen color, then select a color that's near the object you want to key out.

For this technique we are going to use two keylight effects. For this first effect we just want to get a really rough instance of the figure or the object, so we can be very aggressive with our effects.

The first thing to do is to click down under Screen Matte and then also show the Screen Matte Result. What we want to do is clip the black levels pretty aggressively till we don't have anything in the background and then clip the white levels pretty aggressively so there's nothing remaining here.

We can clip the black more to get rid of this spot right here, so I'll do that. Because this is an imperfect shot, no amount of black clipping will get rid of this section. But we can easily get rid of that by using a garbage matte. So I'm going to do that with the pen tool. Draw out a mask with the pen tool. Notice everything disappeared. That's fine.

We can twirl out the layer and under masks, Mask 1, we can say subtract. Now switch from Screen Matte to Intermediate Result. Not a bad key but we want to do is improve it even better with less aggressive clip black and clip white. To do that we are going to expand the matte with a choker.

In Effects and Presets, type in choke. Drag simple choker on to the clip, and then type negative 100. This brings a matte edge out from the original alpha channel of the original keylight. Down here we are missing just a little bit. We can just duplicate it by pressing command D and notice that I get more of that hair down at the bottom there. This may or may not be necessary for you.

In the timeline, right click and pre-compose. By default when you are selecting a single layer it will say "leave all attributes in the main comp" we don't want that, we want to move all attributes into the new precomp. We want to relabel this, Garbage Screen. Now all of those effects are inside this Pre-Composition Garbage Screen.

Now go back to Effects and Presets and type in key. We want to use the animation preset, Keylight, Key Cleaner, and Advanced Spill Suppressor. Drag it onto the footage. This time once again we will click on the eyedropper somewhere near the footage. And now what we need to do is instead of screen matte, because if we click screen matte it will show both mattes, what we want to do is show combined matte, that way it will add up the different mattes all together.

One thing that sometimes is helpful, you see how we can see some green here? You can double click and move this around just a little bit to see if it makes any difference to get a better key. Now twirl out Screen Matte and we can clip the black levels then we can clip the white levels, What we want to do is check a few other places to see how this is working.

If you notice up here, I still have some black to clip, so I'll do that. Now switch to Intermediate Result. This is a pretty good key. What we need to do now is click Advanced Spill Suppressor, and there we go. Press N to change the work area, and do a RAM preview by pressing space bar.

As you can see, we have a very good key even though we didn't spend anytime to set up a green screen. Let's add a new layer to show off the effect of our green screen. I'm going to move this layer below our footage, then let's set some keyframes. Press P then hold shift, then press S. Drop a keyframe by pressing the stop watch, then move forward, move the text to where we want it to end, hold shift to drag back to the other keyframe. You can also press the J and K keys to toggle back and forth to keyframes. Here, let's make the scale zero.

Now we have animation that can exist behind our figure all keyed out. Who wants to be stuck with a cheap green screen when we can go to the ocean? So let's go back to our project window, go to file, import. Drag the ocean scene down below. There, not a bad result, off course you would get much better results if you spent a little bit of time to straighten the fabric, maybe get a desk lamp or two to light the green screen fabric behind you but I wanted to show you that you can get excellent results without much effort.

Hopefully you can have fun making green screen footage anytime you want, just grab your cell phone, something green, or something blue or anything of a solid color that is different than red and shoot away.

If you like this content, please click subscribe for more tutorials.

</summary>
