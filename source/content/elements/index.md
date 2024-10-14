# <i class="fab fa-git"></i> - Basic Elements

From a users perspective working with <i class="fab fa-git"></i> consists of interacting with 6 basic elements:


{% if build == "slides" %}
<!-- BUILDING THE SLIDES -->
```{toctree}
:maxdepth: 2

./commits
./branches
./tags
./HEAD
./index_stage
./working_dir
./history
```
{% else %}
<!-- BUILDING THE PAGES -->
```{include} ./commits.md
```
```{include} ./branches.md
```
```{include} ./tags.md
```
```{include} ./HEAD.md
```
```{include} ./index_stage.md
```
```{include} ./working_dir.md
```
```{include} ./history.md
```
{% endif %}
