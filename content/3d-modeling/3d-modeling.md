---
title: 3D Modeling
date: 2021-04-23T11:47:42
lastmod: 2025-12-23T17:58:06-04:00
tasks:
  - TODO add more detail about modeling and design intent
  - TODO add concept of quick vs detailed
---

What is a model? What is a 3D model? What is the difference between an analog and a digital 3D model? How does 2D [technical sketching](../drawing/technical-sketching.md) relate to 3D modeling?

A model is a simplified representation of reality. The standard model in Physics or describing earth's gravity as 9.8 m/s2 (32 ft/s2) are examples of models of reality. A two-dimensional drawing of how a door swings on an architectural floor plan is another example of a simplified model representing reality.

## Analog vs Digital

Physical or analog, and virtual or digital, 3D modeling create representations of three dimensional objects. Analog 3D modeling can use a variety of materials including clay, paper, cardboard, paper mache, foam board, metal and any other [making materials](../making/materials-for-making.md). Larger physical 3D models may use an armature or support structure. The goal is to make an accurate representation of the forms and structure of the object and learn how these forms relate to one another. Often, physical 3D models will be prototypes of things that don't exist yet. For example, when designing a new handle for a product, a large number of variations of the handle could be physically made and then held by prospective user's to determine which handel design and shape has the most promise.

Digital 3D modeling uses software tools to create virtual representations of objects. The software describes the location, shape, size, surface, and physical qualities of the objects. 3D modeling software can create models in many different ways. Software can mimic the manipulating of physical materials like clay to create a model through a digital sculpting process. It can use parameters and variables to create models through a generative, parametric process. Software can use exact dimensions and specifications from technical drawings to create precise machinable surfaces. [Photogrammetry software](photogrammetry-software.md) can stitch photos of an object taken from multiple angles together into a 3D model with applied visual textures. 3D scanners with built in gyroscopes and calibration tools can capture accurate information to create detailed 3D models from objects. Neural Radiance Fields (NeRFs) use deep learning to create 3d models from just a few 2D images or sometimes even a single 2D image. Generative AI can synthesize 3D models from text prompts and 2d images by estimating a depth map from the image.

### 3D Modeling Software

[Software used for 3D-Modeling](3d-modeling-software.md) has multiple different types depending on the intended use of the 3D Model. Architects would use software that specializes in larger objects, photorealistic renderings and precise real world dimensions such as AutoCAD or SketchUp. A machinist or industrial designer would use more traditional CAD (Computer Aided Design) software such as [Fusion 360](fusion-360/fusion-360.md) that features precision, [Parametric-Modeling](parametric-modeling.md), and structural simulations. Animators may prefer software with robust animation timelines and tools that aid in character rigging and animation special effects, such as [Blender](blender/blender.md) or [Maya](maya/maya.md). Visual effects artists may use Houdini or Cinema 4D.

## Types of 3D Models

3D models generally create a representation of a volume of an object, often referred to as a solid, or a representation of the surfaces of an object referred to as a shell or boundary. Computer Aided Design (CAD) 3D modeling usually uses the solid method since it creates precise mathematical models of objects that can be produced in the real world. Visual 3D modeling applications such as video games, animation, or visual effects generally use the shell type modeling method since these applications are more concerned with the outward appearance of the model rather than the exact physical structure.

The same looking object could be modeled with solid modeling techniques or shell modeling techniques. The solid object would be ready for digital fabrication such as 3D printing. For a shell object to be usable for 3D printing is must be "watertight" or manifold. This means that all parts of the shell of the object need to be aligned with no gaps. Otherwise the shell is just a conceptual, piece of digital wrapping paper that might look really cool in a digital render but won't work for a 3D print.

Non-uniform Rational Basis Spline (NURBS) use basis splines (B-splines) to describe curves and surfaces with math and control points. This is similar but different to creating vector art with Bezier Curves in a vector drawing program like Adobe Illustrator or Inkscape.

### Approaching 3D Modeling

The whole point of 3D modeling is the design process how do we go from something that's in our head to actually make it into our model. We're less interested in mastering all the intricacies of a particular piece of software then we are about having good ideas and sound processes We want to have good concepts and things that are thought out in ideated upon and iterated on

We will start with analog tools and use those processes to refine our [sketches](../drawing/technical-sketching.md) before spending time in 3D models We want to quickly be able to output something and then test it

The testing of our ideas and concepts whether aesthetic or physical is important. We want to not have precious ideas and thoughts that good great if not let's do something else.

Do tests and then evaluate and then do again.

## Essential 3D Modeling Concepts

- Orbit - how to move a virtual camera or view around a 3D model in space on a computer screen
- Pan
- Zoom
- x y z axis
- mesh
- polygon
- nurbs

### Physical Output from Digital 3D Models

Digital 3D models are great for visualization, ideation, experimenting with forms, simulation, VR, AR, video games, animation, and for archiving but are still not physical objects. [Laser Cutting](../digital-fabrication/laser-cutting/laser-cutting.md), [CNC](../digital-fabrication/cnc/cnc-basics.md) machining, [3D Printing](../digital-fabrication/3d-printing/3d-printing.md), vinyl cutting, and water jet cutting are [digital fabrication](../digital-fabrication/digital-fabrication.md) processes that create physical outputs and objects from digital 3D models.

## AI

AI and the metaverse needs 3D Models. This article, _[The Pathway to the Metaverse Begins With 3D Modeling](https://www.entrepreneur.com/article/425643)_, in _The Entrepreneur_ examines the upcoming metaverse and how 3D modeled assets will be essential for the metaverse to work. 3D modelers will need to create the 3D digital objects for now, but soon [AI-Artificial-Intelligence](../coding/ai-artificial-intelligence.md) will likely play a bigger role in the automatic creation of 3D digital objects. Currently AI is able to produce realistic 2D images and make crude 3D models from photographs. This capability will exponentially grow in the future.

In 2022 Google demonstrated DreamFusion that created 3D models from text prompts. OpenAI also demonstrated Shape-E in 2023.
[VFusion3D](https://junlinhan.github.io/projects/vfusion3d.html), released in July 2024 can generate 3D meshes from images in seconds.

<div class="video-grid">

<figure>
<a href="https://whatmakeart.com/3d-modeling/attachments/2022-09-29-google-dreamfusion-wipe_opposite_6x4_smoothstep.mp4">
<video width="100%" height="auto" autoplay loop>
  <source src="https://whatmakeart.com/3d-modeling/attachments/2022-09-29-google-dreamfusion-wipe_opposite_6x4_smoothstep.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
 </a>
<figcaption>

Google's DreamFusion in 2022 [^dream-fusion]

</figcaption>
</figure>

<figure>
<a href="https://whatmakeart.com/3d-modeling/attachments/2023-05-03-openai-shape-e-demo-models.mp4">
<video width="100%" height="auto" autoplay loop>
  <source src="https://whatmakeart.com/3d-modeling/attachments/2023-05-03-openai-shape-e-demo-models.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
 </a>
<figcaption>

OpenAI's Shape-E in 2023 [^shape-e]. [MIT License](https://github.com/openai/shap-e/blob/main/LICENSE)

</figcaption>
</figure>

</div>

- [OpenAI Point-E](https://arxiv.org/pdf/2212.08751.pdf)

## References

[^dream-fusion]: [Google's DreamFusion](https://dreamfusion3d.github.io/)
[^shape-e]: [OpenAI's Shape-E](https://github.com/openai/shap-e)
