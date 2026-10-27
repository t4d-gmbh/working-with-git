{% if slide %}
### Pattern Syntax

:::::{card}
{% else %}
## Pattern Syntax
{% endif %}

The `.gitignore` file uses **glob patterns** to match files and directories.
These patterns are similar to, but not exactly the same as, regular expressions.

### Basic Pattern Rules

{% if page %}
#### Matching Files
{% endif %}

::::{grid}
:::{grid-item-card} `*.log`
Matches all files ending with `.log` in **any directory**

`error.log`, `debug.log`, `logs/app.log`
:::
:::{grid-item-card} `temp.txt`
Matches the file `temp.txt` in the **current directory only**

`./temp.txt` ✅, `subdir/temp.txt` ❌
:::
:::{grid-item-card} `/build/`
Matches the `build` directory **only in the root**

`/build/` ✅, `src/build/` ❌
:::
:::{grid-item-card} `build/`
Matches **any directory** named `build` at any level

`build/`, `src/build/`, `docs/build/` ✅
:::
::::

{% if page %}
#### Matching Directories

To match a directory, end your pattern with a forward slash `/`:

```bash
# Ignore all directories named node_modules
node_modules/

# Ignore only the root node_modules directory
/node_modules/
```

### Negation Patterns

Prefix a pattern with `!` to **exclude** it from being ignored.
Negation patterns override previous ignore patterns.

{% endif %}

::::{grid}
:::{grid-item-card} Negate a Specific File
```
*.log
!important.log
```
Ignores all `.log` files **except** `important.log`
:::
:::{grid-item-card} Negate a Directory
```
*
!src/
```
Ignores everything **except** the `src/` directory
:::
:::{grid-item-card} Complex Negation
```
*.js
!*.test.js
!config.js
```
Ignores all `.js` files except test files and `config.js`
:::
::::

{% if page %}
#### Order Matters

`.gitignore` processes patterns **from top to bottom**.
The last matching pattern wins:

```
# This works: ignore everything in docs/ except README.md
docs/*
!docs/README.md

# This doesn't work (README.md is ignored by * first, then un-ignored, but too late)
*
!docs/README.md
docs/*
```

### Special Characters

:::{dropdown} Comments
Lines starting with `#` are comments and are ignored:
```
# This is a comment
*.log
```
:::

:::{dropdown} Escaping Special Characters
To match a file starting with `!`, escape it with `\`:
```
\!important.txt
```
:::

:::{dropdown} Character Classes
Use `[abc]` to match any single character in the brackets:
```
file[0-9].txt  # Matches file0.txt, file1.txt, ..., file9.txt
```
:::

### Directory-Specific .gitignore Files

You can place `.gitignore` files in **subdirectories** to apply ignore rules locally:

```
my-project/
├── .gitignore          # Root ignore rules
├── src/
│   ├── .gitignore      # Ignores files only in src/
│   └── temp.txt
└── docs/
    └── .gitignore      # Ignores files only in docs/
```

A file in `src/temp.txt` will be ignored by **both** the root `.gitignore` and `src/.gitignore`.

### Platform Considerations

::::{grid}
:::{grid-item-card} Case Sensitivity
Git is case-sensitive by default.
On macOS and Linux, `File.txt` ≠ `file.txt`.
On Windows, they're the same.

For cross-platform compatibility, list both:
```
Thumbs.db
thumbs.db
```
:::
:::{grid-item-card} Line Endings
Pattern matching is based on the **file content**, not line endings.
However, be aware that line endings can affect pattern matching in edge cases.
:::
::::

### Practical Examples

::::{tabs}
:::{tab} Python
```
# Byte-compiled / optimized / DLL files
__pycache__/
*.py[cod]
*$py.class

# C extensions
*.so

# Distribution / packaging
.Python
build/
develop-eggs/
dist/
downloads/
eggs/
.eggs/
lib/
lib64/
parts/
sdist/
var/
wheels/
*.egg-info/
.installed.cfg
*.egg

# PyInstaller
*.manifest
*.spec

# Installer logs
pip-log.txt
pip-delete-this-directory.txt

# Unit test / coverage reports
htmlcov/
.tox/
.nox/
.coverage
.coverage.*
.cache
nosetests.xml
coverage.xml
*.cover
*.py,cover
.hypothesis/
.pytest_cache/
```
:::
:::{tab} R
```
# R specific files
.RData
.Rhistory
.Rproj.user/
.install_r

# R Markdown and Shiny
.Rmd
.Rproj

# R Studio
.Rproj.user/
.Rhistory
```
:::
:::{tab} LaTeX
```
# LaTeX auxiliary files
*.aux
*.bbl
*.blg
*.log
*.out
*.toc
*.acn
*.acr
*.alg
*.glg
*.glo
*.gls
*.ist
*.fls
*.idx
*.ilg
*.ind
*.lof
*.lot
*.nav
*.snm
*.vrb
*.thm

# BibTeX files
*.bib

# Synctex files
*.synctex.gz
```
:::
::::

### Pattern Testing

You can test your patterns before committing using:

```bash
git check-ignore -v path/to/file
```

This shows which pattern (if any) is causing a file to be ignored.

{% endif %}
{% if slide %}
:::::
{% endif %}
