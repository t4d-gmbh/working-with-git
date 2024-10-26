{% if slide %}
### Tracking features
{% endif %}

:::{card} <i class="fab fa-git"></i> provides version control functionalities to:

- generate a history of changes in a repository,
- maintain several versions of a single repository,
- verify the integrity of the history.{% if page %}[^sn1]{% endif %}

:::

{% if page %}
[^sn1]: A state is identified by a hash of the content and each state contains the hash of its preceding state(s), also called _parent(s)_, leading to a unique identifier of the entire history.
{% endif %}
