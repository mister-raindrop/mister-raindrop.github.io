---
layout: post
title: "Day 9 - Algebraic Datatypes and Another Brick in the Wall"
excerpt: "See what I did there? Day 9 has been about Haskell's Algebraic Datatypes and solving another DP problem."
share: true
comments: true
tags: [haskell, 100DaysOfCode, python, dynamic-programming, DP]
author: krishna_gogoi
categories: programming
---

Another slightly not-so-long post. I'm currently reading the chapter on Algebraic Datatypes
from [Haskell from First Principles](http://haskellbook.com). It's a pretty thick chapter,
so I'm taking my sweet time with it. I'm going to be completing it on Day 10 hopefully.

I love how the chapter progresses around the definition of a type being "an enumeration
of constructors that have zero or more arguments". So you have a ```Bool``` type, that's
defined as:
{% highlight haskell %}
data Bool = False | True
{% endhighlight %}

Here, ```Bool``` is the type, and its constructors are ```False``` and ```True```. Each of these
constructors in this case take zero arguments. Constructors that take no arguments are called
constants as well. In fact, the Haskell Report makes a distinction between constants and constructors.

I think one of the larger takeaways I've had from this chapter was the fact that type constructors, such
as ```Bool``` above, only appear in type definitions, or basically when we talk about types. The data
constructors, such as ```True``` or ```False``` only appear at actual code that runs. Now this sounds
simple, but previously it used to be a HUGE source of confusion for me because often I'd see parameterized
types and such appear in typeclass definitions and then followed by the data constructors in the
function definitions that follow. Now I know better.

I'm still reading the chapter, so I believe I'll learn a lot more about this.

On the DP side, after my last meltdown with it, I thought I would give it another try. Fortunately,
it didn't go as bad as I expected. In fact, it went out pretty smooth.

The question I attempted was [Red John is Back](https://www.hackerrank.com/challenges/red-john-is-back) at HackerRank.

I didn't suffer much surprisingly. Basically, you have a **4xN** wall, and you have bricks of sizes
**4x1** and **1x4**. You also have an infinite supply of bricks. You have to find the number of
configurations in which the bricks can be arranged to make the wall. Also, after that, you have to
find the number of primes up to the number of possible configurations.

I went this way about it. If it's a 4x1 wall (think of the 4 as the horizontal length, 1 as the height), then only
one 4x1 brick is needed, so number of possible configurations is 1. If it's a 4x2 wall, two 4x1 bricks are needed,
laid on top of each other. If it's a 4x3 wall, three 4x1 bricks are needed on top of each other. So the solution
is 1 for each of these, since only one possible configuration is possible.

If it's a 4x4 wall, there are two solutions for two possible configurations; one with four 4x1 bricks laid on
top of each other, and the other with four 1x4 bricks laid next to each other.

Now, think of the 4x4 wall like this. If you put one 4x1 brick in it, you need to find the solution for
only a 4x3 wall, because one unit of height is already covered by that brick. The wall reduces into a 4x3 wall
for you to solve. Again, if you have a 4x4 wall and you put one 1x4 brick in it, the wall reduces into a
3x4 wall. And there we have the recursion.

Our wall is of size 4xN. So, the "width" in our case is always fixed at 4.
We need to worry only about the increasing height, N. Now, every time a 4x1 brick is inserted
into this 4xN wall, the height decreases by 1. So if we add a 4x1 brick, our wall gets reduced
to a 4x(N-1) wall. We have one part of the recursion.

Again, if we add one 1x4 brick to our 4xN wall, the height reduces by 4. We don't have
to worry about adding 4x1 bricks next to the 1x4 brick because we can't. It's 4xN, so
the only way to put bricks next to our 1x4 bricks in a row is to add 1x4 bricks. So it
doesn't add to our number of possible configurations. Our wall effectively reduces to
a size of 4x(N-4). Putting both the observations above, we get our total configurations with:

{% highlight text %}
F(N) = F(N-1) + F(N-4)
{% endhighlight %}

With the recursion down, writing the script like before was pretty easy. But my solution
kept timing out. I was having problems with my prime number sieve it seems. I went to Wikipedia's
page on [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) and converted
the pseudocode there to Python, learning an optimized sieve implementation along the way.

I got this resulting script, which passed the test cases easily.

{% highlight python %}
def count(n):
    A = [True] * (n+1)
    A[0] = A[1] = False
    for i in range(2, round(n**0.5)+1):
        if A[i]:
            for j in range(i*i, n+1, i):
                A[j] = False

    primes = [i for i in range(len(A)) if A[i]]
    return len(primes)


from functools import lru_cache
@lru_cache(maxsize=None)
def bricks(n):
    if n <= 3: return 1
    return bricks(n-1) + bricks(n-4)


T = int(input())
while T > 0:
    print(count(bricks(int(input()))))
    T -= 1
{% endhighlight %}

I'm again using lru_cache for memoizing my recursive function. I know it's cheeky and
all, not using table lookups and everything, but my war on DP is about approaching
the solution to a problem and finding the underlying recursion. Formulating an iterative
solution after that isn't too hard. The biggest problem I face with these questions is
about how to approach and formulate the solution.

In this case, I believe I got slightly lucky because it's very similar to the coin change
problem.

Anyway, that's it for this post. Hope everyone else is having a good time in their
[#100DaysOfCode](https://twitter.com/hashtag/100DaysOfCode?src=hash)!
