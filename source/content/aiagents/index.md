# <i class="fas fa-cog"></i> AI Agent Configuration Management

> A prerequisite for successfully managing AI agents in software projects is **understanding how to properly handle their configuration files in version control**.

{% if build == "slides" %}
<!-- BUILDING THE SLIDES -->

:::{admonition} Core Question
:class: tip
What should you track in Git when it comes to AI agent configuration files?
:::

```{toctree}
:maxdepth: 2

./configuration_files
./organization_levels
./security
./ai_generated_content
```

{% else %}
<!-- BUILDING THE PAGES -->

AI agents allows developers to leverage AI assistants effectively, but **proper configuration file management** is essential for security and collaboration.

AI agents like Claude, Vibe, and Copilot rely on configuration files that define their behavior. The key challenge is determining **which files to track in version control** and which to keep local or secret.

::::{dropdown} Configuration Files Overview
:class-title: Configuration Files
```{include} ./configuration_files.md
```
::::

::::{dropdown} Organization and Tracking Decisions
:class-title: Organization & Tracking
```{include} ./organization_levels.md
```
::::

:::{admonition} Critical Warning
:class: danger
**Never commit secrets, API keys, or credentials to Git.** The consequences of exposing sensitive information can be severe and long-lasting. Always use environment variables, secret management services, or other secure methods for sensitive data.
:::

::::{dropdown} Security Considerations
:class-title: Security
```{include} ./security.md
```
::::

::::{dropdown} AI-Generated Content
:class-title: AI-Generated Content
```{include} ./ai_generated_content.md
```
::::

{% endif %}

{% if page %}
## Appendices

For reference material, examples, and detailed patterns:

```{toctree}
:maxdepth: 1
:caption: Appendices

./appendices/examples
./appendices/gitignore_patterns
./appendices/comparison_tables
```
{% endif %}
