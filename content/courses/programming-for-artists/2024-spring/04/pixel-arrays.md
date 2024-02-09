---
title: Pixel Arrays
date: 2024-02-09T09:30:00
lastmod: 2024-02-09T07:53:15
---

p5.js stores all of the pixels for the canvas in an array called `pixels`. Each pixel is represented by 4 index locations in the array for its red, blue, green, and alpha values.

The pixel number = (x + y \* width) [^train-pixels]

Lets try from pixel #28.

- x = 4
- y = 3
- width = 8
- 4 + 3 * 8 \_remember order of operations so this is 4 + (3*8)\_
- 4 + 24
- 28

<div class="responsive-table-markdown">

| Index | 0   | 1   | 2   | 3   | 4      | 5   | 6   | 7   |
| ----- | --- | --- | --- | --- | ------ | --- | --- | --- |
| **0** | 0   | 1   | 2   | 3   | 4      | 5   | 6   | 7   |
| **1** | 8   | 9   | 10  | 11  | 12     | 13  | 14  | 15  |
| **2** | 16  | 17  | 18  | 19  | 20     | 21  | 22  | 23  |
| **3** | 24  | 25  | 26  | 27  | **28** | 29  | 30  | 31  |
| **4** | 32  | 33  | 34  | 35  | 36     | 37  | 38  | 39  |
| **5** | 40  | 41  | 42  | 43  | 44     | 45  | 46  | 47  |
| **6** | 48  | 49  | 50  | 51  | 52     | 53  | 54  | 55  |

</div>

## References

[^train-pixels]: [Coding Train p5.js Pixel Array Example](https://editor.p5js.org/codingtrain/sketches/A92PDk-1z)
