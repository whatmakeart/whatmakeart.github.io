---
title: 06.00 - Introduction to Arduino Multitasking
date: 2023-02-24T09:30:00Z
lastmod: 2024-12-04T06:11:27
---

## Overview

As projects become more defined some parts will remain complex, and others will become simplified. A logic for the sequence of events become apparent. Each project requires different hardware, software, and structure but there are some common software patterns that are often helpful with micro-controller electronics projects such as with an Arduino. A finite state machine can organize and schedule multiple tasks in specific linear or non linear sequences. The state machine can also react to external inputs. Using timer functions that automatically update the previous time checked help further simplify code. The use of arrays, stored series of values, can help eliminated repeated code blocks, or at least shorten them. Continuing to break a project into small pieces while assembling the whole allows each piece to be worked on and tested individually.

## Learning Objectives

- use a reusable timer function to streamline code
- use a state machine to schedule tasks in sequence
- use an array to hold multiple values
- adapt timer function to exiting code

## Keywords

- array
- scheduler
- state machine
- state
- `enum`
- `break;`
- function parameter
- `unsigned long`
- C reference `&` before variable
