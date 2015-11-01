---
author: yask123
comments: true
date: 2014-07-27 21:30:53+00:00
layout: post
slug: finding-total-maximum-by-tree-recursion
title: Finding total maximum by Tree Recursion
wordpress_id: 158
categories:
- Python
tags:
- Python
- recursion
---

I was trying this problem for quite some time and got frustrated!I didn't have much recursion practice lately  , that's why i stumbled so badly.I tried doing some basics problem on recursion first, like multiplication[a+a*(b-1)] , Fibonacci series and then came back to this problem and was finally able to solve  it  :)

This is the problem.



[![e18Q](http://yask007.files.wordpress.com/2014/07/e18q.png)](https://yask007.files.wordpress.com/2014/07/e18q.png)





The idea may seem a bit complex at first , trying to find length of each path and then selecting the max one.But there is an easier approach. Let's start from the top '3' , now should we go right '7' or '4'? Actually , we don't know yet , which path we should take so we pause at this condition for a while we collect some more information.[Heading toward recursion , right!]

Hmm  , lets write it 7+x and 4+y .We can't compare them yet.x /y is the sum obtained from the complete path[Maximum possible].

So now we put 7 and 4 as the father of the tree respectively and repeat the same process , should 7 go with 2 or 4? We don't know so lets write 2+x1 and 4+y1 and pause while we find out maximum x1 and y1 possible. Now we put 2 and 4 as root of the tree , and ultimately we reach at the child with no longer any child.So then , the maximum value they can return is their original value .This value is passed on to the top ,where we paused for this solution ,we calculate and pass more information to upper level and so on until we reach the top of the tree!



Another query you may have is how to store this triangular data ?I have stored them all in double dimension array and where there were spaces I have added '0' ,[probably should be replace by '-' ].
[code language="python"]


data =  [[0,0,0,3,0,0,0,],
		 [0,0,7,0,4,0,0],
		 [0,2,0,4,0,6,0],
		 [8,0,5,0,9,0,3]]

def find_max(data,x,y):
	if x>=len(data):
		return 0
	left_value=find_max(data,x+1,y-1)#Making left child father
	right_value=find_max(data,x+1,y+1)#Making right child father

	if left_value>right_value:
		return left_value+data[x][y]
	else:
		return right_value+data[x][y]

print (find_max(data,0,3))#Pass the position of root 			



[/code]

[![anse18](http://yask007.files.wordpress.com/2014/07/anse18.png)](https://yask007.files.wordpress.com/2014/07/anse18.png)

This works for small triangles , but will be incredibly slow for bigger data.Notice like the previous problem ,we are repeating the same instructions for finding out the values which were already calculated .Thus we can store the values in hash-map and use ;Memorization' technique for boosting the speed.
