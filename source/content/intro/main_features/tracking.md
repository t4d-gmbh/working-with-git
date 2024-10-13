### Tracking changes

{% if slide%}
```{admonition} <i class="fab fa-git"></i> tracking features
:class: tip, margin
{% else %}
As a version control system <i class="fab fa-git"></i> provides easily accessible functionalities to:
{% endif %}
- generate a history of changes in a repository
- verify the integrity of the history{% if slide%}

```{% else %}[^sn1]
[^sn1]: A state is identified by a hash of the content and each state contains the hash of its preceding state(s), also called _parent(s)_, leading to a unique identifier of the entire history.

<i class="fab fa-git"></i> uses the following techniques to acheive this:
{% endif %}

{% if page %}::::{tabs}{% endif %}
{% if page %}:::{tab}{% else %}:::{card}{% endif%} Hashing
Unique identifiers for files and directories using SHA-1
{% if page %}
```{admonition} Details
:class: tip, dropdown
Git uses a cryptographic hash function (SHA-1) to create a unique identifier for each file and directory in the repository.
This hash is used to identify the contents of the file, and any changes to the file will result in a new hash being generated.
```
{% endif %}
:::
{% if page %}:::{tab}{% else %}:::{card}{% endif%} Snapshots
Entire repository snapshots at each commit
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
This allows Git to efficiently store multiple versions of a file without having to store the entire file multiple times.
```
{% endif %}
:::
{% if page %}:::{tab}{% else %}:::{card}{% endif%} Graph database
Store history as a graph of commits and relationships
{% if page %}
```{admonition} Details
:class: tip, dropdown
Git stores the history of the repository as a graph database, where each commit is a node in the graph, and the edges represent the relationships between commits.
This allows Git to efficiently navigate the history of the repository and determine the relationships between different commits.
```
{% endif %}
:::
{% if page %}:::{tab}{% else %}:::{card}{% endif%} Index
Cache of changes ready to be committed
{% if page %}
```{admonition} Details
:class: tip, dropdown
Git uses an index (also known as the "staging area") to keep track of the changes that are about to be committed.
The index is a cache of the changes that are ready to be committed, and it's used to optimize the commit process.
```
{% endif %}
:::
{% if page %}::::{% endif %}


