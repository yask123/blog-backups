---
author: yask123
comments: true
date: 2015-03-28 18:34:20+00:00
layout: post
slug: my-secret-for-productivity-p
title: My secret for productivity :P
wordpress_id: 403
categories:
- Life
---

I was recently writng a summer of code proposal where I had to put up screnshots. Many many screenshots!

So it was:

 <!--more--> 


    
  1. Press command+shift+4

    
  2. open url browser

    
  3. visit some image sharing website

    
  4. click upload

    
  5. browse the screenshot file

    
  6. click upload

    
  7. Phew

    
  8. Now right click the url

    
  9. click copy

    
  10. Delete the screenshot file from my computer



Thats freaking 10 steps which were driving me crazy! So I had to write a script.

It’s a python script which will do all of that in one keyboard short cut.

I was going to use my own web app [imagepastry] for this.But then I saw imgurl has really cool api for image upload.So I used it instead.

For creating unique file names for every screenshot I used `currentDatecurrentTime`.png format

Create as many screenshots without cluttering your screen!

[Link](https://github.com/yask123/AutoScreenshotUploader-/tree/master)

In OSX you can add keyboard shortcuts to the script by Automator.

[code language="python"]

import base64
import requests
import os
from datetime import datetime
import os
import webbrowser
os.getcwd()

#This api key is only for testing. If you plan to use this script , please get your own api :)

api_key = "4adaaf1bd8caec42a5b007405e829eb0"
url = "http://api.imgur.com/2/upload.json"

os.system('')

filename=datetime.now().strftime('%Y-%m-%d%H:%M:%S')
t=filename+'.png'

print t
os.system('screencapture '+t)
fileadd=os.getcwd()+'/'+t

fh = open(fileadd, 'rb');
base64img = base64.b64encode(fh.read())
r = requests.post(url, data={'key': api_key, 'image':base64img})
print (r.json()['upload']['links']['original'])
link = r.json()['upload']['links']['original']

os.system("echo '%s' | pbcopy" % link)
webbrowser.open(link)
os.command('rm fileadd')

[/code]

![](http://yask007.files.wordpress.com/2015/03/a4847d08-2c66-4cd7-9205-3526ceb94558.png)
