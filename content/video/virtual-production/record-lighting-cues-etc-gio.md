---
title: Record Lighting Cues ETC Gio
date: 2026-10-21T12:00:00-04:00
lastmod: 2026-10-21T21:05:41-04:00
---

## Record a Cue

| Commands / Actions                                                          | Description                                                                                                         |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `[Live], [Clear] [Sneak] [Enter]` and ring any subs/faders down             | Prepare to Record                                                                                                   |
| `[Group] [2] [At] [30] [Enter], [8] [At] [35] [Enter]`                      | Set levels for specials                                                                                             |
| `[Record] [Cue] [1] [Enter]`                                                | Stores cue 1 - note channels turn blue                                                                              |
| `[2] [+] [5] [+] [6] [At] [35] [Enter]`                                     | Adds additional lights to look                                                                                      |
| `[Record] [2] [Enter]`                                                      | Stores cue 2 - note channel colors; note we did not specify cue                                                     |
| `[2] [+] [6] [Out], [Group] [2] [At] [60] [Enter]`                          |                                                                                                                     |
| `[31] [+] [32] [+] [36] [+] [37] [+] [41] [+] [42] [+] [46] [+] [47] [Out]` | Levels going up and down in cue.                                                                                    |
| `[Record] [3] [Enter]`                                                      | All content will be recorded in cue 3                                                                               |
| Run the first fader (with sub 1) up to 75%.                                 |                                                                                                                     |
| `[Record] [Next] [Enter]`                                                   | Stores next cue (4)—note channel colors. Adds the sub values into the cue; sub values cannot be removed with fader. |
| Bring the first fader back down.                                            |                                                                                                                     |
| `[1] [Thru] [9] [Out], [8] [At] [50] [Enter]`                               |                                                                                                                     |
| `[Record] [Next] [Enter]`                                                   | Stores next cue (5).                                                                                                |

</div>

## Record Cues with Time

<div class="responsive-table-markdown">

| Commands                                                                                  | Description                                  |
| ----------------------------------------------------------------------------------------- | -------------------------------------------- |
| `[Select Last] [Out],`<br>`[Group] [2] [At] [80] [Enter], [Group] [10] [At] [30] [Enter]` | Selects channels that had been used.         |
| `[Record] [6] [Time] [3] [Enter]`                                                         | Stores cue 6 with 3-second up/down time.     |
| `[151] [Thru] [154] [Full] [Rem Dim] [Enter]`                                             | Set levels using Remainder Dim.              |
| `[Record] [Next] [Time] [2] [Time] [7] [Enter]`                                           | Specifies split up and down times (7).       |
| `[36] [Thru] [50] [At] [50] [Rem Dim] [Enter]`                                            | Set levels.                                  |
| `[Record] [8] [Time] [6] [/] [2] [Enter]`                                                 | Specifies split up/down time with slash (8). |

</div>

**Remember:** Pressing `[Select Last]` multiple times loops through the last five selections.

## Record with Time and Label / Delete Cues

<div class="responsive-table-markdown">

| Commands                                                                                                             | Description                                                                    |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `[32] [Thru] [34] [At] [50] [Enter], [33] [+%] [+%] [+%]`<br>`[41] [Thru] [50] [At] [25] [Enter], [3] [Full] [Full]` | Set levels.                                                                    |
| `[Record] [Next] [Time] [3] [/] [5] [Label] Speech [Enter]`                                                          | Stores cue, timing, and label (9).                                             |
| `[Select Active] [Out]`                                                                                              | Takes all active channels’ intensities out.                                    |
| `[Record] [10] [Time] [0] [Label] Blackout [Enter]`                                                                  | Stores cue, timing, and label (10).                                            |
| `[1] [+] [3] [+] [6] [Full] [Enter], [Group] [2] [At] [25] [Enter]`                                                  | Sets levels for new cue after blackout.                                        |
| `[Record] [11] [Time] [2] [Label] Entrance [Enter]`                                                                  | Stores cue, timing, and label (11).                                            |
| `[10] [Full] [Enter]`                                                                                                | Sets levels for new cue.                                                       |
| `[Record] [11] [.] [5] [Enter]`                                                                                      | Stores a point cue.                                                            |
| `[Delete] [Cue] [11] [.] [5] [Enter] [Enter]`                                                                        | Deletes a cue; does not renumber.                                              |
| `[Go To Cue] [Enter]`                                                                                                | Refreshes the current state of the cue list and the DMX output of the console. |

</div>

**Ion Classic note:** Select Active and Select Manual are both softkeys when you hold `[Shift]` and press `[Select Last]`.

**Delete Cues note:** Cue 11.5 is still on stage although it was just deleted. The console is still outputting the last DMX levels. Use `[Go To Cue] [Enter]` to refresh.

## Go To Cue

`[Go To Cue]` uses Go-To-Cue timing established in Setup.

<div class="responsive-table-markdown">

| Commands                                           | Description                                                                                                                                   |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `[Go To Cue] [Out] [Enter]`                        | Sets all values to home and resets all cue lists active on faders to the top of the list.                                                     |
| `[Go To Cue] [0] [Enter]`                          | Sets all current intensity values to zero and resets the current cue list to the top of the list, without affecting non-intensity parameters. |
| `[Go To Cue] [Enter]`                              | Refreshes current cue.                                                                                                                        |
| `[Go To Cue] [Next]` or `[Last] [Enter]`           | Takes you to the next or previous cue in the active list (like Back).                                                                         |
| `[Go To Cue] [5] [Enter]`                          | All parameters with values in cue 5 fade to those values, even if they are tracked, in the Go To Cue time.                                    |
| `[Go To Cue] [6] [Time] [Enter]`                   | Fades to cue in the timing of the cue.                                                                                                        |
| `[Go To Cue] [1] [Time] [2] [Enter]`               | Fades to cue in 2 seconds.                                                                                                                    |
| `[Cue] [7] [Master] (Load)`, then press `[▶] (Go)` | Loads a specific cue to the main faders and then runs in that cue’s time.                                                                     |

</div>

**Note:** When loading a cue on the Master Playback Fader, look at the Pending Cue in the PSD.

## References

Excerpted from Electronic Theatre Controls (ETC), _Eos Family Console Programming: Level 1: Essentials Workbook_, version 3.3C (May 2026), [pp. 22–23](https://www.etcconnect.com/uploadedFiles/Main_Site/Documents/Public/Video_Tutorial/Eos_Family_L1_Essentials_v3.3.pdf#page=22) and [p. 25](https://www.etcconnect.com/uploadedFiles/Main_Site/Documents/Public/Video_Tutorial/Eos_Family_L1_Essentials_v3.3.pdf#page=25). Reformatted as Markdown tables for educational use.
