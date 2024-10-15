{% if slide %}
### <i class="fab fa-git"></i> <strong style="color:red">pull</strong>
{% else %}

In short, `git pull` is a combination of two command: `git fetch` followed by either `git merge` or `git rebase`. 

It fetches the changes from the remote repository and integrates them into the current branch.
The integration happens either though a `merge` or a `rebase` and can be set by passing the options `--rebase` or `--no-rebase` to the `git merge` command.

This is a very common operation when working with a remote repository and is often used to update your local repository with the changes from the remote repository.

{% endif %}
{% if slide %}
```{admonition} Which procedure is shown?:
:class: warning, margin
- `git pull --rebase`
- `git pull --no-rebase`
```
{% endif %}

:::{card} `git pull` procedure:
{% if page %}
Assume this is the state in which you run a `git pull --no-rebase`:
{% endif %}
```text
      C---D---E main on origin
     /
A---B---C'---D' main
    ^
    origin/main in your repository
```

1. Your local state of **`origin/main`** will be updated
   ```text
                   origin/main in your repository
                   ∨
          C---D----E main on origin
         /
    A---B---C'---D' main
   ```
1. **`origin/main`** is integrated in your **`main`**
   {% if page %}
   This happesn in two steps:
   
   1. replay the commit from the remote branch (`C`, `D` and `E`) at the end of your local **main**, i.e. on top of `D'`
   1. register the result in a new commit `F` on top of your local branch, i.e. **main** in this case
   {% endif %}
   ```text
                   origin/main in your repository
                   ∨
          C---D----E main on origin
         /          \
    A---B---C'---D'--F main
   ```
:::
