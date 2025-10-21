# <i class="fab fa-git"></i> - History

> **A commit is linked to one or several parent commits** leading to a **branch like-structure of commits** when working with <i class="fab fa-git"></i>.

{% if page %}
```{include} ./how_explore.md
```
```{include} ./how_change.md
```
{% else %}
<!-- BUILDING THE SLIDES -->
```{toctree}
:maxdepth: 2
:hidden:

./how_explore.md
```
{% endif %}
{% if build == "slides" %}
<!-- BUILDING THE SLIDES -->
```{toctree}
:maxdepth: 2
:hidden:

./historian.md
```
{% else %}
<!-- BUILDING THE PAGES -->
```{include} ./historian.md
```
{% endif %}

<!-- Same for Editor -->
{% if page %}
```{include} ./how_change.md
```
{% else %}
<!-- BUILDING THE SLIDES -->
```{toctree}
:maxdepth: 2
:hidden:

./how_change.md
```
{% endif %}
{% if build == "slides" %}
<!-- BUILDING THE SLIDES -->
```{toctree}
:maxdepth: 2
:hidden:

./editor.md
```
{% else %}
<!-- BUILDING THE PAGES -->
```{include} ./editor.md
```
{% endif %}
