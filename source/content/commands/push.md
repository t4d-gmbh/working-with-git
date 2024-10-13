### <i class="fab fa-git"></i> <strong style="color:darkviolet">push</strong>

<!-- pages-include -->
:::{margin}
A `git push` will:

1. Update the corresponding branch on the remote repository with the changes from the current local branch
```{note}
You might encounter most hickups when doing a `git push`.
However, this is only because the remote refuses any updates that cannot be fast-forwarded[^sn1]
operation is only where it becomes apparent that you local branch was not updated.

[^sn1]: If a new commit can be reached by following the history from another commit, then git can 'fast-forward' any reference to the new commit.
```
:::

![push view](figures/push_view.svg)
