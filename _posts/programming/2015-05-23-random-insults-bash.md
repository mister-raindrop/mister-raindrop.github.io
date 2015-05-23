---
layout: post
title: "Random Insults (.net)"
excerpt: "An old bash script that pulls insults from randominsults.net."
share: true
comments: true
tags: [bash, insults, shell-scripting, linux, random]
---

Some things in this world are 'evergreen'. And I'm not just talking about
evergreen trees. I'm talking about those little things in life that you suddenly
remember one fine day, smile to yourself in amusement and be like 'wow this is
awesome.'

For some, it's the Star Wars series, for others it's the Hitchhiker's Guide to
the Galaxy, for me, it's both, because I happen to be a sci-fi fan. Then there's
the series of Pokemon games and Monty Python. But evergreen things can also be
personal, like that little shitty program you wrote years and years ago, but
still smile at it because that's where you started a journey.

This post isn't about any of those.

Because I'm a grim little douche bag who likes adding a nice touch of finesse to
my sarcasm-laden statements in my part-time job as a keyboard warrior, for me,
[Random Insults])(http://randominsults.net) is an evergreen item. I tend to
forget about it for months and months and suddenly I find myself back there
again, spamming the F5 key. If you haven't checked that site out yet, go do
it.

The first time I found that site, I was beginning to get my hands properly on
bash scripting. I was well-equipped with the command line tools that a general
*nix OS provides you with but scripting using those wasn't ever my cup of tea. I
was a member of the glorious Python master race, still am. But basically,
getting to the point, I ended up having to learn shell-scripting.

So obviously, one of the things I wrote back then was a really small bash script
to grab insults from this beautiful site. Now, usually, I wouldn't choose bash
for this task but I went ahead and checked the source for that site. Thankfully,
the insult was inside <i> tags enclosed under <strong> tags.

A little bit of thought and a sip of coffee later, I pretty much knew I could
just curl it, grep for 'strong' to get the lines, and then use awk to parse out
the insult by using <i> as a separator. So, I wrote up a script. And I found it
today while scourging through my old files. Good ol' memories.

Here's the script. It still surprisingly works.

{% highlight sh %}
#!/bin/sh
#
# insult.sh
# Prints insults, as many as the number specified
# as the first argument.

if [ $# -eq 0 ]
        then
                echo "Please provide no. of insults as an argument."
        exit
fi

counter=0

while [ "$counter" -ne "$1" ]
        do
               curl -silent http://randominsults.net | \
               grep strong | \
               awk -F"<i>" '{print $2}' | \
               awk -F"</i>" '{print $1}'
               counter=$(($counter+1))
        done

{% endhighlight %}

And here's a little screenshot :3

![Random Insults script](http://fatpixels.me/images/insult.png)

Now that I have found it again, I might actually set it up on Emacs as well so I
can whip up elegant insults whenever I'm busy and I'm getting pestered by
someone...but that's unlikely because I have no friends :'(

I feel like I'm going to waste a lot of time on randominsults.net again. But
anyway, that's it for this post. Just reviving some old memories :3
