# Versioning

{% if page %}
Documenting the state of a repository can be done in many ways.
Introducing some structured form to consistently document a state can help a lot to navigate states.
{% endif %}

A great way to introduce such structure is [versioning](https://en.wikipedia.org/wiki/Software_versioning).


{% if page %}
Bullet Points:

    What is SemVer? A versioning system that uses a three-part number (MAJOR.MINOR.PATCH) to track changes to your software.
    Benefits:
        Easy to understand and communicate changes to your software.
        Helps users and developers understand the impact of updates.
        Simplifies dependency management and versioning.

Example:

    1.2.3
        MAJOR: 1 (breaking changes or significant updates)
        MINOR: 2 (new features or functionality)
        PATCH: 3 (bug fixes or minor updates)

Image Suggestion: A diagram showing the three-part version number, with arrows indicating how each part is incremented.

Note: This slide aims to provide a brief introduction to SemVer and how it works. The idea is to show how SemVer provides a simple and consistent way to version software, making it easier to communicate changes and manage dependencies.
{% endif %}

{% if build == "slides" %}
<!-- BUILDING THE SLIDES -->
```{toctree}
:maxdepth: 1

./benefits
./semver
```
{% else %}
<!-- BUILDING THE PAGES -->
```{include} ./benefits.md
```
```{include} ./semver.md
```
{% endif %}
