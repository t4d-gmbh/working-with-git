## Gotchas

:::::{card} git pull&nbsp;[{octicon}`link-external;0.8em`](https://git-scm.com/docs/git-pull) are actually 2 commands:

::::{card} git fetch &nbsp;[{octicon}`link-external;0.8em`](https://git-scm.com/docs/git-fetch)
Downloads the last status of a repository from the remote.
::::
_followed by_
::::{card} git merge&nbsp;[{octicon}`link-external;0.8em`](https://git-scm.com/docs/git-fetch) _or_ git rebase &nbsp;[{octicon}`link-external;0.8em`](https://git-scm.com/docs/git-rebase) 

Incorporate changes from another branch into the current branch.
:::{dropdown} {octicon}`info`&nbsp;Decide which option to use
:color: info

- You can specify what option you want with `--rebase=true|false|...`
  
  Example:

      git pull --rebase=true

- You can set in the configuration which strategy to use:

      git config pull.rebase true

  or globally:

      git config --global pull.rebase true
:::
::::
:::::
:::::{card} The git update cycle is not your work cycle
Whenever you want to update the remote repository you need to perform a full git cycle, including a **`git pull`**.
:::::
