---
title: Burnout Revenge - Single Event Mod
layout: default
permalink: /b4ps2rsem/
---

# Single Event Mod

![Burnout Revenge - Single Event Mod](https://github.com/user-attachments/assets/498f859a-16b7-47e8-8c7f-0264e35d18cd)

## Table of Contents

<ul class="toc">
  <li><a href="#mod-description">Mod Description</a></li>
  <li>
    <a href="#new-options">New Options</a>
    <ul>
      <li><a href="#race">Race</a></li>
      <li><a href="#road-rage">Road Rage</a></li>
      <li><a href="#traffic-attack">Traffic Attack</a></li>
      <li><a href="#burning-lap">Burning Lap</a></li>
      <li><a href="#eliminator">Eliminator</a></li>
    </ul>
  </li>
  <li>
    <a href="#new-features">New Features</a>
    <ul>
      <li><a href="#profile-save">Profile Save</a></li>
      <li><a href="#time-attack">Time Attack</a></li>
      <li><a href="#finish-session">Finish Session</a></li>
      <li><a href="#opponent-limit">Opponent Limit</a></li>
      <li><a href="#lap-limit">Lap Limit</a></li>
      <li><a href="#insane-traffic-checking">Insane Traffic Checking</a></li>
    </ul>
  </li>
  <li><a href="#downloads">Downloads</a>
    <ul>
      <li><a href="#ps2-usage">PS2 Usage</a></li>
      <li><a href="#source-code">Source Code</a></li>
    </ul>
  </li>
</ul>

## Mod Description

This mod brings back "Single Event" functionalities (one player) which are not present in the vanilla game. It replaces the `MULTIPLAYER` menu with a brand new `CREATE GAME` menu.

It lets you choose between the following one player game modes:
- Race
- Road Rage
- Traffic Attack
- Crash
- Burning Lap
- Eliminator

Modifying the menus and preserving a "vanilla" look has been tough but I'm quite proud of the end result.

A lot of function hooks were implemented to make the game handle everything correctly (menus, new options, etc.).

I wanted to make this patch available for all regions of the game thus I used as much localized strings as possible.

Only a few are still hardcoded in english.


## New Options

### Race

- <u>Laps</u>: The number of laps you'll have to perform *(0-99)*
- <u>Rivals</u>: The number of opponents you want to face *(0-99)*
- <u>Select Rivals</u>: Choose the vehicle and color of all the opponents *(Yes/No)*
- <u>AI Mode</u>: Choose opponents behavior *(Race/Road Rage)*
- <u>Traffic</u>: Enable or disable traffic *(Yes/No)*
- <u>Traffic Checking</u>: Enable or disable traffic checking *(Yes/No/Insane, only affects the player when disabled)*
- <u>Oncoming</u>: Enable or disable oncoming boost reward *(Yes/No, always Yes when traffic is enabled)*
- <u>Crashbreaker</u>: Enable or disable the Crashbreaker *(Yes/No)*


### Road Rage

- <u>Time Limit</u>: Choose or disable time limit *(Off/1-16 minutes)*
- <u>Damage Critical</u>: Enable or disable elimination when your car is too damaged *(Yes/No, always Yes if there is no time limit)*
- <u>Rivals</u>: The number of opponents you want to face *(0-5)*
- <u>Select Rivals</u>: Choose the vehicle and color of all the opponents *(Yes/No)*
- <u>AI Mode</u>: Choose opponents behavior *(Race/Road Rage)*
- <u>Traffic</u>: Enable or disable traffic *(Yes/No)*
- <u>Traffic Checking</u>: Enable or disable traffic checking *(Yes/No/Insane, only affects the player when disabled)*
- <u>Oncoming</u>: Enable or disable oncoming boost reward *(Yes/No, always Yes when traffic is enabled)*
- <u>Crashbreaker</u>: Enable or disable the Crashbreaker *(Yes/No)*


### Traffic Attack

- <u>Traffic Checking</u>: Enable or disable traffic checking *(Default/Insane)*
- <u>Time Limit</u>: Enable or disable time limit *(Yes/No)*


### Burning Lap

- <u>Traffic</u>: Enable or disable traffic *(Yes/No)*
- <u>Traffic Checking</u>: Enable or disable traffic checking *(Yes/No/Insane, only affects the player when disabled)*
- <u>Oncoming</u>: Enable or disable oncoming boost reward *(Yes/No, always Yes when traffic is enabled)*


### Eliminator

- <u>Rivals</u>: The number of opponents you want to face *(0-99)*
- <u>Select Rivals</u>: Choose the vehicle and color of all the opponents *(Yes/No)*
- <u>AI Mode</u>: Choose opponents behavior *(Race/Road Rage)*
- <u>Traffic</u>: Enable or disable traffic *(Yes/No)*
- <u>Traffic Checking</u>: Enable or disable traffic checking *(Yes/No/Insane, only affects the player when disabled)*
- <u>Oncoming</u>: Enable or disable oncoming boost reward *(Yes/No, always Yes when traffic is enabled)*
- <u>Crashbreaker</u>: Enable or disable the Crashbreaker *(Yes/No)*


## New Features

### Profile Save

After each event you will have the choice to save your profile data or not.

### Time Attack

Burning Lap mode behavior has been changed to Time Attack:
- No lap limit
- Personal best shown
- Lap marker enabled

### Finish Session

You can end the current event from the pause menu in
- the Burning Lap mode after performing at least one lap.
- the Traffic Attack mode when the time limit is disabled and your score is > 0.

### Opponent Limit

In Race and Eliminator modes you can choose up to 99 opponents.

The "active" opponents limit is still 5, they will be adjusted according to your position.

The "adjusting" mechanic was only working properly in Race mode, support for Eliminator has been added.

### Lap Limit

In Race mode you can choose up to 99 laps.

The "Hit Count" HUD component from Crash mode has been used to display 2 digits laps properly.

The default lap HUD component couldn't display more than 1 digit.

### Insane Traffic Checking

My favorite one, when the `TRAFFIC CHECKING` option is set to `INSANE` you will be able to check all the traffic.

You can check the same traffic vehicle until it vanishes.

Each time you touch a traffic car with enough speed it will count as a check.

Opponents are also given that power but they can't take you or other drivers down with traffic.


## Downloads

<table class="blobdl">
  <tr>
    <th>Serial</th>
    <th>PCSX2</th>
    <th>PS2</th>
  </tr>
  <tr>
    <td>SLAJ-25066</td>
    <td><a href="https://raw.githubusercontent.com/Nahelam/PS2-Game-Mods/refs/heads/main/Burnout%20Revenge/Single%20Event%20Mod/PCSX2/SLAJ-25066_039182C6_single_event.pnach">⬇️</a></td>
    <td><a href="https://github.com/Nahelam/PS2-Game-Mods/raw/refs/heads/main/Burnout%20Revenge/Single%20Event%20Mod/PS2/SLAJ-25066_single_event.xdelta">⬇️</a></td>
  </tr>
  <tr>
    <td>SLES-53506</td>
    <td><a href="https://raw.githubusercontent.com/Nahelam/PS2-Game-Mods/refs/heads/main/Burnout%20Revenge/Single%20Event%20Mod/PCSX2/SLES-53506_2CAC3DBC_single_event.pnach">⬇️</a></td>
    <td><a href="https://github.com/Nahelam/PS2-Game-Mods/raw/refs/heads/main/Burnout%20Revenge/Single%20Event%20Mod/PS2/SLES-53506_single_event.xdelta">⬇️</a></td>
  </tr>
  <tr>
    <td>SLES-53507</td>
    <td><a href="https://raw.githubusercontent.com/Nahelam/PS2-Game-Mods/refs/heads/main/Burnout%20Revenge/Single%20Event%20Mod/PCSX2/SLES-53507_7E83CC5B_single_event.pnach">⬇️</a></td>
    <td><a href="https://github.com/Nahelam/PS2-Game-Mods/raw/refs/heads/main/Burnout%20Revenge/Single%20Event%20Mod/PS2/SLES-53507_single_event.xdelta">⬇️</a></td>
  </tr>
  <tr>
    <td>SLKA-25304</td>
    <td><a href="https://raw.githubusercontent.com/Nahelam/PS2-Game-Mods/refs/heads/main/Burnout%20Revenge/Single%20Event%20Mod/PCSX2/SLKA-25304_EEA60511_single_event.pnach">⬇️</a></td>
    <td><a href="https://github.com/Nahelam/PS2-Game-Mods/raw/refs/heads/main/Burnout%20Revenge/Single%20Event%20Mod/PS2/SLKA-25304_single_event.xdelta">⬇️</a></td>
  </tr>
  <tr>
    <td>SLPM-66108</td>
    <td><a href="https://raw.githubusercontent.com/Nahelam/PS2-Game-Mods/refs/heads/main/Burnout%20Revenge/Single%20Event%20Mod/PCSX2/SLPM-66108_878E7A1D_single_event.pnach">⬇️</a></td>
    <td><a href="https://github.com/Nahelam/PS2-Game-Mods/raw/refs/heads/main/Burnout%20Revenge/Single%20Event%20Mod/PS2/SLPM-66108_single_event.xdelta">⬇️</a></td>
  </tr>
  <tr>
    <td>SLUS-21242</td>
    <td><a href="https://raw.githubusercontent.com/Nahelam/PS2-Game-Mods/refs/heads/main/Burnout%20Revenge/Single%20Event%20Mod/PCSX2/SLUS-21242_D224D348_single_event.pnach">⬇️</a></td>
    <td><a href="https://github.com/Nahelam/PS2-Game-Mods/raw/refs/heads/main/Burnout%20Revenge/Single%20Event%20Mod/PS2/SLUS-21242_single_event.xdelta">⬇️</a></td>
  </tr>
</table>

### PS2 Usage

This mod is way too heavy to be ran using known cheat engines on PS2 (as far as I know). Your game disc image has to be patched with one of the provided [xdelta](https://en.wikipedia.org/wiki/Xdelta){:target="_blank"} files using a patching tool such as [Delta Patcher](https://github.com/marco-calautti/DeltaPatcher/releases/latest){:target="_blank"}.

The mod is disabled by default, to enable it use the `Single Event Mod Enabler` code in your favourite cheat engine and then load the patched game.

If you're already using a different Mastercode I recommend using the one listed below.

| Region | Mastercode | Single Event Mod Enabler
| --- | --- | --- |
| SLUS-21242 | `90449D08 0C1126EA` | `20255F50 0C042746` |
| SLES-53506 | `90449E08 0C11272A` | `20255F68 0C04274C` |
| SLES-53507 | `90449E88 0C11274A` | `20256010 0C04275E` |
| SLPM-66108 | `903E46E8 0C0F9162` | `20220070 0C042660` |
| SLKA-25304 | `90449E48 0C11273A` | `20255FA8 0C042744` |
| SLAJ-25066 | `90449D48 0C1126FA` | `20255F60 0C042746` |

### Source Code

For curious/advanced users only, don't expect maintainability nor support.\
The code in `main.c` was only used for the PS2 version.\
Compiled using Metrowerks CodeWarrior for PlayStation 2 (v3.04).

*ZIP:* <a class="blobdl" href="https://github.com/user-attachments/files/22620233/b4sem.zip">⬇️</a>
