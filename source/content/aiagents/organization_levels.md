# Multi-Level Configuration Organization

{% if build == "slides" %}
<!-- BUILDING THE SLIDES -->

## The Three Levels of Configuration

### Organization/Server Level
- Shared across all projects
- Default configurations
- Security policies

### User Level
- Personal preferences
- Machine-specific settings
- Local overrides

### Project Level
- Project-specific settings
- Team agreements
- Build configurations

---

## Cross-Project Strategies

- Shared configuration repository
- Git submodules
- Package managers
- Symlinks and templates
- Configuration inheritance

---

## Key Question

What belongs at each level?

---

## Comparison: Organization vs User vs Project

| Aspect | Organization | User | Project |
|--------|--------------|------|---------|
| Scope | All projects | Single user | Single project |
| Sharing | Team/Org | Personal | Team |
| Examples | Defaults, policies | API keys, prefs | AGENTS.md, settings |
| Version Control | Yes (org repo) | No | Yes |
| Priority | Lowest | Medium | Highest |

{% else %}
<!-- BUILDING THE PAGES -->

When managing AI agent configurations across multiple projects and team members, a hierarchical approach provides clarity, consistency, and maintainability. AI configuration files can belong at different levels: **organization/server-level**, **user-level**, or **project-level**. Understanding the distinctions between these levels and implementing appropriate strategies for each is crucial for effective configuration management.

## The Three Levels Explained

### 1. Organization/Server Level

Organization-level configurations are settings, policies, and defaults that apply **across all projects within an organization**. These configurations ensure consistency, enforce standards, and provide shared resources for all team members.

**Characteristics**:

- **Scope**: All projects in the organization
- **Audience**: All team members
- **Purpose**: Maintain consistency, enforce standards, share resources
- **Management**: Centralized, typically by DevOps or infrastructure team
- **Version Control**: Stored in a dedicated organization repository

**What Belongs at Organization Level**:

#### Default Configurations
Organization-level defaults provide sensible starting points for new projects, ensuring that all teams begin with consistent settings.

**Examples**:

- **Default AI Model Preferences**: Standard models approved for organizational use
- **Default Coding Standards**: Organization-wide code style guidelines
- **Default Security Policies**: Baseline security requirements for all projects
- **Default Tool Configurations**: Standard settings for commonly used AI tools

**Implementation**:

{% raw %}
```yaml
# Organization-level defaults (theoretical example)
# Stored in: org-configs/ai/defaults.yml

defaults:
  ai:
    model: "{{ model | default('gpt-4') }}"
    timeout: {{ timeout | default(300) }}
    max_tokens: 4000
    
  coding:
    language: "python"
    style_guide: "pep8"
    linting: "strict"
    
  security:
    scan_enabled: true
    secret_detection: "high"
    audit_logging: true
```
{% endraw %}

#### Shared Skills and Plugins
Skills, plugins, and extensions that are used across multiple projects can be managed at the organization level to avoid duplication and ensure consistency.

**Examples**:

- **Code Review Skills**: Standard code review checklists and patterns
- **Documentation Skills**: Organization-specific documentation templates
- **Testing Skills**: Standard testing approaches and frameworks
- **Deployment Skills**: Common deployment patterns and configurations

**Implementation Strategies**:

1. **Central Repository**: Store shared skills in a dedicated repository
   ```
   org-skill-repo/
   ├── code-review/
   │   ├── skills.md
   │   └── templates/
   ├── documentation/
   │   └── skills.md
   └── testing/
       └── skills.md
   ```

2. **Package Management**: Publish skills as packages (npm, pip, etc.)
   ```bash
   # Install organization skills
   pip install org-ai-skills
   # or
   npm install @org/ai-skills
   ```

3. **Git Submodules**: Include shared skills as submodules
   ```bash
   git submodule add https://github.com/org/ai-skills.git skills
   ```

4. **Symlinks**: Create symbolic links to shared configurations
   ```bash
   ln -s /path/to/org/skills ./skills
   ```

#### Security Policies
Organization-wide security policies ensure that all projects meet minimum security requirements and follow best practices.

**Examples**:

- **Allowed AI Services**: List of approved AI providers and models
- **Secret Scanning Requirements**: Mandatory secret scanning for all repositories
- **Access Controls**: Who can use AI tools and with what permissions
- **Audit Requirements**: Logging and monitoring requirements for AI usage
- **Data Handling Policies**: How sensitive data should be handled by AI tools

**Implementation**:

```yaml
# Organization security policy (theoretical example)
# Stored in: org-configs/security/ai-policy.yml

security:
  ai:
    allowed_services:
      - "github-copilot"
      - "claude-code"
      - "vibe-cli"
    
    blocked_actions:
      - "execute_code"
      - "network_access"
      - "file_deletion"
    
    secret_scanning:
      required: true
      tools: ["gitleaks", "trufflehog"]
      
    audit:
      log_usage: true
      retention_days: 365
      review_required: true
```

#### Compliance and Governance
Organization-level configurations often include compliance requirements, licensing restrictions, and governance policies.

**Examples**:

- **License Compliance**: Approved licenses for AI-generated code
- **Data Privacy**: Compliance with GDPR, HIPAA, etc.
- **Ethical Guidelines**: Organization's AI usage principles
- **Cost Controls**: Budget limits and usage monitoring

#### Infrastructure Configurations
Shared infrastructure configurations ensure that AI tools can access necessary resources across all projects.

**Examples**:

- **API Gateway Configurations**: Endpoints for accessing AI services
- **Proxy Settings**: Network configurations for AI tool access
- **Rate Limiting**: Usage limits and throttling settings

### When to Use Organization-Level Configurations

Use organization-level configurations when:

✅ **Multiple projects** share the same configuration or requirements
✅ **Consistency** across the organization is critical
✅ **Centralized management** reduces maintenance burden
✅ **Security policies** must be enforced uniformly
✅ **Shared resources** can be efficiently distributed

Avoid organization-level configurations when:

❌ **Project-specific** requirements deviate significantly
❌ **Flexibility** is more important than consistency
❌ **Overhead** of centralized management outweighs benefits

### 2. User Level

User-level configurations are **personal settings** that apply to an individual developer's environment. These configurations reflect personal preferences, local settings, and individual workflows.

**Characteristics**:

- **Scope**: Single user's environment
- **Audience**: Individual developer
- **Purpose**: Personalize AI tool behavior, reflect individual preferences
- **Management**: Individual user responsibility
- **Version Control**: Typically **not tracked** in Git

**What Belongs at User Level**:

#### Personal Preferences
Individual preferences for how AI tools should behave in the user's environment.

**Examples**:

- **Model Preferences**: Preferred AI models for different tasks
- **Theme and Appearance**: Color schemes, font sizes, UI preferences
- **Keybindings**: Custom keyboard shortcuts
- **Output Formatting**: Preferred formatting for AI-generated content
- **Language Preferences**: Default language for responses

**Typical File Locations**:

```
~/.vibe/config          # Vibe CLI user configuration
~/.claude/config        # Claude Code user configuration
~/.cursor/config        # Cursor editor user configuration
~/.config/ai-tool/config # Generic AI tool configuration
```

**Implementation Example** (theoretical):

```yaml
# User-level configuration (theoretical example)
# Stored in: ~/.vibe/config

user:
  name: "Jane Developer"
  email: "jane@example.com"
  
preferences:
  model: "gpt-4"
  theme: "dark"
  font_size: 14
  
keybindings:
  accept_suggestion: "Ctrl+Enter"
  reject_suggestion: "Ctrl+["
  
output:
  format: "markdown"
  max_length: 2000
  language: "en-US"
```

#### Local Environment Settings
Settings specific to the user's local development environment.

**Examples**:

- **API Keys**: Personal API keys for AI services
- **Endpoint URLs**: Local or development API endpoints
- **Proxy Configurations**: Local network proxy settings
- **Cache Directories**: Local cache locations
- **Log Levels**: Verbosity of logging for debugging

**Typical File Locations**:

```
.env                    # Local environment variables
.env.local              # Local-specific environment
.vibe/credentials       # Vibe API credentials
.claude/credentials     # Claude API credentials
```

**Security Warning**:

:::{admonition} Critical Security Note
:class: danger
**User-level configuration files often contain sensitive information like API keys and credentials.** These files should **never** be committed to Git. Always add them to your `.gitignore` file and use secure alternatives like environment variables or secret management services.
:::

#### Local Overrides
User-specific modifications to project configurations that override default settings.

**Examples**:

- **Custom Paths**: Local paths to tools or resources
- **Debug Settings**: Enhanced logging for local debugging
- **Experimental Features**: Local enablement of experimental AI features
- **Personal Templates**: Custom templates for AI-generated content

**Implementation**:

```yaml
# Local override configuration (theoretical example)
# Stored in: .vibe/config.local (in .gitignore)

# Override organization defaults for local development
overrides:
  model: "gpt-4-32k"  # Use larger model locally
  timeout: 600       # Longer timeout for complex tasks
  
local:
  cache_dir: "/tmp/vibe-cache"
  log_level: "debug"
  experimental: true
```

### When to Use User-Level Configurations

Use user-level configurations when:

✅ **Personal preferences** should not affect other team members
✅ **Local environment** settings are machine-specific
✅ **Sensitive information** (API keys, credentials) must be kept private
✅ **Individual workflows** differ from team standards

Always use user-level configurations when:

✅ **API keys or credentials** are involved
✅ **Local paths or resources** are referenced
✅ **Personal debugging** settings are needed

### 3. Project Level

Project-level configurations are **settings specific to a particular project or repository**. These configurations define how AI tools should behave within the context of that specific codebase.

**Characteristics**:

- **Scope**: Single project or repository
- **Audience**: All team members working on the project
- **Purpose**: Define project-specific AI tool behavior and requirements
- **Management**: Project team responsibility
- **Version Control**: Typically **tracked** in the project repository

**What Belongs at Project Level**:

#### Project Instructions and Context
Files that provide AI agents with project-specific context, instructions, and guidelines.

**Examples**:

- **AGENTS.md**: Comprehensive project instructions for AI agents
- **CLAUDE.md**: Project-specific Claude directives
- **CONTEXT.md**: General project context for AI tools
- **PROMPTS.md**: Standard prompts for common project tasks

#### Project-Specific Settings
Configurations that define how AI tools should behave within the specific project context.

**Examples**:

- **File Inclusion/Exclusion**: Which files AI tools should access
- **Model Parameters**: Project-specific model settings
- **Tool Availability**: Which AI tools and features are enabled
- **Output Directories**: Where AI-generated content should be saved

#### Access Control Rules
Rules defining what AI agents can and cannot access within the project.

**Examples**:

- **Inclusion Patterns**: Files and directories AI tools should access
- **Exclusion Patterns**: Files and directories AI tools should ignore
- **Permission Levels**: Read-only vs. read-write access
- **Command Restrictions**: Which commands AI tools can execute

#### Team Agreements and Conventions
Configurations that encode team agreements about how AI tools should be used in the project.

**Examples**:

- **Code Review Standards**: What AI tools should check during code review
- **Testing Requirements**: Minimum test coverage for AI-generated code
- **Documentation Standards**: How AI-generated documentation should be formatted
- **Merge Strategies**: How AI tools should handle merge conflicts

**Implementation**:

```yaml
# Team agreements for AI usage (theoretical example)
# Stored in: .ai/team-agreements.yml

code_review:
  check_list:
    - "Type hints for all functions"
    - "Docstrings for public methods"
    - "Error handling for edge cases"
    - "No hardcoded credentials"
  
testing:
  minimum_coverage: 80
  require_tests: true
  frameworks: ["pytest", "jest"]
  
documentation:
  format: "markdown"
  require_examples: true
  max_length: 2000
  
merge:
  strategy: "rebase"
  conflict_resolution: "manual"
```

### When to Use Project-Level Configurations

Use project-level configurations when:

✅ **Project-specific** settings are needed
✅ **Team alignment** is important
✅ **Shared context** benefits all team members
✅ **Reproducibility** across environments is required

Avoid project-level configurations when:

❌ **User-specific** preferences are involved (use user-level instead)
❌ **Sensitive information** is included (use environment variables)
❌ **Cross-project** sharing is needed (use organization-level instead)

## Comparison Table: Organization vs User vs Project Level

The following table provides a comprehensive comparison of the three configuration levels:

| **Aspect** | **Organization Level** | **User Level** | **Project Level** |
|-----------|----------------------|----------------|------------------|
| **Scope** | All projects in organization | Single user's environment | Single project/repository |
| **Audience** | All team members | Individual developer | Project team members |
| **Primary Purpose** | Consistency, standards, shared resources | Personalization, local settings | Project-specific context, team alignment |
| **Management** | Centralized (DevOps/Infrastructure) | Individual user | Project team |
| **Version Control** | Yes (organization repo) | No (local files) | Yes (project repo) |
| **Sensitivity** | Low (public/internal info) | **High** (often contains secrets) | Low to Medium |
| **Examples** | Default configs, security policies, shared skills | API keys, personal preferences, local overrides | AGENTS.md, project settings, access rules |
| **File Locations** | `org-configs/`, shared repos | `~/.config/`, local directories | Project root, `.ai/`, `.vibe/` |
| **Git Tracking** | ✅ Track in org repo | ❌ Never track | ✅ Track in project repo (if non-sensitive) |
| **Inheritance Priority** | Lowest (base defaults) | Medium (user overrides) | Highest (project-specific) |
| **Sharing Mechanism** | Org repo, package manager, submodules | Not shared | Project repo, symlinks |
| **Update Frequency** | Low (stable defaults) | Medium (personal changes) | Medium to High (project evolution) |
| **Security Risk** | Low | **High** | Low to Medium |
| **Backup Strategy** | Org repo version control | User responsibility | Project repo version control |
| **Documentation** | Yes, in org repo | Optional | Yes, in project repo |

## Configuration Inheritance and Override

One of the most powerful aspects of a multi-level configuration system is **inheritance** - the ability for configurations at different levels to build upon and override each other.

### Inheritance Hierarchy

```
Organization Level (Base)
    ↓ Inherits from
User Level (Overrides)
    ↓ Inherits from
Project Level (Most Specific)
```

### How Inheritance Works

1. **Organization level** provides base defaults that apply to all projects
2. **User level** can override organization defaults for personal preferences
3. **Project level** can override both organization and user defaults for project-specific needs

**Example Inheritance Chain**:

```yaml
# Organization default (org-configs/ai/defaults.yml)
settings:
  model: "gpt-4"
  timeout: 300
  max_tokens: 4000

# User override (~/.vibe/config)
settings:
  model: "gpt-4-32k"  # Override organization default
  timeout: 600      # Override organization default
  # max_tokens inherits from org (4000)

# Project override (.vibe/project.config)
settings:
  model: "claude-3"  # Override both org and user
  # timeout inherits from user (600)
  # max_tokens inherits from org (4000)

# Final effective settings for this project:
# model: "claude-3" (project override)
# timeout: 600 (user override)
# max_tokens: 4000 (organization default)
```

### Override Rules

1. **Project level** overrides both organization and user levels
2. **User level** overrides organization level but not project level
3. **Organization level** provides defaults when not specified elsewhere
4. **Explicit settings** always override inherited settings
5. **Environment variables** can override any configuration (for secrets)

## Managing Cross-Project Configurations

When the same configuration is needed across multiple projects, several strategies can be employed:

### Strategy 1: Organization Repository with Submodules

**Approach**: Store shared configurations in an organization repository and include them as Git submodules in each project.

**Implementation**:

```bash
# In organization repository
git clone https://github.com/org/ai-configs.git
cd ai-configs
# Add shared configurations

# In each project
git submodule add https://github.com/org/ai-configs.git .ai/shared
```

**Pros**:
- Centralized management
- Version controlled
- Easy updates across projects

**Cons**:
- Git submodule complexity
- Learning curve for team members
- Merge conflicts possible

### Strategy 2: Package Management

**Approach**: Publish shared configurations as packages (npm, pip, etc.) that can be installed in each project.

**Implementation**:

```bash
# Publish organization package
# (package.json for npm, setup.py for pip)

# In each project
npm install @org/ai-configs
# or
pip install org-ai-configs
```

**Pros**:
- Familiar package management workflow
- Versioned releases
- Dependency management

**Cons**:
- Requires package publishing infrastructure
- May include unnecessary files
- Version compatibility issues

### Strategy 3: Symlinks to Shared Directory

**Approach**: Create a shared directory on each developer's machine and symlink to it from projects.

**Implementation**:

```bash
# Setup shared directory
mkdir -p ~/ai-configs/shared
cd ~/ai-configs/shared
# Add shared configurations

# In each project
ln -s ~/ai-configs/shared .ai/shared
```

**Pros**:
- Simple to implement
- No version control overhead
- Immediate updates across projects

**Cons**:
- Machine-specific (not portable)
- No version history
- Risk of breaking changes

### Strategy 4: Configuration Template System

**Approach**: Use a templating system (Jinja, Handlebars, etc.) to generate project-specific configurations from shared templates.

**Implementation**:

{% raw %}
```
# Template file (org-configs/templates/ai-config.tmpl)
{
  "model": "{{ model | default('gpt-4') }}",
  "timeout": {{ timeout | default(300) }},
  "project_specific": {
    {% for key, value in project.items() %}
    "{{ key }}": "{{ value }}",
    {% endfor %}
  }
}

# Generate project config
templateRender ai-config.tmpl -o project.config
```
{% endraw %}

**Pros**:
- Highly flexible
- Can include project-specific values
- Maintainable templates

**Cons**:
- Requires templating knowledge
- Additional build step
- Template complexity

### Strategy 5: Git Hooks for Synchronization

**Approach**: Use Git hooks to automatically synchronize configurations when projects are cloned or updated.

**Implementation**:

```bash
# In .git/hooks/post-checkout
#!/bin/sh
# Sync AI configs from organization repo
rsync -av user@org-server:/path/to/ai-configs/ .ai/shared/
```

**Pros**:
- Automatic synchronization
- No manual steps required

**Cons**:
- Requires server access
- Security implications
- Complex to maintain

## Best Practices for Multi-Level Configuration

### 1. Establish Clear Conventions

- Define which level (organization/user/project) each type of configuration belongs to
- Document conventions in team onboarding materials
- Use consistent file naming and locations

### 2. Use Configuration Validation

- Validate configurations at all levels
- Check for conflicts between levels
- Warn about deprecated settings
- Verify required settings are present

### 3. Implement Change Management

- Version control all shared configurations
- Document changes in changelogs
- Communicate updates to affected teams
- Provide migration guides for breaking changes

### 4. Provide Clear Documentation

- Document all configuration options
- Include examples for each level
- Explain inheritance and override rules
- Provide troubleshooting guides

### 5. Monitor and Audit

- Regularly audit configurations for sensitive data
- Monitor for configuration drift across projects
- Track configuration usage and adoption
- Review configurations during security audits

## Summary

Effective management of AI agent configurations requires understanding the **three levels of configuration**: organization, user, and project. Each level serves distinct purposes and has different characteristics, advantages, and considerations.

**Organization Level**: For shared defaults, security policies, and resources that apply across all projects. **Track in organization repositories.**

**User Level**: For personal preferences, local settings, and sensitive credentials. **Never track in Git** (with rare exceptions for non-sensitive personal defaults).

**Project Level**: For project-specific context, team agreements, and settings. **Track in project repositories** (if non-sensitive).

By implementing a clear multi-level configuration strategy with appropriate inheritance and override mechanisms, teams can achieve:

- **Consistency** across the organization
- **Flexibility** for individual preferences
- **Security** for sensitive information
- **Maintainability** of configuration files
- **Scalability** as the organization grows

The key is to **start with organization-level defaults**, allow **user-level personalization**, and **override with project-specific settings** as needed, while always prioritizing **security** and **clarity** in configuration management.

In the next section, we'll dive deep into the security considerations that are paramount when managing AI agent configurations.

{% endif %}
