---
author: yask123
comments: true
date: 2014-10-28 11:34:09+00:00
layout: post
slug: q-find-out-the-middle-node-of-a-linked-list
title: Q] Find out the middle node of a linked list
wordpress_id: 314
categories:
- Maths
---

There is a better way of doing this compared to the Counting the number of nodes `L` first and then traversing back to `L/2` .

This method is called **Floyd's cycle-finding algorithm **also known as



### Tortoise and hare



![](http://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Tortoise_and_hare_algorithm.svg/300px-Tortoise_and_hare_algorithm.svg.png)

The problem encounter earlier was that once we found out what the length of the node was , we had to traverse from the `head` to `l/2` again.





  * But what if there are 2 pointers instead of one?



  * One pointing at the node one by one ('x')  and the other pointing at '2*x`






This way , just as we encounter the end of the node at `2*x` we can quickly print the middle node at `x` .

This method could also be used to find out if the linked list is circular or not! While traversing since `Rabbit` will always be at `2*x` so if the linked list is circular there will come a time when both `Rabbit` 's and `Tortoise` 's position will be same.



Time for some code :D

[code lang=c]
<pre>
# include <stdio.h>
# include <stdlib.h>
void display(struct node *start);
void push(struct node **headref,int new_data);
void display_middle(struct node *tort);



struct node {
 int data;
 struct node *next;
};

int main()
{
 struct node *head =(struct node *) malloc(sizeof(node));
 struct node *second =(struct node *)malloc(sizeof(node));
 struct node *third=(struct node *)malloc(sizeof(node));
 struct node *fourth=(struct node *)malloc(sizeof(node));

 head ->data = 10;
 head ->next=second;

 second->data = 20;
 second->next=third;

 third->data = 30;
 third->next=fourth;

 fourth->data=40;
 fourth->next=NULL;


 display(head);

 push(&head,40);

 display(head);

 display_middle(head);

}


void display(struct node *start)
{
 while(start!=NULL)
 {
 printf("%d ",start->data );
 start=start->next;
 }
 printf("n");
}

void push(struct node **headref,int new_data)
{
 struct node *new_node=(struct node *)malloc(sizeof(node));

 new_node->next=*headref;
 new_node->data=new_data;

 *headref=new_node;
}

void display_middle(struct node *tort)
{
 struct node *hare=(tort->next);

 while(hare!=NULL)
 {
 if(hare->next==NULL)
 {
 break;
 }
 hare = (hare->next)->next;
 tort=tort->next;
 }
 printf("%d ",tort->data );



}</pre>
[/code]


