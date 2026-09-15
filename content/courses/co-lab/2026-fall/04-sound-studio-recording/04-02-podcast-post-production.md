---
title: 04.01 Podcast Recording Instructions
date: 2026-09-16T12:00:00-04:00
lastmod: 2026-09-15T07:21:20-04:00
---

## Choose the Right Workflow

<div class="responsive-table-markdown">

| Recording condition                                    | Recommended workflow                                                                        |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| Voices are clear and reasonably balanced               | Edit the stereo mix in Premiere Pro                                                         |
| One voice is consistently too loud or quiet            | Balance the isolated tracks in Audition, export a new stereo mix, then edit in Premiere Pro |
| One microphone has noise, clipping, or rumble          | Repair that isolated track in Audition before making the Premiere Pro edit                  |
| The conversation needs extensive restructuring         | Use Premiere Pro Text-Based Editing with the stereo mix                                     |
| The project requires detailed control over every voice | Complete the edit and mix manually with the isolated tracks in Audition                     |

</div>

For this exercise, begin with the stereo mix unless you can identify a specific problem that requires the isolated tracks.

## 1. Preserve and Organize the Recording

1. Copy the complete RØDECaster recording folder.
2. Place the untouched copy in `01 Original RODECaster Recording`.
3. Listen to the stereo mix from beginning to end.
4. Confirm that all voices are present and synchronized.
5. Identify the isolated microphone tracks, but do not delete unused tracks.
6. Create a Premiere Pro project inside `02 Premiere Project`.

## 2. Build a Transcript-Based Rough Cut in Premiere Pro

1. Import the stereo mix.
2. Create a sequence from the stereo mix.
3. Open **Window > Text** and select **Transcript**.
4. Transcribe the source or active sequence.
5. Select the correct language and enable speaker labeling when available.
6. Correct important names and obvious transcription errors.
7. Save a duplicate sequence named `Podcast Full Recording`.
8. Duplicate it again and name the copy `Podcast Rough Cut`.

Edit only the rough-cut sequence. The full-recording sequence is your reference.

### Edit for Meaning

Use the transcript to locate and remove:

- false starts that are immediately repeated
- long technical interruptions
- duplicated explanations
- unrelated tangents
- sections that do not support the driving question
- excessive pauses that weaken the pacing

Do not automatically remove every pause, breath, “um,” or repeated word. Natural speech needs rhythm. An edit that is shorter is not necessarily clearer or more engaging.

After every text edit:

1. listen across the cut
2. check that the meaning has not changed
3. confirm that the speaker does not sound interrupted
4. adjust the audio edit point if a word, breath, laugh, or room sound is cut unnaturally

Text-Based Editing creates a rough cut; your ears must finish it.

## 3. Smooth the Dialogue Edits

- Trim cuts at natural breaks between phrases.
- Preserve a short amount of room tone between speakers.
- Avoid cutting in the middle of breaths or consonants.
- Add a very short **Constant Power** audio transition only when a cut clicks or changes room tone abruptly.
- Do not cover every edit with music.
- Listen once with headphones and once through speakers.

## 4. Use Audition Only When the Mix Needs More Control

If the stereo mix is already clear, continue in Premiere Pro. If one voice needs separate repair or balancing:

1. Create a new Audition multitrack session at **48,000 Hz**.
2. Import the isolated microphone WAV files.
3. Place every file at exactly the same starting time.
4. Label each track with the speaker's name.
5. Keep the original files unchanged.
6. Adjust **clip gain** so voices are similar before adding effects.
7. Remove or silence sections of a microphone when that person is not speaking only if bleed is distracting.
8. Repair clipping, hum, rumble, or steady noise conservatively.
9. Apply EQ and compression lightly and consistently.
10. Use track volume automation for individual words or sections that remain uneven.
11. Export a stereo WAV mixdown at **48 kHz, 24-bit**.
12. Import the corrected mixdown into Premiere Pro and use it in place of the original stereo mix.

Avoid heavy noise reduction. Metallic or watery processing artifacts are often more distracting than quiet room noise.

## 5. Add an Introduction, Ending, and Optional Music

A short podcast should include:

- an opening that identifies the topic
- the driving question
- the main conversation
- a conclusion or final thought

Music and sound effects are optional. If used:

- use only audio you created or have permission to use
- keep music well below the dialogue
- fade music in and out
- do not use music to hide unclear editing
- include required credit information

## 6. Balance and Check the Final Mix

Listen to the complete podcast without stopping. Take notes, then revise.

Check for:

- consistent voice levels
- audible edits or clicks
- words cut off at edit points
- distracting breaths, mouth noise, or handling noise
- long pauses that feel accidental
- pacing that is too rushed
- music that competes with speech
- clipping on the master meter
- an opening and ending that feel intentional

For a stereo podcast master, use a course target of approximately **-16 LUFS integrated** with a maximum true peak of **-1 dBTP**. Treat this as a final delivery target, not a reason to crush the dynamics of every voice.

## 7. Export

Export both:

1. **Archival master**

   - WAV
   - 48 kHz
   - 24-bit
   - stereo

2. **Listening copy**
   - MP3
   - 192 kbps or higher
   - stereo

Use these filenames:

- `YYYY-MM-DD Groupname Podcast Master.wav`
- `YYYY-MM-DD Groupname Podcast.mp3`

Listen to the exported MP3 from beginning to end. Do not assume that a successful export window means the file is complete or correct.

## Final Checklist

- The original RØDECaster folder remains untouched.
- The full recording and rough-cut sequences are both preserved.
- The conversation has a clear driving question.
- The edit preserves each speaker's intended meaning.
- All voices are intelligible and reasonably balanced.
- Music and sound effects do not cover speech.
- The master does not clip.
- Both the WAV master and MP3 listening copy open and play correctly.
- Names, titles, and credits are accurate.

## Additional References

- [Edit sequences using Text-Based Editing in Premiere Pro](https://helpx.adobe.com/premiere-pro/using/text-based-editing.html)
- [Automatically transcribe video using Speech to Text](https://helpx.adobe.com/premiere/desktop/add-text-images/insert-captions/auto-transcribe-video-using-speech-to-text.html)
- [RØDECaster Duo: Recording and Exporting Audio](https://rode.com/en-us/user-guides/rodecaster-duo/recording-and-exporting-audio)
