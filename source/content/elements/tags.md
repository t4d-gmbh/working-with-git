{% if slide %}
### <i class="fas fa-tag"></i> Tags
{% else %}

:::{card} <i class="fas fa-tag"></i> Tags
{% endif %}

> A <i class="fab fa-git"></i> tag is a **mark for a specific state** of a repository.

A tag:

- allows to **flag a particular version** of the repository;
- can be used to **document states**.

{% if page %}
:::
Tags can be used to **refer to commits** in a more human readable way. For example, instead of using the commit hash `c1e2d3f4`, a tag `v1.0` can be used and is easier to remember.
Tags can be **annotated** with a message and a tagger name and date. This can be useful to document the reason for the tag or the person who created it. 
In a science context, tags can be used to mark specific states of a repository that correspond to a specific analysis or publication. 
{% endif %}
