# Versioning

{% if page %}
Documenting the state of a repository can be approached in various ways.
However, to enhance both readability and functionality, we strongly recommend following a consistent structure when describing its state.
One key element of this structure could be a version identifier.
{% endif %}

[Versioning](https://en.wikipedia.org/wiki/Software_versioning) provides a logical framework for creating labels that represent specific states of a repository.
{% if page %} It specifies a structured way to describe those states.
The specific logic used can differ based on the selected versioning method, and there are numerous options available.

Choosing the most effective versioning approach can be somewhat subjective. 
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
