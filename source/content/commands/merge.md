### <i class="fab fa-git"></i> <strong style="color:lightgreen">merge</strong>

<!-- pages-include -->
:::{margin}
Starting from the following setup:
```text
       C'-----D' main
      /
 A---B---C---D---E origin/main
 ```
A `git merge` will perform:

1. Create a new commit on top of the current branch that contains all the changes from the commits from **origin/main**
   ```text
                 main 
                 ∨
          C'-----D'---F
         /           /
    A---B---C---D---E origin/main
   ```
1. Set the head of your local branch to this new commit
   ```text
          C'-----D'---F main
         /           /
    A---B---C---D---E origin/main
    ```
```{note}
If your current branch is **main**, a `git merge` will be equivalent to `git merge origin/main`.
```
:::

![merge view](figures/merge_view.svg)

