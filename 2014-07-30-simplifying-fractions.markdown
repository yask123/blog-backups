---
author: yask123
comments: true
date: 2014-07-30 15:11:57+00:00
layout: post
slug: simplifying-fractions
title: Simplifying Fractions
wordpress_id: 171
categories:
- Python
---

Q]

The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

If the product of these four fractions is given in its lowest common terms, find the value of the denominator.

A]

This question can be solved by splitting each number of numerator and denominator and cancelling the same terms and observing if the term after cancellation retained it's initial value or not.I have explained the same concept through this flowchart:-

[![e33](http://yask007.files.wordpress.com/2014/07/e33.png)](https://yask007.files.wordpress.com/2014/07/e33.png)

This is the self explanatory code in python implementing the same concept:-



[code language="python"]

import math
pro_num=1
pro_den=1
def resolve(num):
	last=num%10
	num=math.floor(num/10)
	first=num%10
	return first,last
count=0
for num in range(10,50):
	for den in range(50,100):
		a,b=resolve(num)
		c,d=resolve(den)
		new_num=0
		new_den=0
		if a==c :
			new_num=b
			new_den=d
		if a==d:
			new_num=b
			new_den=c
		if b==c:
			new_num=a
			new_den=d
		if b==d:
			new_num=a
			new_den=c
		try:
			if num/den == new_num/new_den and b!=0 :
				pro_num*=new_num
				pro_den*=new_den

				print ('abcd:=')
				print (a,b,' a,b ')
				print (c,d,' c,d ')
				print ('old:-'+str(num)+'/'+str(den)+' New :'+str(new_num)+' /'+str(new_den))
				count+=1
		except:
			pass
print (count,' count ')

print (pro_num,' / ',pro_den)

[/code]

