---
external: false
title: Enhancing LaTeX Compilation Speed on Windows
description: Simple solution using WSL2.
date: 2024-10-31
---

It is common knowledge that the file I/O efficiency of Linux generally outperforms that of Windows. This makes it extremely slow when one is compiling a regular (not even large) LaTeX file on Windows since LaTeX refers to LOTS OF small files during compilation.

This can be simply solved by using LaTeX from a Linux subsystem.

## Configuring WSL2

![Turn Windows features on or off](/images/windows-features.png)

First, type "Turn Windows features on or off" in taskbar search and check on "Windows Subsystem for Linux".

After installing WSL, type the following command to make sure that the installation is successful:

```sh
wsl --version
```

It should appear as a 2.x version.

After that, install an Ubuntu distribution (the latest version should be fine):

```sh
wsl --install ubuntu
```

Follow the instructions to set up the username and password, and you should now be able to enter the subsystem via command `ubuntu`.

## Installing TeX Live

The next step is to install TeX Live within the subsystem. The installation is rather simple:

```sh
sudo apt install texlive-full
```

This would install all packages, including a lot of them that might not be useful (for example, a lot of packages specified for other languages). But since this is a very straightforward and easy way and only takes about 8GB of disk space, it should be acceptable.

Now commands such as `latex`, `pdflatex`, `xelatex`, etc. should be available.

## ... and finally using it

The best practice should be doing everything solely within the Linux system (or entirely in its file system). Anything from connecting to it via SSH from a terminal to connecting using the remote host feature in VS Code should be fine. This promises the maximum compilation speed possible.

However, there are always cases that you would need to do compilation on files on Windows (like some preexisting projects). WSL mounts the whole Windows file system under `/mnt/[DRIVE]/...`. It is said that reading Windows files from WSL would be a lot slower, but as long as the compilation process takes place in the subsystem (where all small files are read), it still boosts the process. Still, this has no difference with dealing with files directly inside Linux on the user side. With all LaTeX commands available, plugins like LaTeX Workshop in VS Code should work properly.

Through testing, this makes it at least 5x faster than directly using the TeX Live on Windows, especially for XeLaTeX.


