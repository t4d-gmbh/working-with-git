# ✨Feature✨ Branch Approach
{% if page %}
This section introduces a development workflow designed to facilitate best practices while being intuitive to follow and easy to implement.

While many similar approaches exist, we recommend [Martin Fowler's blog about "Patterns for Managing Source Code Branches"](https://martinfowler.com/articles/branching-patterns.html) for those interested in exploring more options.

Our goal is to provide a flexible approach that can be applied in most cases. Therefore, we describe the *Feature Branch Approach* loosely, without strictly defining the term *feature*.

In simple terms, the *Feature Branch Approach* describes:
{% endif %}


```{epigraph}
How to manage and organize changes in a controlled and efficient way?
```
{% if page %}


{% endif %}

{% if build == "slides" %}
<!-- BUILDING THE SLIDES -->
```{toctree}
:maxdepth: 1

./idea
./benefits
./how_it_works
```
{% else %}
<!-- BUILDING THE PAGES -->
```{include} ./idea.md
```

This idea promotes the best practice of separating changes by grouping and tracking those related to a specific subject (or feature, in this case) within a dedicated branch.

```{include} ./benefits.md
```
```{include} ./how_it_works.md
```
{% endif %}
