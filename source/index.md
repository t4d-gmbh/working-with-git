```{include} ../README.md
:end-before: <!-- include-before -->
```


{% if build == "slides" %}
<!-- <p style="font-size: 0.9em;"><strong>Dr. Jonas I. Liechti</strong><br>
<strong>Dr. Matteo Delucchi</strong></p> -->
:::{admonition} Authors
:class: note, margin
Dr. Jonas I. Liechti  
Dr. Matteo Delucchi
:::

:::{admonition} Editors
:class: note, margin
Dr. Barbara Mejia
:::
{% else %}
### Authors

**Dr. Jonas I. Liechti**  
**Dr. Matteo Delucchi**

### Editors

**Dr. Barbara Mejia**
{% endif %}

### Content
```{toctree} 
:maxdepth: {% if build == "slides" %}1{%else %}4{% endif %}
{% if build == "slides" %}:numbered:{% endif %}

content/intro/index
content/elements/index
content/commands/index
content/update_cycle/index
content/history/index
content/principles/index
content/feature_branch/index
content/versioning/index
content/useful_commands/index
content/exercise/index
```
