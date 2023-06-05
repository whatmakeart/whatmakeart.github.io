---
title: "05.05 Project Prototype Triangles"
date: 2020-01-26T23:11:13Z
draft: false
---

## Assignment Deliverables

Upload a document that contains 3 lists:

1. List of hardware components
2. List of software / code components
3. List of structure components

For each item in each list:

1. Write a description on how it contributes to the whole project.
2. What is the status in terms of completion?
3. What is the next step to make progress on the component?

## Assignment Overview

Now that we have moved past the initial proposal stage of out electronics projects, we need to begin making a prototype. Trying to make the prototype all at once can be overwhelming and impossible. Then we will break the project into three main components, hardware, software, and structure. Then we will break those big components down into their individual components. Adding descriptions for each component forces you to articulate why it is part of the project and what task or function it performs. Finally, stating the next physical action needed to make progress on the component gives us an instruction manual of what to do next. What is the next physical action? It could be browsing the web to find a module, or code. It could be trying to get the code to work without `delay();`. It could be cutting cardboard or plywood into a support structure. If could be writing down a list of questions for your instructor. Think about what would you do as the absolute next step if the only thing you had to do in life was complete that component.

## Process

1. Break project into categories: Hardware, Software, Structure.
2. Break each category into individual components.
3. Add description to each component about what it does and how it fits into the project.
4. Write what the completion status of the component is. Finished, Almost Done, In progress, Barely Started, Not Started.
5. Write the next physical action step needed to make progress on the component.

## Example

<div class="responsive-table-markdown">

| **Component**                         | **Description**                                                                 | **Status**  | **Next Step to Make Progress**                                |
| ------------------------------------- | ------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------- |
| **Hardware**                          |                                                                                 |             |                                                               |
| Lever to raise and lower toast        | This lever is needed to move the toast and the body needs to be built around it | Not Started | Design toast receiver                                         |
| Heating element                       | Heats the toast and is on both side of the toaster, controlled by a timer       | Not Started | Buy heating element to test settings                          |
| Power Supply / cord                   | Used to put power safely into the toaster                                       | Not Started | Buy long enough cord                                          |
| Knob to select toast doneness         | Could have 3-4 settings for light, medium, dark, burnt                          | In progress | Hook up to Timer to make different time durations             |
| Mechanism to raise and lower toast    | Needed to get the toast in and out of the toaster                               | Not Started | Research different mechanisms and take notes                  |
| LED to indicate that Toaster is on    | Safety feature to let people know that the toaster is on.                       | Completed   | Have code that switches LED on when desired                   |
| **Software**                          |                                                                                 |             |                                                               |
| `checkIfToastInserted(); `            | Check if toast is inserted and lever is pressed down                            | In Progress | Test distance settings with sensor                            |
| `checkToastSetting(); `               | Check if toaster is set to light or dark                                        | Not Started | Get Photo Sensor                                              |
| `setTimer();`                         | Set timer based on the toast setting                                            | In progress | Make different timers based on knob setting                   |
| `turnOnHeatingElement();`             | If timer is set, then turn on the toaster heater                                | Not Started | Get relay to turn on heater                                   |
| `turnOnLED();`                        | If heater is on, then turn on LED                                               | Completed   | N/A                                                           |
| `checkTimer();`                       | Check if the timer is finished                                                  | In progress | Convert `millis();` timer to toast timer                      |
| `turnOffHeatingElement(); `           | If timer is finished, then turn off the toaster heater                          | Not Started | Use relay to turn off heating element                         |
| `turnOffLED();`                       | If heater is off, then turn of LED                                              | Completed   | N/A                                                           |
| `popUpToast();`                       | If the heating element and the timer are finished, then pop up the toast        | Not Started | Translate LED blink to pop up                                 |
| `waitForNewToast();`                  | Standby mode waiting for a new piece of toast                                   | Not Started | Decide how long to wait before checking for new toast         |
| **Structure**                         |                                                                                 |             |                                                               |
| Exterior Housing                      | Protective layer that keeps heat and electricity inside the toaster             | Not Started | Make a sketch of the housing that fits around parts           |
| Interior brackets and mounting points | Used to hold the mechanisms and heating element in place                        | Not Started | Measure objects to design bracket at correct size             |
| Screws                                | Keep everything in place                                                        | Not Started | Look at existing toasters to see what type of screws are used |
| Heat shielding                        | Barrier between the electronics and the heating element                         | Not Started | Get piece of metal to test distance from heating element      |
| Gap for lever to move                 | Space for the lever to move                                                     | Not Started | Measure the lever                                             |
| Opening for toast                     | Allows the toast to be put in, should be wide                                   | Not Started | Measure different pieces of bread                             |

</div>
