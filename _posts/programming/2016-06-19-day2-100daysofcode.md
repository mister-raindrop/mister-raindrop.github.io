---
layout: post
title: "Day 2/100 - Lambda Calculus, Doctest buffoonery and Origins of the += operator"
excerpt: "Day 2 of my #100DaysOfCode. I learn some Lambda Calculus, implement a Python class
for representing graphs using dict, write shitty doctests for it and narrate the story of how
the += operator in C came to being."
share: true
comments: true
tags: [haskell, python, 100daysofcode, C, graph]
author: krishna_gogoi
categories: programming
---

## Introduction

Day 2 of my [#100DaysOfCode](https://twitter.com/hashtag/100DaysOfCode?src=hash) has been pretty good. I didn't progress much on Haskell as I only managed
time for one chapter. Spent majority of the time on making my Python graph class
work. Wrote a lot of doctests for it, only to later realize that I am stupid and that
my test cases were close to useless. More on that later.

I also spent some time reading about Lambda Calculus. I've had some good realizations
about it and I feel like my overall understanding of Haskell's syntax has improved
a bit just by learning about it. I appreciate the simplicity of the language's syntax
much more and love how closely it is rooted into Lambda Calculus.


## Lambda Calculus

The Haskell book I'm reading, [Haskell From First Principles](http://haskellbook.com), starts
out its first chapter by introducing the user to Lambda Calculus. I have to admit, I skimmed
it a bit and just blazed through this chapter on Day 1 to get to the fun part. But even then,
I realized while reading the chapter today just how much knowing the contents of that first chapter
has helped. So I decided to go back, re-read the entire thing, finish the exercises and follow the
extra resources in the end of the chapter on Lambda Calculus.

There were three, in increasing order of difficulty

* [Readable](http://www.inf.fu-berlin.de/lehre/WS03/alpi/lambda.pdf)
* [Requires some effort](http://www.cse.chalmers.se/research/group/logic/TypesSS05/Extra/geuvers.pdf)
* [Wat](http://www.paultaylor.eu/stable/prot.pdf)

And of course, my programmer pride led me straight into the third link. The author wasn't kidding
about the increasing level of difficulty. I struggled to understand the first few sections in the link
so decided to go read the first link instead. The first link is arguably much better for beginners;
the philosophical aspect and prior knowledge requirement in the third link is aggressively high.

But yes, learning Lambda Calculus has helped in Haskell terms. So much of the language's syntax actually
just desugars into lambda expressions. The book linked me to [THIS](http://www.haskellforall.com/2014/10/how-to-desugar-haskell-code.html) article, which basically
shows how a lot of Haskell code desugars to something simpler. Earlier, when I used to see stuff like:
```\x y z = \x -> \y -> \z -> e```
I would have to blink a few times. But knowing how to simplify lambda expressions now, I actually see
what's going on. The article was an interesting read because it also shows a lot of other desugared stuff,
even if I haven't reached those topics in the main book. I'll definitely be returning to it later.

I also love how functions also desugar into simpler lambda expressions:
```f x y = e becomes \x y -> e which becomes \x -> \y -> e```

And since functions are so ubiquitous in Haskell, much of the language's syntax literally desugars
into these lambda functions that take one argument and nest each other to create functions that take
multiple arguments.


## Python Graph Class

I spent most of Day 2 on implementing a Python Graph class to represent the Graph data structure.
The class is based on storing the graph data as a dictionary of sets for unweighted graphs and as a
dictionary of dictionaries for weighted graphs. An unweighted graph internally looks like this:
{% highlight python %}
G = {'a': {'b', 'c', 'd'},
     'b': {'a', 'c'},
     'c': {'a', 'b'},
     'd': {'a'}
    }
{% endhighlight %}

A weighted graph would look like this:
{% highlight python %}
G = {'a': {'b': 1, 'c': 2, 'd': 3},
     'b': {'a': 1, 'c': 2},
     'c': {'a': 2, 'b': 2},
     'd': {'a': 3}
    }
{% endhighlight %}

The keys in the outer dict represents the vertices in the graph, the sets or inner dicts represent
the neighbors of that vertex and any weight that the edge has.

Here's the implementation with the doctests, and I'm pretty sure I'll be adding more methods to
this as I learn more stuff. The doctests also show some usage and buffoonery.

{% highlight python %}
class Graph:
    """Doctests
    >>> G = Graph({'a': {'b', 'c'}, 'b': {'a'}, 'c':{'a'}})
    >>> G['a']
    {'b', 'c'}
    >>> 'a' in G
    True
    >>> G.add_vertex('d')
    >>> 'd' in G
    True
    >>> weighted_G = Graph({'a': {'b': 1, 'c': 2}, 'b': {'a': 1}, 'c': {'a': 2}}, weighted=True)
    >>> print(weighted_G)
    {'b': {'a': 1}, 'c': {'a': 2}, 'a': {'c': 2, 'b': 1}}
    >>> [key for key in weighted_G]
    ['b', 'c', 'a']
    >>> 'a' in weighted_G
    True
    >>> 'd' in weighted_G
    False
    >>> weighted_G['c']
    {'a': 2}
    >>> weighted_G.add_vertex('d')
    >>> 'd' in weighted_G
    True
    >>> weighted_G.add_edge('d', 'a', 10)
    >>> print(weighted_G)
    {'a': {'d': 10, 'c': 2, 'b': 1}, 'd': {'a': 10}, 'c': {'a': 2}, 'b': {'a': 1}}
    >>> weighted_G.remove_vertex('c')
    >>> print(weighted_G)
    {'a': {'d': 10, 'b': 1}, 'd': {'a': 10}, 'b': {'a': 1}}
    >>> weighted_G.remove_edge('a', 'd')
    >>> print(weighted_G)
    {'d': {}, 'a': {'b': 1}, 'b': {'a': 1}}
    >>> weighted_G.remove_vertex('d')
    >>> print(weighted_G)
    {'a': {'b': 1}, 'b': {'a': 1}}
    """
    def __init__(self, graph={}, directed=False, weighted=False):
        self._graph = graph
        self._is_directed = directed
        self._is_weighted = weighted


    def add_vertex(self, vertex):
        if not self._is_weighted:
            self._graph[vertex] = set()
        else:
            self._graph[vertex] = {}


    def add_edge(self, edge_from, edge_to, weight=None):
        if not self._is_weighted:
            try:
                self._graph[edge_from].add(edge_to)
                # if undirected, we add edge from the other side as well
                if not self._graph._is_directed:
                    self._graph[edge_to].add(edge_from)
            except KeyError:
                pass #key doesn't exist, nothing to do
        else:
            try:
                self._graph[edge_from][edge_to] = weight
                if not self._is_directed:
                    self._graph[edge_to][edge_from] = weight
            except KeyError:
                pass


    def __contains__(self, vertex): #checks if vertex is in graph
        return vertex in self._graph


    def __getitem__(self, vertex):
        try:
            return self._graph[vertex]
        except KeyError:
            return None

    def __str__(self):
        return str(self._graph)


    def __iter__(self):
        for vertex in self._graph:
            yield vertex


    def remove_vertex(self, vertex):
        try:
            del self._graph[vertex]
        except KeyError:
            pass
        for v in self._graph.values():
            if not self._is_weighted:
                v.discard(vertex)
            else:
                v.pop(vertex, None)


    def remove_edge(self, edge_from, edge_to):
        if not self._is_weighted:
            try:
                self._graph[edge_from].discard(edge_to)
                if not self._is_directed:
                    self._graph[edge_to].discard(edge_from)
            except:
                pass
        else:
            try:
                self._graph[edge_from].pop(edge_to, None)
                if not self._is_directed:
                    self._graph[edge_to].pop(edge_from)
            except:
                pass


if __name__ == "__main__":
    import doctest
    doctest.testmod()

{% endhighlight %}


## The Doctest Mistake

Most of you have noticed the mistake in the doctest already. And I do admit that the only
reason I opted for writing doctests and not proper unit tests for the class is because I wanted
to just write up some basic tests without wasting too much time and go back to reading Haskell.
But hey, lesson learnt. Of course, the process of testing all the functions out did help me
weed out a lot of mistakes and that just further reinforces the value of writing tests for your code.

If you haven't figured it out yet, the mistake is here, and similar tests:
{% highlight python %}
>>> weighted_G = Graph({'a': {'b': 1, 'c': 2}, 'b': {'a': 1}, 'c': {'a': 2}}, weighted=True)
>>> print(weighted_G)
{'b': {'a': 1}, 'c': {'a': 2}, 'a': {'c': 2, 'b': 1}}
{% endhighlight %}

Doctest runs the code after the ```>>>``` and compares it to the result you put in the string.
And that's where the mistake is. I put the result I got from my run of that line in the
interactive shell. BUT, dict keys are not guaranteed to have the same order. So while
the tests would return the same dict, the order of the keys would be different and so
the comparison with the string I added in the test and what the test would get from its
run would be different. This goes for all tests that include printing the sets and dicts.

I'm leaving this here for myself as a reminder of my stupidity and as a warning to anyone else
who decides to be lazy and just finish up with some basic doctests.

My quickfix to this was to just do equality checking, which by the way, is still very bad
and you should NEVER do this for any serious code. It's also bad because in a lot of these
 tests now I'm accessing the Graph._graph variable directly, which I originally meant to be
 private. Not good at all. But here's the changed doctest:
 {% highlight python %}
     """Doctests
    >>> G = Graph({'a': {'b', 'c'}, 'b': {'a'}, 'c':{'a'}})
    >>> G['a'] == {'b', 'c'}
    True
    >>> 'a' in G
    True
    >>> G.add_vertex('d')
    >>> 'd' in G
    True
    >>> weighted_G = Graph({'a': {'b': 1, 'c': 2}, 'b': {'a': 1}, 'c': {'a': 2}}, weighted=True)
    >>> {'b': {'a': 1}, 'c': {'a': 2}, 'a': {'c': 2, 'b': 1}} == weighted_G._graph
    True
    >>> {'b', 'c', 'a'} == {key for key in weighted_G}
    True
    >>> 'a' in weighted_G
    True
    >>> 'd' in weighted_G
    False
    >>> weighted_G['c']
    {'a': 2}
    >>> weighted_G.add_vertex('d')
    >>> 'd' in weighted_G
    True
    >>> weighted_G.add_edge('d', 'a', 10)
    >>> {'a': {'d': 10, 'c': 2, 'b': 1}, 'd': {'a': 10}, 'c': {'a': 2}, 'b': {'a': 1}} == weighted_G._graph
    True
    >>> weighted_G.remove_vertex('c')
    >>> {'a': {'d': 10, 'b': 1}, 'd': {'a': 10}, 'b': {'a': 1}} == weighted_G._graph
    True
    >>> weighted_G.remove_edge('a', 'd')
    >>> {'d': {}, 'a': {'b': 1}, 'b': {'a': 1}} == weighted_G._graph
    True
    >>> weighted_G.remove_vertex('d')
    >>> {'a': {'b': 1}, 'b': {'a': 1}} == weighted_G._graph
    True
    """
 {% endhighlight %}

 Takeaway from this is: Don't be lazy, write proper tests for your code.


## How the += operator came to be (at least in C)

 So, I read a small bit of Peter Linden's Expert C Programming: Deep C Secrets. And there was
 the history of how the ```+=``` operator came to be.

 In my younger days, and I'm still just 21 years old, the ```+=``` operator used to drive me insane.
 It made no sense to me and before reading about it in this book, I had absolutely no idea why
 the operator was the way it was. I also never thought of googling about it for some reason, probably
 because such thoughts mostly haunted me right before I went to sleep.

 But it confused me to no end. I mean, I could understand if it looked like this instead:
 ```x =+ 3```
 That's like saying, "yeah, I want x to be incremented by 3." But that kinda brings the problem with
 signs. Does the above expression mean that x needs to be increased by 3 or  is x being assigned the
 value of (positive) 3? Becomes clearer if you see it with negative sign:
 ```x =- 3```

So my guess always has been that maybe that's why they just shifted the sign to the left of the
equality, in order to take care of the disambiguation between assigning and operating.

And I'm actually kinda correct. Here's what actually happened, according to the book.

The += and related operators are derived from Algol-68. Algol-68 basically had a thing where it let
repeated operands to be written only once. So
```x = x + 3``` can be written as ```x =+3```
In the first expression, x is repeated on both signs of the = sign, so Algol-68 basically added
some syntactic sugar to be able to skip the repeated x.

Now, that feature was inherited by B, C's predecessor designed by Ken Thompson. But it basically led to the same
disambiguation problem I mentioned. Because:
```x =- 10``` meant decerementing x by 10, whereas ```x = -10``` meant assigning -10 to x.

This was found to be confusing, so they did switch the syntax up to the += operator that we know and use today.

The problem should have ended there, and for most of us, it did. But a bug was introduced when they changed
it into this style of writing.

A 'feature' was introduced such that the code formatter recognized the old way of using the operator and switched
it to the new style. The bug was that ANYTHING to the right of the equal sign was pushed to the left side. So if you
wrote ```x=!something```, it got changed into ```x!=something```.

And, that still compiled fine because syntax-wise it's okay, it's checking for inequality, however, the original
intention was to assign some value to x based on negating 'something', not to check for inequality. The book says
that this bug actually persisted in many implementations of C up until the mid-1980s!

## Conclusion

Day 2 has been pretty good. I made some mistakes and learnt my lesson, and chances are I'll probably
make them again. I hope to continue improving the graph class as I move along the algorithm books.
I didn't make much progress on Haskell today but I feel that spending the extra bit of time learning
Lambda Calculus a bit has helped deepen my understanding a bit, or at least that's how I personally feel
about it.

This relation between Haskell and its mathematical base has rekindled my want to study the mathematical
side of things, however, I suck at mathematics. Maybe some other time I would find the time and effort in me
to study things like type theory and such. For now, and especially tomorrow, I want to get my focus back into
learning Haskell.

I hope everyone else is having a great time with their #100DaysOfCode! Cheers and good luck.
