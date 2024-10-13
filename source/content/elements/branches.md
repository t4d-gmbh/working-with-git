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

A branch only points to a specifi commit.

{% if page %}
The added value of a branch derives from the fact that **many operations in <i class="fab fa-git"></i>  update the location of that pointer**.
{% endif %}

```

