{% if slide %}
### Distribution techniques
{% endif %}

<i class="fab fa-git"></i> supports several protocols to send and receive content:

::::::{card} Supported protocols
:::::{grid}
::::{grid-item-card} SSH
Secure protocol for connecting to remote repositories
{% if page %}
```{admonition} URL Scheme
:class: tip, dropdown

Used for SSH connections to remote repositories

> ssh://user@host:port/path/to/repo.git
```
```{admonition} Authentication
:class: note, dropdown

:::{card} SSH-Key
Use a public/private key pair to authenticate with the remote
:::
:::{card} Username/Password
Provide username and password for autentiation with the remote
:::

```
{% endif %}
::::
::::{grid-item-card} HTTP(S)
Widely used (secure) protocol for connecting to remote repositories
{% if page %}
```{admonition} URL Scheme
:class: tip, dropdown

Used for HTTPS connections to remote repositories

> https://github.com/user/repo.git
```
```{admonition} Authentication
:class: note, dropdown

:::{card} Username/Password
Provide username and password for autentiation with the remote
:::
:::{card} OAuth Token
Usually obtained through the remote's API or web interface
:::
```
{% endif %}
::::
:::::
:::::{grid}
::::{grid-item-card} Git Protocol
Native protocol for Git, optimized for read-only access
{% if page %}```{admonition} URL Scheme
:class: tip, dropdown
Follows the scheme for **ssh** or **https** but prepends **git+**
> git+ssh://user@host:port/path/to/repo.git<br>
> git+https://host/user/repo.git
```{% endif %}
::::
::::{grid-item-card} Local File System
Connecting to a repository on the same machine
{% if page %}```{admonition} URL Scheme
:class: tip, dropdown
Similar to accessing local files.

> file:///path/to/repo.git<br>
> file:../path/to/repo.git
```{% endif %}
::::
:::::
::::::
