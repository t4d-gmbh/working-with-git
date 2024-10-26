{% if slide %}
### <i class="fas fa-folder-open"></i> Working Directory
{% else %}

:::{card} <i class="fas fa-folder-open"></i> Working Directory
{% endif %}

> In <i class="fab fa-git"></i> , the Working Directory refers to the **local folder you are viewing and editing** of the currently checked out branch.

The Working Directory:

- Is like a **"sandbox" for crafting changes**.
- When switching the current branch <i class="fab fa-git"></i> will change its content.
- Changes introduced by the developer will not be overwritten by <i class="fab fa-git"></i>.

{% if page %}
:::
In most cases the Working Directory can be recognized by the presence of a (hidden) `.git` folder.
If no such folder can be found, you can run `git rev-parse --git-dir` to display its location.

When you switch branches, the content of the working directory will change to reflect the content of the branch you are switching to.
The changes you make in the working directory will not be overwritten by <i class="fab fa-git"></i> unless you explicitly tell <i class="fab fa-git"></i> to do so.

{% endif %}
