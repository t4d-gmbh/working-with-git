{% if slide %}
### <i class="fas fa-hat-wizard"></i> HEAD
{% else %}

:::{card} <i class="fas fa-hat-wizard"></i> HEAD
{% endif %}

> In <i class="fab fa-git"></i> **HEAD defines the currently checked out branch**

HEAD allows to:

- **simplify most commands** as it serves as default branch.
- can be used to conveniently **refer to previous commits** (e.g. `HEAD~2`){% if page %}[^sn6]

:::

[^sn6]: `HEAD~2` refers to the 2nd commit before the commit the current branch points to.
{% endif %}

