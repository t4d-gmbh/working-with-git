# Getting started

{% if build == "slides" %}
<!-- BUILDING THE SLIDES -->
```{toctree}
:maxdepth: 2

./main_commands
./simple_view
./gotchas
```
{% else %}
<!-- BUILDING THE PAGES -->
```{include} ./main_commands.md
```
```{include} ./simple_view.md
```
```{include} ./gotchas.md
```
{% endif %}

