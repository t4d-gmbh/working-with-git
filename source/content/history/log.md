{% if slide %}
###  `git log` - What happened when/where?
{% endif %}
<strong style="color:black">git log &nbsp;[{octicon}`link-external;0.8em;log`](https://git-scm.com/docs/git-log)</strong> is the command to gain an overview of the history and explore the course of changes.


{% if page %}
The `git log` command provides a plethora of ways to explore the history of a repository.
Its focus resides reporting the relation between single changes, allowing you to gain an overview of what had happened in a repository.

`git log` is an extremely powerful tool to explore the history of a repository with some particularly useful option:

- `--oneline` shows a condensed view with each commit on a single line.
- `--graph` visualizes the commit history as a branching graph.
- `--author="Author Name"` shows commits made by a specific author.
- `--since="2 weeks ago"` displays commits made since a specific date, useful for reviewing recent changes.
- `-p` displays the patch (diff) introduced in each commit, allowing you to see what changes were made.
- `--grep="keyword"` filters commits to show only those with messages containing a specific keyword.

{% endif %}

```{admonition} <i class="fab fa-git"></i> <strong style="color:black">log</strong>: explore the history
:class: note, margin

- <i class="fas fa-code-commit"></i> commits are indicated with `* <hash>` followed by the commit message
- <i class="fas fa-code-branch"></i> Branches, <i class="fas fa-tag"></i> Tags and <i class="fas fa-hat-wizard"></i> HEAD are indicated in `(...)` after the commit hash
```
:::{card} Example: `git log --all --decorate --oneline --graph`:
:class: smaller
```bash
* dd0df9f (HEAD -> 21-basic-..., origin/21-basic-...) done with ...
* 31bc3cc ...
* b4b660f (origin/main, origin/HEAD, main) ingnore ...
* f5c1e53 ready ...
* 40a7b68 (origin/17-introduce-..., 17-introduce-) Merge ...
|\
| * bcb585a include ...
| * ...
| * 98c37ae changing ...
|/
* 8e4215f (tag: 1.0.0) ignoring ...
* 253dab3 Dev-...
| * 2cc8c54 added ...
| * 0b476b6 typos
|/
* 5d1c76e adding ...
|
```
:::

{% if page %}
### Advanced History Investigation

:::::{dropdown} **Useful history commands**
:color: info

::::{grid}
:::{grid-item-card} Search commit messages
```bash
git log --grep="bug fix"
```
Find commits with specific words in commit messages
:::
:::{grid-item-card} Search code changes
```bash
git log -S "function_name"
```
Find commits that added or removed specific code
:::
::::

::::{grid}
:::{grid-item-card} Show file history
```bash
git log --follow -- <filename>
```
Shows history of a specific file, even through renames
:::
:::{grid-item-card} Show changes in time range
```bash
git log --since="2024-01-01" --until="2024-12-31"
```
Filter commits by date range
:::
::::
:::::

{% endif %}
