# `.gitignore`

{% if build == "slides" %}
<!-- BUILDING THE SLIDES -->
```{toctree}
:maxdepth: 1
:caption: .gitignore

./what_and_why
./syntax
./best_practices
./debugging
```
{% else %}
<!-- BUILDING THE PAGES -->
```{include} ./what_and_why.md
```

```{include} ./syntax.md
```

```{include} ./best_practices.md
```

```{include} ./debugging.md
```
{% endif %}
