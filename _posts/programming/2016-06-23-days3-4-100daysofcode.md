---
layout: post
title: "Days 3 and 4 - Getting extremely salty with Dynamic Programming"
excerpt: "A story about how I cried salty tears of blood on my attempt at learning Dynamic Programming."
share: true
comments: true
tags: [python, algorithm, DP, dynamic-programming, salty-tears, 100daysofcode]
author: krishna_gogoi
categories: programming
---

I skipped a day, so Days 3 and 4 got delayed by a day I think. But oh my god, Days 3 and 4
have been painful for me. For anyone reading this series for the first time, I'm doing
my [#100DaysOfCode](https://twitter.com/hashtag/100DaysOfCode?src=hash).

Day 3 was pretty okay, nothing spectacular. I revised a few graph algorithms like DFS, BFS,
Djikstra's, Prim's, Kosaraju and so on. It was fine. Read the chapter on Types followed by
Typeclasses in [Haskell from First Principles](http://haskellbook.com) as well. Just an
average day in the #100DaysOfCode journey.


## Then Day 4 Happened...

See, I've had a bit of history with Dynamic Programming (DP), almost grudgingly so. Day 4 hasn't
been my first attempt at trying to learn it, and interviewers at all my interviews have been kind enough
to not put something related to it. I've tried to learn it before I decided to start working and such.
And every single time, it has ended with me becoming a ball of frustration and rolling off
a high mountain into the pits of misery. Dynamic Programming would keep its secrets from me
yet again.

I started Day 4 with a pretty positive attitude. I made myself a cup of coffee and sat down to
study. Something felt very familiar, almost too familiar. I sipped my cup of coffee and realized
what it was. It was the same old feeling of me sitting on my laptop to study about DP and rolling
down that mountain into my misery.

"No," I told myself, "Today will be different." I decided I'll approach things differently this time.
All the other times I've decided to learn DP, I've done it the same way. Read a chapter on it from
a book of my choice and then try to solve problems on it online, except I never finish reading
the chapter due to getting frustrated really early, which means, I never solved any problems.

I decided I'd go solve problems as well this time as I read the book. Yes, that will be great.

Or so I thought at the time.

The book I decided to pick up is a very popular one, called [The Algorithm Design Manual](https://www.amazon.com/Algorithm-Design-Manual-Steven-Skiena/dp/1848000693) by Steven S. Skiena.
I got through the first part pretty fine, which basically involved finding binomial coefficients.
Then the book goes into approximate string matching. And I'm lost. The program implementation is kinda
half-baked because the author is focusing mostly on the algorithm and I'm too dumb for the
explanation or something, so I decide to skip it for the time being.

I looked over some other articles and books, understood a few basic things here and there. Read
[this Quora answer by Mimino on DP](https://www.quora.com/Are-there-any-good-resources-or-tutorials-for-dynamic-programming-besides-the-TopCoder-tutorial)
and I thought that things were starting to look good. I understood that answer for once,
and I thought I got a pretty good handle on how to solve such problems. Find the recursion,
make a backtrack solution, remove the redundant arguments and finally cache/memoize it.

I got inspired, and decided to try it out. I went to HackerRank's DP section and found myself
the famous Coin Change problem. I sit down to code a solution and boom.

I go blank. I really had no clue where to start. I didn't want to look over the Discussions
tab because that would mean proving to myself that I had no clue. I decided not to
and just started trying to come up with solutions.

For the love of God, I couldn't come up with anything for the next 2 hours. By this time,
thoughts started filtering through my mind, mostly along the lines of, "Man, I wasted two
hours doing nothing, could have read up on Haskell." I mean I was trying but just nothing
seemed to work. I always felt like recursion was a grey area for me, now it was just black.

I am an average Joe programmer. The average Joe programmer knows what recursion is, can use it
here and there, but formulating a solution to a problem he haven't seen before using recursion
is difficult. How would he know where to start? Recursion always did seem magical and he just
let the wizards work their magic all this time.

If anyone's wondering, the problem is this.

**Given an amount N, you have to find the number of ways you can procure change for it using a given
set of denominations, say {d1, d2, d3, ..., dm}. Consider you have infinite amounts of the given denominations.**

Think of it as: you have a set of numbers [a1, a2, a3, a4, ..., an]. And you have some number N.
How many ways can you use the numbers in the set to add up to N, considering that you can repeat them?

So, for example, you have an amount of 5, with denominations {1,2,3}. You can come up with stuff like:
{% highlight text %}
5 = 1 + 1 + 1 + 1 + 1
5 = 3 + 2
5 = 3 + 1 + 1
{% endhighlight %}
and so on. You have to find the total number of ways you can do that.

And that is, ladies and gentlemen, where I spent Day 4 in. Two hours of struggling quickly became
5 hours of nightmare, powered mostly by past grudges against DP. I was angry and I was salty. Morning
arrived, and I was still salty. My coffee usually comes with 2 spoons of sugar, it tasted like NaCl.
It was driving me insane.

I tried my best. But the Joe in me just couldn't do it. How would he come up with a backtrack?
Where does he start? How does a function just call itself and magically give you the answer? That's
like a child opening a wardrobe and ending up at fricking Narnia.

DP is just so...abstract, you could say. So many of these other algorithms have a straight way of
listing out its steps. With DP, it's more like a technique and I knew after reading hundreds of Quora
and Stack Overflow answers that practice was the only way of getting good at it. And there I was,
practicing on my first DP problem.

I tried thinking in terms of induction, and oh my god, I hate these books for making it look so easy.
Like, "oh yeah, you just assume you know the answer to the secret of the universe and then you just ask
the dolphins about the next value." It infuriates me. INFURIATES ME. I'm not a mathematician, the last
time I even worked out a proper induction problem was in high school mathematics. And back then, we had
like easy problems and you almost always knew what you had to do. Here I don't even know where to get started.



## Last Ditch Effort

As a last ditch effort before retiring for the day, I thought maybe reading the chapter again would help.
I read it, and I read the problem on binomial coefficients again.

And then it finally clicked for once. If you consider it like this, **C(n, k)** is *picking k things from
a set of n*, then the recurrence relation for it is defined as:
{% highlight text %}C(n, k) = C(n-1, k-1) + C(n-1, k) {% endhighlight %}

And the reasoning was something like this. Consider that **C(n, k)** consists of solutions of subsets
with *k* elements in them chosen from a set of *n* elements. Now consider whether, let's say, the n*th* element
is in these sets of not. So the solution subsets will either have the n*th* element in them or not have it.
{% highlight text %}
C(n, k) = (subsets of k length with n-th item in it) + (subsets of k length without n-th item in it)
{% endhighlight %}

For the first part of it, if n*th* item is included in the subsets, out of the remaining ```n-1``` elements,
we have to pick ```k-1``` elements (because we already included one item, the n*th* item).
{% highlight text %}
C(n, k) = C(n-1, k-1) + (subsets of k length without n-th item in it)
{% endhighlight %}

For the next part, for subsets without the n*th* item in them, out of the remaining ```n-1``` elements (we are excluding
n completely from these subsets, so the rest is ```n-1```), we have to choose *k* elements (not ```k-1``` because we didn't
include the n*th* item in this case). So we get:
{% highlight text %}C(n, k) = C(n-1, k-1) + C(n-1, k) {% endhighlight %}

Now I dumbed everything down because that's what let me solve the coin change problem. They are pretty similar,
at least in terms of coming up with the recurrence.

Consider **C(n, m)** to be the function that gives us the number of ways we can make *n* using *m* coins of
denominations, say **D = {d1, d2, d3, ..., dm}**. Now consider making change for *n* using the last coin, d*m*.
The solutions will either include that coin or not include it. So we have:
{% highlight text %}C(n, m) = (solutions with dm included) + (solutions with dm excluded) {% endhighlight %}

To be clear, let's suppose our denominations are *{1, 2, 3}* and we have to make change for an amount of 5.
Consider the denomination of 3 now. We can have solutions with 3, *{3 + 2}* and *{3 + 1 + 1}*; and solutions without 3,
*{1 + 1 + 1 + 1 + 1}*, *{1 + 1 + 1 + 2}*, *{1 + 2 + 2}*. If you notice, they are also the only way to create 5. So, I knew
I was getting there. Formulating the rest of the recurrence was easy and similar to the binomial coefficients problem.
For the part of solutions without d*m* in it, we get:
{% highlight text %}
C(n, m) = C(n, m-1) + (solutions with dm in it)
{% endhighlight}

*m-1* above because we have one coin less in there, the d*m* coin is excluded. Basically, we are trying to make change
for *n* with all the other coins (*m* coins in total, so *m-1* other coins), or you can say, we are trying to make change with the first *m-1* coins from the given denominations.

For the last part of it, I figured it'd be something like this:
{% highlight text %}
C(n, m) = C(n, m-1) + C(..., m)
{% endhighlight %}

Almost there, but I wasn't sure what I would put in the blank there (...). We are looking for solutions
that use the d*m* coin in it. If the coin is used, a single solution might be something like ```n = dm + something + something + ...```.

We know that the solutions in that part are guaranteed to have the d*m* coin in them. So, all we need to do is find
how many ways we can make *something + something + something + ...* from *m* coins of given denominations, or better put,
how many ways we can make ```n - dm``` amount from *m* coins of given denominations. Because we already know that these
solutions include d*m* in them, we only find solutions recursively for the rest of the term, ```n - dm``` using the given
denominations, and we end up with all the solutions that make up *n* with d*m* included.

For example, in the considered example a few paragraphs above, our possible solutions with 3 included were *{3 + 2}*
and *{3 + 1 + 1}*. Consider the terms without the 3, we end up with ```1 + 1 = 2``` and just *2*, which is also ```5 (our n) - 3``.
So, recursively, we just have to find the number of ways to make *2* with the given denominations to find the solutions subset.

Yes, I had to dumb it down so much after crying a sea of salty tears (which they now call the Dead Sea by the way) to finally
find the recurrence, which gives us all the ways to make *n*.
{% highlight text %}
C(n, m) = C(n, m - 1) + C(n - D[m], m)
{% endhighlight %}

Phew, finally. There we go, we have the recurrence down.


## Quick memoize decorator with functools.lru_cache

With the recurrence down, I knew I could quickly write a Python script for the problem to submit in HackerRank.
I just wanted to see if a few test cases would pass, to kinda prove that I made some progress.

Thankfully, I knew a ready-made way in Python to quickly memoize a function. It's a decorator called ```lru_cache```
in the ```functools``` module in Python 3. It lets you decorate a function such that its return values are cached.
I think it caches 128 calls by default, too tired to check documentation now. But if you set its ```maxsize``` property
to ```None```, it doesn't have any bounds, so caches all the function calls. So you can use the decorator to quickly
set up a memoizing function.

{% highlight python %}
from functools import lru_cache

@lru_cache(maxsize=None)
def somefunc(a, b):
    # do something expensive like recursion here
{% endhighlight %}

With that done, I felt like I had all the tools to follow up Mimino's tutorial on approaching a DP problem. And I
wrote this not-so-impressive Python script for submission.

{% highlight python %}
from functools import lru_cache
n = int(input().split()[0])
coins = list(map(int, input().split()))



@lru_cache(maxsize=None)
def count(n, m):
    if n == 0: return 1
    if n < 0: return 0
    if m <= 0 and n >=1: return 0
    return count(n, m - 1) + count(n - coins[m-1], m)

print(count(n, len(coins)))
{% endhighlight %}

The 2nd and 3rd lines are for reading input. The amount is stored in *n*, the *coins* variable stores
the list of denominations.

The conditionals in the beginning of the function *count* are the base cases for the recursion. I forgot to
write about them but they are fairly simple and obvious, and serve to get us out of the recursion.

Surprisingly, it passed all the test cases on HackerRank. And unwittingly, I just solved my first DP problem, after
I re-created the Dead Sea with my salty tears. I would like to write the iterative version but I'm too tired and I had
to write this blog post as well. I'll see if I can do something about it later today, which will mark my Day 5.


## Conclusion

Day 4 was just exhausting for me. And infuriating. And just flat out made a salt factory out of me. But I'm glad I
somehow ended up finding the solution. DP always makes me feel stupid and for the majority of my life so far, I have been
exactly that.

At the very end of Day 4, I think I've made a tiny bit of progress into a topic which was previously literally
impregnable for me. I know it's not a huge deal but now, I can take a few steps more into it, or at least
have found the courage to. I definitely need to practice much more and I think I'll try doing just that. Hopefully,
Day 5 will also include some Haskell, and not just NaCl.

For anyone else having a struggle in their *#100DaysOfCode*, don't give up and keep moving. Today, a Gorilla solved
a DP problem; you can do it. Cheers to everyone and don't be salty about things like me!  
