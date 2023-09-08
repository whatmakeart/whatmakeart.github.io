---
title: Terminal Code Snippets

---

## Change default screen shot location

defaults write com.apple.screencapture location ~/Screenshots

then

killall SystemUIServer

## Change File Creation Date

// to change the creation date

```
touch -mt 201308030000 [pathtofile][filename]
```

// to change the modified date

```
touch -t 201308030000 [pathtofile][filename]
```

## Show Hidden Files on Mac

CMD + SHIFT + .

Or in Terminal:

`defaults write com.apple.finder AppleShowAllFiles YES`

`defaults write com.apple.finder AppleShowAllFiles NO`

Then relaunch Finder - right click - hold option

## Compare Folders

> In order to take out the lines that say "Common subdirectories" you need to feed the result of your diff command into grep -v. So you end up with: `diff -r <directory1> <directory2> | grep -v "Common subdirectories:`

## Unzip Multiple .zip files into a combined folder structure

Useful for unzipping large Google Drive downloads that are split across multiple .zip files. Put all of the files into one directory then open Terminal on a Mac. Change directories to the folder that the zip files are in. Then type the command below.

```
unzip '*.zip' -d
```
