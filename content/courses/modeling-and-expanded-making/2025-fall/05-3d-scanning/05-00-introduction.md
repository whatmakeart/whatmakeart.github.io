---
title: 08.00 Introduction
date: 2025-09-26T09:30:00
lastmod: 2025-09-26T07:37:04
---

## Overview

[Photogrammetry](../../../../3d-modeling/photogrammetry.md) is a useful tool for capturing 3D Geometry and visual texture information from the real physical world. It is accessible with little more than a cell phone camera needed for compelling results. While purpose built, industrial photogrammetry rigs and workflows can achieve a high level of accuracy, general photogrammetry often produces stunning visual textures but underwhelming 3D geometry.

[3D Scanning](../../../../3d-modeling/3d-scanning.md) with Structured Light scanners and LiDAR scanners offer more precision than photogrammetry. Structured Light scanning projects a known pattern of light at a 3D object. Two cameras record the light that bounces back to them and measure its deformations from reflecting off the 3D surface of the object. The two cameras use triangulation to reconstruct where the points of the object are in space.

LiDAR shoots lasers out and waits for the return bounce of the lasers from the object. It calculates the position of different points of the objects based on the travel time of emitted light to create a point cloud. This is similar to radar except the "L" stands for laser instead of the "r" for radio in radar.

## Learning Objectives

- Identify differences between photogrammetry, LiDAR scanning, and structured light scanning
- Capture a 3D scan with a structured light scanner
- Process the raw data from a 3d Scan into a useable mesh
- Clean up a 3D scanned mesh in mesh modeling software for import into parametric modeling software

## Keywords

- LiDAR Scanning
- Structured Light Scanning
- Point cloud
