{% if slide %}
### `git rebase` - How to consolidate and clean-up?
{% endif %}
<strong style="color:black">git rebase&nbsp;[{octicon}`link-external;0.8em;log`](https://git-scm.com/docs/git-rebase)</strong> alters the history by altering (re-)applying commits.


{% if page %}
The most common usage of `git rebase` is when applying one Branch "on top of" another Branch. 
Technically, this means that you apply all the changes from the Commits on one Branch to the other Branch, creating new Commits.

With the `-i`/`--interactive` option set, `git rebase` allows to to take action on each Commit that you are going to re-apply, effectively enabling you to completely rewrite this part of the history. 

Some of the actions you can apply to each commit during an interactive rebase:


| Action | Alias | What it does |
|--------|-------|--------------|
| **pick** | `p` | Keep the commit as is (default). |
| **reword** | `r` | Edit its commit message. |
| **edit** | `e` | Stop after applying this commit, allowing you to amend it (e.g., change the patch, add/remove files, edit the commit message). |
| **squash** | `s` | Combine this commit with the previous one; the resulting commit’s message is the concatenation of both (you can edit it). |
| **fixup** | `f` | Like `squash`, but discards this commit’s message; the commit is merged into the previous one automatically. |
| **exec** | `x` | Run an arbitrary shell command after applying this commit (linting, tests, etc.). |
| **drop** | `d` | Omit the commit entirely (same as deleting the line). |
| **break** | `b` | Stop the rebase at this point without applying any further commits; useful for manual interventions. |

_And there are more!_

{% endif %}
{% if slide %}
```{admonition} Interactive rebase
:class: warning, margin
`git rebase -i` allows to **combine**/**split**/**drop**/**edit**/... the commits
to reapply beforehand.
```
{% endif %}

:::::{card} Example: `git rebase`:
:class: smaller

```text
A ── A1 ── A2          (branch A)
 \
  └─ B ── B1 ── B2      (branch B)
```

`git rebase B A`

```text
A ── B ── B1 ── B2 ── A1' ── A2'   (branch A)
                ^
                └─ (branch B still points at B2)
```
:::::
