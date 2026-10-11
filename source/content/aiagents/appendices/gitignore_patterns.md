# Appendix B: .gitignore Patterns for AI Configurations

{% if build == "slides" %}
<!-- BUILDING THE SLIDES -->

## Essential .gitignore Patterns

### Environment Files
- `.env`
- `.env.*` (except .env.example)
- `! .env.example`

### Credential Files
- `*credentials*`
- `*secret*`
- `*key*`
- `*token*`

### Local Configurations
- `.vibe/config.local`
- `.claude/config.local`
- `*.local`

### Cache Directories
- `.vibe/cache/`
- `.claude/cache/`
- `node_modules/`

---

## Framework-Specific Patterns

### Vibe CLI
- `.vibe/credentials`
- `.vibe/sessions/`
- `.vibe/history/`

### Claude Code
- `.claude/credentials`
- `.claude/sessions/`

### Cursor
- `.cursor/credentials`

---

## Security Best Practices

- Test patterns with `git check-ignore`
- Review .gitignore regularly
- Add new patterns proactively
- Document patterns for team

{% else %}
<!-- BUILDING THE PAGES -->

A well-configured `.gitignore` file is your **first and most important line of defense** against accidentally committing sensitive AI configuration files to version control. This appendix provides comprehensive `.gitignore` patterns specifically tailored for AI agent configurations, organized by category and framework.

:::{admonition} Critical Reminder
:class: danger
**Always add sensitive files to .gitignore BEFORE creating them.** It's much easier to prevent a secret from being committed than to remove it from Git history after the fact.
:::

## The .gitignore File: Structure and Syntax

Before diving into specific patterns, it's important to understand how `.gitignore` files work.

### Basic Syntax

| **Pattern** | **Meaning** | **Example** |
|-------------|-------------|-------------|
| `file.txt` | Ignore specific file | `credentials.json` |
| `dir/` | Ignore directory | `node_modules/` |
| `*.ext` | Ignore all files with extension | `*.log` |
| `dir/*` | Ignore all files in directory | `logs/*` |
| `pattern/` | Ignore directory | `temp/` |
| `!pattern` | **Do not ignore** (negation) | `!.env.example` |

### Special Characters

| **Character** | **Meaning** | **Example** |
|--------------|-------------|-------------|
| `*` | Matches anything | `*.log` |
| `?` | Matches single character | `temp?` |
| `[abc]` | Matches any character in brackets | `[abc].txt` |
| `[!abc]` | Matches any character NOT in brackets | `[!abc].txt` |
| `**` | Matches directories recursively | `**/temp` |

### Example Structure

```gitignore
# Comment: This is a section header

# Environment files
.env
.env.*
! .env.example  # Exception: keep .env.example

# Logs
*.log
logs/

# Python
__pycache__/
*.py[cod]
```

### Order of Precedence

1. **Last matching rule wins** - If a pattern matches, the last matching rule (even if it's a negation) is used
2. **Negation overrides** - A negation (`!`) pattern can override a previous ignore pattern
3. **Directory separators** - Patterns with `/` only match directories, patterns without `/` match files and directories
4. **Leading `/`** - Pattern only matches at the root directory level

## Essential .gitignore Patterns for AI Configurations

These are the **minimum patterns** that every project using AI agents should have in their `.gitignore` file.

### 1. Environment Files

Environment files are the **most common source** of accidentally committed secrets. They typically contain API keys, database credentials, and other sensitive information.

```gitignore
# ==========================================
# Environment Files - CRITICAL
# ==========================================

# Primary environment file
.env

# Environment files with suffixes
.env.*

# Common variants
.env.local
.env.development
.env.staging
.env.production
.env.test
.env.ci

# Exception: Keep template/example files
!.env.example
!.env.template
!.env.dist
!.env.sample

# IDE-specific environment files
.vscode/.env
.idea/.env

# Editor-specific
.env.backup
.env.old
```

**Why these patterns?**
- `.env` and `.env.*` catch the most common environment file naming conventions
- The `!` negation ensures that example/template files **are** tracked
- Including `.env.backup` and `.env.old` prevents accidental commits of renamed environment files

### 2. Credential Files

Files that explicitly indicate they contain credentials should **always** be ignored.

```gitignore
# ==========================================
# Credential Files - CRITICAL
# ==========================================

# Generic credential patterns
*credentials*
*credentials.*

# Specific credential file names
credentials
credentials.json
credentials.yml
credentials.yaml
credentials.ini
credentials.cfg
credentials.conf

# Service-specific
.vibe/credentials
.claude/credentials
.cursor/credentials
github-credentials.json
gitlab-credentials.yml
aws-credentials
aws-credentials

# Variations
*credential*
*cred*

# Common suffixes
*.credentials
*.credential
*-credentials
*-credential
```

**Why these patterns?**
- Catches files with "credential" in any part of the name
- Includes framework-specific credential locations
- Handles common naming variations

### 3. API Keys and Secrets

Files that contain or reference API keys and secrets.

```gitignore
# ==========================================
# API Keys and Secrets - CRITICAL
# ==========================================

# Generic secret patterns
*secret*
*secret.*

# Generic key patterns
*key*
*key.*

# Generic token patterns
*token*
*token.*

# Specific file names
secrets.json
secrets.yml
secrets.yaml
secrets.ini
secrets.conf
api-keys.json
api-keys.yml
api-keys.yaml
api-key
api.keys

# Service-specific
openai-key
anthropic-key
claude-key
vibe-key
cursor-key
github-token
gitlab-token
stripe-key
stripe-keys

# Common patterns with extensions
*.secret
*.key
*.token
*-secret
*-key
*-token

# Hidden files
.secret
.key
.token
```

**Why these patterns?**
- Catches the most common naming conventions for secrets
- Includes service-specific key files
- Handles both explicit and hidden file names

### 4. Local Configuration Files

Local configuration files that may contain user-specific or sensitive settings.

```gitignore
# ==========================================
# Local Configuration Files
# ==========================================

# Framework-specific local configs
.vibe/config.local
.claude/config.local
.cursor/config.local

# Generic local patterns
*.local
*local.*
*-local
*-local.*

# Local overrides
*.override
*override.*
*-override

# Development-specific
*.dev
*dev.*
*.development
*development.*

# Testing-specific
*.test
*test.*

# IDE-specific local configs
.vscode/*.local
.vscode/settings.local.json
.idea/*.local
.idea/options/local.xml
```

**Why these patterns?**
- Prevents accidental commitment of local development configurations
- Catches common "local" and "override" naming patterns
- Includes IDE-specific local configurations

### 5. Cache Directories

AI tools often create cache directories that don't need to be version controlled.

```gitignore
# ==========================================
# Cache Directories
# ==========================================

# AI tool caches
.vibe/cache/
.claude/cache/
.cursor/cache/

# Generic cache patterns
.cache/
*cache/
*-cache/

# Specific cache files
ai-cache.json
ai-cache.db
.vibe/cache.db
.claude/cache.db

# System caches
__pycache__/
*.py[cod]
*$py.class

# Dependency caches
npm-cache/
yarn-cache/
pip-cache/
```

**Why these patterns?**
- Cache directories can be large and change frequently
- They are machine-specific and don't need to be shared
- Excluding them improves repository performance

### 6. Log Files

Log files typically contain sensitive information and should not be committed.

```gitignore
# ==========================================
# Log Files
# ==========================================

# Generic log patterns
*.log
*log.*

# Common log file names
debug.log
error.log
info.log
warning.log
trace.log
ai.log
vibe.log
claude.log
cursor.log

# Log directories
logs/
log/
logger/

# IDE-specific logs
.vscode/*.log
.idea/logs/
.idea/log/

# System logs
*.swp
*.swo
*~

# OS-specific
.DS_Store
Thumbs.db
.ehthumbs.db
```

**Why these patterns?**
- Logs may contain sensitive information (stack traces, user data, etc.)
- Logs are typically machine-specific
- Logs change frequently and don't need version control

## Framework-Specific .gitignore Patterns

Different AI frameworks and tools have their own specific files and directories that should be ignored.

### Vibe CLI

```gitignore
# ==========================================
# Vibe CLI - https://vibe-cli.com
# ==========================================

# Credentials (CRITICAL)
.vibe/credentials
.vibe/credentials.json
.vibe/credentials.yml

# Session and history
.vibe/sessions/
.vibe/history/
.vibe/session-*.json

# Local configuration
.vibe/config.local
.vibe/config.local.json

# Cache
.vibe/cache/
.vibe/cache.db
.vibe/cache.json

# Logs
.vibe/*.log
.vibe/logs/

# Temporary files
.vibe/tmp/
.vibe/temp/

# Plugins and extensions
.vibe/plugins/
.vibe/extensions/
.vibe/plugins-*.json

# Workflows
.vibe/workflows/
.vibe/workflows-*.json

# Local overrides
.vibe/overrides/
.vibe/overrides.json
```

### Claude Code

```gitignore
# ==========================================
# Claude Code - https://claude.ai
# ==========================================

# Credentials (CRITICAL)
.claude/credentials
.claude/credentials.json

# Session and history
.claude/sessions/
.claude/history/
.claude/session-*.json

# Local configuration
.claude/config.local
.claude/config.local.json

# Cache
.claude/cache/
.claude/cache.db

# Logs
.claude/*.log
.claude/logs/

# Temporary files
.claude/tmp/
.claude/temp/

# Local data
.claude/index/
.claude/index.db
```

### Cursor Editor

```gitignore
# ==========================================
# Cursor Editor - https://cursor.com
# ==========================================

# Credentials (CRITICAL)
.cursor/credentials
.cursor/credentials.json

# Session and history
.cursor/sessions/
.cursor/history/
.cursor/session-*.json

# Local configuration
.cursor/config.local
.cursor/config.local.json

# Cache
.cursor/cache/
.cursor/cache.db

# Logs
.cursor/*.log
.cursor/logs/

# Temporary files
.cursor/tmp/
.cursor/temp/

# Local storage
.cursor/storage/
.cursor/local-storage.db
```

### GitHub Copilot

```gitignore
# ==========================================
# GitHub Copilot - https://github.com/features/copilot
# ==========================================

# Copilot-specific
.github/copilot/
.github/copilot-*.json

# Copilot cache
.copilot/
.copilot/cache/

# Copilot logs
.copilot/*.log
.copilot/logs/

# Copilot configurations (if sensitive)
.copilot/config.json
```

### Amazon CodeWhisperer

```gitignore
# ==========================================
# Amazon CodeWhisperer - https://aws.amazon.com/codewhisperer
# ==========================================

# CodeWhisperer-specific
.aws/codewhisperer/
.codewhisperer/

# Credentials and configuration
.codewhisperer/credentials
.codewhisperer/config.json

# Cache
.codewhisperer/cache/

# Logs
.codewhisperer/*.log
.codewhisperer/logs/
```

### General AI Tools

```gitignore
# ==========================================
# General AI Tools
# ==========================================

# AI-specific files
ai.config.json
ai.config.yml
ai.settings
.ai/
.ai/credentials
.ai/secrets
.ai/config.local

# AI ignore patterns
.aiignore

# AI tool specific
*ai*
*-ai
*-ai.*

# Common AI tool directories
.ai/
.vibe/
.claude/
.cursor/
.copilot/
.codewhisperer/
```

## Language and Framework-Specific Patterns

### Python

```gitignore
# ==========================================
# Python - https://www.python.org
# ==========================================

# Byte-compiled / optimized
__pycache__/
*.py[cod]
*$py.class
*.pyo
*.pyc

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

# Virtual environments
venv/
ENV/
env/
.venv/

# IDE
.idea/
.vscode/
*.swp
*.swo

# Testing
.pytest_cache/
.coverage
htmlcov/
.tox/
.nox/

# Type checking
.mypy_cache/
.dmypy.json
dmypy.json

# Linting
.pylint.d/
.pylintrc
```

### Node.js / JavaScript

```gitignore
# ==========================================
# Node.js / JavaScript - https://nodejs.org
# ==========================================

# Dependencies
node_modules/

# Package managers
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Build outputs
dist/
build/
.out/
.next/

# Package lock files (optional - can be committed for reproducibility)
# package-lock.json
# yarn.lock
# pnpm-lock.yaml

# IDE
.idea/
.vscode/

# OS
.DS_Store
Thumbs.db

# Logs
logs/
*.log
npm-debug.log*
```

### TypeScript

```gitignore
# ==========================================
# TypeScript - https://www.typescriptlang.org
# ==========================================

# TypeScript cache
*.tsbuildinfo

# TypeScript definitions (can be regenerated)
*.d.ts
!src/**/*.d.ts  # Keep type definitions in src

# TypeScript build outputs
dist/
build/
.out/

# TypeScript config (optional - can be committed)
# tsconfig.json
# tsconfig.*.json
```

### Django

```gitignore
# ==========================================
# Django - https://www.djangoproject.com
# ==========================================

# Database
*.sqlite3
db.sqlite3
*.db

# Django specific
*.log
local_settings.py
settings.local.py

# Media files (optional - can be committed if small)
media/

# Static files (optional - can be committed)
staticfiles/

# Static files build
static/

# Cache
__pycache__/
*.py[cod]

# IDE
.idea/
.vscode/

# Local environment
.env
.env.*
!.env.example
```

### React

```gitignore
# ==========================================
# React - https://react.dev
# ==========================================

# Build outputs
build/
dist/
.out/

# Dependencies
node_modules/

# Logs
*.log
logs/

# IDE
.idea/
.vscode/

# Local storage
.local-storage

# Environment
.env
.env.*
!.env.example

# Cache
.cache/
.next/cache/
```

## Project-Specific Patterns

### E-Commerce Project

```gitignore
# ==========================================
# E-Commerce Project Example
# ==========================================

# Environment files
.env
.env.*
!.env.example

# Database files
*.sqlite3
db.sqlite3

# Payment processing
*stripe*
*paypal*
*payment*

# Order data (sample/test data)
*orders.csv
*customers.csv

# Product images (if stored locally)
product-images/
uploads/products/

# Cache
.cache/
*.cache

# Logs
*.log
logs/
```

### SaaS Application

```gitignore
# ==========================================
# SaaS Application Example
# ==========================================

# Environment files
.env
.env.*
!.env.example

# Database
*.sqlite3
*.db

# User data (sample/test)
*users.csv
*user-data.json

# API keys and secrets
*api-key*
*secret*
*token*

# Configuration
config/local.json
config/development.json
config/production.json

# Cache
.cache/
redis-cache/

# Logs
*.log
logs/
```

### Data Science Project

```gitignore
# ==========================================
# Data Science Project Example
# ==========================================

# Environment files
.env
.env.*
!.env.example

# Data files
*.csv
*.json
*.parquet
*.feather
data/
datasets/

# Model files
*.pkl
*.joblib
*.h5
*.pt
*.pth
models/
trained-models/

# Notebook outputs
.ipynb_checkpoints/
*.ipynb_checkpoints

# Jupyter notebooks (optional - can be committed without outputs)
*.ipynb
!notebooks/**/*.ipynb  # Keep notebooks in specific directory

# Cache
.cache/
__pycache__/

# Logs
*.log
logs/
```

## Testing Your .gitignore Patterns

It's crucial to **test** that your `.gitignore` patterns are working as expected.

### Using git check-ignore

```bash
# Check if a specific file is ignored
git check-ignore -v path/to/file

# Check if .env is ignored
git check-ignore -v .env

# Check if all environment files are ignored
git check-ignore -v .env .env.local .env.development

# Check with a non-existent file
git check-ignore -v path/to/nonexistent.file
```

**Example Output**:
```
$ git check-ignore -v .env
.gitignore:1:.env    .env
```

This shows that `.env` is ignored because of line 1 in `.gitignore`.

### Common Testing Scenarios

```bash
# Test environment files
git check-ignore -v .env .env.local .env.development

# Test credential files
git check-ignore -v credentials.json .vibe/credentials

# Test that example files are NOT ignored
git check-ignore -v .env.example
# (Should return no output, meaning it's NOT ignored)

# Test log files
git check-ignore -v *.log debug.log

# Test cache directories
git check-ignore -v .vibe/cache/ .cache/
```

### Using git status

After creating or modifying `.gitignore`, check what Git sees:

```bash
# See all ignored files
git status --ignored

# See ignored files by pattern
git status --porcelain | grep '^!!'

# See all untracked files (should not include ignored files)
git status --porcelain | grep '^??'
```

### Testing Before Creating Files

A useful technique is to **test your .gitignore patterns before creating the actual sensitive files**:

```bash
# Create a test file
 touch test.env

# Check if it's ignored
git check-ignore -v test.env

# If it's ignored, the pattern is working
# If not, update .gitignore

# Clean up
 rm test.env
```

## Common Mistakes with .gitignore

### Mistake 1: Adding .gitignore After Files Are Tracked

**Problem**: Adding a file to `.gitignore` after it's already been committed to Git doesn't remove it from the repository.

**Solution**:
```bash
# Remove the file from Git (but keep it locally)
git rm --cached path/to/file

# Or remove it completely
git rm path/to/file

# Commit the removal
git commit -m "Remove sensitive file"
```

**Prevention**: Add patterns to `.gitignore` **before** creating sensitive files.

### Mistake 2: Using Absolute Paths

**Problem**: Using absolute paths in `.gitignore` makes it non-portable across different systems.

```gitignore
# Bad: Absolute path
/home/user/project/.env

# Good: Relative path
.env
```

**Prevention**: Always use relative paths in `.gitignore`.

### Mistake 3: Not Escaping Special Characters

**Problem**: Some special characters have special meaning in `.gitignore` and need to be escaped.

```gitignore
# Bad: Brackets have special meaning
[credentials].json

# Good: Escape with backslash
\[credentials\].json

# Or just use a different pattern
*credentials*
```

**Prevention**: Escape special characters (`[`, `]`, `*`, `?`, etc.) with backslashes when you want them to be treated literally.

### Mistake 4: Forgetting to Commit .gitignore

**Problem**: `.gitignore` itself needs to be committed to Git, otherwise the ignore patterns won't apply for other team members.

**Solution**:
```bash
# Add .gitignore to Git
git add .gitignore

# Commit it
git commit -m "Update .gitignore"
```

**Prevention**: Always commit `.gitignore` after modifying it.

### Mistake 5: Not Handling Negations Correctly

**Problem**: Negation patterns (`!`) can be tricky and may not work as expected.

```gitignore
# This doesn't work as expected
*.log
!important.log

# The negation must come AFTER the ignore pattern
*.log
!important.log  # This works
```

**Prevention**: 
- Place negation patterns **after** the ignore patterns they negate
- Test negation patterns with `git check-ignore`

### Mistake 6: Overly Broad Patterns

**Problem**: Overly broad patterns can accidentally ignore files that should be tracked.

```gitignore
# Bad: Too broad - will ignore all .json files
*.json

# Good: More specific
*credentials*.json
*secret*.json
config/*.json  # Only ignore JSON in config directory
```

**Prevention**: Use the most specific pattern possible while still catching all sensitive files.

### Mistake 7: Not Including Directories

**Problem**: Forgetting the trailing `/` can lead to unexpected behavior with directories.

```gitignore
# Ignores a file named 'node_modules' but not the directory
node_modules

# Ignores the directory and all its contents
node_modules/
```

**Prevention**: Use `directory/` syntax to ignore directories and their contents.

## Best Practices for .gitignore

### 1. Start with a Good Template

Use established `.gitignore` templates as a starting point:

- **[gitignore.io](https://gitignore.io)** - Generate `.gitignore` for your tech stack
- **[GitHub's gitignore templates](https://github.com/github/gitignore)** - Official templates for many languages and frameworks
- **[Topalovic's gitignore](https://github.com/topalovic/crowdstrike-gitignore)** - Comprehensive templates

**Example**: Generate a `.gitignore` for Python + Django + Node.js:
```bash
# Using gitignore.io API
curl -sL https://www.toptal.com/developers/gitignore/api/python,django,node > .gitignore
```

### 2. Organize by Category

Group related patterns together with clear section headers:

```gitignore
# ==========================================
# Environment Files
# ==========================================
.env
.env.*
!.env.example

# ==========================================
# Credential Files
# ==========================================
*credentials*
*secret*
*key*
*token*

# ==========================================
# Logs
# ==========================================
*.log
logs/

# ==========================================
# IDE
# ==========================================
.idea/
.vscode/

# ==========================================
# Python
# ==========================================
__pycache__/
*.py[cod]
```

### 3. Use Comments Effectively

Add comments to explain **why** certain patterns are included:

```gitignore
# Environment files - contain sensitive API keys and credentials
.env
.env.*
! .env.example  # Keep template for new developers

# Credential files - never commit secrets
*credentials*
*secret*

# Logs - may contain sensitive information
*.log
logs/
```

### 4. Review Regularly

Regularly review and update your `.gitignore` file:

- When adding new file types to your project
- When integrating new tools or services
- When new team members join
- Periodically (e.g., every 3-6 months)

### 5. Document for Your Team

Add documentation about your `.gitignore` patterns in your project's documentation:

```markdown
## .gitignore Patterns

Our project uses the following `.gitignore` patterns to prevent sensitive files from being committed:

### Always Ignored
- `.env` and `.env.*` files (except `.env.example`)
- All credential files (`*credentials*`, `*secret*`, etc.)
- All log files (`*.log`)
- Local configuration files (`*.local`)

### How to Add New Patterns
1. Add the pattern to `.gitignore`
2. Test with `git check-ignore -v <file>`
3. Commit and push `.gitignore`

### Common Mistakes to Avoid
- Don't create sensitive files before adding them to `.gitignore`
- Don't use absolute paths
- Don't commit `.gitignore` without testing
```

### 6. Use Multiple .gitignore Files

For complex projects, consider using **multiple `.gitignore` files** in different directories:

```
project/
├── .gitignore          # Global ignore patterns
├── frontend/
│   └── .gitignore      # Frontend-specific patterns
├── backend/
│   └── .gitignore      # Backend-specific patterns
└── docs/
    └── .gitignore      # Documentation-specific patterns
```

**Rules for Multiple .gitignore Files**:
- Patterns in nested `.gitignore` files only apply to files in their directory or subdirectories
- Global `.gitignore` applies to the entire project
- The **last matching rule** wins, even if it's in a different file

### 7. Handle Special Cases

Some files need special handling:

**Example: Ignore everything in a directory except specific files**
```gitignore
# Ignore everything in logs/
logs/*

# But keep important.log
!logs/important.log
```

**Example: Ignore files with specific extensions in specific directories**
```gitignore
# Ignore .log files in logs/ but not elsewhere
logs/*.log

# Ignore .tmp files everywhere
tmp/
*.tmp
```

### 8. Test with Real-World Scenarios

Before finalizing your `.gitignore`, test with common scenarios:

```bash
# Test creating various sensitive files
touch .env
touch .env.local
touch credentials.json
touch config/secret.yml
touch ai-key.txt

# Check if they're all ignored
git status --ignored

# Clean up
git clean -fd --dry-run  # First check what would be removed
# If correct:
git clean -fd
```

## Complete .gitignore Example for AI Projects

Here's a comprehensive `.gitignore` file for a typical project using AI agents, combining all the patterns discussed in this appendix:

```gitignore
# ==========================================
# AI Configuration .gitignore
# ==========================================
# This file specifies intentionally untracked files to prevent
# sensitive information from being committed to version control.
# ==========================================

# ==========================================
# 1. ENVIRONMENT FILES - CRITICAL SECURITY
# ==========================================
# Environment files often contain API keys, database credentials,
# and other sensitive information that should NEVER be committed.

.env
.env.*

# Exception: Keep template files for new developers
!.env.example
!.env.template
!.env.dist
!.env.sample

# IDE-specific environment files
.vscode/.env
.idea/.env

# Local environment backups
.env.backup
.env.old
.env.bak

# ==========================================
# 2. CREDENTIAL FILES - CRITICAL SECURITY
# ==========================================
# Files that explicitly contain credentials, secrets, or keys
# should ALWAYS be ignored.

*credentials*
*credentials.*
*credential*
*credential.*

.vibe/credentials
.claude/credentials
.cursor/credentials
.copilot/credentials
github-credentials.json
gitlab-credentials.yml

# ==========================================
# 3. API KEYS AND SECRETS - CRITICAL SECURITY
# ==========================================
# Files containing or referencing API keys, tokens, and secrets.

*secret*
*secret.*
*key*
*key.*
*token*
*token.*

secrets.json
secrets.yml
secrets.yaml
secrets.ini
secrets.conf
api-keys.json
api-keys.yml
api-keys.yaml
api-key
api.keys

# Service-specific
openai-key
anthropic-key
claude-key
vibe-key
cursor-key
github-token
gitlab-token
stripe-key
stripe-keys

# ==========================================
# 4. LOCAL CONFIGURATION FILES
# ==========================================
# Local development configurations that may contain
# user-specific or sensitive settings.

# Framework-specific
.vibe/config.local
.claude/config.local
.cursor/config.local

# Generic
*.local
*local.*
*-local
*-local.*

# Overrides
*.override
*override.*
*-override

# Development-specific
*.dev
*dev.*
*.development
*development.*

# IDE-specific
.vscode/*.local
.vscode/settings.local.json
.idea/*.local
.idea/options/local.xml

# ==========================================
# 5. CACHE DIRECTORIES
# ==========================================
# Cache files and directories that don't need version control.

# AI tool caches
.vibe/cache/
.claude/cache/
.cursor/cache/
.copilot/cache/
.codewhisperer/cache/

# Generic
.cache/
*cache/
*-cache/

# Specific
.vibe/cache.db
.claude/cache.db
.cursor/cache.db
ai-cache.json
ai-cache.db

# Python
__pycache__/
*.py[cod]
*$py.class

# Node.js
npm-cache/
yarn-cache/
pip-cache/

# ==========================================
# 6. LOG FILES
# ==========================================
# Log files may contain sensitive information and are machine-specific.

# Generic
*.log
*log.*

# Common
debug.log
error.log
info.log
warning.log
trace.log
ai.log
vibe.log
claude.log
cursor.log

# Directories
logs/
log/
logger/

# IDE-specific
.vscode/*.log
.idea/logs/
.idea/log/

# System
*.swp
*.swo
*~

# ==========================================
# 7. AI TOOL SPECIFIC FILES
# ==========================================

# Vibe CLI
.vibe/credentials
.vibe/sessions/
.vibe/history/
.vibe/session-*.json
.vibe/tmp/
.vibe/temp/
.vibe/plugins/
.vibe/extensions/
.vibe/workflows/
.vibe/overrides/

# Claude Code
.claude/credentials
.claude/sessions/
.claude/history/
.claude/session-*.json
.claude/tmp/
.claude/temp/
.claude/index/
.claude/index.db

# Cursor Editor
.cursor/credentials
.cursor/sessions/
.cursor/history/
.cursor/session-*.json
.cursor/tmp/
.cursor/temp/
.cursor/storage/
.cursor/local-storage.db

# GitHub Copilot
.github/copilot/
.github/copilot-*.json
.copilot/
.copilot/cache/
.copilot/*.log

# Amazon CodeWhisperer
.aws/codewhisperer/
.codewhisperer/
.codewhisperer/credentials
.codewhisperer/config.json
.codewhisperer/cache/
.codewhisperer/*.log

# General AI
.ai/
.ai/credentials
.ai/secrets
.ai/config.local
.aiignore

# ==========================================
# 8. LANGUAGE AND FRAMEWORK SPECIFIC
# ==========================================

# Python
__pycache__/
*.py[cod]
*$py.class
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

# Virtual environments
venv/
ENV/
env/
.venv/

# Type checking
.mypy_cache/
.dmypy.json
dmypy.json

# Linting
.pylint.d/
.pylintrc

# Testing
.pytest_cache/
.coverage
htmlcov/
.tox/
.nox/

# Node.js
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Build outputs
dist/
build/
.out/
.next/

# TypeScript
*.tsbuildinfo
*.d.ts
!src/**/*.d.ts

# ==========================================
# 9. OS AND EDITOR SPECIFIC
# ==========================================

# macOS
.DS_Store
.AppleDouble
.LSOverride
._*
.DS_Store?

# Windows
Thumbs.db
.ehthumbs.db
ehthumbs_vista.db
Thumbs.db:encryptable

# Linux
*~
.nfs*

# IDE
.idea/
.vscode/
*.swp
*.swo

# Editor
.sublime-workspace
.sublime-project

# ==========================================
# 10. PROJECT SPECIFIC
# ==========================================

# Database files
*.sqlite3
*.db
*.mdb
db.sqlite3

# Local SSL certificates
ssl/
certs/

# Backup files
backups/
*.bak
*.backup

# Temporary files
tmp/
temp/
*.tmp
*.temp

# Test coverage
.coverage
.nyc_output/

# Documentation build
_docs/
_docs_html/
.dox/

# ==========================================
# END OF .gitignore
# ==========================================
```

## Summary

This appendix has provided comprehensive `.gitignore` patterns for AI configurations, organized by category and framework. The key takeaways are:

### Essential Patterns (Non-Negotiable)

Every project using AI agents **must** have these patterns in `.gitignore`:

```gitignore
# Environment files
.env
.env.*
!.env.example

# Credential files
*credentials*
*secret*
*key*
*token*

# AI tool credentials
.vibe/credentials
.claude/credentials
.cursor/credentials
```

### Framework-Specific Patterns

Add patterns for the specific AI tools you're using:

```gitignore
# Vibe CLI
.vibe/credentials
.vibe/sessions/
.vibe/cache/

# Claude Code
.claude/credentials
.claude/sessions/
.claude/cache/

# Cursor
.cursor/credentials
.cursor/sessions/
```

### Best Practices

1. ✅ **Add patterns BEFORE creating sensitive files**
2. ✅ **Test patterns with `git check-ignore -v`**
3. ✅ **Organize patterns by category with comments**
4. ✅ **Review and update .gitignore regularly**
5. ✅ **Document .gitignore patterns for your team**
6. ✅ **Use multiple .gitignore files for complex projects**
7. ✅ **Commit .gitignore to the repository**

### Remember

The `.gitignore` file is your **first line of defense** against accidentally committing sensitive information. However, it's just one layer in a comprehensive security strategy. Always combine `.gitignore` with:

- Pre-commit hooks for secret scanning
- Platform-based secret scanning (GitHub, GitLab)
- Team education on security best practices
- Regular security audits

With a well-configured `.gitignore` file and these additional measures, you can significantly reduce the risk of sensitive AI configuration information being exposed through version control.

{% endif %}
