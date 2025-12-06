---
title: 13.02 Unreal Shot Controller Blueprint
date: 2025-11-21T09:30:00
lastmod: 2025-12-06T06:26:35
---

## Level Blueprint

This level blueprint has an Event Tick for Exposing Shot Index variable to disguise.

<script src="../bp-render.js" bp-file="../bp-level.txt"></script>

## BP_RS_ShotController Blueprint

### Construction Script

This script creates the array of camera shots. You can add as many slots as needed.

<script src="../bp-render.js" bp-file="../construction-script.txt"></script>

### ApplyShotIndex function

<script src="../bp-render.js" bp-file="../applyshotindex-function.txt"></script>

### StoreCurrentShotFunction

<script src="../bp-render.js" bp-file="../storecurrentshot-function.txt"></script>

### Event Graph

<script src="../bp-render.js" bp-file="../event-graph.txt"></script>
