# Useful Commands

::::{dropdown} git status &nbsp;[{octicon}`link-external;0.8em`](https://git-scm.com/docs/git-status)
:open:
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
:open:
Displays the git reference log

It can be used to get the references of previous stages, including those that did not make it into the history.
::::
