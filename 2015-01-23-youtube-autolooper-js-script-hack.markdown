---
layout: post
title: "Youtube AutoLooper JS script hack"
date: 2015-01-23 20:53:43 +0530
comments: true
categories: 
---

This song [Facebook - 10 Years Look Back Instrumental Music](https://www.youtube.com/watch?v=NJX17WtsaCk) was stuck in my head today.

I played this 3.4 minute video on youtube . Frustrated by clicking play button again and again after the music finished I decided to write a simple Javascript hack to auto-loop this music video.

<!--more--> 

### How did you do it ?

Using Chrome's Dev Tools I observed the source code , button properties and the youtube video player controls form.

Found the button by `ClassName` attribute and initiated self written ` doWork() ` function which sleeps while the song is playing and wakes up only after the song has finished playing , thereby avoiding unnecessary workload by browser.


### Show me the code!


Here is the final Javascript :
``` javascript 


var repeater;

function doWork() {


var time= document.getElementsByClassName("html5-progress-bar ytp-force-transform red")[0].getAttribute("aria-valuetext");

var t = time.indexOf("of");
var current_time  = time.substring(0, t-1);
var end=time.indexOf("seconds");
var total_time = time.substring(t+3,end-1);

 current_time=parseInt(current_time);
 total_time=parseInt(total_time);

var replayAfterTime= (total_time-current_time);

console.log("Will replay after "+replayAfterTime+" Seconds");


var input = document.getElementsByClassName("ytp-button ytp-button-replay");
    console.log("Trying to press Replay button");
	if(input.length)
	{
		input[0].click();
	}

 repeater = setTimeout(doWork, (replayAfterTime*1000)+500);
}

doWork();

```

I then built a Google Chrome extention to enable user's to easily enable `Auto-Looper` feauture on Youtube Player.

I couldn't submit this extension to chrome's app store as I havn't paid $ 5 for Developer account so you'll have to install this manually. 

Here are the instructions:

1. Go to chrome's setting page
2. Select Extensions 
3. Enable `Developer Options` 
4.  Select `Load unpacked extension ` 
5. Select the downloaded extension's extracted folder.

### How to use it?
A new youtube-looper icon will appear on your chrome after installation. 

While playing any youtube video , click on the youtube-autolooper icon. Your video is on loop! 
Enjoy!

### Wait .. Download link.?

Whhoops ! almost forgot , [here you go](https://www.dropbox.com/s/ivk5v0ekbxy1k92/Youtube-Looper-by-Yask%202.zip?dl=0)