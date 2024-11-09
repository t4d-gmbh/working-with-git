## Meaningful Steps

> Incremental changes are easier to deal with if single increments are logical, self-contained but remain as lean as possible.

In the <i class="fab fa-git"></i>-world:

**Incremental changes should introduce minimal, self-contained logical steps**.


{% if slide %}
```{toctree}
:maxdepth: 1
:hidden:

./steps_best
```
{% else %}
It is the developer's choice how many edits to include in a commit and, as previously mentioned in the section "[*separate subjects*](#separate-subjects), what these changes pertain to.

Additionally, commits reprensent the fundamental steps in a <i class="fab fa-git"></i> history and can easily be:

- Undone (see e.g., [**git revert**&nbsp;{octicon}`link-external;0.8em`](https://git-scm.com/docs/git-revert)),
- Applied onto other branches.

```{include} ./steps_best.md
```
{% endif %}
