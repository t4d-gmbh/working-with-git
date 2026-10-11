{% if slide %}### Best Practices{% endif %}

:::{card}{% if page %} Best Practices{% endif %}

## Security Best Practices

{% if page %}
**NEVER commit sensitive information to version control.**
Once committed, it's nearly impossible to completely remove from the repository history.
{% endif %}

:::{dropdown} 🔴 **CRITICAL: Credentials and Secrets**
**Always ignore files containing:**

- API keys and tokens
- Database credentials and connection strings
- Passwords and usernames
- Private encryption keys
- OAuth secrets and client IDs
- Session tokens and cookies

{% if page %}
**Pattern examples:**
```
# Environment files
.env
.env.*
*.env

# Configuration files with secrets
config.json
secrets.yml
credentials.xml

# Key files
*.pem
*.key
id_rsa
id_rsa.pub

# Token files
*.token
*.secret
.GITHUB_TOKEN
.NPM_TOKEN
```
{% endif %}

**Best Practice:** Use environment variables or secret management services instead of hardcoding credentials.
:::

{% if page %}
## Project-Specific Patterns

### IDE and Editor Files

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

## Global vs. Local .gitignore

### Global .gitignore

Create a **global** `.gitignore` file for patterns that apply across all your projects:

```bash
# Create global gitignore
git config --global core.excludesfile ~/.gitignore_global

# Then edit ~/.gitignore_global
```

**Good for:**
- IDE-specific files
- OS-specific files (`.DS_Store`, `Thumbs.db`)
- Editor temporary files

### Local .gitignore

Place in **each repository** for project-specific patterns.

**Good for:**
- Build outputs
- Local configuration
- Project dependencies

## Team Coordination

{% endif %}

::::{grid}
:::{grid-item-card} ✅ DO
- Commit `.gitignore` to the repository
- Review `.gitignore` changes in PRs
- Keep patterns organized and commented
- Test patterns with `git check-ignore`
:::
:::{grid-item-card} ❌ DON'T
- Use `.gitignore` to hide sensitive files already committed
- Ignore source code files
- Use overly broad patterns that might hide important files
- Forget to update `.gitignore` when adding new file types
:::
::::

{% if page %}
## Common .gitignore Templates

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

## Handling Different Environments

### Development vs. Production

Some files should be ignored in development but are needed in production:

```
# Development only - ignore
.env
dev-config.json

# Production only - DON'T ignore
config/production.json
```

### Personal vs. Shared Configuration

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

## Performance Considerations

- **Pattern complexity**: Simple patterns are faster to evaluate
- **Directory depth**: Deep `.gitignore` files in many directories can slow down `git status`
- **Number of patterns**: Hundreds of patterns may impact performance
- **Solution**: Use broad patterns at the root when possible, rather than many specific patterns in subdirectories

{% endif %}
:::
