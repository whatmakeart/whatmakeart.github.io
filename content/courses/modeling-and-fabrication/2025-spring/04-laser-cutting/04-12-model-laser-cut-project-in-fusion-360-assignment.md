---
title: 04.12 Model 3D Print and Laser Cut Project in Fusion 360 Assignment
date: 2025-02-06T12:00:00Z
lastmod: 2025-02-06T14:18:05
---

## Assignment Deliverables

1.  Fusion 360 .f3d model file
    - Label file YYYYMMDD Lastname Firstname Clamp Model.f3d
2.  Rendering(s) of project with appearances applied (.png or .jpg)
    - Label file(s) YYYYMMDD Lastname Firstname Clamp Render 1.png

## Assignment Overview

Using your sketches, cardboard model, and peer feedback, make a digital 3D model of your 3D print clamp and laser cut project in Fusion 360. Each piece of the project should be a separate component so the parts can be layed flat for laser cutting and arranged on the print bed for 3D printing.

You are required to use at least one user parameter dimension for "ply" or the thickness of the material you are cutting. Materials vary in width, so we will [measure the material before cutting](https://youtu.be/a7HOiBC_81s) on the laser cutter. When we know the real thickness of the material [using digital calipers](https://youtu.be/oOZjbbe6YZk), then we can change the "ply" variable and the model will produce an accurate cut file for the laser cutter. Fusion 360 is able to make a kerf adjustment based on the thickness of the laser.

## Model in Fusion 360

As an option, you can import your sketches to use as guides you start your first sketch. You need to calibrate the size of the sketch to be the correct scale in your Fusion 360 file. Then you can use the sketch as a guide to create your digital sketch. This step is not necessary but can be helpful. This video shows [how to import an image as a canvas](https://youtu.be/-3SMfrnWMTE) in Fusion 360.

If you are making detailed organic forms or drawing an image to use as the contours of the sides or other parts of your stand it can be difficult to draw complex shapes and images in Fusion. You can draw you image or character in Illustrator and export it as an SVG or DXF. Then you can import that file into Fusion 360. Once in fusion the file acts as a sketch and you can extrude it right away to be a piece of your model. This workflow is often better than drawing a complex organic form in Fusion.

### Keep Parts as Separate Components

Make a new component at the top level of you model for each part. The top level should be the "parent" of each of the other components. The components should be at the same outline level in the browser and not nested inside each other.

### Design Considerations

Think about how your pieces will hold together. Add tabs and holes and any other design features needed to attach the different pieces. You can use the "Combine" modify action to cut out pieces using other pieces as "tools".

How will the design of the 3D print form and the laser cut pieces work together?

- Will you use pinned finger joints?
- Will you use glue?
- Will you use tabs and holes?
- Will you have bendable living hinges?
- Will you use snap clips?
- Will you use captive nut joints?

## Add Appearances and Export Render

In Fusion 360 add appearances to you model as you wish and export a render.

Make the model look the way you want the final product to look. If you are going to paint pieces then paint the pieces in the render. If you will have etchings then place image decal(s) on the model to represent the etchings.

Make sure your render image is well composed and high resolution with at least one direction 4000px. Choose a 4:3 16:9 or 1:1 aspect ratio. You can make multiple render views.

Instead of having your model exist in a void, it is better to model a basic environment for the model to exist in. Model a table top and some walls. Put a cup or other object in the scene that can breathe life into the render. Complete the render with a [custom HDRI background](../../../../3d-modeling/fusion-360/hdri-background-fusion-360.md) that compliments the 3D modeled environment.

## Grading Rubric

<div class="responsive-table-markdown">

| Assessment                               | Weight    |
| ---------------------------------------- | --------- |
| Design of Project                        | 30 points |
| Use "ply" user parameter                 | 20 points |
| Use Separate Components for Pieces       | 30 points |
| Use of laser cut joints to Connect Parts | 30 points |
| Fastener included                        | 30 points |
| 3D Printing and Laser Cut Integration    | 30 points |
| Materials Applied                        | 10 points |
| Render Image Composition                 | 20 points |
| Render Aspect Ratio not set to Viewport  | 10 points |
| File Management                          | 10 points |

</div>
