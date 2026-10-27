{% if slide %}
### What is .gitignore?

:::::{card}
{% else %}
## What is .gitignore?
{% endif %}

A `.gitignore` file is a **text file** that tells <i class="fab fa-git"></i> which untracked paths to omit from normal status listings and additions.
It helps prevent accidental additions; it does not stop tracking files already in the index or prevent a forced add.

{% if slide %}
### Why is it Useful?
{% else %}
## Why is it Useful?
{% endif %}

{% if page %}
Without ignore rules, Git normally reports untracked files, and `git add .`
can stage them for tracking. These may include:
{% endif %}

::::{grid}
:::{grid-item-card} Build Artifacts
Compiled binaries, object files, executable outputs

`/dist/`, `*.exe`, `*.class`
:::
:::{grid-item-card} Local Configuration
Machine-specific settings, API keys, credentials

`.env`, `config.local.json`, `*.secret`
:::
:::{grid-item-card} IDE/Editor Files
Editor-specific metadata and temporary files

`.vscode/`, `.idea/`, `*.swp`
:::
:::{grid-item-card} OS-Specific Files
System-generated files that clutter repositories

`.DS_Store`, `Thumbs.db`, `*.tmp`
:::
:::{grid-item-card} Logs & Databases
Generated data that shouldn't be versioned

`*.log`, `*.sqlite`, `*.db`
:::
::::

{% if page %}
Without `.gitignore`, these files would:
- Bloat your repository with unnecessary data
- Risk committing sensitive information (credentials, API keys)
- Cause merge conflicts due to machine-specific differences
- Slow down <i class="fab fa-git"></i> operations
- Confuse collaborators with irrelevant files

## Historical Context

Early version control systems had limited or no ignore capabilities.
As repositories grew in complexity, developers needed a way to exclude generated files, local configurations, and temporary data.
The `.gitignore` file emerged as a simple, declarative solution to this problem, becoming a standard across the Git ecosystem.

## When to Use .gitignore

| Scenario | Use .gitignore? | Reason |
|----------|----------------|--------|
| Generated files (build outputs) | ✅ Yes | Should be regenerated, not versioned |
| Local development configs | ✅ Yes | Machine-specific, not shared |
| Credentials and secrets | ✅ **Absolutely** | Security risk if committed |
| IDE/Editor files | ✅ Yes | Specific to your development environment |
| OS-generated files | ✅ Yes | Not portable across systems |
| Source code | ❌ No | This is what you want to version! |
| Documentation | ❌ No | Should be versioned with the code |
| Test files | ⚠️ Maybe | Depends on whether they're hand-written or generated |

{% endif %}
{% if slide %}
:::::
{% endif %}
