---
title: Setup Visual Studio Code and Git
date: 2024-01-10T09:14:36
lastmod: 2024-01-10T09:16:29
---

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/fb5stQYgM_Y?si=Kup1z810GMrK4FSR?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Setup Visual Studio Code and Git Video Transcript

In this programming for artist tutorial I'm going to show you how you can fix missing git when you open up visual studio code. If you've already installed git then you just need to reload but if you haven't there are many ways that you can install git.

You can install GitHub Desktop that will automatically install git. One way is to click download for git right here. This will be for your operating system. I'm on a Mac so it says Mac OS but if you're on Linux or Windows it will say for Linux or Windows, and then when you click this it goes to git-sc.com. So this is the same method as if you go to a browser and type in git.sc.com and then you can manually install it.

There are other ways to install git. If you've installed a package manager on Mac you can use Homebrew to install git. Once you've installed Homebrew, and I have a video of how to install Homebrew Linked In the description, you can go ahead and use Terminal to install git. Here I have a terminal window and I'm going to type "brew install git". Once git is installed we can type git and then --version and it should show us what git version is installed on our computer. Once we've done this we can go back to Visual Studio Code and you most likely need to restart it but once you restart Visual Studio Code you'll see an option here for Open Folder or Clone Repository. Once you have git installed and Visual Studio Code is working and you have a file that you may want to save and you've opened a folder you need to initialize a repository. So if I click this button and then I type a message, "first commit" and I commit it it's going to ask me a question, if I want to Stage my commits. And I'm going to usually say always and then and it will give you an error the first time you try to use git on your computer that you need to configure your user.name and user.email in git. I'll click cancel. So how do I do that?

If I go up to the menu and I click Terminal - New Terminal, this can also be done directly in the Mac OS Terminal, I need to type a couple commands. The first command I'm going to type is "git config --global user.name" and then my username. Replace this with your own username and then you have have your username set for all your git installations. You can also change this per repository or per project folder in many different ways. Next I need to set my email. I'll type a second command very similar to the first this is "git config --global user.email and then my email. Once that is set then we can go ahead and click commit and we no longer have an error message. Then we can publish our branch to GitHub if we so choose after we enter in our GitHub credentials. So hopefully this helps you fix the git username and email not found error on Mac OS.
