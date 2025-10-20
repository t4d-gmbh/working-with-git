{% if slide %}
### `git reflog` - What is "my history", i.e. what was I doing?
{% endif %}
<strong style="color:black">git reflog &nbsp;[{octicon}`link-external;0.8em;reflog`](https://git-scm.com/docs/git-reflog)</strong> ...

{% if page %}

{% endif %}
```{admonition} Savety net
:class: tip, margin

`git reflog` should be your go to place if you supect having "lost" some commits.

During `reset`-ting or `rebase`-ing commits can become de-referenced making them difficult to access.

With `git reflog` allows you find such commits again.
```

:::{card} Example: `git reflog`
:class: smaller
```bash
6eb... (HEAD -> 46-add-git-diff...) HEAD@{0}: merge main: Merge made by the 'ort' strategy.
70d... (origin/46-add-git-diff...) HEAD@{1}: checkout: moving from main to 46-add-git-diff...
04e... (origin/main, origin/HEAD, main) HEAD@{2}: commit: avoid re...
a5e... HEAD@{3}: commit: adding editor
...
f32... HEAD@{7}: pull: Fast-forward
659... HEAD@{8}: checkout: moving from 40-proofreading... to main
690... (40-proofreading...) HEAD@{9}: merge main: Merge made by the 'ort' strategy.
e7c... (origin/40-proofreading...) HEAD@{10}: checkout: moving from main to 40-proofreading...
659... HEAD@{11}: pull: Fast-forward
d8e... HEAD@{12}: checkout: moving from 40-proofreading... to main
```
:::

