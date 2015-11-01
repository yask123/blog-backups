---
author: yask123
comments: true
date: 2014-08-18 18:11:06+00:00
layout: post
slug: bvpmart-web-app
title: BVPmart ~Web App
wordpress_id: 286
categories:
- Google
- Life
- Python
---

[![Screenshot from 2014-08-18 20:42:17](http://yask007.files.wordpress.com/2014/08/screenshot-from-2014-08-18-204217.png)](https://yask007.files.wordpress.com/2014/08/screenshot-from-2014-08-18-204217.png)

Today I finished writing the web app '[BVPmart'](http://www.bvpmart.co.nr/) and deployed it on Google App engine.This is my 4th application on this platform and I followed the same scripting language , Python 2.7 for this.Although I did get a bit adventurous this time and decided to use [Jijna2 Python Template](http://jinja.pocoo.org/) [instead of Django] ,Nevertheless  it was fairly easy to learn due to its comprehensive documentation.

The idea was to serve the website as a place for advertisement for the products you want to sell/ donate.I intend to make this platform exclusively for my college students.The website has a clean form for taking input for advertisements.The advertisement data entered by the user is stored in our Google App Engine DataStore and displayed by a running loop in the front page querying the data from the database and displaying it on the main page arranged in descending order of ad's submit server time.

For the lovely front end I am using[ Google App Engine Boilerplate ](https://github.com/coto/gae-boilerplate)

This is how it looks.

[![Screenshot from 2014-08-18 20:42:17](http://yask007.files.wordpress.com/2014/08/screenshot-from-2014-08-18-204217.png)](https://yask007.files.wordpress.com/2014/08/screenshot-from-2014-08-18-204217.png) [![Screenshot from 2014-08-18 20:43:43](http://yask007.files.wordpress.com/2014/08/screenshot-from-2014-08-18-204343.png)](https://yask007.files.wordpress.com/2014/08/screenshot-from-2014-08-18-204343.png) [![Screenshot from 2014-08-18 20:44:11](http://yask007.files.wordpress.com/2014/08/screenshot-from-2014-08-18-204411.png)](https://yask007.files.wordpress.com/2014/08/screenshot-from-2014-08-18-204411.png)

I believe there is lots of stuff yet to be done , like:

1)Google/Facebook sign in

2)AD content verification

3)SMS notification

4) I don't like the idea of openly sharing the phone number of the seller.Some mechanism to avoid this.

If you have any suggestions , please comment bellow or mail me at yask123@gmail.com

App Link: http://www.bvpmart.co.nr/

, http://bvpmart.appspot.com/
