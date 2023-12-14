# Collaboration Principles

Even though with `git` you can track document strictly all changes in a repository, simply using `git` does you not make a good collaborator.

In other words:

**The usage of `git` does not necessarily facilitate collaboration. All depends on how you are using `git`.**

What exactly are good usage patterns is a well discussed and opinionated subject.

Instead of contributing to this discussion we will point out a few principles that simplify interactions mediated by `git`:

## Healthy reference

> A pre-requirement to successfully develop any change, or new feature, is **to be able to depart from a functional state**.

In the `git`-context this translates to:

**You need to know a specific commit on a specific branch that represent a healthy state**

More precisely this state should:

- contain most of the relevant history, i.e. as recent as possible
- have a minimal chance to contain errors
- be functional

A successful collaboration and development strategy should cultivate healthy states, leading to the first set of best practices:

:::{card} Best practices (1/3)
- Identify one branch on one location to be the main reference[^sn1]
- Never develop directly on the main reference
- Try to consolidate branches whenever possible
- Verify the functionality of the resulting state **before** you incorporate a branches into the main reference 
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

:::{card} Best practices (2/3)
- Agglomerate commit with a similar subject or purpose in a common branch
- Incorporate branches with with completed purpose
:::

## Meaningful steps


