---
title: Chroma Key Basics
date: 2023-09-29T05:31:16
lastmod: 2024-09-03T06:36:41
---

Chroma keying is a visual effects technique that allows you to replace the background of a video shot with another image or video. It is most commonly used to create the illusion of people or objects being in places where they are not, such as a newscaster standing in front of a world map or a superhero [flying through the air](./adobe-premiere-pro/flying-visual-effect-tutorial-adobe-premiere.md).

Chroma keying works by using a solid-colored background, usually green or blue, to isolate the subject of the shot. The video editing software is then able to identify and remove the background color, revealing the transparency behind it, creating an alpha channel. This allows you to replace the background with any other image or video you want.

## General After Effects Keylight Workflow

After Effects has more robust chroma keying tools than Adobe Premiere.

- Transcoding compressed H.264 or H.265 source footage to ProRes or other quality codec can help with the speed of work and rendering.
- Denoise footage before keying (it can be helpful to render or export the denoised footage in a lossless format before keying to improve performance)
- create a garbage matte around the foreground subject to be keyed from the background. If hand drawing a garbage matte, pull the bezier handles out to round out the matte in order to use the least amount of vertex points possible to make animating the matte easier
- Pick the screen color and check the results. It can be helpful to play with the saturation and hue of the selection and evaluate the key.
- Check different parts of the footage to make sure the key works at all times. Adjust and keyframe parameters as needed
- Use a key cleaner
- Adjust the screen balance. According to the Keylight manual, generally 95 works best for blue screens and 50 works best for green screens but they recommend trying 5%, 50%, and 95% to see which works best for your key.
- use advanced spill suppressor
- if lines on edges of footage try using refine hard matte and turning off the settings except for decontaminate edge color

### After Effects Chroma Keying

- [Backround Light Wrap After Effects](./after-effects/background-light-wrap-after-effects.md)
- [Green Screen with Key Light After Effects](./after-effects/green-screen-key-with-keylight-in-after-effects.md)
- [Fix Bad Green Screen Footaage](./after-effects/fix-bad-green-screen-footage.md)

### Premiere Chroma Keying

The chroma keying tools in Premiere are simple to use and produce good results but have limitations for more complex keying workflows.

- [Ultra Key in Adobe Premiere](./adobe-premiere-pro/adobe-premiere-green-screen-ultrakey-tutorial.md)
- [Stacked Ultra Keys in Adobe Premiere](./adobe-premiere-pro/better-green-screen-adobe-premiere-stacked-ultra-key-effects.md)

## Other Compositing and Keying Software

- Nuke
- Red Giant
- Davinci Resolve
