{% if slide %}
### `git diff` -  What changed between here and there?
{% endif %}
<strong style="color:black">git diff &nbsp;[{octicon}`link-external;0.8em;log`](https://git-scm.com/docs/git-diff)</strong> 

{% if page %}
`git diff` is one of the most essential commands for investigating changes in your Git repository. It shows you **exactly what changed** between different versions of your files.

::::{grid}
:::{grid-item-card} Working Directory vs Staging Area
```bash
git diff
```
Shows unstaged changes (what's different between your working directory and staging area)
:::
:::{grid-item-card} Staging Area vs Last Commit
```bash
git diff --staged
# or
git diff --cached
```
Shows staged changes (what's different between staging area and last commit)
:::
::::

::::{grid}
:::{grid-item-card} Working Directory vs Last Commit
```bash
git diff HEAD
```
Shows all changes since last commit (staged + unstaged)
:::
:::{grid-item-card} Between Two Commits
```bash
git diff commit1 commit2
# or using commit hashes
git diff abc123 def456
```
Shows changes between any two commits
:::
::::

{% endif %}

:::::{card} Example: `git diff`:
:class: smaller

```{code-block} diff
diff --git a/example.py b/example.py
index 83db48f..84d55c5 100644
--- a/example.py
+++ b/example.py
@@ -1,7 +1,8 @@
 def greet(name):
-    print("Hello, " + name)
+    print(f"Hello, {name}!")
     return True
 
 def main():
+    print("Starting application...")
     greet("World")
```

::::{grid}
:::{grid-item-card} <i class="fa-solid fa-minus"></i> Lines removed
Lines starting with `-` show content that was **deleted**
:::
:::{grid-item-card} <i class="fa-solid fa-plus"></i> Lines added  
Lines starting with `+` show content that was **added**
:::
::::
:::::

{% if page %}

### Exercise: Exploring Changes with `git diff`

Let's practice using `git diff` to understand changes in a repository:

:::{dropdown} **Exercise 1: Basic diff operations**
:color: primary

1. Create a new Git repository and add a simple text file:
   ```bash
   mkdir diff-practice
   cd diff-practice
   git init
   echo "Hello World" > greeting.txt
   git add greeting.txt
   git commit -m "Initial commit"
   ```

2. Make some changes to the file:
   ```bash
   echo "Hello Beautiful World!" > greeting.txt
   echo "Goodbye World" >> greeting.txt
   ```

3. Now explore the differences:
   ```bash
   # See unstaged changes
   git diff
   
   # Stage the changes
   git add greeting.txt
   
   # See staged changes
   git diff --staged
   
   # See all changes since last commit
   git diff HEAD~1
   ```

**Question**: What's the difference between `git diff`, `git diff --staged`, and `git diff HEAD`?
:::

:::{dropdown} **Exercise 2: Comparing commits**
:color: primary

1. Make another commit:
   ```bash
   git commit -m "Update greeting message"
   ```

2. Make more changes and commit:
   ```bash
   echo "Welcome to Git!" >> greeting.txt
   git add greeting.txt
   git commit -m "Add welcome message"
   ```

3. Now compare different commits:
   ```bash
   # Compare current commit with previous
   git diff HEAD~1
   
   # Compare first and current commit
   git diff HEAD~2 HEAD
   
   # See the history
   git log --oneline
   ```

**Question**: How can you see what changed in a specific commit?
:::

{% endif %}
:::::

