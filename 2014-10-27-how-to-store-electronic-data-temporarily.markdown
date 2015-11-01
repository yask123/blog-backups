---
author: yask123
comments: true
date: 2014-10-27 10:56:17+00:00
layout: post
slug: how-to-store-electronic-data-temporarily
title: How to store electronic data temporarily ?
wordpress_id: 307
categories:
- Life
---

### Flip Flops!



![](http://cesinaction.files.wordpress.com/2011/11/pink_flip_flop.jpg)

Not these...!

![](http://upload.wikimedia.org/wikipedia/commons/c/c6/R-S_mk2.gif)

This will work!

:P

The motivation comes from the idea of representing all possible electronic data as 1s and 0s.An elegant design such as this one comprised of only 2 NOR gates is capable of holding 1 BIT !

The image of one shown above is of the simplest SR (Set Reset) flip flops.

The output of one gate is responsible for the output for another.

Let's look at the Truth Table of this:

<table class="wikitable" >
<tbody >
<tr >
SR latch operation[[12]](http://en.wikipedia.org/wiki/Flip-flop_(electronics)#cite_note-12)
</tr>
<tr >
[Characteristic table](http://en.wikipedia.org/wiki/State_transition_table)
[Excitation table](http://en.wikipedia.org/wiki/Excitation_table)
</tr>
<tr >

<td >**S**
</td>

<td >**R**
</td>

<td >**Qnext**
</td>

<td >**Action**
</td>

<td >**Q**
</td>

<td >**Qnext**
</td>

<td >**S**
</td>

<td >**R**
</td>
</tr>
<tr >

<td >0
</td>

<td >0
</td>

<td >Q
</td>

<td >hold state
</td>

<td >0
</td>

<td >0
</td>

<td >0
</td>

<td >X
</td>
</tr>
<tr >

<td >0
</td>

<td >1
</td>

<td >0
</td>

<td >reset
</td>

<td >0
</td>

<td >1
</td>

<td >1
</td>

<td >0
</td>
</tr>
<tr >

<td >1
</td>

<td >0
</td>

<td >1
</td>

<td >set
</td>

<td >1
</td>

<td >0
</td>

<td >0
</td>

<td >1
</td>
</tr>
<tr >

<td >1
</td>

<td >1
</td>

<td >X
</td>

<td >not allowed
</td>

<td >1
</td>

<td >1
</td>

<td >X
</td>

<td >0
</td>
</tr>
</tbody>
</table>

The action state is dependent of the input combination.





  * When S is high and R is low Q->High



  * To hold this value put S to low



  * For resetting  R->High [Q->low]



  * Again to hold S->Low  R->low






Since Q and Qbar is same for S->1 and R->1 this state isn't allowed.

I am tired now :P

To be continued ..
