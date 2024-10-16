---
title: Primitive Shapes p5.js
date: 2024-01-11T06:38:18
lastmod: 2024-01-24T15:07:10
tags:
  - p5.js
  - coding
---

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/7U0wQlDod60?si=kL-nwYtDLqyy1VOt?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

This tutorial in the "Programming for Artists" series introduces the basics of drawing primitive shapes in p5.js, a JavaScript library for creative coding. Let's break down the key concepts and steps:

1. **Setting Up in p5.js**:

   - Start by loading the p5.js web editor and creating a basic canvas, typically 400x400 pixels.
   - Set a background color using grayscale (e.g., `background(220);` for a light gray background).

2. **Understanding the Coordinate System**:

   - p5.js uses a 2D coordinate system where the origin (0,0) is at the top left corner.
   - X-coordinates increase to the right, and Y-coordinates increase downwards.

3. **Drawing Shapes**:

   - **Ellipses and Circles**:
     - Use `ellipse(x, y, width, height)` to draw an ellipse. For example, `ellipse(50, 50, 80, 80)` creates an ellipse at position (50, 50) with a width and height of 80 pixels.
     - A circle is a special case of an ellipse where the width and height are equal. Use `circle(x, y, diameter)` to draw a circle.
   - **Lines**:
     - Create lines using `line(x1, y1, x2, y2)`. For example, `line(30, 20, 85, 75)` draws a line from (30, 20) to (85, 75).
     - You can create horizontal or vertical lines by aligning the x or y coordinates, respectively.
   - **Points**:
     - Draw a point (a single pixel) using `point(x, y)`.
   - **Stroke Weight**:
     - Change the thickness of lines and outlines using `strokeWeight(value)`. For instance, `strokeWeight(25)` makes lines 25 pixels thick.
   - **Quads, Rectangles, and Squares**:
     - Quads require four points (`quad(x1, y1, x2, y2, x3, y3, x4, y4)`).
     - Rectangles are defined by the top-left corner and size (`rect(x, y, width, height)`). Optionally, you can add corner radii.
     - Squares are defined by the top-left corner and one side length (`square(x, y, size)`).
   - **Triangles**:
     - Triangles need three points (`triangle(x1, y1, x2, y2, x3, y3)`).

4. **Color and Style**:

   - Use `fill(r, g, b)` to set the fill color of shapes.
   - Use `stroke(r, g, b)` to set the color of the stroke (outline) of shapes.
   - These colors will apply to all subsequent shapes unless changed.

5. **Experimentation**:

   - Encourage playing with these functions, changing coordinates, sizes, and colors to see the effects.
   - Explore creating various shapes and patterns to understand how p5.js renders them on the canvas.

6. **Advanced Techniques** (to be covered in future tutorials):
   - Introducing variables and animation.
   - Changing shapes and colors dynamically.

This tutorial provides a foundational understanding of drawing with p5.js, crucial for any artist venturing into the world of creative coding. Remember, the key is to experiment and explore the various functions and their effects on the canvas. Happy programming and creative exploration!

[![p5.js primitive shapes](./attachments/p5-js-primitive-shapes-thumb.png)](./attachments/p5-js-primitive-shapes-thumb.png)

## Primitive Shapes p5.js Video Transcript

In this programming for artist tutorial I'm going to go over the basics of drawing primitive shapes in p5.js. p5.js is a software library made by p5.js and the Processing Foundation. It is free and you can use it in a web editor. If you have questions about how to use the web editor please see previous videos in this Programming for Artists series.

So now that I have my web editor loaded up I can press the play button and then it draws the basic canvas. The basic canvas is 400 by 400 and then the background is a grayscale color of 220. So now let's draw some shapes within this. Before we drew an ellipse ,so we could start with that if we type ellipse 50 comma 50 comma 80 comma 80 then it draws an ellipse. But why is the ellipse there? To understand that we need to talk a little bit about the coordinate system inside p5.js.

Here we have two different different ways of thinking about coordinates. By coordinates we mean an X and a Y coordinate. Sometimes we also have Z as a coordinate in 3D space but for right now we're thinking of points in a 2D plane. The X direction being one and the Y direction being another. When you were in school in a math class you probably were introduced to this coordinate system on the left. This is a Cartesian coordinate system and it has an X and a Y axis here. If you look here in the middle X and Y at 0, 0 is at the middle. If we have X is 4 and Y is 3 we count over 1 2 3 4 and then up 1 2 3. This is different in computer Graphics. In computer Graphics the 0, 0 starts in the top left here. So if I want to go to the same spot 4, 3 I count over X 1 2 3 4 and then down Y 1 2 3. So it's important to remember that when we're placing objects on a p5.js canvas that we're using a coordinate system that starts at the upper left.

So here we can see that in action here with the ellipse. So remember this is the X, so this is moving over 50. If I change this to 150 notice that the circle moves over and I can also move this down by typing 250 and the circle will move down to 250. I'm calling this a circle but it's really an ellipse because remember I can change the size of the ellipse and we can have it have a different width or height. Ff we only draw one number with an ellipse, it defaults to a circle. And in fact we can even change that to a circle. So I can change this ellipse to circle and it will do the same thing but it won't work if I put in a new value here. So the circle doesn't know what to do with that extra value. So ellipse and circle are very similar but they are also different. But how do we know ellipse, circle? How do we know that we can do these things?

Well if we go to the reference of p5.js it has all kinds of information and we'll cover more of these later in the course but for right now we want to focus on these 2D Primitives. We've done these ones right here ellipse and circle. If we click on line it tells us what we can do with line so let's go ahead and just copy this from right here. So I'm going to copy this information and I'm going to go back to the web editor and then below Circle I'm going to paste in the line code. So here we have a line that's going in a diagonal way right here. Let's look back at this. So it says it is the X1 Y1 X2 Y2 so if we look back here, so this is X 30 over on the X down 20. If I want to make this horizontal I could type in 75 right here then the line will become horizontal because both of the Y-coordinates are at the same level. We can make this longer by having the second X be all the way over. If I wanted to start up at the top corner I can make this 0, 0 and then it starts up at the top corner and if I wanted to start at the bottom corner I type 399, 399. Wait a minute. I thought the canvas was 400 by 400. Why am I not typing in 400? Why is it 399?

Well, notice that this is zero. So most of the time in computers when you're working with code you start counting at zero. So if you go 0 1 2 3 4 that's suddenly five items. So the same thing happens when you go all the way up to 399. That actually is the 400th pixel right? So now we have a line going across the screen and we can also make this go right in the middle by typing 199.

Let's look back at the reference to see other shapes that we can draw with p5.js. Now we can also draw a point. It's just a single point if I click on point it gives us some information. So if I click right here 85, 20 and I'll copy that and I'll come back to the web editor and then I will type in that point. So this point is quite small because it's a single pixel.

So let's look at some of the ways that we can modify shapes. If I come up here and it says strokeWeight. So if I come back to this function right here I add strokeWeight 25 , look that it makes all of the strokes 25. I can definitely see my point but now how do I keep the other strokes different?

An important thing to remember about programming in computers is they do each line step by step. So first it draws the background 220, then it draws the circle, then it draws the line, then it changes the value of stroke weight to 25, and then it draws the point, then it comes back around it draws the background, it draws the circle, and it keeps that same value of strokeWeight. So what we can do is we can take strokeWeight, copy it, put it under the background, and then we can change it to 2. And then for those two lines it'll have a stroke weight of 2, and then for the point it'll have a stroke weight of 25.

Let's go back to the reference and see what other shapes we have. We can also draw quads, and rectangles, squares, and triangles. These are all quite similar but they have different features. If we start with the quad, so the quad has a lot of points this is the same as drawing a single point at 20, 20 at the top left, then a second point at 80, 20 the top right, then a point at 80, 80 in the bottom right, and then a point at 20, 80 on the lower left. We can also make a quad be a different shape by having the points be at different location so I'm going to copy this code to make this rhombus, go back to the web editor and then I will paste it in. Now we have our rhombus up here and notice it keeps that stroke weight. So if I want to bring that stroke weight back down I can copy that and place it here, so now that will have a smaller stroke weight and we can see it.

Let's go see more things in the reference. So we also have rectangle. A rectangle takes less information because we can just describe where the rectangle starts. So it's important to remember the coordinate system we just talked about. So the rectangle starts at 30, 20 so it goes over 30 down 20 and then it shows the size of the rectangle. So we can go ahead and copy that and make our rectangle and we're going to go ahead and move this down. So we're going to go ahead and move this over to 300 so it doesn't overlap the other shapes and then you can change the size of the rectangle. So I can make this 155 and then it'll be longer and then I can also make this maybe 200 and then my rectangle is there. So rectangles are very convenient because you don't need as many points as you do in a quad and they're easier to move around because with a quad I need to move all of the points down to be able to have that adjust. Another nice thing with the rectangle is you can start to describe radiuses. So if I have a fifth number here and I make this at the end and I make it 13 suddenly that rectangle has radiuses going all the way around. And they can be different. So you can have different radiuses going around. They start at the top, then over on the right, then down to the left, and as you can see the largest radius is 67 and it's down in the lower left here. So that's a really fun thing that you can do with rectangles.

So a square uses even less numbers because we just need to know how big one of the sides are because they're equal. So this square starts at 30, 20, 55 If we copy this information then in the web editor we paste it it'll be up in the top left here but then we can simply move this down to 100 and then we can move it over to 130 and then changing the size is fairly simple because we can just type in one number and then the size of the square changes because it knows both sides are equal.

Then we also have a triangle. A triangle needs three points so it also starts with the Xs and the Ys of those points and then they move around. So if I bring in this triangle image right here then we have a triangle up at the top. If I want to change this one all the way down to the bottom, there it moves it down but notice how it starts to skew that triangle? So by moving all of them down equally on the Y axis then they move over the same and then I can move the whole thing over by 100 as well and then suddenly the triangle is sitting there in the middle.

So hopefully this shows you how you can draw some shapes and have them be on the canvas. We'll talk about how to modify shapes and do other other things with them but I want to show you just a few things that can happen.

So for example, if I come up here I can type fill and then I can type 255 comma 56 comma 23. RGB values and suddenly all my shapes are filled with red, and remember this fill color is now set all the way down so all of them get that fill color. If I copy this and I put it down here under this strokeWeight and then I change this one to 256 now I have some yellow shapes as well. I can do this one more time and just have the triangle be a different color. It will almost be white as it's all filled in. We'll make this 55 so it has a bit of a different color. So you can change the fill of the colors and you can do the same thing with the stroke. So if I come here and I type stroke, now all the strokes are blue and the same thing occurs. We need to change that stroke.

Slong the way we'll talk about how to add variables how to have these strokes and colors change over time as well as the positions. So go ahead and try to play around with the shapes. Try to draw a picture. Try to move things around and be creative with them. Happy programming.
