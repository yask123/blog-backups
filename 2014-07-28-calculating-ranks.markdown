---
author: yask123
comments: true
date: 2014-07-28 19:18:59+00:00
layout: post
slug: calculating-ranks
title: Calculating Ranks!
wordpress_id: 169
categories:
- Python
---

<blockquote>
  Q]
  
  Using [names.txt](https://projecteuler.net/project/names.txt) (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.
  
  For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 ![×](https://projecteuler.net/images/symbol_times.gif) 53 = 49714.
  
  What is the total of all the name scores in the file?
</blockquote>



This problem doesn't seem mathematically challenging , but this requires basic knowledge of reading from files and storing data in comprehensible state .I have stored each name in list via list comprehension and then made essential rank calculations .Here is the code:

[code language="python"]

with open('names.txt') as f:
	data = f.read()

names=data.strip().split(',')

cleaned_names=[each_name[1:len(each_name)-1] for each_name in names]
cleaned_names.sort()

rank=0
net_value=0
for each_name in cleaned_names:
	rank+=1
	alpha_value=0
	for each_char in each_name:
		alpha_value+=ord(each_char)-64
	net_value+=alpha_value*rank
print (net_value)	

[/code]
