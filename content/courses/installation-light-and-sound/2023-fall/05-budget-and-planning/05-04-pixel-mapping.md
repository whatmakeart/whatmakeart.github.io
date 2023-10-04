---
title: 05.04 Pixel Mapping
date: 2023-09-22T09:30:00
lastmod: 2023-10-03T19:55:00
---

Pixel mapping creates a 2D or 3D "map" of the locations of LEDs or pixels in space. The map could describe a precise grid of LEDs or it describe an organic 3D shape. In both cases, the map will contain all of the coordinates of the pixels representing their positioning and spacing. Then LED light patterns can be run on the pixels based on the mapping. This separates the "map" from the LED patterns.

- [3D Pixel Mapping from 2 Videos](https://led3dmap.lights0123.com/) - This program by [Ben Schattinger](https://lights0123.com/) ses 2 videos taken at 90 degrees from each other. The LEDS are programed to light up one at a time at a specified rate. Then the computer analyses the videos to create a 3D pixel map of the LEDs. [(Source Code)](https://github.com/lights0123/LED3DMap)

## Blender Python Script to Export Vertex Group Coordinates as CSV file

```Python
import bpy
import csv
import os

# Define the name of the vertex group, set as default group name but change to your needs
vertex_group_name = "Group"

# Get the active object
obj = bpy.context.active_object

# Check if the object is a mesh and has the specified vertex group
if obj.type == 'MESH' and vertex_group_name in obj.vertex_groups:
    # Get the vertex group
    vertex_group = obj.vertex_groups[vertex_group_name]

    # Define the directory where you want to save the CSV file
    output_directory = "/path/to/your/directory"  # Modify this path

    # Ensure the output directory exists, and if not, create it
    os.makedirs(output_directory, exist_ok=True)

    # Find a unique filename by incrementing a number
    base_filename = "vertex_coordinates"
    csv_filename = os.path.join(output_directory, base_filename + ".csv")
    count = 1
    while os.path.exists(csv_filename):
        csv_filename = os.path.join(output_directory, f"{base_filename}_{count}.csv")
        count += 1

    # Create a CSV file for writing
    with open(csv_filename, 'w', newline='') as csvfile:
        csv_writer = csv.writer(csvfile)

        # Write the header row
        csv_writer.writerow(["Vertex Index", "X", "Y", "Z"])

        # Loop through the mesh vertices and export coordinates for vertices in the group
        for vertex in obj.data.vertices:
            # Check if the vertex is in the group
            if vertex_group.weight(vertex.index) > 0:
                # Write vertex index and coordinates to CSV
                csv_writer.writerow([vertex.index, vertex.co.x, vertex.co.y, vertex.co.z])

    print(f"Exported vertex coordinates to {csv_filename}")
else:
    print(f"No mesh object with vertex group '{vertex_group_name}' found.")
```

## Pixel Mapping Online Tools

[Jason Coon's LED Mapper](https://jasoncoon.github.io/led-mapper/) Converts CSV or Coordinate Data to FASTLED or PixelBlaze formated pixel maps
[Click on Image Pixel Mapper](http://app.bhencke.com/pixelmap.html) - Upload an image of your pixels and click on the image to generate a 2D list of pixel coordinates.
