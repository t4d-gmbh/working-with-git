# The Update Cycle

<i class="fab fa-git"></i> does not automatically synchronize between devices, it is up to the developer to trigger a synchronization.


A single update cycle (1{octicon}`sync;0.8em`) is defined by updating the remote with some local changes.


```{admonition} Reported states
:class: note, margin
- **0.x{octicon}`sync;0.8em`** partially comleted cycle.
- **0.1{octicon}`sync;0.8em`** / **1.2{octicon}`sync;0.8em`** cyles of two developers.
```

{% if build == "slides" %}
<!-- BUILDING THE SLIDES -->
```{toctree}
:maxdepth: 2

./0_1
./0_2
./0_3
./1__0
./2__0
./2_3__0_1
./3__0_2
./3__0_3
./3__1
./3__0_3_rebase
./3__1_rebase
```
{% else %}
<!-- BUILDING THE PAGES -->
::::::{tabs}
:::::{tab} 0.1{octicon}`sync;0.8em`/ 0{octicon}`sync;0.8em`
```{include} ./0_1.md
```
:::::
:::::{tab} 0.2{octicon}`sync;0.8em`/ 0{octicon}`sync;0.8em`
```{include} ./0_2.md
```
:::::
:::::{tab} 0.3{octicon}`sync;0.8em`/ 0{octicon}`sync;0.8em`
```{include} ./0_3.md
```
:::::
:::::{tab} 1{octicon}`sync;0.8em`/ 0{octicon}`sync;0.8em`
```{include} ./1__0.md
```
:::::
:::::{tab} 2{octicon}`sync;0.8em`/ 0{octicon}`sync;0.8em`
```{include} ./2__0.md
```
:::::
:::::{tab} 2.3{octicon}`sync;0.8em`/ 0.1{octicon}`sync;0.8em`
```{include} ./2_3__0_1.md
```
:::::
:::::{tab} 3{octicon}`sync;0.8em`/ 0.2{octicon}`sync;0.8em`
```{include} ./3__0_2.md
```
:::::
:::::{tab} 3{octicon}`sync;0.8em`/ 0.3{octicon}`sync;0.8em`
::::{tabs}
:::{tab} merge
```{include} ./3__0_3.md
```
:::
:::{tab} rebase
```{include} ./3__0_3_rebase.md
```
:::
::::
:::::
:::::{tab} 3{octicon}`sync;0.8em`/ 1{octicon}`sync;0.8em`
::::{tabs}
:::{tab} merge
```{include} ./3__1.md
```
:::
:::{tab} rebase
```{include} ./3__1_rebase.md
```
:::
::::
:::::
::::::
{% endif %}
