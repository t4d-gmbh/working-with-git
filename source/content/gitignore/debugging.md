{% if slide %}
### Debugging & Common Issues

:::::{card}
{% else %}
## Debugging & Common Issues
{% endif %}

### The Tracked Files Problem

{% if page %}
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
# Untracked files:
#   (use "git add <file>..." to include in what will be committed)
#         .env
```

### Common Mistakes & Gotchas

::::{grid}
:::{grid-item-card} Wrong Directory
**Problem:** Putting `.gitignore` in the wrong directory

**Fix:** Place `.gitignore` in the same directory as the files you want to ignore, or in the root to apply globally
:::
:::{grid-item-card} Missing Slash
**Problem:** Forgetting the trailing `/` for directories

**Wrong:** `build` (matches files named "build")
**Right:** `build/` (matches the directory)
:::
:::{grid-item-card} Overly Broad Patterns
**Problem:** Using `*` at the root ignores everything

**Fix:** Be specific. Use `*.log` not `*`
:::
:::{grid-item-card} Incorrect Negation Order
**Problem:** Negation pattern doesn't work because of order

**Fix:** Put negation patterns AFTER the patterns they negate
:::
:::{grid-item-card} Case Sensitivity
**Problem:** On macOS/Linux, `File.txt` ≠ `file.txt`

**Fix:** List both or use case-insensitive patterns where supported
:::
:::{grid-item-card} Not Committing .gitignore
**Problem:** `.gitignore` file isn't committed to the repository

**Fix:** Always commit `.gitignore` so it applies to all collaborators
:::
::::

{% endif %}

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

# Debug mode (shows all matching patterns)
git check-ignore --debug -v path/to/file
```

**Flags:**
- `-v` / `--verbose`: Show which pattern matched
- `--debug`: Show detailed matching information

#### git status

Use `git status` to see which files are tracked vs. ignored:

```bash
$ git status --porcelain
# Shows all files, including ignored ones with ! prefix

# To see ONLY ignored files:
git status --porcelain | grep '^!!'
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

# List all files including ignored
git ls-files --others --exclude-standard

# List only ignored files
git ls-files --others --ignored --exclude-standard
```

### Self-Assessment Questions

Test your understanding with these questions:

{% if page %}
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
**Which pattern ignores all `.tmp` files in any directory, but NOT `important.tmp` in the root?**

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

**Answer:** C) `*.tmp` followed by `!/important.tmp`. The leading `/` in the negation makes it specific to the root directory.
:::

:::{dropdown} Question 4
**True or False: `.gitignore` can be used to remove sensitive files from Git history.**

**Answer:** FALSE. `.gitignore` only prevents **untracked** files from being added. To remove sensitive files from history, you need tools like `git filter-repo`, `BFG Repo-Cleaner`, or `git filter-branch`.
:::

:::{dropdown} Question 5
**You want to ignore everything in the `temp/` directory except `temp/keep.txt`. Which works?**

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

**Answer:** B) Only option B works. When you use `temp/`, it matches the directory itself, and the negation `!temp/keep.txt` won't work because the directory is already ignored. Using `temp/*` ignores the contents but allows the negation to work.
:::

{% endif %}

### Troubleshooting Guide

| Symptom | Possible Cause | Solution |
|---------|---------------|----------|
| File still tracked after adding to `.gitignore` | File was already tracked | `git rm --cached <file>` |
| Pattern not matching expected files | Wrong directory or pattern | Use absolute paths or verify directory |
| `.gitignore` not working at all | File not committed | Commit the `.gitignore` file |
| Negation pattern not working | Wrong order or missing parent | Put negation AFTER the pattern, ensure parent isn't ignored |
| Different behavior on different OS | Case sensitivity or line endings | Use both cases, be explicit |
| Slow `git status` with many patterns | Too many complex patterns | Simplify patterns, use directory-specific files |

{% if slide %}
:::::
{% endif %}
