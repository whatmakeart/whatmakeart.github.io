---
title: Setup Multiple Git Users
date: 2024-01-16T06:00:26
lastmod: 2024-01-16T06:02:20
---

Sometimes you want to use different Git users for different repositories on the same computer. This could be to separate personal projects with school projects or work projects. Navigate to the repository folder and type the following commands into terminal.

## Global User

`~$ git config --global user.name "username" ~$ git config --global user.email "name@email.com"`

## Local User

`~$ git config --local user.name "username" ~$ git config --local user.email "name@email.com"`

## Linked Copy

`~$ git config --worktree user.name "username" ~$ git config --worktree user.email "name@email.com"`
