---
layout: post
title: "Gsoc Update"
date: 2015-06-17 20:45:38 +0530
comments: true
categories: gsoc
---
### Informal Intro
{% blockquote @yask123,https://twitter.com/yask123/status/611206296411344897 %}
Phew! So my end-terms exams just ended on 15th June.
{% endblockquote %}
But I had long gaps in between my exams so I was contributing to MoinMoin side by side in my free time.
Now since my exams have finally ended, I can devote myself 100% to this. \o/
<!--more-->

### Progress
As I mentioned in my introductory blog post, we decided to use `Less`. I started by `modernized` theme. It used `stylus` for `CSS preprocessing`. Since our new `basic` theme worked on top of `Bootstrap's less` files we decided to redesign and port theme to work on top of it.
I finished writing the base new theme for `modernized` and also rewrote the base template `layout.html` to use this theme.

### Show me the code!!
[Code Review](https://codereview.appspot.com/245270044/) *On process*
#### Description: 
{% codeblock %}
This is a rewrite of the `layout.html` template to work on top of Boostrap.
It also replaces the old stylus theme by new modernized bootstrap theme. The theme is written in `theme.less` and `modernized.less` file. The rest of the .less files are Bootstrap's default less files.
To test it on your machine: compile this file MoinMoin/themes/modernized/static/css/theme.less by lessc `$ lessc theme.less > ../css/ `
So the files to look for are:
`theme.less`
`layout.html`
`modernized.less`
Rest of the less files are from bootstrap source.
Rest of the css files are compiled form of less files by lessc.

#ChangeLog from patch #2
Fixed the alignment of sub menu tabs and item views tabs
Added active visual effect to the current tab view
Fixed horizontal scroll bug
Fixed padding inside sub menu
Increased font size for wiki contents

Now the files to look for are :
`theme.less`
`layout.html`
`modernized.less`
'common.js'

{% endcodeblock %}
This is how our previous modernized theme looks:

{% img http://i.imgur.com/Z3giFwq.png %}


This is how I styled it's menu and sub menu tabs:
{% img http://i.imgur.com/0gaA1qh.png %}

New Roboto fonts for the wiki contents
{% img http://i.imgur.com/uYuMYoj.png %}

Complete new look:

{% img http://i.imgur.com/2SHHUOJ.png %}

The code review is still under process so no commits have been made as yet.
We also had a weekly meeting yesterday on *IRC channel* : *#moin-dev* where we discussed about our progress and future plannnings with all our mentors.

### My developement configuration

I like to see the changes as I make thus compiling less file to css everytime after I made minor change was a big No No.

I have added the complete project to `Codekit` and it automatically compiles and refreshes the page as soon as it detects any changes in the source code. :)


We use mercurial as our version control system and this project is hosted on Bitbucket.
I like to use sublime text as its super light.


### Future Plans

1. Make changes in `make.py` file to automate the less file's compilation for modernized theme.
2. Write CSS rules for all the elements
3. Design footer, user setting page,... etc.
4. Implement the changes mentioned my mentors on previous CR.
