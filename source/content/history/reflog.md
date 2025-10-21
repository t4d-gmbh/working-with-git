{% if slide %}
### `git reflog` - What is "my history", i.e. what was I doing?
{% endif %}
<strong style="color:black">git reflog &nbsp;[{octicon}`link-external;0.8em;reflog`](https://git-scm.com/docs/git-reflog)</strong> records updates to objects in the local repository.

{% if page %}

{% endif %}
```{admonition} Safety net
:class: tip, margin

`git reflog` should be your go to place if you suspect having "lost" some commits.

During `reset`-ting or `rebase`-ing commits can become de-referenced making them difficult to access.

With `git reflog` allows you find such commits again.
```

:::{card} Example: `git reflog`
:class: smaller
`git log --format=oneline`
```bash
435... (HEAD -> main) Reapply "Initial commit"
cae... Revert "Initial commit"
349... (origin/main, origin/HEAD) Initial commit
```
`git reflog`
```bash
435... (HEAD -> main) HEAD@{0}: revert: Reapply "Initial commit"
cae... HEAD@{1}: revert: Revert "Initial commit"
349... (origin/main, origin/HEAD) HEAD@{2}: checkout: moving from dev/14-... to main
1d2... (origin/dev/14-..., dev/14-...) HEAD@{3}: checkout: moving from main to dev/14-...
349... (origin/main, origin/HEAD) HEAD@{4}: clone: from github.com:j-i-l/test.git
```
:::

