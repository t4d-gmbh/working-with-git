{% if slide %}
### <i class="fas fa-tag"></i> Tags
{% else %}

:::{card} <i class="fas fa-tag"></i> Tags
{% endif %}

> A <i class="fab fa-git"></i> tag is a **mark for a specific state** of a repository.

A tag:

- allows to **flag a particular version** of the repository,
- can be used to **document states**.

{% if page %}
Tags provide a **more human-readable way to refer to commits**. For example, instead of using the commit hash `c1e2d3f4`, you can use a tag like `1.0`, which is easier to remember.
Tags can also be **annotated** with a message, the tagger's name, and the date, making them useful for documenting the reason for the tag or who created it.
In a scientific context, tags can mark specific states of a repository that correspond to particular analyses or publications.

{% endif %}
:::
