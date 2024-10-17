## Flag states

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
As commit messages describe the introduced changes it can quickly become cumbersome to identify previous states. Essentially, when writing only <i class="fab fa-git"></i> commit messages **the state of a repository remains undocumented**.

```{include} ./states_best.md
```
{% endif %}
