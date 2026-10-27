{% if slide %}
### Pattern Syntax

:::::{card}
{% else %}
## Pattern Syntax
{% endif %}

The `.gitignore` file uses **glob patterns** to match files and directories.
These patterns are similar to, but not exactly the same as, regular expressions.

**Pattern scope starts at the directory containing this `.gitignore`.**

{% if page %}
Patterns in a repository `.gitignore` apply to that directory and its descendants.
A leading `/` anchors a match directly there; it does not mean the operating system’s filesystem root.
A slash in the middle also anchors the pattern: `output/build/` matches that path
beside the `.gitignore`, not `nested/output/build/`.

Without a slash other than an optional trailing `/`, a pattern matches names at
any depth within this scope. The trailing `/` restricts matches to directories.
Do not prefix patterns with `./`: `.gitignore` patterns are not normalised like shell paths.
Paths shown in the examples below are relative to the directory containing the `.gitignore`.
{% endif %}

### Basic Pattern Rules

{% if page %}
#### Matching Files
{% endif %}

{% if page %}
::::{grid} 2
{% else %}
::::{grid} 4
{% endif %}
:::{grid-item-card} `*.log`
Matches names ending with `.log` beside this `.gitignore` or in its descendants.

`error.log`, `debug.log`, `logs/app.log`
:::
:::{grid-item-card} `temp.txt`
Matches the name `temp.txt` beside this `.gitignore` or in its descendants.

`temp.txt` ✅, `subdir/temp.txt` ✅

{% if page %}
Use `/temp.txt` to match only directly beside the `.gitignore`.
{% endif %}
:::
:::{grid-item-card} `/build/`
Matches a directory named `build` **directly beside this `.gitignore`**, not deeper down.

`build/` ✅, `src/build/` ❌
:::
:::{grid-item-card} `build/`
Matches directories named `build` at any depth **within this `.gitignore`’s scope**.

`build/`, `src/build/`, `docs/build/` ✅
:::
::::

{% if page %}
#### Matching Directories

To match only directories, end your pattern with a forward slash `/`.
Without it, `build` can match either a file or a directory named `build`.

```text
# Ignore directories named node_modules beside this .gitignore or below it
node_modules/

# Ignore only node_modules directly beside this .gitignore
/node_modules/
```

### Negation Patterns

Prefix a pattern with `!` to cancel an earlier exclusion for a matching path.
This makes an untracked path eligible for adding; it does not track it automatically.
An exception cannot reach a file inside an excluded parent directory: Git must
be allowed to traverse every parent first.

{% endif %}

::::{grid}
:::{grid-item-card} Negate a Specific File
```
*.log
!important.log
```
Ignores `.log` names within scope, except names exactly `important.log`, including in descendants.
:::
:::{grid-item-card} Negate a Directory
```
/*
!/.gitignore
!/src/
```
Ignores other entries directly beside this `.gitignore`, but keeps the ignore
file itself and files under `src/` eligible for adding.
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

Within one `.gitignore`, the last matching pattern determines the result,
provided an excluded parent directory has not already prevented traversal.

```text
# This works: ignore the contents of docs/ except its README.md
docs/*
!docs/README.md
```

This does not work, even though the exception comes last:

```text
*
!docs/README.md
```

Here `*` excludes the `docs` directory itself. Allow Git to traverse it before
excluding its contents and making the file exception:

```text
*
!docs/
docs/*
!docs/README.md
```

Similarly, `*` followed by `!src/` allows traversal into `src`, but `*` still
ignores its files and other child directories. Git does not track empty
directories: allowing traversal is different from making files eligible for adding.

### Special Characters

:::{dropdown} Comments
Lines starting with `#` are comments and are ignored:
```
# This is a comment
*.log
```
Explanations must be on separate comment lines; a trailing `# explanation`
is part of the pattern, not an inline comment.
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
# Matches file0.txt, file1.txt, ..., file9.txt
file[0-9].txt
```
:::

### Directory-Specific .gitignore Files

You can place `.gitignore` files in **subdirectories** to apply ignore rules locally:

```
my-project/
├── .gitignore          # Root ignore rules
├── src/
│   ├── .gitignore      # Rules for src/ and its descendants
│   └── temp.txt
└── docs/
    └── .gitignore      # Rules for docs/ and its descendants
```

Both the repository-root `.gitignore` and `src/.gitignore` can supply rules for
`src/temp.txt`. **Nested rules take precedence** over matching parent rules;
whether a file is ignored depends on the actual patterns, not just the presence
of these files.

For example, `temp.txt` in the repository-root `.gitignore` excludes matching
names throughout its scope. An exception `!temp.txt` in `src/.gitignore` makes
`src/temp.txt` and `src/deep/temp.txt` eligible for adding, provided their parent
directories are not excluded. Files outside `src/` are unaffected by that exception.

### Platform Considerations

::::{grid}
:::{grid-item-card} Case Sensitivity
Case sensitivity depends on `core.ignoreCase` and the filesystem, not just the OS.
With `core.ignoreCase=false`, `File.txt` and `file.txt` match differently;
with it enabled, an ignore pattern can match both spellings.

For cross-platform compatibility, list both:
```
Thumbs.db
thumbs.db
```
:::
:::{grid-item-card} Line Endings
Patterns match candidate paths, not the contents of candidate files.
Git accepts ordinary LF and CRLF line endings in `.gitignore`.
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
Patterns such as `.Rmd` and `.Rproj` above are **literal names**, not extension
patterns: they do not match `analysis.Rmd` or `project.Rproj`. An extension
pattern would require a wildcard, but source documents and shared project
configuration should normally remain versioned.
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
