---
title: Fusion 360 Additional User Parameters
---

User parameters in Fusion 360 allow the use of variables and equations for dimensions of parts in a parametric model. All the dimensions could be based on proportions of a single dimension. For example the height could always be three times the width. The combination of parameters and sketch constraints make Fusion 360 a robust but flexible parametric modeling program.

## Beyond "ply"

Earlier, we used a user parameter of "ply" for the thickness of plywood used in laser cutting. This is a convenient user parameter because plywood often varies in thickness. By always using "ply" rather than 3mm, if the plywood thickness changes, then only one number needs to be changed to update the entire model and design history.

## Easier Updating

Every dimension does not need to be a user parameter but generally the more parameters you have and the more the parameters relate to one another the easier it is to change your model or design later. If you have a hard coded dimension for height at the beginning of your design history timeline, then you need to go to that sketch to change the dimension. That could be a lot of scrolling in the side browser or the design timeline in complex models. If you have a user parameter for height, then you can simply modify the parameter and see the model update right away without finding the sketch. This would also update all of the height dimensions in one step.
