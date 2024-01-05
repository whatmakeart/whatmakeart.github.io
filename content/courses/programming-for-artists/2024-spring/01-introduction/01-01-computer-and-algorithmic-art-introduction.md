---
title: 01.01 Computer and Algorithmic Art
date: 2024-01-19T09:30:00Z
lastmod: 2024-01-05T09:16:21
---

## Intro to Computer and Algorithmic Art

Algorithmic Art predates the invention of the computer and digital technology. The specific geometries and math used in Islamic tiling patterns such as such as [Girih tiles](https://en.wikipedia.org/wiki/Girih_tiles) are are described by Roman Verostko as pre-digital precursors to algorithmic art. [^2] Lillian Schwartz was a pioneer in using computers to create computer generated art. In the late 1960s she worked as a consultant at Bell Laboratories and developed tools and techniques for using computers in film and animation. She is also credited with creating the first digital drawing with a preasure sensitive tablet that was transmitted around the world in real-time. [^lillian]

Schwartz was featured in the documentary, _The Artist and the Computer 1976_.

<div class="video-grid">

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/GRFPV9smRyg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/QCthSns4U4s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</div>

- Sol LeWitt Wall Drawings with instructions Sol LeWitt talked about conceptual art being, "The idea is the machine that makes the art." [^1]
- "Wall Drawing #4: A square divided horizontally and vertically into four equal parts, each with lines in different directions"
  https://www.clevelandart.org/magazine/cleveland-art-may-june-2016/converging-lines

- [Bruce Nauman - _Body Pressure_](http://projects.e-flux.com/do_it/manuals/artists/n/N001/N001A_text.html)

_Quad_, a play by Samuell Beckett, uses algorithmic insturctions for the actors. The play begins, "The players (1, 2, 3, 4) pace the given area, each following his particular course. Area: square. Length of side: 6 paces." As we will see when setting up a "Canvas" in [p5.js](./01-02-p5js-introduction.md), this is very similar to the code `createCanvas(6, 6);` The play continues with listing the parameters for each of the four courses.

|           |                                |
| --------- | ------------------------------ |
| Course 1: | AC, CB, BA, AD, DB, BC, CD, DA |
| Course 3: | BA, AD, DB, BC, CD, DA, AC, CB |
| Course 3: | CD, DA, AC, CB, BA, AD, DB, BC |
| Course 4: | DB, BC, CD, DA, AC, CB, BA, AD |

This is similar to declaring a two dimensional array in [JavaScript](../../../../coding/javascript.md). An array is a series of values saved as data in a program and a 2D array is a series of multiple series of values.

```javascript
// Two dimensional array of Courses from Samuell Beckett's Quad Play
const courses = [
  [AC, CB, BA, AD, DB, BC, CD, DA], // course 1
  [BA, AD, DB, BC, CD, DA, AC, CB], // course 2
  [CD, DA, AC, CB, BA, AD, DB, BC], // course 3
  [DB, BC, CD, DA, AC, CB, BA, AD], // course 4
];
```

Since an algorithim is a set of instructions, much like a recipie, humans can follow the steps and perform the algorthm or program. Although it is possible to have analog or human algorithms, as demonstrated in Beckett's _Quad_, for longer, more complex, and repetative algorithms, the use of a computer and programming is more ideal and allows results that are not possible by analog execution.

<div class="gallery-grid">
<figure>

[![Quad diagram excerpt by Samuell Beckett](./1984-page-291-quad-excerpt-samuell-beckett-collected-shorter-plays.png)](./1984-page-291-quad-excerpt-samuell-beckett-collected-shorter-plays.png)

<figcaption>

Page from Samuell Beckett's _Quad_ Play showing "algorithmic" like instructions and diagrams for the actors [^beckett]

</figcaption>
</figure>

<div class="center-card">
<div class="iframe-16-9-container">
<iframe class="youTubeIframe"width="560" height="315" src="https://www.youtube.com/embed/4ZDRfnICq9M?si=1XR-hgqaTilTnSyL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

</div>

### Chance Operations and Randomness

Artists have used "chance" or random events to create art. Marchell Duchamp dropped strings of known lengths on the ground and then traced their resultant shape profiles to make "creative measureing devices". The composer John Cage used dice rolling and other chance operations to determin musical compositions. Swiss artist, Jean Tinguely, used mechanical chance operations to create unpredictable drawings with his _meta-matic_ drawing machines.

<div class="video-grid">

<div class="iframe-16-9-container">
<iframe class="youTubeIframe"width="560" height="315" src="https://www.youtube.com/embed/ZNGpjXZovgk?si=UnwiXtJ0CDFqQCRn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="iframe-16-9-container">
<iframe class="youTubeIframe"width="560" height="315" src="https://www.youtube.com/embed/gXOIkT1-QWY?si=0r-Z6eA6tJ-Mq8fC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</div>

- [Casey Reas: Software Structures Launched 2004 Restored 2016](https://whitney.org/exhibitions/software-structures)

- [HAROLD COHEN AND AARON—A 40-YEAR COLLABORATION By Chris Garcia | August 23, 2016](https://computerhistory.org/blog/harold-cohen-and-aaron-a-40-year-collaboration/)

- [Algorithmic Art - Wikipedia](https://en.wikipedia.org/wiki/Algorithmic_art)

## Computer Art Video Clips

<iframe width="560" height="315" src="https://www.youtube.com/embed/CIEYlUosKUY?si=dH7uJVXm-vO6oOLT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/_8DMEHxOLQE?si=qgdIoKssGl1Ofodu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/IPczQgCuOOc?si=RzVCIf5RNh9C2TGA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/U1DbaUATNtY?si=N0bw12cyzhuMi-hz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/Cn-U_Dj5UeE?si=dskYdyVuh_Manb9N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[^1]: [Paragraphs on Conceptual Art - Artforum Summer 1967 Vol. 5, No 10](https://www.artforum.com/features/paragraphs-on-conceptual-art-211354/)
[^2]: [Algorithmic Art by Roman Verostko](https://www.verostko.com/algorithm.html)
[^lillian]: [Lillian Schwartz Biography](http://lillian.com/biography/) [Web Archive](https://web.archive.org/web/20230604211831/http://lillian.com/biography/)
[^beckett]: Beckett, Samuel. “Quad.” Play. In Collected Shorter Plays, 289–94. New York: Grove Press, 1984.
