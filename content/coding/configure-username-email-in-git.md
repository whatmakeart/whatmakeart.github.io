---
title: Configure Username and Email in Git
date: 2024-01-10T09:01:28
lastmod: 2024-01-10T09:03:16
---

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/RT-1Zywrse8?si=rpQW-Y3Y2KRoMDyB?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Configure Username and Email in Git Video Transcript

In this programming for artist tutorial I'm going to show you how to fix the get username or email not found error message when you try to make your first commit. Here I am in Visual Studio Code. I have some HTML boiler plate and I have a commit message that says "first commit". And then I want to click commit. Now I get this error message that says "make sure you configure your user.name and user.email in git." I'll click cancel. So how do I do that?

If I go up to the menu and I click Terminal - New Terminal, this can also be done directly in the Mac OS terminal, I need to type a couple commands. The first command I'm going to type is "git config --global user.name" and then my username. Replace this with your own username and then you have your username set for all your git installations. You can also change this per repository or per project folder in many different ways. Next I need to set my email. I'll type a second command very similar to the first. This is git config --global user.email and then my email. Once that is set then we can go ahead and click commit and we no longer have an error message. Then we can publish our branch to GitHub if we so choose after we enter in our GitHub credentials. So hopefully this helps you fix the get username and email not found error on Mac OS.
