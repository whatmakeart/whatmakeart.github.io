---
title: Configure Username and Email in Git Mac
date: 2024-01-10T09:01:28
lastmod: 2025-10-31T03:57:14
---

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/RT-1Zywrse8?si=rpQW-Y3Y2KRoMDyB?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

To fix the "get username or email not found" error message in Git on macOS, especially when you're using Visual Studio Code (VS Code) as shown in your example, you need to configure your Git username and email. This error typically occurs when you try to make your first commit in a new Git installation and haven't set up your user identity yet. Here's a step-by-step guide to resolve this:

[How to set GitHub Username and Email in Windows](./configure-username-email-in-git-windows.md)

1. **Open the Terminal in VS Code**: Since you're already in VS Code, open an integrated terminal by going to the menu and selecting `Terminal` -> `New Terminal`. This terminal works just like your macOS terminal.

2. **Set Your Git Username**:

   - In the terminal, type the following command:
     ```shell
     git config --global user.name "Your Username"
     ```
   - Replace `"Your Username"` with your desired Git username. This should be a name that you're comfortable displaying publicly, as it will be visible in your commit messages.
   - The `--global` flag sets this username for all your Git repositories. If you want to set a different username for a specific repository, you can omit `--global` and run this command within that repository's directory.

3. **Set Your Git Email**:

   - Next, you need to set your email address with a similar command:
     ```shell
     git config --global user.email "your_email@example.com"
     ```
   - Replace `"your_email@example.com"` with your actual email address. This should be the same email you use for your GitHub account if you plan to push your code there. This email will also be associated with your commit messages.

4. **Commit Your Changes**:

   - After setting both your username and email, return to the source control panel in VS Code where you've written your commit message ("first commit" in your case).
   - Click on `Commit` to commit your changes. The error message should no longer appear.

5. **Publish to GitHub (Optional)**:
   - If you wish to publish your branch to GitHub, you can do so by pushing your branch. VS Code may prompt you for your GitHub credentials the first time you do this.
   - Enter your GitHub credentials to connect your local repository with your GitHub account.

By setting your username and email in Git, you're effectively establishing your identity for your commit messages. This is crucial for collaborative work, as it allows others to see who made specific changes. Remember, if you work on multiple projects or with different teams, you might want to set different user names or emails for specific repositories, which you can do by omitting the `--global` flag in the commands above and running them in the specific repository's directory.

<details>
<summary>

## Configure Username and Email in Git Video Transcript

</summary>

In this programming for artist tutorial I'm going to show you how to fix the get username or email not found error message when you try to make your first commit. Here I am in Visual Studio Code. I have some HTML boiler plate and I have a commit message that says "first commit". And then I want to click commit. Now I get this error message that says "make sure you configure your user.name and user.email in git." I'll click cancel. So how do I do that?

If I go up to the menu and I click Terminal - New Terminal, this can also be done directly in the Mac OS terminal, I need to type a couple commands. The first command I'm going to type is "git config --global user.name" and then my username. Replace this with your own username and then you have your username set for all your git installations. You can also change this per repository or per project folder in many different ways. Next I need to set my email. I'll type a second command very similar to the first. This is git config --global user.email and then my email. Once that is set then we can go ahead and click commit and we no longer have an error message. Then we can publish our branch to GitHub if we so choose after we enter in our GitHub credentials. So hopefully this helps you fix the get username and email not found error on Mac OS.

</details>
