---
title: Responsive iframe Embed
---

## Tutorial Description

iframes are not responsive by default. This code snippet shows how to add a bit of [CSS](css.md) and [HTML](html.md) to a webpage to make iframes responsive.

## Prerequisites

To complete this tutorial you should be familiar with [How-to-add-CSS-to-a-Webpage](./how-to-add-css-to-a-webpage.md) and basic [HTML](html.md).

## Instructions

The first step is to add the following [CSS](css.md) to your stylesheet. The padding bottom and height 0 are for 16:9 aspect ratio video embeds. If you want to make the iframe expand to the full frame of the page, remove the bottom padding and make the height 100%.

### CSS

```
.responsive-iframe-container { 
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-bottom: 56.25%; /* **16:9 Aspect Ratio (divide 9 by 16 = 0.5625)** */
  height: 0}

/* Then style the iframe to fit in the container div with full height and width */
.responsive-iframe-container iframe { 
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;}
```

Then you add the following HTML `<div>` wrapper with the class name `.responsive-iframe-container` around the iframe that you want to make responsive.

### HTML

```
<div class="responsive-iframe-container">
<iframe></iframe>
</div>
```

## Result

After following these instructions you should have an iframe that is responsive, meaning that it keeps its aspect ratio but changes in size as you switch devices or change the size of your browser window.

## Further Reading

[Web-Design](web-design.md) [How to Make an Artist Portfolio Website](../art-faq/artist-portfolio-website-how-to-guide.md)
