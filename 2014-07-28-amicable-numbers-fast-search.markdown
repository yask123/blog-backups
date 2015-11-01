---
author: yask123
comments: true
date: 2014-07-28 15:23:45+00:00
layout: post
slug: amicable-numbers-fast-search
title: Amicable numbers fast search
wordpress_id: 164
categories:
- Python
tags:
- euler
---

[![e21](http://yask007.files.wordpress.com/2014/07/e21.png)](https://yask007.files.wordpress.com/2014/07/e21.png)



In this question we are required to find all the amicable numbers in the given range.As explained amicable number's condition , they exists in pair and one's sum of all divisor is equal to the other number and sum of all the divisor of the other number is equal to the first number.

As you might have guess , we will be calculating the sum of divisor a lot! We better make this function efficient.We can in fact find the sum of divisor without actually finding each and summing each divisor.Take a look at this proof!

If a number[p] is prime , it's sum of divisor is p+1

if the number is  $latex p^n$ then sum of divisor = $latex p ^1 + p^2+..... p^n + 1$

This is a G.P whose sum is $latex \frac { { p }^{ n+1 }-1 }{ p-1 }$

Another thing to remember is  , if $latex f(x) $ is a function which returns sum of divisors ,then $latex f(ab)= f(a). f(b) $

Since  , as Euler once said any number can be represented uniquely by it's multiple of prime numbers , lets re write $latex N$

$latex N = p^n+ Q^{n_1}$ where p , q .. are it's prime factors.

For a prime number raised to a power , we already saw a formula to find the sum of all it's divisor .

Note:

I have implemented the same logic in this code.I am using the same prime factorizing method from the previous problem.The approach is simple.I find the sum of divisors of all numbers in the range and in hash-map store in this fashion {Number:Sum of divisor}

.While calculating any number's sum of divisor I see if any mapped value exist for the same number as the key , if yes , I further check if the value in that key [divisor of some other number ] is equal to the number I am currently pointing at.If both conditions are met , I store both the numbers in a List  , and return it after a full scan.

[code language="python"]

import math
import collections

def isprime(n):
	for num in range(2,math.floor(math.sqrt(n))+1):
		if n%num==0:
			return(False)
	return(True)

def findfactors(n):
	primes=[]
	b=0
	for num in range(2,math.floor(n/2)+1):
		if isprime(n):
			primes.append(n)
			break
		c=n
		if(n%num==0 and isprime(num)):#Numbers must be prime and should divide n
			"""B=n and A=num and C=B/A"""
			c=n/num#Refer to the image in Blog
			primes.append(num)
			while(c%num==0):#Continue using num as long as it divides
				primes.append(num)
				b=c
				c=b/num
		n=c#Refer to the image in blog
	return(primes)

def divisor_sum(n):#Returns sum of all proper divisors
	factors=collections.Counter(findfactors(n))
	pro=1

	for each_key in factors:
		#for 2^n [2:n] means 2 is key and n is value
		try:
			pro*=(math.pow(each_key,factors[each_key]+1)-1)/(each_key-1)
		except:
			pass

	return pro-n
def get_amicable():
	data={}
	amics=[]
	for num in range(2,10000):
		d_sum=math.floor(divisor_sum(num))
		#I store like [num:data]
		if d_sum in data:
			if num == data[d_sum]:
				amics.extend([d_sum,num])
		else:
			data[num]=d_sum
	return(amics)

print (sum(get_amicable()))

[/code]

[![ans_e21](http://yask007.files.wordpress.com/2014/07/ans_e21.png)](https://yask007.files.wordpress.com/2014/07/ans_e21.png)
