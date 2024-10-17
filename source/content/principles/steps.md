## Meaningful Steps

> Incremental change is easier to deal with if single increments are logical, self-contained but remain as lean as possible.

In the <i class="fab fa-git"></i>-world:

**Incremental changes should introduced minimal, self-contained logical steps**


{% if slide %}
```{toctree}
:maxdepth: 1
:hidden:

./steps_best
```
{% else %}
It is up to the developer to decide how many or few edits go into a commit and, similarly to the [Separate subjects](#separate-subjects), what these changes are about.

In addition, commits make up the elementary steps in a git history and can easily be:

- undone (see e.g. [**git revert**&nbsp;{octicon}`link-external;0.8em`](https://git-scm.com/docs/git-revert))
- applied onto other branches

As a consequence it can become difficult to identify healthy states which is something that can be circumvented by the use of <i class="fab fa-git"></i> tags:

```{include} ./steps_best.md
```
{% endif %}
