# <i class="fab fa-git"></i> - A brief introduction

{% if build == "slides" %}
<!-- BUILDING THE SLIDES -->
```{toctree}
:maxdepth: 1

./what_is_git
./main_features/index
./limitations/index
```
{% else %}
<!-- BUILDING THE PAGES -->
```{include} ./what_is_git.md
```
## Main Features
```{include} ./main_features/tracking.md
```
```{include} ./main_features/propagation.md
```
```{include} ./main_features/changes.md
```
## Limitations
```{include} ./limitations/sync.md
```
```{include} ./limitations/consistency.md
```
```{include} ./limitations/tracking.md
```
{% endif %}
