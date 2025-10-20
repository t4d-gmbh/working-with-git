# <i class="fab fa-git"></i> - Exploring History

> **A commit is linked to one or several parent commits** allowing for a **branch like-structure of commits** describing the repository's history while working with <i class="fab fa-git"></i>.

:::{card} How can we explore this history?

In particular we might like to know general things like:

- What happened when/where?
- What changed between here and there?

And particular things like:

- What exaclty changed at a specific point?
- When and who changed a specific line in a file?
- What is "my history", i.e. what was I doing?
:::



{% if build == "slides" %}
<!-- BUILDING THE SLIDES -->
```{toctree}
:maxdepth: 2
:hidden:

./commands.md
```
{% else %}
<!-- BUILDING THE PAGES -->
```{include} ./commands.md
```
{% endif %}
