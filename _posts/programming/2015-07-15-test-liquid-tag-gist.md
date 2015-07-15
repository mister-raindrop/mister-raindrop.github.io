---
layout: post
title: "Test gist tag"
excerpt: "Test gist tag"
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
