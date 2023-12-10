---
date: 2023-05-08T8:30:00-04:00
description: xcrun error invalid active developer path How can you fix your git installation when installed on a mac but Visual Studio Code does not find the installation.
featured_image: /posts/images/git-not-found-title.jpg
tags:
  - Coding
  - Visual Studio Code
  - git
title: git Not Found xcrun error

keywords:
  - git
  - visual studio code
---

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/oaV6Kb-2eAL0?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

**How to Fix Git on Mac OS after Installing a New Update**

In this tutorial, you will learn how to fix Git on Mac OS after installing a new update. You will learn how to reinstall the command line developer tools and how to update your path in Visual Studio Code.

**What You Will Need**

- A Mac computer
- A terminal
- Visual Studio Code

**Instructions**

1. Open a terminal and type the following command:

```
xcode-select --install
```

2. Click "Install" and agree to the software license agreement.

3. Once the installation is complete, restart your Mac.

4. Open Visual Studio Code and type the following command in the terminal:

```
git --version
```

5. If you see a version number, then Git is installed and working properly.

6. You should now be able to use Git in Visual Studio Code.

**Tips**

- You can also reinstall the command line developer tools by opening Xcode and going to the "Preferences" menu. Select the "Downloads" tab and click on the "Install Command Line Developer Tools" button.
- If you are still having problems with Git, you can try searching for help online or contacting the Git support team.

## Video Transcript

In this Visual Studio code tutorial and git tutorial, I'm going to show you what happens sometimes when Mac OS doesn't find git. Sometimes after you update Mac OS then the git installation isn't found even though you know you have git installed but Mac doesn't find it. This can also happen with Homebrew and other terminal commands. So here you can see in Source Control in Visual Studio code, it says I need to download git for Mac OS. Even if I click reload it still says this. I can go to a terminal and I open up a new terminal and then I can say git –version and it gives me this error message. So if you see an xcrun: error: invalid active developer path that means that after you installed Mac OS sometimes you need to reinstall XCode. So the way we can do that is type xcode-select –install.

This pop-up will come up and then it says the xcode-select command requires the command line developer tools, would you like to install the tools now? You might have already installed them but sometimes they need to be reinstalled after a major Mac OS update so if that is what just happened I recommend then clicking install, agreeing to the software and then it'll install the XCode developer tools. And sometimes it takes a bit long to download but once those are installed you may need to restart your Mac and then you should be able to use git as you wanted to before. So every once in a while when Mac updates its operating system you need to reinstall the command line developer tools. Once you've finished reinstalling the XCode developer tools you may need to restart but you can try by typing if you have Git Version then you can go ahead and reload Visual Studio Code. Sometimes that's all it takes. Here we can now see that I can initialize a repository so everything has been fixed just by reinstalling the command line developer tools. If that doesn't happen you may get a path error and then you just need to update your path in Visual Studio Code because now once I initialize my Repository I now have everything working fine. So hopefully you're able to fix your GitHub installation on a MacBook or any Mac OS device after installing a new Mac OS operating system by reinstalling the XCode developer tools.
