# <i class="fab fa-git"></i> - Writing History

> With a few exceptions **each commit is linked to one or several parent commits** allowing for a **branch like-structure of commits** describing the repository's history while working with <i class="fab fa-git"></i>.

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
