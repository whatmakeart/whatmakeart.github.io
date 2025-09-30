---
title: Raspberry Pi Disk Imager
date: 2024-01-23T06:05:13
lastmod: 2025-09-30T17:53:45
---

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/S9pfJzCOs2A?si=l6vrdXewQ_Qx8fN8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

In this tutorial, we'll go through the process of imaging a new SD card for a Raspberry Pi, step by step. This process involves downloading and using the Raspberry Pi Imager software, choosing the appropriate OS, customizing settings, and installing the image on an SD card. Here’s how you do it:

## Raspberry Pi Disk Image Instructions

1. **Download Raspberry Pi Imager**:

   - Go to the Raspberry Pi website ([raspberrypi.com](https://www.raspberrypi.com/)).
   - Click on "Software" and find the Raspberry Pi Imager.
   - Download the Raspberry Pi Imager for your operating system (available for macOS, Windows, and Linux).
   - Install the downloaded software on your computer.

2. **Launch Raspberry Pi Imager**:

   - Once installed, open the Raspberry Pi Imager.
   - Select your Raspberry Pi device model. In this tutorial, we're using a Raspberry Pi 4, but you should choose the model you own.

3. **Choose an Operating System**:

   - The Raspberry Pi Imager gives you a choice of operating systems.
   - Options include the full Raspberry Pi OS, a lighter version, or other specialized OS choices like media players.
   - These choices are useful for various projects, such as digital signage.
   - For this tutorial, select the full Raspberry Pi 64-bit OS.

4. **Select the SD Card for Installation**:

   - Insert your SD card into your computer's card reader.
   - In the Raspberry Pi Imager, select this SD card as the destination for the OS installation.

5. **Customize the OS Settings (Optional)**:

   - Before imaging, you can customize your OS.
   - Click “Edit Settings” to access customization options.
   - Here you can:
     - Pre-fill Wi-Fi passwords from your system keychain.
     - Change the hostname of your Raspberry Pi.
     - Set a new username and password.
     - Enable SSH for remote access without needing to add a file to your SD card manually.
     - Use public key authentication by adding authorized keys.
   - You can also set the imager to play a sound when it's finished and to automatically eject the media once the process is complete.
   - Click “Save” once you are done with the customization.

6. **Confirm and Start the Imaging Process**:

   - After clicking save, confirm the application of your custom settings.
   - Be aware that proceeding will erase all data on the selected SD card. Ensure you're not deleting anything important.
   - The software will then image the SD card with your selected options.

7. **Final Steps**:
   - Once the imaging process is complete, and if you chose the option, the SD card will be ejected automatically.
   - You can then remove the SD card from your computer.
   - Insert the SD card into your Raspberry Pi and power it up.
   - Your Raspberry Pi should boot up with the new OS and settings you've configured.

This process makes setting up a new Raspberry Pi straightforward and customizable right from the beginning. It's particularly useful for ensuring your device is ready for network connectivity and remote access, which can be crucial for various Raspberry Pi projects.

## Raspberry Pi Disk Imager Video Transcript

In this Raspberry Pi tutorial I'm going to show you how you can quickly image a new SD card for your Raspberry Pi. If you navigate to raspberrypi.com then you can click on software. They have a special Raspberry Pi OS, Raspberry Pi imager and you can download it for your operating system. They have versions for Mac OS, Windows and Linux. Just click the download button, and then save it, and install it on your computer.

Once you've installed the Raspberry Pi Imager then you can choose your Raspberry Pi device, in this case I have a Raspberry Pi 4. You may have a different model, choose the appropriate one. You also get a choice of which operating system to choose for your Raspberry Pi and so you can choose the full operating system a smaller operating system or other general purpose or media players. These are really great for if you want to do some digital signage with your Raspberry Pi or other things like that.

Right out of the box I'm going to go ahead and install the full Raspberry Pi 64-bit OS and then you get to choose the storage. I have an SD card already mounted and I'm going to use that SD card. Then click next on the Raspberry Pi imager. You can actually customize the OS, so you can do things like set security keys and Wi-Fi passwords.

So I'm going to click edit settings, it allows you to pre-fill the Wi-Fi password from your system keychain you can go ahead and change your hostname to what want it to be, you can set a username and password, and you can also allow SSH. So this is a great way to allow you to SSH right into your Raspberry Pi on your own network right from the start without having to add a special file to your disk image. You can also use public key authentication and put your authorized keys right here. You can play a sound when finished and you can automatically eject the media.

Once you have all these things done you go ahead and click save. Then it asks you if you want to apply those customization settings and you can either clear them or click yes and then it warns you that you're going to erase all data on your external media make sure you're not erasing something important.

Then once it's done it will eject the disk if you asked it to and you can remove it from the SD card reader and put it in your Raspberry Pi and start working.
