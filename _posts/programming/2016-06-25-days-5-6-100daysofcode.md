---
layout: post
title: "Days 5 and 6 - Point-free style, and My (C)hildhood has been a lie"
excerpt: "Days 5 and 6 for my #100DaysOfCode. Sunny weather with a chance of my C childhood being a lie."
share: true
comments: true
tags: [haskell, function-composition, point-free, 100daysofcode, C, sizeof]
author: krishna_gogoi
categories: programming
---

I'll keep this post short. Truth be told, Days 5 and 6 have been fairly sane,
and easy-going. I decided to take a nice break and just read, and chill out
after the brain meltdown I had on Day 4. I'll probably go back to Dynamic Programming
again very soon, but I decided to just do some Haskell for these past two days.

Day 5 has to be one of the sanest days I've had lately. Almost too sane. For once,
I got a client who brought a design for his website that actually didn't look like
he was selling adware through it. Day 5 in terms of learning has been decent.
I read the chapter on Typeclasses in the [Haskell book](http://haskellbook.com) again, because
I felt like I might have mentally vomitted out whatever I learnt on Day 3 during the
meltdown on Day 4 with Dynamic Programming.

The chapter is pretty thick, so I decided to just go slowly over it again. Meanwhile,
I solved some extremely easy problems in HackerRank's Functional Programming section's
Introduction sub-section. I also glossed over a bit on the typeclasses discussed
in the book over google, mostly just random reading.

Day 6 has been equally sane. Another 'thick' chapter if you wanna call it that. The chapter
is named in the book as "More functional patterns", and it basically goes through a lot
of details about Haskell's functions, how to write them and such. So topics like pattern
matching, case expressions, guards, higher order functions and anonymous functions were covered.
The chapter also covered function composition and writing code in the point-free style.

The primary takeaway for me was the section on point-free style. Last time I attempted Haskell,
I remember being slightly confused about it, especially about usage of the ```$``` function.


## The $ function

To put it simply, it takes two arguments, a function and an argument, and applies the function
to that argument. Yeah, I was like, "what?" as well the first time I encountered it and it pretty
much left me confused. I mean, why not just apply the function directly? Today's chapter
has shed light on it.

I got it in the part about point-free style. Basically, you can compose functions and apply
arguments to it like this in Haskell:
{% highlight haskell %}
reverse . filter odd $ [1..20]
{% endhighlight %}

The snip above takes the list of numbers from 1 to 20, applies the ```filter odd``` function
to it to get all the odd numbers and then reverses the list. ```reverse``` and ```filter odd```
in it are composed together. And this is where the $ function becomes important.

If we exclude the $ in the snip above, it throws an error. Because,
{% highlight haskell %}
reverse . filter odd [1..20]
{% endhighlight %}
when we do that, it first applies the argument, ```[1..20]``` to the function ```filter odd```
and then passes that off to ```reverse . ```. It doesn't pass it to the ```reverse``` function,
but to the composing ```.``` (it is a function after all). So we essentially get:
{% highlight haskell %}
reverse . [1, 3, 5..19]
{% endhighlight %}
The ```.``` expects two functions to be composed as arguments, the wrong snip gives it a value as the second
argument, not a function.

The reason this behaviour occurs is because function application (whitespace) has the highest precedence in Haskell.
So in the wrong snip above, the list argument was applied first to the ```filter odd``` function and then
it tried to compose a value with ```reverse```.

This is what the ```$``` solves. It has the lowest precedence of all in Haskell, a precedence of 0. So when you
add it between the composed functions and the argument, it solves the previous issue of precedence. Because
it has a lower precedence, the ```reverse . filter odd``` part of the expression gets executed first, and then
the value on the right of the ```$``` sign is applied to the composed function on the left.

If we were to exclusively parenthesize it, it would look like this:
{% highlight haskell %}
(reverse . filter odd) [1..20]
{% endhighlight %}

Here, we exclusively parenthesize the composed functions to make it clear that we want the argument
to be applied after they're composed. 



## C's sizeof is an operator, not a function

Most C gurus would know this already. Most devout C students would know this already. And I have been
neither at any point of my programming life so far. So, I didn't know it. ```sizeof``` is actually
an operator and not a function, as a lot of gullible folk like me would think.

As usual, I got this shocker from Peter Linden's [Expert C Programming](https://www.amazon.com/Expert-Programming-Peter-van-Linden/dp/0131774298) book.
The reason why I always thought it was a function is because most uses of it happen something like:
{% highlight C %}
a = malloc(sizeof(int))
{% endhighlight %}

But, you need to put the thing next to ```sizeof``` in the brackets only when you're giving it a type. ```int``` is
a type, and throughout most of my C life, the typical use of ```sizeof``` is with a type. It's actually an operator
though, and this is perfectly valid C:
{% highlight C %}
a = sizeof b
{% endhighlight %}

Or even something that looks like this:
{% highlight C %}
a = sizeof * b
{% endhighlight %}

In the first, ```sizeof``` gives the size of the variable b; in the next, b is a pointer, so ```sizeof``` returns what's stored at
the address pointed to by b.

But basically, ```sizeof``` doesn't need the brackets always and it's not a function but an operator. The brackets are needed
though if you are giving it a type. Very minor thing, but I'm surprised I didn't know it for so long, and the most glaringly
obvious reasoning I have for that is that almost all uses I've seen and done involves the type, so I pretty much came to
believe that it's a function.



That's it for today. Hope everyone else is having a good time!
