---
title: Publish GitHub Branch from Visual Studio Code
date: 2024-01-10T09:23:08
lastmod: 2024-01-16T05:47:47
---

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/RT5GHBICcfo?si=AUeP6cdep3yop3-a?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

This tutorial provides a clear step-by-step guide on how to publish a branch to GitHub using Visual Studio Code. Here's a detailed breakdown of the process:

1. **Setting Up GitHub in Visual Studio Code**:

   - In a [previous session](./setup-visual-studio-code-and-git.md), you set up your GitHub username and email and made your first commit, which in this case was an HTML boilerplate.
   - Now, to publish this branch to GitHub, you'll use the GitHub extension that comes pre-installed in Visual Studio Code.

2. **Publishing the Branch**:

   - To initiate, click on 'Publish Branch' in Visual Studio Code. This action will prompt the GitHub extension to sign into your GitHub account.
   - Note: Ensure you already have a GitHub account set up before this step.

3. **Signing into GitHub**:

   - After clicking 'Publish Branch', a sign-in screen for GitHub will appear.
   - Sign in to your GitHub account.
   - As GitHub now enforces two-factor authentication, use either a passkey or an authenticator app for verification.

4. **Repository Options**:

   - Once two-factor authentication is complete, Visual Studio Code will open, indicating that GitHub has been authenticated through it.
   - You'll then be presented with options to publish your branch either as a public or a private repository and to name the repository. In this example, the repository is named 'git-test' and is being published as a public repository.

5. **Final Steps and Viewing on GitHub**:

   - After choosing your repository settings, additional options are presented, like opening GitHub to view the repository and periodically running "git fetch", which is recommended to keep your repository up-to-date.
   - By selecting to view on GitHub, you can see your repository, in this case with the 'index.html' file containing the HTML boilerplate.
   - You can edit this file directly on GitHub or preferentially in Visual Studio Code and use GitHub as a repository to back up your changes.

6. **Syncing and Authenticating GitHub with Visual Studio Code**:
   - This process helps in syncing your local changes with the GitHub repository and ensures that your work is safely backed up on GitHub.
   - The integration between Visual Studio Code and GitHub simplifies the process of version control and collaboration.

Integrated development environments (IDEs) like Visual Studio Code, combined with version control systems like GitHub, can streamline the development process. By following these steps, artists and programmers can efficiently manage their projects and collaborate with others.

## Publish GitHub Branch from Visual Studio CodeVideo Transcript

In this programming for artist tutorial I'm going to show you how you can publish a branch to GitHub. So in the previous video I set up my GitHub username and email and made my first commit of this HTML boiler plate. Now I want to click Publish Branch. This will allow the GitHub extension that comes pre-installed in Visual Studio code to attempt to sign into your GitHub account. In order to do this you'll have to have a GitHub account already set up.

I'm going to click, this will open up a sign-in screen for GitHub. Go ahead and sign in to your GitHub account. GitHub recently enforced two-factor authentication for all people so you can use a pass key or your authenticator app, whatever you have. Once you've authorized your two-factor authentication then it's going to try to open up Visual Studio Code. You can either check this box so you don't get this warning or you can leave it and get the warning. I'm going to go ahead and open up Visual Studio Code and then it has now authenticated GitHub through Visual Studio Code. And I have a choice that I can publish to GitHub as a public repository or as a private repository and I can name the repository. I'm going to leave it labeled as git test and I'm going to publish it as a public repository.

Then it gives us some options. I can go ahead and open up GitHub to see this and then I can also periodically run "git fetch". This is most likely a good thing to do so I'm going to click yes. And then I can open it up on GitHub and here we can see my repository. Right here I have my index.html and you can see that it merely has this HTML boiler plate. I can edit it here and then I can download my changes or better I can go ahead and edit it inside Visual Studio Code and then I can use Github as a repository to backup my changes. Hopefully this helps you sync and authenticate GitHub with Visual Studio Code.

[![Publish GitHub Branch](./attachments/publish-github-branch-thumb.jpg)(./attachments/publish-github-branch-thumb.jpg)]
