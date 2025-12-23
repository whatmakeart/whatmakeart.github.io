---
title: How to Add CSS to a Webpage
date: 2023-05-23T21:59:40
lastmod: 2025-12-23T10:12:35-04:00
---

There are three ways to add [CSS](css.md) to a webpage, inline CSS, internal CSS, and external CSS. All of these methods can be used directly with [html](html.md) or inserted dynamically with [javascript](javascript.md).

## Inline CSS

Inline CSS is applied directly to an HTML element using the `style` attribute. This method is useful for making minor changes to the appearance of a single element, but it is not recommended for styling multiple elements or entire web pages.

To add inline CSS, simply add the `style` attribute to the HTML element you want to style and specify the CSS properties you want to apply. For example, the following code will set the font color of the `<p>` element to red:

```html
<p style="color: red;">This paragraph is red.</p>
```

## Internal CSS

Internal CSS is added to the `<head>` section of an HTML document using the `<style>` element. This method is useful for styling multiple elements on a single page, but it can be cumbersome to maintain if you have a large website with many pages.

To add internal CSS, simply add a `<style>` element to the `<head>` section of your HTML document and specify the CSS properties you want to apply. For example, the following code will set the font color of all `<p>` elements on the page to red:

```html
<head>
  <style>
    p {
      color: red;
    }
  </style>
</head>
```

## External CSS

External CSS is added to an HTML document using the `<link>` element. This method is the most efficient way to style multiple pages on a website, because you can create a single CSS file and link to it from all of your HTML pages.

To add external CSS, simply add a `<link>` element to the `<head>` section of your HTML document and specify the URL of the CSS file. For example, the following code will link to an external CSS file named `my_styles.css`:

```html
<head>
  <link rel="stylesheet" href="my_styles.css" />
</head>
```

### Which CSS Method Should You Use?

The best method for adding CSS to your webpage depends on your specific needs. If you only need to make minor changes to the appearance of a single element, then you can use inline CSS, but this becomes unwieldy and hard to make changes. Therefore, if you need to style multiple elements or entire web pages, then you should use internal or external CSS. External CSS is the most recommended method for styling multiple pages on a website, because it is the most efficient and scalable.

### Tips for Adding CSS to Your Webpages

- Use CSS selectors to target specific elements on your webpage.
- Use CSS media queries to adjust the appearance of your webpage for different devices and screen sizes, an important part of responsive web design.
- Use a CSS preprocessor, such as Sass or LESS, to make your CSS code more maintainable and reusable.
