---
title: Burnout Online - PlayStation 2
layout: default
permalink: /bops2/
---

# Burnout Online - PlayStation 2

Thanks to /dev/ghostline's [server emulator](https://gitlab.com/gh0stl1ne/eaps){:target="_blank"} it is now possible to use online functionalities of the game again.

On this page you will find technical explanations and download links of network patches.

The server emulator is currently reachable through the following URL: `bosrv.org`.


## Table of Contents

<ul class="toc">
  <li><a href="#evolution-of-patching-methods">Evolution of Patching Methods</a>
    <ul>
      <li><a href="#modified-iso">Modified ISO</a></li>
      <li><a href="#on-thee-fly">On-ThEE-Fly</a></li>
      <li><a href="#vanilla-iop">Vanilla IOP</a></li>
    </ul>
  </li>
  <li><a href="#patches-contents">Patches Contents</a>
    <ul>
      <li><a href="#burnout-3-takedown">Burnout 3: Takedown</a></li>
      <li><a href="#burnout-revenge">Burnout Revenge</a></li>
    </ul>
  </li>
  <li><a href="#downloads">Downloads</a>
    <ul>
      <li><a href="#burnout-3-takedown-1">Burnout 3: Takedown</a></li>
      <li><a href="#burnout-revenge-1">Burnout Revenge</a></li>
    </ul>
  </li>
</ul>


## Evolution of Patching Methods

Three steps are mandatory to properly connect to the server emulator:

- Replace the original server URL
- Bypass Sony's [DNAS](https://www.psdevwiki.com/ps2/DNAS){:target="_blank"}
- Bypass the validation of the server emulator SSL certificate

The original server URL and the DNAS logic are located in the game executable (`SLXX_XXX.XX`) which is to be loaded in the EE ([Emotion Engine](https://www.copetti.org/writings/consoles/playstation-2/#cpu){:target="_blank"}) memory aka the "main" memory. Tampering with the EE memory is widely supported both on the emulation side ([PNACH](https://forums.pcsx2.net/Thread-How-PNACH-files-work-2-0){:target="_blank"}, Cheat Engine, etc.) or real hardware side (Action Replay, ps2rd, etc.).

However the certificate validation is located in an [IRX file](https://www.retroreversing.com/irx-ps2){:target="_blank"} (`DRTYSCKF.IRX`, EA's "DirtySock" library handling all the network communications while playing online) which is to be loaded in the IOP ([I/O Processor](https://www.copetti.org/writings/consoles/playstation-2/#io){:target="_blank"}) memory. Tampering with the IOP memory is pretty uncommon and can't be achieved easily on real consoles. On the emulation side, PNACH patches can target the IOP but using fixed memory addresses tends to be unreliable.

### Modified ISO

Initially, the usual method for connecting to the server emulator was to apply [xdelta](https://en.wikipedia.org/wiki/Xdelta){:target="_blank"} patches to the game disc image. This method doesn't involve any memory tampering but requires the ability to run modified disc images, implying for real hardware owners to rely on homebrews/swapping tricks/etc. Two downsides in my opinon.

On the emulation side, PNACH patches targeting both EE and IOP were also available, but as said earlier, IOP memory patches (`patch=1,IOP,[...]`) aren't reliable, these patches weren't working for everyone.

### On-ThEE-Fly

I didn't want to look further into the PNACH IOP issue and wanted to investigate onto something guaranteed to work on both sides, and I ended up finding an [alternative method (now outdated)](https://github.com/Nahelam/PS2-Game-Mods/tree/b98cc1b78b396578b043a4cb615f8bd694972e46/Burnout%203%20Takedown/Network%20Play){:target="_blank"} to patch and load `DRTYSCKF.IRX` while only using the EE.

Knowing that the action of telling the IOP to load an IRX file is initiated from the EE by calling a function named `sceSifLoadModule`, I looked around "sceSif" functions and noticed a very interesting one called `sceSifLoadModuleBuffer`. As its name describes, it can load an IRX file from a buffer residing in the EE memory, exactly what I needed.

This approach consists of mapping `DRTYSCKF.IRX` from the disc into an EE memory buffer (using `sceOpen`, `sceRead`, etc.), patch it as we wish and then make the game call `sceSifLoadModuleBuffer` instead of `sceSifLoadModule` when `DRTYSCKF.IRX` gets loaded. This will prevent the IRX file to be retrieved directly from the game files and use our buffer instead.

### Vanilla IOP

While working on some network patches for Revenge, I got curious about a [ProtoSSL bug](https://github.com/Aim4kill/Bug_OldProtoSSL/blob/main/README.md){:target="_blank"} which has been briefly discussed in the Burnout Online Discord server, opinions were mixed regarding its existence in PS2 Burnout games but it didn't went a lot further.

I decided to give it a shot and noticed that the bug was indeed present in `DRTYSCKF.IRX` for both Takedown and Revenge. After some tweaking, I managed to make the server emulator certificate reach and trigger the bug. I made a [merge request](https://gitlab.com/gh0stl1ne/eaps/-/merge_requests/1){:target="_blank"} which has been accepted. We can now access the server emulator without altering the IOP.


## Patches Contents

### Burnout 3: Takedown

<table>
  <tr>
    <th>Patch Title</th>
    <th>Patch Description</th>
  </tr>
  <tr>
    <td>Online<b>/</b>Disable UPnP</td>
    <td>Prevent the game from using UPnP</td>
  </tr>
  <tr class="rcmd">
    <td>Online<b>/</b>Ensure SSL</td>
    <td>Prevent the game from falling back to insecure mode (can sometimes happen and cause errors)</td>
  </tr>
  <tr class="mdtr">
    <td>Online<b>/</b>Server URL (bosrv.org)</td>
    <td>Replace the original server URL in order to connect to /dev/ghostline's server emulator</td>
  </tr>
  <tr class="mdtr">
    <td>Online<b>/</b>Bypass DNAS</td>
    <td>Fully bypass the DNAS sequence</td>
  </tr>
  <tr class="rcmd">
    <td>Online<b>/</b>Buddies<b>/</b>Disable Module</td>
    <td>Disable the Buddies module (which is currently causing pre-game timeouts)</td>
  </tr>
  <tr>
    <td>Online<b>/</b>Lobby<b>/</b>Allow Single Player</td>
    <td>Set the minimum number of players required to start a match to 1</td>
  </tr> 
  <tr>
    <td>Online<b>/</b>Lobby<b>/</b>Heavyweights Globally Available</td>
    <td>Allow heavyweights to be selectable in the garage regardless of the chosen game mode</td>
  </tr>
  <tr>
    <td>Online<b>/</b>In-Game<b>/</b>Hide Lost Connection Message</td>
    <td>Hide the "Lost connection to other players" error message (useful while playing alone)</td>
  </tr>
</table>
<div class="lgnd">
  <div>
    <small>
    <span class="mdtr">■</span> MANDATORY<br />
    <span class="rcmd">■</span> RECOMMENDED
    </small>
  </div>
</div>

### Burnout Revenge
Coming soon.


## Downloads

### Burnout 3: Takedown
<table class="blobdl">
  <tr>
    <th>Serial</th>
    <th>PCSX2</th>
    <th>PS2</th>
  </tr>
  <tr>
    <td>SLES-52584</td>
    <td><a href="https://raw.githubusercontent.com/Nahelam/PS2-Game-Mods/refs/heads/main/Burnout%203%20Takedown/Online/PCSX2/SLES-52584_75BECC18_online.pnach">⬇️</a></td>
    <td><a href="https://raw.githubusercontent.com/Nahelam/PS2-Game-Mods/refs/heads/main/Burnout%203%20Takedown/Online/PS2/SLES-52584_online.cht">⬇️</a></td>
  </tr>
  <tr>
    <td>SLES-52585</td>
    <td><a href="https://raw.githubusercontent.com/Nahelam/PS2-Game-Mods/refs/heads/main/Burnout%203%20Takedown/Online/PCSX2/SLES-52585_CE49B0DE_online.pnach">⬇️</a></td>
    <td><a href="https://raw.githubusercontent.com/Nahelam/PS2-Game-Mods/refs/heads/main/Burnout%203%20Takedown/Online/PS2/SLES-52585_online.cht">⬇️</a></td>
  </tr>
  <tr>
    <td>SLKA-25206</td>
    <td><a href="https://raw.githubusercontent.com/Nahelam/PS2-Game-Mods/refs/heads/main/Burnout%203%20Takedown/Online/PCSX2/SLKA-25206_5F060991_online.pnach">⬇️</a></td>
    <td><a href="https://raw.githubusercontent.com/Nahelam/PS2-Game-Mods/refs/heads/main/Burnout%203%20Takedown/Online/PS2/SLKA-25206_online.cht">⬇️</a></td>
  </tr>
  <tr>
    <td>SLPM-65719</td>
    <td><a href="https://raw.githubusercontent.com/Nahelam/PS2-Game-Mods/refs/heads/main/Burnout%203%20Takedown/Online/PCSX2/SLPM-65719_BB2E845F_online.pnach">⬇️</a></td>
    <td><a href="https://raw.githubusercontent.com/Nahelam/PS2-Game-Mods/refs/heads/main/Burnout%203%20Takedown/Online/PS2/SLPM-65719_online.cht">⬇️</a></td>
  </tr>
  <tr>
    <td>SLUS-21050</td>
    <td><a href="https://raw.githubusercontent.com/Nahelam/PS2-Game-Mods/refs/heads/main/Burnout%203%20Takedown/Online/PCSX2/SLUS-21050_BEBF8793_online.pnach">⬇️</a></td>
    <td><a href="https://raw.githubusercontent.com/Nahelam/PS2-Game-Mods/refs/heads/main/Burnout%203%20Takedown/Online/PS2/SLUS-21050_online.cht">⬇️</a></td>
  </tr>
</table>

### Burnout Revenge
<table class="blobdl">
  <tr>
    <th>Serial</th>
    <th>PCSX2</th>
    <th>PS2</th>
  </tr>
  <tr>
    <td>SLAJ-25066</td>
    <td>Coming soon</td>
    <td>Coming soon</td>
  </tr>
  <tr>
    <td>SLES-53506</td>
    <td>Coming soon</td>
    <td>Coming soon</td>
  </tr>
  <tr>
    <td>SLES-53507</td>
    <td>Coming soon</td>
    <td>Coming soon</td>
  </tr>
  <tr>
    <td>SLKA-25304</td>
    <td>Coming soon</td>
    <td>Coming soon</td>
  </tr>
  <tr>
    <td>SLUS-21242</td>
    <td>Coming soon</td>
    <td>Coming soon</td>
  </tr>
</table>
