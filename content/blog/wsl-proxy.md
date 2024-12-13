---
external: false
title: Enabling WSL to use Windows proxy
description: Connect WSL to local area network to use Windows proxy.
date: 2024-12-13
---

The solution is rather simple. Edit `%USERPROFILE%\.wslconfig%` and enter:

```conf
[experimental]
autoMemoryReclaim=gradual # gradual | dropcache | disabled
networkingMode=mirrored
dnsTunneling=true
firewall=true
autoProxy=true
```

Then execute:

```shell
wsl --shutdown
```

WSL should then work as expected and use Windows' proxy.
