### Best Practice (1/4)

A successful collaboration and development strategy should cultivate healthy states, leading to the first set of best practices:

<!-- pages-include -->

:::{card} Keep a healthy reference
- Identify one branch on one location to be the main reference[^sn1]
- Never develop directly on the main reference
- Never modify shared history
- Try to consolidate branches whenever possible
- Verify the functionality of the resulting state **before** you incorporate a branch into the main reference 
:::

[^sn1]: While **`git` is a distributed** version control system, **it is not decentralized**: Each repository usually has one upstream location (e.g. **origin**) which acts as reference location for the reference branch.
