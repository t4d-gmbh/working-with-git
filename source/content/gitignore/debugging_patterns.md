{% if page %}
---
orphan: true
---
{% endif %}
{% if slide %}
### Why is this file ignored?

:::::{card}

```bash
git check-ignore -v logs/debug.log
# .gitignore:3:*.log    logs/debug.log
```

Read the deciding rule: **source file → line → pattern**.

**A reported `!` pattern is an exception—not an exclusion.**

:::::
{% endif %}
