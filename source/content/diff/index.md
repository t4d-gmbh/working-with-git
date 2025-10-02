# <i class="fab fa-git"></i> - Going Back in History - <i class="fa-solid fa-clock-rotate-left"></i> Diff

{% if build == "slides" %}
<!-- BUILDING THE SLIDES -->
```{toctree}
:maxdepth: 2
:numbered:

./diff
```
{% else %}
<!-- BUILDING THE PAGES -->
::::{tabs}
:::{tab} <strong style="color:#ca80e9">diff &nbsp;[{octicon}`link-external;0.8em;diff`](https://git-scm.com/docs/git-diff)</strong>
```{include} ./diff.md
:::
::::
{% endif %}
