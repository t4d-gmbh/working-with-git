### <strong style="color:gray">add</strong>

<!-- pages-include -->
:::{margin}
Running `git add .` will:
1. Register all changes in the current content of your workspace (mind the `.`!) with respect to the current branch. This is also called "staging".

```{note}
- `git rm` is **not** the counterpart of `git add` as it removes a file from the tracking and even from the workspace (unless you use `--cached`).
- "unstageing" changes in a file can be done with `git restore --stage <pat-to-file>` (see [<strong style="color:gray">restore &nbsp;{octicon}`link-external;0.8em;add`</strong>](https://git-scm.com/docs/git-restore) for details)
```
:::

![add view](figures/add_view.svg)
