{% if slide %}
### Going Back in Time: Undoing Changes
{% endif %}

{% if slide %}
When you need to **undo changes** or **go back to a previous state**, Git offers several approaches. **Choose carefully** - some methods rewrite history!
{% else %}

## Going Back in Time: Undoing Changes

When you need to **undo changes** or **go back to a previous state**, Git offers several approaches. **Choose carefully** - some methods rewrite history!

{% endif %}

### Safe Methods (Preserve History)

::::{grid}
:::{grid-item-card} <i class="fa-solid fa-undo"></i> `git revert`
:class-title: text-success
```bash
git revert <commit-hash>
```
**Creates a new commit** that undoes changes from a specific commit. **Safe for shared repositories**.
:::
:::{grid-item-card} <i class="fa-solid fa-archive"></i> `git stash`
:class-title: text-success
```bash
git stash
git stash pop
```
**Temporarily saves** uncommitted changes. **Safe** - doesn't modify history.
:::
::::

### Destructive Methods (Rewrite History)

```{danger}
**Warning**: These commands rewrite history. **Never use on shared/pushed commits** unless you coordinate with your team!
```

::::{grid}
:::{grid-item-card} <i class="fa-solid fa-eraser"></i> `git reset --soft`
:class-title: text-warning
```bash
git reset --soft HEAD~1
```
**Moves HEAD** back but keeps changes staged. Safest reset option.
:::
:::{grid-item-card} <i class="fa-solid fa-step-backward"></i> `git reset --mixed`
:class-title: text-warning
```bash
git reset HEAD~1
# or 
git reset --mixed HEAD~1
```
**Moves HEAD** back and unstages changes, but keeps them in working directory.
:::
::::

::::{grid}
:::{grid-item-card} <i class="fa-solid fa-trash"></i> `git reset --hard`
:class-title: text-danger
```bash
git reset --hard HEAD~1
```
**⚠️ DESTRUCTIVE**: Moves HEAD back and **deletes all changes**. Use with extreme caution!
:::
:::{grid-item-card} <i class="fa-solid fa-code-branch"></i> `git rebase`
:class-title: text-warning
```bash
git rebase -i HEAD~3
```
**Rewrites commit history**. Powerful but **dangerous** on shared branches.
:::
::::

{% if page %}

### When to Use Which Method?

:::::{dropdown} **Decision Guide: Which "go back" method to use?**
:color: primary

**Q: Are the commits already pushed/shared with others?**

- **YES** → Use `git revert` (creates new commit, safe for shared history)
- **NO** → You can use destructive methods, but consider the consequences

**Q: Do you want to keep your changes?**

- **Keep as staged changes** → `git reset --soft`
- **Keep as unstaged changes** → `git reset --mixed` (default)
- **Discard all changes** → `git reset --hard` ⚠️

**Q: Do you want to fix the history/commit messages?**

- **YES** → `git rebase -i` (interactive rebase)
- **NO** → Use `git reset` methods

**Q: Do you just want to temporarily save work?**

- **YES** → `git stash` (safest option)

:::::

### Exercise: Practicing "Time Travel" Commands

::::{dropdown} **Exercise 3: Safe history manipulation**
:color: primary

1. **Setup**: Create a repository with multiple commits:
   ```bash
   mkdir time-travel
   cd time-travel
   git init
   
   echo "Version 1" > file.txt
   git add file.txt
   git commit -m "Add version 1"
   
   echo "Version 2" > file.txt
   git add file.txt
   git commit -m "Add version 2"
   
   echo "Version 3" > file.txt
   git add file.txt
   git commit -m "Add version 3"
   ```

2. **Practice safe undoing**:
   ```bash
   # See the history
   git log --oneline
   
   # Revert the last commit (creates new commit)
   git revert HEAD
   
   # Check what happened
   git log --oneline
   cat file.txt
   ```

**Question**: What's in `file.txt` now? Why is this safer than `git reset`?
::::

::::{dropdown} **Exercise 4: Understanding reset modes**
:color: warning

**⚠️ Note**: Only do this on a local, non-shared repository!

1. **Setup**: Create some commits and changes:
   ```bash
   mkdir reset-practice
   cd reset-practice
   git init
   
   echo "Line 1" > file.txt
   git add file.txt
   git commit -m "Commit 1"
   
   echo "Line 2" >> file.txt
   git add file.txt
   git commit -m "Commit 2"
   
   echo "Line 3" >> file.txt
   git add file.txt
   echo "Line 4" >> file.txt  # This stays unstaged
   ```

2. **Observe current state**:
   ```bash
   git status
   git diff --staged
   git diff
   ```

3. **Try different reset modes**:
   ```bash
   # Soft reset - keeps everything staged
   git reset --soft HEAD~1
   git status
   
   # Mixed reset - unstages but keeps changes
   git reset --mixed HEAD~1  # or just git reset HEAD~1
   git status
   
   # Hard reset - DESTROYS changes!
   # git reset --hard HEAD~1  # BE CAREFUL!
   ```

**Question**: What's the difference between the three reset modes?
::::

::::{dropdown} **Exercise 5: When things go wrong**
:color: info

Sometimes you make a mistake with history manipulation. Git has safety nets:

1. **The safety net - reflog**:
   ```bash
   # See all recent HEAD movements
   git reflog
   
   # You can recover from almost any mistake using reflog
   # git reset --hard <reflog-entry>
   ```

2. **Practice recovery**:
   ```bash
   # Make a "mistake"
   git reset --hard HEAD~2
   
   # Oh no! Find the lost commit
   git reflog
   
   # Recover (replace abc123 with actual hash from reflog)
   # git reset --hard HEAD@{1}
   ```

**Key learning**: `git reflog` is your safety net for local repository disasters!
::::

{% endif %}

### Summary: Diff and History Navigation

::::{grid}
:::{grid-item-card} <i class="fa-solid fa-search"></i> **Investigate Changes**
- `git diff` - see what changed
- `git log` - see commit history  
- `git show` - see specific commit details
- `git blame` - see who changed what
:::
:::{grid-item-card} <i class="fa-solid fa-shield-alt"></i> **Safe Time Travel**
- `git revert` - undo with new commit
- `git stash` - temporarily save changes
- Safe for shared repositories
:::
::::

::::{grid}
:::{grid-item-card} <i class="fa-solid fa-exclamation-triangle"></i> **Dangerous Time Travel**
- `git reset` - move HEAD, optionally keep changes
- `git rebase` - rewrite commit history
- **Never use on pushed/shared commits**
:::
:::{grid-item-card} <i class="fa-solid fa-life-ring"></i> **Emergency Recovery**
- `git reflog` - see all HEAD movements
- Can recover from most local disasters
- Your safety net for Git mistakes
:::
::::

{% if page %}

```{tip}
**Golden Rule**: If commits are already shared (pushed), use `git revert`. If commits are local only, you have more options but be careful with destructive commands!
```

{% endif %}