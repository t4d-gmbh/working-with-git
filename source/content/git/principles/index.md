# Collaboration Principles



{% if build == "slides" %}
<!-- BUILDING THE SLIDES -->
```{toctree}
:maxdepth: 2
:hidden:

./good_collaboration
./healthy_reference
./healthy_reference_best
./separate
./separate_best.md
./steps
./steps_best
./states
./states_best
```
{% else %}
<!-- BUILDING THE PAGES -->
Even though with `git` you can track and document strictly all changes in a repository, simply using `git` does not yet make you a good collaborator.

In other words:

```{include} ./good_collaboration.md
```

What exactly are good usage patterns is a well discussed and opinionated subject.

Instead of contributing to this discussion we will point out a few principles that simplify interactions mediated by `git`.

```{include} ./healthy_reference.md
```
```{include} ./healthy_reference_best.md
```
```{include} ./separate.md
```
:::{admonition} Best Practice (2/4)
:class: tip
```{include} ./separate_best.md
:start-after: <!-- pages-include -->
```
:::
```{include} ./steps.md
```
:::{admonition} Best Practice (3/4)
:class: tip
```{include} ./steps_best.md
:start-after: <!-- pages-include -->
```
:::
```{include} ./states.md
```
:::{admonition} Best Practice (4/4)
:class: tip
```{include} ./states_best.md
:start-after: <!-- pages-include -->
```
:::
{% endif %}


