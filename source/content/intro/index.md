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

Conceptually, <i class="fab fa-git"></i> is a tool to **track**, **distribute** and **manage** changing content.

### Tracking changes
Several techniques are applied in combination, allowing to completely document the course of a repository:

```{include} ./main_features/tracking_techniques.md
```
```{include} ./main_features/tracking_features.md
```
### Content Distribution

```{include} ./main_features/propagation_content.md
```
```{include} ./main_features/propagation_techniques.md
```
```{include} ./main_features/propagation_features.md
```
### Managing changes

In addition to simply distribute changes and states, <i class="fab fa-git"></i> also allows for a fine-grained control on how content should be integrated and/or recombined.

```{include} ./main_features/managing_changes_within.md
```

Another feature of <i class="fab fa-git"></i> is its capability to act cross repositories: In fact, similar to within repository changes, changes can also be propagated between them:

```{include} ./main_features/managing_changes_between.md
```
```{include} ./main_features/managing_changes_features.md
```
## Limitations
```{include} ./limitations/sync.md
```
```{include} ./limitations/consistency.md
```
```{include} ./limitations/tracking.md
```
{% endif %}
