---
author: yask123
comments: true
date: 2014-07-24 16:03:57+00:00
layout: post
slug: efficiently-count-number-of-factors
title: Efficiently count number of factors
wordpress_id: 120
categories:
- Life
---

Let’s say , we have to find the number of factors of a given number.Let’s see if we can enhance the test speed.




[code language="python"]
number=78979

number_of_factor=0

for num in range(1,math.floor(math.sqrt(number))):
    if number%num == 0:
        number_of_factor+=1
number_of_factor*=2
[/code]

The reason why we run loop till square root of the number is because there exist a neat symmetry.For a number to be factor it must divide it leaving behind no remainder.So , lets say ‘a’ is a factor of ‘num’.In that case num/a=b which should be an integer.We can now write a*b=num.

if ‘a’ is a factor ‘b’ must also be a factor.So , for every ‘a’ we find in this equation , there would be a different ‘b’ to satisfy this equation.Neat eh?So if we could find total number of ‘a’ s (unique) only , we could say total number of factors should be twice the number of values of ‘a’s satisfying the equation.So , how should we find total number of unique ‘a’s?

Notice in the equation , as ‘a’ increases ‘b’ decreases.At one point both ‘a’ and ‘b’ would get same and after that we will notice ‘b’ starts taking the same value that ‘a’ had taken before reaching the point where both ‘a’ and ‘b’ are same.Thus we should only find the factors less than square root of the number.This is the unique value of ‘a’.Thus the number of factors is twice the count we find.



:Test upload by windows live writer
