### Guarantee functional consistency

Git tracks only the content of files.
However, it does not track the functionality of whatever the content implements.

There is **no** guarantee that:

- Git will identify breaking changes as a conflict[^sn3]
- Two functioning versions do not lead to a dysfunctional combination

[^sn3]: This is rather obvious, if you think about it. But is something that might not be thought about if Git is not reporting any conflicts when merging changes from different sources.

