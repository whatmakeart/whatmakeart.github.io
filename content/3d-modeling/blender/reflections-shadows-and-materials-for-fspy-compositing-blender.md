---
title: Reflections and Shadows for Compositing 3D Models into Camera Projected 2D Photos
date: 2024-08-30T13:43:34
lastmod: 2026-09-03T07:40:44-04:00
---

<div class="video-grid">
<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/BSqLLKbcd24?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

## Camera Projection in Blender for Reflections, Shadows, and Photo Compositing

Camera projection lets you use a perspective-matched photograph as part of a simple 3D environment in Blender. This is useful when you want to place a 3D object into a specific photo and need believable reflections and shadows without rebuilding the entire location.

In this example, the original brick alley photograph has already been perspective matched with fSpy. Simple wall and ground geometry lines up with the photo when viewed through the imported fSpy camera.

The goal is to project the photograph onto that geometry, use it for reflections, create a shadow catcher, and then composite the final 3D render back over the original image.

### 1. Add the Photo to the Walls

1. Select the wall geometry and create a new material called Walls.
2. Replace the Principled BSDF with an Emission shader.
3. an Image Texture and open the same photograph used for the fSpy perspective match. Connect the image color to the Emission color.
4. Switch to Material Preview. The texture will probably look distorted because the correct camera projection has not been set up yet.

### 2 . Add a UV Project Modifier

With the walls selected:

1. Add a UV Project modifier.
2. Select the default UV map.
3. Set the projection object to the imported fSpy camera.

The photograph is now projected from the perspective of the original camera.

### 3. Add More Geometry

The projection needs enough geometry to calculate correctly.

1. Add a Subdivision Surface modifier and change the subdivision method from Catmull-Clark to Simple.
2. Increase the subdivision level to about 6.
3. Move the Subdivision Surface modifier above the UV Project modifier.
4. The geometry is subdivided first, and then the camera projection is applied.

### 4. Fix the Image Aspect Ratio

The UV Project modifier may assume the photograph is square.

1. Check the dimensions of your original image and enter the correct aspect ratio.
2. The example photograph is:
3. 4032 × 2268 pixels

Once the correct dimensions are entered, the projection should line up with the photograph when viewed through the fSpy camera. The texture may look strange when you orbit away from the camera. That is normal for camera projection.

### 5. Use Cycles for Reflections

Switch to Rendered Preview and change the render engine to Cycles. Reflective objects should now begin picking up the projected brick walls. If the photograph repeats outside its boundaries, fix that in the wall material.

### 6. Stop the Texture from Repeating

1. Open the Shading workspace.
2. Add:
   - A Mix Shader
   - A Transparent BSDF
3. Connect the Transparent shader to the first Mix Shader input and the Emission shader to the second.
4. Connect the Image Texture Alpha output to the Mix Shader factor.
5. Connect the Mix Shader to the Material Output.
6. On the Image Texture node, change the extension setting from Repeat to Clip.
7. This prevents unwanted copies of the photograph from appearing outside the projected image.

### 7. Add an HDRI for the Missing Environment

The photograph only covers part of the environment, so areas such as the sky may be missing from reflections.

1. Go to the World properties and add an Environment Texture.
2. Open an HDRI with lighting similar to the original photograph. In this example, a cloudy HDRI from Poly Haven is used.

It does not need to match perfectly. The projected photograph provides the nearby environment while the HDRI fills in the missing surroundings.

### 8. Separate the Ground

The wall material is emissive, so it will not work well for receiving shadows.

Select the wall object and enter Edit Mode.

Switch to Face Select mode and select the ground faces.

Right-click and choose:

Separate > Selection

Return to Object Mode and rename the new object Ground.

9. Create a Ground Material

The new Ground object still shares the wall material.

Duplicate the material so changes to the ground do not affect the walls.

Rename the duplicated material Ground.

Delete the Emission shader and replace it with a Diffuse BSDF.

Reconnect the projected image to the Diffuse shader.

The ground can now receive a shadow from your 3D object.

10. Disable Shadows from the Walls

Select the Walls object.

In the Cycles visibility settings, disable Shadow visibility.

This keeps the simple wall geometry from casting unwanted shadows onto the ground.

11. Hide the Walls from the Camera

With the Walls object selected, disable Camera visibility.

The walls disappear from the rendered image but can still contribute reflections to your 3D object.

This lets us use the original photograph as the final background instead of rendering the projected geometry directly.

12. Turn the Ground into a Shadow Catcher

Select the Ground object and enable Shadow Catcher.

The ground becomes invisible while preserving the shadow cast by the 3D object.

Now the render contains the object and its shadow without displaying the temporary projection geometry.

13. Make the Background Transparent

Go to the Render properties.

Under Film, enable Transparent.

The HDRI will continue contributing lighting and reflections, but it will no longer appear directly behind the object.

14. Composite the Original Photograph

Open the Compositing workspace and enable Use Nodes.

Add a Viewer node so you can preview the result.

Connect the Render Layers image to the Viewer.

Next, add an Image node and open the original photograph used for the fSpy perspective match.

15. Add an Alpha Over Node

Add an Alpha Over node.

Connect:

1. The original photograph to the top image input.
2. The Render Layers image to the bottom image input.

Connect the Alpha Over output to the Viewer and Composite nodes.

The final image now uses the original high-quality photograph as the background while preserving the reflections and shadows generated by the 3D environment.

Final Result

This workflow creates a simple pseudo-HDR environment from a single perspective-matched photograph.

The camera-projected geometry provides reflections, the HDRI fills in missing environmental information, the shadow catcher creates contact with the ground, and Blender’s compositor places everything back over the original photograph.

It is a fast way to create believable site-specific 3D mockups without modeling an entire environment.

Happy 3D modeling!

<details><summary>

## Video Transcript

</summary>

In this Blender tutorial, I'm going to show you how you can use a camera projection to project a texture onto 3D geometry made from a perspective matched photo in f SPI to use as an ambient background for reflections on your object. This is great when you don't have an dry image of a specific scene, or you just need to mock up something in a site specific way, and you need to have realistic reflections and shadows created from that environment. But you don't want to spend a lot of time making it here. I have a very simple environment that is made from an F by perspective match. I have a whole video going over how to use FCP, but please note that there's not much detail in this alleyway. If I look back through the camera and I hide the walls, we can see that these walls match the FS by photo. Now we need to have the brick texture actually be on the walls. So select the walls, then add a new material. We'll call this material walls instead of the principle in Blender. Go ahead and change it to an emission shader. For the color. We'll select the image of the walls that we used in F spy. Navigate to the image, select the image, and then open it. We don't see anything, but if we click on Material Preview, we'll see a totally messed up texture. So how do we fix this?

What we need to do is make it so it has the right UV coordinates for a camera projection on this texture. The easy way to do that is click on the modifier for the walls. Add a modifier we'll call edit UV project. For the UV map. We'll select the default UV map and then for the object for the projection, select your F spy camera. Now it is projected from the F spy camera onto the object. But we need to add some subdivisions so there's enough geometry for the UV projection to work. Add one more modifier. Generate subdivision surface instead of Catmull Clark. Select simple for the subdivisions and then crank the subdivisions up to six. This needs to be placed before UV project. And now we're starting to get something that almost looks right. We have one final thing to fix, and that's the aspect ratio of the image here. It says it's a 1 to 1 image. We need to change that to the actual aspect ratio. So go ahead and use an image viewer to find out the proportions or the dimensions of your original image. This image is 4032 pixels by 2268 pixels once we type that in. Notice that everything locks in really nice.

If I orbit around, you can see that the projection is right on the object. It doesn't look very good from different angles, but if we look through the camera, everything is perfect. Now, instead of seeing this default HD from Blender on our sphere, we want to see the bricks we need to click Render Preview. That's up in the top right now. There are no reflections because the default render of EV is selected. Go ahead and select cycles. We'll see the reflections of the bricks, but notice that all this repeated texture is still shining through. We can fix that in the Shading material workspace. Click on shading. Here we can see the emission shader that we're using for our reflections. If you want to see what's happening, we can go ahead and click Render View. We need to add a few nodes. Press shift a search, add a mix shader. Then we need to add a transparent shader. Press shift a search transparent. Plug the transparent into the top of the mix shader. Plug the emission into the bottom of the mix shader, and then take the alpha from the texture into the factor, and then plug the mic shader into the surface of the material. We still see everything because we need to change the way the image texture repeats. Right now it's on repeat, but if we select clip it will disappear. So now we don't see that repeated texture in the reflection, but the sky is missing.

The easy way to fix this is to add an environment texture, such as an dry that's similar to our scene. It doesn't have to be exact, but it should be relatively close. Click on the world tab, then under color select Environment Texture. Everything turns magenta because there's no texture. Select it. Open a texture. This is a cloudy HDR image from Poly Haven. I'm going to select that and open it. And right away we get a more believable scene. Sure, if we knew exactly what this should look like, we could build a couple fake brick buildings or cubes in the background, but this will be pretty believable. This sets up an emissive texture for camera projection to get the reflections from a camera matched perspective photo 2D image onto a 3D model. The problem is it's an emissive texture and therefore we don't see any shadows from the ball. This creates really great reflections of the environment on the ball in three dimensional space, but we need to be able to see the shadow from the ball as well. So how can we create the shadow on the ball?

The first thing to do is to separate the ground from the walls. Select viewport Shading. Then with the walls selected tab into edit mode, press three. For face mode, select the faces by holding shift. Click on all the faces. Right click separate by selection. This creates a new mesh tab back into object mode, and then I'll label this mesh ground. Now that we have the ground, we can go to shading. Currently the ground is using the same shader as the walls using the emission shader. If we change this material then the walls will change, so we need to duplicate it by pressing this icon. Now I have walls .001. I can rename this to ground. Select the emission shader, press x, press shift a search for diffuse. Select diffuse BSF. Replace the same connections that the emission shader had. Now you can see that the shadows are coming onto the ball right here, which is great. This is looking great!

We now have a shadow being cast on the ground, but we want to avoid any shadows coming from the walls. But also we want to remove the visibility of the walls and the ground so we can control the final compositing of our 3D model into this 2D image. The first thing to do is click the walls. Make sure you have walls selected. We can turn off the shadow. This will remove the shadow that's being cast on the ground from the walls. And now we only have shadow from the ball. Then we can also select camera and this removes their visibility. Now click on ground. Then on the ground we can click Shadow Catcher. This will remove its visibility except for the shadow. But the problem is notice that we can't see into the final scene. We don't see that original image we are seeing the new dry we use for our sky. Click on the render camera, then under film select transparent. Now you have successfully added realistic shadows to the ground plane of your object that you can use in compositing. But we have one more step to do because when you render, you're not going to see the background image. Here you can see that the objects don't show up in the render, so we can make a composite. Yet their reflections are still on our ball. So this is kind of like making a pseudo HDR image. How do we get the background to show up. So we can have a nice composite image with our UV projection.

Click compositing. If you don't see anything here make sure you click Use nodes. Press shift a search and add a viewer node. This allows us to see what's happening. Drag the render layer image into the image of the viewer node. Next, we need to get the actual image that we were using to make our composite image. Press shift a search, look for image, select image, then open the image that you use to make the original perspective photo match. This is the original image for the brick alley. I'll select the image. Next, we need a node that tells Blender how to composite the render layers and the background image together. Press shift a search for Alpha over. In the Alpha over, we want to make sure that the brick alley goes to the top node, and then the render layers go into the bottom node. Then we can drag the image from the alpha over into the viewer, so we can see if it's correct. Now we have a nice composite with the original image in its high quality view, yet we still have all the reflections carried over from our 3D model, so we can create nice high quality composites. Hopefully you can use Alpha over in Blender's compositing tab to create composite images of your 3D models and objects inside 2D pictures with camera projection. Happy 3D modeling!

</details>
