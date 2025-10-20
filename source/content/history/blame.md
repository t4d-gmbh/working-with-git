{% if slide %}
###  `git blame` - When and who changed a specific line in a file?
{% endif %}
<strong style="color:black">git blame &nbsp;[{octicon}`link-external;0.8em;blame`](https://git-scm.com/docs/git-blame)</strong> shows who changed each line, when and with what commit.

{% if page %}

{% endif %}

:::::{card} Example: `git blame -L 15,18 -- source/index.md`
:class: smaller

```{code-block} diff
47c24e85 (Jonas I. Liechti  2025-10-16 10:31:57 +0200 15) 
00000000 (Not Committed Yet 2025-10-20 20:18:01 +0200 16) ```{toctree} 
886a0933 (Matteo Delucchi   2024-10-14 15:18:16 +0200 17) :maxdepth: {% if build == "slides" %}1{%else %}4{% endif %}
47c24e85 (Jonas I. Liechti  2025-10-16 10:31:57 +0200 18) :caption: Content
```
:::::
