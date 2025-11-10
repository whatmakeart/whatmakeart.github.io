---
title: Convert Video to HAP Codec with ffmpeg
date: 2025-11-09T16:47:39
lastmod: 2025-11-10T04:19:05
---

Convert videos to the [HAP codec](https://hap.video/) with [ffmpeg](./ffmpeg.md) for use in [virtual production](./virtual-production/virtual-production.md) or other workflows that require HAP is straight forward. HAP is open source and was made for super high resolution playback buy leveraging GPU computation so to save CPU cycles and compute for other needs.

1. Make sure that you have ffmpeg installed.
2. Ensure that your installation of ffmpeg includes HAP.
3. Locate your video file and use one of the following commands:[^using-hap]
   - `ffmpeg -i input.mov -c:v hap output.mov` converts to plain HAP
   - `ffmpeg -i input.mov -c:v hap -format hap_alpha output.mov` converts to HAP Alpha
   - `ffmpeg -i input.mov -c:v hap -format hap_q output.mov` converts to HAP Q

### HAP Resources

[HAP GitHub repository](https://github.com/vidvox/hap)

## References

[^using-hap]: [Using HAP](https://hap.video/using-hap)
