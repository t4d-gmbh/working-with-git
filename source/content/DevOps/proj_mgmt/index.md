# Project Management

`git` is a version control system and does not provide tools specific to project management and hence, this was one of the main extra features provided by services like GitHub or GitLab.

{% if build == "slides" %}
<!-- BUILDING THE SLIDES -->
```{toctree}
:maxdepth: 2

./basic_elements
./issues
./milestones
./merge_pull_requests
./workflows
```
{% else %}
<!-- BUILDING THE PAGES -->
```{include} ./basic_elements.md
```
:::{card} Issues
```{include} ./issues.md
:start-after: <!-- pages-include -->
```
:::
:::{card} Milestones
```{include} ./milestones.md
:start-after: <!-- pages-include -->
```
:::
:::{card} Merge/Pull requests
```{include} ./merge_pull_requests.md
:start-after: <!-- pages-include -->
```
:::
```{include} ./workflows.md
{% endif %}
