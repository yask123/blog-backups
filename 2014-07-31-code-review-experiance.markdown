---
author: yask123
comments: true
date: 2014-07-31 12:37:40+00:00
layout: post
slug: code-review-experiance
title: Code Review experience
wordpress_id: 187
categories:
- Python
---

![Code Review](http://www.jasonawesome.com/wp-content/uploads/2010/06/sally-code-review.png)

After attempting the question 35 from  Euler's project and getting it right in first attempt I felt really good about my self.The program took less than 30 seconds to evaluate all the numbers under one million and counted how many of such number are circularly primes.

Eg. 197, 971, and 719 are all primes , thus 197 should be counted.Then I thought to upload my code on code review to get suggestions from people.This helped me a lot.I wasn't expecting any one to decipher my code , but to my surprise I received 3 brilliant answers very quickly.All of them were very constructive.I especially liked 'josay's ' answer .I didn't know we could use 'then' with 'for' in Python [point 3]. He pointed out some gaping holes in my program.



This was my program

[code language="python"]
import math
data ={}

def isPrime(n):
	global data
	if n in data:
		return data[n]

	for num in range(2,math.floor(math.sqrt(n)+1)):
		if n%num == 0:
			data[n]=False
			return False
	data[n]=True
	return True
count =0
data ={}

for num in range (2,1000000):
	q=False
	num=str(num)
	for i in range(len(num)):
		if (isPrime(int(num[i:]+num[:i]))):
			q=True
		else:
			q=False
			break
	if q:
		count+=1
print (count)			

[/code]

1)Should always use  [Sieve of Eratosthenes](http://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) when finding prime number

2)Avoid using Global variables in python , sometimes gets very difficult to debug your own program

3)Note this snippet in my program:

[code language="python"]

for num in range (2,1000000):
	q=False
	num=str(num)
	for i in range(len(num)):
		if (isPrime(int(num[i:]+num[:i]))):
			q=True
		else:
			q=False
			break
	if q:
		count+=1
[/code]

Here I am using variable q to check if all the permutations of the numbers were prime.If any one of them isn't , it doesn't make sense to continue further , so I quickly break and come out of the loop.But 'josey' showed me another nifty way to do the same , the for-else combination in Python.We can use this combination to detect if the break statement was executed in the code or not without any use of variable.How cool is that?

Now the chunk reduced to :-



[code language="python"]
 for i in range(len(num)):
        if not primes[int(num[i:]+num[:i])]:
            break
    else:
        count += 1
[/code]

This could further be cleaned up by using `all ` function

[code language="python"]
  if all(primes[int(num[i:]+num[:i])] for i in range(len(num))):
        count += 1
[/code]

Now it looks like a real python code!





  1. Another thing to notice is , since all the permutations should be prime , first one should also be prime , thus it can't be an even number.Thus we should use another argument in the for loop to skip by '2' to only iterate odd numbers



All these patches request when applied and patched , my program ran a hell lot faster than before.I am sure the results would be more astonishing for higher numbers.

[This ](http://codereview.stackexchange.com/questions/58610/efficiency-of-project-euler-problem-35)is the link for my question on Code Review[Stack Exchange]
