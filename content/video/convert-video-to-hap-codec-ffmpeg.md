---
title: Convert Video to HAP Codec with ffmpeg
date: 2025-11-09T16:47:39
lastmod: 2025-12-16T07:32:34
---

<div class="video-grid">

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/D6pYEGMl6sI?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

</div>

[ffmpeg Convert Any Video to HAP](https://youtu.be/D6pYEGMl6sI)

Convert videos to the [HAP codec](https://hap.video/) with [ffmpeg](./ffmpeg.md) for use in [virtual production](./virtual-production/virtual-production.md) or other workflows that require HAP is straight forward. HAP is open source and was made for super high resolution playback buy leveraging GPU computation so to save CPU cycles and compute for other needs.

1. Make sure that you have ffmpeg installed.
2. Ensure that your installation of ffmpeg includes HAP.
3. Locate your video file and use one of the following commands with Terminal or the Command Prompt:[^using-hap]

Converts to plain HAP

```bash
ffmpeg -i input.mov -c:v hap output.mov
```

Converts to HAP Alpha

```bash
ffmpeg -i input.mov -c:v hap -format hap_alpha output.mov
```

Converts to HAP Q

```bash
ffmpeg -i input.mov -c:v hap -format hap_q output.mov
```

### HAP Resources

[HAP GitHub repository](https://github.com/vidvox/hap)

## References

[^using-hap]: [Using HAP](https://hap.video/using-hap)
