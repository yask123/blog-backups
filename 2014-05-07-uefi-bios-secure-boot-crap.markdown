---
author: yask123
comments: true
date: 2014-05-07 09:34:18+00:00
layout: post
slug: uefi-bios-secure-boot-crap
title: UEFI /BIOS secure boot crap!
wordpress_id: 65
categories:
- linux
tags:
- boot repair
- secure boot
- Ubuntu
- UEFI
- windows Powershell
---

BIOS <del>is</del> the first thing that appears in older computers.

I recently purchased a new Laptop with UEFI . It felt awesome at first.The booting experience was quick and smooth.There was no flickering in the screen to indicate now the windows starts to load.Instead , the loading appears almost instantly as you press the power button.

I had purchased this laptop as it came with pre-installed windows.Never had I thought this would create wonderful problems for me.I am seriously addicted to Linux.But also wanted Genuine windows on the dual boot.But little did I knew about this stupid secure boot crap.

At first I created a 64-bit Ubuntu(14.04 LTS) .It refused to boot up at all.I disabled secure boot , no changes.I changed from UEFI to CMS , Ubuntu loaded up , but failed to recognize windows 8.1 on the other partition.I installed Ubuntu in another partition and it booted after the smooth installation.

Problems?

1)Brightness wouldn't change at all.It was 100% , and my eyes were under strain.But I looked in the support forum and solved the problem.



	
  * Open terminal

	
  * Type "$ sudo gedit /etc/grub.d/10_linux

	
  * Edit the file

	
  * Replace where $4 is written by "args="acpi_backlight=vendor $4"

	
  * Save and exit gedit

	
  * type $ sudo update-grub && sudo reboot


2) Windows 8 doesn't show up in the GRUB menu.This is probably because it was preinstalled in UEFI mode.But then I tested it in windows Powershell command , it returned "False".But why can't i boot Ubuntu in UEFI mode?

I also tried ubuntu's boot repair , but situation got worse.I got runtime error , and had to reinstall ubuntu to bring it to it's original state.

I am done with this now.No more experimenting on it.To boot to windows i'll set UEFI mode , for booting in Ubunto , CMS mode.




