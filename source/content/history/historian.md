### The <i class="fab fa-git"></i>-Historian's Toolset

{% if build == "slides" %}
<!-- BUILDING THE SLIDES -->
```{toctree}
:maxdepth: 2

./log
./diff
./show
./blame
./reflog
```
{% else %}

::::{dropdown} `git log` - What happened when/where?
:class-title: log
```{include} ./log.md
```
::::
::::{dropdown} `git diff` - What changed between here and there?
:class-title: diff
```{include} ./diff.md
```
::::
::::{dropdown} `git show` - What exactly changed at a specific point?
:class-title: show
```{include} ./show.md
```
::::
::::{dropdown} `git blame` - When and who changed a specific line in a file?
:class-title: blame 
```{include} ./blame.md
```
::::
::::{dropdown} `git reflog` - What is "my history", i.e. what was I doing?
:class-title: reflog
```{include} ./reflog.md
```
::::
{% endif %}
