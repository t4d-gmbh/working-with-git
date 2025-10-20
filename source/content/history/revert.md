{% if slide %}
### `git revert` - How to `"git undo"`?
{% endif %}
<strong style="color:black">git revert&nbsp;[{octicon}`link-external;0.8em;log`](https://git-scm.com/docs/git-revert)</strong> **creates a new commit** that undoes changes from a specific commit or range of commits.

{% if page %}
The most transparent and safest way to "undo" one or several commits is to revert them.
By calling `git revert` you are actually adding another step to the history, that is the step of undoing a previous commit or range of commits.

By using `git revert` you make sure that:
- Only the changes from the specified commit(s) are removed.
- The "undo" action is transparently documented in the history, allowing even to be undone again later.
{% endif %}

:::{card} Example: `git revert`:
:class: smaller

Shown is output of `git log --format=oneline`:
```bash
349... (HEAD -> main, origin/main, origin/HEAD) Initial commit
```

`git revert HEAD`
```bash
cae... (HEAD -> main) Revert "Initial commit"
349... (origin/main, origin/HEAD) Initial commit
```
`git revert HEAD`
```bash
435... (HEAD -> main) Reapply "Initial commit"
cae... Revert "Initial commit"
349... (origin/main, origin/HEAD) Initial commit
```
:::
