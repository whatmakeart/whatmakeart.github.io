---
title: Photogrammetry with Photocatch
date: 2025-01-21T14:15:56
lastmod: 2025-09-26T17:09:33
tags:
  - 3D-Modeling
  - Photocatch
  - Photogrammetry
  - Tutorial
---

<div class="video-grid">

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/yMqH0GskhgY?rel=0" title="Photogrammetry with Photocatch" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

</div>

- [Calibrate size of 3D Scanned Photogrammetry Mesh in Blender](./blender/calibrate-photogrammetry-scanned-object-scale-blender.md)
- [Photogrammetry with Photocatch](https://youtu.be/yMqH0GskhgY)

<details>

<summary>

### Video Transcript

</summary>

How can you transform a video of an object into a three-dimensional mesh with textures all aligned on the object? Using the app Photocatch you can create 3D models from a series of photos or even just a single video.

Simply open Photocatch, then select video navigate to where the video file is and select it. Photocatch will import the video and then show the frames on the bottom. Here you can choose a frame to be the first frame or the last frame. This is helpful if you have extra information in your video. Perhaps you started recording too early or left the record button on. You can easily trim that. Photocatch also has a frame interval. For turning your videos into three-dimensional meshes you may not need all the frames. Here it is a frame interval of 12. If you change this to every four frames, notice now it's going to use 435 images. Play around with this to see what the best level of frames versus images for your particular object is. Generally more photos is better for photogrammetry, but sometimes when you're taking a video there may be motion blur or out of focus images. I'm going to choose six as a nice medium between 12 and every frame. Then click done.

Photocatch will now extract the images as frames from your video so we can use them in photogrammetry. Tt can be a good idea to click preview but Photocatch goes pretty fast fast so I'm going to go ahead and click Medium. Show Advanced has some options. For example, if you had, for example, if you took your photos from all different angles but didn't do them in order you should click unordered, and in fact photocatch recommends this. And then feature sensitivity you can choose normal or high depending on your model. Photocatch recommends using normal and then if it doesn't work then try High. Photocatch will do its best to mask out the background and keep the object as itself. you can leave this checked and see how it works.

Then click create model. Photocatch now goes through the process of creating your model and making a three-dimensional mesh with textures from a video using photogrammetry. Once Photocatch is done creating your model you'll be presented with a 3D view of the model. You can look around and see the model. You can transform the model if you need to rotate it so certain things are up or not. You can view the preview mesh. You can see the way it is oriented in the world and then transform it this way. So I can rotate it so it's vertical and then translate it up and then translate it over so it is more aligned with the world coordinates that we need. You can crop the mesh. This is helpful if there's lots of extraneous information that you don't need. In this particular case the mesh has come in pretty well.

Once you're happy with your mesh, then you have a few ways that you can save it. Photocatch offers three ways to export. You can export as a universal scene description an obj and a ply. I recommend exporting all three, especially if you're using the free version of Photocatch.When you are exporting an obj it's a good idea to select export original file this will also give you the materials that you need. Click export. Once you've exported your mesh you can open it in a 3D modeling program such as Blender.

To import an obj go to file import wavefront obj. Photo catch puts objs in a folder. Go inside the folder and you'll see the obj and the material. Select the obj and import it. It may come in small. Press X delete. Here is my 3D mesh. Click on material preview and then you can see the object with its materials on there. Then you can go ahead and translate and rotate it to where it is correct in your view. Happy 3D modeling.

</details>
