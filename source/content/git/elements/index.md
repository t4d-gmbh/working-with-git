# Basic Elements

From a users perspective working with Git consists of operations around three basic elements:

{% if build == "slides" %}
<!-- BUILDING THE SLIDES -->
```{toctree}
:maxdepth: 2
:numbered:
:caption: Elements

./commits
./branches
./tags
```
{% else %}
<!-- BUILDING THE PAGES -->
```{include} ./commits.md
```
```{include} ./branches.md
```
```{include} ./tags.md
```
{% endif %}




