---
author: yask123
comments: true
date: 2014-05-08 14:29:57+00:00
layout: post
slug: finally-grub-2-boot-menu-problem-solved
title: Finally GRUB 2 boot menu problem solved!.
wordpress_id: 69
categories:
- linux
tags:
- GPT
- partition type
- UEFI
---

To understand the solution , It would be better if we discuss about different types of partition and different UEFI first.

The most common partition type we have heard of is MBR.While I was trying to fix the bootloader , I realized mine had GPT partition.That meant I couldn't have loaded OS in UEFI mode as it was written is bootable USB for MBR system.

I downloaded a software and re-wrote Ubuntu , but this time for GPT with UEFI , and now the problem seems to have gone! ;) .

To write data ,or create partitions on the hard disks there it must have a Type of partition table.There are 2 types of them.The good old MBR(master boot record) and GPT(GUID partition table).

MBR was discovered way back in 1980s( I guess) , Well known for it's good compatibility with numerous operating systems , but limits the usage of the disk's size to 2 TB.

GUID works for bigger sizes , but requires compatible operating system and hardware.So , that was a n00b introduction to the partition tables.
