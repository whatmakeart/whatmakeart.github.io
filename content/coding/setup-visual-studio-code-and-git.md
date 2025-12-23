---
title: Setup Visual Studio Code and Git
date: 2024-01-10T09:14:36
lastmod: 2025-12-23T10:12:35-04:00
---

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/fb5stQYgM_Y?si=Kup1z810GMrK4FSR?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

In this programming for artists tutorial, we'll explore how to resolve the issue of missing Git in Visual Studio Code. This is crucial for artists who are delving into the world of code, as Git is a powerful tool for version control, allowing you to manage changes to your projects efficiently.

## Steps to Fix Missing Git in Visual Studio Code

1. **Check if Git is Installed**:

   - First, ensure that Git is installed on your system. If it's already installed, sometimes simply reloading Visual Studio Code can solve the issue.

2. **Installing Git**:

   - If Git is not installed, one easy method is to install GitHub Desktop, which automatically installs Git.
   - Alternatively, you can download Git directly for your specific operating system. This is done by visiting [git-scm.com](https://git-scm.com/).
   - Mac, Linux, or Windows users can find the respective versions for their operating systems on the website.

3. **Using a Package Manager (Mac Users)**:

   - If you're using a Mac and have Homebrew (a package manager) installed, you can install Git through the Terminal. [Install Homebrew](install-homebrew.md)
   - Open Terminal and type `brew install git`.
   - After installation, verify the installation by typing `git --version` in Terminal. This command will display the installed Git version.

4. **Configuring Git in Visual Studio Code**:

   - Restart Visual Studio Code after installing Git.
   - You should now see options like "Open Folder" or "Clone Repository".
   - When you want to save a file or project, initialize a Git repository.
   - The first time you commit, Visual Studio Code might prompt you to stage your commits. You can choose to always stage them.

5. **Setting Git Username and Email**:

   - To configure your Git username and email, which is required for commits, open a new Terminal in Visual Studio Code (or use Mac OS Terminal).
   - Type `git config --global user.name "Your Username"`. Replace "Your Username" with your actual username.
   - Then set your email with `git config --global user.email "YourEmail@example.com"`, replacing with your actual email.
   - These commands set your username and email globally for all your Git projects. However, you can also configure them per project if needed.

6. **Committing Changes and Publishing**:
   - Once your username and email are set, you can proceed with committing changes without encountering the error regarding the missing username and email.
   - If you wish to publish your branch to GitHub, you'll need to enter your GitHub credentials.

By following these steps, you'll effectively resolve the missing Git issue in Visual Studio Code, setting a strong foundation for managing your art projects with version control. This integration of technology into art not only streamlines your workflow but also opens up new possibilities for creative expression and collaboration.

## Setup Visual Studio Code and Git Video Transcript

In this programming for artist tutorial I'm going to show you how you can fix missing git when you open up visual studio code. If you've already installed git then you just need to reload but if you haven't there are many ways that you can install git.

You can install GitHub Desktop that will automatically install git. One way is to click download for git right here. This will be for your operating system. I'm on a Mac so it says Mac OS but if you're on Linux or Windows it will say for Linux or Windows, and then when you click this it goes to git-sc.com. So this is the same method as if you go to a browser and type in git.sc.com and then you can manually install it.

There are other ways to install git. If you've installed a package manager on Mac you can use Homebrew to install git. Once you've installed Homebrew, and I have a video of how to install Homebrew Linked In the description, you can go ahead and use Terminal to install git. Here I have a terminal window and I'm going to type "brew install git". Once git is installed we can type git and then --version and it should show us what git version is installed on our computer. Once we've done this we can go back to Visual Studio Code and you most likely need to restart it but once you restart Visual Studio Code you'll see an option here for Open Folder or Clone Repository. Once you have git installed and Visual Studio Code is working and you have a file that you may want to save and you've opened a folder you need to initialize a repository. So if I click this button and then I type a message, "first commit" and I commit it it's going to ask me a question, if I want to Stage my commits. And I'm going to usually say always and then and it will give you an error the first time you try to use git on your computer that you need to configure your user.name and user.email in git. I'll click cancel. So how do I do that?

If I go up to the menu and I click Terminal - New Terminal, this can also be done directly in the Mac OS Terminal, I need to type a couple commands. The first command I'm going to type is "git config --global user.name" and then my username. Replace this with your own username and then you have have your username set for all your git installations. You can also change this per repository or per project folder in many different ways. Next I need to set my email. I'll type a second command very similar to the first this is "git config --global user.email and then my email. Once that is set then we can go ahead and click commit and we no longer have an error message. Then we can publish our branch to GitHub if we so choose after we enter in our GitHub credentials. So hopefully this helps you fix the git username and email not found error on Mac OS.

[![Setup Visual Studio Code and Git](attachments/vsc-and-github-thumb.jpg)](attachments/vsc-and-github-thumb.jpg)
