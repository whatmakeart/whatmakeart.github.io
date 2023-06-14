---
title: Fusion 360 Basic User Parameters
---

In Fusion 360 you can create user parameters. These are values that you can use to change your model and update it completely through your design history. When you start a new design there are no user parameters. You can make as many user parameters as you want and also you can use equations to make user parameters.

## Creating User Parameters

To create user parameters, go to “Modify” and then select “change parameters”.

By using a user parameter of "ply", you can update your design after measuring the thickness of your material. Use this dimensions in your sketches rather than typing in the thickness of the plywood as a hard coded value. This allows for updating later. You can also make parameters for the width, height, depth, clearance, the size of bolt holes and any other feature that you might want to change or have a relationship to other features.

You can also use a user parameter with an expression or equation such as "width / 2" for the distance of an offset plane from the origin to space out side pieces. Use user parameters for anything that you want to reference multiple times or potentially update later.

## Adding User Parameters to Existing Models

Sometimes you might start modeling and type in dimensions to get started. After drawing a few sketches or making a couple components you might realize that a particular dimensions should be a user parameter instead of being hard coded. What do you do? How can you add a parameter after you already modeled the part? Fusion 360 allows you to change "almost" anything at a later time. You can create a user parameter and then go back through the design history and swap out hard coded values for the newly created user parameter. It is better to create the needed user parameters from the beginning but that is not always possible, especially with new designs. This [video](https://youtu.be/sBEHI-N4DAY) walks through the process of adding user parameters to an existing model.

## Fixing Errors When Changing Parameters

Sometimes when user parameters are changed, parts of the model might "break." If this happens, the best thing to do is note which features in the timeline have problems. These will be highlighted red or yellow. Then press "Control Z" or "Command Z" to undo the user parameter change. Then inspect the features that had problems to see what can be changed to make the model more robust. Often there will be a place where a value was hardcoded with a number instead of a user parameter. Once the problems are fixed then you can change the user parameter value to have the model automatically update. This [video](https://www.youtu.be/F3673fmEymo) shows how to fix errors on the design timeline.

<figure>

[![Laser Cut User Parameters](2021-Laser-Cut-User-Parameters.png)](2021-Laser-Cut-User-Parameters.png)

<figcaption>

Example User Parameters in Fusion 360

</figcaption>
</figure>

</div>
<div class="video-grid">

<div class="video-card">

### Set User Parameters Fusion 360

<div class="iframe-16-9-container"><iframe class="youTubeIframe" style="position: absolute; top: 0; bottom: 0; left: 0; width: 100%; height: 100%; border: 0; z-index: 1;" src="https://www.youtube.com/embed/H6W-Og4YyZ8?rel=0" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
</div>

<div class="video-card">

### Change Plywood Thickness Fusion 360

<div class="iframe-16-9-container"><iframe class="youTubeIframe" style="position: absolute; top: 0; bottom: 0; left: 0; width: 100%; height: 100%; border: 0; z-index: 1;" src="https://www.youtube.com/embed/a7HOiBC_81s?rel=0" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
</div>

<div class="video-card">

### Add User Parameters to Existing Model

<div class="iframe-16-9-container"><iframe class="youTubeIframe" style="position: absolute; top: 0; bottom: 0; left: 0; width: 100%; height: 100%; border: 0; z-index: 1;" src="https://www.youtube.com/embed/sBEHI-N4DAY?rel=0" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
</div>

</div>
