---
title: Place 3D Models in 2D Photos Using Blender & fSpy
date: 2024-08-30T13:53:33
lastmod: 2024-08-30T14:06:31
---

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/qBePDl2l2hI?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

This tutorial provides a comprehensive guide on how to seamlessly integrate any 3D model into a 2D photograph using Blender and the fSpy tool. Below is a detailed step-by-step breakdown of the process, which includes setting up perspective with fSpy, importing that setup into Blender, modeling to match the environment, and adjusting lighting and materials to achieve realistic results.

## Using fSpy to Set Up Perspective

1. Begin by downloading fSpy, a tool that helps in setting up the correct perspective for the 2D image you want to use as a background. Refer to [fSpy installation instructions(https://youtu.be/0x2ZffQQNJY) and an [in-depth tutorial on fSpy photomatching](../photo-matching-with-fspy.md).
2. Open the chosen 2D image in fSpy. Analyze the photograph to determine the best perspective to use.
3. Use fSpy's guides to align with the floor or other prominent lines in the photograph. Hold the `Shift` key to zoom in for more precision while aligning the guides with the floor and ceiling. Adjust the guides to fit the room’s perspective, ensuring that it looks natural and aligned.
4. Choose a point in the image to set as the origin (a reference point for the 3D space). Typically, a corner of a room or a door frame is a good choice. For scale, input an estimated real-world measurement, such as the height of a doorway (e.g., 2 meters), which helps Blender to accurately scale the 3D objects within the scene.
5. Once satisfied with the perspective setup, save the fSpy file, which will be imported into Blender.

## Importing fSpy Setup into Blender

1. Open Blender and clear the default scene by pressing `A` to select all objects and then `X` to delete them.
2. If not already installed, download and [install the fSpy add-on for Blender](https://youtu.be/1HOqnb1Uji4).
3. Navigate to `File > Import > fSpy` in Blender, then select the saved fSpy project file. This action will import a camera aligned to the perspective of the original image, with the image set as a background.

## Creating the 3D Environment

1. With the camera and perspective set, create a plane (`Shift + A` to add a mesh, then select a plane). Move this plane to align with the floor using `G` (grab) and axis constraints (`G, Y`, `G, X`). Use edge and face mode to manipulate the plane to fit the walls and corners accurately.
2. Use `Ctrl + R` to add edge loops that help define walls, doorways, and other architectural features. Select edges and faces, then extrude (`E`) along the appropriate axis to build walls and other vertical structures. This method creates a simple yet effective geometry that matches the photo's layout.
3. To add realism, incorporate additional geometry for ceiling details or other significant architectural features by using edge loops and extrusions. This should remain simple and focus on large forms.

## Projecting Textures from the Image

1. Select the newly created 3D geometry and assign a new material. Use an `Emission Shader` to create reflections from the original photograph. Set the shader's color to an image texture, and load the original photo used in fSpy.
2. Apply a `UV Project` modifier to the geometry. Set the `UV Map` to the default UV Map and set the `object` to the fSpy camera. Adjust the aspect ratio in the modifier to match the image’s resolution, ensuring that the photograph projects correctly onto the geometry.
3. Apply a subdivision surface modifier. Make sure to choose `Simple` and make sure the modifier is above the UV Project modifier.

## Adding a 3D Model to the Scene

1. Press `Shift + A` and add a 3D model to the scene. Position it on the floor plane by using `G, Z` to move it up or down. Rotate and position the model to fit naturally within the scene using rotation (`R`) and grab (`G`) commands.
2. Create a new material for the 3D model (e.g., make it metallic by setting `Metallic` to 1 and `Roughness` to 0). This setting ensures that the model reflects the environment. This can be adjusted to your desired material after the scene is set up.

## Lighting and Rendering

1. Change the rendering engine from Eevee to Cycles for realistic lighting and reflection effects. This adjustment allows the 3D model to reflect the environment accurately.
2. To enhance the scene’s lighting, add an HDRI (High Dynamic Range Image) from a site like PolyHaven. In the World settings, select `Environment Texture` and load the HDRI file. This will provide general ambient lighting to the scene.
3. For the 3D environment to interact correctly with the HDRI, adjust visibility settings. Deselect camera and shadow options for the walls to let more light in, while the floor can be separated and set as a shadow catcher to simulate realistic shadows.

## Compositing and Final Adjustments

1. In the Compositing tab, enable `Use Nodes` and add a `Viewer` node to see the output. Load the original image as a background using an `Alpha Over` node. Connect the render layers to the compositor and set the background image behind the render.
2. Adjust the `Film` settings to make the render transparent, showing only the composite of the 3D model over the 2D photograph. Render the final image to see the 3D model realistically placed within the 2D photograph, with accurate lighting and shadows.
3. If shadows appear too light, increase the emission strength of the ceiling light or add additional light sources to create stronger shadow effects. Use ambient occlusion to add realistic shadow effects at the base of the model.
4. Rotate or move the 3D model as needed to fit within the scene perfectly, ensuring that the reflections and shadows enhance the illusion that the model is a part of the original photograph.

This technique allows you to blend 3D models into real-world scenes seamlessly, making it useful for visualizations, concept art, or any creative project where you want to merge virtual objects with real environments. Happy 3D modeling!

<details><summary>

## Video Transcript

</summary>

In this Blender tutorial, I'm going to show you how to put any 3D model in any 2D photograph. Then we can use lighting from the 2D photograph with a 3D model, and perfectly place it with perspective and shadows within that scene from that 2D photograph, we're going to use a tool called fSpy. You can go ahead and download fSpy, Open an image in fSpy that you want to put your 3D modeling. I'm going to quickly go through this. And I have a more in depth tutorial about using fSpy linked in the description.

First I need to think about how this image is arranged in this particular image. I think that using one point perspective is going to be much better, so I'll go ahead and line these up with one point perspective. I can hold shift to zoom in. Then I'll line these guides up with the floor right here. And this will allow me to then tell Blender where the perspective for this is. Once again, hold shift to zoom in, and I have a pretty good one point perspective. I can move this cursor around to check to see how that's looking. You can see that it's a little off here, so this tile may not be perfectly aligned with the floor. If that's the case, I can go ahead and try to use the floor as my guide instead. So I'll click right there. Then I'll move over here to this. Now I can check again to see how that lines up. Still lines up over here. Lines up pretty well. Yeah, it looks like the tile may not be perfectly square to the floor, but the ceiling lines up. We care about the room more than anything else, so this looks pretty good.

One thing we can do is set where the origin is. I'm going to go ahead and set the origin I think right here. Because then I can kind of guess how tall that door is. over in the reference distance, if I select along the z axis, then I can type in how long I think that is. And this is probably something around two meters since it's an elevated doorway, maybe a little bit taller. So I'll type two. And now I have a scale for the Blender scene. I'll go ahead and save this. Inside Blender I'll press A to select everything X delete. If you don't have the fSpy Blender add on, you need to install it. I have a video showing how to install that linked in the description. Then go to file import fSpy. Navigate to where you have your fSpy photo, then import the fSpy project file.

Here we can see that we have the photo as a background image to a special camera that is perfectly aligned with this photo. Our origin point is also right here at the lower corner. If I press shift A to create a plane, it starts at the origin. I can tab in edit mode, press two. For edge mode, press G to grab, then along the y axis, and I can move it over to this wall and notice how it stays in perspective. I can move this edge as well G. Then y. I can move this back g x all the way to the end there, and I can move g x this way. I can go all the way past. Maybe I'll move this one guy over just a little bit. It doesn't have to be perfect, but we do want it accurate enough that we can get some geometry.

If I press control R, then I can add some edge loops right here for these doorways. So I'll add one right here. Control R another one right here a couple more edge loops. We don't need everything, but we want some of this geometry. So it helps with the reflections in our composite. I'll press E to extrude and then go along the y axis. gonna go ahead and go all the way over to the outside of the photograph. Then I'll extrude again e y this time I'll only go to where the door is. Then e y. This is a pretty good approximation of the floor. There are plenty of more details we could potentially add, this is great.

Now I need to create the walls in the ceiling. I think the easiest way to do this is to select three. And I'll select all of these faces of the floor. So now I'll press E to extrude. But it's kind of hard for me to see where I'm extruding to. So I'm going to go ahead and undo that. Then I'll click on the camera, switch to object mode. Click on the camera icon down here. Then under Background images I can move the image to the front and then I can change its opacity. So if I keep the opacity at about 50%, then I click the mesh again tab back into edit mode. Press three to select these faces. Now when I press extrude I can kind of see where I'm extruding to. So that works a little bit better.

If you still can't see because of this front face I can press three, then press x, delete this face and now I can see inside the cube. I still need to adjust these. I'm going to press three. Now select each of these faces here. Switch back to the camera view then g z to move this up and down. Now remember that this is not a perfect perspective match because it sounds like the tile and the walls are not perfectly square, but this will be plenty good for our lighting and composition. So the only last thing I could potentially add is put an edge loop right here, and then I can punch that ceiling up. Many ways to do this. I think I'll go ahead and grab these three ceiling tiles right here by holding shift, and I'll go back to the camera view, press E, Z and just move those up. So now I have. This nice ceiling thing. This is enough for us to complete our composite. I might move this edge right here since it's not grabbing the entire photograph, so I'll orbit around, press two for edge mode. Select all of these edges G. Move them in the X direction. Press one to grab this vertex. G x control lock that right there. So now we are ready to move back into object mode. And now we can project the textures from this photograph onto our model. And then use everything to light our scene.

To project the textures we need to add a material to this object. So in order to do that, I'll go ahead and click on materials and I'll click New Material. A label this material reflections. And instead of a principal brdf, I'm going to use an emission shader. Then for the color click this yellow dot and we want an image texture. And we're going to open the image that we used for our photo matte. Navigate to where you have your image and open the image. We don't see anything yet, but if we switch to material preview, we'll see that our image is splattered kind of all over the model and it doesn't look so good. That's because we need to UV project based on our camera.

Make sure you have the mesh selected. Click on modifiers We'll go ahead and add a generate subdivision surface. You can see this gets all messed up because we don't have any bevels. So go ahead and click simple. Then increase the subdivisions up to six. We'll add one more modifier under edit UV project. For the UV map, select the default UV map and then for the object, select the F spy camera. So we're starting to look better here. But there's still some things that we need to do. For example, the aspect ratio right now is 1 to 1. We need to find out the aspect ratio of the original image. Then in Blender under the UV project I can paste in that resolution. It's 4032. by 2268. If I put that in now, we can orbit around and we can see that. Yes, outside of the object, there's all this messed up stuff. If we don't want to see that, we can go ahead and click on the image texture and right here where it says repeat, we can change that to clip. we can also eliminate the black. But for our purposes of making a composite image with a sculpture, we don't need to do that. as you can see, we get a little bit of 3D space and everything is projected well, it looks perfect from the camera view. Remember we are no longer looking at the photograph. We are looking at 3D geometry that has the photograph projected onto it.

Let's go ahead and add something that we can use as a sculpture. I'll press shift a, add a mesh and we'll go ahead and add Suzanne the monkey. I'll press G, shift Z to move the monkey, R to rotate RC to have it move towards us. remember that we can move around and I can look perfectly in the x direction, press GZ and then move that up. So it's sitting right there on the floor. Go back to the camera view and we can see it is there. Press g x and I can move it. And remember everything is moving in space in perspective. I'm going to go ahead and move the image to the back. click on the F spy camera. Then in the background image put it to the back. So now we can see our model again. And this really shows you that this image texture is in front.

Click on Suzanne. Let's add a modifier to generate subdivision surface. We'll add a couple subdivisions. Also add a material. new material. We'll call this material Shiny Monkey. Under metallic, increase the metallic to one and the roughness to zero. And you can see that we have all these trees reflecting on our monkey. We can see that even better if we shade smooth. But look, there's no trees in our hotel lobby, so why isn't it reflecting the hotel lobby? that's because we're still on material preview. If we select render preview, suddenly we have no reflections. That's because we're using the default Eevee renderer. Click on the camera, change the render to Cycles, and suddenly now you can see that the lobby is reflecting the floor, the walls, and everything else. Just as if the monkey was really there in the 3D scene. If I look through the camera and I press r z as I rotate the monkey, you can see that the reflections truly are coming from the different objects. If I move the monkey to the back or closer to this light, notice how this light is reflecting on the monkey. So this is a great technique when you're trying to composite a 3D model into a 2D image and make it look realistic, I'll press G shift Z to move the monkey up to here. Maybe right there. Looks good. This is going to be a wonderful sculpture inside the hotel.

Now, probably a good idea to go ahead and add maybe an interior HDRI image just to kind of fill out the area. So we get just a few more lights and things like that. Just a generic lighting scheme rather than just the lighting from these reflections. to add an HDRI image, click the world tab, then click the color select Environment Texture. Now we can see all these yellow highlights that are coming in from the HDRI that's not there. The best place to get HDR ies is Poly Haven. In a web browser, go ahead and navigate to Poly Haven, select indoor, Then we'll go ahead and select something that is low contrast something that just doesn't have a lot going on. In fact, the Poly Haven studio looks like it's pretty good. It's got these canned lights. I'm going to go ahead and select that. A 2K image is plenty for what we need, just general ambient lighting. I'll download the image. Back in Blender under the environment texture click open.

Navigate to where you downloaded the HDRI image from Poly Haven. Here I have it right here. Open the image. Now you can see that we have a bit more light reflecting on different parts of the image that may have been dark, We can rotate this image depending on how we want it to be in our scene. Now we have the HDR image casting light, but we really don't notice any change. That's because the walls in the ceiling are acting as blockers. They're not letting the light into the monkey. Select the mesh tab in the edit mode, and I'm going to orbit so I can select all the bottom planes. press three for face mode and select all the ground floor planes. Once you are sure that you have all of the floor selected, go ahead and right click separate by selection. Now we have the floor as a separate object because we're going to use the floor as a shadow catcher. Press tab to go to object mode and select the walls. Once you have the walls selected, we're going to change their visibility in the object properties. Scroll down to visibility. Deselect camera so now they're no longer visible in deselect shadow. Now they'll no longer cast a shadow. And if I look through the camera and if you want to see what it looks like, I can still see them in the camera. But now they're not casting a shadow.

So we have more light coming through that HDRI image for the monkey. next. Select the ground plane and we're going to turn that into a shadow catcher. this will make it disappear because that's what a shadow catcher does. But notice we don't see any shadow. That's because it's still in a mission texture. on the ground and we can label this shadow ground, click on the material. Then we can click this button to duplicate it. So now this is reflections two and we'll call it shadow. Select the shading tab. Then under the nodes instead of an emission shader you can select it. Press X to delete. Press shift a search and type diffuse. If I select diffuse I can place it right here. Attach the color from the texture and then attach this to the surface. And now we have a diffuse texture that will accept shadows. Let's go back to layout and look through our camera. So now you can see that it's collecting these shadows from the light. we're just about ready to start compositing our image. First click on the compositing tab and then select Use Nodes. can't see anything here, so we need to add a view or node. Press shift a search and then type viewer. Select viewer and place it. We can take the output from the render layers and plug it into the viewer node. We still don't see anything, so let's go ahead and render an image.

Now we have the image rendered, but we're looking at the Poly Haven studio. We have the reflections from our hotel lobby. But how do we get the image to be there with the shadow and the reflections? We use the compositor in Blender to add a background image. I'll close the render tab, then press shift a search. And we're going to use image And we'll open an image. Select the same image you used in FS by. Now we need one more node to be able to see the image rather than the Poly Haven studio. Press shift A, then search for Alpha over. Place Alpha over into your compositor. Then the image goes on the top level and then the render layers go on to the bottom. Go ahead and take the output from alpha over into the composite. And there's one last thing to do. Click on the render tab. Scroll down to film In order to see the alpha channel, we need to select transparent. Now we'll go ahead and render an image.

So now we have everything composited. We still get the reflections from the 3D geometry, yet we have shadows on the ground. Perhaps the shadow could be a little stronger. So you could increase the intensity of the emission on the ceiling. Or even add a light to intensely give a shadow right there. And we could also add some ambient occlusion down at the bottom. But hopefully this allows you to composite any 3D model into any 2D image inside of Blender and have a really nice realistic composite. Happy 3D modeling.

</details>