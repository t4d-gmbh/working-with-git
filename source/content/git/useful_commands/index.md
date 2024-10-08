# Useful Commands

{% if build == "slides" %}
<!-- BUILDING THE SLIDES -->
```{toctree}
:maxdepth: 2
:numbered:

./status
./reflog
./rebase_i
./stash
./cherry_pick
```
{% else %}
<!-- BUILDING THE PAGES -->
::::{dropdown} git status &nbsp;[{octicon}`link-external;0.8em`](https://git-scm.com/docs/git-status)
```{include} ./status.md
:start-after: <!-- pages-include -->
```
::::
::::{dropdown} git reflog &nbsp;[{octicon}`link-external;0.8em`](https://git-scm.com/docs/git-reflog)
```{include} ./reflog.md
:start-after: <!-- pages-include -->
```
::::
::::{dropdown} git rebase -i&nbsp;[{octicon}`link-external;0.8em`](https://git-scm.com/docs/git-rebase)
```{include} ./rebase_i.md
:start-after: <!-- pages-include -->
```
::::
::::{dropdown} git stash &nbsp;[{octicon}`link-external;0.8em`](https://git-scm.com/docs/git-stash)
```{include} ./stash.md
:start-after: <!-- pages-include -->
```
::::
::::{dropdown} git cherry-pick &nbsp;[{octicon}`link-external;0.8em`](https://git-scm.com/docs/git-cherry-pick)
```{include} ./cherry_pick.md
:start-after: <!-- pages-include -->
```
::::
{% endif %}
