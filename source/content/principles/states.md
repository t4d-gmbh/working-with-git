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

As a developer, one of your primary tasks is to write clear and concise <i class="fab fa-git"></i> commit messages. 
These messages are crucial as they explain the changes made. 
However, relying solely on them can make it difficult to identify specific states of a repository. 
When writing only <i class="fab fa-git"></i> commit messages, **the state of a repository remains undocumented**. 
As a result, identifying healthy states can become challenging; however, this issue can be addressed using <i class="fab fa-git"></i> tags.

```{include} ./states_best.md
```
{% endif %}
