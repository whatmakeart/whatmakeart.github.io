---
title: Prepare DXF File for Laser Cutting
date: 2023-06-14T13:02:24
lastmod: 2025-09-30T17:53:45
---

- [Illustrator DXF to Epilog Laser Cutter Prep](https://youtu.be/FhIUHIMpJMY)

## Laser Cut File Prep Overview

You need to change the stroke weight of the red strokes in Illustrator. Also you need to change the stroke color and weight of any strokes that you want to etch. You can also draw new strokes to etch while in Illustrator. Etched strokes need to be blue and .5. Make sure you scale the document 100% and have 1mm = 1mm. Re

![Laser Cut Stand in Illustrator](attachments/2021-Laser-Cut-Stand-in-Illustrator.png)

Example of each part of the stand as a separate component at the top level assembly in Fusion 360.

Change the strokes to the correct weight and color in Illustrator. In Illustrator change the weight of the cut paths (cut with red stroke .001 weight and engraving with blue stroke .5 weight)

## Laser Cut DXF File Prep Instructions

<div class="two-column-instructions-grid">

Open Adobe Illustrator

&nbsp;

- Open your test file in Adobe Illustrator
- Adjust the scale in Illustrator or reimport at the correct scale

&nbsp;

- Change the document settings so the units are millimeters and not points or pixels

[![Illustrator Document Settings Units to millimeters](./attachments/2024-02-01-document-setup-ilustrator-millimeters.png)](./attachments/2024-02-01-document-setup-ilustrator-millimeters.png)

- Confirm the scale of the drawing by measuring a known distance
- If you used [boxes.py](https://www.festi.info/boxes.py/) to make your cut file, it has an option to include a 100 mm rectangle for dimension confirmation. An SVG export from [boxes.py](https://www.festi.info/boxes.py/) should show the rectangle as having a 100 mm with if Illustrator's document units are set to millimeters
- If you made the cut file from Fusion 360 or other 3D modeling software, then confirm a known dimension from your design. If you added a kerf adjustment, make sure to take that into account when measuring in Illustrator.

[![Confirm the scale of a known distance or dimension](./attachments/2024-02-01-confirm-known-dimensions-illustrator.png)](./attachments/2024-02-01-confirm-known-dimensions-illustrator.png)

- Adjust the Artboard to the correct size to contain your drawing
- Think of the Artboard as your raw material, it should not be larger than the material you will cut on the laser cutter
- If the Artboard is real world size, and your drawing does not fit on the Artboard then something is wrong and you should double check your measurements

![Illustrator Artboard Settings](./attachments/artboard-settings.png)

- Make sure all paths that will be cut through are individually "closed"
- To close a path, select all of the segments and "join" them by pressing Command J or Control J
- Then select all paths that will be cut through
- Set the Fill to transparent
- Change the stroke color to Red
- Change stroke width to .001 points
- Any red stroke with a width of .001 will be cut all the way through.

![Change Stroke Color](./attachments/red-stroke.png)

- Select the Path
- Set the Fill to transparent
- Change the stroke color to Blue
- Change stroke width to .5 points
- Any blue stroke with a width of .5 will be etched.

![Change Stroke Color to Blue](./attachments/blue-stroke.png)

- Save your file
- Upload to Google Drive for later access
- Save your file on a USB Drive if available for redundancy

&nbsp;

Bring USB drive and / or Adobe Creative Cloud Password to think[box]. You need access to the test file from the USB drive or cloud storage.

&nbsp;

</div>

<div class="video-grid">

<div class="video-card">

#### Prepare Lasercut DXF file in Illustrator

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/FhIUHIMpJMY?si=hUK-0PKmJ6ppLuDR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

<div class="video-card">

#### Prepare Lasercut DXF file in Illustrator from Boxes.py

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/0M8M59Ymkbw?si=hUK-0PKmJ6ppLuDR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

</div>
