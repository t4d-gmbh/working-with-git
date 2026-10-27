{% if slide %}
### Ignored ≠ untracked

:::::{card}

**Ignore rules do not affect files already tracked by Git.**

```bash
git rm --cached file.txt
```

- Keeps the local file; stages its removal from tracking.
- Does **not** remove it from history.

:::::
{% else %}
## Debugging & Common Issues

### The Tracked Files Problem

**⚠️ IMPORTANT: This is the most common .gitignore misunderstanding**

Adding a file to `.gitignore` **does NOT remove it** from the repository if it's already being tracked by Git.

#### Why This Happens

When you run `git add file.txt`, Git starts tracking `file.txt`.
If you later add `file.txt` to `.gitignore`, Git continues to track it because:

1. Git already knows about the file
2. `.gitignore` only prevents **untracked** files from being added
3. Already-tracked files remain in the index

#### The Solution

To stop tracking a file that's already in the repository:

```bash
# Remove from index (staging area) but keep locally
git rm --cached file.txt

# Or remove completely (from both index and working directory)
git rm file.txt
```

**⚠️ CAUTION**: This doesn't remove the file from Git history.
To completely purge a file from history, you need `git filter-repo` or similar tools.

#### Example Workflow

```bash
# Oops! I committed my API key
$ echo "API_KEY=secret123" > .env
$ git add .env
$ git commit -m "Add config"

# Now I add .env to .gitignore
echo ".env" >> .gitignore
git add .gitignore
git commit -m "Add .gitignore"

# But .env is STILL tracked!
$ git status
# On branch main
# nothing to commit, working tree clean

# Fix: Remove .env from tracking
$ git rm --cached .env
$ git commit -m "Remove .env from tracking"

# Now .env is ignored and untracked
$ git status
# On branch main
# nothing to commit, working tree clean

# Explicitly show ignored files
$ git status --porcelain --ignored
# !! .env
```

### Common Mistakes & Gotchas

::::{grid} 2
:::{grid-item-card} Wrong Directory
**Problem:** Putting `.gitignore` in the wrong directory

**Fix:** Put repository-wide rules in a repository-root `.gitignore`, or scope
them to a subdirectory using a `.gitignore` there. Rules apply beneath the
directory containing the ignore file; a leading `/` anchors a match there.
Repository-wide is not the same as a user-global ignore file.
:::
:::{grid-item-card} Missing Slash
**Problem:** Forgetting the trailing `/` for directories

`build` matches files and directories named `build` within scope.
`build/` restricts the match to directories; `/build/` restricts it further to
a directory directly beside this `.gitignore`.
:::
:::{grid-item-card} Overly Broad Patterns
**Problem:** `*` matches untracked names throughout this `.gitignore`’s scope,
including directories that Git would otherwise traverse.

**Fix:** Be specific. Use `*.log` not `*`
:::
:::{grid-item-card} Incorrect Negation Order
**Problem:** Negation pattern doesn't work because of order

**Fix:** Put exceptions after the patterns they negate, and allow traversal
into any excluded parent directories before making exceptions for their files.
:::
:::{grid-item-card} Case Sensitivity
**Problem:** Matching differs with filesystem case handling and `core.ignoreCase`.

**Fix:** Check the repository’s configuration and use explicit spellings where needed.
:::
:::{grid-item-card} Not Committing .gitignore
Uncommitted `.gitignore` files work locally, but collaborators do not receive
those rules when cloning.

**Fix:** Commit the repository’s `.gitignore` so its shared rules are distributed.
:::
::::

### Debugging Tools

#### git check-ignore

The most important debugging tool for `.gitignore`:

```bash
# Check why a specific file is ignored
git check-ignore -v path/to/file

# Example output:
# .gitignore:1:*.log    path/to/debug.log
# The file is ignored by line 1 of .gitignore with pattern *.log

# Check multiple files
git check-ignore -v file1.txt file2.log dir/file3

# Inspect ignore rules even when the file is already tracked
git check-ignore -v --no-index path/to/file
```

**Flags:**
- `-v` / `--verbose`: Show the deciding pattern and its source file/line.
- `--no-index`: Check patterns without skipping already-tracked files; this does not untrack them.

If the reported pattern starts with `!`, it is an exception: the path is **not
ignored**. Verbose output can report such exceptions, so read the pattern rather
than assuming that any output means the path is ignored.

#### git status

Use `git status` to see which files are tracked vs. ignored:

```bash
# Changes and untracked files; ignored paths are omitted by default
git status --porcelain

# Also include ignored files, marked with !!
git status --porcelain --ignored

# To see ONLY ignored files:
git status --porcelain --ignored | grep '^!!'
```

**Output codes:**
- `!!` = Ignored
- `??` = Untracked (not ignored)
- `M` = Modified
- `A` = Added to index

#### git ls-files

List all files tracked by Git (including those in index):

```bash
# List all tracked files
git ls-files

# List untracked, non-ignored files
git ls-files --others --exclude-standard

# List only ignored files
git ls-files --others --ignored --exclude-standard
```

### Self-Assessment Questions

Test your understanding with these questions:

:::{dropdown} Question 1
**You add `*.log` to `.gitignore` but `error.log` is still tracked. Why?**

A) `.gitignore` is case-sensitive
B) `error.log` was already tracked before adding it to `.gitignore`
C) The pattern should be `*.LOG`
D) You need to restart Git

**Answer:** B) `error.log` was already tracked before adding it to `.gitignore`. Files already tracked are NOT automatically removed when added to `.gitignore`.
:::

:::{dropdown} Question 2
**How do you make Git stop tracking `config.env` but keep it on your local filesystem?**

A) Delete the file, then add to `.gitignore`
B) `git rm config.env`
C) `git rm --cached config.env`
D) Add to `.gitignore` and run `git reset`

**Answer:** C) `git rm --cached config.env` removes it from tracking but keeps the local copy.
:::

:::{dropdown} Question 3
**For a repository-root `.gitignore`, which pattern set ignores `.tmp` files at
any depth except the single `important.tmp` directly beside that `.gitignore`?**

A) 
```
*.tmp
!important.tmp
```

B) 
```
*/*.tmp
!important.tmp
```

C) 
```
*.tmp
!/important.tmp
```

D) 
```
**/*.tmp
!important.tmp
```

**Answer:** C) `*.tmp` followed by `!/important.tmp`. The leading `/` anchors
the exception directly beside this `.gitignore`. A and D also allow
`nested/important.tmp`; B additionally fails to exclude `.tmp` files directly
beside the ignore file and at deeper levels than its single directory wildcard.
:::

:::{dropdown} Question 4
**True or False: `.gitignore` can be used to remove sensitive files from Git history.**

**Answer:** FALSE. `.gitignore` only prevents **untracked** files from being added. To remove sensitive files from history, you need tools like `git filter-repo`, `BFG Repo-Cleaner`, or `git filter-branch`.
:::

:::{dropdown} Question 5
**With these rules in a repository-root `.gitignore`, you want to ignore the
contents of `temp/` except `temp/keep.txt`. Which works?**

A) 
```
temp/
!temp/keep.txt
```

B) 
```
temp/*
!temp/keep.txt
```

C) Both A and B
D) Neither

**Answer:** B) Only option B works. `temp/` excludes the directory itself, so
Git cannot traverse it to apply the file exception. `temp/*` excludes its
children without excluding `temp` itself, allowing `!temp/keep.txt` to take effect.
:::

### Troubleshooting Guide

| Symptom | Possible Cause | Solution |
|---------|---------------|----------|
| File still tracked after adding to `.gitignore` | File was already tracked | `git rm --cached <file>` |
| Pattern not matching expected files | Wrong pattern scope or anchoring | Check the containing `.gitignore` and anchor with `/` if needed; use `git check-ignore -v` |
| Rules work locally but are missing for collaborators | Project `.gitignore` not committed/shared | Commit the repository’s `.gitignore`; a commit is not required for local matching |
| Negation pattern not working | Wrong order or missing parent | Put negation AFTER the pattern, ensure parent isn't ignored |
| Different case-matching behaviour | Filesystem/configuration differences | Check `core.ignoreCase` and test the actual spellings |
| Slow `git status` with many patterns | Too many complex patterns | Simplify patterns, use directory-specific files |

{% endif %}
