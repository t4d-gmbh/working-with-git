# <i class="fab fa-git"></i> - A Brief Introduction

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

### Tracking Changes
Several techniques are combined to document the course of a repository thoroughly:

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
### Managing Changes

In addition to distributing changes and states, <i class="fab fa-git"></i> also allows for precise control over content integration and/or recombination.

```{include} ./main_features/managing_changes_within.md
```

Another feature of <i class="fab fa-git"></i> is its ability to act across repositories. Similar to changes within a repository, changes can also be propagated between repositories:

```{include} ./main_features/managing_changes_between.md
```
```{include} ./main_features/managing_changes_features.md
```
## Limitations

<i class="fab fa-git"></i>'s design paradigm imposes certain constraints that are worth having a closer look at.

```{include} ./limitations/sync.md
```
```{include} ./limitations/consistency.md
```
```{include} ./limitations/tracking.md
```
{% endif %}
