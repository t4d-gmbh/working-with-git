### Variety of Trackable Files

```{admonition} Not all filetypes and sizes are well supported
:class: warning
<i class="fab fa-git"></i> tracks changes line-by-line which can be problematic.
```

This leads to limited support for:

- Binary files
- Filetypes that include metadata (e.g. `.docx`)
- Large files (<i class="fab fa-git"></i>'s size limit for a single file is 2 GB){% if page %}[^sn4]{% endif %}

{% if slide %}
How to deal with these limitations will be discussed later.
{% endif %}

{% if page %}
[^sn4]: Git LFS (Large File Storage) is a solution to this problem. It allows to store binary files outside of the repository and only track their location and version.
{% endif %}
