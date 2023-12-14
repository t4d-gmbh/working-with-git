# Useful Commands

::::{dropdown} git status &nbsp;[{octicon}`link-external;0.8em`](https://git-scm.com/docs/git-status)
Displays information about:

- How your current branch compares to its reference branch(es)
- The status of the workspace
  - What files have changed and are staged
  - What files changed and are un-staged
- What are commands you might want to run

```{note}
`git status` can be particularly usefull wenn running a `rebase` during which you have to step through all rebased commits.
```
::::
::::{dropdown} git reflog &nbsp;[{octicon}`link-external;0.8em`](https://git-scm.com/docs/git-reflog)
Displays the git reference log

It can be used to get the references of previous stages, including those that did not make it into the history.
::::
::::{dropdown} git rebase -i&nbsp;[{octicon}`link-external;0.8em`](https://git-scm.com/docs/git-rebase)
With `git rebase -i` you can also rewrite the history of a single branch (see the [Rewrtiti.ng History](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History)).
In particular you can clean up a history by squashing several commits into a single commit.

It can be used to get the references of previous stages, including those that did not make it into the history.
::::
::::{dropdown} git stash &nbsp;[{octicon}`link-external;0.8em`](https://git-scm.com/docs/git-stash)
This command allow you to "put un-staged changes away" such that you can perform operations on your workspace, such as `git pull`, that would otherwise overwrite files you changed but did not yet add to the stage.

```{note}
`git stash pop` will reapply the changes you had put away.
```
::::
::::{dropdown} git cherry-pick &nbsp;[{octicon}`link-external;0.8em`](https://git-scm.com/docs/git-cherry-pick)
`git cherry-pick <commit>` will apply the changes introduced in `<commit>` to the current branch.
::::
