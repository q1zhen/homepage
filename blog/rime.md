---
title: Configuring RIME on Linux
description: Configuring Rime Input Method Engine (RIME) on Fcitx5.
date: 2025-07-21
category: linux-stuff
---

I've been using Linux Mint for a while. The Chinese IMEs provided by most Linux distros have been a PITA for a long while. They are usually unintelligent with many glitches. [RIME (Rime Input Method Engine 中州韻輸入法引擎)](https://rime.im/) is a better option. It offers highly customisable input schemas with lots of possible extensions and customised configurations.

An input method framework is needed to install RIME. For better performance, Wayland support, and more modern software, I selected **Fcitx5** (Free Chinese Input Toy of X). Install using:
```sh
sudo apt install fcitx5 fcitx5-rime
```

[Plum 東風破](https://github.com/rime/plum) is a configuration manager and input schema repository for RIME. This command clones the repository to `plum` in the current directory and installs it:
```sh
curl -fsSL https://raw.githubusercontent.com/rime/plum/master/rime-install | bash
```

[Rime-Ice 雾凇拼音](https://github.com/iDvel/rime-ice) is an out-of-the-box high-quality RIME configuration set with a comprehensive Simplified Chinese dictionary. It can be installed using Plum in the `plum` directory:
```sh
rime_frontend=fcitx5-rime bash rime-install iDvel/rime-ice:others/recipes/full
```

In Linux Mint's input method wizard (`mintlocale-im`), set Fcitx5 as the input method framework (or run `im-config -n fcitx5`). Log out and log back in to apply the changes. Open Fcitx5 config (`fcitx5-configtool`) and add RIME into the current input methods.

RIME configuration files are under `~/.local/share/fcitx5/rime`. Create file `default.custom.yaml` and add the following:
```yaml
patch:
  schema_list:
    - schema: rime_ice
```

Re-deploy RIME from the context menu of the Fcitx5 tray icon. Rime-Ice should be the active input schema for RIME.

To update Rime-Ice, execute:
```sh
rime_frontend=fcitx5-rime bash rime-install iDvel/rime-ice:others/recipes/full
```

A similar procedure can be followed to install other RIME schemas.

