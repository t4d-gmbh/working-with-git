# <i class="fab fa-git"></i> - Going Back in History - <i class="fa-solid fa-clock-rotate-left"></i> Diff

{% if build == "slides" %}
<!-- BUILDING THE SLIDES -->
```{toctree}
:maxdepth: 2
:numbered:

./understanding_diff
./history_navigation
./undoing_changes
```
{% else %}
<!-- BUILDING THE PAGES -->
::::{tabs}
:::{tab} <strong style="color:#ca80e9">diff &nbsp;[{octicon}`link-external;0.8em;diff`](https://git-scm.com/docs/git-diff)</strong>
```{include} ./understanding_diff.md
:::
:::{tab} <strong style="color:#8e44ad">history &nbsp;[{octicon}`history;0.8em`](https://git-scm.com/docs/git-log)</strong>
```{include} ./history_navigation.md
:::
:::{tab} <strong style="color:#e74c3c">time travel &nbsp;[{octicon}`clock;0.8em`](https://git-scm.com/docs/git-reset)</strong>
```{include} ./undoing_changes.md
:::
::::
{% endif %}
