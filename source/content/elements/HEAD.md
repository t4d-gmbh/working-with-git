{% if slide %}
### <i class="fas fa-hat-wizard"></i> HEAD
{% else %}

:::{card} <i class="fas fa-hat-wizard"></i> HEAD
{% endif %}

> In <i class="fab fa-git"></i> **HEAD corresponds{% if page %}[^sn7]{% endif %} to the currently checked out branch**.

HEAD allows to:

- **simplify most commands** as it serves as default branch,
- can be used to conveniently **refer to previous commits**, e.g. `HEAD~2` or `HEAD@{3}`.{% if page %}[^sn6]

:::

[^sn6]: `HEAD~2` would refer to the commit two steps before the one the current branch points to.
[^sn7]: HEAD is actually a variable, and therefore defines the checked out branch.
{% endif %}

