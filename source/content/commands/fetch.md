{% if slide %}
### <i class="fab fa-git"></i> <strong style="color:green">fetch</strong>
{% endif %}

![fetch view](figures/fetch_view.svg)

{% if page %}
:::{card} `git fetch` without further arguments runs:
1. Updates all remote tracking branches ("fetches the changes").
:::

```{note}
Running `git fetch` is always a save operation
```
{% endif %}
