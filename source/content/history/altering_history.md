{% if slide %}
### When is it fine to change history?
{% endif %}

{% if page %}
**When to Rewrite Git History**

Rewriting Git history generally **undermines Git's ability to help you collaborate, maintain a reproducible record, and effectively track/debug changes**.
For this reason, it's often best to avoid it.

**When It May Be Necessary**

Sometimes, you need to change history for a critical reason, such as **removing sensitive data**.
In these specific cases, altering history might be acceptable because the benefit outweighs the cost of not acting.

**A Simple Guideline**

A good rule of thumb is to ask: **Is the history you're changing already shared?**

* **Local History Only:** It's usually **fine** to modify history that **only exists on your local machine** (e.g., squashing commits, rewriting commit messages, or rebasing an unpublished branch).
  When you push, this revised history will be the only version shared, preventing conflicts.

* **Shared History:** **Avoid** modifying history that has **already been pushed to a remote repository**.
  This requires a **force push** and creates a situation where different copies of the project have conflicting histories, which breaks the normal collaboration workflow and requires manual coordination to fix.


{% endif %}

:::::{admonition} Sensitive data
:class: warning

::::{grid}
:::{grid-item-card} Avoid rewriting history:
It breaks collaboration, reproducibility, and the ability to track changes.
:::
:::{grid-item-card} Never change shared history:
Rewriting history that is already on the remote repository breaks the workflow and requires a **force push** and manual cleanup by collaborators.
:::
::::

::::{grid}
:::{grid-item-card} Exception 1: Critical need:
It's acceptable for necessary actions like **removing sensitive data**.
:::
:::{grid-item-card} Exception 2 _optional_: Local changes only:
It is generally **fine** to change history that has **not yet been pushed** (e.g., squashing commits on a local branch).
:::
::::
:::::

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

