{% if slide %}
### <i class="fas fa-folder-open"></i> Working Directory
{% else %}

:::{card} <i class="fas fa-folder-open"></i> Working Directory
{% endif %}

> In <i class="fab fa-git"></i>, the _Working Directory_ refers to the **local folder where you view and edit files** from the currently checked-out branch.

The Working Directory acts like a **"sandbox" where you can craft changes**:
- When switching the current branch <i class="fab fa-git"></i> will change its content.
- Changes introduced by the developer will not be overwritten by <i class="fab fa-git"></i>.

{% if page %}
In most cases the Working Directory can be recognized by the presence of a (hidden) `.git` folder.
If no such folder can be found, you can run `git rev-parse --git-dir` to display its location.

When you switch branches, the working directory content will change to reflect the content of the branch you are switching to.
The changes you make in the working directory will not be overwritten by <i class="fab fa-git"></i> unless you explicitly tell <i class="fab fa-git"></i> to do so.
:::
{% endif %}
