---
date: 2022-11-12T8:30:00-04:00
description: In this Blender tutorial, I will show you how to get random numbers that exist within a specific range rather than just the default zero to one range.
featured_image: /posts/images/random-number-in-range-blender.jpg
tags:
  - Blender
  - 3D Modeling
  - Rendering
title: Blender Random Number in Range
draft: false
spellcheck: off
---

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/i9JTQ8S63x0?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## How to Get Random Numbers Within a Specific Range in Blender

In this [Blender](./blender.md) tutorial, I will show you how to get random numbers that exist within a specific range rather than just the default zero to one range for the Object Info > Random value node.

## Step 1: Create a Material Node Setup

1. Create a new material and add a Color Ramp node.
2. Add an Object Info node and connect it to the Color Ramp node's Factor input.
3. Add two Value nodes and set their values to the upper and lower limits of the range you want to generate random numbers for.
4. Connect the Value nodes to a Math node set to Subtract.
5. Connect the output of the Math node to a Math node set to Multiply.
6. Connect the output of the Multiply node to the Factor input of the Color Ramp node.

## Step 2: Test the Material

1. Click the Render button to see the results.
2. Change the values of the Value nodes to see how the range of random numbers changes.

## Step 3: Group the Nodes

1. Select all of the nodes and right-click > Group.
2. Rename the node group to something descriptive, such as "Random Range".

## Step 4: Use the Node Group

1. Drag the node group from the Node Editor header into the material node tree.
2. Connect the node group's inputs to the desired inputs.
3. Change the node group's inputs to change the range of random numbers.

## Conclusion

This tutorial showed you how to get random numbers within a specific range in Blender. You can use this technique to create a variety of effects, such as procedural textures, procedural materials, and even procedural animations.

## Here are some additional tips for using random numbers in Blender:

- You can use the Object Info > Random value node to generate random numbers that are based on the object's location, rotation, or scale.
- You can use the Math nodes to perform mathematical operations on random numbers, such as adding, subtracting, multiplying, and dividing.
- You can use the Color Ramp node to map random numbers to a range of colors.
- You can use the Texture Coordinate node to generate random numbers based on the object's UV coordinates.
- You can use the Random Value node in the Blender Python API to generate random numbers from within a script.

I hope this tutorial was helpful!
