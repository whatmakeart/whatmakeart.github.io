---
title: 3D Scanning
date: 2023-12-12T07:03:31-04:00
lastmod: 2026-01-04T07:55:34-04:00
---

3D scanning is able to capture more detail and more accurate geometry than [photogrammetry](photogrammetry.md), but requires more expensive 3D scanning equipment and software. There are two main types of 3D scanning, Structured Light scanning and LiDAR scanning.

Structured Light scanning projects a known pattern of light at a 3D object. Two cameras record the light that bounces back to them and measure its deformations from reflecting off the 3D surface of the object. The two cameras use triangulation to reconstruct where the points of the object are in space. LiDAR shoots lasers out and waits for the return bounce of the lasers from the object. It calculates the position of different points of the objects based on the travel time of emitted light to create a point cloud. This is similar to radar except the "L" stands for laser instead of the "r" for radio in radar.

## Einscan H Series Scanner

- [Einscan H Series Scanner Quick Start Guide](https://support.einscan.com/en/support/solutions/articles/60000955990-einscan-h2-quick-start-guide)
- [Einscan Scanning Tips](https://support.einscan.com/en/support/solutions/60000334498)
- [Einscan H Series Guides](https://support.einscan.com/en/support/solutions/60000323052)
- [Einscan H2 Scanner](https://www.einscan.com/handheld-3d-scanner/einscan-h/)

## Artec Leo Scanner

### 3D Body Scanning Tips

Artec webinar for 3D body scanning includes many tips, some of which are summarized below.[^body-scan-webinar] Refer to [Artec 3D's website](https://www.artec3d.com/)for more information

- Fabric types to avoid when 3D scanning
  - black leather
  - velvet
  - shiny or glossy materials
  - gauze, tulle, or transparent or semi-transparent fabric
  - fur or fuzzy materials
  - fabric without pattern or texture can be difficult
- Small areas and crevices or thin areas can be difficult to scan but may be corrected by smoothing or flattening out surfaces, such as hoods, collars, or jacket facings before scanning
- Avoid glasses and shiny accessories
- Hair, like furry fabric, is difficult to scan. Straight hair is easier but curly or spiky hair can prove difficult. Keeping shoulders or other reference objects in the field of view of the scanner while capturing hair will help
- Chose body poses that avoid narrow spaces. For example, keep legs spread at shoulder distance, rather than with the feet together
- When scanning living subjects, do your best to not scan the same area multiple times since it will have moved from the previous scan

#### Head Scanning

- Scan the head first with the following guides
- A head can be scanned separately. If the subject is seated in a chair it is easier to scan the head from a birds eye view or raised angle. Make sure to include the shoulders in the scan to make it easier to align the scans later
- To assist the subject keeping their eyes still and to avoid blinking during a face scan, the subject should choose a point just above their light of sight and focus on it for the duration of the scan
- Artec recommends a specific scanning path for faces to help with the inevitable change in facial expressions during a scan. Begin at one ear and sweep to the nose, then move down to the chin, sweep a bit back and forth on the neck and chin, then move straight up to the top of the forehead, then sweep out to the other ear. The scan can now continue around the back of the head, but the face should not be scanned again.
- Use an up and down arc motion traveling around the back of the head.
- Make sure to scan the top of the head with the scanner perpendicular to the head
- finish the head scan at the ear where it started making sure to capture the back of the ear

#### Scan the Body after the Head

- Rather than scanning all of the front of the body and then scanning all of the back of the body, move in a spiral down the body to avoid repeated scans of the same area
- Avoid including the face in the torso and body scans
- After scanning the head with the subject seated, the person should stand up with as little shoulder movement as possible.
- Begin scanning the front of the upper torso. Then wrap around the side and back.
- When returning to the front of the torso, capture the lower part of the front torso and then swing around the back
- Capture arms with 90 degree perpendicular the scanner from above and below. Extreme scanning angles help to capture the inside of underarms and inner elbows
- When scanning the legs, make sure to include the floor since the texture on the floor will help the scanner maintain tracking of the legs. It is best to keep both legs in view of the scanner
- Make sure to scan the inside of sleeve cuffs, skirts, and shorts so the fabric has texture and geometry on both sides
- To scan a hand, make sure the fingers are held rigid. Hold the hand in front of the body at a 45 degree angle so the scanner can use the body as a background for registration

#### Hard to Hold poses

- Capture each major body part separately
- Scan Arms and legs in individual scans that can be aligned later
- use supports as needed so the subject can keep their pose or hold heavy objects
- When scanning subjects that will move with the Artec Leo, switching on `Record without registration` may help

#### Artec Scanning Guides

- [Artec Leo Scanner at the thinkbox](https://case.edu/thinkbox/equipment/other-equipment/structured-light-3d-scanner)

## References

[^body-scan-webinar]: [Artec Webinar](https://youtu.be/o7VnnFLBE3M?si=532faIrkqTou6ZEX&t=1296)
