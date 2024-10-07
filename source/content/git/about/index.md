# About Git

{% if build == "slides" %}
<!-- BUILDING THE SLIDES -->
```{toctree}
:maxdepth: 2
:caption: Contents

./what_is_git
./main_features/index
./inabilities/index
```
{% else %}
<!-- BUILDING THE pages -->
```{include} ./what_is_git.md
```
## Main Features
```{include} ./main_features/tracking.md
```
```{include} ./main_features/propagation.md
```
```{include} ./main_features/changes.md
```
## Inabilities
```{include} ./inabilities/sync.md
```
```{include} ./inabilities/consistency.md
```
```{include} ./inabilities/tracking.md
```
{% endif %}



