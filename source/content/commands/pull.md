### <i class="fab fa-git"></i> <strong style="color:red">pull</strong>

<!-- pages-include -->

Assuming this is the state in which you run a `git pull`:
```text
      C---D---E main on origin
     /
A---B---C'---D' main
    ^
    origin/main in your repository
```
When running `git pull` the following will happen:
:::{margin} `git fetch`
At first your local state of **`origin/main`** will be updated
:::
```text
                origin/main in your repository
                ∨
       C---D----E main on origin
      /
 A---B---C'---D' main
```
:::{margin} `git merge`
This will perform two tasks:

- replay the commit from the remote branch (`C`, `D` and `E`) at the end of your local **main**, i.e. on top of `D'`
- register the result in a new commit `F` on top of your local branch, i.e. **main** in this case
:::
```text
                origin/main in your repository
                ∨
       C---D----E main on origin
      /          \
 A---B---C'---D'--F main
```
