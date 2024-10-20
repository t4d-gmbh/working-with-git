# ✨Feature✨ Branch Approach
{% if page %}
This section presents one particular development approach with the aim to introduce a development workflow that facilitates the implementation of best practices, is both intuitive to follow and easy to implement.

However, there exists a plethora of approaches, more or less similar to this one and we recommend [Martin Fowler's blog about "Patterns for Managing Source Code Branches"](https://martinfowler.com/articles/branching-patterns.html) for anyone that is interested in learning more about them.

Since we would like to provide an approach that can be used in most cases, we will describe the *Feature Branch Approach* somewhat loosely, in particular we will not insist of a clear definition of the term *feature*.

In simple terms, the *Feature Branch Approach* describes:
{% endif %}


```{epigraph}
How to manage and organize changes in a controlled and efficient way.
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

This idea aims to implement the best practice regarding the separation of changes, that is to aggregate and track changes belonging to a specific subject (or feature in this case) in a dedicated branch.

```{include} ./benefits.md
```
```{include} ./how_it_works.md
```
{% endif %}
