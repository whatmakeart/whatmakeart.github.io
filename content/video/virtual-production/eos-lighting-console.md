---
title: EOS Lighting Console
date: 2025-11-11T04:30:48
lastmod: 2025-11-12T09:01:02
---

Channels tell the console which lights to send commands to or which lights to operate. The channels are then _patched_ to dimmers and multi channel devices such as movers and other DMX fixtures.

DMX has universes of 512 addresses. There can be multiple universes but each DMX universe has a maximum of 512.

## To Select a Channel

### To Select Chanel 201

- Type`201` then `Enter`

## Patching

### To Patch by Channel

1. Type the channel number `201`
2. Type `@`
3. Type Address number such as `257`

### To Patch to a Specific DMX Universe such as Universe 2

1. Type the channel number `202`
2. Type `@`
3. Type the DMX universe number `2`
4. Type `/`
5. Type Address number such as `106`
6. The DMX addess becomes 512 + 106 or 618

## Removing Patches

### Remove address from a channel

1. Type the channel number `201`
2. Type `@`
3. Press `Enter`
4. Press `Enter` again for the Please Confirm in red
5. This removes the address from the channel but doesn not remove whta type of fixture it is or other information that might be present.

### Remove Patch from a Fixture

1. Type the channel number `201`
2. Type `@`
3. In Page 2 click the onscreen button for Unpatch
