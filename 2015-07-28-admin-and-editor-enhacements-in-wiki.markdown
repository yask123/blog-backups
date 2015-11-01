---
layout: post
title: "Admin and editor enhancements in wiki"
date: 2015-07-28 02:11:40 +0530
comments: true
categories: gsoc
---

Last week I was down with [`Chicken Pox`](http://i.imgur.com/79JnSe2.jpg). I had to take tons of [medicies](http://i.imgur.com/tYa4w82.jpg) :\ . 

Thankfully, I recovered.

<!--more-->
Recently I worked on  restricted  Admin page. Only a super user has access to administrative functions. To become the useruser add the following line in `wikiconfig.py`.



{% codeblock MoinMoin - wikiconfig.py %}
    # create a super user who will have access to administrative functions
    # acl_functions = u'+YourName:superuser'
    acl_functions = u'yask:superuser'
{% endcodeblock %}

The screenshots after changes.

{% img http://i.imgur.com/Uc8mNXG.png %}
{% img http://i.imgur.com/9evyBdb.png %}
{% img http://i.imgur.com/4tIYq9O.png %}


Other apparent changes from the screenshots are wider spread navbar and footers with bluish background. This was done to give it distictive look from `basic` theme.

### Editor Changes

Currently MoinMoin has a dull editor. It's looks more like a simple text box than a editor. Thus basic toolbar for markdown,creole,html.. etc is an essential feature we are missing.

I used [MarkItUp](http://markitup.jaysalvat.com/home/) `Javascript` plugin to quickly set up the edior like features for our `Markdown` wiki.


The beautiful thing about this plugin is that it enables us to easily modify toolbar setting by modifying `set.js` file. This enables us to make editor that works for multiple syntax languages.



{% codeblock MoinMoin - set.js %}
var mySettings = {
	onShiftEnter:  	{keepDefault:false, replaceWith:'<br />\n'},
	onCtrlEnter:  	{keepDefault:false, openWith:'\n<p>', closeWith:'</p>'},
	onTab:    		{keepDefault:false, replaceWith:'    '},
	markupSet:  [ 	
		{name:'Bold', key:'B', openWith:'(!(<strong>|!|<b>)!)', closeWith:'(!(</strong>|!|</b>)!)' },
		{name:'Italic', key:'I', openWith:'(!(<em>|!|<i>)!)', closeWith:'(!(</em>|!|</i>)!)'  },
		{name:'Stroke through', key:'S', openWith:'<del>', closeWith:'</del>' },
		{separator:'---------------' },
		{name:'Bulleted List', openWith:'    <li>', closeWith:'</li>', multiline:true, openBlockWith:'<ul>\n', closeBlockWith:'\n</ul>'},
		{name:'Numeric List', openWith:'    <li>', closeWith:'</li>', multiline:true, openBlockWith:'<ol>\n', closeBlockWith:'\n</ol>'},
		{separator:'---------------' },
		{name:'Picture', key:'P', replaceWith:'<img src="[![Source:!:http://]!]" alt="[![Alternative text]!]" />' },
		{name:'Link', key:'L', openWith:'<a href="[![Link:!:http://]!]"(!( title="[![Title]!]")!)>', closeWith:'</a>', placeHolder:'Your text to link...' },
		{separator:'---------------' },
		{name:'Clean', className:'clean', replaceWith:function(markitup) { return markitup.selection.replace(/<(.*?)>/g, "") } },		
		{name:'Preview', className:'preview',  call:'preview'}
	]
}

{% endcodeblock %}

Thus we can easily load up different `set.js` file for different content type of editor. 

This is how it looks in `Markdown` editor.
This is how it look!
{% img http://i.imgur.com/bbLd5Ry.png %}

RogerHaase [tested this today](https://moinmo.in/MoinMoinChat/Logs/moin-dev/2015-07-27) .

Things in editor aren't fully functional yet as I am still in the process of integrating it.

### ToDos:
* QuickLinks
* Error Notification Styling

Commits made last week:



* [953a8cd](https://bitbucket.org/yask123/moin-2.0/commits/953a8cd57e3666df121ec5895af35586270af2f9) Local history page themed


* [c6f8ed4](https://bitbucket.org/yask123/moin-2.0/commits/c6f8ed45766b18d13b11df51542da23313307516) Fixed indicator color bug in usersetting


* [ecb9cfa](https://bitbucket.org/yask123/moin-2.0/commits/ecb9cfa043e67ec529397882f3691bad15155e0c) Enhanced breadcrumbs in basic theme


* [726692b](https://bitbucket.org/yask123/moin-2.0/commits/726692bb2991229baa636833736723f47220b344) stretched topnav and header

