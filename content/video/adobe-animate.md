---
title: Adobe Animate
date: 2024-03-07T05:22:23
lastmod: 2024-03-07T05:22:35
---

### Animate CC Code Snippets

#### Animate CC ActionScript for Looping Animation

Loop animation X times - place code on desired end frame

```
if (!this.looped) this.looped = 1;
if (this.looped++ == 3) this.stop();

Frame 60 (Timeline endframe)
this.gotoAndPlay(0); // This loops the whole time line but can just click loop in publish settings
```
