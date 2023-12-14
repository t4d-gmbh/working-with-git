# Project Management

`git` is a version control system and does not provide tools specific to project management and hence, this was one of the main extra features provided by services like GitHub or GitLab.

## Basic Elements
The approach followed by virtually any such service that is know to us is based on a few basic elements:

:::{card} Issues
Is a rather genuine piece of information tied to a repository.

It is consisting of a title, a description and several options arguments, like a assignee, labels, a due date, etc.

The term _issue_ should not be taken to literally, in this context and idea, a proposition or a question are all _issues_.
:::

:::{card} Milestones
A milestone contains, similar to an Issue, a title and a description.
In addition it holds a collection of issues, thus building a over-arching structure.
:::

:::{card} Merge/Pull requests
This element is the most closely tied to a branch in `git`.

In fact a `Merge request` (GitLab) or `Pull request` (GitHub) consists of a title, a description and two branches.

It defines a suggestion (or request) to incorporate one branch into the other.
:::

## Workflows

