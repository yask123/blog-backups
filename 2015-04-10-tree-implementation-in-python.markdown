---
author: yask123
comments: true
date: 2015-04-10 12:55:08+00:00
layout: post
slug: tree-implementation-in-python
title: Tree implementation in python
wordpress_id: 414
categories:
- Python
---

Python doesn't come with pre-defined tree objects but due to it's dynamic nature we can easily implement it either via objects attributes or by dictionary. For tree traversing I find this representation to be the most simplistic
 <!--more--> 

[code language="python"]

tree  = { parent : [left_child,right_child] , parent #2 :[left_child,right_child]....}

[/code]

It's easy for traversing , check out my inorder,postorder,pre-order traversal [by recursion]

```python 
tree = {1:[2,3],2:[4,5],3:[None,None],4:[None,None],5:[None,None]}

def inorder(root):
	
	if root == None:
		return 0
	inorder(tree[root][0])
	print (root)
	inorder(tree[root][1])

print inorder(1)

def postorder(root):
	if root == None:
		return 0

	postorder(tree[root][0])
	postorder(tree[root][1])
	print root

print postorder(1)

def preorder(root):
	if root == None:
		return 0

	print root
	preorder(tree[root][0])
	preorder(tree[root][1])

print preorder(1)
```

And while we are at it lets modify this to calculate the size of the tree
```python 
tree = {1:[2,3],2:[4,5],3:[None,None],4:[None,None],5:[None,None]}

def size(root):
	if root == None:
		return 0
	return (size(tree[root][0]) + 1 + size(tree[root][1]))
print size(1)
```



This technique is slow and uses recursion which can be ofcourse enhanced by implementing threaded tree.
