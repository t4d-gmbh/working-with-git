{% if slide %}
### <i class="fab fa-git"></i> <strong style="color:#ca80e9">diff</strong>
{% else %}

`git diff` is one of the most essential commands for investigating changes in your Git repository.

It shows you **exactly what changed** between different files, branches and even repositories.
`git diff` compiles the changes in a systematic manner, reporting a set of instructions that can be stored (i.e. a patch), shared and even re-applied using `git apply`.


{% endif %}
```{admonition} Create patches:
:class: tip, margin
- `git diff > my.patch`
- `git apply my.patch`
```

:::{card} `git diff` usage:

Compare files:

```
git diff file1.txt file2.txt
```
Compare changes between commits:
```
git diff commit1_hash commit2_hash
# optionally restrict to a specific file:
git diff commit1_hash commit2_hash -- path/to/file.txt
```
Compare across remotes and repositories:
```
# Add another repository as a remote
git remote add other_repo git@gitserver.com:other/repository
# Fetch from the other repository
git fetch other_repo
# Compare across remotes
git diff origin/feature-branch other_repo/feature-branch -- src/main.py
```

:::
