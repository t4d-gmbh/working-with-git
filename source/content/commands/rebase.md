{% if slide %}
### <i class="fab fa-git"></i> <strong style="color:orange">rebase</strong>
{% endif %}


![rebase view](figures/rebase_view.svg)

{% if page %}
In short, `git rebase` is used to apply the changes from one branch onto another branch. 
It differs from `git merge` in that it rewrites the commit history of the current branch. 
Meaning that the commits from the current branch are applied on top of the other branch.

:::{card} The `git rebase` procedure:
Starting from the following setup:
```text
       C'-----D' main
      /
 A---B---C---D---E origin/main
 ```
A `git rebase` will perform:

1. Apply each commit from your local branch onto the remote branch:
   ```text
                     C''---D'' main
                    /         
   A---B---C---D---E origin/main
   ```
:::

```{note}
- You might have to resovle conflicts for each commit from the local branch (i.e. `C'` and `D'`).
- With `git rebase -i` you can also rewrite the history of a single branch, see the [Rewriting History](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History) article on the official website.
```
{% endif %}
