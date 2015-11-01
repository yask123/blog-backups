---
layout: post
title: "Tango with Django"
date: 2015-04-05 20:52:41 +0530
comments: true
categories: 
---
![](http://i.imgur.com/lNdCyzL.png
)
Recently I was working on a Django web application.
I was already developing web applications on Google App engine python sdk platform for quite sometime.But...
<!-- more -->
But I think I prefer django now for reason that it provides awesome abstraction and at the same time is the purest python framework.

This means I can run my bash script on `Herkoku` server which interferes with it's model database or maybe play with the database model interactively on it `manage.py shell` python shell.

App engine also resitricts you from using any other web hosting servers. I don't like restrictions. Although setting up a GAE app is much easier.

So I had an awesome script that could make API calls to a Facebook group `Tribe of Dardnaak jokes` and extract all the posts. I wanted to play with this data in database and Django's `manage.py shell` provided the interactive environment to learn and play at the same time.

![](http://i.imgur.com/iX2nbgQ.png
)

At this moment the script isn't intergated inside the web app but instead is run from `Heroku`'s server. So the script runs from `heroku run bash ./script` and fiddles with Django's models.

At the moment I am reading ~2000 posts from the group's post and storing the top ~120 feeds in database. I think I can increase this number to around 5000 to get better results.

I made some more tweaks in the script file. The results are much better and will reflect on the webpage when I push the changes later (~ Maybe next week).

Another crucial requrement at this stage is a user's model which is lacking. So to restrict a user from making multiple upvotes in a single joke I had to use `Session` even though it is temporary (It will remember data for ~20 days). 
![](http://i.imgur.com/OYH6WKH.png
)

But since the feed data is dynamically changing there is a high probability that the joke won't be listed for the next ~20 days (unless it recieved extraordinary likes).

Setting up a user model will get rid of the current `session` hack.

Check out the current version:
[Dardnaak Jokes](https://dardnaak.herokuapp.com/)
![Dardnaak Jokes web app](http://i.imgur.com/kXESugZ.png)


