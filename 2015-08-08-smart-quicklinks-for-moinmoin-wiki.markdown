---
layout: post
title: "Smart QuickLinks for MoinMoin wiki"
date: 2015-08-08 13:55:04 +0530
comments: true
categories: gsoc
---

### Modernized theme
Quicklinks is an important feauture in Moin Moin wiki. It allows users to save important wiki pages. Since this feauture is similar to the way we bookmark important links in our web browser, I implemented a similar design for saved quicklinks as its in google chrome browser.
<!--more--> 

{% img http://i.imgur.com/MvJtlJ9.png %}

It shows all bookmarks as `li` in navbar that it can accomodate and pushes rest of the bookmarks in the `dropdown`.
	Similar design in Moin Moin wiki in `modernized theme`.
 

{% img http://i.imgur.com/c9kpDmq.png %}


I first tried to implement this in `jinja` template by limititng the quicklins up to `9` in navbar. But this obviously was flawed  as this number could change depending upon the length of the tittle of quicklinks.

I thought of calculating no. of quicklinks that can be accomodated by iterations. But the design was non responsive. Finally I had to resort to `Javascript`. Now the design is flawless and is responsive.
### Basic theme

For basic theme, since quicklinks are stacked up vertically I implemented a new search wigdet for quick navigation.


{% img http://i.imgur.com/wZZ3AHn.png %}

[GIF](http://g.recordit.co/k5mI5bNa6y.gif)