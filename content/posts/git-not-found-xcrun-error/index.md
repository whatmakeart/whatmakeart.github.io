---
date: 2023-05-08T8:30:00-04:00
description: xcrun error invalid active developer path How can you fix your git installation when it is installed on a mac but Visual Studio Code does not find the installation.
featured_image: "/posts/git-not-found-xcrun-error/git-not-found-title.jpg"
tags:
  - Visual Studio Code
  - git
  - coding
title: git Not Found xcrun error
draft: false
spellcheck: off
---

{{< youtube id="aV6Kb-2eAL0" title="git not found xcrun error" >}}

## Video Transcript

In this Visual Studio code tutorial and git tutorial, I'm going to show you what happens sometimes when Mac OS doesn't find git. Sometimes after you update Mac OS then the git installation isn't found even though you know you have git installed but Mac doesn't find it. This can also happen with Homebrew and other terminal commands. So here you can see in Source Control in Visual Studio code, it says I need to download git for Mac OS. Even if I click reload it still says this. I can go to a terminal and I open up a new terminal and then I can say git –version and it gives me this error message. So if you see an xcrun: error: invalid active developer path that means that after you installed Mac OS sometimes you need to reinstall XCode. So the way we can do that is type xcode-select –install.

This pop-up will come up and then it says the xcode-select command requires the command line developer tools, would you like to install the tools now? You might have already installed them but sometimes they need to be reinstalled after a major Mac OS update so if that is what just happened I recommend then clicking install, agreeing to the software and then it'll install the XCode developer tools. And sometimes it takes a bit long to download but once those are installed you may need to restart your Mac and then you should be able to use git as you wanted to before. So every once in a while when Mac updates its operating system you need to reinstall the command line developer tools. Once you've finished reinstalling the XCode developer tools you may need to restart but you can try by typing if you have Git Version then you can go ahead and reload Visual Studio Code. Sometimes that's all it takes. Here we can now see that I can initialize a repository so everything has been fixed just by reinstalling the command line developer tools. If that doesn't happen you may get a path error and then you just need to update your path in Visual Studio Code because now once I initialize my Repository I now have everything working fine. So hopefully you're able to fix your GitHub installation on a MacBook or any Mac OS device after installing a new Mac OS operating system by reinstalling the XCode developer tools.
