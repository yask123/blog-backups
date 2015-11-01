---
author: yask123
comments: true
date: 2014-08-16 15:37:29+00:00
layout: post
slug: to-do-list-app-in-c-dynamic-memory-simple-ds-in-c-real-tool
title: To-Do List App in C [Dynamic Memory + Simple DS in C = Real Tool!]
wordpress_id: 280
categories:
- Life
---

## First , Some Basic:





###  Dynamic Memory




When we define our local variables , they reside on the `Stack' part of the memory hierarchy .This means ,we are restricted from using more than specified memory.But in real world problems , it is often that we encounter unknown memory usage.For this purpose we can use `Heap` in memory where allocation of memory on the go is permitted.But unlike local variable's memory , this memory is not automatically freed so one should not forgetto use `free()` method to free memory after usage.Else this problem causes memory leaks.



### Datastructure [Link-List]




One of the drawbacks of using Arrays is that removing elements in sorted form can not be efficiently carried out.It must be accompanied by shifting the elements.This problem can be solved by using Liked List.It's very convenient to change address of which it is linked to another list.But we can't access one of the specific list without looping through it.



### Using `malloc()`



`malloc` in C is a friendly way of asking Operating System for more memory.We specify the amount of memory we want and OS gives us the address of the memory allocated for us.Though a complex process, very easily processed with `malloc()` function. example:

[code lang=C]
<br />int *p = malloc(sizeof(something)));

[/code]

In this application using the above mentioned concepts ,we'll create a To-Do List Application

[code lang=C]
<br />#include
#include
#include

typedef struct todo{
const char *event;
const char *time_start;
const char *time_closes;
struct todo *next;
}todo;

todo* create(char *event)
{
todo *p = malloc(sizeof(todo));
p->event=strdup(event);
p->time_start="";
p->time_closes="";
p->next=NULL;

return (p);
}

int main()
{
char event[80];
fgets(event,80,stdin);
todo *p_is_task0=create(event);

}

[/code]


