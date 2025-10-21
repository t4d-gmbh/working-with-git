{% if slide %}
###  3{octicon}`sync;0.8em`/ 0.3{octicon}`sync;0.8em` - `rebase`
{% endif %}

{% if slide %}
::::{margin}
{% else %}
![cycle full](figures/cycle_rebase.svg)
{% endif %}
:::{card} 😴 Developer 1 😴
:::
:::{card} Developer 2
- rebases the local branch onto the state of `origin`
:::
{% if slide %}
::::
![cycle full](figures/cycle_rebase.svg)
{% endif %}
