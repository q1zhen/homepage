---
title: Rebuilding EFI partition
description: Workaround to purge or rebuild an EFI partition.
date: 2025-03-15
---

For some reason, I'm recently migrating my entire OS to Linux. However, at the same time, I still hope to have Windows installed alongside it. The problem I realised is that installing Windows after Linux would wipe the EFI partition (and I don't feel like manually re-configuring these things inside Linux). I also found that the partition in my computer is already messy with all leftovers by previous dual-system installations. Therefore, here is a tutorial for rebuilding the partition.

The first step is to get the [Media Creation Tool](https://www.microsoft.com/en-us/software-download/windows11). Using the tool and an external USB drive, make a regular Windows installation drive. Then, use any possible method to remove the EFI partition. This could be done within any Live CD or the Windows installation drive.

Boot into the Windows installation USB. Follow the guide and select "Repair Tool". Open Command Prompt from the Repair Tool.

First, check if there is any existing bootloaders existing:
```bat
bcdedit /v
```
If so, execute the following command to remove it:
```bat
bcdedit /delete {[identifier]}
```

Type `diskpart` to load the partition editing tool. To list all disks, run:
```
list disk
```

Select the disk to install the EFI partition:
```
select disk [identifier]
```

Run `detail disk` to check the disk information.

Then, create the EFI partition:
```
create partition efi size=512
list part
select part [identifier (of the new partition)]
```

Format it into FAT32 and leave `diskpart`:
```
format quick fs=fat32
assign letter=s
exit
```

If there already exists a Windows installation, then execute
```bat
bcdboot C:\Windows /s S: /f UEFI
```

The problem should be fixed.

