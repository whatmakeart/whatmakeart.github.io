---
title: Remote Control Unreal Engine
date: 2025-10-14T05:22:36
lastmod: 2025-10-15T07:43:59
---

1. Turn on / Enable two Unreal Plugins
   - Remote Control API
   - Remote Control Web Interface
2. In Content drawer in miscellaneous select remote control preset to create a new preset
   - label the preset
3. Open the preset by double clicking on it
4. Open up remote control settings in project settings or by button in preset
5. Set the Web Control Interface Http Port and note its number
6. Go to UPD Messaging settings - Not the IP address of Unreal
7. Select an actor, such as a light while at the same time keeping the preset open
8. Click on the 3 dots on the right hand side of the actor properties
9. select expose property and it will show up in the preset
10. Select the open web interface button in the preset
11. Now add controls by toggling to the design workspace
12. Select the properties tab
13. drag over the items you want to control in the web interface
14. choose the look and feel of the tools such as slider vs dial
15. To connect from an external device on the same network navigate to the IP address and add the port at the end

When Launching from the commandline use the following flag to enable web remote control `-RCWebControlEnable -RCWebInterfaceEnable` [^unreal-remote-control]

## References

[^unreal-remote-control]: [Unreal Remote Control 5.5](https://dev.epicgames.com/documentation/en-us/unreal-engine/remote-control-for-unreal-engine?application_version=5.5)
