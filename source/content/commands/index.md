# <i class="fab fa-git"></i> - Elementary commands

{% if build == "slides" %}
<!-- BUILDING THE SLIDES -->
```{toctree}
:maxdepth: 2
:numbered:

./clone
./fetch
./merge
./rebase
./add
./commit
./push
./pull
```
{% else %}
<!-- BUILDING THE PAGES -->
::::{tabs}
:::{tab} <strong style="color:#ca80e9">clone &nbsp;[{octicon}`link-external;0.8em;clone`](https://git-scm.com/docs/git-clone)</strong>
```{include} ./clone.md
:start-after: <!-- pages-include -->
```
:::
:::{tab} <strong style="color:green">fetch &nbsp;[{octicon}`link-external;0.8em;fetch`](https://git-scm.com/docs/git-fetch)</strong>
```{include} ./fetch.md
:start-after: <!-- pages-include -->
```
:::
:::{tab} <strong style="color:lightgreen">merge&nbsp;[{octicon}`link-external;0.8em;merge`](https://git-scm.com/docs/git-merge)</strong>
```{include} ./merge.md
:start-after: <!-- pages-include -->
```
:::
:::{tab} <strong style="color:orange">rebase&nbsp;[{octicon}`link-external;0.8em;rebase`](https://git-scm.com/docs/git-rebase)</strong>
```{include} ./rebase.md
:start-after: <!-- pages-include -->
```
:::

:::{tab} <strong style="color:gray">add &nbsp;[{octicon}`link-external;0.8em;add`](https://git-scm.com/docs/git-add)</strong>
```{include} ./add.md
```
:::
:::{tab} <strong style="color:blue">commit &nbsp;[{octicon}`link-external;0.8em;commit`](https://git-scm.com/docs/git-commit)</strong>
```{include} ./commit.md
:start-after: <!-- pages-include -->
```
:::
:::{tab} <strong style="color:darkviolet">push &nbsp;[{octicon}`link-external;0.8em;push`](https://git-scm.com/docs/git-push)</strong>
```{include} ./push.md
:start-after: <!-- pages-include -->
```
:::
::::
::::{dropdown} pull &nbsp;[{octicon}`link-external;0.8em;pull`](https://git-scm.com/docs/git-pull)
:class-title: pull
```{include} ./pull.md
:start-after: <!-- pages-include -->
```
::::
{% endif %}
