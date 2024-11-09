# Versioning

{% if page %}
There are various ways to document the state of a repository.
To improve both readability and functionality, we highly recommend adopting a consistent structure when describing its state.
A key element of this structure can be a version identifier.
{% endif %}

[Versioning](https://en.wikipedia.org/wiki/Software_versioning) provides a logical framework for labeling specific states of a repository.
{% if page %} It offers a structured way to describe these states, though the exact method may vary depending on the versioning approach used. Many different options exist, each with their own logic.

Choosing the most appropriate versioning approach can be somewhat subjective. 
However, certain methods are more commonly adopted than others.
{% endif %}Here, we present one of the most popular approaches:
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
