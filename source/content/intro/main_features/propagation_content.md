{% if slide %}
### Content Distribution
{% endif %}

What can be shared in <i class="fab fa-git"></i>?

::::{grid}
:::{grid-item-card} Snapshots
The state of the repository at a given point in time
{% if page %}
{% endif %}
:::
:::{grid-item-card} Relationships
The relationships between snapshots, including parent-child relationships
{% if page %}
{% endif %}
:::
{% if page %}
::::
::::{grid}
{% endif %}
:::{grid-item-card} Deltas
The relationships between snapshots, including parent-child relationships
{% if page %}
{% endif %}
:::
:::{grid-item-card} Packfiles
Binary files containing compressed and delta-encoded data for a set of commits
{% if page %}
{% endif %}
:::
::::

```{admonition} &nbsp;**Not shared** are:
:class: warning

::::{grid}
:::{grid-item-card} Working Directory
Local files that have not been added for tracking
{% if page %}{% endif %}
:::
:::{grid-item-card} Staging Area
A collection changed files that should be added to the next commit
{% if page %} {% endif %}
:::
::::
```
