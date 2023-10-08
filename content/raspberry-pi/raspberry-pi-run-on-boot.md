---
title: Raspberry Pi Auto Start Scriptss
date: 2023-05-23T21:59:41
lastmod: 2023-10-08T07:06:12
---

## Crontab

Crontab is a method that can be used for programs meant to run in the background.

Create a python or bash script that you intend to run when the Raspberry Pi starts. Test the program to make sure it works. Also test running the program from the terminal to ensure you have the correct path to the file.

Then it is time to edit the crontab file with a text editor. Open a terminal window and type `sudo crontab -e` If you have not selected a default text editor, a prompt may appear. Select the nano editor for now.

At the end of the crontab file is where you add the information about the program you want to run at startup. Type '@reboot python3 /home/pi/program-to-run-at-startup.py' of course change the directory and filename to the correct ones for your system.

Press 'Control O' to save and then 'Control X' to exit.

## Auto Start Scripts

To start the Terminal on the desktop can be done with an additional line to the autostart file. [^1] To Edit the autostart file, type the following into Terminal on your Raspberry Pi.

'''
nano ~/.config/lxsession/LXDE-pi/autostart
'''

Then at the end of the autostart file add `x-terminal-emulator` or `lxterminal` to start the Terminal. If you want to run commands, then make a file with your commands and add another line to the autostart file to run your command file. `@lxterminal -e bash /home/pi/your-script-here` for bash commands, or `@lxterminal -e python3 /home/pi/your-script-here.py` for Python programs.

### Run Python Using Autologin and profile

This method allows the Pi to automatically login as the pi user and then runs a Python script. The screen is up an running so text output from the script can be seen. [^2]

To setup the Pi to automatically login, type the following into a terminal window command prompt:

'''
sudo raspi-config
'''

After pressing `Enter` or `return` on your keybord, a menu pops up. Under `Boot Options` find 'Desktop/CLI' and selection the option `COnsole Autologin`. This will have the Pi automatically login on boot.

To edit the profile file, type the following into a terminal window:

'''
sudo nano /etc/profile
'''

At the bottom of the profile file, add a line to run your Python script. Add a `&` at the end of the line if you want a script with an endless loop to run in the background without displaying any text output.

'''
sudo python3 /home/pi/your-script.py &
'''

### Rebooting in readonly and writable modes

'''
sudo /root/reboot-to-readonly-mode.sh

sudo /root/reboot-to-writable-mode.sh
'''

### Running After the GUI Starts

[https://www.raspberrypi.org/forums/viewtopic.php?t=118069](https://www.raspberrypi.org/forums/viewtopic.php?t=118069)

> To run after the GUI starts at startup try putting the relevant command in ~/.config/lxsession/LXDE-pi/autostart Type sudo nano ~/.config/lxsession/LXDE-pi/autostart in terminal Eg. To run a python script use... @sudo /usr/bin/python /home/pi/filename.py Press CTRL & X, then Y to save. To Make the file executable with sudo chmod +x filename.py It will run after the gui starts

> from - [https://www.raspberrypi.org/forums/viewtopic.php?t=202549](https://www.raspberrypi.org/forums/viewtopic.php?t=202549)

Another Method that may be better - [https://www.raspberrypi.org/forums/viewtopic.php?t=126264](https://www.raspberrypi.org/forums/viewtopic.php?t=126264)

[^1]: [Raspberry Pi Forums Thread on AutoStart](https://www.raspberrypi.org/forums/viewtopic.php?f=63&t=199672)
[^2]: [https://www.raspberrypi-spy.co.uk/2015/02/how-to-autorun-a-python-script-on-raspberry-pi-boot/](https://www.raspberrypi-spy.co.uk/2015/02/how-to-autorun-a-python-script-on-raspberry-pi-boot/)
