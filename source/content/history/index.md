# <i class="fab fa-git"></i> - Writing history

With a few exceptions **each commit is linked to one or several parent commits**.

> A **branch like-structure of commits will form** describing the history of the repository when working with <i class="fab fa-git"></i>.

{% if build == "slides" %}
<!-- BUILDING THE SLIDES -->
```{toctree}
:maxdepth: 2

./example
```
{% else %}
<!-- BUILDING THE PAGES -->
```{include} ./example.md
```
{% endif %}
