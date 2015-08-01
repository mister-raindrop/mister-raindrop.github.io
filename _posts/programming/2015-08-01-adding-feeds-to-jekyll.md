---
layout: post
title: "Adding a feed to your Jekyll blog"
excerpt: "Fixed feeds on my blog, here's how."
share: true
comments: true
author: krishna_gogoi
categories: programming
---


I've always felt that a blog is incomplete without a feed. To my utter surprise,
my own feed on this blog has actually been malfunctional for quite some
time. Not that I have a single reader on this blog who would need a feed anyway
but it just itched so hard that I had to go fix it immediately.

I never actually checked my feeds.xml in the browser. I just assumed it was
working alrighty. Until today that is, when I randomly decided to open the feed
page and it seemed weird. There were no posts in it. I use Firefox's Live
Bookmarks to read feeds and it opened up the page fine but there were no posts,
just my blog title. I quickly check the source and find that the posts were in
the source just fine, but they weren't displaying in the feed. The feed was
originally written by the theme author that the blog is using and apparently,
the feed in the demo of the theme was working fine.

I checked the feed again in Chrome and there the feed won't even load because of
some error. Clearly I messed up some configuration which messed up something in
the feed.xml I had which ultimately led to my feed not working.

Now, I didn't want to be snooping my head into the feed.xml again to find the
error because I'm so stupid. Instead I just decided to do it all over from
scratch in two easy steps. You can do the same to set up a feed on your blog if
you feel like it.

Firstly, go to your _config.yml and check that the variables **name**,
**description** and **url** are set. The **name** should be set to the name of
the blog, **description** to a short description of the blog and **url** should
be the URL of the blog (http://fatpixels.me in my case). Easy peasy.

Next, you need to set up a feed.xml file in the root of your website. Now,
writing this xml file could just be a huge topic on its own, so I just took the
easy way out. Welcome to
[jekyll-rss-feeds](https://github.com/snaptortoise/jekyll-rss-feeds).

Just go to that page and select the feed.xml you want. There's four different
feed.xml files there catering to different needs. I just stuck to the default
feed.xml, though you can use the others as a starting template to modify and
cook yourselves your own. Once you choose the one need, just put the contents
into the feed.xml in your site root. Done.

That's basically all to it. Almost too easy. If you're using Github pages, just
commit them to the repo and it should be up and running in seconds. My
[feed](http://fatpixels.me/feed.xml) is now working fine. Although I have no
readers here, it sure feels like a proper blog now :3
