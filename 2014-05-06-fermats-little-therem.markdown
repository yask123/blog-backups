---
author: yask123
comments: true
date: 2014-05-06 13:32:44+00:00
layout: post
slug: fermats-little-therem
title: 'Fermat''s Little Theorem '
wordpress_id: 19
---

Let's visually prove Fermat's Little Theorem.

Say , we have 4 beads of different colours (Red and Blue).We can arrange all the beads in $latex 2*2*2=8$
Say , we remove those combinations where all the beads are of same color.In this case m there will be 2 such beads.If we remove 2 , we have 6 combinations remaining.

[![c1](http://yask007.files.wordpress.com/2014/05/c1.png)](http://yask007.files.wordpress.com/2014/05/c1.png)

What we observe from the remaining combinations is interesting.If we join the beads from beginning to end to form a circular neclace , we observe of all the different 6 combinations of necklaces , they can be distinctly be divided into 2 forms.Essential thing to notice is that in those 2 categories , the beads takes 3 rotations to come back to it's original form.
But if we repeat this experiment with 4 beads, we observe there to be one such style being formed which has only 2 members.Thus here , one such form exists which requires only 2 rotations to return to the original form.
If we take 5 beads , we'll have $latex 2*2*2*2*2=128 -2 = 126$ .Here we observe they divide distinctly into 6 forms, and each form requires 5 steps to return to the original form.

[![c2](http://yask007.files.wordpress.com/2014/05/c2.png?w=300)](http://yask007.files.wordpress.com/2014/05/c2.png)
Note this can only happen if p is a prime number , only then it can't be divided into groups and needs complete rotations of p (length of the string) to return to the original form

When we did this experiment with 4beads , we observed that one such form was possible that it could comeback to it's original form only by 2 forms(Less than the number of beads in it) Since it had symmetry(Blue Red Blue Red)--->(Red blue Red blue)--->(Original form)(Blue Red Blue Red).Only required 2 steps.This can't be possible if the length was of prime number.

Thus we arrived at a very important theorem.

Let there be beads of a colots.And the lengths of string be p(contains p beads , which is a prime number)

Then number of beads formed $latex a*a*a*.......(p) times$ or $latex { a }^{ p } $.
If we remove the beads of same colors we obtain $latex { a }^{ p } - a$

As we observed these many beads combinations consists of beads rotating p times to come to it's original form.Thus
$latex { a }^{ p } - a$ divides p successfully.
