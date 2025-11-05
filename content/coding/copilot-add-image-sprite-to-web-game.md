---
title: Copilot Add Image Sprite to Web Game
date: 2025-10-30T09:00:00Z
lastmod: 2025-11-05T16:07:19
---

<div class="video-grid">
<div class="iframe-16-9-container"><iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/-oGja4KPY78?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>

[Add Image Sprite](https://youtu.be/-oGja4KPY78)

I’ve got a little avocado adventure game built using natural language prompts with GitHub Copilot in Visual Studio Code. It runs in the browser, and it uses a generated player sprite. Let’s replace the default player art with a custom transparent PNG, adjust the size so it feels right, and then commit and sync the changes so they show up on your live site.

## What we’re starting with

Inside a project folder called Avocado Adventure there’s an index.html and some JavaScript that Copilot wrote when I prompted it to make an avocado game. The player currently uses an image that Copilot picked or generated. We’re going to swap that out for our own file.

If you’ve never made a transparent PNG before, the essential part is that the background is actually transparent, not white. That keeps your edges crisp over any background color in the game. I’ve linked a video in the description for making a transparent PNG, but if you already have one, you’re ready.

## Add your avocado image to the project

Drag your custom avocado file into the project. I’m using a file named avocado.png.

It’s a good habit to keep images tidy in their own folder:

1. In VS Code, click the New Folder icon in the Explorer.
2. Name the folder img.
3. Drag avocado.png into img so the path becomes img/avocado.png.

Now the file tree shows avocado.png nested neatly inside img. Organization helps later when you add seeds, backgrounds, or UI icons.

## Ask Copilot to use your image

Open the GitHub Copilot chat or inline prompt in VS Code and tell it exactly what you want. I say:

Replace the avocado player in the game with img/avocado.png

Copilot looks through the project, finds where the player image is set up, and updates the code. In my case, it created a new variable named something like avocadoImage and pointed its source at our PNG.

Your filenames and variable names might differ slightly, but the idea is the same: a new Image object, its src set to img/avocado.png, and that image drawn in the render loop.

Preview the changes. If your game is already running with a live server extension, just refresh the page. Otherwise, open index.html with a simple local server so canvas images load correctly.

You should now see your own avocado in place of Copilot’s default.

## Commit and sync your changes

When the avocado looks great:

1. Save all your files.
2. In VS Code, open the Source Control panel.
3. Stage the changes.
4. Type a clear commit message. I use: Added avocado image for player
5. Commit and then Sync (or Push) so the changes land on your remote repository and your live server picks them up.

Now your website will show the new player image.

## Troubleshooting quick hits

Image doesn’t appear
Double-check the path: img/avocado.png must match the actual file name and folder. Case matters on many servers.

It shows but looks jaggy or with a boxy background
Make sure the PNG truly has transparency. Re-export as PNG with transparent background in your image editor.

It’s stretched or squished
Keep the width and height proportional to the original image’s aspect ratio.

The browser shows a warning about cross-origin images on canvas
Run a local server rather than opening index.html directly from the file system. The VS Code Live Server extension is perfect for this.
