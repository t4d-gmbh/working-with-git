{% if slide %}
### `git reset` - How to step back and take a different turn?
{% endif %}
<strong style="color:black">git reset&nbsp;[{octicon}`link-external;0.8em;log`](https://git-scm.com/docs/git-reset)</strong> moves the current HEAD to a specific state.


{% if page %}
Using `git reset` has some important and potentially unexpected consequences:

1. Moving <i class="fas fa-hat-wizard"></i>HEAD to a previous commit will potentially leave all following commits without a branch or tag. Commits in such a de-referenced state are hard to reach (use `git reflog` to find them) and will vanish eventually, that is when the garbage collector runs. 
2. Some options of `git reset` (e.g. `--hard` or `--mixed`) remove staged and un-staged changes in your repository. This might not be undoable.
3. Setting a reference back bares the risk of creating an alternative history, leading your local version of the repository to diverge from any other copy.
{% endif %}

{% if slide %}
```{admonition} Diverging History
:class: warning, margin
Setting back <i class="fas fa-hat-wizard"></i>HEAD bares the risk to create an alternative history.
```
```{admonition} De-referenced Commits
:class: warning, margin
Setting back <i class="fas fa-hat-wizard"></i>HEAD bares the risk to leave commits without a reference (Tag or Branch).
Such commits will be eventually deleted.
```
{% endif %}

:::::{card} Example: `git reset HEAD~2`:
:class: smaller

```text
A ── B ── C ── D ── E   (old tip, now orphaned)
          ^
          └─ HEAD after `reset HEAD~2`
A ── B ── C ── F        (new tip after the new commit)
```

::::{grid}
:::{grid-item-card} <i class="fa-solid fa-eraser"></i> `git reset --soft`
:class-title: text-warning
**Moves HEAD** back but keeps changes staged. Safest reset option.
:::
:::{grid-item-card} <i class="fa-solid fa-step-backward"></i> `git reset --mixed`
:class-title: text-warning
**Moves HEAD** back and unstages changes, but keeps them in working directory.
:::
::::
::::{grid}
:::{grid-item-card} <i class="fa-solid fa-trash"></i> `git reset --hard`
:class-title: text-danger
**⚠️ DESTRUCTIVE**: Moves HEAD back and **deletes all changes**. Use with extreme caution!
:::
::::
:::::

:::::
