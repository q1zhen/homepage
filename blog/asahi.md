---
title: Linux on Apple Silicon
description: Just got a M2 Macbook Air and installed Fedora Asahi Remix on it.
date: 2025-11-08
category: linux-stuff
---

I have been using Linux as a daily driver for quite a while. A major problem is that despite that Linux is typically considered to be lighter, it actually has worse power consumption. Even with utilities like TLP, it is not very ideal.

For years, MacBooks have been famous for their extraordinary battery life, especially after the release of Apple Silicon (M-series chips) in ARM architecture. [Asahi Linux](https://asahilinux.org/) is a project that brings Linux to Apple Silicon Macs. Plus, it is also the setup Linus Torvalds uses.

This is why I bought an M2 MacBook Air in 2025. I got a 24+512GB one at a pretty fair price of about RMB6,000. M2 still has around 80% of M4's performance, so it would be very sufficient for daily use.

Asahi Linux officially co-operates with Fedora and releases Fedora Asahi Remix as an officially-polished, flagship distro with a maximal support for drivers and stability. This is also the version I installed.

## Installation

This is where things get wild. It is the easiest (and also fastest) Linux installation I have gone through. The only thing needed is this command in macOS terminal:
```sh
curl https://alx.sh | sh
```
Or, alternatively, use
```sh
curl https://fedora-asahi-remix.org/install | sh
```
to have Fedora logos and branding.

The shell script wizard is quite simple with clear instructions and explanations. Since I am more used to GNOME, I selected Fedora Asahi Remix on GNOME (in contrary to their flagship release in KDE Plasma).

MacOS has to be kept (technically it can be removed, but this would make things more complicated). And since I am not entirely sure whether I am still going to occasionally rely on some apps not available on Linux (like Microsoft Office), I reserved 100GB for macOS. This is very easy to configure in the wizard.

The installation finishes in a very short time. Then comes the first boot.

## General experience

I did not run into any trouble. After a rough test, the battery life is at least 10 hours, which is already beating almost all Linux laptops.

There are still some hardware features missing, like fingerprint sensor and external displays via USB-C. For me, those are not major issues as I barely use these functions any way on the laptop. The only problem is the lack of hardware video decoding that makes the device hot when playing videos. However, the software decoding is not laggy at all and still maintains a very low power consumption.

## Customisations and solutions to some issues

### Camera notch

By default, the entire camera notch area is excluded from the display area, which is definitely a waste of space, especially that GNOME has its own top panel.

To utilise this area, add a kernel parameter:
```sh
sudo grubby --update-kernel=ALL --args="apple_dcp.show_notch=1"
```

GNOME places the date and time in the middle, which is then covered by the camera notch. [Just Perfection](https://extensions.gnome.org/extension/3843/just-perfection/) is a GNOME extension that allows modification. I moved date and time to the left of the panel.

The camera notch is about 60px high. With the extension, the panel height can also be adjusted to perfectly match it. With my display setting of 150% scaling, the height should be set to 40px.

### Fractional scaling and Wayland

It is not very satisfactory to use X11 apps under Wayland with fractional scaling. It makes apps blurry.

GNOME now comes with an experimental feature that allows native scaling in XWayland that can be enabled using:

```sh
gsettings set org.gnome.mutter experimental-features "['scale-monitor-framebuffer', 'xwayland-native-scaling']"
```

N.B., `scale-monitor-framebuffer` must be turned on, or the scaling settings would not persist across boots.

### Installing additional codecs

With the default free codecs, the experience of video playing is not good (lag and heat). Fedora offers [RPM Fusion](https://rpmfusion.org) to install these non-free software packages. First enable RPM Fusion:
```sh
sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
```
Confirm they are enabled with
```sh
dnf repolist | grep rpmfusion
```

Install the multimedia codec group:
```sh
sudo dnf group install multimedia
```

Fedora ships `ffmpeg-free`, which avoids some patented codecs. RPM Fusion provides a full build:
```sh
sudo dnf swap ffmpeg-free ffmpeg --allowerasing
```

Then to update it, run
```sh
sudo dnf update @multimedia --setopt="install_weak_deps=False" --exclude=PackageKit-gstreamer-plugin
```

Finally reboot.

### Volume and microphone

The sound volume always resets to 100% after login and I did not find a very decent solution. However, by changing volume using `alsamixer`, the value seems to persist.

GNOME panel always reports that the microphone is in use (an orange indicator icon is shown). This is a recognised issue that currently does not have a solution.

### Keyboard

There are kernel parameters that allow modification including:
- swapping keys (`0` to disable and `1` to enable):
	- swapping control and command (`swap_ctrl_cmd`)
	- swapping fn and left control (`swap_fn_leftctrl`)
	- swapping option and command (`swap_opt_cmd`)
- switching fn mode (`fnmode`; `1` for using the labelled functions and `2` for using F1--F12 keys)

Set them using
```sh
sudo grubby --update-kernel=ALL --args="hid_apple.[PARAMETER]=[VALUE]"
```

### À la Ubuntu GNOME

Fedora GNOME comes in a quite vanilla taste. I use the following to make it similar to an Ubuntu GNOME experience and functionalities.

[Dash to Dock](https://extensions.gnome.org/extension/307/dash-to-dock/) extension adds a dock to the GNOME Shell. [AppIndicator and KStatusNotifierItem Support](https://extensions.gnome.org/extension/615/appindicator-support/) adds tray icons to the panel (also, I like to set them completely to greyscale for a less disturbing appearance). [Tiling Assistant](https://extensions.gnome.org/extension/3733/tiling-assistant/) creates a Windows-like tiling pop-up interface.

In my opinion, Ubuntu's Yaru theme is better than GNOME's default Adwaita in terms of matching the curves of a MacBook. It is simple to install using the meta-package:
```sh
sudo dnf install yaru-theme
```
And, install the extension [User Themes](https://extensions.gnome.org/extension/19/user-themes/) to select it as the shell theme (so that it applies to the dock, panel, etc.). This does not conflict with (and does not change) the GTK3/4 styles. GTK3 themes can be set using GNOME Tweaks. GTK4 themes can only be installed using CSS replacements in config files.

