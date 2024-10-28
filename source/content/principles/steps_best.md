### Best Practice (3/4)

{% if slide %}
```{admonition} Best Practices
:class: tip, margin

1. Keep a healthy reference
2. Separate changes
3. Commit complete changes
4. 
```
{% endif %}

:::{card} Commit small but complete changes
- Decide what changes to include in a commit (use `git add -p`).
- Make a commit as specific as possible, i.e. include only changes that belong together.
- Write commit messages that specify the purpose of the commit{% if build == "pages" %} [^sn2] {% endif %}.
- Include as few changes as possible into a commit. {% if build == "pages" %} Lots of changes make it harder to understand the purpose of the commit. Consider splitting the changes into multiple commits and use branches to isolate changes. {% endif %}
:::
{% if build == "pages" %}
[^sn2]: As a guideline, you can use the [**Conventional Commits**](https://www.conventionalcommits.org/en/v1.0.0/) specification.
{% endif %}
