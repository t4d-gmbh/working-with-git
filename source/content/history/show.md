{% if slide %}
###  `git show` - What exactly changed at a specific point?
{% endif %}
<strong style="color:black">git show &nbsp;[{octicon}`link-external;0.8em;show`](https://git-scm.com/docs/git-show)</strong> allows you to explore specific changes.


{% if page %}
With `git show` allows you to inspect individual objects, like commits, tags or branches.

{% endif %}

:::{card} Example: `git show HEAD~5 -- README.md`
:class: smaller
```bash
commit 65xxx
Author: Jonas I. Liechti <j-i-l@t4d.ch>
Date:   Mon Nov 4 13:43:05 2024 +0100

    adding stars

diff --git a/README.md b/README.md
index f3b5fbe..262826d 100644
--- a/README.md
+++ b/README.md
@@ -7,6 +7,14 @@ track and secure their digital projects.
 
 <!-- include-before -->
 
+---
+
+_If you find this course useful, please share it with others! Show your support by giving it a 🌟 using the ⭐-button at the top right of the page._
+
+---
+
 ## Contributing 🤝🎉
 
 We welcome contributions to this project!`:
 ```
:::


