---
title: 11.00 Introduction
date: 2026-04-01T09:00:00-04:00
lastmod: 2026-04-01T08:31:57-04:00
---

## Motive

- Launch Motive from the Tracking PC in the XR Studio
- 32 Optitrack Infrared Cameras
- Tracking PC located in the rack and can be shut down or reset from there if needed
- Need to unblug the ethernet from the Cine puck on top of the camera so it does not interfere with the motion capture tracking

### Tips for Motin Tracking

- avoid reflective surfaces on sets and clothing
- especially retroreflective fabrics on athletic wear
- there are active and passive tracking markers
  - passive markers are reflective or retro reflective materials such as the balls on a mobcap suit
  - active markers emit infrared light from an led or the source each active marker sends light pulses at a specific and unique rate so the tacking computer can intensity it
- During calibration there is a masking step
- Keep camera exposure at 200 unless needed, too high of an exposure will capture other reflective surfaces in the studio such as the floor and create dead zones

## Optitrack Calibration

- Calibration Tools are in the Storage Room
- assemble the calibration wand by lining up the contacts and the indents on the wand
- Put the battery in last and pull it out first from the active wand
- select new calibration and the camera boxes will show on the screen
- clear all the masks (make sure wand is off)
- after clearing the masks then click mask and wait for it to mask everything (skip turns into a continue button)
- turn on the wand
- If there are lots of lines to the wand go to general settings and toggle the calibration visuals off and on
- wave the wand around like a windshield wiper around the whole room until all the cameras are green
- then click start calculating
- after calculating the goal is to get and "exceptional" calibration result
- turn off wand, remove battery
- when done with calibration, take it apart and put back in the box

### Calibrate Ground Plane

- Turn on switch
- place the screw foot on the world origin marked on the floor of the XR Studio
- align with the wall in the space
- square with the concrete seam in the floor pointed toward the garage door and the led screen
- Click set ground plane in Motive
- make sure it looks level and a good representation of the room

## Mocap Suit

- take shoes off
- Get right and left booties
- tuck the shirt in tight and attach to the hook and loop sections of the inside pants

## Builder

Make rigid bodies for mocap or skeletons for mocap

### Skeleton Builder

select the template such as the core 50
