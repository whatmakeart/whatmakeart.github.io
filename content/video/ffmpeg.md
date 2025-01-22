---
title: ffmpeg
date: 2024-02-26T08:51:07
lastmod: 2025-01-22T06:26:02
---

[FFMPEG](https://www.ffmpeg.org/) is a "A complete, cross-platform solution to record, convert and stream audio and video." [^ffmpeg]

## Install ffmpeg

While ffmpeg only provides the source code, there are installers for Windows, Mac, and Linux on the [ffmpeg.org download page](https://www.ffmpeg.org/download.html)

### Install ffmpeg on a Mac

1. [Install Homebrew](../coding/install-homebrew.md)
2. After installing [Homebrew](../coding/install-homebrew.md) then open a terminal window. You can search for the Terminal.app or find it in the "Other" folder.
3. Type `brew install ffmpeg` into the terminal window and press "Return"
4. Now you can use `ffmpeg` from the commandline

## ffmpeg Snippets

### Export all frames of video with 4 zeros

`ffmpeg -i input.mp4 %04d.jpg`

### Export only Keyframes

`ffmpeg -skip_frame nokey -i input.mp4 -fps_mode passthrough -f image2 keyframes-%02d.png`

[Export only Keyframes with ffmpeg Video Tutorial](./export-only-keyframes-from-video-as-images-ffmpeg.md)

- `-skip_frame nokey` skips all frames that are not keyframes
- `-fps_mode passthrough` tells FFmpeg to maintain the original frame timing without attempting to alter the frame rate.
- `-f image2` explicitly sets the output format to an image sequence

### Export every nᵗʰ frames

`ffmpeg -i input.mp4 -vf "select=eq(mod(n\,30)\,0)" -fps_mode vfr -vsync vfr -q:v 2 img_%03d.jpg`

- `-vf "select=eq(n\,30)"` Selects frames where the frame number (n) modulo 30 equals 0. This effectively picks every 30th frame.
- `fps_mode vfr` Maintains accurate timing for variable frame rate (VFR) videos.
- `vsync vfr` Ensures correct synchronization of frames in VFR output.
- `q:v 2` Ensures high-quality JPEG images. (1 = highest quality & 31 = lowest quality)
- `img_%03d.jpg` Saves extracted frames with a sequential naming convention like img_001.jpg, img_002.jpg, etc.

### Trim Video

`ffmpeg -ss 00:01:00 -to 00:05:00 -i input.MP4 -c copy output.mp4`

### Convert mp4 to avi

`ffmpeg -i input.mp4 output.avi`

## References

[^ffmpeg]: [ffmpeg.org](https://www.ffmpeg.org/)

[text](https://youtu.be/qBePDl2l2hI)
