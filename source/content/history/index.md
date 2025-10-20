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
./how_change.md
```
{% endif %}


{% if build == "slides" %}
<!-- BUILDING THE SLIDES -->
```{toctree}
:maxdepth: 2
:hidden:

./historian.md
./editor.md
```
{% else %}
<!-- BUILDING THE PAGES -->
```{include} ./historian.md
```
```{include} ./editor.md
```
{% endif %}
