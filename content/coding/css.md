---
title: CSS
date: 2023-05-23T21:59:41
lastmod: 2023-10-23T05:34:30
tags: CSS
---

CSS stands for Cascading Style Sheets and is the language used for the visual styling of most websites. CSS can be [added to a website](how-to-add-css-to-a-webpage.md) in multiple ways.

## CSS Crash Course

<div class="video-grid">

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/KW25-M00YTw?si=6nFyNaNyOvP6jziz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</div>

## CSS Articles

- [CSS Auditing Tools — Smashing Magazine](https://www.smashingmagazine.com/2021/03/css-auditing-tools/)
- [Chen Huijing - How I Design with CSS Grid](https://www.chenhuijing.com/blog/how-i-design-with-css-grid/)

## CSS Tutorials

### Bootstrap No Gutter Columns

http://julienmelissas.com/no-gutter-column-trick-for-bootstrap/ "Remove .container to go edge to edge ...""

```
.row.no-gutter {
  margin-right: 0;
  margin-left: 0;

> [class^="col-"],
> [class*=" col-"] {
    padding-right: 0;
    padding-left: 0;
  }
}
```

Remove Gutters from Columns with .no-gutter class

```
.no-gutter > [class*='col-'] {
    padding-right:0;
    padding-left:0;
}
```

https://scotch.io/bar-talk/bootstrap-3-tips-and-tricks-you-still-might-not-know

"Good tip regarding gutters. Just be aware that you need to offset any nested rows to accommodate the change in the parent. Here's an example in SASS:"

```
.slim-gutter [class*='col-'] {
margin-left: 0;
margin-right: 0;
padding-left: 5px;
padding-right: 5px;

.row {
margin: 0 -5px;
}

}
```
