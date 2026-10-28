### <strong style="color:black">git worktree</strong>

<!-- pages-include -->

Work on different branches in separate directories without switching your current working tree.
From a repository with a `main` branch, create a new branch `feature-x` in another directory:

```bash
git worktree add -b feature-x ../my-project-feature main
git worktree list
```

The worktrees share the repository's objects and branches, but each has its own working files, staging area (index), and `HEAD`.

{% if page %}
#### Working in parallel

Continue working in the original directory, or enter `../my-project-feature` to work on `feature-x`.
Editing or staging files in one worktree does not change the working files or staging area of another.
Commits and branch updates belong to the shared repository; worktrees are not independent clones.

Git normally prevents the same branch from being checked out in more than one worktree.
The example assumes that `feature-x` does not already exist.
To use an existing branch instead, omit `-b`: `git worktree add <directory> <branch>`.

#### Advanced setup: a bare repository

A bare repository stores Git objects, references, and administrative data without having its own working tree.
It is **optional**: the basic example above works with an ordinary repository.
Using a bare repository lets you arrange all working trees as siblings:

```text
my-project/
├── .bare-repo.git/   # Shared Git database and administrative data; no working files
├── wt1/              # Working tree for main
├── wt2/              # Working tree for feature-x
└── wt3/              # Working tree for bugfix-y
```

The following is a separate setup, not a continuation of the basic example.
Start in the directory that should contain the new `my-project/` folder.
Replace the example URL with an existing repository's URL.
That repository must have a `main` branch with at least one commit;
`feature-x` and `bugfix-y` must not already exist in it.

```bash
mkdir my-project
cd my-project
git clone --bare https://example.org/team/project.git .bare-repo.git

# Configure normal remote-tracking branches and fetch them
git --git-dir=.bare-repo.git config remote.origin.fetch '+refs/heads/*:refs/remotes/origin/*'
git --git-dir=.bare-repo.git fetch origin

# Check out main and set its upstream for subsequent pulls
git --git-dir=.bare-repo.git worktree add wt1 main
git -C wt1 branch --set-upstream-to=origin/main main

# Create two new branches, both starting from main
git --git-dir=.bare-repo.git worktree add -b feature-x wt2 main
git --git-dir=.bare-repo.git worktree add -b bugfix-y wt3 main

git --git-dir=.bare-repo.git worktree list
```

Unlike an ordinary clone, `git clone --bare` does not set up the usual remote-tracking branches.
The fetch configuration above maps remote branches to `origin/*`; setting `main`'s upstream
then allows normal fetch/pull workflows from `wt1/`.

The parent `my-project/` directory is only a container, not a working tree.
Run normal Git commands inside a worktree, for example `git -C wt1 status`.
Each linked worktree contains a `.git` **file**, not a full `.git/` directory;
it points to that worktree's administrative data in `.bare-repo.git/worktrees/`.
Do not delete the shared `.bare-repo.git/` directory while these worktrees are in use.

#### Removing a worktree

From the advanced example's `my-project/` directory, remove a worktree you no longer need:

```bash
git --git-dir=.bare-repo.git worktree remove wt3
```

This removes the working directory and its worktree registration, but **does not delete the `bugfix-y` branch**.
Git refuses removal if tracked files have uncommitted changes or non-ignored untracked files are present.
Save any files you need first, including ignored files, which can be removed with the directory.
Use `git worktree remove` rather than deleting the directory manually so Git also removes its registration.

See the [Git worktree documentation](https://git-scm.com/docs/git-worktree) for further commands and options.
{% endif %}
