---
author: yask123
comments: true
date: 2015-03-31 19:49:24+00:00
layout: post
slug: simple-dfs-implementation-in-python
title: Simple BFS implementation in Python
wordpress_id: 410
categories:
- Life
---

I was revising some basic DS stuff. So this is mine basic implementation of BFS algorithm in the most simplistic form.
 <!--more--> 
[code language="python"]
graph = {'0': set(['1', '2']),
         '1': set(['2']),
         '2': set(['0', '3']),
         '3': set(['3'])}

visited={}
for each_node in graph:
	visited[each_node]=False

s='2'

queue=[]
queue.append(s)	

while len(queue) &amp;gt;0:
	s=queue.pop(0)
	print s
	for each_node in graph[s]:
		#print queue
		if not visited[each_node]:
			visited[each_node]=True
			queue.append(each_node)
[/code]

Neat eh?
