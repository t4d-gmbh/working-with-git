{% if slide %}
### <i class="fab fa-git"></i> <strong style="color:#ca80e9">clone</strong>
{% endif %}

![clone view](figures/clone_view.svg)

{% if page %}
:::{card} Running `git clone <url>` performs the following operations:

1. Copy the remote repository
1. Create tracking branches for all remote branches.
1. Check out the active branch from the remote repository.

:::

```{note}
`git clone` is run typically only once
```
{% endif %}

