### The <i class="fab fa-git"></i>-Editors's Toolset

{% if build == "slides" %}
<!-- BUILDING THE SLIDES -->
```{toctree}
:maxdepth: 2

./revert
./reset
./rebase
./git_filter_repo
./altering_history
```
{% else %}

::::{dropdown} `git revert` - How to `"git undo"`?
:class-title: revert
```{include} ./revert.md
```
::::
:::{dropdown} `git reset` - How to step back and take a different turn?
:class-title: reset
```{include} ./reset.md
```
:::
::::{dropdown} `git rebase` - How to consolidate and clean-up?
:class-title: reset
```{include} ./rebase.md
```
::::
::::{dropdown} `git-filter-repo` - How to remove sensitive data?
:class-title: log
```{include} ./git_filter_repo.md
```
::::
::::{dropdown} Altering the history
:color: warning
:class-title: log
```{include} ./altering_history.md
```
::::
{% endif %}
