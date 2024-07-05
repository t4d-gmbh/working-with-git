# Collaboration Principles

Even though with `git` you can track and document strictly all changes in a repository, simply using `git` does not make you a good collaborator.

In other words:

**The usage of `git` does not necessarily facilitate collaboration. All depends on how you are using `git`.**

What exactly are good usage patterns is a well discussed and opinionated subject.

Instead of contributing to this discussion we will point out a few principles that simplify interactions mediated by `git`:

## Healthy reference

> A pre-requirement to successfully develop any change, or new feature, is **to be able to depart from a functional state**.

In the `git`-context this translates to:

**You need to know a specific commit on a specific branch that represents a healthy state**

More precisely this state should:

- contain most of the relevant history, i.e. as recent as possible
- have a minimal chance to contain errors
- be functional

A successful collaboration and development strategy should cultivate healthy states, leading to the first set of best practices:

:::{card} Best practices (1/4)
- Identify one branch on one location to be the main reference[^sn1]
- Never develop directly on the main reference
- Never modify shared history
- Try to consolidate branches whenever possible
- Verify the functionality of the resulting state **before** you incorporate a branch into the main reference 
:::

[^sn1]: While **`git` is a distributed** version control system, **it is not decentralized**: Each repository usually has one upstream location (e.g. **origin**) which acts as reference location for the reference branch.

## Separate subjects
> Any story is easier to follow if there is some consistency in the subject and some logical thread that connects single events.

Developing a repository is similar:

Typically, **a repository contains various types of files** and **a developer performs various tasks**, like
- adding new features
- refactoring existing code
- fixing typos
- completing the documentation.
- ...

With `git` any edit can lead to a commit and a branch can consist of any sequence of commits.
It is up to the developer to associate branches with specific subjects or tasks and distribute commits onto these branches in a meaningful manner.

Following the history of a repository becomes easier if the single branches incorporate some subject specificity, leading to a further set of best practices:

:::{card} Best practices (2/4)
- Agglomerate commits with a similar subject or purpose in a common branch
- Incorporate branches with completed purpose
:::

## Meaningful steps

> Incremental change is easier to deal with if single increments are self-contained and yet digestible.

It is up to the developer to decide how many or few edits go into a commit and, similarly to the [Separate subjects](#separate-subjects), what these changes are about.

In addition, commits make up the elementary steps in a git history and can easily be:

- undone (see e.g. [**git revert**&nbsp;{octicon}`link-external;0.8em`](https://git-scm.com/docs/git-revert))
- applied onto other branches

As a consequence we want to fill commits with just enough changes to perform a meaningful step and, therefore:

:::{card} Best practices (3/4)
- Make a commit as specific as possible
- Write commit messages that specify the purpose of the commit
- Include as few as possible changes into a commit
:::

## Flag states

> An easily distinguishable reference facilitates orientation.

As a developer working with `git` the most noticeable _documentation_ activity is writing commit messages.

What is worth pointing out is that **a commit message describes the changes introduced by the commit** and thus, **the state of a repository remains undocumented**.
This can make it difficult to identify healthy states, and, as a consequence, some effort in describing the state of a repository should be made:

:::{card} Best practices (4/4)
- Tag particular states (see [**git tag**&nbsp;{octicon}`link-external;0.8em`](https://git-scm.com/docs/git-tag))
- Use a meaningful versioning framework to describe states (e.g. [semver&nbsp;{octicon}`link-external;0.8em`](https://semver.org/))
:::
