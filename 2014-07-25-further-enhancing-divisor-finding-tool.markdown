---
author: yask123
comments: true
date: 2014-07-25 13:19:41+00:00
layout: post
slug: further-enhancing-divisor-finding-tool
title: Further enhancing divisor finding tool
wordpress_id: 124
categories:
- Python
---

I just recalled we had  a topic in Permutation and Combination where we were asked to find total number of divisor just by finding it’s prime factors.

Let’s see if we can apply this concept.As Euler said , every number can be expressed by unique prime numbers eg:

Number=p1^a * p2^b * p3^c , where p1,p2 .. are unique prime numbers.Then the total number of divisors will be (x+1) *(y+1)*…etc [Fundamental multiplication theorem].

Here is how I did it.

(This is the problem number 13 from Euler’s project)

Concept image (analogous to the variables used in code)

[![concept](http://yask007.files.wordpress.com/2014/07/untitled.png)](https://yask007.files.wordpress.com/2014/07/untitled.png)

https://gist.github.com/yask123/861c29cdd5ca1462f788

https://gist.github.com/yask123/90d04159d5f96d4d4c37
