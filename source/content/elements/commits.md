{% if slide %}
### <i class="fas fa-code-commit"></i> Commits
{% else %}

:::{card} <i class="fas fa-code-commit"></i> Commits
{% endif %}

> A <i class="fab fa-git"></i> commit represents **a single step in the history of a repository**.

A commit:

- is the **result of an action initiated by a developer**,
- contains **changes the developer decided to add**,
- can be seen as a **snapshot of the entire repository** including a reference to the parent commits{% if slide %}.{% else %},[^sn5]
- can be used to **document introduced changes**.

:::


[^sn5]: While it is technically correct to consider commits as snapshots, it might be more practical to **think about commits as changes**.
{% endif %}
