---
layout: post
title: "Personal Book Review: Node.js in Practice"
excerpt: "A personal and biased review on one of my favorite Node.js books,
written by Marc Harter and Alex Young. Warning: Bantering Inside."
share: true
comments: true
tags: [node, nodejs, node.js, javascript, node.js in practice, manning, book, review]
author: krishna_gogoi
categories: programming
---

November had been pretty hard on me. I had to move to a new place and moving
almost always comes with its own baggage of problems, which includes cleaning
the new place, shifting all your belongings, and of course most importantly,
getting your internet connection relocated as well. But unfortunately, because
the people assigned to that job turned out to be more incompetent than me at
keeping my place clean, they just reported back to their office saying that my
location is 'unfeasible', without even looking at the place. So, I had to apply
for a new connection, which for god's sake hasn't been provided yet.

So, what do you do when you're stuck at a new place, with unknown people
surrounding you 360 degrees and you have no wifi connection? That's right. You
accept the fact that you're done for and attempt to read that book which you
originally planned to read last summer. For me, that book happened to be
**"Node.js in Practice"** by *Alex Young* and *Marc Harter*. But no, I actually
did read the book previously.

See, there is that certain point in your life when you start doubting your
capabilities regarding the very thing that you enjoy doing the most (or feel that
you're genuinely good at the most). For me, JavaScript and particularly Node.js
has been those things. I mean, say what you want when I submit projects with no
test cases, but these two things basically put food on my plate. However, when I
look at some of the code that the more notable members of the Node.js community
produce, I can't help but feel helpless and hopeless, because there's stuff going
on in there that I just can't process at times. Streams, events, custom classes,
next-level stream transformations, weird implementations of methods that start
with the underscore character; you know where I'm getting at.

And honestly, a lot of that problem arises because I feel that I, like many others
before me, might have learned Node from a bunch of unstructured tutorials over the
internet. Sure, that has taught me to get up to speed with Node really quick, giving
me the assurance that there are third party modules to do just about everything I
need to do. And hey, that works out for a lot of us, to a pretty nice extent. Except
when like me, you decide to take a gander at the code written by better programmers
and then the fact that you don't understand anything in there hits you like a truck.
Yes, that's some next level streaming going on in there with that neat API design
which you vaguely remember using in one of those 100 modules you have learned and
forgotten about, but unfortunately, your streaming knowledge is a bit rusty
(something something about createReadStream() and something something node uses
streams) and you never really paid that much attention to proper API design, because
you just had to use it, right?

Point I'm trying to make is, a lot of us Node programmers jump into making
applications a bit too early, **without learning the fundamental core of Node**.
At least I did that. Yes, books and tutorials do cover streams and events, but
mileage would usually vary. I honestly didn't learn about implementing custom
classes by inheriting from stream.Readable/Writable or EventEmitter for a long
time when I started out. Only when I decided to look under the hood of a few
modules did I realize how ubiquitous this simple concept was in the world of Node,
*and I didn't know how to do that*! Now, you can argue that you don't need to know
all of that and that's fine. But knowing all of that can literally give you a huge
boost in terms of not just writing better code yourself but being able to collaborate
better with others. Not to mention the insanely gratifying sensation of producing
code that your peers just look at and jerk a teardrop at the corner of their eye.
Yes, I'm one of those guys.

Now, then moving on to the book. This book does exactly what I expect from a Node.js
book. It teaches you Node.js, it teaches you about those core fundamentals upon
which everything in the npm registry is built on. It doesn't delve too deeply
into third party modules (I'll mention some exceptions later) and does a really
good job of getting the basics out to the reader. Conceptually, Node's core is small,
it's how it was designed; to have a small core upon which modules can be built for
further functionality. And this book's focus is that core.

You can check out the book [HERE](http://www.amazon.com/Node-js-Practice-Alex-R-Young/dp/1617290939).

To start off, the book mentions that it's not one for beginners, and I'd agree to that,
but I think anyone who's had decent exposure to Node.js or at least worked a bit
(even superficially) with it can take away a LOT.

The book is divided into three large sections, each with its own set of chapters.
The first section is termed "Node Fundamentals", which as you might have guessed,
deals with the core fundamentals of Node I was talking about. The chapters here cover
a few broad topics, spanning over things like Buffers, Streams, Events, File system,
Networking, Globals, Child Processes, etc. Each of these topics have a dedicated chapter,
that starts from the ground and reaches a peak.

The second section is called "Real World Recipes". It covers Node being used in
the real world, specifically the Web, writing tests for Node programs, debugging
your applications, deploying them to different servers and so on. Again, each of
these topics have their own devoted chapters. Here, you'll encounter a couple of
third party modules, most significantly Express for the chapter on Node usage on
the web and Mocha on the chapter about testing code.

The third 'section' is actually just a chapter that delves into the details of
writing your own modules and publishing them. It contains just one chapter.

Now, personally I really enjoy the format of this book. You may have seen it before
in other Manning books as well. As mentioned, each chapter delves into a topic.
From there, you'll have a problem statement, like say, "You want to run an external
application from within a Node program". That follows up with a short, summarized
answer, followed by a detailed discussion about the solution and the code presented
for it. These sets of problem, solution, code samples and discussions are wrapped
together under a "Technique", and each technique solves one unique problem thoroughly.

I feel like this approach has really helped me out, it broke down the material in
the book into contextual chunks that's easy to digest one at a time. There are
115 techniques in total in the book, which is quite a bit, but extremely informative.
In fact, I routinely use it as sort of a reference. Like say, I need to check on
writing transformable streams, I just refer to the technique that implements it.

If not the entire book, I'd recommend any intermediate/beginner Node programmer to
at least read the first section of the book. It covers the most important of topics,
namely, Events, Buffers, Streams and how to create custom classes out of them, Files,
Networking as well as dealing with external programs. If you feel like you've made
progress, the next section has a lot of juicier stuff as well. Especially the
chapters on Testing, Debugging and Deploying. It covers a lot of good stuff, including
profiling and benchmarking your apps, detecting memory leaks, checking running
apps with a REPL, using the cluster module, serving your app with Apache, nginx, HAProxy
and much more. I really wish I had this book when I started out.

All in all, great book and my personal favorite when it comes to Node. I have no
idea why it has only 6 reviews (all 5 *) on Amazon at the time of writing this review.
I think it's a great book, especially if you're trying to get into learning the Node.js
core. It has a lot of code and very little fluff with easy chunks of information and code.

I decided to re-read it to reinforce some of the basics these past two weeks, probably
the most productive I've been without a proper internet connection. 
