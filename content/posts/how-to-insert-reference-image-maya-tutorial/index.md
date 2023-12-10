---
date: 2022-03-10T8:30:00-04:00
description: "When 3D modeling in Maya it is convenient and helpful to have a reference image in your scene to make sure your 3D model proportions are correct"
featured_image: "/posts/how-to-insert-reference-image-maya-tutorial/Maya insert a reference image title.jpg"
tags: ["Maya", "3D Modeling"]
title: "How to Insert a Reference Image into Maya"
---

When 3D modeling in Maya it is convenient and helpful to have a reference image in your scene to make sure your 3D model proportions are correct. How do you insert a reference image in Maya? This Maya video tutorial shows you how to use a Free Image Plane to insert a reference image for 3D modeling in Maya.

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/tXJFJa-nsAA?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Transcript

In this Autodesk Maya tutorial I’m going to show you how you can insert a reference image so you can model your characters or any other 3d model that you want to create in Maya using a reference image. I assume that you've already set up your project and have a reference image. Then we need to create a space for that reference image to go inside Maya. To do that we can go to create, then we can do free image plane. This creates an image plane. If you look at your outliner by clicking this icon on the left you'll see that image plane.

We can press g on our keyboard to create another image plane. g is a keyboard shortcut in Maya that duplicates the last action. This is very convenient. I want to label these so I’ll double click and I’ll label this one “front” and I’ll label this one “side”. Now I need to place an image. To do that click on the attribute editor over on the right. If you don't see that, go to windows workspaces and then click modeling standard.

Next we need to select the image name. I’ll click this folder icon and then I can go to the project folder in Maya and then I’ll pick bear front. I’ll select open. It automatically comes in and by default it will maintain the picture aspect ratio inside Maya. We can make some changes. You can make the alpha gain 0.5 this will make it a little transparent and can be easier to see. I’m also going to press w on my keyboard and move it back a little bit. That way when I’m modeling, I'm modeling up here in front of the image.

Next I want to put this on a layer and use it as a reference layer so I can't accidentally click on it. This is also convenient because then I can turn the layer off inside Maya while I’m 3D modeling and then not have to look at it. To do that I’ll go ahead and go to windows > general editors > channel box layer editor. I like to dock this so I’ll drag it right over here and then let go.

Now if I click on the channel box layer editor I can click this icon. This will create a new layer and assign the selected objects. I’ll double click this layer and then I’ll label it. You can only use letters so I’ll label it “frontreference” and I’ll save it and then I’m going to click this icon until it says r. Now I can't click it but if I need to click it over here I can still click the front image.

Now I want to click the side image then go to the attribute editor and then click on image name. I’ll go to my project folder in Maya and I’ll click the side image and I’ll click open. Now I need to rotate this. I’ll press e on my keyboard and I’ll rotate it. Notice that it's not snapping. If you want it to snap you can go to modeling toolkit. Down at the bottom and you can turn on absolute snapping and then you can snap this to 90 degrees and then you can turn this off if you don't want it to be absolute snapping all the time.

Then I’ll press w and I’ll move it to the side and once again I’ll go to the attribute editor and I’ll change the alpha gain to 0.5 and then I want to go to the channel box layer editor and I want to click the icon that creates a new layer with the selected objects. I’ll double click layer 1 and I’ll label this “sidereference” and I also want to click it so it says r. What's nice is I can click this v and it'll disappear so if I don't need these to be to be there I can have them visible or not visible inside Maya now if I bring in a cube primitive and I scale it up then if I toggle my four views notice that when I’m looking from the sides I can still see the reference image perfectly in orthographic projection but then when I’m in my perspective view the images aren't in the way.

So hopefully this tutorial allows you to set up reference images on free image planes in Autodesk Maya. Happy 3D modeling.
