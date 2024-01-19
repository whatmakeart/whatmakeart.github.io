---
title:
date: 2024-01-19T05:58:31
lastmod: 2024-01-19T06:40:59
---

## What is a p5.js Web application?

HTML stands for Hypertext Markup Language, and is the "code" of the internet. The page you are reading this on now is coded in HTML. But there is more to a webpage and a web application than just HTML. For the web page to do anything it needs some sort of programming language. This can be a server side language like PHP or a client side language like JavaScript, or both! Wait, what is a server? What is a client?

The internet is just made up of files and computers that are connected to each other. The computer you are using now has a web browser that we refer to as the client. The client sends a request, the URL or the www address, of the page to the web server. The server then sends or serves the page to the client. Since a server is also a computer, it can perform tasks before sending the page to the client such as looking up current information in a database. The client's web browser can also perform programming tasks before displaying the webpage to the user in the browser. To do this the browser uses CSS and JavaScript. CSS, or Cascading Style Sheets, make a webpage look visually interesting. HTML is just text and is relatively unstyled by default.

### Software Libraries

HTML, CSS, and JavaScript are the three building blocks of a webpage or a web application and we will use all three to build p5.js webpages and applications. The ".js" of p5.js stands for JavaScript. p5.js is a library of the JavaScript programming language. A software library is a collection of prebuilt tools that make it easier to make programs rather than starting from scratch. For example, when you need more flour to make a loaf of bread, you likely do not plant wheat in a field, wait for it to grow, harvest it, and then grind it in a mill. While you could do this, it is much more efficient to use a "bread making library" and buy a bag of flour at the grocery store. We will use the p5.js software library to save time in the same way rather than rewriting all of the tools from basic principles, although you could if you wanted to.

To use p5.js, it needs to be included, or added to the HTML file of the webpage. Then you write additional JavaScript that tells the computer what your program or sketch is supposed to do. CSS then styles the page as needed. All of these elements are then hosted on a server. Once the sketch is complete and uploaded to the webserver, then you can share the URL with anyone in the world that has internet access and they can experience and interact instantly with your new creation. Pretty rad.

### Installing the p5.js Library

We will cover how to [install and use p5.js](../../../../coding/p5js/setup-local-p5-js-project.md) and other libraries more in depth later in the course, but for now know there are two ways to "install" the library. You can use an online version and link to it or you can use a downloaded version and host it on a local or remote server. You can download the library from the [p5.js website](https://p5js.org/download/). Since p5.js is a popular library, you can also link to a hosted version of the library on a CDN, or Content Delivery Network. This is a list of [p5.js CDN links](https://cdnjs.com/libraries/p5.js).

[How to setup p5.js local project](../../../../coding/p5js/setup-local-p5-js-project.md)

### Clone p5.js project template from CL

`gh repo create my-new-p5-project-repo --public --clone --template whatmakeart/p5-project-template`

## Git Resources

- [Install Homebrew on Mac OS](../../../../coding/install-homebrew.md)
- [Install Visual Studio Code](../../../../coding/install-visual-studio-code.md)
- [Setup Visual Studio Code and Git](../../../../coding/setup-visual-studio-code-and-git.md)
- [Install GitHub CLI](../../../../coding/install-github-command-line.md)
- [Clone GitHub Template Repository](../../../../coding/clone-github-template-repository.md)
- [Git not found xcrun erorr](../../../../coding/git-not-found-xcrun-error.md)
