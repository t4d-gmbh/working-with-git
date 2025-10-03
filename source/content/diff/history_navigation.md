{% if slide %}
### Going Back in History: Navigation and Investigation
{% endif %}

{% if slide %}
Git provides powerful tools to **investigate** and **navigate** through your project's history.
{% else %}

## Going Back in History: Navigation and Investigation

Git provides powerful tools to **investigate** and **navigate** through your project's history.

{% endif %}

### Investigating History

::::{grid}
:::{grid-item-card} <i class="fa-solid fa-history"></i> `git log`
{% if page %}
```bash
git log --oneline --graph --all
```
{% endif %}
Shows commit history with visual branch structure
:::
:::{grid-item-card} {octicon}`history;0.8em` `git show`
{% if page %}
```bash
git show <commit-hash>
```
{% endif %}
Shows details of a specific commit including changes
:::
::::

::::{grid}
:::{grid-item-card} <i class="fa-solid fa-search"></i> `git blame`
{% if page %}
```bash
git blame <filename>
```
{% endif %}
Shows who changed each line and when
:::
:::{grid-item-card} {octicon}`diff;0.8em` `git diff`
{% if page %}
```bash
git diff <commit1>..<commit2>
```
{% endif %}
Compare changes between any two points in history
:::
::::

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