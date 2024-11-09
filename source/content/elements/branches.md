{% if slide %}
### <i class="fas fa-code-branch"></i> Branches
{% else %}

:::{card} <i class="fas fa-code-branch"></i> Branches
{% endif %}

> A <i class="fab fa-git"></i> branch is a **way to create and maintain different versions** of a repository.

A branch:

- offers the possibility to **develop and test new features**,
- allows to maintain **various versions** of a repository,
- is **updated automatically with new commits** being added.

```{admonition} <i class="fas fa-code-branch"></i> branches are dynamic pointers
:class: tip

A branch only points to a specific commit. It doesn’t contain any data or changes but serves as a reference to a particular commit in the repository’s history.

{% if page %}
The value of a branch lies in how **many operations in <i class="fab fa-git"></i>  update the location of this pointer**. For example, when you make a new commit, <i class="fab fa-git"></i> updates the branch pointer to point to this new commit, allowing you to create new lines of development, experiment with changes, and manage different versions of your project without impacting the main codebase.
{% endif %}

```

