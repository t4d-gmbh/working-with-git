### Functional Consistency

```{admonition} <i class="fab fa-git"></i> tracks only the content of files
:class: warning
It does not track the functionality of whatever the content implements.
```

There is **no** guarantee that:

- Git will identify breaking changes as a conflict;{% if page %}[^sn3]{% endif %}
- Two functioning versions do not lead to a dysfunctional combination.

{% if page %}
[^sn3]: This is rather obvious, if you think about it. But it is something that might not be thought about if <i class="fab fa-git"></i> is not reporting any conflicts when merging changes from different sources.
{% endif %}
