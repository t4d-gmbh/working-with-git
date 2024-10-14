# The update cycle

Git does not automatically synchronize between devices, it is up to the developer to trigger a synchronization.

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
:::::{tab} 0.1/0
```{include} ./0_1.md
```
:::::
:::::{tab} 0.2/0
```{include} ./0_2.md
```
:::::
:::::{tab} 0.3/0
```{include} ./0_3.md
```
:::::
:::::{tab} 1/0
```{include} ./1__0.md
```
:::::
:::::{tab} 2/0
```{include} ./2__0.md
```
:::::
:::::{tab} 2.3/0.1 
```{include} ./2_3__0_1.md
```
:::::
:::::{tab} 3/0.2 
```{include} ./3__0_2.md
```
:::::
:::::{tab} 3/0.3
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
:::::{tab} 3/1
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
