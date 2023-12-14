# Elementary commands 

::::{tabs}

:::{tab} <strong style="color:#ca80e9">clone &nbsp;[{octicon}`link-external;0.8em;clone`](https://git-scm.com/docs/git-clone)</strong>
![clone view](figures/clone_view.svg)
1. Copies the remote repository
1. Creates tracking branches for all branches on the remote repo.
1. Checks out the active branch from the remote repo.
```{note}
`git clone` is run typically only once
```
:::

:::{tab} <strong style="color:green">fetch &nbsp;[{octicon}`link-external;0.8em;fetch`](https://git-scm.com/docs/git-fetch)</strong>
![fetch view](figures/fetch_view.svg)
1. Updates all remote tracking branches
```{note}
Running `git fetch` is always a save operation
```
:::

:::{tab} <strong style="color:lightgreen">merge&nbsp;[{octicon}`link-external;0.8em;merge`](https://git-scm.com/docs/git-merge)</strong>
![clone view](figures/clone_view.svg)
:::

:::{tab} <strong style="color:orange">rebase&nbsp;[{octicon}`link-external;0.8em;rebase`](https://git-scm.com/docs/git-rebase)</strong>
![clone view](figures/clone_view.svg)
```{note}
With `git rebase -i` you can also rewrite the history of a single branch, see the [Rewrtiting History](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History) article on the official website.
```
:::

:::{tab} <strong style="color:gray">add &nbsp;[{octicon}`link-external;0.8em`](https://git-scm.com/docs/git-add)</strong>
![clone view](figures/clone_view.svg)
:::

:::{tab} <strong style="color:blue">commit &nbsp;[{octicon}`link-external;0.8em;commit`](https://git-scm.com/docs/git-commit)</strong>
![clone view](figures/clone_view.svg)
:::

:::{tab} <strong style="color:darkviolet">push &nbsp;[{octicon}`link-external;0.8em;push`](https://git-scm.com/docs/git-push)</strong>
![push view](figures/push_view.svg)
1. Update the corresponding branch on the remote repository with the changes from the current local branch
```{note}
You might encounter most hickups when doing a `git push`.
However, this is only because the remote refuses any updates that cannot be fast-forwarded[^sn1]
operation is only where it becomes apparent that you local branch was not updated.

[^sn1]: If a new commit can be reached by following the history from another commit, then git can 'fast-forward' any reference to the new commit.
```

:::

::::

::::{dropdown} pull &nbsp;[{octicon}`link-external;0.8em;pull`](https://git-scm.com/docs/git-pull)
:class-title: pull
Assuming this is the state in which you run a `git pull`:
```
      C---D---E master on origin
     /
A---B---C'---D' master
    ^
    origin/master in your repository
```
What will happen:

1. `git fetch` will update **origin/master**
   ```
                   origin/master in your repository
                   ∨
          C---D----E master on origin
         /
    A---B---C'---D' master
   ```
2. `git merge origin/master` will
  
   - replay the commit from the remote branch (`C`, `D` and `E`) at the end of your local **master**, i.e. on top of `D'`
   - register the result in a new commit `F` on top of your local branch, i.e. **master** in this case
   ```
                   origin/master in your repository
                   ∨
          C---D----E master on origin
         /          \
    A---B---C'---D'--F master
   ```
::::
