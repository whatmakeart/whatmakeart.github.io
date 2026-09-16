---
title: 04.02 Podcast Recording Instructions
date: 2026-09-16T12:00:00-04:00
lastmod: 2026-09-16T06:49:31-04:00
---

Begin with the stereo mix unless you can identify a specific problem that requires the isolated microphone tracks. The stereo mix keeps every speaker synchronized and works well with Premiere Pro's transcription tools. The isolated tracks remain available when one voice needs separate repair or balancing.

## Choose the Right Workflow

<div class="responsive-table-markdown">

| Recording condition                                    | Recommended workflow                                                                                                |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| Voices are clear and reasonably balanced               | Edit the stereo mix in Premiere Pro.                                                                                |
| One voice is consistently too loud or quiet            | Balance the isolated tracks in Audition, export a new full-length stereo mix, and then begin the Premiere Pro edit. |
| One microphone has noise, clipping, or rumble          | Repair that isolated track conservatively in Audition before beginning the Premiere Pro edit.                       |
| The conversation needs extensive restructuring         | Use Premiere Pro Text-Based Editing with the stereo mix.                                                            |
| The project requires detailed control over every voice | Complete a manual multitrack edit and mix in Audition instead of relying on the introductory workflow.              |

</div>

Decide whether the recording needs Audition before making structural edits in Premiere Pro. A repaired mixdown should remain exactly the same length as the original recording so that its transcript and timing remain synchronized.

## 1. Preserve and Organize the Recording

Copy the complete RØDECaster recording folder and place the untouched copy inside `01 Original RODECaster Recording`. Do not rename, process, or delete anything in that folder. Spot-listen to the stereo mix at the beginning, middle, and end, confirming that all speakers are present and the recording plays correctly.

Identify the isolated microphone tracks and note which speaker belongs to each channel. Depending on how the RØDECaster recording was transferred, the isolated channels may appear as separate WAV files or as channels inside one multichannel file. Export or separate those channels only if you need to work with them in Audition. Create the Premiere Pro project inside `02 Premiere Project`.

## 2. Build a Transcript-Based Rough Cut in Premiere Pro

Text-Based Editing is most useful for finding, removing, and rearranging ideas. It creates a rough cut by applying transcript edits to the timeline, but it does not replace careful listening or precise audio editing.

1. Import the stereo mix into Premiere Pro.
2. Open **Window > Text**, select **Transcript**, and double-click the stereo mix in the Project panel so that it is the active source.
3. Select **Transcribe**. Choose the correct spoken language and enable speaker labeling when it is available.
4. Correct important names and obvious transcription errors. Correcting transcript text improves navigation but does not change the recorded words.
5. Create a new sequence and place the stereo mix on audio track A1 at the beginning of the timeline. If Premiere asks for video settings, a standard 1920 × 1080 sequence preset is sufficient for this audio-focused project and also leaves the option of making a YouTube version later.
6. Select the Timeline panel to display the sequence transcript.
7. Duplicate the sequence and name the untouched version `Podcast Full Recording`.
8. Name the working duplicate `Podcast Rough Cut` and make all editorial changes in that sequence.

When the sequence transcript is active, selecting and deleting transcript text removes the corresponding portion of the recording and applies a ripple edit to close the gap. Text can also be cut, copied, and pasted to rearrange sections. Before deleting anything, confirm that you are viewing the sequence transcript rather than only editing the spelling in a source transcript.

### Edit for Meaning

Use the transcript to locate false starts that are immediately repeated, long technical interruptions, duplicated explanations, unrelated tangents, and sections that do not support the driving question. Shorten pauses when they weaken the pacing, but do not automatically remove every pause, breath, “um,” or repeated word. Premiere can detect pauses and filler words, but a bulk deletion can make a speaker sound rushed, unnatural, or misrepresented.

After every text edit, listen across the cut. Confirm that the intended meaning has not changed and that the speaker does not sound interrupted. If a word, breath, laugh, or section of room tone ends unnaturally, refine the edit directly in the timeline. A shorter edit is not automatically a clearer or more engaging edit.

## 3. Refine Dialogue with Audio Time Units

Premiere normally displays and edits time in video frames. A frame is often too large for a precise dialogue edit. Open the Timeline panel menu and enable **Show Audio Time Units**. Premiere can then display audio in samples or milliseconds, allowing audio clips and edit points to be adjusted more precisely than one video frame.

Zoom into the waveform and trim dialogue at natural boundaries between words, breaths, and phrases. Preserve a small amount of room tone when silence would create an obvious hole. Avoid cutting through consonants or removing the beginning of a breath while leaving its ending.

If a cut clicks or the room tone changes abruptly, add a very short **Constant Power** audio transition and adjust it by ear. A crossfade will not repair a poorly chosen edit point, and long crossfades may cause two words or breaths to overlap. Listen to the finished edit once through headphones and again through speakers.

## 4. Use Audition When the Mix Needs More Control

If the stereo mix is already clear and balanced, continue in Premiere Pro. Use Audition when an individual microphone must be adjusted separately. Complete this repair before restructuring the conversation in Premiere.

1. Create an Audition multitrack session at **48,000 Hz**.
2. Import the isolated microphone WAV files and place every file at exactly the same starting time.
3. Label each track with the speaker's name and preserve the original files.
4. Use clip gain to bring the voices into a similar range before applying effects.
5. Repair clipping, hum, rumble, or steady noise conservatively. Silence or reduce another speaker's microphone only when bleed is distracting.
6. Apply EQ and compression lightly, then use track-volume automation for words or sections that remain uneven.
7. Export a full-length stereo WAV mixdown at **48 kHz, 24-bit**.
8. Import the corrected mixdown into Premiere Pro and use it in place of the original stereo mix before beginning the transcript-based edit.

Avoid heavy noise reduction. Metallic or watery processing artifacts are often more distracting than quiet, consistent room noise. De-clipping may soften distortion, but it cannot reconstruct audio that was never recorded.

## 5. Shape the Finished Episode

The finished podcast should have an intentional opening, development, and ending. Begin by identifying the topic and establishing the driving question. Arrange the strongest parts of the conversation so that ideas develop rather than merely repeat. Conclude with a final thought, discovery, disagreement, or return to the original question.

Music and sound effects are optional. Use only audio that you created or have permission to use, include required credits, and keep music well below the dialogue. Fade music in and out rather than allowing it to begin or end abruptly. Music should support the structure, not cover an unclear edit.

## 6. Balance and Review the Final Mix

Listen to the complete podcast without stopping, make notes, and then revise. Pay attention to changes in voice level, audible edits, clicks, cut-off words, distracting breaths or handling noise, accidental pauses, rushed pacing, and music that competes with speech. The opening and ending should feel intentional, and the master meter should never clip.

For a stereo podcast, a useful delivery target is approximately **−16 LUFS integrated** with true peaks no higher than **−1 dBTP**. This is a final-program target, not a reason to compress every voice heavily. If loudness measurement is not part of the exercise, prioritize consistent dialogue and a master output that never reaches 0 dBFS.

## 7. Export and Verify

Export an archival master and a smaller listening copy:

<div class="responsive-table-markdown">

| Version         | Format | Settings                   | Filename                                           |
| --------------- | ------ | -------------------------- | -------------------------------------------------- |
| Archival master | WAV    | 48 kHz, 24-bit, stereo     | `YYYY-MM-DD Lastname Firstname Podcast Master.wav` |
| Listening copy  | MP3    | 192 kbps or higher, stereo | `YYYY-MM-DD Lastname Firstname Podcast.mp3`        |

</div>

Listen to the exported MP3 from beginning to end. Confirm that it starts and ends correctly, contains the complete edit, and plays outside Premiere Pro. A successful export message does not prove that the correct sequence or range was exported.

## Optional Publication

Publishing is optional and does not affect the grade. Permission to participate in a classroom recording is not automatically permission to publish someone's voice publicly. Every identifiable participant must agree separately before an episode is posted online. Music, images, and sound effects must also be cleared for public use.

**Spotify for Creators** provides free podcast hosting and automatically makes a hosted show available on Spotify. It is appropriate for someone who intends to create an ongoing public podcast rather than upload one classroom exercise. Distribution to services beyond Spotify requires additional submission of the show's RSS feed.

**YouTube** is convenient for a one-time share, but YouTube does not accept an MP3 as a podcast episode by itself. Create a video version using a still image, title card, waveform, or other appropriate visual and export an H.264 MP4. The video can be public or unlisted, although anyone with an unlisted link can still share it. YouTube can also receive podcasts through an RSS feed in supported locations.

For private or limited sharing, upload the MP3 to the course system or an approved cloud-storage folder and share access only with the intended listeners. This makes the work accessible without presenting it as a public release.

## Additional References

- [Edit sequences using Text-Based Editing in Premiere Pro](https://helpx.adobe.com/ie/premiere/desktop/edit-projects/edit-video-using-text-based-editing/edit-sequences-using-text-based-editing.html)
- [Change the timecode display format and show audio time units](https://helpx.adobe.com/premiere/desktop/organize-media/apply-labeling/change-timecode-display-format.html)
- [Automatically transcribe using Speech to Text](https://helpx.adobe.com/premiere/desktop/add-text-images/insert-captions/auto-transcribe-video-using-speech-to-text.html)
- [RØDECaster Duo: Recording and Exporting Audio](https://rode.com/en-us/user-guides/rodecaster-duo/recording-and-exporting-audio)
- [Spotify for Creators podcast hosting and distribution](https://support.spotify.com/us/creators/article/distributing-your-show-to-other-platforms/)
- [Create a podcast in YouTube Studio](https://support.google.com/youtube/answer/12751636)
