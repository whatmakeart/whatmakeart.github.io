---
title: 3D Modeling
---

What is a model? What is a 3D model? What is the difference between an analog and a digital 3D model? How does 2D sketching relate to 3D modeling?

## AI and the Metaverse

This article, _[The Pathway to the Metaverse Begins With 3D Modeling](https://www.entrepreneur.com/article/425643)_, in _The Entrepreneur_ examines the upcoming metaverse and how 3D modeled assets will be essential for the metaverse to work. 3D modelers will need to create the 3D digital objects for now, but soon [AI-Artificial-Intelligence](../ai-artificial-intelligence.md) will likely play a bigger role in the automatic creation of 3D digital objects. Currently AI is able to produce realistic 2D images and make crude 3D models from photographs. This capability will exponentially grow in the future.

## 3D Modeling Software

Software used for [3D-Modeling](3d-modeling-software.md) has multiple different types depending on the intended use of the 3D Model. Architects would use software that specializes in larger objects, photorealistic renderings and precise real world dimensions. A machinist or industrial designer would use more traditional [CAD](cad.md) software that features precision, [Parametric-Modeling](./parametric-modeling.md), and structural simulations. Animators would prefer software with animation timelines and tools that aid in character rigging and animation special effects.

### Architecture 3D Modeling Software

- [SketchUp](sketchup.md)
- [AutoCAD](autocad.md)
- [Revit](revit.md)

### Machinist and Maker 3D Modeling Software

- [Fusion-360](fusion-360.md)
- [Rhino](rhino.md)
- [Blender](blender.md)

### Animation 3 Modeling Software

[Maya](maya.md) [Blender](blender.md) [3D Max](3d-max.md)

### Approaching 3D software

The whole point of 3D modeling is the design process how do we go from something that's in our head to actually make it into our model. We're less interested in mastering all the intricacies of a particular piece of software then we are about having good ideas and sound processes We want to have good concepts and things that are thought out in ideated upon and iterated on

We will start with analog tools and use those processes to refine our sketches before spending time in 3D models We want to quickly be able to output something and then test it

The testing of our ideas and concepts whether aesthetic or physical is important. We want to not have precious ideas and thoughts that good great if not let's do something else.

We will do tests and then evaluate and then do again.

### Physical Output from Digital 3D Models

Digital 3D models are great for visualization, simulation, VR, video games, and for archiving but are still not physical objects. [Laser Cutting](../laser-cutting.md), [CNC](../cnc.md) machining, [3D Printing](../3D-Printing.md), vinyl cutting, and [Water Jet Cutting](../Water-Jet-Cutting.md) are fabrication processes that create physical outputs and objects from digital 3D models.

<script type="text/javascript">
    // allows the anchor links to work while <base> tag is in use in the <head>
    $(document).ready(function () {
        var pathname = window.location.href.split("#")[0];
        $('a[href^="#"]').each(function () {
            var $this = $(this),
                link = $this.attr("href");
            $this.attr("href", pathname + link);
        });
    });
</script>

<script type="text/javascript">

    var style = document.createElement("style");
    function addPrintStyles() {

        const styleSheet = document.createElement("style");
        styleSheet.innerText = `
            @media print {
                h1,
                h2,
                h3,
                h4 {
                    break-after: avoid;
                }
                img {
                    page-break-inside: avoid;
                    break-inside: avoid
                }
                .video-grid,
                .video-wrapper,
                .banner {
                    display: block;
                    height: initial;
                    page-break-inside: avoid;
                    break-inside: avoid
                }
                .video-grid {
                    columns: 200px 3;
                }
                .youtube-thumbnail {
                    display: block !important;
                    position: absolute;
                    top: 0;
                    z-index: 10;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                #jimmyAdmin {
                    display: none;
                }
            }
            `;
        document.head.appendChild(styleSheet); // must append before you can access sheet property
        var sheet = style.styleSheet;

        console.log(sheet instanceof CSSStyleSheet);
    }

    function YouTubeGetID(url) {
        url = url.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        return undefined !== url[2] ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
    }

    document.addEventListener("DOMContentLoaded", () => {
        addPrintStyles();
        // addJimmyStyles();

        let selection = document.getElementsByTagName('iframe');
        let iframes = Array.prototype.slice.call(selection);

        iframes.forEach(function (iframe) {
            if (iframe.src.includes("youtube")) {

                const idYoutube = YouTubeGetID(iframe.getAttribute('src'));
                //console.log(idYoutube);
                const imgElement = document.createElement('img');
                imgElement.src = `https://i1.ytimg.com/vi/${idYoutube}/0.jpg`;
                imgElement.className = 'youtube-thumbnail';
                imgElement.style = "display:none;"
                iframe.insertAdjacentElement('afterend', imgElement);
                iframe.srcdoc = `
            <style>
* {
    padding: 0;
    margin: 0;
    overflow: hidden;
}
html,
body {
    height: 100%;
}
img {
    position: absolute;
        width: 100%;
        top: 0;
        bottom: 0;
        margin: auto
}
.playbutton {
        height: 80px;
        text-align: center;
        font:30px/90px sans-serif;
        color: white;
        text-shadow: 0 0 0.7em black;
        position: absolute;
        width: 100%;
        top: 0;
        bottom: 0;
        margin: auto;
    }
</style>

<a href=https://www.youtube.com/embed/${idYoutube}?rel=0&autoplay=1> <img src=https://img.youtube.com/vi/${idYoutube}/hqdefault.jpg alt="YouTube thumbnail"> <span class="playbutton">&#x25BA;</span></a>

            `;
            }
        });
    });

</script>
</body>

</head>

<!--
            -----

    <div class="video-wrapper">
            <h2></h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/?rel=0" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
        </div>


            -->

<body>
    <nav class="tutorial-nav-bar" id="top">
        <ul class="tutorial-nav-menu">
            <li class="tutorial-nav-item"><a class="link-hover" href="#technical-sketching">Technical Sketching</a></li>
            <li class="tutorial-nav-item"><a href="#fusion360">Fusion 360</a>
            </li>
            <li class="tutorial-nav-item"><a href="#week9">Laser Cut
                    Tutorials</a></li>
            <li class="tutorial-nav-item"><a href="#3d-print-tutorials">3D Print
                    Tutorials</a></li>
            <li class="tutorial-nav-item"><a href="#cnc-tutorials">CNC
                    Tutorials</a></li>
            <li class="tutorial-nav-item"><a href="#maya">Maya Tutorials</a>
            </li>
            <li class="tutorial-nav-item"><a href="#video-tutorials">Video
                    Tutorials</a></li>
            <li class="tutorial-nav-item"><a href="#photo-doucumentation-tutorials">Photo
                    Documentation</a></li>

        </ul>
    </nav>
    <h1 class="banner" id="portfolio-website-tutorials">Portfolio Website
        Tutorials</h1>
    <div class="video-grid">

        <div class="video-wrapper">
            <h2>Add New Images to Website</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/MpEIUE9O73k?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>One Page Portfolio Website</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/fqVYMRMsqLs?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>GitHub Student Developer Pack</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/PZTLD7LvbWw?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div><!-- End .video-grid-->
    <h1 class="banner" id="video-tutorials">Video Tutorials</h1>
    <div class="video-grid">

        <div class="video-wrapper">
            <h2>Ultra Key Premiere Pro</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/gkZMbMUo-f0?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Run Fast Effect</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/TDhRkUcCHZc?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Fire Finger Effect</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/C8W0OD6X4UM?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Video Double Effect</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/PT1V1t61oT0?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Teleport Effect</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/C4lfW2s7U7c?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Flying Effect</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/Ow3H6kZ8lR0?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Magic Wand Effect</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/hKK5fOqIFsE?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div><!-- end .video-grid-->
    <h2 class="banner-small" id="after-effects-tutorials">After Effects
        Tutorials</h2>
    <div class="video-grid">


        <div class="video-wrapper">
            <h2>Roto Brush Effect</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/ab0FEbKneks?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Fix Bad Green Screen Footage</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/hQbYGQ97aMQ?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Fast Green Screen - After Effects</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/2b796PpS9y8?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Background Light Wrap - After Effects</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/P_gVhMT1doM?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>


    </div><!-- end .video-grid-->


    <h1 class="banner" id="maya">Maya Tutorials</h1>


    <nav class="tutorial-nav-bar" id="maya-nav">
        <ul class="tutorial-nav-menu">
            <li class="tutorial-nav-item"><a href="#maya-general">Maya
                    General</a></li>
            <li class="tutorial-nav-item"><a href="#maya-modeling">Maya
                    Modeling</a></li>
            <li class="tutorial-nav-item"><a href="#maya-texturing">Maya
                    Texturing</a></li>
            <li class="tutorial-nav-item"><a href="#maya-animating">Maya
                    Animating</a></li>
            <li class="tutorial-nav-item"><a href="#maya-rendering">Maya
                    Rendering</a></li>
            <li class="tutorial-nav-item"><a href="#animation-video-editing">Animation Video Editing</a>
            </li>
            <li class="tutorial-nav-item"><a href="#top">&#8593 Back to Top
                    &#8593</a></li>
        </ul>
    </nav>

    <h2 class="banner-small" id="maya-general">Maya General</h2>
    <div class="video-grid">



        <div class="video-wrapper">
            <h2>Maya User Interface Introduction</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/-SpVNiRqeKY?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Import vs Reference Assets</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/WDpYKvhSOYI?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Insert Reference Image</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/tXJFJa-nsAA?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Archive Maya Scene</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/gic-kMWKjNI?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

    </div><!-- end .video-grid-->

    <h2 class="banner-small" id="maya-modeling">Maya Modeling</h2>
    <div class="video-grid">

        <div class="video-wrapper">
            <h2>Maya Polygon Modeling Tools</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/eBEitxaRYQs?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Delete History and Freeze Transformations</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/1SXvWTiMkjs?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Make Hole in Cube</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/EIKiJUmUH7A?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Polygon Modeling Exercise</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/lLItO9mBwxM?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>


        <div class="video-wrapper">
            <h2>Make a Window</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/wdxEtr3bLT4?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="video-wrapper">
            <h2>Model a Teddy Bear</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/2hq1F8gkn4A?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Model Soccer Ball</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/GcDalspwhlc?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Model Golf Ball</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/2wizG1Dsm8w?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Model a Volley Ball</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/E37FC_Uu0Vg?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Model a Tennis Ball</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/IfSis4ns8SY?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

    </div><!-- end .video-grid-->

    <h2 class="banner-small" id="maya-texturing">Maya Texturing</h2>
    <div class="video-grid">

        <div class="video-wrapper">
            <h2>UV Unwrap Auto Seams</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/8-TMjuvzZEU?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Export Substance Painter Textures</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/sCKc_6nTRPM?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Basic UV Mapping</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/X0KGwPadukE?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>UV Map a Cube</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/BFf4L5vDR84?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>


        <div class="video-wrapper">
            <h2>Create Seamless Textures</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/PJ7L4S5ylqg?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>3D Paint Tool</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/JIOns8Tkmhs?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Paint 3D Object</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/0JY8UA75qjI?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

    </div><!-- end .video-grid-->

    <h2 class="banner-small" id="maya-animating">Maya Animating</h2>
    <div class="video-grid">

        <div class="video-wrapper">
            <h2>Time Slider Settings</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/SYuaAMHzY_8?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="video-wrapper">
            <h2>Sphere Ball Rig</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/3uYyw_q7L3o?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Quadball Rig</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/zgNk7WGKV30?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Custom Arrow Rig Controller</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/CtsTcsBHGdY?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Turn Off Child Selection</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/HuGrXTDwP7c?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>



        <div class="video-wrapper">
            <h2>Ball Bounce Animatinon</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/xWDiuV8-PZQ?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Ball Bounce Physics</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/v7qQTfDQ3Ac?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

    </div><!-- end .video-grid-->

    <h2 class="banner-small" id="maya-rendering">Maya Rendering</h2>
    <div class="video-grid">

        <div class="video-wrapper">
            <h2>Three Point Lighting for Rendering</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/1nYSVw6-GxA?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Add Render Camera</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/VfqYe8O6KlM?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Render Image Sequence</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/vxvIUBeTkL0?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="video-wrapper">
            <h2>Multiple Renderable Cameras</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/g0btNU7YPUo?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

    </div><!-- end .video-grid-->

    <h2 class="banner-small" id="animation-video-editing">Animation Video
        Editing</h2>
    <div class="video-grid">
        <div class="video-wrapper">
            <h2>Import Image Sequence Premiere</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/X7w0xOprNDk?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="video-wrapper">
            <h2>Set Up Premiere Video Editing Project</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/zf8IDYvvUkY?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Add Sound Effects</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/Ds2QJryBf84?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
    </div><!-- end .video-grid-->

    <!-- ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| -->


    <h1 class="banner" id="cnc-tutorials">CNC Tutorials</h1>
    <nav class="tutorial-nav-bar" id="cnc-tutorials-nav">
        <ul class="tutorial-nav-menu">
            <li class="tutorial-nav-item"><a href="#top">&#8593 Back to Top
                    &#8593</a></li>
        </ul>
    </nav>
    <div class="video-grid">
        <div class="video-wrapper">
            <h2>Scale Cardboard Model to Plywood Thickness </h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/j-KeJDNf9HQ
                    ?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Laser Cutting vs CNC Router </h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/oYxp6FXG27I?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Simple CNC Joints </h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/O5IR9pr9vdo?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Invisible Dogbone Fillets</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/fjrEmJeM-qw?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Create ShopBot Tool Fusion</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/M9MQzYrLhGQ?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2> Creat ShopBot Toolpaths in Fusion</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/_G-0i8BFEFs?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>CNC Hex Stool</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/9utpuieg5lI?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>CNC End Table</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/GzknioA34F8?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>CNC Two Level Table</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/I6FEMdtcrpI
                    ?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>CNC Plywood Chair</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/GqXQ8TdzYRE?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

    </div><!-- end .video-grid-->

    <!-- ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| -->


    <h1 class="banner" id="3d-print-tutorials">3D Printing Tutorials</h1>
    <nav class="tutorial-nav-bar" id="3d-printing-nav">
        <ul class="tutorial-nav-menu">
            <li class="tutorial-nav-item"><a href="#top">&#8593 Back to Top
                    &#8593</a></li>
        </ul>
    </nav>
    <div class="video-grid">

        <div class="video-wrapper">
            <h2>Export STL from Fusion 360</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/I-ltiZdUFOA?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Print in Place Pin Hinge</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/w1o48laHAos?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Print in Place Ball Socket Hinge</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/9P1PPWP4uZk?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>3D Print Star Earrings</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/TkMQeYTz0wo?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Adjustable Angle Bracket for Laser Cut Plywood</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/64nG3t-3Log?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>90 Degree Corner Bracket</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/lAX7XAcrvL4?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Orbit in Cura</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/LCW-KWKs2Gs?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Any Size Lego Brick with Parametric Modeling</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/Zjhpo0Docdc?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>1x2x4 Lego Brick</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/42VLAXterTg?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>1x1 Lego Brick</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/zIgLweqF2X8?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

    </div><!-- end .video-grid-->



    <!-- ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| -->


    <h1 class="banner" id="week3">Laser Cutting Tutorials</h1>
    <nav class="tutorial-nav-bar" id="laser-cutting-nav">
        <ul class="tutorial-nav-menu">
            <li class="tutorial-nav-item"><a href="#top">&#8593 Back to Top
                    &#8593</a></li>
        </ul>
    </nav>
    <div class="video-grid">
        <div class="video-wrapper">
            <h2>Cut Cardboard Cleanly</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/Tm7xTiLl4Hw?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Laser Cut Finger Joints</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/ZrcqauNvt0M?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="video-wrapper">
            <h2>Captive Nut Joints</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/57OT_SIW96U?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="video-wrapper">
            <h2>T-Slot Joints with Fingers</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/UK8bsVQy4s8?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="video-wrapper">
            <h2>Pinned Finger Joints</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/2r7NKS-3Wao?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Laser Cut Living Hinge Test Swatches</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/QvcpBnxsQws?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Create Laser Cutter Tool with Specific Kerf</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/-B6DXF9aE5s?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Download and Install DXF Post Process for Fusion 360</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/CBu6vl6Bqos?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="video-wrapper">
            <h2>Model Laser Cut Cell Phone Stand</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/7RAdmbOudoo?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Select Inner and Outer Loop Toolpaths</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/CrJwnp1NKeA?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Living Hinge Tool Path Export for Laser Cutting</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/HjXnGby1H_A?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Model a Living Hinge Bend for Laser Cutting</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/nt-44j15xeI?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Change Plywood Thickness Fusion 360</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/a7HOiBC_81s?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Make a Manufacture Model Copy of Your Design</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/bhVPR4CUOUk?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Lay Parts Flat with Arrange for Laser Cutting</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/jeQPJHHwVN4?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Export DXF Toolpath with Kerf Compensation</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/6JFHMV7A9TU?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div><!-- end .video-grid-->

    <!-- ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| -->


    <h1 class="banner" id="fusion360">Fusion 360</h1>
    <nav class="tutorial-nav-bar" id="fusion360-nav">
        <ul class="tutorial-nav-menu">
            <li class="tutorial-nav-item"><a href="#fusion360-general">Fusion
                    360 General</a></li>
            <li class="tutorial-nav-item"><a href="#fusion360-sketching">Sketching</a></li>
            <li class="tutorial-nav-item"><a href="#fusion360-modeling">Fusion
                    360 Modeling</a></li>
            <li class="tutorial-nav-item"><a href="#fusion360-form-workspace">Form Workspace</a></li>
            <li class="tutorial-nav-item"><a href="#fusion360-rendering">Rendering</a></li>
            <li class="tutorial-nav-item"><a href="#top">&#8593 Back to Top
                    &#8593</a></li>
        </ul>
    </nav>
    <h2 class="banner-small" id="fusion360-general">Fusion 360 General</h2>
    <div class="video-grid">

        <div class="video-wrapper">
            <h2>Fusion 360 User Interface</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/YjaxBbTY3kc?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Fusion 360 Rule #1</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/ZYXSJ6EQ9S4?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Fix Model Z Axis Orientation</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/xHsBKSrwHSg?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="video-wrapper">
            <h2>Fix Nested Components</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/WhcE-wXBFPc?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Create Components from Bodies</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/vIuCfiWs_QQ?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Add Joints to Hinged Door Model</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/zXHn7O6g-IE?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>How to Split a Body into Two</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/d4iPXS8g9ms?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Fix Timeline Errors in Fusion 360</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/F3673fmEymo?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

    </div><!-- end .video-grid -->

    <h2 class="banner-small" id="fusion360-sketching">Sketching</h2>
    <div class="video-grid">
        <div class="video-wrapper">
            <h2>Fusion 360 Sketch Constraints </h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/vNdBkiO8Nfc?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Fusion 360 Fully Defined Sketch</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/9k7nsXpbZ5A?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Set User Parameters</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/H6W-Og4YyZ8?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Add Parameters to Existing Model</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/sBEHI-N4DAY?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Add Sketch Reference to Fusion 360</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/-3SMfrnWMTE?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Import SVG or DXF File from Illustrator into Fusion 360</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/aMBnke14Wgg?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Move SVG in Fusion Sketch</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/PX9jWmmGTfo?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Fully Define Splines in Fusion 360 Sketch</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/ynBl9XJesDs?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Pattern Along Path or Spline</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/9xit7JRPQ0A?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>


    </div><!-- end .video-grid-->

    <h2 class="banner-small" id="fusion360-modeling">Fusion 360 Modeling</h2>
    <div class="video-grid">


        <div class="video-wrapper">
            <h2>Fusion 360 3D Modeling Exercise</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/arTAFuBS-qI?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Sweep Tool to Make Curved Padlock Shackle</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/8CNllmIHQN0?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Model USB Plug from Third Angle Projection</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/VLx9AsbZ8R0?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="video-wrapper">
            <h2>Model a Toy Wooden Block</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/OJx09e5SrEw?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="video-wrapper">
            <h2>Model a Drinking Glass</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/2agSzLpN8Z0?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="video-wrapper">
            <h2>Model a Binder Clip</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/MLphWafTfWY?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Knurled Texture Patterned on Curved Surface</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/xHas0R5-6uc?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Perfect Polygons with Constraints</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/Gpplnrtf3UE?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Cut Clear Window in Hollow Objects</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/npRZdueFu8M?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Model Buttons with Curved Tops</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/aIH8ccLzAi4?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Soft Padded Interior Box</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/jvBfrFdsiV4?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

    </div><!-- end .video-grid-->

    <div class="video-grid">

    </div><!-- end .video-grid-->

    <h2 class="banner-small" id="fusion360-form-workspace">Form Workspace</h2>
    <div class="video-grid">
        <div class="video-wrapper">
            <h2>Intro to Form Workspace</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/8vGrRR_TLEg?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Model a Penguin Example</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/X77jad1NWzc?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Switch Between Box and Smooth Modes</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/B--0CElGp7s?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>How to Split a Form</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/jNAzRU-Dbyg?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>How to Insert an Edge</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/dVTDrUhsN3Y?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>How to Extrude Faces</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/3YS1EX0rT0Y?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Make Hole in T-Spline Form</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/3vat_r_MZ3k?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Freeze / Unfreeze T-Spline Form</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/4gbuQ8cRA3I?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Crease / Uncrease Edges</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/_ijhpIGns-A?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

    </div><!-- end .video-grid-->
    <h2 class="banner-small" id="fusion360-rendering">Rendering</h2>
    <div class="video-grid">


        <div class="video-wrapper">
            <h2>9. Add Custom HDRI Background to Fusion 360 Render</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/MmJL4zjfmic?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="video-wrapper">
            <h2>Rendering Aspect Ratio</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/NLr1FG27BGs?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Custom Textures and Bump Maps</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/2-k1KDkzIqU?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

    </div><!-- end .video-grid-->

    <h1 class="banner" id="technical-sketching">Technical Sketching</h1>
    <nav class="tutorial-nav-bar" id="technical-sketching-nav">
        <ul class="tutorial-nav-menu">
            <li class="tutorial-nav-item"><a href="#top">&#8593 Back to Top
                    &#8593</a></li>
        </ul>
    </nav>
    <div class="video-grid">
        <div class="video-wrapper">
            <h2>Supplies Needed for Technical Drawing</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/QaTlzXEHu4g?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>How to Draw Straight Lines</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/UUQa2CtzIwE?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="video-wrapper">
            <h2>Draw Isometric Cube Freehand
            </h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/8FkcqdCmT1U?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="video-wrapper">
            <h2>Draw Isometric Circle Freehand
            </h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/twj5luXIC_c?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="video-wrapper">
            <h2>Draw Isometric Cube with a
                T-Square</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/7t4ycR3fXJ4?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="video-wrapper">
            <h2>Draw Isometric Circle with a
                Compass</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/EaTwlLaMYao?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="video-wrapper">
            <h2>How to Use Digital Calipers
            </h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/oOZjbbe6YZk?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="video-wrapper">
            <h2>Third Angle Projection Freehand
            </h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/0SdWqEYKYrI?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="video-wrapper">
            <h2>More Complex Third Angle Projection</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/QTMfdxI5QYk?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class="video-wrapper">
            <h2>Third Angle Projection USB Plug</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/2xS3AzFV7gs?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Third Angle Projection with a T-Square</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/jfrTuoI6hBQ?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>


    </div><!-- end .video-grid -->

    <!-- ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
         |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| -->

    <h1 class="banner" id="photo-doucumentation-tutorials">Photo Documentation
    </h1>
    <nav class="tutorial-nav-bar" id="photo-documentation-nav">
        <ul class="tutorial-nav-menu">
            <li class="tutorial-nav-item"><a href="#top">&#8593 Back to Top
                    &#8593</a></li>
        </ul>
    </nav>
    <div class="video-grid">
        <div class="video-wrapper">

            <h2>Document Art with Cellphone</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/Cq_Cx_5Zhks?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Open Any Image in Camera Raw</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/ftMICesJwGc?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Quick White Balance in Photoshop</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/m0yZEWUSahk?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

        <div class="video-wrapper">
            <h2>Camera Raw Tutorial</h2>
            <div class="youtube-box">
                <iframe width="560" height="315" class="youtube-iframe" src="https://www.youtube.com/embed/11jwSwUu2WI?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

    </div><!-- end .video-grid -->



    </html>
