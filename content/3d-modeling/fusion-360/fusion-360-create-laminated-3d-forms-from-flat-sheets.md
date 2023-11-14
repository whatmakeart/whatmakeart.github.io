---
title: Create Laminated 3D Forms from Flat Sheets in Fusion 360
date: 2023-11-12T08:37:23
lastmod: 2023-11-14T05:04:26
---

<div class="video-grid">
<div class="iframe-16-9-container"><iframe class="youTubeIframe" style="position: absolute; top: 0; bottom: 0; left: 0; width: 100%; height: 100%; border: 0; z-index: 1;" src="https://www.youtube.com/embed/dWYMBVTUvDA?si=YMfzNNNKFWJkFKPW?rel=0" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
</div>
</div>

Are you interested in creating 3D forms from flat sheets using a laser cutter? We'll go through a step-by-step Fusion 360 tutorial to turn an organic shape into a series of panels that can be used to construct a laminated three-dimensional object. Specifically, we'll tackle how to segment a sphere—a shape that challenges conventional split body techniques—using the trim function.

## Fusion 360 Instructions

### Step 1: Create Your Organic Form

Start by creating a sphere in Fusion 360:

- Open Fusion 360 and select the ground plane for sketching.
- Use the sphere creation tool to model a sphere with a diameter of 100 units (or your desired size).

### Step 2: Draw Auxiliary Sketches

Since a sphere has no flat faces to work with, you'll need to create a sketch to assist with panel creation:

- Sketch on the bottom plane and use the 'project' function ('P' key) with the selection filter set to 'bodies.'
- Select your sphere and confirm the projection.
- Use the line tool ('L' key) to draw a vertical line from the projected outline of the sphere, constraining it to be both vertical and tangent to the projection.
- Complete your sketch.

### Step 3: Construct Planes for Cutting

- Create a new plane at a 90-degree angle along the line you've drawn.
- Sketch a rectangle on this plane, ensuring it's larger than your sphere.

### Step 4: Switch to Surface Workspace

- Transition from the solid to the surface workspace in Fusion 360.
- Use the 'patch' function to create a surface from your rectangle sketch. Remember, a patch in Fusion is a surface without thickness.

### Step 5: Create a Rectangular Pattern

- Choose 'Create Pattern' and then 'Rectangular Pattern' from the menu.
- Select the patch you've made and define the pattern along the red axis.
- Opt for spacing (6 mm apart if using 3 mm plywood) and determine the number of instances (e.g., 17) to span across the sphere with a little extra.

### Step 6: Trim and Split the Patches

- Attempting to split the sphere with the 'split body' tool will result in an error due to the lack of a flat face.
- Use the 'trim' function instead, selecting the sphere as your trimming tool and the patches you want to trim.
- Delete any unnecessary split bodies left over.

### Step 7: Thicken the Panels

- Use the 'thicken' tool to give the trimmed patches a crisp edge with a width half the thickness of your material.
- Choose a symmetric option for an even application on both sides.

## Conclusion

With these steps, you should be able to design and prepare panels from any spherical or complex form for laser cutting and subsequent lamination. The goal is to achieve a series of flat sheets that can perfectly align to recreate the original 3D shape. This method opens up a world of possibilities for materializing your digital designs in the physical world, so give it a try and see what you can create!

Remember, this is just the beginning of what you can do with Fusion 360's powerful tools. With practice, you can adapt these techniques to even more intricate designs and turn your virtual models into tangible creations. Happy designing!

## Fusion 360 Slice Body into Thickened Patches for Laser Cutting Video Transcript

In this Fusion 360 tutorial I'm going to show you how to take an organic form and slice it into panels that can be laser cut to make a laminated three-dimensional form that is made out of flat sheets cut on a laser cutter.
To get started we need a form for this example I'm going to show you how to cut up a sphere this example is good because it doesn't allow you to use the split body function and you must use the trim function. For many different forms you can simply use split body and it'll work fine but for some things where there's no face like a sphere or a torus, then you need to use trim.
So let's get started. First I'll create a sphere. I'll create it on the ground plane and I'll make it 100. Next I need a plane to draw a sketch for my surfaces but since I can't draw a tangent plane I need to draw another sketch. First I'll draw a sketch here on the bottom plane. I'll press p to project and I'll make sure my selection filter is on bodies. I'll select the sphere and press okay. Then I'll press L for the line tool and draw straight down. I'll select vertical and make it constrained to the vertical plane and I'll select tangent to make it tangent to that projection. Then I can finish my sketch.

Now I can construct a plane at an angle on this line and I'll type 90°. Now I can draw a sketch for my planes that I'm going to laser cut. I'll draw a sketch on this plane and now the sketch just needs to be a rectangle bigger than the object. So I'll press R and I'll drag a rectangle, finish my sketch and then currently I'm in the solid workspace in Fusion 360. I want to move to Fusion 360's surface workspace.

Then I'll create a patch by selecting this sketch. A patch is actually a body that has no thickness. Next I want to create a rectangular pattern. I'll select create pattern, rectangular pattern. I'll select the body I want to make the pattern out of and then I need to select axes. I'll select this red axis right here now I have a choice between spacing or extent. For this example I'm going to choose spacing because when I laser cut I actually want the panels to be a certain spacing apart. I'm going to be using 3 mm plywood so I'll space them out at 6 mm. Then for the quantity you can just put as many as you need so I'll put maybe 17. So then orbit around to make sure you have enough patches going past your object. Looks like I need one more patch to go past. Now I'm definitely sure and if you wanted this to start more on the edge we could have created an offset plane beforehand but that's up to you.

Now that I have my patches I need to split them. If I go to modify split body and I highlight the bodies on the top then I use a splitting tool of the sphere it gives me an error because there's not really a face on the sphere to split. So let's cancel.

What I need to use is trim, so I'm going to select the sphere as my trim tool. Now this tool is a little confusing because normally in Fusion 360 there's another dialogue box, but all we have to do is then select these objects at the top. Unfortunately there's no more marquee select so we have to select them individually. If I press okay, suddenly those are trimmed away I can select this body and then delete it because it's not needed. Over in my outliner under bodies if I hide the first body you can see that we now have these planes that are in the original shape of our object. I'm also going to hide the sketches.

Next we need to thicken these so that they have a nice crisp edge that we can use on the laser cutter. So I go to create, thicken and ask which faces. I'll just select all these faces and I'll select them in a symmetric. It defaults to one side but I want to go symmetric and since I'm using three millimeter plywood I'll use 1.5 mm, If I press okay you can see now I have thick pieces that have a right angle edge. This is the important part. So if I look from the bottom you can tell that these are actual pieces that could be cut from a laser cutter. So hopefully this allows you to do this on a more complex form.
