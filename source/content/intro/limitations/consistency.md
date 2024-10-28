### Functional Consistency
```{admonition} <i class="fab fa-git"></i> tracks only the content of files
:class: warning
Git tracks only the content of files, not the functionality of the code within them.
```

There is **no** guarantee that:

<<<<<<< HEAD
- Git will identify breaking changes as a conflict;{% if page %}[^sn3]{% endif %}
- Two functioning versions combined will not result in a dysfunctional version.
=======
>>>>>>> main

{% if page %}
[^sn3]: This is rather obvious, if you think about it. But it is something that might not be thought about if <i class="fab fa-git"></i> is not reporting any conflicts when merging changes from different sources.
{% endif %}
