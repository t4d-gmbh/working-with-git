{% if slide %}
### Tracking Techniques
{% endif %}

{% if page %}::::{tabs}{% endif %}
{% if page %}:::{tab}{% else %}:::{card}{% endif%} Hashing
Unique identifiers for files and directories using SHA-1
{% if page %}
```{admonition} Details
:class: tip, dropdown
Git uses a cryptographic hash function (SHA-1) to create a unique identifier for each file and directory in the repository.
This hash is used to identify the file's contents, and any changes to the file will generate a new hash.
```
{% endif %}
:::
{% if page %}:::{tab}{% else %}:::{card}{% endif%} Snapshots
Entire repository state captures (snapshots) at each commit
{% if page %}
```{admonition} Details
:class: tip, dropdown
When you commit changes to a Git repository, Git creates a snapshot of the entire repository at that point in time.
This snapshot includes the hashes of all the files and directories in the repository.
```
{% endif %}
:::
{% if page %}:::{tab}{% else %}:::{card}{% endif%} Deltas
Store differences between old and new file versions
{% if page %}
```{admonition} Details
:class: tip, dropdown
When you make changes to a file, Git doesn't store the entire new version of the file.
Instead, it stores the differences (or "deltas") between the old and new versions of the file.
This allows Git to efficiently store multiple versions of a file without storing the entire file multiple times.
```
{% endif %}
:::
{% if page %}:::{tab}{% else %}:::{card}{% endif%} Graph database
Store history as a graph of commits and relationships
{% if page %}
```{admonition} Details
:class: tip, dropdown
Git stores the history of the repository as a graph database, where each commit is a node in the graph, and the edges represent the relationships between commits.
This setup allows Git to navigate the repository's history efficiently and determine the relationships between different commits.
```
{% endif %}
:::
{% if page %}:::{tab}{% else %}:::{card}{% endif%} Index
The cache of changes ready to be committed
{% if page %}
```{admonition} Details
:class: tip, dropdown
Git uses an index (also known as the "staging area") to keep track of the changes that are about to be committed.
The index is a cache of the changes that are ready to be committed, and it's used to optimize the commit process.
```
{% endif %}
:::
{% if page %}::::{% endif %}


