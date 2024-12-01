---
title: ffmpeg
date: 2024-02-26T08:51:07
lastmod: 2024-12-01T17:08:27
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

Export every n frames
`ffmpeg -i input.mp4 -select=not(mod(n\,13) -q:v 2 -vframes -o frame%03d.jpg`
`ffmpeg -i input.mp4 -vf "select=not(mod(n\,30))" -fps_mode vfr img_%03d.jpg`

Trim Video
`ffmpeg -ss 00:01:00 -to 00:05:00 -i input.MP4 -c copy output.mp4`

## References

[^ffmpeg]: [ffmpeg.org](https://www.ffmpeg.org/)
