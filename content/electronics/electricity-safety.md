---
title: Electricity Safety
---

# On Page Link Type Test

Checking which styles of links work on a page that includes this markdown file and whether it can work on GitHub, Visual Studio Code, the Include Page and the Original Page at the same time.

- Include Page = [/courses/experiments-in-electronic-arts/2023-spring/01-basic-electronics-introduction/1-02-electrical-safety.md](/courses/experiments-in-electronic-arts/2023-spring/01-basic-electronics-introduction/1-02-electrical-safety.md)
- Original Page = [/electronics/electricity-safety.md](/electronics/electricity-safety.md)

Options #1 and #2 are possible but need to work on the included page.

### 1 Link below with no folder `electricity-basics.md`

[Electricity](electricity-basics.md) can be dangerous and deadly, even at low voltages. It is important to follow safety practices.

| Context            | Works |
| ------------------ | ----- |
| Include Page       | No    |
| Original page      | Yes   |
| Visual Studio Code | Yes   |
| GitHub             | Yes   |

### 2 Link below with no folder but `./` `./electricity-basics.md`

[Electricity](./electricity-basics.md) can be dangerous and deadly, even at low voltages. It is important to follow safety practices.

| Context            | Works |
| ------------------ | ----- |
| Include Page       | No    |
| Original page      | Yes   |
| Visual Studio Code | Yes   |
| GitHub             | Yes   |

### 3 Link below with no folder but `../` `../electricity-basics.md`

[Electricity](../electricity-basics.md) can be dangerous and deadly, even at low voltages. It is important to follow safety practices.

| Context            | Works |
| ------------------ | ----- |
| Include Page       | No    |
| Original page      | Yes   |
| Visual Studio Code | Yes   |
| GitHub             | No    |

### 4 Link below with no prefix `electronics/electricity-basics.md`

[Electricity](electronics/electricity-basics.md) can be dangerous and deadly, even at low voltages. It is important to follow safety practices.

| Context            | Works |
| ------------------ | ----- |
| Include Page       | Yes   |
| Original page      | Yes   |
| Visual Studio Code | No    |
| GitHub             | No    |

### 5 Link below with leading `/` for root relative link `/electronics/electricity-basics.md`

[Electricity](/electronics/electricity-basics.md) can be dangerous and deadly, even at low voltages. It is important to follow safety practices.

| Context            | Works |
| ------------------ | ----- |
| Include Page       | Yes   |
| Original page      | Yes   |
| Visual Studio Code | No    |
| GitHub             | No    |

### 6 Link below with leading `./` for file relative link `./electronics/electricity-basics.md`

[Electricity](./electronics/electricity-basics.md) can be dangerous and deadly, even at low voltages. It is important to follow safety practices.

| Context            | Works |
| ------------------ | ----- |
| Include Page       | Yes   |
| Original page      | No    |
| Visual Studio Code | No    |
| GitHub             | No    |

## Basic Electrical Safety Checklist

- Always unplug a device from it's power source or de-energize a circuit before working on it
- Don't assume a circuit is de-energized, confirm with appropriate testing equipment that has been confirmed working on a known live circuit
- Never work with powered devices or circuits in wet or damp areas
- Don't have exposed conductors or wires
- Use tools with nonconductive handles and or coatings to reduce shock risk
- Don't touch electrical devices with wet hands or with wet clothes
- Keep workspace clear of debris and hazards
- inspect cords and equipment before use, never use frayed cords, cords with damaged insulation, or damaged plugs

## Extra Heading for TOC Test

This is to test a parsed table of contents in an included page.

### Third Level Heading

More fun text below.
