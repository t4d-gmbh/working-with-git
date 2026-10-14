{% if build == "slides" %}
<!-- BUILDING THE SLIDES -->

:::{admonition} Core Question
:class: tip, margin
How do you tell an AI what matters in YOUR project?
:::

::::{grid}
:::{grid-item-card} Purpose
Tell AI what is important
:::
:::{grid-item-card} Philosophy
Project principles first
:::
:::{grid-item-card} Practice
Workflow integration
:::
::::

{% else %}
<!-- BUILDING THE PAGES -->

The `AGENTS.md` file is a **manifesto** of how AI should interact with your codebase. It transforms AI from a generic tool into a project-aware collaborator that understands your team's values, standards, and constraints.

{% endif %}

## The Fundamental Aim

**The purpose of `AGENTS.md` is to tell the AI agent what is important in YOUR project context.**

`AGENTS.md` provides the AI with the **project-specific knowledge** it lacks by default and can not infer from your project structure or documentation. 
Without this guidance, AI agents operate on generic assumptions that may not align with your project's philosophy, architecture, or best practices.

:::{admonition} Key Insight
:class: tip
`AGENTS.md` is where you define what "good" looks like for your project.
:::

## Karpathy's Foundation: Four Principles for AI Guidance

The renowned AI researcher Andrej Karpathy identified critical pitfalls in how large language models approach coding tasks. His four principles provide a **conceptual foundation** for structuring `AGENTS.md` effectively.

These principles address the core problems of AI agents making wrong assumptions silently, overcomplicate solutions, making unnecessary changes, and lacking clear success criteria.

### Principle 1: Think Before Coding

**You should state assumptions explicitly, surface tradeoffs, and push back when warranted.**

In your `AGENTS.md`, you must **require** the AI to:

- Explicitly state what it understands about the task before beginning
- Identify ambiguities and request clarification rather than making assumptions
- Present multiple interpretations when the request is unclear
- Stop and flag confusion rather than proceeding with uncertainty
- Surface tradeoffs between different approaches

**`AGENTS.md` must demand**: No silent assumptions. Every decision point must be visible.

:::{admonition} Application to `AGENTS.md`
:class: note
Define what the AI should consider before making any changes. Establish that understanding comes before execution.
:::

### Principle 2: Simplicity First

**You should demand the minimum code that solves the problem, with nothing speculative.**

In your `AGENTS.md`, you must **insist** that the AI:

- Implements only what was explicitly requested
- Avoids adding features beyond the scope
- Creates no abstractions for single-use code
- Adds no "flexibility" or "configurability" that was not requested
- Implements no error handling for impossible scenarios
- Rewrites code if it can be simpler

**`AGENTS.md` must enforce**: If a senior engineer would call it overcomplicated, it is overcomplicated.

:::{admonition} Application to `AGENTS.md`
:class: note
Define what "simple" means for your project. Set the expectation that less code is better code.
:::

### Principle 3: Surgical Changes

**You should touch only what you must, and clean up only your own mess.**

In your `AGENTS.md`, you must **constrain** the AI to:

- Only modify files explicitly requested or directly related to the task
- Never "improve" adjacent code, comments, or formatting as side effects
- Never refactor code that is not broken
- Match existing style, even if imperfect
- Only remove imports, variables, or functions that its own changes made unused
- Flag pre-existing dead code but not delete it unless asked

**`AGENTS.md` must declare**: Every changed line must trace directly to the user's request.

:::{admonition} Application to `AGENTS.md`
:class: note
Establish clear boundaries: What the AI can modify, what it cannot, and what requires explicit permission.
:::

### Principle 4: Goal-Driven Execution

**You should define verifiable success criteria and loop until they are met.**

In your `AGENTS.md`, you must **require** the AI to:

- Transform imperative tasks into verifiable goals
- Write tests for invalid inputs, then make them pass
- Write tests that reproduce bugs, then fix them
- Ensure all existing tests pass before and after changes
- State a brief plan for multi-step tasks with verification at each step

**`AGENTS.md` must establish**: Strong success criteria enable the AI to loop independently. Weak criteria require constant clarification.

:::{admonition} Application to `AGENTS.md`
:class: note
Define what "done" means. Specify testing requirements, validation steps, and quality gates.
:::

## What Belongs in `AGENTS.md`?

`AGENTS.md` is not a dumping ground for every project detail. It is a **curated guide** that answers: "How does this help the AI help US better?" Every line must serve this purpose.

### Core Sections (in order of importance)

**1. Project Philosophy and Purpose**

This is the **foundation**. Define:

- The project's mission and value proposition
- The target audience and user base
- The technical philosophy and architectural principles
- The quality standards that are non-negotiable

**You should**: Start with WHY before HOW. The AI needs to understand the project's soul, not just its structure.

**2. Principles and Guidelines**

This is where Karpathy's principles **translate to actionable guidance**:

- Coding standards and style preferences
- Architectural patterns to follow
- Anti-patterns to avoid
- Review criteria and quality expectations

**You should**: Be prescriptive. "Always do X" is clearer than "Consider doing X."

**3. Workflow and Process**

Define how AI fits into your development process:

- When to use AI vs. when human judgment is required
- Review steps and validation requirements
- Commit policies and quality gates

**You should**: Integrate AI into existing workflows, not create separate AI workflows.

**4. Practical Constraints**

Set the **boundaries** within which the AI must operate:

- File and directory scope (what the AI can access)
- Tool restrictions and permissions
- Resource limitations

**You should**: Be explicit about limits. Ambiguity leads to overreach.

**5. Tool-Specific Integration**

For tools that accept `AGENTS.md` (or equivalent):

- How the AI should use git reflog for recovery
- How the AI should use git diff for self-review
- Commit message expectations

**You should**: Reference your project's existing best practices for these tools.

## Historical Context

**Note on CLAUDE.md**: Claude Code originally used `CLAUDE.md`, but recent versions also accept `AGENTS.md` for consistency across AI tools. The philosophy and structure remain identical. If you are using Claude Code, you can use either filename.

::::{dropdown} Other Configuration Files (Brief Sidenote)
For completeness, other AI tools have their own project-level configuration files, such as `.vibe/config` for Vibe CLI or `.cursor.json` for Cursor editor. These serve similar purposes but are tool-specific.

However, `AGENTS.md` is emerging as the **standard** for project-level AI guidance across multiple tools. When possible, use `AGENTS.md` for maximum compatibility and maintain a single source of truth for your project's AI guidance.
::::

{% if build == "slides" %}

:::{admonition} Slide Summary
:class: note
`AGENTS.md` = Project philosophy + Karpathy's principles + Practical constraints + Security awareness
:::

{% endif %}
