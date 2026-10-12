---
title: "Burnout 3: Takedown - Xbox Patch"
layout: default
permalink: /b3xbpatch/
---

# Xbox Patch

This patch currently brings a few QoL features to the game.

A new section was added in the game executable (4096 bytes) using [XboxImageXploder](https://github.com/grimdoomer/XboxImageXploder) to make room for some asm logic.

## Patching

To apply these patches you need an FTP access to your Xbox HDD, [Flips](<https://git.disroot.org/Sir_Walrus/Flips/releases>) and the Title Update of the game installed (if you're using Insignia it should be already installed).

Grab the game executable (`default.xbe`) which is located in\
`E:\TDATA\4541005b\$u\` then apply the patch using Flips and put the patched xbe on your Xbox HDD.\
The file name must be the same as the original. You can rename the original file instead of erasing it if you want to keep a backup.

## Supported Regions

- NTSC101: USA
- PAL102: Europe (NL,EN,ES,SV)
- PAL103: Europe (FR,DE,IT)

## Features

- Set the minimum number of players required to start an online game to 1 (useful for practicing against online traffic)

- Holding LT+RT+X before selecting the extras menu will open the development menu instead (which has a very useful `Unlock All` option)

## Download

<table class="blobdl">
  <tr>
    <th>NTSC101</th>
    <th>PAL102</th>
    <th>PAL103</th>
  </tr>
  <tr>
    <td><a href="https://github.com/Nahelam/Xbox-Game-Mods/raw/refs/heads/main/OG/Burnout%203%20Takedown/default_NTSC101.bps">⬇️</a></td>
    <td><a href="https://github.com/Nahelam/Xbox-Game-Mods/raw/refs/heads/main/OG/Burnout%203%20Takedown/default_PAL102.bps">⬇️</a></td>
    <td><a href="https://github.com/Nahelam/Xbox-Game-Mods/raw/refs/heads/main/OG/Burnout%203%20Takedown/default_PAL103.bps">⬇️</a></td>
  </tr>
</table>
