---
title: Track Glasses with Boris FX Mocha in After Effects
date: 2024-09-26T21:26:32
lastmod: 2025-09-30T17:53:45
---

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/kO66kv92lrE?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

This Adobe After Effects tutorial walks through the process of using Boris FX Mocha to track glasses in a video and replace the glass within the frames with custom effects.

## Prepare the Footage

1. Start by importing a video clip with glasses into your After Effects timeline.
2. Choose the video layer containing the glasses.
3. Go to `Animation > Track in Boris FX Mocha` to apply the Mocha effect.

## Tracking the Glasses Frames

1. Click on the Mocha icon in the Effects panel to open the Mocha interface. This opens Mocha, a specialized tracking tool.
2. Use `Shift +` to zoom in.

- **Draw Track Shape**: Use the X-spline tool to draw a C-shape around the frame of the glasses (don’t include the inside lens to avoid tracking eye movements or reflections). Leave a slight margin for contrast.
- **Complete the Shape**: Close off the shape after circling the frame.
- **Set Tracking Parameters**: Once the track shape is complete, select **Perspective** and start tracking forward. Mocha will now track the movement of the glasses frame.
- **Rename Layer**: Once tracked, label this as "Right Frame." Turn off the visibility using the gear and eye icons.

### 3. **Masking the Lens Area**

- **Create a Mask**: Draw another mask inside the right frame using the X-spline tool. Adjust the points to closely match the lens shape.
- **Link to Track**: Instead of tracking this new mask, link it to the previous right frame track. This ensures the mask follows the tracked frame.
- **Adjust the Mask**: Check the mask throughout the video for any needed adjustments to the position.
- **Rename Mask**: Once satisfied, label this layer as "Right Lens."

### 4. **Repeat for the Left Frame**

- **Repeat the Process**: Follow the same steps to create a track and mask for the left frame of the glasses.
  - Zoom in, draw the C-shaped track, enable perspective tracking, and track forward.
  - Rename this new layer "Left Frame."
  - Create a mask for the left lens, link it to the left frame track, adjust it as necessary, and name it "Left Lens."

### 5. **Save and Transfer Masks**

- **Save the Work**: Once both masks are complete, save your project in Mocha and close it.
- **Export Masks to After Effects**: Back in After Effects, click on **Matte** under the Mocha effect in the timeline and choose **Create AE Masks** to generate masks on your video layer.
- **Transfer Masks to Solid Layer**:
  - Create a new solid layer (**Layer > New > Solid**) and label it "Lens Masks."
  - Copy the masks from the glasses footage and paste them onto the new solid layer.
  - Now, delete the masks from the original footage layer.

### 6. **Create Null Objects for Tracking**

- **Create Null Objects**: You will need null objects to control your effects.
  - Create two null objects (**Layer > New > Null Object**) and label them "Left Null" and "Right Null."
- **Duplicate Lens Mask Layer**: Duplicate the lens mask layer twice and label them "Right Mask" and "Left Mask." Delete the left mask from the right layer and vice versa.

### 7. **Apply Tracking Data to Nulls**

- **Track the Right Null**: Select the video footage, open the **Mocha Tracking Data** option, and click **Create Track Data**.
  - Select the right lens track and apply the transform data to the right null object.
- **Track the Left Null**: Repeat the process for the left lens track, applying the transform data to the left null.

### 8. **Apply Visual Effects to the Glasses**

- **Import Effect Footage**: Import the visual effect you want to apply to the lenses. In this example, it’s an LED installation video with bright colors.
- **Pre-compose Effect**: Right-click the effect layer, select **Pre-compose**, and label it "Right Reflections."
- **Add Lens Effect**: Apply the **CC Lens** effect from the Effects & Presets panel to the right reflections layer.
  - Adjust the size and convergence of the lens effect so that it fits just slightly larger than the lens of the glasses.
- **Duplicate for Left Lens**: Duplicate the right reflections layer, rename it "Left Reflections," and place it below the left mask layer.

### 9. **Link Effects to Null Objects**

- **Attach Right Reflection to Right Null**:
  - In the timeline, hold `Option` (or `Alt`) and click on the stopwatch next to the **Center** property of the CC Lens effect. This opens the expression editor.
  - Use the pick whip to link the center of the effect to the position of the right null object.
- **Attach Left Reflection to Left Null**: Repeat the process for the left reflections, linking them to the left null object.

### 10. **Final Adjustments and Masking**

- **Apply Track Mats**: Use the masks created earlier to limit the reflections to only show up inside the glasses frames.
  - For the right reflections, set the track mat to **Right Mask**.
  - For the left reflections, set the track mat to **Left Mask**.
- **Feather and Opacity**: Add feathering to soften the edges of the masks. Adjust the opacity of the reflection layers for a more realistic look, balancing the effect with the natural reflections of the glasses.

### 11. **Finalizing**

- **Preview and Adjust**: Play back your composition to ensure the reflections track correctly and adjust any final settings like feathering, transparency, or mask positions.

By following these steps, you can seamlessly replace the glass in the glasses with any creative effect of your choice. The tutorial uses a colorful LED reflection, but you can swap this with any visual element that fits your project! Happy planar tracking!

## Boris FX Resources

- [Training Series | Boris FX](https://borisfx.com/free-training/mocha-essentials/)
