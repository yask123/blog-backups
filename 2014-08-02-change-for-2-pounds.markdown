---
author: yask123
comments: true
date: 2014-08-02 06:58:48+00:00
layout: post
slug: change-for-2-pounds
title: Coin problem!
wordpress_id: 244
categories:
- Python
---

[![46](http://yask007.files.wordpress.com/2014/08/46.jpg)](http://yask007.files.wordpress.com/2014/08/46.jpg)



I got stuck at Question 31 of project Euler for 2 days!It required me to find out total number of possible ways to give change for 2 pounds.I wrote down the equation $latex 200 \times a + 100 \times b + 50 \times c + 20\times c + 10 \times d + 5 \times e + f= 200$ and pondered.The vague memory of solving the number of possible solutions for $latex x + y + z =100$ suddenly started to dawn on me , whose solution would be  $latex \binom {n+r-1}{r-1}$

Unfortunately I couldn't solve further. I posted the question on stack exchange , Maths section and people suggested this approach wouldn't take me any further .So , I had to choose a different path.

I did plan to solve it with brute force , but the program looked really long and stupid .It had quite a lot of loops inside it ,but it did work.I tried to plug all the possible values of 'a' , 'b','c' ,... .The bounds were logical , ‘a’ bound was [0,1] , ‘b’ ‘s bound was [0,2] and so on.And I checked for condition[code] if sum==200 [/code]
[code]break[/code] at appropriate time and further checked that if ‘sum’ ‘s value remained less that 200 , if it exceeded at any point without being equal to 200 , I trashed the assumed values of constant.As you can guess , this idea is no-brainer and was resource  intense.I had to come up with a better solution.After trying a lot , I resumed my Google search and found an awesome PDF explaining a similar problem with recursion.Although , the approach is still brute force , the solution looked very elegant .But I had to spent considerable amount of time understanding the recursion technique to spit coins.
Let’s begun.

Well , lets say some one gave us 200 pounds and we were to give him change , how would we approach this problem
naturally?We will accept the cash and look in our pocket , hey , I found 50 pence in my left pocket , cool now I only have to search for 150 Pence.Woah! there is 100 pence in my right pocket .Now I only need a change for 50 Pence.Leh! , I have 5,10 pence coins too! , here you go bro!

Notice after following few instructions , we follow the same instructions again , but with different values of data.First we had to find a change for 200 , then for 150 , then for 100 and so on!

Let’s write it in mathematical form

Step 1 :$latex f(200)= 50 + f(150)$

Step 2 : $latex f(150)=100 + f(50)$

Step 3: $latex f(50)= 10 /times 5 + f( 0 )$

Step 4: I don’t have any money left now :) process over!

But , there is a problem . Notice if we substitute f( 6 ) , we get 3 but it should have been 2.Why did that happen?

Naturally the possibilities were 5 +1 ,6 coins of 1 pence each that’s all! But this formula added another case , 1 +5!

Whoops! Every time it will count extras.But we can exclude this error by specifying an instruction.Let us make a rule ! We

will start with the highest value of coin first.In that case we are bound to accept 5 + 1 and not 1 + 5 , higher value

coin must be picked first!

With that it mind , let’s write the code!

[code language="python"]

def find_change(amount, coins):
    # A successful find, add 1
    if amount == 0:

        return 1
    # An unsuccessful find, add 0
    elif amount < 0 or len(coins) < 1:

        return 0
    # Deduct the coin, and calculate and don't deduct and calculate with
    # rest of the coins
    else:
        coin, rest = coins[0], coins[1:]

        return  find_change(amount-coin, coins) + find_change(amount, rest);

def main():
    coins = [200,100,50,20,10,1]
    amount = 200
    print (find_change(amount, coins))

main()

[/code]

Code explanation:

We have kept sorted coins in our coins list starting with the biggest value.We are bound to start counting , by taking out our first coin in order.
I will come to the end point of recursion later , but first understand what happens in else part.We extract the biggest coin from our collection and start combining with all other possible coins within the constraints.First 200 value got in as amount , in our first case we found 2 pound bill , so we deducted from the total amount , now since amount == 0 , that meant our combination , i.e 2 pounds * 1 does equal to 200 pence , thus count this as one of the possible ways.
Now lets forget about 200 , we have coins from 100 to 1 pence .We send this as an input to the same function and it keeps running.Now due to Amount-Coin , there will be a time , when this either becomes zero , or becomes a negative number.
If negative , the combinations chosen must be wrong , return zero , if zero , our combinations were right , I have exactly zero pence left , thus the combination used to make 200 must have been correct , as it as one possible ways!

Hope that made sense !
