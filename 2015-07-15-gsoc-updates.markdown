---
layout: post
title: "GSoC Updates"
date: 2015-07-15 13:35:53 +0530
comments: true
categories: gsoc

---
[Lastly](https://codereview.appspot.com/252930043/) I worked on UserSetting. But most of that work had to be reverted after discussions. I was pointed to [this issue](https://bitbucket.org/thomaswaldmann/moin-2.0/issues/471/merge-most-basic-theme-templates-into
) where it is suggested to merge template with common features.
<!--more-->
The alternative was to use `less mixins`. So for eg. form styling with Bootstrap :


{% codeblock lang:css %}
form input,textarea {
    .form-control;
}
{% endcodeblock %}


But this resulted in significant increase in `.css` file.

Lastly I had to resort to editing form macros to use `Bootstrap compnents`.


So exclusive form macros for themes. While this does increase the codebase slightly, their won't be any performing issue in site loading.

But I ~~am not using~~  can't use Bootstrap `nav-tabs`, instead I styled it to fit the theme. Here is how it looks:
{% img http://i.imgur.com/neyADlO.png %}

[Previously](https://codereview.appspot.com/252930043/)  I had implemented these tabs with Bootstrap components, but that did look like an overplay since I also had to write separate javascript for indicating `*` symbol to unsaved forms.


I also worked on `index` page to use Bootstrap components (`Buttons, Paginations..`) .

{% img http://i.imgur.com/YJQMH1N.png   %}

Content inside the footer is now more consistent by a simple trick I learned from `css tricks blog`

{% codeblock lang:css %}
.footer{
  position:relative;
  ...
}
#moin-creditlogos{
  position: absolute;
  top: 10px;
  ....
}
{% endcodeblock %}

Roger occasionally `forks` my repo to test my work. [He noticed a bug](https://moinmo.in/MoinMoinChat/Logs/moin-dev/2015-07-08) `irregular header collabse in header in mobile view`. I fixed the issue in the last commit.

For error validations which looked ugly :
{% img http://i.imgur.com/iDnME65.png %}

I used `HTML 5` validations and pattern maching (for emails, password.. etc).


{% img http://i.imgur.com/WZumOQM.png %}


{% img http://i.imgur.com/czU7LR6.png %}

There was also a slight bummer last week.

 I was using some extension in mercurial which made numerous commits without my consent. `Ajitesh` suggested to delete the repo and recommit all changes.

 That took some time, but I took that as an opportunity to write more verbose [`commit messages`](https://bitbucket.org/yask123/moin-2.0/commits/all)


### CheckList:
* Fix broken search (Fixed ✓)
* Fix footer icons coming almost at the border (Fixed ✓)
* Fix alignment of the buttons in modernized forms (Fixed ✓)
* Modernized item history still has old tables (I'll do it today)
* Give a border around text input boxes in modernized (✘)
* Highlight the content in the modernized theme else it looks too much like basic(✘)

[Here](https://bitbucket.org/yask123/moin-2.0/commits/d4611af03078538af15e488fda91fdc2c30385bb) is the latest commit I pushed.


### Other Updates

I was invited to give a speech in [Software Development: The Open Source Way](https://www.facebook.com/events/874259285973030/?ref_newsfeed_story_type=regular&action_history=null) in IIIT-Delhi.

{% img https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xfp1/t31.0-8/s2048x2048/11046471_10204394056679731_3389022122003502896_o.jpg %}

It was a wonderful experience, I love talking/motivating people to use and contribute `opensource` softwares.

And the response was amazing! Couple of people complimented me personally and requested for link to my slides :)

{% img http://i.imgur.com/IvEynh4.png %}


### Teaching Django in college

I love django and I am currently teaching first year students of my college python and Django. This is truely an amazing experience!

Again, response is pretty good.

{% blockquote Ankita Khurana @Wordpress https://anki25.wordpress.com/2015/07/10/first-but-not-the-last/ First but not the last %}
His words are so motivating . that i tend to do whatever he tells us .. he told us to start blogging …so here i am .. writing my first blog ."
{% endblockquote %}

{% blockquote %}
"This Workshop is mentored by Yask Shirivastava ….he is 1 yr elder to us . But seriously is too good , infact better than the final year students"

{% endblockquote %}

{% blockquote Uday Upreti @Medium https://medium.com/@uday1201/well-today-s-class-was-just-an-exploration-of-the-details-of-making-up-the-django-project-3b0315cf6537 Personal Blog %}
 I think ,I’m particularly doing well in this, but yeah it needs a lot of time and hard work . You may have the best teacher but you only learn when u explore it yourself. "
{% endblockquote %}

Well, thats what keeps me motivated. I am trying my best not just to teach them concepts of web development but also to ignite passion among them.

I also migrated my blog to `Octopress 3.0`. Migrating was easy as all my images are are hosted on `imgur`.

Using the script I wrote which uploads screenshot to imgur and copies the url to clipboard. Very very convenient. [Check it out](http://iyask.me/AutoScreenshotUploader/):
