## Separate Changes

> Any storyline is easier to follow if it is split into chapters. Chapters provide the option to organize, pace, and develop a narrative.

A <i class="fab fa-git"></i> repository is no different:

**Development should always be structured into  manageable, independent pieces allowing for focused work, clear boundaries, and easy integration into the larger whole.**


{% if slide %}
```{toctree}
:maxdepth: 1
:hidden:

./separate_best
```
{% else %}
Typically, **a repository contains various types of files** and **a developer performs various tasks**, like
- adding new features
- refactoring existing code
- fixing typos
- completing the documentation.
- ...

With <i class="fab fa-git"></i> any edit can lead to a commit and a branch can consist of any sequence of commits.
It is up to the developer to associate branches with specific subjects or tasks and distribute commits onto these branches in a meaningful manner.

Following the history of a repository becomes easier if the single branches incorporate some subject specificity, leading to a further set of best practices:

```{include} ./separate_best.md
```
{% endif %}
