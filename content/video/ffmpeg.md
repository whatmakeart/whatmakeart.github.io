---
title: ffmpeg
date: 2024-02-26T08:51:07
lastmod: 2024-09-26T19:37:36
---

[FFMPEG](https://www.ffmpeg.org/) is a "A complete, cross-platform solution to record, convert and stream audio and video." [^ffmpeg]

## Install ffmpeg

While ffmpeg only provides the source code, there are installers for Windows, Mac, and Linux on the [ffmpeg.org download page](https://www.ffmpeg.org/download.html)

## ffmpeg Snippets

Export frames of video with 4 zeros

`ffmpeg -i input.mp4 %04d.jpg`

Convert mp4 to avi

`ffmpeg -i input.mp4 output.avi`

Export only Keyframes
`ffmpeg -skip_frame nokey -i input.mp4 -vsync 0 -r 30 -f image2 keyframes-%02d.png`

## References

[^ffmpeg]: [ffmpeg.org](https://www.ffmpeg.org/)
