---
layout: post
title: "Writing a JS script for Facebook hacks"
date: 2015-01-20 01:36:48 +0530
comments: true
categories: 
---

Let's write a simple Javascript to instantly send invites to `Like a page` or `Send invities`.

Although there are various scripts already available online , but we can't trust them.Running malicious script on your Facebook page can be dangerous.

Let the hacking begun!
 <!--more--> 
Steps:

1. Open up your facebook page in Chrome/Safari 

2. Right click on the `invite` button and select inspect items.
{% img  /images/second.png  400 300 %}
3. Notice the class of the button. Copy this.
{% img  /images/third.png  500 300 %}
4. Next in your developer console select all such buttons with the class by following JS code.

```javascript 

document.getElementsByClassName("Paste_the_class_name");

```

This returns an array `inputs[]`.

 Iterate through this array and run `.click()` function for each.

```javascript 

for(var i=0; i < inputs.length;i++)
{
	inputs[i].click();
}

```

 Reward yourself with a hot cup of coffee :) 
