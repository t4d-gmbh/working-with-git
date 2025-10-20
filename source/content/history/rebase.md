{% if slide %}
### `git rebase` - How to consolidate and clean-up?
{% endif %}
<strong style="color:black">git rebase&nbsp;[{octicon}`link-external;0.8em;log`](https://git-scm.com/docs/git-rebase)</strong> (alters and) applies commits from one branch on top of another.


{% if page %}
{% endif %}


:::::{card} Example: `git rebase`:
:class: smaller
:::{grid-item-card} <i class="fa-solid fa-code-branch"></i> `git rebase`
:class-title: text-warning
```bash
git rebase -i HEAD~3
```
**Rewrites commit history**. Powerful but **dangerous** on shared branches.
:::
::::
:::::
