## Flag States

> An easily distinguishable reference facilitates orientation.

With <i class="fab fa-git"></i> this translates to:

**Documenting states is equally important to documenting changes**


{% if slide %}
```{toctree}
:maxdepth: 1
:hidden:

./states_best
```
{% else %}

As a developer working the most noticeable _documentation_ activity is writing commit messages.
Since commit messages strive to explain the introduced changes it can quickly become cumbersome to identify particular states of a repository when solely relying on commit messages. Essentially, when writing only <i class="fab fa-git"></i> commit messages **the state of a repository remains undocumented**.

As a consequence it can become difficult to identify healthy states which is something that can be circumvented by the use of <i class="fab fa-git"></i> tags:

```{include} ./states_best.md
```
{% endif %}
