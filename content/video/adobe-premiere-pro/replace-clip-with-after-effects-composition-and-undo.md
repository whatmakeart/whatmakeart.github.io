---
title: Replace Clip with After Effects Composition and Undo
date: 2024-09-24T08:46:55
lastmod: 2025-09-30T17:53:45
---

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/yWgizCYYohQ?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

[Replacing a clip in Adobe Premiere with an After Effects composition](https://youtu.be/yWgizCYYohQ) using dynamic linking can streamline video editing, but easily reversing the process takes a bit of preparation. Dynamic linking between Adobe Premiere and After Effects allows for seamless integration. Any changes made in After Effects will automatically update in Premiere. The problem with the traditional approach is that once a clip is replaced with an After Effects composition, the original clip is no longer easily accessible in Premiere. If you want to go back, it can be tricky, especially if you’ve made edits in Premiere.

## Make Replace Clip with After Effects Composition Reversible

### Option 1: Duplicate the Clip Before Replacing

1. Hold `Alt (or Option on Mac)` and drag to **duplicate** the clip in the timeline. This keeps the original clip below the duplicated one.
2. Right-click the **duplicated clip** and select `Replace with After Effects Composition`
3. Make your changes in After Effects as before, and save.
4. You now have both the dynamically linked clip and the original clip in your timeline, allowing you to hide or delete the After Effects version if needed, reverting to the original clip easily.

### Option 2: Using Nested Sequences for Multiple Clips

1. If you're working with multiple clips and want to avoid a cluttered timeline:
2. Select the multiple clips in Premiere, right-click, and choose `Nest` to create a nested sequence. Label it appropriately.
3. Right-click the nested sequence and choose `Replace with After Effects Composition`
4. The nested sequence will now open in After Effects, allowing you to edit all the clips within After Effects.
5. Save the After Effects project, and return to Premiere where the entire sequence is dynamically linked.
6. If you want to go back to your original sequence, you can simply drag the nested sequence back into the timeline, keeping all your original edits.

### Workflow Recommendations

- Always make a rough edit before sending clips to After Effects. This ensures that you’re not spending time applying effects to footage that won’t make it into the final cut.
- For single clips, duplicating the clip and replacing the duplicate in After Effects is an easy way to maintain flexibility.
- For multiple clips, nesting the sequence before replacing it ensures a cleaner workflow, especially if you need to undo the process later.
