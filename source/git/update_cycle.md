# The update cycle

Git does not automatically synchronize between devices, it is up to the developer to trigger a synchronization.


::::::{tabs}
:::::{tab} 0.1/0
![cycle init](figures/cycle_initial.svg)
:::::
:::::{tab} 0.2/0
![cycle prepull](figures/cycle_first_prepull.svg)
:::::
:::::{tab} 0.3/0
![cycle pull](figures/cycle_first_pull.svg)
:::::
:::::{tab} 1/0
![cycle one cycle](figures/cycle_first_cycle.svg)
:::::
:::::{tab} 2/0
![cycle ](figures/cycle_fst_done.svg)
:::::
:::::{tab} 2.3/0.1 
![cycle full](figures/cycle_snd_join.svg)
:::::
:::::{tab} 3/0.2 
![cycle full](figures/cycle_premerge.svg)
:::::
:::::{tab} 3/0.3
::::{tabs}
:::{tab} merge
![cycle full](figures/cycle_merge.svg)
:::
:::{tab} rebase
![cycle full](figures/cycle_rebase.svg)
:::
::::
:::::
:::::{tab} 3/1
::::{tabs}
:::{tab} merge
![cycle full](figures/cycle_full.svg)
:::
:::{tab} rebase
![cycle full](figures/cycle_rebase_full.svg)
:::
::::
:::::
::::::
