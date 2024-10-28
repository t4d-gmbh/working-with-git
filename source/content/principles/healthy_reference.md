## Healthy Reference

> A prerequisite for successfully developing any change or new feature is **starting from a functional state**.

In the context of <i class="fab fa-git"></i>-, this means that:

**At any time, all developers are aware of a specific commit on a specific branch that represents a healthy state**.

More precisely, this state should:

- Contain most of the history, i.e. as recent as possible.
- Have a minimal chance of containing errors.
- Be functional, meaning it should be possible to build and run the software.

{% if slide %}
```{toctree}
:maxdepth: 1
:hidden:

./healthy_reference_best
```
{% else %}
A successful collaboration and development strategy should cultivate these healthy states, leading to the following set of best practices:

```{include} ./healthy_reference_best.md
```
{% endif %}
