---
layout: post
title: "Testing different ways of rendering raw liquid tags"
excerpt: "A sample post to see the various ways in which liquid tags can be displayed in Jekyll."
share: true
comments: true
author: krishna_gogoi
categories: programming
---

Sample code highlight with indent.
    
    var a = "test"
    
    
Sample gist:
{% gist 4667599 assign.worker %}

Sample indented gist:
    
    {% gist gist_id [filename] %}
    
With %raw and %endraw:
{% raw %}
{% gist gist_id [filename] %}  
{% endraw %}

With back-ticks:
`{% gist gist_id [filename] %}`

With %highlight:
{% highlight html %}
{% gist gist_id [filename] %}
{% endhighlight %}

With curly bracket + quotes:  
{{"{% gist gist_id [filename] "}}%}

With raw and highlight:
{% highlight liquid %}
{% raw %}
{% gist gist_id [filename] %}
{% endraw %}
{% endhighlight %}

Raw within raw:
{% assign open = '{%' %}
{% highlight liquid %}
{% raw %}
{% raw %}  
{% endraw %}
{{open}} endraw %}
{% endhighlight %}
