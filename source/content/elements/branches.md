{% if slide %}
### <i class="fas fa-code-branch"></i> Branches
{% else %}

:::{card} <i class="fas fa-code-branch"></i> Branches
{% endif %}

> A <i class="fab fa-git"></i> branch is a **way to create and maintain different versions** of a repository.

A branch:

- offers the possibility to **develop and test new features**
- allows to maintain **various versions** of a repository
- is **updated automatically with new commits** being added

```{admonition} <i class="fas fa-code-branch"></i> branches are dynamic pointers
:class: tip

A branch only points to a specific commit.

{% if page %}
The added value of a branch derives from the fact that **many operations in <i class="fab fa-git"></i>  update the location of that pointer**.
This means that a branch itself doesn't contain any data or changes; it simply points to a particular commit in the repository's history.

The real utility of a branch comes from the fact that many <i class="fab fa-git"></i> operations can update the location of this pointer. 
For example, when you make a new commit on a branch, <i class="fab fa-git"></i> updates the branch pointer to point to this new commit. 
This allows you to create new lines of development, experiment with changes, and manage different versions of your project without affecting the main codebase.
{% endif %}

```

