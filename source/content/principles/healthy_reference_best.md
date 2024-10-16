### Best Practice (1/4)


:::{card} Keep a healthy reference
- Identify one branch on one location to be the main reference{% if page %}[^sn1]{% endif %}
- Never develop directly on the main reference
- Never modify shared history
- Try to consolidate branches whenever possible
- Verify the functionality of the resulting state **before** you incorporate a branch into the main reference 
:::
{% if page %}
[^sn1]: While **<i class="fab fa-git"></i> is a distributed** version control system, it is usually **not decentralized in practice**: A repository typically has one upstream location (e.g. **origin**) which acts as reference location for the reference branch.
{% endif %}

