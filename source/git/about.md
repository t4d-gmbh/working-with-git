# About Git

```{margin} Repository

A data structure containing a set of files along with some metadata.

```
[Git](https://git-scm.com) is a **distributed version control system**.
That is a software providing various functionalities to **track**, **propagate**, and **manage** changes in a _repository_.

Git is open source and supported on all major operating systems.

## Main Features

```{dropdown} Tracking changes

As a version control system it provides easily accessible functionalities to:

- generate a history of changes in a repository
- verify the integrity of the history[^sn1]

```

```{dropdown} Content propagation

Git allows to easily exchange repository content between machines:

- it is designed to share the entire repository[^sn2]
- can be used to deploy single states only


```

```{dropdown} Managing changes

Git comes with a rich tool-set to curate and manipulate a repository's history.
It can:

- consolidate changes from different sources
- identify conflicting changes and allow to transparently resolve them
- maintain multiple versions concurrently
- exchange atomic changes between different versions

```

## Inabilities


```{dropdown} Automatic synchronization

Synchronization is not coupled to change events in the repository.

Therefore:
- collaboration mediated by Git happens asynchronously
- simultaneous editing is not supported
- synchronizing the state of a repository is part the workflow with Git

```

```{dropdown} Guarantee functional consistency

Git tracks only the content of files.
However, it does not track the functinality of whatever the content implements.

There is **no** guarantee that:

- Git will identify breaking changes as a conflict[^sn3]
- Two functioning versions do not lead to a dysfunctional combination


```

[^sn1]: A state is identified by a hash of the content and each state contains the hash of its preceding state leading to a unique identifier of the entire history.
[^sn2]: This is what makes it a _distributed_, and thus more resilient, version control system.
[^sn3]: This is rather obvious, if you think about it. But is something that might not be thought about if Git is not reporting any conflicts when merging changes from different sources.
