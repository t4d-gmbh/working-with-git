{% if slide %}
### Best Practices

:::::{card}
{% else %}
## Best Practices
{% endif %}

### Security Best Practices

**NEVER commit API keys, passwords, private keys, or other credentials.**

**Recommendation: maintain a global ignore file as a personal safety net.**
Use it for recurring sensitive or local file patterns across your repositories.

Create the file, register it with Git, and then edit it to add your patterns:

```bash
mkdir -p ~/.config/git
touch ~/.config/git/ignore
git config --global core.excludesFile ~/.config/git/ignore
```

{% if slide %}
Use global rules for personal protection; **commit project-specific rules in the repository’s `.gitignore`.**
{% endif %}

{% if page %}
The global ignore file is a **personal security safety net** to help avoid
accidentally adding credential files across your projects. It remains local to
your machine: collaborators do not receive it when they clone a repository.

Although the global ignore file is stored outside your repositories, its
patterns are interpreted relative to **each repository’s working-tree root**,
not relative to the directory containing the global ignore file.

For example, in `~/.config/git/ignore`:

- `/.secrets/` matches a `.secrets` directory directly at each repository’s
  working-tree root.
- `.secrets/` matches directories named `.secrets` at any depth within each
  repository.

The leading `/` anchors the pattern to the repository’s working-tree root;
it does **not** refer to the operating system’s filesystem root.

**A global ignore file does not replace a repository-specific `.gitignore`.**
Commit and track the project’s `.gitignore` so every collaborator receives its
shared exclusions when cloning. Project-specific build outputs, dependencies,
and local configuration paths belong in that tracked file.

**Example contents for `~/.config/git/ignore`:**

```text
# Local environment files, but keep safe templates available for versioning
.env
.env.*
!.env.example
!.env.template

# Personal credential files and a dedicated secrets directory
credentials.local.*
.secrets/

# Common private-key filenames, not their public-key counterparts
id_rsa
id_ed25519
```

Curate these patterns for your own workflow, and keep templates free of real
secrets. Personal editor and OS temporary-file patterns can also go in this
global file; project-specific rules still belong in the repository.

Ignore rules match **file and directory paths, not secret contents**. They do
not remove already-tracked files, and repository rules or `git add -f` can
override this safety net. Check staged changes before committing; once exposed,
credentials must be revoked or rotated, not merely added to an ignore file.
{% endif %}

:::{dropdown} ✅ DO
- Maintain a curated global ignore file for recurring personal exclusions.
- Commit project-specific `.gitignore` files and review their changes in PRs.
- Keep patterns organised and commented; test them with `git check-ignore -v`.
- Commit safe configuration templates such as `.env.example`.
- Inspect staged changes with `git diff --cached` before committing.
- Use environment variables or secret management services instead of hardcoding credentials.
:::

:::{dropdown} ❌ DON'T
- Treat your global ignore file as a substitute for a tracked project `.gitignore`.
- Expect ignore rules to hide or remove secrets that are already tracked.
- Blindly bypass ignore rules with `git add -f`.
- Ignore source code or safe configuration templates.
- Use broad patterns that hide important files; globally ignoring formats such as `.csv` or `.json` may hide legitimate inputs or test fixtures.
- Forget to update project rules when adding new file types.
:::

{% if page %}
### Project-Specific Patterns

#### IDE and Editor Files

Different development environments generate different files.
It's generally safe to ignore these, but coordinate with your team.

::::{grid}
:::{grid-item-card} VS Code
```
.vscode/
*.code-workspace
```
:::
:::{grid-item-card} JetBrains (IntelliJ, PyCharm, etc.)
```
.idea/
*.iml
*.ipr
*.iws
```
:::
:::{grid-item-card} Vim/Emacs
```
*.swp
*.swo
*~
.core
```
:::
::::

### Common .gitignore Templates

Instead of writing from scratch, you can use community templates:

- **[gitignore.io](https://www.toptal.com/developers/gitignore)**: Generate `.gitignore` for your tech stack
- **[GitHub's collection](https://github.com/github/gitignore)**: Official templates for popular languages

**How to use gitignore.io:**
```bash
# Install the gitignore CLI
npx gitignore

# Or generate online at https://www.toptal.com/developers/gitignore
# Select: Python, Node, macOS, Windows, etc.
```

**Example combined template:**
```bash
# From gitignore.io for Python+Windows+macOS
> python
> windows
> macos
> visualstudiocode
```

### Handling Different Environments

#### Development vs. Production

Some files should be ignored in development but are needed in production:

```
# Development only - ignore
.env
dev-config.json
```

Keep non-sensitive shared configuration such as `config/production.json`
versioned rather than listing it as an ignore pattern. A comment saying
"DON'T ignore" does not change the meaning of the pattern on the following line.

#### Personal vs. Shared Configuration

Use a **template pattern**:

```bash
# Template file (committed)
config_template.json

# Personal copy (ignored)
config.json

# .gitignore
config.json
```

Then each developer copies the template:
```bash
cp config_template.json config.json
# Edit config.json with personal settings
```

### Performance Considerations

- **Pattern complexity**: Simple patterns are faster to evaluate
- **Directory depth**: Deep `.gitignore` files in many directories can slow down `git status`
- **Number of patterns**: Hundreds of patterns may impact performance
- **Solution**: Use broad patterns at the root when possible, rather than many specific patterns in subdirectories

{% endif %}
{% if slide %}
:::::
{% endif %}
