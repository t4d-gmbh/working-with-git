{% if slide %}
### `git-filter-repo` - How to remove sensitive data?
{% endif %}
<strong style="color:black">git-filter-repo&nbsp;[{octicon}`link-external;0.8em;log`](https://github.com/newren/git-filter-repo)</strong> is a Python project and the de facto default tool for removing content from a repository.

{% if page %}
In case you ever (and you will) accidentally commit some sensitive data to a repository, the first crucial thing to understand is that the data, even if you remove it again, say with a `git revert`, will become accessible to anyone that has access to your repository. 
Thus, to make sure that no sensitive data ships with your repository you need to make sure that also the history does not contain it.
The safest way to make sure of this is by using tools like the mentioned `git-filter-repo`.

While it is possible to contain some sensitive commit in a local environment by means of `git reset` one should know precisely how to use it, in order to avoid any leakage of the sensitive data when synchronizing with others or a remote server.
Therefore, we strongly recommend to directly opt for `git-filter-repo` if you realize that you have a commit with sensitive data.

Next, if the sensitive commit was already pushed to a remote server, be sure to always check the recommended procedure of the specific remote server.
For the record, here are the currently recommended approaches for [GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository) and for [GitLab](https://support.gitlab.com/hc/en-us/articles/11626492918940-Sensitive-Information).

Also, once data has left your device you should always assume that it can never be removed completely from the public domain.
For unencrypted sensitive data this means that you need to proceed with the necessary measures to mitigate the risk of abuse.
For committed passwords, for example, this means that you will want to change them as soon as possible, even if you think you managed to remove the sensitive commit completely from the repository again.

{% endif %}

:::{admonition} Sensitive data
:class: danger

1. The full history ships with a repository.
2. Assume that the data cannot be 'unpublised'.
3. Check the recommended procedures on the remotes.
   - [GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)
   - [GitLab](https://support.gitlab.com/hc/en-us/articles/11626492918940-Sensitive-Information)
4. `git reset` is **not** necessarily helping you here.

:::
