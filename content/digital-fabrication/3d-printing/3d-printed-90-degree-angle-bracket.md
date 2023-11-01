---
date: 2022-02-22T8:29:00-04:00
description: "3D Printed 90 Degree Angle Bracket"
featured_image: "/posts/3d-printed-90-degree-angle-bracket/3d print 90 degree bracket title.jpg"
tags: ["3D Printing", "Fusion 360"]
title: "3D Printed 90 Degree Angle Bracket"
aliases:
  - /posts/3d-printed-90-degree-angle-bracket
---

{{< youtube id="lAX7XAcrvL4" title="3D Printed 90 Degree Angle Bracket" >}}

## Transcript

In this Autodesk Fusion 360 tutorial, I'm going to show you how to make 3D printed 90-degree angle brackets. We'll put a hole in this bracket so you can use it to attach to panels the sides of boxes shelves or anything else where you need 90-degree support, and you want it to be a custom size. We'll also make this Fusion 360 model parametric. That way you can change the parameters and when that 90-degree angle bracket changes size based on the size of your 3D printing bed or the project that you're working on. Let's go ahead and get started making this angle bracket.

The first thing to do is to create a component, so we'll create a new component. We'll call it bracket, then we need to make some user parameters. Modify > change parameters make a parameter of “thick” and we'll make this five, then we'll make a parameter of “length” and we'll make this 25. Then we need a parameter of “width”, we'll make this 25 and then we need a parameter of “height” and we'll make this 25. Now we're ready to start drawing so we'll create a sketch. Create a sketch on the ground plane and we'll make a center rectangle. I’ll click on the origin and I’ll make this “width” and then this will be “length”.

To make this fully parametric we need one more parameter so I’ll go modify and then I’ll make a parameter called “hole” and this will be for the bolt. And I’ll make this 3 for an M3 nut maybe we'll make it 4 for an M4 nut to start and then we'll say ok. Then we'll do this circle and this circle will be “hole” and then we can extrude and then we can draw one more rectangle over here and this rectangle will be “thick” and we want to make sure this bottom line is co-linear. Then we can extrude both these pieces and we'll go up “thick”. Now our sketch disappears but we can re-show that by twirling out the browser. The default behavior of Fusion 360 is to hide the sketch after the first extrude so we'll click extrude again then we'll click and hold so we can get that profile and then the start will be object. We'll start at the top of this object and then the distance will be “height”.

Now what we need to do is create a sketch on this plane so we'll create a sketch right here and then we can draw some construction lines by pressing l. And then press x and we'll draw a construction line here and we'll draw a construction line here. Then we can draw a circle right on the center of these construction lines. If you leave construction lines selected go ahead and select your circle and then press x. And then we'll dimension this circle “hole” we can press e to extrude and then right there we'll click. We'll go this direction and we'll make sure we do cut and okay.

Now this is 3D printed so it's going to be inherently weak so we need to add some gussets to this angle bracket we can go ahead and do that by creating a sketch and we'll create this sketch right here on the edge and then we'll project in this body. So we'll go ahead and project the body in and say okay. And then we can draw some lines and what I’m going to do is … you could either decide to draw your gusset all the way from the edge, you could draw it from the midpoint, you could make something that's halfway … I think I’m just going to go from the midpoint right here to that midpoint. And then I’m going to extrude this negative “thick” and make sure it's joined. And then what I want to do is go ahead and mirror this so I’ll go create mirror and then make sure it says features. I’ll grab this one and then the mirror plane will be the center plane and I’ll say okay.

And then I think what would be nice is if we cut off the edges there or just fillet them. I think we'll fillet them or maybe chamfer. So we'll go modify chamfer and then we'll chamfer these and I think “thick” will be too much or maybe leave it at “thick” yeah we'll do it “thick”. Perfect. And then we'll say okay.

So now we have this nice 3D printed bracket and it's parametric so if we want to change the size of these we can go modify > change parameters and watch what happens if we change. For example “length” can now be 30 and then everything updates automatically. We could change the thickness to be 2 and the bracket automatically updates. So now you have a parametric 3D printable 90-degree angle bracket that you can make in any size for different projects. You can add countersunk boring to the holes or other attachments that you need for your 3D printing project. Happy 3D modeling and happy 3D printing.
