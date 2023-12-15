# Basic Elements

From a users perspective working with Git consists of operations around two basic elements:

## Commits
A Git commit represents **a single step in the history of a repository**.

A commit is the **result of an action initiated by a developer** that can (and must) decide not just when to create a commit, but also, **it is up to the developer to decide what changes go into a commit**.

**Technically a commit corresponds to a snapshot of the entire repository** including a reference the parent commits(s).[^sn1]

[^sn1]: While it is technically correct to consider commits as snapshots, it might be more practical to **think about commits as changes**.

## Branches

A branch in Git is a way to create and simultaneously maintain different versions of a repository.

They offer the possibility to develop and test new features and maintain various versions.

In Git, technically,  **a branch is just a pointer to a specific commit**, all the added value of a branches derives from the fact that **many operations in Git update the location of that pointer**.

_We recommend reading Git's article [Branches in a Nutshel&nbsp;{octicon}`link-external;0.8em`](ttps://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell) for more details about branches in Git_
