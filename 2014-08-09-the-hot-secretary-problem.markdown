---
author: yask123
comments: true
date: 2014-08-09 12:36:08+00:00
layout: post
slug: the-hot-secretary-problem
title: The  Hot secretary problem!
wordpress_id: 269
categories:
- Maths
---

[![secretary](http://yask007.files.wordpress.com/2014/08/dick-parsons-explains-why-the-way-to-carl-icahns-heart-is-through-his-secretaries1.jpg)](https://yask007.files.wordpress.com/2014/08/dick-parsons-explains-why-the-way-to-carl-icahns-heart-is-through-his-secretaries1.jpg)



Imagine a situation , where you have to recruit a secretary and there are large number of them to choose from.Each one of them arrives one by one for an interview and you are supposed to select only one of them , at the spot and decide which one to recruit .
 <!--more--> 

What could be the most optimal way to select the best one?If the first applicant arrives and she seems average  , should you select her?Maybe a better one is standing next in the queue , or maybe she the best one of all! We don't know ! There are so many possibilities!

To select the best one , we obviously can't select the first one.We need some data before we can start comparing.This way we may lose the best candidate , but will select a good candidate for sure.But how many should we scan before actually starting recruiting?Let's say , we will scan all the applicants till the position 'k' and not recruit a single one of them.Then next applicant better than all of applicants scanned till k , will be selected.This method could be confirmed by trying with only 3 applicants and for k=1 here we get the best probability .Now for infinite number of applicants , we can't do hit and trial. Let's find 'K'. The probably of selecting the best candidate by this method will be [Using Total probability method]

$latex p(x)=\sum p_i * \frac {1}{N} $

Lets start taking cases , probability of selection under position k is zero.

Maybe the applicant just after k is the best one , probability of her selection is $latex \frac{1}{1}$

Maybe the best one is after k+1 is the best ,  probability of her selection is $latex \frac{1}{K+1}$w

We continue to do so and add them all , we get:-

$latex p*(\frac{k}{n})= 0 + \frac{1}{n} * 1 + \frac{1}{n}*\frac{1}{k+1} + \frac{1}{n}*\frac{1}{k+2}+ \frac{1}{n}*\frac{1}{k+3}+ ..... \frac{1}{n}*\frac{1}{n-1} $

Taking $latex \frac{k}{n}$ common , we get:

$latex \frac{k}{n} * ( \frac{1}{k} + \frac{1}{k+1}+ \dotsi$

We know this series ! , lets substitute!

$latex \int \frac{1}{x} \, \mathrm{d}x$ from k to n

Integrating we get $latex \log x $

where x = $latex \frac {k}{n} $

Now our function is $latex -x * \log x $

This function has a maximal , we get the maximum value by differentiating and equating to zero.

We get k = 37%

Thus we should scan 37% of all the secretary and select the next one if she is better than all we have scanned.This will give us the best result possible.

You can learn more about the problem [here ](http://en.wikipedia.org/wiki/Secretary_problem):
