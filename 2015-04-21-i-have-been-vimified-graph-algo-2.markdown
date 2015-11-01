---
author: yask123
comments: true
date: 2015-04-21 08:31:26+00:00
layout: post
slug: i-have-been-vimified-graph-algo-2
title: 'I have been vimified  | Graph algo #2'
wordpress_id: 423
categories:
- Life
---

Inspired from [slides](https://www.dropbox.com/sh/ot1cdzqoorzobm6/AAAObIcj8xgsOfGbj4CppPPCa?dl=0) I decided to write my own DFS implementation [ Just to get the hang of vim ].
 <!--more--> 

Nah! I actually wrote lots of code [ Now I force my self to make Django applications on vim , more on that later. ] to get the hang of it, Just passing DFS gist here because I think it is cool :P .

It was fun writing it because now I feel like a vim ninja. After weeks of frustration I finally feel like I have got the hang of it. I can perform all the basic thing like buffer copy paste , clipboard copy paste with indentations :) ,beautiful color scheme , awesome iterative search , auto complete , python auto indent , gist , running scripts from vim and much more :

Here instead of making `visited` dictionary object I instead made `visited` list and conditioned `if in list` to avoid putting up the visited in `stack` .
{% gist cedc8944b3460f0970f4 %}
