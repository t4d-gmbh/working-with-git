/**
 * Check the worktree documentation and execute its examples in local fixtures.
 * Run with: node --test tests/worktree.test.cjs
 */
const assert = require("node:assert/strict");
const { spawnSync } = require("node:child_process");
const { chmodSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } = require("node:fs");
const { tmpdir } = require("node:os");
const { join, resolve } = require("node:path");
const { test } = require("node:test");

const directory = join(__dirname, "../source/content/useful_commands");

/** Execute an isolated command, reporting unexpected failures with its output. */
function run(command, args, cwd, env) {
  const result = spawnSync(command, args, { cwd, env, encoding: "utf8" });
  if (result.error) throw result.error;
  assert.equal(result.status, 0, `${command} ${args.join(" ")}\n${result.stdout}\n${result.stderr}`);
  return result.stdout;
}

/** Create a disposable repository with main and one commit; never use the course index. */
function withRepository(check) {
  const previousUmask = process.umask(0o002);
  const root = mkdtempSync(join(tmpdir(), "course-worktree-"));
  chmodSync(root, 0o2770);
  const env = {
    ...process.env,
    GIT_CONFIG_GLOBAL: "/dev/null", GIT_CONFIG_NOSYSTEM: "1", GIT_CONFIG_COUNT: "0",
    GIT_AUTHOR_NAME: "Course fixture", GIT_AUTHOR_EMAIL: "fixture@example.invalid",
    GIT_COMMITTER_NAME: "Course fixture", GIT_COMMITTER_EMAIL: "fixture@example.invalid",
    GIT_TERMINAL_PROMPT: "0",
    LC_ALL: "C",
  };
  for (const key of ["GIT_DIR", "GIT_WORK_TREE", "GIT_INDEX_FILE", "GIT_COMMON_DIR"]) delete env[key];
  const source = join(root, "source");
  try {
    run("git", ["init", "--quiet", "--initial-branch=main", source], root, env);
    writeFileSync(join(source, "README.md"), "Initial content\n");
    run("git", ["add", "README.md"], source, env);
    run("git", ["-c", "commit.gpgSign=false", "commit", "--quiet", "-m", "Fixture initial commit"], source, env);
    check({ root, source, env, git: (args, cwd = source) => run("git", args, cwd, env) });
  } finally {
    rmSync(root, { recursive: true, force: true });
    process.umask(previousUmask);
  }
}

/** Extract a documented shell block, optionally after a specific section title. */
function example(marker = "") {
  const source = readFileSync(join(directory, "worktree.md"), "utf8");
  const offset = marker ? source.indexOf(marker) : 0;
  assert.ok(offset >= 0, marker);
  const block = source.slice(offset).match(/```bash\n([\s\S]*?)\n```/);
  assert.ok(block, marker);
  return block[1];
}

test("worktree is linked in slides and included as a page dropdown", () => {
  const index = readFileSync(join(directory, "index.md"), "utf8");
  assert.match(index, /^\.\/worktree$/m);
  assert.match(index, /\{dropdown\} git worktree/);
  assert.match(index, /\{include\} \.\/worktree\.md\n:start-after: <!-- pages-include -->/);
  const source = readFileSync(join(directory, "worktree.md"), "utf8");
  assert.match(source, /<!-- pages-include -->/);
  const pageOnly = source.match(/{% if page %}\n([\s\S]*?)\n{% endif %}/);
  assert.ok(pageOnly);
  assert.match(pageOnly[1], /Advanced setup: a bare repository/);
  assert.match(pageOnly[1], /\.bare-repo\.git\//);
  assert.match(pageOnly[1], /wt1\/[\s\S]*wt2\/[\s\S]*wt3\//);
  const slides = source.replace(pageOnly[0], "");
  assert.ok(slides.split(/\s+/).length < 110, "Keep the slide short");
  assert.doesNotMatch(slides, /\.bare-repo\.git|remote\.origin\.fetch|worktree remove/);
});

test("the basic example creates an independent worktree with a shared repository", () => {
  withRepository(({ source, env, git }) => {
    run("bash", ["-e", "-c", example()], source, env);
    const linked = resolve(source, "../my-project-feature");
    assert.equal(git(["branch", "--show-current"], linked).trim(), "feature-x");
    assert.equal(git(["branch", "--show-current"]).trim(), "main");
    assert.equal(git(["rev-parse", "--path-format=absolute", "--git-common-dir"], linked),
      git(["rev-parse", "--path-format=absolute", "--git-common-dir"]));
    writeFileSync(join(linked, "README.md"), "Feature work\n");
    git(["add", "README.md"], linked);
    assert.equal(git(["status", "--porcelain"], linked), "M  README.md\n");
    assert.equal(git(["status", "--porcelain"]), "");
    assert.equal(readFileSync(join(source, "README.md"), "utf8"), "Initial content\n");
    const duplicate = spawnSync("git", ["worktree", "add", "../duplicate", "main"], {
      cwd: source, env, encoding: "utf8",
    });
    assert.notEqual(duplicate.status, 0, "A checked-out branch must not be reused by default");
    assert.match(duplicate.stderr, /already (?:checked out|used by worktree)/);
  });
});

test("the advanced recipe creates the bare layout, tracking, and safe worktree removal", () => {
  withRepository(({ root, source, env, git }) => {
    const workspace = join(root, "advanced example");
    mkdirSync(workspace, { mode: 0o2770 });
    const script = example("#### Advanced setup: a bare repository")
      .replace("https://example.org/team/project.git", '"$COURSE_FIXTURE_URL"');
    run("bash", ["-e", "-c", script], workspace, { ...env, COURSE_FIXTURE_URL: source });
    const project = join(workspace, "my-project");
    const bare = join(project, ".bare-repo.git");
    const worktrees = ["wt1", "wt2", "wt3"].map(name => join(project, name));
    assert.equal(git(["rev-parse", "--is-bare-repository"], bare).trim(), "true");
    assert.equal(existsSync(join(bare, "README.md")), false);
    for (const [index, branch] of ["main", "feature-x", "bugfix-y"].entries()) {
      const worktree = worktrees[index];
      assert.equal(git(["branch", "--show-current"], worktree).trim(), branch);
      assert.match(readFileSync(join(worktree, ".git"), "utf8"), /^gitdir: /);
      assert.equal(git(["rev-parse", "--path-format=absolute", "--git-common-dir"], worktree).trim(), bare);
      assert.equal(readFileSync(join(worktree, "README.md"), "utf8"), "Initial content\n");
    }
    assert.equal(git(["rev-parse", "--abbrev-ref", "@{upstream}"], worktrees[0]).trim(), "origin/main");
    assert.equal(git(["config", "--get", "remote.origin.fetch"], bare).trim(), "+refs/heads/*:refs/remotes/origin/*");
    writeFileSync(join(source, "README.md"), "Updated upstream\n");
    git(["add", "README.md"]);
    git(["-c", "commit.gpgSign=false", "commit", "--quiet", "-m", "Fixture upstream change"]);
    git(["pull", "--ff-only"], worktrees[0]);
    assert.equal(readFileSync(join(worktrees[0], "README.md"), "utf8"), "Updated upstream\n");
    assert.equal(readFileSync(join(worktrees[1], "README.md"), "utf8"), "Initial content\n");
    writeFileSync(join(worktrees[2], "unsaved.txt"), "Keep this local file\n");
    const refused = spawnSync("git", ["--git-dir=.bare-repo.git", "worktree", "remove", "wt3"], {
      cwd: project, env, encoding: "utf8",
    });
    assert.notEqual(refused.status, 0);
    assert.equal(existsSync(join(worktrees[2], "unsaved.txt")), true);
    rmSync(join(worktrees[2], "unsaved.txt"));
    writeFileSync(join(worktrees[2], "README.md"), "Uncommitted tracked change\n");
    const trackedChange = spawnSync("git", ["--git-dir=.bare-repo.git", "worktree", "remove", "wt3"], {
      cwd: project, env, encoding: "utf8",
    });
    assert.notEqual(trackedChange.status, 0);
    assert.equal(readFileSync(join(worktrees[2], "README.md"), "utf8"), "Uncommitted tracked change\n");
    writeFileSync(join(worktrees[2], "README.md"), "Initial content\n");
    writeFileSync(join(worktrees[2], ".gitignore"), "ignored.tmp\n");
    git(["add", ".gitignore"], worktrees[2]);
    git(["-c", "commit.gpgSign=false", "commit", "--quiet", "-m", "Fixture ignore rule"], worktrees[2]);
    writeFileSync(join(worktrees[2], "ignored.tmp"), "Ignored files are removed too\n");
    run("bash", ["-e", "-c", example("#### Removing a worktree")], project, env);
    assert.equal(existsSync(worktrees[2]), false);
    git(["show-ref", "--verify", "refs/heads/bugfix-y"], bare);
  });
});
