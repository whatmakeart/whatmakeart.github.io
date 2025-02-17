---
title: 05.00 - Introduction
date: 2025-02-17T12:00:00Z
lastmod: 2025-02-17T07:43:17
---

## Overview

This module introduces the multimeter and explains how to use it to measure voltage, resistance, and current. Then the "Prototyping Triangle" is introduced as a way to simplify complex electronics projects into smaller components that can be worked on individually. The three main categories are hardware, software, and structure. The same technique is applied to coding by breaking up a program into functions with descriptive names. This essentially makes a todo list for completing the code and the project. [Multimeters](../../../../electronics/how-to-use-a-multimeter.md) are introduced as a troubleshooting tool.

As projects become more defined some parts will remain complex, and others will become simplified. A logic for the sequence of events become apparent. Each project requires different hardware, software, and structure but there are some common software patterns that are often helpful with micro-controller electronics projects such as with an Arduino. A finite state machine can organize and schedule multiple tasks in specific linear or non linear sequences. The state machine can also react to external inputs. Using timer functions that automatically update the previous time checked help further simplify code. The use of arrays, stored series of values, can help eliminated repeated code blocks, or at least shorten them. Continuing to break a project into small pieces while assembling the whole allows each piece to be worked on and tested individually.

## Learning Objectives

- Measure Voltage with a multimeter
- Measure Resistance with a multimeter
- Measure Continuity with a multimeter
- Turn a code snippet into a function
- Make a list of empty functions as a program skeleton
- use a reusable timer function to streamline code
- use a state machine to schedule tasks in sequence
- use an array to hold multiple values
- adapt timer function to exiting code

## Keywords

- Multimeter
- Continuity
- function
- COM
- Ω
- array
- scheduler
- state machine
- state
- `enum`
- `break;`
- function parameter
- `unsigned long`
- C reference `&` before variable
