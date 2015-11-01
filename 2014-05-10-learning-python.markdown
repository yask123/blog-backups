---
author: yask123
comments: true
date: 2014-05-10 17:14:19+00:00
layout: post
slug: learning-python
title: Learning Python!
wordpress_id: 75
categories:
- Python
---

Finally doing some python work.I finally made a module and distributed it in pyPI[Python Package Index].Also , I couldn't stop myself from pushing the project to my repository.

The cool thing about modules of Python is that they can be easily installed , distributed and reused.Similar to libraries in Java , but it's easier in python to install the module.

To create an installable module , create a separate file setup.py which will be used to install via terminal .

It's contens should be as follows
`
from distutils.core import setup`

`setup( name = 'nester', version = '1.0.0', py_modules = ['nester'], author = 'Yask', author_email='yask123@gmail.com' , url = 'www.yask007.wordpress.com')`
`



Just make sure the py_module points to the name of the module python script.
to create a distribution package , type:`$python3 setup.py sdist`
to install this distribution type:`$python3 setup.py intall `
Use it in your python script my import name
and use the function by syntax`"pyname.funcName(arguments)"`

