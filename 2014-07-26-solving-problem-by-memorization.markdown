---
author: yask123
comments: true
date: 2014-07-26 20:44:48+00:00
layout: post
slug: solving-problem-by-memorization
title: Solving problem by ‘Memorization’
wordpress_id: 142
categories:
- Python
---

[![QQQQQure](http://yask007.files.wordpress.com/2014/07/qqqqqure.png)](http://yask007.files.wordpress.com/2014/07/qqqqqure.png)

Take a look at this problem .We are supposed to find out the starting number for which chain produced is Maximum [Number should be less than a million]

By simple brute force method

[code language="c"]
#include <stdio.h>
#include <stdlib.h>
long getnext(long);
int main()
{
    unsigned long num=1000000;
    unsigned long maxlength=0;
    unsigned long l,temp,number;
    while(num>1)
    {
        temp=num;
        l=1;
        while(temp>=2)
        {
            l++;
            temp=getnext(temp);

        }
        if(l>maxlength)
        {
            maxlength=l;
            number=num;
        }
        num=num-1;
    }
    printf("%lu %lu",maxlength,num);

}

long getnext(long n)
{

    if(n%2==0)
    {

        return(n/2);
    }
    else
    {
        return((3*n)+1);
    }
}

[/code]

The problem is , it takes forever to find the solution.It works for smaller values of 'num' only.But we can significantly reduced this amount of time consumed.Notice the sequence for **10->5->16->8->4->2->1** , length=7 .Now fo**r 20 , 20->10->5...** , notice after 20 , the sequence of** 10 is repeated** , instead we can just say chain length for 20 is 1 + chain_length of 10.

Thus we keep finding out the length of each chain and store it in a hash-map with the number as a key and it's length as the value.If we encounter the same number again for which the length has already been calculated , we can just pull that value out by hash-map.This is how I have implemented it , written in Python

Here I am using 'cache' as a dictionary containing hash-mapped entries.I store values and also pull out values very conveniently in function calc_length()

[code language="python"]
cache={}#Stores mapped result
def find_next(n):#Next value of sequence
	if n%2==0:
		return(n/2)
	else:
		return(3*n+1)
def calc_length(n):#Magical method
	temp=n
	length=0
	while(temp>=2):

		if temp in cache:#If we have answer already!
			if n not in cache:#To avoid duplicates
				cache[n]=length+cache[temp]
			return(length + cache[temp])#Cool , eh!
		else:
			temp=find_next(temp)
			length+=1

	cache[n]=length+1#Useless
	return(length+1)

num=1000000#Big number!
answer=0
max_length=0

for num in range(2,num):
		#Finding length of each num

	length=calc_length(num)

	if length>max_length:#Only max needed
		max_length=length
		answer=num
print(max_length)
print(answer)

[/code]

[![pyresult](http://yask007.files.wordpress.com/2014/07/pyresult.png)](https://yask007.files.wordpress.com/2014/07/pyresult.png)

This made easier because of our awesome dictionary , which is currently holding tons of values!So, we can say the work load of processor was eased by the expense of memory use.This is how our maps look like! ;)

[![2ure](http://yask007.files.wordpress.com/2014/07/2ure.png)](https://yask007.files.wordpress.com/2014/07/2ure.png)
