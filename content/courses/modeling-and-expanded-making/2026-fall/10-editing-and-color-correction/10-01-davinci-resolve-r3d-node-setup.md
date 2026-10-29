---
title: 10.01 Davinci Resolve R3D Node Setup
date: 2026-10-29T09:00:00-04:00
lastmod: 2026-10-29T09:21:36-04:00
---

## Davinci Resolve Project Settings for R3D Footage

- Color Management
  - Lookup Tables
    - Switch the 3D lookup table interpolation → `Tetrahedaral`
- Camera Raw
  - Raw Profile → `RED`
  - Decode Quality → `Full res. premium`
  - Bit Depth → `16`

## Importing R3D Footage into Davinci Resolve

- Import via the Resolve importer not from the OS file system
- Add to the Media Pool

## Create Nodes

_If you have already set your global Project Settings > Color Management to DaVinci YRGB Color Managed with a timeline space of DWG/Intermediate, DaVinci handles the conversion and you do not need the first node to transform to DWG._

1. Fist Node - Input Device Transform (IDT) 1st node convert from camera to davinci wide color space wide gamma
2. Second Node - Exposure
   - Set the Pivot point form REc 709 0.435 to DWG 0.336
3. Third Node - White Balance
4. Fourth Node - Contrast
   - Saturation
5. Fifth Node - Look and Color Grading
6. Sixth Node - Output Device Transform (ODT)Last node converts Davinci wide gamut to Rec 709
