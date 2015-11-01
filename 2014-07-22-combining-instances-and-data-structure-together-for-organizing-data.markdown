---
author: yask123
comments: true
date: 2014-07-22 10:09:04+00:00
layout: post
slug: combining-instances-and-data-structure-together-for-organizing-data
title: Combining instances and data structure together for organizing data
wordpress_id: 112
categories:
- Python
tags:
- python script
---

Say , we have to store details(name,age,branch,pointers in each semester ..etc) of every student in class.What could be the best way of organized data collection which could make it easy for us to access the details ?

In python ,we could use a list for storing details eg:

`
shyam=['Shyam Gupta','19','SE',[8.1,9.5,9.4]]
`

for numerous people , this will be a hectic process.We think of using OOP aproach , creating instance of a class Student and storing the details.Also , using hash-map would be a better way to organize stuff.If we could combine these two ?

Let's create a hash-map which stores the instances of different students mapped by a key , their name.
We can use inbuilt datastructure dictionary in python to understand it's implementation.

Let's create instances of student and store them in dictionary index'd by each students name.This way all our instances are organized in hash-map. How convenient would it be to extract details of every student!We will use this structure to find out the maximum pointers obtained by a particular student.
[Sample input in text file:Ram kumar,18,SE,9.4,9.5,7.5]

Note:I had to write the complete programe to show the concept working , the main step is in the function store_data() where we use maps dictionary to hold all the instances.Observe how easy it was at last for us to scroll through names of all student at last ;)

https://gist.github.com/yask123/007842da6b3d141bace8
