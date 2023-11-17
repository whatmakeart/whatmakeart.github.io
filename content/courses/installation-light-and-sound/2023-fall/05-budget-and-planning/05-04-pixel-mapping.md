---
title: 05.04 Pixel Mapping
date: 2023-09-22T09:30:00
lastmod: 2023-11-17T05:28:35
---

Pixel mapping creates a 2D or 3D "map" of the locations of LEDs or pixels in space. The map could describe a precise grid of LEDs or it describe an organic 3D shape. In both cases, the map will contain all of the coordinates of the pixels representing their positioning and spacing. Then LED light patterns can be run on the pixels based on the mapping. This separates the "map" from the LED patterns.

## Pixel Mapping Online Tools

- [Jason Coon's LED Mapper](https://jasoncoon.github.io/led-mapper/) Converts CSV or Coordinate Data to FastLED or PixelBlaze formatted pixel maps
- [Click on Image Pixel Mapper](http://app.bhencke.com/pixelmap.html) - Upload an image of your pixels and click on the image to generate a 2D list of pixel coordinates.
- [3D Pixel Mapping from 2 Videos](https://led3dmap.lights0123.com/) - This program by [Ben Schattinger](https://lights0123.com/) ses 2 videos taken at 90 degrees from each other. The LEDs are programed to light up one at a time at a specified rate. Then the computer analyses the videos to create a 3D pixel map of the LEDs. [(Source Code)](https://github.com/lights0123/LED3DMap)
- [FastLed Mapping](https://macetech.github.io/FastLED-XY-Map-Generator/) - This code by [Garrett Mace](https://macetech.com/) creates an X Y matrix for [FastLED](https://fastled.io/) that can have gaps in the LED matrix
- [Using ESP Cam](https://m.youtube.com/watch?v=Ueim2Ko8VWo)

## Blender Python Script to Export Vertex Group Coordinates as CSV file

If you have a 3D model of the space and the locations of your LEDs as vertices, you can export the coordinates of the LED pixels from [Blender](../../../../3d-modeling/blender/blender.md). Then these coordinates can be used to make a 3D LED pixel map.

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

````Python
import bpy
import csv

def export_mesh_origin_coordinates():
  """Exports the coordinates of the mesh origin of all selected objects in Blender to a CSV file called `mesh_origin_coordinates.csv`, along with the name of the mesh."""

  # Get all selected objects.
  selected_object = bpy.context.selected_objects[0]

  # Create a CSV file to store the mesh origin coordinates.
  with open("/path/to/your/directory/mesh_origin_coordinates.csv", "w", newline='') as csvfile:
    writer = csv.writer(csvfile)

    # Write the header row.
    writer.writerow(["Mesh Name", "X", "Y", "Z"])

    for selected_object in selected_objects:

      # Get the mesh origin coordinates.
      mesh_origin_coordinates = selected_object.location

      # Get the name of the mesh.
      mesh_name = selected_object.name

      # Check if the selected object is a mesh.
      if selected_object.type != "MESH":
        print("The selected object {} is not a mesh.".format(mesh_name))
        continue

      # Write the mesh origin coordinates and the mesh name to the CSV file.
      writer.writerow([mesh_name, mesh_origin_coordinates[0], mesh_origin_coordinates[1], mesh_origin_coordinates[2]])

# Export the mesh origin coordinates.
export_mesh_origin_coordinates()
    ```
````

<div class="video-grid">

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/TvlpIojusBE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</div>
