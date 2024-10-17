# Versioning

{% if page %}
Documenting the state of a repository can be approached in various ways.
However, to enhance both readability and functionality, we strongly recommend following a consistent structure when describing its state.
One key element of this structure could be a version identifier.
{% endif %}

[Versioning](https://en.wikipedia.org/wiki/Software_versioning) provides a logical framework for creating labels that represent specific states of a repository.
{% if page %}By doing so, it establishes a structured way to describe those states.
The exact logic followed can vary depending on the chosen versioning approach, and there are many to choose from.

Determining the best versioning approach can be somewhat subjective.
However, certain methods are more widely adopted than others.
{% endif %}Here, we present one of the most common approaches:
{% if page %}[SemVer](https://wwww.semver.org).{% endif %}


{% if build == "slides" %}
<!-- BUILDING THE SLIDES -->
```{toctree}
:maxdepth: 1
:caption: SemVer

./semver
./benefits
```
{% else %}
<!-- BUILDING THE PAGES -->
```{include} ./semver.md
```
```{include} ./benefits.md
```
{% endif %}
