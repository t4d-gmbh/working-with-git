### Automatic Synchronization

```{admonition} No coupling between changes and distribution
:class: warning
Synchronization is not coupled to change events in a repository. 
{% if page %}
This means that a change, such as a commit, in the repository doesn't automatically trigger synchronization across all copies (clones) of the repository.
{% endif %}
```

Therefore:
- Collaboration mediated by <i class="fab fa-git"></i> happens asynchronously{% if page %}, i.e., changes are propagated when explicitly requested (e.g., by pushing or pulling).{% endif %}
- Simultaneous editing is not supported.{% if page %} If two users edit the same file at the same time, the changes must be merged manually.{% endif %}
- Synchronizing the state of a repository is part of the <i class="fab fa-git"></i> workflow.
