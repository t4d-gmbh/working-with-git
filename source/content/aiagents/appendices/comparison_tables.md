# Appendix C: Comparison Tables and Decision Matrices

{% if build == "slides" %}
<!-- BUILDING THE SLIDES -->

## Organization Levels Comparison

| Aspect | Organization | User | Project |
|--------|--------------|------|---------|
| Scope | All projects | Single user | Single project |
| Sharing | Team/Org | Personal | Team |
| Version Control | Yes (org repo) | No | Yes |
| Priority | Lowest | Medium | Highest |

---

## Tracking Decision Matrix

| File Type | Track? | Reason | Alternative |
|-----------|--------|--------|-------------|
| AGENTS.md (project) | Yes | Team alignment | - |
| AGENTS.md (personal) | No | User-specific | .gitignore |
| API keys | NO | Security risk | Environment vars |
| .vibe/config (no secrets) | Yes | Shared settings | - |
| .vibe/credentials | NO | Contains secrets | .gitignore + env vars |

---

## Configuration File Classification

| Category | Sensitivity | Track? | Examples |
|----------|-------------|--------|----------|
| Context & Instructions | Low | Yes | AGENTS.md, CLAUDE.md |
| Behavioral Config | Low | Yes | .vibe/config |
| Authentication | High | NO | credentials.json |
| Access Control | Low | Yes | .aiignore |
| Performance | Low | Yes | ai.config.json |

---

## Secret Scanning Tools Comparison

| Tool | Speed | Accuracy | Custom Patterns | History Scan |
|------|-------|----------|----------------|--------------|
| TruffleHog | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Yes | Yes |
| Gitleaks | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Yes | No |
| Git-secrets | ⭐⭐⭐ | ⭐⭐⭐ | Yes | Yes |
| Detect-secrets | ⭐⭐⭐ | ⭐⭐⭐⭐ | Yes | No |

---

## Security Response Steps

1. Rotate secret **immediately**
2. Remove from Git
3. Purge from history
4. Notify affected parties
5. Monitor for usage

---

## AI Usage Guidelines

| Use Case | Appropriate? | Review Required | Documentation Required |
|----------|-------------|----------------|-------------------------|
| Code completion | Yes | Standard | Optional |
| Boilerplate generation | Yes | Standard | Optional |
| Security code | No | Senior review | Mandatory |
| Complex logic | Yes | Team review | Mandatory |

{% else %}
<!-- BUILDING THE PAGES -->

This appendix provides comprehensive comparison tables and decision matrices to help you quickly understand the relationships between different concepts and make informed decisions about AI configuration management. These tables summarize and visualize the key information presented throughout the main document.

---

## Table 1: Organization vs User vs Project Level Comparison

This table provides a detailed comparison of the three configuration levels discussed in the main document.

### Main Comparison Table

| **Aspect** | **Organization Level** | **User Level** | **Project Level** |
|-----------|----------------------|----------------|------------------|
| **Definition** | Configurations that apply across all projects in an organization | Personal settings for an individual developer's environment | Settings specific to a particular project or repository |
| **Scope** | All projects in organization | Single user's environment | Single project/repository |
| **Primary Audience** | All team members | Individual developer | Project team members |
| **Purpose** | Maintain consistency, enforce standards, share resources | Personalize AI tool behavior, reflect individual preferences | Define project-specific context, team alignment |
| **Management** | Centralized (DevOps/Infrastructure team) | Individual user responsibility | Project team responsibility |
| **Version Control** | Yes (organization repository) | No (local files only) | Yes (project repository) |
| **File Location** | `org-configs/`, shared repositories | `~/.config/`, local directories | Project root, `.ai/`, `.vibe/` |
| **Git Tracking** | ✅ Track in organization repository | ❌ Never track (with rare exceptions) | ✅ Track in project repository (if non-sensitive) |
| **Sensitivity** | Low (public/internal organizational info) | **High** (often contains secrets, API keys, credentials) | Low to Medium (depends on content) |
| **Examples** | Default configs, security policies, shared skills, compliance rules, infrastructure settings | API keys, personal preferences, local overrides, development environment configs | AGENTS.md, project settings, access rules, team agreements |
| **Inheritance Priority** | Lowest (base defaults that can be overridden) | Medium (user preferences that override organization defaults) | Highest (project-specific settings that override both) |
| **Sharing Mechanism** | Organization repository, package manager, Git submodules, symlinks | Not shared (local to user's machine) | Project repository, symlinks to shared configs |
| **Update Frequency** | Low (stable defaults that change infrequently) | Medium (personal changes as user's preferences evolve) | Medium to High (changes as project requirements evolve) |
| **Security Risk** | Low (contains non-sensitive organizational defaults) | **High** (often contains sensitive credentials and secrets) | Low to Medium (depends on whether it contains sensitive data) |
| **Backup Strategy** | Version controlled in organization repository | User's responsibility (local backups) | Version controlled in project repository |
| **Documentation** | Yes, documented in organization repository | Optional (user's personal notes) | Yes, documented in project repository |
| **Access Control** | Managed via repository permissions | Managed via file system permissions | Managed via repository permissions |
| **Typical File Count** | Few (5-20 files) | Medium (10-50 files across all tools) | Many (20-100+ files depending on project size) |
| **Dependency on Other Levels** | None (base level) | Inherits from organization level | Inherits from both organization and user levels |

### Detailed Breakdown by Category

#### Scope and Management

| **Category** | **Organization** | **User** | **Project** |
|-------------|----------------|----------|-------------|
| **Geographic Scope** | Entire organization | Single user's machines | Single project |
| **Team Scope** | All teams | Single developer | Project team |
| **Time Scope** | Long-term (organization lifespan) | Medium-term (user's tenure) | Project lifespan |
| **Management Overhead** | High (requires coordination) | Low (individual) | Medium (team coordination) |
| **Change Impact** | High (affects all projects) | Low (affects one user) | Medium (affects project team) |
| **Coordination Required** | Yes (cross-team) | No | Yes (within team) |

#### Technical Characteristics

| **Category** | **Organization** | **User** | **Project** |
|-------------|----------------|----------|-------------|
| **File Types** | JSON, YAML, Markdown | JSON, YAML, INI | Markdown, JSON, YAML |
| **Format Complexity** | High (many configurations) | Medium | Medium to High |
| **Includes Code** | Rarely | No | Sometimes (examples) |
| **Includes Secrets** | No | **Yes (often)** | No (should not) |
| **Configuration Language** | Declarative (JSON/YAML) | Declarative or imperative | Declarative or natural language |
| **Tool Support** | Requires tooling | Built-in to tools | Varies by tool |

#### Security Characteristics

| **Category** | **Organization** | **User** | **Project** |
|-------------|----------------|----------|-------------|
| **Contains Credentials** | ❌ No | ✅ **Often Yes** | ❌ No (should not) |
| **Access to Services** | Limited (organization services) | **High** (personal services) | Limited (project services) |
| **Audit Requirements** | Yes (for compliance) | No | Yes (for project security) |
| **Encryption Needed** | No | **Yes (for credentials)** | No |
| **Rotation Frequency** | Low | Medium (when credentials change) | Low |
| **Exposure Risk** | Low | **Very High** | Medium |

#### Usage Patterns

| **Category** | **Organization** | **User** | **Project** |
|-------------|----------------|----------|-------------|
| **Typical Users** | DevOps, Infrastructure, Security teams | Individual developers | All project developers |
| **Common Actions** | Update defaults, add skills, set policies | Set preferences, add credentials, customize | Add project context, configure tools, set access rules |
| **Change Triggers** | New projects, security updates, policy changes | New tools, changed preferences, new credentials | New features, team changes, tool updates |
| **Version History Importance** | High (for auditing) | Low (personal) | High (for project history) |
| **Cross-Reference** | Referenced by all projects | Referenced by user's tools | Referenced within project |

---

## Table 2: AI Configuration File Classification and Tracking Decisions

This matrix helps you quickly determine whether a specific AI configuration file should be tracked in Git based on its type and characteristics.

### Decision Matrix: Should You Track This File?

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           SHOULD YOU TRACK THIS FILE?                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Does the file contain secrets, API keys, or credentials?                      │
│      │                                                                          │
│      ├─┬ NO ┬─────────────────────────────────────────────────────────────┐ │
│      │ └─► │                                                                     │ │
│      │    │  Is the file user-specific (personal preferences, local settings)?│ │
│      │    │      │                                                                 │ │
│      │    │      ├─┬ NO ┬────────────────────────────────────────────┐ │ │
│      │    │      │ └─► │ Yes, track it! ✅                                   │ │ │
│      │    │      │     │ - Project-specific non-sensitive configuration    │ │ │
│      │    │      │     │ - Team-shared settings                            │ │ │
│      │    │      │     │ - Framework defaults (sanitized)                  │ │ │
│      │    │      │     │ - Project context and instructions                │ │ │
│      │    │      │     │                                                    │ │ │
│      │    │      └─┬ YES                                                           │ │
│      │    │        └─► No, don't track it ❌                          │ │
│      │    │            - Local preferences                         │ │
│      │    │            - Machine-specific settings                   │ │
│      │    │            - Personal overrides                          │ │ │
│      │    │                                                                         │ │
│      └─┬ YES                                                                       │ │
│        └─► NO, NEVER track it ❌❌❌                                    │
│            - API keys                                               │
│            - Database credentials                                   │
│            - Authentication tokens                                 │
│            - Any file containing secrets                           │
│            - Credential files (even if temporarily empty)       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Tracking Decision Table

| **File Type** | **Contains Secrets?** | **User-Specific?** | **Project-Specific?** | **Track in Git?** | **Reason** | **Alternative** |
|--------------|----------------------|-------------------|----------------------|-------------------|-------------|---------------|
| AGENTS.md | ❌ No | ❌ No | ✅ Yes | ✅ **Yes** | Team alignment, project context | - |
| CLAUDE.md | ❌ No | ❌ No | ✅ Yes | ✅ **Yes** | Project-specific directives | - |
| .vibe/config (no secrets) | ❌ No | ❌ No | ✅ Yes | ✅ **Yes** | Shared tool configuration | - |
| .vibe/config (with API key) | ✅ **Yes** | ❌ No | ❌ No | ❌ **NO** | Contains sensitive API key | Environment variables |
| .vibe/credentials | ✅ **Yes** | ✅ Yes | ❌ No | ❌ **NO** | Contains secrets | Secret management service |
| .claude/config | ❌ No | ❌ No | ✅ Yes | ✅ **Yes** | Project tool settings | - |
| .claude/credentials | ✅ **Yes** | ✅ Yes | ❌ No | ❌ **NO** | Contains secrets | Environment variables |
| .cursor/config | ❌ No | ❌ No | ✅ Yes | ✅ **Yes** | Project tool settings | - |
| .cursor/credentials | ✅ **Yes** | ✅ Yes | ❌ No | ❌ **NO** | Contains secrets | Secret management service |
| .env | ✅ **Yes** | ✅ Yes | ❌ No | ❌ **NO** | Contains API keys and credentials | Environment variables + .gitignore |
| .env.example | ❌ No | ❌ No | ❌ No | ✅ **Yes** | Template for new developers | - |
| credentials.json | ✅ **Yes** | ❌ No | ❌ No | ❌ **NO** | Contains credentials | Environment variables |
| api-keys.json | ✅ **Yes** | ❌ No | ❌ No | ❌ **NO** | Contains API keys | Environment variables |
| secrets.yml | ✅ **Yes** | ❌ No | ❌ No | ❌ **NO** | Contains secrets | Environment variables |
| .aiignore | ❌ No | ❌ No | ✅ Yes | ✅ **Yes** | AI access control patterns | - |
| ai.config.json | ❌ No | ❌ No | ✅ Yes | ✅ **Yes** | AI tool configuration | - |
| .github/copilot.yml | ❌ No | ❌ No | ✅ Yes | ✅ **Yes** | GitHub Copilot configuration | - |
| config/ai/defaults.yml | ❌ No | ❌ No | ❌ No | ✅ **Yes** | Organization AI defaults | Org repository |
| config/local.yml | ❌ No | ✅ Yes | ❌ No | ❌ **NO** | Local overrides | .gitignore |
| .vibe/config.local | ❌ No | ✅ Yes | ❌ No | ❌ **NO** | Local settings | .gitignore |
| .vibe/config.json | ❌ No | ❌ No | ✅ Yes | ✅ **Yes** | Shared Vibe configuration | - |
| models.json | ❌ No | ❌ No | ✅ Yes | ✅ **Yes** | AI model configurations | - |

### Classification by Category

| **Category** | **Contains Secrets?** | **Typical Sensitivity** | **Typical Scope** | **Tracking Recommendation** | **Examples** | **Location** |
|-------------|----------------------|------------------------|-------------------|-----------------------------|--------------|-------------|
| **Context & Instructions** | ❌ No | Low | Project | ✅ **Track** | AGENTS.md, CLAUDE.md, CONTEXT.md | Project root |
| **Behavioral Configuration** | ❌ No | Low | Project/Org | ✅ **Track** | .vibe/config, .claude/config | Project root or user home |
| **Authentication & Access** | ✅ **Yes** | **Critical** | User | ❌ **Never Track** | .env, credentials.json, api-keys.yml | User home or project root |
| **Access Control** | ❌ No | Low | Project | ✅ **Track** | .aiignore, .gitignore | Project root |
| **Performance & Optimization** | ❌ No | Low | Project/Org | ✅ **Track** | ai.config.json, performance.yml | Project root or org configs |
| **Shared Skills & Plugins** | ❌ No | Low | Org | ✅ **Track** (in org repo) | skills/, plugins/ | Organization repo |
| **Templates** | ❌ No | Low | Org/Project | ✅ **Track** | templates/, examples/ | Org or project repo |
| **Local Overrides** | ❌ No | Low | User | ❌ **Don't Track** | *.local, *.override | User home |

---

## Table 3: Secret Scanning Tools Comparison

This table compares popular secret scanning tools to help you choose the right one(s) for your needs.

### Comprehensive Tool Comparison

| **Tool** | **Developer** | **Language** | **License** | **Speed** | **Accuracy** | **Secret Types** | **Custom Patterns** | **History Scan** | **API Verification** | **Pre-commit Hook** | **CI/CD Integration** | **GitHub Action** | **GitLab CI** | **Ease of Use** |
|----------|-------------|-------------|------------|-----------|--------------|------------------|-------------------|------------------|---------------------|--------------------|---------------------|-------------------|----------------|------------------|
| **TruffleHog** | Truffle Security | Go | AGPL-3.0 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 700+ | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ⭐⭐⭐⭐ |
| **Gitleaks** | Zachary Rice | Go | MIT | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 100+ | ✅ Yes | ❌ No | ❌ No | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ⭐⭐⭐⭐⭐ |
| **Git-secrets** | AWS Labs | Shell | MIT | ⭐⭐⭐ | ⭐⭐⭐ | AWS + generic | ✅ Yes | ✅ Yes | ❌ No | ✅ Yes | ✅ Yes | ❌ No | ❌ No | ⭐⭐⭐ |
| **Detect-secrets** | Yelp | Python | Apache 2.0 | ⭐⭐⭐ | ⭐⭐⭐⭐ | 100+ | ✅ Yes | ❌ No | ❌ No | ✅ Yes | ✅ Yes | ❌ No | ❌ No | ⭐⭐⭐⭐ |
| **GitHub Secret Scanning** | GitHub | N/A | Proprietary | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 200+ | ❌ No | ❌ No | ✅ Yes | ❌ No | ❌ N/A | ✅ Native | ✅ Native | ⭐⭐⭐⭐⭐ |
| **GitLab Secret Detection** | GitLab | N/A | Proprietary | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Customizable | ✅ Yes | ✅ Yes | ✅ Yes | ❌ N/A | ❌ N/A | ✅ Native | ✅ Native | ⭐⭐⭐⭐ |

### Feature Comparison

| **Feature** | **TruffleHog** | **Gitleaks** | **Git-secrets** | **Detect-secrets** | **GitHub** | **GitLab** |
|-------------|----------------|--------------|-----------------|-------------------|------------|------------|
| **Open Source** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ❌ No | ❌ No |
| **Self-Hosted** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ❌ No | ❌ No |
| **Cloud Version** | ✅ Yes (Enterprise) | ❌ No | ❌ No | ❌ No | ✅ Native | ✅ Native |
| **Free for Open Source** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| **Commercial Support** | ✅ Yes | ❌ No | ❌ No | ❌ No | ✅ Yes | ✅ Yes |
| **Scan Git History** | ✅ Yes | ❌ No | ✅ Yes | ❌ No | ❌ No | ✅ Yes |
| **Verify Secrets via API** | ✅ Yes | ❌ No | ❌ No | ❌ No | ✅ Yes (partners) | ✅ Yes |
| **High Entropy Detection** | ✅ Yes | ✅ Yes | ❌ No | ✅ Yes | ✅ Yes | ✅ Yes |
| **Custom Pattern Support** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ❌ No | ✅ Yes |
| **JSON Output** | ✅ Yes | ✅ Yes | ❌ No | ✅ Yes | ✅ Yes | ✅ Yes |
| **HTML Report** | ✅ Yes | ❌ No | ❌ No | ❌ No | ❌ No | ✅ Yes |
| **Multiple Output Formats** | ✅ Yes | ✅ Yes | ❌ No | ✅ Yes | ✅ Yes | ✅ Yes |
| **Windows Support** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| **MacOS Support** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| **Linux Support** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |

### Performance Comparison

| **Metric** | **TruffleHog** | **Gitleaks** | **Git-secrets** | **Detect-secrets** |
|-----------|----------------|--------------|-----------------|-------------------|
| **Scan Speed (1000 files)** | ~5 seconds | ~2 seconds | ~10 seconds | ~8 seconds |
| **Memory Usage** | Medium | Low | Low | Medium |
| **CPU Usage** | Medium | Low | Low | Medium |
| **Startup Time** | Fast | Very Fast | Fast | Medium |
| **Indexing Overhead** | Medium | None | None | Low |
| **Scalability** | High | Very High | Medium | High |

### Detection Capabilities Comparison

| **Secret Type** | **TruffleHog** | **Gitleaks** | **Git-secrets** | **Detect-secrets** | **GitHub** | **GitLab** |
|---------------|----------------|--------------|-----------------|-------------------|------------|------------|
| **AWS Credentials** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| **GitHub Tokens** | ✅ Yes | ✅ Yes | ❌ No | ✅ Yes | ✅ Yes | ✅ Yes |
| **GitLab Tokens** | ✅ Yes | ✅ Yes | ❌ No | ✅ Yes | ✅ Yes | ✅ Yes |
| **Azure Credentials** | ✅ Yes | ✅ Yes | ❌ No | ✅ Yes | ✅ Yes | ✅ Yes |
| **Google Cloud Keys** | ✅ Yes | ✅ Yes | ❌ No | ✅ Yes | ✅ Yes | ✅ Yes |
| **Stripe API Keys** | ✅ Yes | ✅ Yes | ❌ No | ✅ Yes | ✅ Yes | ✅ Yes |
| **Slack Tokens** | ✅ Yes | ✅ Yes | ❌ No | ✅ Yes | ✅ Yes | ✅ Yes |
| **Heroku API Keys** | ✅ Yes | ✅ Yes | ❌ No | ✅ Yes | ✅ Yes | ✅ Yes |
| **SendGrid API Keys** | ✅ Yes | ✅ Yes | ❌ No | ✅ Yes | ✅ Yes | ✅ Yes |
| **Twilio API Keys** | ✅ Yes | ✅ Yes | ❌ No | ✅ Yes | ✅ Yes | ✅ Yes |
| **OpenAI API Keys** | ✅ Yes | ✅ Yes | ❌ No | ✅ Yes | ✅ Yes | ✅ Yes |
| **Anthropic API Keys** | ✅ Yes | ✅ Yes | ❌ No | ✅ Yes | ✅ Yes | ✅ Yes |
| **Generic High Entropy** | ✅ Yes | ✅ Yes | ❌ No | ✅ Yes | ❌ No | ❌ No |
| **Custom Patterns** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ❌ No | ✅ Yes |

### False Positive Comparison

| **Aspect** | **TruffleHog** | **Gitleaks** | **Git-secrets** | **Detect-secrets** |
|------------|----------------|--------------|-----------------|-------------------|
| **False Positive Rate** | Medium | Low | Low | Medium |
| **Customizable Thresholds** | ✅ Yes | ✅ Yes | ❌ No | ✅ Yes |
| **Whitelist Support** | ✅ Yes | ✅ Yes | ❌ No | ✅ Yes |
| **Baseline Support** | ✅ Yes | ❌ No | ❌ No | ✅ Yes |
| **Human Review Needed** | Sometimes | Rarely | Sometimes | Sometimes |

---

## Table 4: Configuration File Types by Framework

This table categorizes common configuration file types by AI framework.

### Framework-Specific Configuration Files

| **Framework** | **Configuration File** | **Purpose** | **Contains Secrets?** | **Track in Git?** | **Typical Location** | **Sensitivity** |
|--------------|----------------------|-------------|----------------------|-------------------|----------------------|------------------|
| **Vibe CLI** | `.vibe/config` | Main configuration | ❌ Usually No | ✅ Yes | User home or project root | Low |
| **Vibe CLI** | `.vibe/credentials` | API credentials | ✅ **Yes** | ❌ **NO** | User home | **Critical** |
| **Vibe CLI** | `.vibe/config.local` | Local overrides | ❌ Usually No | ❌ No | User home or project root | Low |
| **Vibe CLI** | `.vibe/sessions/` | Session history | ❌ No | ❌ No | User home | Low |
| **Vibe CLI** | `.vibe/cache/` | Local cache | ❌ No | ❌ No | User home | Low |
| **Vibe CLI** | `.vibe/plugins/` | Plugins | ❌ No | ✅ Yes (org) | Organization repo | Low |
| **Claude Code** | `.claude/config` | Main configuration | ❌ Usually No | ✅ Yes | User home or project root | Low |
| **Claude Code** | `.claude/credentials` | API credentials | ✅ **Yes** | ❌ **NO** | User home | **Critical** |
| **Claude Code** | `.claude/config.local` | Local overrides | ❌ Usually No | ❌ No | User home or project root | Low |
| **Claude Code** | `.claude/index/` | Embeddings index | ❌ No | ❌ No | User home | Low |
| **Cursor** | `.cursor/config` | Main configuration | ❌ Usually No | ✅ Yes | User home or project root | Low |
| **Cursor** | `.cursor/credentials` | API credentials | ✅ **Yes** | ❌ **NO** | User home | **Critical** |
| **Cursor** | `.cursor/settings.json` | Editor settings | ❌ No | ✅ Yes | User home | Low |
| **Cursor** | `.cursor/history/` | Command history | ❌ No | ❌ No | User home | Low |
| **GitHub Copilot** | `.github/copilot.yml` | Copilot settings | ❌ No | ✅ Yes | Project root | Low |
| **GitHub Copilot** | `.github/copilot-config.json` | Configuration | ❌ No | ✅ Yes | Project root | Low |
| **GitHub Copilot** | `.vscode/extensions/` | Copilot extension | ❌ No | ❌ No | User home | Low |
| **Amazon CodeWhisperer** | `.codewhisperer/config.json` | Configuration | ❌ Usually No | ✅ Yes | User home or project root | Low |
| **Amazon CodeWhisperer** | `.aws/codewhisperer/credentials` | Credentials | ✅ **Yes** | ❌ **NO** | User home | **Critical** |
| **Generic** | `AGENTS.md` | AI instructions | ❌ No | ✅ Yes | Project root | Low |
| **Generic** | `CLAUDE.md` | Claude instructions | ❌ No | ✅ Yes | Project root | Low |
| **Generic** | `.aiignore` | AI ignore patterns | ❌ No | ✅ Yes | Project root | Low |
| **Generic** | `ai.config.json` | AI configuration | ❌ No | ✅ Yes | Project root | Low |
| **Generic** | `config/ai/defaults.yml` | Org defaults | ❌ No | ✅ Yes (org repo) | Organization repo | Low |

### Framework Comparison

| **Framework** | **User Config Location** | **Project Config Location** | **Credential Location** | **Default Config Format** | **Supports Plugins** | **Supports Workflows** | **Open Source** | **Cloud-Based** |
|--------------|------------------------|---------------------------|-------------------------|----------------------------|------------------------|---------------------------|-----------------|-----------------|
| **Vibe CLI** | `~/.vibe/config` | `.vibe/config` | `.vibe/credentials` | JSON | ✅ Yes | ✅ Yes | ✅ Yes | ❌ No |
| **Claude Code** | `~/.claude/config` | `.claude/config` | `.claude/credentials` | JSON | ❌ No | ❌ No | ❌ No | ✅ Yes |
| **Cursor** | `~/.cursor/config` | `.cursor/config` | `.cursor/credentials` | JSON | ✅ Yes | ❌ No | ❌ No | ❌ No |
| **GitHub Copilot** | VS Code settings | `.github/copilot.yml` | GitHub account | YAML | ❌ No | ❌ No | ❌ No | ✅ Yes |
| **CodeWhisperer** | `~/.codewhisperer/config.json` | `.codewhisperer/config.json` | `~/.aws/credentials` | JSON | ❌ No | ❌ No | ❌ No | ✅ Yes |

---

## Table 5: Security Incident Response Matrix

This matrix provides a quick reference for responding to different types of security incidents involving AI configuration files.

### Response Priority Matrix

| **Incident Type** | **Severity** | **Response Time** | **Immediate Action** | **Next Steps** | **Stakeholders to Notify** |
|-------------------|--------------|-------------------|----------------------|----------------|-----------------------------|
| **Exposed API Key in Git** | **Critical** | Immediate (< 1 hour) | Rotate key, remove from Git | Purge from history, audit access | Security team, affected service provider, all collaborators |
| **Exposed Database Credentials** | **Critical** | Immediate (< 1 hour) | Rotate credentials, revoke access | Purge from history, reset database access | Security team, DB admin, all collaborators |
| **Exposed Admin Token** | **Critical** | Immediate (< 1 hour) | Revoke token, disable access | Purge from history, audit all access | Security team, all admin users |
| **Exposed User Credentials** | **Critical** | Immediate (< 1 hour) | Force password reset for all users | Purge from history, notify all users | Security team, all users |
| **Exposed in Public Repository** | **Critical** | Immediate (< 1 hour) | Make repository private, rotate all secrets | Purge from history, request GitHub/GitLab cleanup | Security team, Git hosting platform, all collaborators |
| **Exposed in Forked Repository** | **High** | < 4 hours | Contact fork owner, rotate secrets | Monitor for usage, purge from original | Fork owner, security team |
| **Exposed in Clone** | **High** | < 4 hours | Rotate secrets, notify team | Ask team to purge clones | All team members |
| **Sensitive File in Git (non-secret)** | **Medium** | < 24 hours | Remove file from Git | Purge from history if needed | Team lead, security team |
| **Non-sensitive File Incorrectly Ignored** | **Low** | < 1 week | Update .gitignore | Document reason for tracking | Team (for awareness) |
| **False Positive in Scanning** | **Low** | < 1 week | Investigate, add to whitelist | Update scanning patterns | Security team |

### Response Step-by-Step

| **Step** | **Action** | **Tools/Commands** | **Timeframe** | **Verification** |
|----------|------------|-------------------|---------------|------------------|
| **1. Detection** | Identify the exposed secret | GitHub/GitLab alerts, secret scanning tools, manual review | Immediate | Confirm exposure details |
| **2. Triage** | Assess severity and impact | Review secret type, access level, exposure scope | < 5 minutes | Severity classification |
| **3. Containment** | Revoke access to secret | Service provider dashboard, API management, user management | < 15 minutes | Verify access revoked |
| **4. Rotation** | Generate new secret | Service provider dashboard, credential management | < 30 minutes | Verify new secret works |
| **5. Removal** | Remove from Git | `git rm --cached`, `git filter-repo` | < 1 hour | Verify removal from Git |
| **6. Purge History** | Remove from Git history | `git filter-repo`, BFG Repo-Cleaner | < 2 hours | Verify no trace in history |
| **7. Platform Cleanup** | Request platform cleanup | GitHub/GitLab secret scanning | < 4 hours | Verify cleanup complete |
| **8. Fork/Clone Audit** | Identify affected forks/clones | GitHub/GitLab fork list, team communication | < 4 hours | List of affected repositories |
| **9. Notification** | Notify stakeholders | Email, Slack, team meeting | < 4 hours | Confirm notifications sent |
| **10. Monitoring** | Monitor for unauthorized usage | Service logs, usage dashboards, alerts | < 24 hours | Set up monitoring |
| **11. Documentation** | Document incident | Incident report, post-mortem | < 24 hours | Complete documentation |
| **12. Prevention** | Implement preventive measures | Update .gitignore, pre-commit hooks, training | < 1 week | Verify measures in place |
| **13. Review** | Post-incident review | Team meeting, process review | < 1 week | Lessons learned documented |

---

## Table 6: AI Usage Guidelines for Different Contexts

This table provides guidance on when and how to use AI agents for different development tasks.

### Task Appropriateness Matrix

| **Task Type** | **AI Appropriateness** | **Human Review Required** | **Testing Required** | **Documentation Required** | **Commit Message Attribution** | **Recommended Tools** |
|--------------|------------------------|---------------------------|---------------------|----------------------------|--------------------------------|--------------------------|
| **Code Completion** | ✅ High | ❌ No (if simple) | ❌ No | ❌ No | ❌ No | Copilot, Vibe, Claude |
| **Function Implementation** | ✅ High | ✅ Yes (if complex) | ✅ Yes | ❌ No | ✅ Yes | Copilot, Vibe, Claude |
| **Class Implementation** | ✅ High | ✅ Yes | ✅ Yes | ❌ No | ✅ Yes | Copilot, Vibe, Claude |
| **Module Implementation** | ✅ Medium | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | Vibe, Claude |
| **API Endpoint** | ✅ Medium | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | Copilot, Vibe, Claude |
| **Database Model** | ✅ Medium | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | Vibe, Claude |
| **Migration** | ⚠️ Caution | ✅ Yes (senior) | ✅ Yes | ✅ Yes | ✅ Yes | Vibe (with caution) |
| **Settings/Configuration** | ⚠️ Caution | ✅ Yes (senior) | ✅ Yes | ✅ Yes | ✅ Yes | Manual (usually) |
| **Security Code** | ❌ No | ✅ Yes (security team) | ✅ Yes (extensive) | ✅ Yes | ✅ Yes | Manual |
| **Cryptographic Code** | ❌ No | ✅ Yes (security team) | ✅ Yes (extensive) | ✅ Yes | ✅ Yes | Manual |
| **Payment Processing** | ❌ No | ✅ Yes (senior + security) | ✅ Yes (extensive) | ✅ Yes | ✅ Yes | Manual |
| **Authentication** | ❌ No | ✅ Yes (security team) | ✅ Yes (extensive) | ✅ Yes | ✅ Yes | Manual |
| **Authorization** | ❌ No | ✅ Yes (security team) | ✅ Yes (extensive) | ✅ Yes | ✅ Yes | Manual |
| **Bug Fix** | ✅ Medium | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | Copilot, Vibe, Claude |
| **Refactoring** | ✅ Medium | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | Vibe, Claude |
| **Code Review Comments** | ✅ High | ❌ No | ❌ No | ❌ No | ❌ No | Copilot, Vibe |
| **Documentation** | ✅ High | ✅ Yes (for accuracy) | ❌ No | ✅ Yes | ✅ Yes | Copilot, Vibe, Claude |
| **Tests** | ✅ High | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | Copilot, Vibe, Claude |
| **Comments** | ✅ High | ❌ No | ❌ No | ❌ No | ❌ No | Copilot, Vibe, Claude |
| **Regular Expressions** | ✅ High | ❌ No (if simple) | ❌ No | ❌ No | ❌ No | Copilot, Vibe |
| **Query Optimization** | ✅ Medium | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | Vibe, Claude |
| **Algorithm Implementation** | ⚠️ Caution | ✅ Yes (senior) | ✅ Yes | ✅ Yes | ✅ Yes | Manual (with AI assist) |
| **System Design** | ❌ No | ✅ Yes (team) | ❌ No | ✅ Yes | ✅ Yes | Manual |
| **Architecture Decisions** | ❌ No | ✅ Yes (team) | ❌ No | ✅ Yes | ✅ Yes | Manual |
| **Dependency Management** | ⚠️ Caution | ✅ Yes | ❌ No | ✅ Yes | ✅ Yes | Manual (with AI suggestions) |
| **Build Configuration** | ✅ Medium | ✅ Yes | ❌ No | ✅ Yes | ✅ Yes | Manual (with AI assist) |
| **Deployment Scripts** | ❌ No | ✅ Yes (senior) | ✅ Yes | ✅ Yes | ✅ Yes | Manual |
| **CI/CD Configuration** | ❌ No | ✅ Yes (senior) | ✅ Yes | ✅ Yes | ✅ Yes | Manual |
| **Prototyping** | ✅ High | ❌ No | ❌ No | ❌ No | ✅ Yes (optional) | Copilot, Vibe, Claude |
| **Proof of Concept** | ✅ High | ❌ No (if disposable) | ❌ No | ❌ No | ✅ Yes (optional) | Copilot, Vibe, Claude |
| **Research/Spike** | ✅ High | ❌ No (if disposable) | ❌ No | ✅ Yes | ✅ Yes (optional) | Copilot, Vibe, Claude |

### Review Level Definitions

| **Review Level** | **Description** | **Who Should Review** | **When to Use** |
|----------------|-----------------|------------------------|------------------|
| **No Review** | AI output can be used without human review | N/A | Simple code completion, minor changes |
| **Self Review** | Developer reviews their own AI-generated code | Self | Small functions, simple changes |
| **Standard Review** | Normal code review process | Peer | Most AI-generated code |
| **Senior Review** | Review by senior developer or team lead | Senior developer | Complex logic, medium-risk changes |
| **Security Review** | Review by security team | Security team | Security-critical code, high-risk changes |
| **Team Review** | Review by entire team or designated group | Team | System design, architecture decisions |

---

## Table 7: .gitignore Pattern Effectiveness

This table shows the effectiveness of different `.gitignore` pattern types for preventing accidental commits of sensitive files.

### Pattern Effectiveness Matrix

| **Pattern Type** | **Effectiveness** | **Performance** | **Maintainability** | **Flexibility** | **False Positives** | **False Negatives** | **Best For** |
|-----------------|-------------------|----------------|-------------------|---------------|------------------|------------------|-------------|
| **Exact Filename** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ | Low | Low | Specific known files |
| **Wildcard Extension** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | Medium | Medium | All files of a type |
| **Directory** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | Low | Low | Entire directories |
| **Wildcard Path** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Medium | Medium | Files matching pattern |
| **Negation** | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | Medium | Medium | Exceptions to rules |
| **Double Asterisk** | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Low | Medium | Recursive directory matching |
| **Character Class** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | Medium | Medium | Specific character sets |
| **Regex Pattern** | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | Low | Low | Complex matching needs |

### Pattern Examples and Use Cases

| **Use Case** | **Recommended Pattern** | **Effectiveness** | **Performance** | **Example** |
|------------|------------------------|-------------------|----------------|-------------|
| **Environment files** | Exact + wildcard | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | `.env`, `.env.*`, `!.env.example` |
| **Credential files** | Wildcard | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | `*credentials*`, `*secret*`, `*key*`, `*token*` |
| **AI tool credentials** | Exact path | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | `.vibe/credentials`, `.claude/credentials` |
| **Log files** | Wildcard extension | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | `*.log` |
| **Cache directories** | Directory | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | `.cache/`, `.vibe/cache/` |
| **IDE files** | Directory | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | `.idea/`, `.vscode/` |
| **Python cache** | Directory + wildcard | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | `__pycache__/`, `*.py[cod]` |
| **Node modules** | Directory | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | `node_modules/` |
| **OS files** | Exact + wildcard | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | `.DS_Store`, `Thumbs.db`, `*~` |
| **Temporary files** | Wildcard | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | `*.tmp`, `*.temp`, `tmp/` |
| **Backup files** | Wildcard | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | `*.bak`, `*.backup`, `*-backup` |
| **Local overrides** | Wildcard | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | `*.local`, `*.override`, `*.dev` |

---

## Table 8: Configuration Inheritance and Override Rules

This table explains how configurations at different levels interact and override each other.

### Inheritance Hierarchy

```
┌─────────────────────────────────────────────────────────────────┐
│                    INHERITANCE HIERARCHY                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Organization Level (Base Defaults)                               │
│      │                                                              │
│      ▼                                                              │
│  ┌─────────────────────────────┐                                   │
│  │ User Level (Personal         │                                   │
│  │ Overrides)                   │                                   │
│  └──────────┬──────────────────┘                                   │
│              │                                                     │
│              ▼                                                     │
│  ┌─────────────────────────────┐                                   │
│  │ Project Level (Project-       │                                   │
│  │ Specific Overrides)          │                                   │
│  └─────────────────────────────┘                                   │
│                                                                     │
│  Final Effective Configuration =                                  │
│  Project overrides + User overrides + Organization defaults       │
│                                                                     │
└─────────────────────────────────────────────────────────────────┘
```

### Override Rules Matrix

| **Setting Source** | **Overrides** | **Can Be Overridden By** | **Priority** | **Example** |
|-------------------|---------------|-------------------------|--------------|-------------|
| Organization Level | Organization defaults | User Level, Project Level | Lowest (1) | `org-configs/ai/defaults.yml` |
| User Level | Organization defaults, User defaults | Project Level | Medium (2) | `~/.vibe/config` |
| Project Level | Organization defaults, User defaults, Project defaults | None | Highest (3) | `.vibe/project.config` |
| Environment Variables | All other settings | None | Highest (4) | `OPENAI_API_KEY` |
| Command Line Arguments | All other settings | None | Highest (4) | `--model gpt-4` |

### Inheritance Examples

| **Scenario** | **Organization Config** | **User Config** | **Project Config** | **Final Effective Config** | **Explanation** |
|-------------|------------------------|-----------------|-------------------|--------------------------------|-----------------|
| **Model Selection** | `model: gpt-4` | `model: gpt-4-32k` | (not set) | `model: gpt-4-32k` | User override takes precedence |
| **Timeout** | `timeout: 300` | (not set) | `timeout: 600` | `timeout: 600` | Project override takes precedence |
| **Max Tokens** | `max_tokens: 4000` | (not set) | (not set) | `max_tokens: 4000` | Organization default used |
| **Plug-ins** | `plugins: [a, b]` | `plugins: [c, d]` | `plugins: [e, f]` | `plugins: [e, f, c, d, a, b]` | Project + User + Org (depending on merge strategy) |
| **API Key** | (not set) | `api_key: user_key` | `api_key: project_key` | `api_key: project_key` | Project override (but both should use env vars!) |
| **Include Patterns** | `include: [src/]` | `include: [src/, tests/]` | `include: [src/, docs/]` | `include: [src/, docs/, tests/]` | All patterns combined |
| **Exclude Patterns** | `exclude: [node_modules/]` | `exclude: [.env*]` | `exclude: [dist/]` | `exclude: [node_modules/, .env*, dist/]` | All patterns combined |

### Override Behavior by Configuration Type

| **Configuration Type** | **Merge Strategy** | **Override Behavior** | **Example** |
|------------------------|--------------------|------------------------|-------------|
| **Simple Values** | Replace | Last value wins | `model: gpt-4` → `model: gpt-4-32k` |
| **Arrays/Lists** | Append | All values combined | `plugins: [a]` + `plugins: [b]` → `[a, b]` |
| **Objects/Dicts** | Deep Merge | Properties merged, conflicts resolved by level | `{a: 1, b: 2}` + `{b: 3, c: 4}` → `{a: 1, b: 3, c: 4}` |
| **Boolean** | Replace | Last value wins | `debug: true` → `debug: false` |
| **Null/Undefined** | Inherit | Falls back to next level | (not set) → (org default) |

### Level-Specific Characteristics

| **Level** | **Typical Settings** | **Override Capability** | **Access Scope** | **Change Frequency** | **Version Control** |
|-----------|---------------------|-----------------------|-----------------|----------------------|----------------------|
| **Organization** | Defaults, policies, shared resources | Can be overridden by User or Project | All projects | Low | Yes (org repo) |
| **User** | Preferences, local settings, credentials | Can be overridden by Project | Single user | Medium | No (local) |
| **Project** | Project-specific, team agreements | Cannot be overridden (highest priority) | Single project | Medium-High | Yes (project repo) |
| **Environment** | Machine-specific, secrets | Cannot be overridden (highest priority) | Single machine | Low-Medium | No (env vars/secret manager) |

---

## Summary

This appendix has provided comprehensive comparison tables and decision matrices covering:

1. **Organization vs User vs Project Level Comparison** - Detailed breakdown of the three configuration levels
2. **Configuration File Classification and Tracking Decisions** - Decision matrix for whether to track specific file types
3. **Secret Scanning Tools Comparison** - Comprehensive comparison of popular secret scanning tools
4. **Security Incident Response Matrix** - Quick reference for responding to security incidents
5. **AI Usage Guidelines** - Appropriateness matrix for different development tasks
6. **.gitignore Pattern Effectiveness** - Effectiveness of different pattern types
7. **Configuration Inheritance and Override Rules** - How configurations interact across levels

These tables serve as **quick reference guides** that you can consult when making decisions about AI configuration management. They summarize the key information from the main document in an easily digestible format, helping you quickly find answers to common questions and scenarios.

**How to Use These Tables**:

- **Quick Decision Making**: Use the matrices to quickly determine appropriate actions
- **Reference During Implementation**: Consult the tables while setting up configurations
- **Team Training**: Use as training materials for new team members
- **Process Documentation**: Include relevant tables in your team's documentation
- **Incident Response**: Refer to the security matrix during incident response

**Remember**: While these tables provide comprehensive guidance, always consider your specific context, requirements, and risk tolerance when making final decisions.

{% endif %}
