---
layout: post
title: "GSoC Updates | Hackathon | Teaching Django"
date: 2015-06-25 18:24:33 +0530
comments: true
categories: gsoc
---

### Informal Intro
{% blockquote @yask123 %}
Ah! This week was a bit hectic. But I was able to do considerable amount of work.
{% endblockquote %}

I got all my pending code reviewed and commited the changes to my repo after resolving issues. The patch had to go through a number of interations to resolve the issues in prior patches. The last patch fixed all the major bugs.
<!--more-->
As I mentioned in my previous post I ported modernized `stylus` theme to `bootstrap` by making changes in `Global Tempates`. But Roger Haase suggested to make exlusive templates for Bootstrap themes as making changes to `Global templates` would restrict all the other theme developers to use Bootstrap's components such as `row` , `col-md-x` , `nav` , `panel`.. etc. I also made changes in Global Templates to make sure that it doesn't conflict with any bootstrap theme that work on top of it.

## Show me the code!!

[ChangeLogs from CR #2](https://codereview.appspot.com/242460043/):
{% codeblock %}
#ChangeLog from patch #2
Fixed the alignment of sub menu tabs and item views tabs
Added active visual effect to the current tab view
Fixed horizontal scroll bug
Fixed padding inside sub menu
Increased font size for wiki contents

Automation + Global History
# Changelog 3 , new cr patch 1
Added automation. run `$ ./m css ` to automatically compile all the less files.
Modernized theme now runs with the current version of xstatic bootstrap.
Rewrote `global history` template
Changed font sizes at various places

Changelog #4
Made changes as suggested in last CR

ChangeLog #5
Created a special directory exclusively for modernized theme's template.
Added footer and breadcrumb.
Made changes as suggested by mentors in previous patch
{% endcodeblock %}

Some of the bugs in previous CRs were:


* HTML validation error due to use of  form  inside ul and unclosed div tags.This is fixed in my last commit.


* Design break issues in mobile views. Fixed in commit:


* Design break issue when breadcrumb's patch is too large. Fixed in this commit.

[ChangeLogs from CR #3:](https://codereview.appspot.com/245560043/)
{% codeblock %}

Changes in User Setting and common.js to support highlighting of current links in menu
# Added common.css
# Current opened tab now highlights in menu
# Various css rules written to work on top/with common.css
# Fixed the issue 'jumping of footer while changing tabs in user setting'
# Fixed issue with breadcrumbs when the location address gets too long.
# Fixed all the HTML error validation errors
{% endcodeblock %}

The issues with last CR's were discussed with mentors and fixed.
Quick summary of my commits:

I actually made a new branch in my fork of repo called `improvethemes`. Since I am doing things step by step and some things get broken in intermediatlry stages, It wouldn't have been right to commit changes in main branch. This can be easily merged when this feature is working 100% without any bugs.

Now back to summary:
I have made 3 commits as yet , 4th one with improvements in usersetting page is exptected soon :).
Anyway:

1. [Commit #1](https://bitbucket.org/yask123/moin-2.0/commits/1aefd749090633d9e8f456ee0bbe8ae64f99cd0c) : Created a new branch `improvethemes`

2. [Commit #2](https://bitbucket.org/yask123/moin-2.0/commits/90961106254ee93a02f7d9ec1cc1b94a85457f7a) : Wrote a new modernized theme based on bootstrap and also made it's template files (layout.html, global_history.html)
The template contains all the basic components such as navbar,sub menu, item menu, breadcrumb, footer.. etc.

3. [Commit #3](https://bitbucket.org/yask123/moin-2.0/commits/2739ae9d435146871c6aec152ae809e065df6637) :
Further improvements in modernized theme and few style fixes in basic theme
Improvements in modernized theme:# Added common.css
Current opened tab now highlights in menu
Various css rules written to work on top/with common.css
Fixed the issue 'jumping of footer while changing tabs in user setting'
Fixed issue with breadcrumbs when the location address gets too long.
Fixed footer jump while changing tabs in user setting in basic theme
Fixed design break issue in Basic theme's subscription box: http://i.imgur.com/4s1CIb3.png
Fixed design break in small resolution and removed form from under 'ul'


4. [Commit #4](https://bitbucket.org/yask123/moin-2.0/commits/473b16c00b1597c2a9b8464d8dc852959d0f537b): Fixed HTML validation error due to unclosed div tag

I also updated xstatic bootstrap here is the [commmit](https://bitbucket.org/yask123/xstatic-bootstrap/commits/942330589c64df20f73f2c6b77ca4afee8a09f73).
This updates Bootstrap to version : 3.3.5


## Show me the screenshots!!

{%img http://i.imgur.com/mVXNklu.png %}


{%img http://i.imgur.com/cxHhrfB.png %}


{%img http://i.imgur.com/sd9HPD8.png %}


{%img http://i.imgur.com/2Wg10ej.png %}


{%img http://i.imgur.com/ssN3WCy.png %}


{%img http://i.imgur.com/AzuSJSv.png %}

## Other Updates ?


#### Hackathon


Yea! I participated in  continuous 34 hours AngelHack Hackathon this week. It was a greeat experience and we made an opensource chat summarizer tool. I am really proud of this app. We worked together all night all day! It was a great experience. Well done Vinayak Mehta, Ketan bhutt , Pranu!.

About this app:
Summarize it is a chat summarizer plugin for instant messaging applications. It summarizes the large content of chat logs which enables users to quickly understand the current context of the conversation. Currently Summarize it works on top of Slack as its plugin.

[App Link](http://iyask.me/SummarizeIt/)

## One last thing...!


#### Teaching Django


 I have started teaching Django web developement to college students as a part of their summer training. First class was on tuesday which was an introductory class. All of the students are enthusiastic! I really like Django and this is going to be a great experiance.
