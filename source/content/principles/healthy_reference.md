## Healthy Reference

> A pre-requirement to successfully develop any change, or new feature, is **to be able to depart from a functional state**.

In the <i class="fab fa-git"></i>-context this translates to:

**At any time all developers know of a specific commit on a specific branch that represents a healthy state**.

More precisely this state should:

- contain most of the history, i.e. as recent as possible;
- have a minimal chance to contain errors;
- be functional. Meaning that it should be possible to build and run the software.

{% if slide %}
```{toctree}
:maxdepth: 1
:hidden:

./healthy_reference_best
```
{% else %}
A successful collaboration and development strategy should cultivate healthy states, leading to the first set of best practices:

```{include} ./healthy_reference_best.md
```
{% endif %}
