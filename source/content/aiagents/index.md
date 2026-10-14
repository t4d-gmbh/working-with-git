# <i class="fas fa-cog"></i> AI Agent Configuration with `AGENTS.md`

{% if build == "slides" %}
<!-- BUILDING THE SLIDES -->

:::{admonition} Discussion Question
:class: tip
What configuration files are you currently using with your AI agents?
:::

```{toctree}
:maxdepth: 2

./agents_md_focus
```

:::{admonition} Summary
:class: note
- `AGENTS.md` tells AI what matters in YOUR project
- Focus on principles, not just configuration
- Workflow integration is key to success
:::

{% else %}
<!-- BUILDING THE PAGES -->

The `AGENTS.md` file serves as the central document for guiding AI behavior in your project.

While other configuration files exist for specific tools (such as `.vibe/config` for Vibe CLI or `.cursor.json` for Cursor editor), `AGENTS.md` is emerging as the standard for project-level AI guidance. It provides a single source of truth that multiple AI tools can understand.

```{include} ./agents_md_focus.md
```
::::

:::{admonition} Critical Warning
:class: danger
**Never commit secrets, API keys, or credentials to Git.** `AGENTS.md` is meant to be committed and shared with your team, so it must never contain sensitive information.
:::

{% endif %}
