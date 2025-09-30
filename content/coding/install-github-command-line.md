---
title: Install GitHub Command Line
date: 2024-01-11T16:16:57
lastmod: 2025-09-30T17:53:45
---

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/PPOL_hgMMLk?si=h7bsn7J38GeQUPXK?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Thank you for sharing this programming tutorial focused on installing and authenticating GitHub command line tools, specifically for artists who might be new to this aspect of technology. Let's break down the steps you provided into a clear, detailed guide:

### Installing GitHub Command Line Tools

#### For macOS Users:

1. **Prerequisites**: Ensure you have [Homebrew installed](./install-homebrew.md) on your macOS. Homebrew is a package manager that simplifies the installation of software on macOS.

2. **Installation Command**:
   - Open a Terminal window on your Mac.
   - Type the command `brew install gh` and press Enter.
   - This command utilizes Homebrew to install the GitHub command line tools (gh).

#### For Windows Users (Post Windows 10):

1. **Using Winget**:
   - Windows now includes a package manager called Winget.
   - In the Windows command prompt or PowerShell, type the command provided for Winget installation of GitHub CLI and execute it.

#### For Linux Users:

1. **Linux Installation**:
   - Follow the specific instructions provided on the GitHub CLI page for various Linux distributions.

### Authenticating GitHub Command Line Tools

1. **Initial Command**:

   - After installation, open your Terminal or Command Prompt.
   - Type `gh auth login` and press Enter. This command initiates the authentication process.

2. **Selecting Account**:

   - Choose `github.com` when prompted for the account to log into.

3. **Authentication Method**:

   - You will be given a choice between HTTPS and SSH for authentication. Select the one that fits your preference or setup.
   - Confirm that you want to authenticate Git with your GitHub credentials by pressing 'Y'.

4. **Login Method**:

   - You can either log in using a web browser or by pasting an authentication token.
   - If you choose to log in via a web browser, select that option.

5. **Using Web Browser for Authentication**:

   - Copy the authentication code provided in the Terminal.
   - Press Enter to open GitHub in your web browser.
   - On the GitHub device activation page, enter the authentication code you copied.
   - Click 'Continue' to proceed.

6. **Final Authorization Steps**:

   - Click 'Authorize' to grant the necessary permissions.
   - If you have two-factor authentication enabled, complete this step to finalize the process.

7. **Confirmation**:
   - Once these steps are completed, you'll have successfully authenticated the GitHub command line on your device.

### Conclusion

- **Testing**: Try running a simple GitHub CLI command to ensure everything is set up correctly.
- **Troubleshooting**: If you encounter any issues, consult the GitHub CLI documentation or seek help from the GitHub community or forums.

By following these steps, you should be able to successfully install and authenticate the GitHub command line tools on your device, which is an essential skill for modern programming, especially for artists who are branching into tech. Happy programming, and remember, each step is an opportunity to learn something new!

## Install GitHub Command Line Video Transcript

In this programming for artist tutorial I'm going to show you how to install GitHub command line tools. These are optional tools that you could install to be able to use GitHub from the command line. If you go to cl.github.com it will bring you to this page and it gives you install instructions.

If we've already installed the homebrew package manager on Mac OS we can just type grew install gh. We can also view the installation instructions for other operating systems.

Here it's gives the installation instructions for Mac OS, as well as Linux, and it also gives you the installation options for Windows. After Windows 10 there is a default package manager that you can install with Windows called winget. Simply type this in and then you can use the GitHub command line tools in Windows.

I'm working on a Mac computer so I will follow the instructions for installing with Mac. So here I can copy this command, but where do I paste this command? I paste it into a new Terminal window. Here I have a new Terminal window and I'll paste the command and then it will install.

The first time that you use GitHub command line tools you're going to have to authenticate. We can do this by typing in the following command, we can type gh space a login. It will next ask you which account you want to log into. We want to log into github.com, then we can either use https or SSH, then we can authenticate git with our GitHub credentials by pressing Y, and then we can either log in with a web browser or paste an authentication token.

I'm going to choose login with a web browser. Then we can copy our authentication code and then press enter to open GitHub in the browser. Once you press enter it will bring you to device activation and then we can simply type in our activation code. Once you've typed in your activation code just click continue. Then we can click authorize, then we can click authorize GitHub and you need to confirm your two Factor authentication. Once you've done that you've now authenticated GitHub command line and you can use it on your device.

Hopefully this helps you authenticate GitHub command line with your GitHub account.

Happy programming.

[![Install GitHub CLI](./attachments/install-github-cli-thumb.png)](./attachments/install-github-cli-thumb.png)
