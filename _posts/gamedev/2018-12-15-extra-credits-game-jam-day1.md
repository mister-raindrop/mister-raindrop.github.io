---
layout: post
title: "How to NOT Design a Video Game - Extra Credits Game Jam - Day 1"
excerpt: "Trying to end the year on a nice note with a game jam. Not going well. Also, hello after two years."
share: true
comments: true
tags: [gamejam, gamedev, unity, shaders]
author: krishna_gogoi
categories: gamedev
---


Hello, deserted blog! Been so busy in the past two years that I actually forgot
I had a blog somewhere. Last time I was here, I was a full-fledged web developer,
now I'm a half-baked game developer. I totally hoped I'd have at least one published
game by the time I got to writing this, but sadly, things didn't go according to
plan, which wasn't necessarily a bad thing.


But anyway, I entered the [Extra Credits Game Jam](https://itch.io/jam/extra-credits-holiday-2018-game-jam), pretty
much on a whim. I've watched their Youtube channel ever since I started making games
a few years ago, so logically when I saw them hosting a game jam, my brain went, "Why not?"
The theme for the game jam was revealed to be "Present".


"Present" in itself has a bunch of interpretations, whether it's gifts, as a current moment
in time or as being here. Most of these were already discussed in the stream they hosted
during the theme reveal, and more are being discussed on their discord channels.


Initially, I had planned to do the jam with a friend who I've been working with lately,
who's interested in game design and mechanics. We started pretty much like 18 hours late
into the whole thing because of work, but messaged each other throughout the day about
ideas we've come up with regarding the theme.


We've settled on the ideas of "present" as in the current instant of time, as well as
the "presence" of someone or something. Also, at the time of discussing our design,
we didn't have any artists with us on the team, so that was a constraint we had on
our idea when we started. In fact, I was ready to go full tits-up with anything marked
"FREE" on Unity's Asset Store.


So, basically, without embarrassing myself too much, the idea is this:
There is this character, who for some reason (insert duck-taped lore here) is stuck
in some place, and is being chased by some kind of evil(?) presence(s), who by the way,
are completely invisible. Now, due to plot armor and also because I love the Matrix,
this character has the ability to slow down time (in other words, the "present" moment, lol)
for a few moments, which also because of the plot armor thickening, allows that character
to see the evil presence(s) during those slowed moments. And then the character has to use that
information to run from them.


That's right, ladies and gentlemen. You give someone an awesome ability and they use it
to run. Can't really blame them though. My logic for this rather poor design decision was
this: **LESS ANIMATION BLEND TREES TO MAKE**. I justified it further by telling myself
that we had no animators or artists, so the less I need to deal with that the better.
And also, I really feel that I waste too much time on making that perfect blend tree for
animations, and even though I've made it multiple times before, I still feel pretty flaccid
about it.


The obvious answer to me was: get rid of combat states. No guns blazing or swords slashing.
In fact, all I need probably is the basic states of idle, running and dying.


So, about this time, we started expanding on the idea. And I really just mean unrealistically
expanding on it, not doing anything about it. Like I wanted the enemies to appear during the
skill use window as like a rim-lighted glowy-apparition, because that's where my creativity ends
and my demise begins. Our environment made a few iterations as well, from being a forest to
being a cave. Keep in mind, we don't have an artist, yet. These "iterations" are in our imaginations.
We also have a checkpoint idea in mind, and we also have some kinda luring mechanic that does
something and doing that allows you to do something else. Or it was something like that.


Right about this time, a friend of ours decided to say "screw this" to his exams and decided
to join the game jam, because you know, Extra Credits. Said friend also happens to be an
artist. We have an artist finally, with a game carefully crafted to basically require
as less art as possible.


But our idea had already grown so unwieldly in the meantime that any iteration of it now is
no surprise. So we decided to put some more kerosene to the burning inferno, by deciding
that our environment is going to be a cave, and we're probably gonna make our artist do
the 3D models for our other characters as well, on top of whatever we need for the cave.
Ego has arrived. We want homegrown art assets now.


So, needless to say, we have scoped a bit too large for a game jam. And we're not quite sure if
we'll make it in time. But we're gonna give it a try and see how it goes. Perhaps we'll cut down
on a few features depending on the pace we gather and we'll see which way the wind takes us from
there (or abandons us completely). Right now, we're just waiting for our artist boy to come back
from his test (he didn't actually say "screw this") and start doing his thing, so we'll have
some idea as to how screwed we actually are.


Meanwhile, I took a couple of hours to prototype a few things we discussed. Here's what I have so far:


![Prototyping](https://media.giphy.com/media/fQlgusj9yotobJkKGt/giphy.gif)

The T-Pose bot is basically standing-in till I get something better to use. It has the rim-lighting
on it through a simple shader. The model itself is probably from the InVector Third Person Lite package
from the Unity Asset Store. The player model is obviously from Mixamo, hopefully that'll change in
the coming two days.

Since I did the bullet time thing anyway, I thought it'd be cool if I added a grayscale effect to it as well.
The enemies stay invisible by staying on a different layer and not being on the main camera's culling mask.
A secondary camera is brought into the scene with its flags set to **Don't Clear** and a Depth greater than
the main camera; also it only has the layer with the enemy on it as its culling mask. With that done, I just
wrote a simple screen-grayscale shader and applied it to the main camera. The enemy layer still retains its
actual color since it's being rendered by the secondary camera, which doesn't have the grayscale shader on it.

And that's about it. I added a little bit of an FOV tween to the cameras during the bullet time phase. Two reasons
for it. Firstly, it looks cool and the wider FOV actually has some use in scouting out enemy locations and planning
accordingly. And secondly, due to the timescale being slowed down for the slow-mo effect, the camera suffers from a
bit of jitter, which I can't seem to figure out how to solve. I would love to, but probably can't right now. So the
zooming motion kind of distracts the eye away from it, or at least I'm hoping it does. I should probably
tween it to go a bit slower perhaps.


So yeah, that was my first day of the Extra Credits Game Jam. Not particularly good, definitely not good in
terms of design decisions, but at least we have an artist now and a little bit of the
bad decisions are implemented. We might get another artist tomorrow to do a character perhaps, so
obviously, we didn't plan too far ahead when we were designing this.


Hopefully, I'll remember that I have a blog this time. And maybe I'll write from time
to time. See the new logo? AN ARTIST FRIEND OF MINE MADE IT FOR ME, and we still didn't have
an artist at the start of the jam.

I hope everyone else had a better day at the jam than I did, everyone in the Discord server for the
jam is super-friendly and helpful. I'm pretty excited to see what others come up with.

Until next time.
