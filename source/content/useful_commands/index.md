# Useful Commands

This is a selection of commands that can particularly enhance your experience with <i class="fab fa-git"></i>:

{% if build == "slides" %}
<!-- BUILDING THE SLIDES -->
```{toctree}
:maxdepth: 1

./status
./checkout
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
::::{dropdown} git checkout &nbsp;[{octicon}`link-external;0.8em`](https://git-scm.com/docs/git-checkout)
```{include} ./checkout.md
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
