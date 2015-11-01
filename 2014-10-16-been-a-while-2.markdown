---
author: yask123
comments: true
date: 2014-10-16 08:08:19+00:00
layout: post
slug: been-a-while-2
title: Been a while !
wordpress_id: 298
categories:
- Life
---

Phew! Updating the blog after such a long time just to let you know that I am still alive :)

![](http://cdn.business2community.com/wp-content/uploads/2013/10/blogging-meme.jpg)



Updates:

I started exploring quite a lot of things recently.I started OpenSource contribution  from August [Thanks to CodeSprint] , Started exploring the world of Competitive Programming,  took part in recent Codechef October Challange  also taking part in ICPC this year and also started rebuilding `BVPmart` from scratch , this time building the frontend with AngularJs also joined the `Tech Team` in BVP-ACM ,Started reading `The Lost Symbol` and the most awesome thing , I started building Webscrapper for `Routofy` !
I also started performing horribly in Sessional Exams :P

So , I have quite a lot of things to do and I can't sit idle ! How cool is that ?

And finally, since the blog post doesn't look cool without any codes, I should mention:

I recently finished writing a c++ app which will permutate the next smaller digit from the given digits inputted by user.





[code language="cpp"] 
# include <stdio.h>
# include <algorithm>

#include <functional> 
using namespace std;
int main()
{

	int n;
	n=54321;
	int l=0;
	int temp =n;
	while(n>0)
	{
		n=n/10;
		l=l+1;
	}
	int num [l];
	n=temp;
	int i=0;

	for(int i=l-1;i>=0;i--)
	{
		num[i] = n % 10;

		n=n/10;

	}
	bool found = false;
	bool flag=false;
	int k_max=0;
	int k_index=0;

	for ( i = l-2; i >=0; i--)
	{
		//Check if smaller number exists , if yes , swap it
        k_max = 0;
        k_index = 0;
		for(int j=i+1;j<l;j++)
        {

            if (num[j] < num[i]) {
                flag = true;

                if (k_max < num[j]) {
                    k_max = num[j];
                    k_index = j;
                }
            }
        }
		if(flag)
		{
			int t=num[i];
			num[i]=num[k_index];
			 num[k_index]=t;
			 found=true;
			break;
		}


	}	

		if(found)
		{
			
            sort(num+i+2,num+l,greater<int>());
          
           // std::sort(num+i+1, num+l, std::greater<int>());
			
		}
	
	//sort(num,num + l);


	for(i=0;i<l;i++)
	{
		printf("%d", num[i]);
	}
	printf("\n");
}
[/code]

I promise to write blog post more frequently from now on! Got a bit lazy!
