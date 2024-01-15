---
title: 01.04 p5.js Introduction
date: 2024-01-19T09:30:00Z
lastmod: 2024-01-15T06:04:28
---

## What is p5.js?

> p5.js is a JavaScript library for creative coding, with a focus on making coding accessible and inclusive for artists, designers, educators, beginners, and anyone else! p5.js is free and open-source because we believe software, and the tools to learn it, should be accessible to everyone.
>
> Using the metaphor of a sketch, p5.js has a full set of drawing functionality. However, you’re not limited to your drawing canvas. You can think of your whole browser page as your sketch, including HTML5 objects for text, input, video, webcam, and sound.
>
> _Description from [p5js.org](https://p5js.org/)_

### What is JavaScript?

[JavaScript](../../../../coding/javascript.md) is a programming language. It is made for the coding the web, webpages, and web applications. It makes it possible for static [HTML](../../../../coding/html.md) pages and the [CSS](../../../../coding/css.md) styling of the webpages to dynamically change and update.

## What is a p5.js Web application?

HTML stands for Hypertext Markup Language, and is the "code" of the internet. The page you are reading this on now is coded in HTML. But there is more to a webpage and a web application than just HTML. For the web page to do anything it needs some sort of programming language. This can be a server side language like PHP or a client side language like JavaScript, or both! Wait, what is a server? What is a client?

The internet is just made up of files and computers that are connected to each other. The computer you are using now has a web browser that we refer to as the client. The client sends a request, the URL or the www address, of the page to the web server. The server then sends or serves the page to the client. Since a server is also a computer, it can perform tasks before sending the page to the client such as looking up current information in a database. The client's web browser can also perform programming tasks before displaying the webpage to the user in the browser. To do this the browser uses CSS and JavaScript. CSS, or Cascading Style Sheets, make a webpage look visually interesting. HTML is just text and is relatively unstyled by default.

### Software Libraries

HTML, CSS, and JavaScript are the three building blocks of a webpage or a web application and we will use all three to build p5.js webpages and applications. The ".js" of p5.js stands for JavaScript. p5.js is a library of the JavaScript programming language. A software library is a collection of prebuilt tools that make it easier to make programs rather than starting from scratch. For example, when you need more flour to make a loaf of bread, you likely do not plant wheat in a field, wait for it to grow, harvest it, and then grind it in a mill. While you could do this, it is much more efficient to use a "bread making library" and buy a bag of flour at the grocery store. We will use the p5.js software library to save time in the same way rather than rewriting all of the tools from basic principles, although you could if you wanted to.

To use p5.js, it needs to be included, or added to the HTML file of the webpage. Then you write additional JavaScript that tells the computer what your program or sketch is supposed to do. CSS then styles the page as needed. All of these elements are then hosted on a server. Once the sketch is complete and uploaded to the webserver, then you can share the URL with anyone in the world that has internet access and they can experience and interact instantly with your new creation. Pretty rad.

### Installing the p5.js Library

We will cover how to [install and use p5.js](../../../../coding/p5js/setup-local-p5-js-project.md) and other libraries more in depth later in the course, but for now know there are two ways to "install" the library. You can use an online version and link to it or you can use a downloaded version and host it on a local or remote server. You can download the library from the [p5.js website](https://p5js.org/download/). Since p5.js is a popular library, you can also link to a hosted version of the library on a CDN, or Content Delivery Network. This is a list of [p5.js CDN links](https://cdnjs.com/libraries/p5.js).

[How to setup p5.js local project](../../../../coding/p5js/setup-local-p5-js-project.md)

## Computer Graphics Coordinates

Unlike in elementary math class the coordinates (0,0) are not in the middle of the page. Coordinates start in the upper left side of the page or screen in computer graphics. Y gets bigger as you move down the screen and X gets bigger as you move right across the screen.

[![Computer Graphics Coordinate System vs Math Class Graph Coordinates](./2024-01-03-computer-graphics-coordinates.png)](./2024-01-03-computer-graphics-coordinates.png)

## Using the p5.js Online Editor

The creators of p5.js provide a convenient and easy to use [online editor](https://editor.p5js.org/) that works in an internet browser window. This allows for quick experimentation and testing. To access the [online editor](https://editor.p5js.org/) go to [https://editor.p5js.org/](https://editor.p5js.org/).

At the top of the editor is a menu with "File, Edit, Sketch, and Help". There is a play button, a stop button, and a check box for "Auto-refresh".

There is a sketch.js window that has the basic bones of a p5.js sketch. This sketch will draw a canvas 400px by 400px and color the background a 120 gray color. When the play button is clicked or the "Auto-refresh" button is toggled, this result will be seen in the Preview window.

```javascript
// Default sketch in the p5.js online editor
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
```

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/SYg862WYaic?si=XxzLlRN9jxMWpfa-?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

[p5.js Web Editor Basics](../../../../coding/p5js/p5-js-web-editor-basics.md)

### Syntax

Just like the language that you speak, programming languages like JavaScript, have rules and grammar. In coding the rules and grammar are called syntax. If you do not have your code written with the correct syntax then the computer will not know how to run your code.

- each line ends with a semi colon `;`
- functions have a name followed by `()` and then curly brackets `{}` that hold the contents of the function
- lines that start with two `//` are treated as comments

## Parts of a p5.js Program or Sketch

### `setup()`

The `setup()` function runs once at the beginning of a p5.js program. This can "setup" parts of the program such as variables or other settings. The function will execute or run all of the commands inside the curly brackets or braces `{ }`. A common part in `setup()` in p5.js is setting up a canvas to draw on.

```javascript
function setup() {
  createCanvas(400, 500);
}
```

The `setup()` function above creates a canvas that is 400 pixels wide by 500 pixels tall.

### `draw()`

The draw function is called after the completion of the setup function and runs continuously until the program stops or the function `noLoop()` is called. Functions are "called" in computer programming jargon. Its speed is controlled by the `frameRate()` function but defaults to 60 frames per second (fps) according to the docs. A sketch or program can only have one draw function. [^2]

### Shapes

Different shapes can be drawn in p5.js such as triangles, circles (ellipses), lines, rectangles, and single points. Special functions can be used to create complex shapes such as those used in vector drawing programs like [Adobe Illustrator](../../../../software/adobe-illustrator/illustrator.md).

#### 2D Primitive Shapes

- arc()
- ellipse()
- circle()
- line()
- point()
- quad()
- rect()
- square()
- triangle()

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/7U0wQlDod60?si=kL-nwYtDLqyy1VOt?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

[Basic Shapes in p5.js](../../../../coding/p5js/primitive-shapes-p5-js.md)

### Color

The color of the canvas and the color of shapes can be set. To set the background color to completely red use the code `background(255,0,0);` The syntax is (Red, Green, Blue) with 0 representing no color and 255 representing 100% color. If a single number is used such as `background(45);` then it will be shaded with a monochrome grey shade corresponding to its position on the 0-255 color scale.

Before drawing a shape you can select a stroke and a fill color. The default is a white fill and a black stroke.
To set a green fill and a blue stroke, you could write the following code:

```javascript
fill(0, 255, 0);
stroke(0, 0, 255);
```

These are completely saturated colors. A more pleasing color palette can be selected by using all three color values. In addition different color modes can be called. Instead of using RGB color mode it may be better to use HSB or HSL for Hue / Saturation Brightness (or Lightness), similar to HSV Hue / Saturation / Value. These modes can be more intuitive for making color adjustments than RGB.

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/uBj4dZmxONA?si=e3HsTRd8_PHR8KZo?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

[Color in p5.js](../../../../coding/p5js/color-modes-p5-js.md)

### Code Comments

Comments in code help you remember what different functions and variables represent. They are helpful for debugging and having others review your code. Comments should be used to increase understanding. A good practice is to write code comments for your future self that has amnesia. Think if you would understand the code by reading the comment in 10 years if you forgot everything about the program.

Comments can be single line or multi line in p5.js. Single line comments in Javascript start with two slashes `//`.

`// This is a single line comment`

Multiline comments in Javascript start with a slash and a star `/*` and end with a star and a slash `*/`.

```javascript
/* This is a multiline
comment that continues until
it reaches the ending star * and slash / 
*/
```

An additional use for comments is to "comment out" parts of your code. When you want to test different options without deleting everything from the code editor, "commenting out" some of the code, either a single line or multiple lines, is a recommended method.

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/A2pH3TOEgok?si=dv9BxZTB8orHlm8M?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

[Code Comments](../../../../coding/p5js/code-comments-p5-js.md)

### Errors in the Console

Errors will happen when coding. It is exepected. When errors occur

### Clone p5.js project template from CL

`gh repo create my-new-p5-project-repo --public --clone --template whatmakeart/p5-project-template`

## References

[^2]: [p5.js frameRate() Documentation](https://p5js.org/reference/#/p5/frameRate)
