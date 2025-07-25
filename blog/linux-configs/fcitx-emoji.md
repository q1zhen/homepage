---
title: Make Fcitx5 correctly display emojis
description: Fix the problem of emojis not displaying in Fcitx5 word candidates.
date: 2025-06-06
category: linux-stuff
---

In Fcitx5 input candidates, at least on my OS, the emoji glyphs are displayed as blank spaces. This is because unlike regular characters which are vector-based, modern colour emojis are often stored as embedded bitmap images inside the font file. The system might ignore the bitmaps and try to render the emojis as standard monochrome glyphs, therefore failing to render.

The solution is simple. Just change the font config `/etc/fonts/local.conf` and add the following lines to force the rendering system to use embedded colour bitmaps:
```xml
<?xml version='1.0'?>
<!DOCTYPE fontconfig SYSTEM 'fonts.dtd'>
<fontconfig>
	<match target="font">
		<test name="family" compare="contains">
			<string>Noto Color Emoji</string>
		</test>
		<edit name="hinting" mode="assign">
			<bool>true</bool>
		</edit>
		<edit name="hintstyle" mode="assign">
			<const>hintslight</const>
		</edit>
		<edit name="embeddedbitmap" mode="assign">
			<bool>true</bool>
		</edit>
	</match>
</fontconfig>
```

Purge the font config cache:
```sh
fc-cache -f
```

Then restart Fcitx5. The emojis should be properly rendered.
