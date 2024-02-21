---
title: Fusion 360 Organic Forms with T-Splines
date: 2023-06-15T05:25:26
lastmod: 2024-02-21T09:22:35
tags:
  - Fusion 360
---

## Direct Modeling

Fusion 360 is a parametric modeling program. Specific dimensions, sketches, and constraints define how a 3D model is built. If the order of actions is changed the model can be completely different. Parametric modeling is extremely powerful but it is not the only way to model. Fusion 360 also has a direct modeling mode. This mode does not capture any history on the design timeline. In some situations this can be ideal since one does not need to worry about timeline warnings about lost projections or geometry. It also has disadvantages since there is no design history to edit or revise. Even though direct modeling is less constrained, it is still much more rigid than organic mesh modeling.

## Form Workspace

Fusion has a version of mesh modeling called the Form workspace. In this workspace t-spline forms can be manipulated into complex organic shapes. Then once the form is complete, it is converted to a solid body and then all of the powerful parametric design features of Fusion can be used. By combining organic forms from the form workspace with precise parametric parts in the Design workspace unique and useful designs can be made.

[![Form Workspace](attachments/2023-form-workspace-fusion-360.png)](attachments/2023-form-workspace-fusion-360.png)

To get to the Form workspace, click on the purple cube at the top of the solid menu in the Design workspace. This add new options for create and modify to the menu. Instead of seeing blue icons for the form primitives and modify commands, icons are purple, indicating that t-splines will be created. T-Splines are forms with vertices or points, edges or lines, and faces. The edges connect two points. and the faces are formed by 3 or more edges.

[![Create a T-Spline Box](attachments/2023-create-t-spline-box.png)](attachments/2023-create-t-spline-box.png)

In the form workspace you can create a sketch, box, plane, cylinder, sphere, torus, quadball, pipe, or a face. Forms can also be created from operations including extrude, revolve, sweep, and loft. Notice that there are new items such as quadball and face and some items are missing like hole, coil, rib, emboss, and screw.

When you create a primitive shape in the form workspace, you enter in basic dimensions just like the solid workspace but there are additional options for divisions. These divisions create the base resolution of the form you are creating. For smooth forms, using the least amount of divisions possible to get the desired result will create forms with the most continuous and smooth curvature. This is similar to using as few points as possible when drawing a spline.

For more complex forms, more divisions of the T-spline form are required. It is always possible to add more divisions but it can be difficult to remove divisions. Generally it is best practice to add more divisions and detail when needed but to not needlessly add extra divisions.

<div class="video-grid">
<div class="video-card">

### T-Splines Introduction in the Form Workspace

<div class="iframe-16-9-container"><iframe class="youTubeIframe" src="https://www.youtube.com/embed/8vGrRR_TLEg?rel=0" width="300" height="150" allowfullscreen="allowfullscreen"></iframe></div>
</div>

<div class="video-card">

### Box vs Smooth Mode

<div class="iframe-16-9-container"><iframe class="youTubeIframe" src="https://www.youtube.com/embed/B--0CElGp7s?rel=0" width="300" height="150" allowfullscreen="allowfullscreen"></iframe></div>
</div>

<div class="video-card">

### Extrude Faces - Form Workspace

<div class="iframe-16-9-container"><iframe class="youTubeIframe" src="https://www.youtube.com/embed/3YS1EX0rT0Y?rel=0" width="300" height="150" allowfullscreen="allowfullscreen"></iframe></div>
</div>

<div class="video-card">

### Insert Edge Loop - Form Workspace

<div class="iframe-16-9-container"><iframe class="youTubeIframe" src="https://www.youtube.com/embed/dVTDrUhsN3Y?rel=0" width="300" height="150" allowfullscreen="allowfullscreen"></iframe></div>
</div>

<div class="video-card">

### Unweld Edges - Form Workspace

<div class="iframe-16-9-container"><iframe class="youTubeIframe" src="https://www.youtube.com/embed/jNAzRU-Dbyg?rel=0" width="300" height="150" allowfullscreen="allowfullscreen"></iframe></div>
</div>

<div class="video-card">

### Make Hole in T-Spline

<div class="iframe-16-9-container"><iframe class="youTubeIframe" src="https://www.youtube.com/embed/3vat_r_MZ3k?rel=0" width="300" height="150" allowfullscreen="allowfullscreen"></iframe></div>
</div>

<div class="video-card">

### Freeze T-Spline

<div class="iframe-16-9-container"><iframe class="youTubeIframe" src="https://www.youtube.com/embed/4gbuQ8cRA3I?rel=0" width="300" height="150" allowfullscreen="allowfullscreen"></iframe></div>
</div>

<div class="video-card">

### Crease T-Spline

<div class="iframe-16-9-container"><iframe class="youTubeIframe" src="https://www.youtube.com/embed/_ijhpIGns-A?rel=0" width="300" height="150" allowfullscreen="allowfullscreen"></iframe></div>
</div>

</div>
