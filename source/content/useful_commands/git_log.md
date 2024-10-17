### <strong style="color:black">git log</strong>

<!-- pages-include -->

`git log` is an extremely powerful tool to explore the history of a repository with some particularly useful option:

- `--oneline` shows a condensed view with each commit on a single line.
- `--graph` visualizes the commit history as a branching graph.
- `--author="Author Name"` shows commits made by a specific author.
- `--since="2 weeks ago"` displays commits made since a specific date, useful for reviewing recent changes.
- `-p` displays the patch (diff) introduced in each commit, allowing you to see what changes were made.
- `--grep="keyword"` filters commits to show only those with messages containing a specific keyword.
