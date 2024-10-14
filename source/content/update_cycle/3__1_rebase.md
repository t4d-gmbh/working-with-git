{% if slide %}
### step 3/1 - `rebase`
{% endif %}

{% if slide %}
::::{margin}
{% else %}
![cycle full](figures/cycle_rebase_full.svg)
{% endif %}
:::{card} 😴 Developer 1 😴
:::
:::{card} Developer 2
- pushes local merge commit to `origin`, completing the 1st update cycle
:::
{% if slide %}
::::
![cycle full](figures/cycle_rebase_full.svg)
{% endif %}
