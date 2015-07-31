---
layout: post
title: "Displaying Liquid tags in Jekyll"
excerpt: "Liquid tags need some special attention if you're trying to write about them."
share: true
comments: true
author: krishna_gogoi
categories: programming
---

I got into a discussion with a friend recently about displaying liquid
tags in a Jekyll blog. It just so happens that liquid tags can't be displayed
directly by indenting them four spaces or putting them in ticks. If you try the
usual methods of displaying them, they won't work as liquid tags get processed
at the very beginning and render some form of data in their place.

Now, what we were looking for was how to display liquid tags directly, say, for
example, we wanted to show the syntax of the gist liquid tag. Granted that the
use case of this might be pretty low, it still might crop up in a blogger's life
if say, you're writing about Jekyll in your Jekyll-based blog, like I am right
now.

If you want a TL;DR version of this, read my previous test post with the gist
tag [HERE](http://fatpixels.me/programming/test-liquid-tag-gist/) to see the
output and then check out the markdown
[HERE](https://raw.githubusercontent.com/mister-raindrop/mister-raindrop.github.io/master/_posts/programming/2015-07-15-test-liquid-tag-gist.md).

We'll be using the gist tag to show all the examples in the posts. So basically,
if you wrote the tag directly by indenting it or using pygments to highlight it,
it would look like this:
	{% gist 4667599 assign.worker %}

See the problem? We can't have that.

Now, to render it, we can first try putting it between double curly braces and
quotes, like this.

Code:
{% highlight liquid %}
{% raw %}
{{"{% gist 4667599 assign.worker "}}%}
{% endraw %}
{% endhighlight %}

Output:
{{"{% gist 4667599 assign.worker "}}%}

That renders out fine. The trick here is that you need to put the opening curly braces
and quote before the opening liquid tag and the closing curly braces and quote  before
the closing tag. It looks a bit messy though.

A second and more cleaner method is using the **raw** and **endraw** tags. This
was the reason why these tags were introduced in the first place. Any liquid
tags inside this block doesn't get executed and is displayed as is.

Code:
{% highlight liquid %}
{% assign open = '{%' %}
{% raw %}
{% raw %}  
{% endraw %}
{% raw %}
{% gist 4667599 assign.worker %}
{% endraw %}
{{open}} endraw %}
{% endhighlight %}

Output:
{% raw %}
{% gist 4667599 assign.worker %}
{% endraw %}

Much cleaner than the previous in my opinion. However, this leaves much to be
desired in terms of syntax highlighting. We've managed to get it rendered but it
would look out of place if we have lots of other code samples prettily colored
by the rainbow. Fortunately, your usual highlighter should work with this. The
solution here is to just let the raw/endraw do its job of rendering the tag
inside the highlight block.

Code:
{% highlight liquid %}
{% raw %}
{% highlight liquid %}
{% endraw %}
{% raw %}
{% raw %}
{% endraw %}
{% raw %}
{% gist 4667599 assign.worker %}
{% endraw %}
{% assign o = '{%' %}
{{o}} endraw %}
{% raw %}
{% endhighlight %}
{% endraw %}
{% endhighlight %}

Output:
{% highlight liquid %}
{% raw %}
{% gist 4667599 assign.worker %}
{% endraw %}
{% endhighlight %}

Beautiful :'3

But we're not done yet. There is one last problem that needs to be taken care
of. A very rare use case but something that we need to be careful of. Let's say,
that like me, you want to write about the raw/endraw tags. You can do it the
normal way for the raw tag but not the endraw tag, because as soon as you type
the endraw tag, it just closes with the previous raw tag and just never gets
displayed. It was a difficult one but I found one nice technique involving
variable interpolation
[on this blog post](http://blog.slaks.net/2013-06-10/jekyll-endraw-in-code/).

Basically, you write your raw tag inside the raw/endraw block and then, to write
the endraw tag, you render out the '{' and '%' characters through a variable, and then
write endraw %}. Basically, you're breaking it down into pieces so that it
doesn't get processed as a liquid tag. Magical.

Code:
{% assign open = '{%' %}
{% highlight liquid %}
{% raw %}
{% hightlight liquid %}
{% assign openTag = '{%' %}
{% endraw %}
{% raw %}
{% raw %}
{% endraw %}
{% raw %}
{% raw %}
{% endraw %}
{{open}} endraw %}
{% raw %}
{% gist 4667599 assign.worker %}
{{openTag}} endraw %}
{% endhighlight %}
{% endraw %}
{% endhighlight %}

Output:
{% highlight liquid %}
{% assign openTag = '{%' %}
{% raw %}
{% raw %}
{% endraw %}
{% raw %}
{% gist 4667599 assign.worker %}
{% endraw %}
{{openTag}} endraw %}
{% endhighlight %}


There we go. A tad bit complicated, but I guess that's what we have for now. I
wish there was an easier way for us to write about liquid tags. I mean even when
writing this blog post, liquid tags are a pain to write out. Sure it's easier
when you know this stuff but it's really inconvenient. Thankfully, this applies
only to liquid and fortunately, we at least have these little ways to deal with
the problems.

To summarise, write your liquid tags inside raw/endraw blocks. The only
exception is the endraw tag for which you need to use a variable to write out
the '{' and '%' characters. Also, remember that your favorite code highlighter should
still work, so don't forget to pretty it up with crayons :3
