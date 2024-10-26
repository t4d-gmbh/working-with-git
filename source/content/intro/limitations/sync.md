### Automatic Synchronization

```{admonition} No coupling between changes and distribution
:class: warning
Synchronization is not coupled to change events in a repository. 
This means that just because a change (like a commit) happens in the repository, it doesn't automatically trigger synchronization across all copies (clones) of the repository.
```

Therefore:
- Collaboration mediated by <i class="fab fa-git"></i> happens asynchronously, i.e., changes are propagated when explicitly requested (e.g., by pushing or pulling).
- Simultaneous editing is not supported. If two users edit the same file at the same time, the changes must be merged manually.
- Synchronizing the state of a repository is part of the <i class="fab fa-git"></i> workflow.
