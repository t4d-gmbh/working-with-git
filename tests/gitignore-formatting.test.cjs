/**
 * Source-level guards for the chapter's page/slide structure.
 * These do not replace a Sphinx render check.
 * Run with: node --test tests/gitignore-formatting.test.cjs
 */
const assert = require("node:assert/strict");
const { execFileSync, spawnSync } = require("node:child_process");
const {
  mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync,
} = require("node:fs");
const { dirname, join } = require("node:path");
const { tmpdir } = require("node:os");
const { test } = require("node:test");

const directory = join(__dirname, "../source/content/gitignore");
const topics = {
  what_and_why: "What is .gitignore?",
  syntax: "Pattern Syntax",
  best_practices: "Best Practices",
  debugging: "Debugging & Common Issues",
};

/** Evaluate only this chapter's build-mode conditions; reject other syntax. */
function selectMode(source, mode) {
  const conditions = [];
  let visible = true;
  const selected = source.replace(
    /{%\s*(.*?)\s*%}|([\s\S]+?)(?={%|$)/g,
    (_, tag, text) => {
      if (text !== undefined) return visible ? text : "";
      if (tag.startsWith("if ")) {
        const expression = tag.slice(3);
        assert.ok(["slide", "page", 'build == "slides"'].includes(expression));
        const matches = expression === "page" ? mode === "pages" : mode === "slides";
        conditions.push({ parent: visible, matches });
        visible = visible && matches;
      } else if (tag === "else") {
        const condition = conditions.at(-1);
        assert.ok(condition);
        visible = condition.parent && !condition.matches;
      } else {
        assert.equal(tag, "endif");
        const condition = conditions.pop();
        assert.ok(condition);
        visible = condition.parent;
      }
      return "";
    },
  );
  assert.equal(conditions.length, 0, "Unclosed build-mode condition");
  return selected;
}

/** Inspect headings and colon fences without treating code blocks as markup. */
function structure(source) {
  const fences = [];
  const headings = [];
  let codeFence = null;
  for (const line of source.split("\n")) {
    const code = line.match(/^\s*(`{3,}|~{3,})/);
    if (code) {
      if (codeFence === null) codeFence = code[1];
      else if (code[1][0] === codeFence[0] && code[1].length >= codeFence.length) {
        codeFence = null;
      }
      continue;
    }
    if (codeFence !== null) continue;
    const opening = line.match(/^(:{3,})\{([^}]+)\}/);
    const closing = line.match(/^(:{3,})\s*$/);
    if (opening) {
      if (fences.length) {
        assert.ok(opening[1].length < fences.at(-1).length, line);
      }
      fences.push({ length: opening[1].length, name: opening[2] });
    } else if (closing) {
      assert.ok(fences.length, `Unmatched closing fence: ${line}`);
      assert.equal(closing[1].length, fences.pop().length, line);
    } else {
      const heading = line.match(/^(#{1,6}) (.*)$/);
      if (heading) {
        headings.push({
          level: heading[1].length,
          text: heading[2],
          inCard: fences.some(fence => fence.name === "card"),
        });
      }
    }
  }
  assert.equal(codeFence, null, "Unclosed code fence");
  assert.equal(fences.length, 0, "Unclosed directive fence");
  return headings;
}

for (const [name, title] of Object.entries(topics)) {
  const source = readFileSync(join(directory, `${name}.md`), "utf8");
  test(`${name}: pages use a section title and no whole-topic card`, () => {
    const pages = selectMode(source, "pages").trim();
    assert.ok(pages.startsWith(`## ${title}\n`));
    assert.doesNotMatch(pages, /^:{3,}\{card\}/m);
    const headings = structure(pages);
    assert.equal(headings[0].level, 2);
    for (const heading of headings.slice(1)) {
      const minimumLevel = name === "what_and_why" ? 2 : 3;
      assert.ok(heading.level >= minimumLevel, heading.text);
      assert.equal(heading.inCard, false, heading.text);
    }
  });
  test(`${name}: slide cards have balanced, properly nested fences`, () => {
    const slides = selectMode(source, "slides").trim();
    const slideTitle = name === "debugging" ? "Ignored ≠ untracked" : title;
    assert.ok(slides.startsWith(`### ${slideTitle}\n`));
    assert.match(slides, /^:{5}\{card\}$/m);
    assert.match(slides, /\n:{5}$/);
    structure(slides);
  });
}

test("the introduction has four peer page headings and no repeated slide title", () => {
  const source = readFileSync(join(directory, "what_and_why.md"), "utf8");
  const headings = structure(selectMode(source, "pages"));
  assert.deepEqual(
    headings.map(({ level, text }) => ({ level, text })),
    [
      { level: 2, text: "What is .gitignore?" },
      { level: 2, text: "Why is it Useful?" },
      { level: 2, text: "Historical Context" },
      { level: 2, text: "When to Use .gitignore" },
    ],
  );
  const slides = structure(selectMode(source, "slides"));
  const titles = slides.filter(heading => heading.text === "What is .gitignore?");
  assert.equal(titles.length, 1);
  assert.equal(titles[0].inCard, false);
  assert.ok(!source.includes("What is .gitignore and Why is it Useful?"));
});

test("the chapter includes all four topics in pages and lists them in slides", () => {
  const source = readFileSync(join(directory, "index.md"), "utf8");
  const pages = selectMode(source, "pages");
  const slides = selectMode(source, "slides");
  for (const name of Object.keys(topics)) {
    assert.ok(pages.includes(`{include} ./${name}.md`));
    assert.ok(slides.includes(`./${name}`));
  }
});

test("security guidance leads with a warning and actionable global-ignore setup", () => {
  const source = readFileSync(join(directory, "best_practices.md"), "utf8");
  for (const mode of ["pages", "slides"]) {
    const text = selectMode(source, mode);
    const warning = text.indexOf("**NEVER commit");
    const recommendation = text.indexOf("**Recommendation: maintain a global ignore file");
    const setup = text.indexOf("git config --global core.excludesFile");
    const firstDropdown = text.indexOf("{dropdown}");
    assert.ok(warning >= 0 && warning < recommendation, mode);
    assert.ok(recommendation < setup && setup < firstDropdown, mode);
    assert.match(text, /\{dropdown\} ✅ DO/);
    assert.match(text, /\{dropdown\} ❌ DON'T/);
  }
  const pages = selectMode(source, "pages");
  assert.match(pages, /personal security safety net/);
  assert.match(pages, /does not replace a repository-specific `\.gitignore`/);
  assert.match(pages, /Commit and track the project’s `\.gitignore`/);
  assert.match(pages, /every collaborator receives/);
  assert.doesNotMatch(pages, /### Global vs\. Local \.gitignore/);
});

test("global-ignore anchoring is explained in pages without expanding slides", () => {
  const source = readFileSync(join(directory, "best_practices.md"), "utf8");
  const pages = selectMode(source, "pages");
  const slides = selectMode(source, "slides");
  assert.match(pages, /relative to \*\*each repository’s working-tree root\*\*/);
  assert.match(pages, /not relative to the directory containing the global ignore file/);
  assert.match(pages, /`\/\.secrets\/`/);
  assert.match(pages, /`\.secrets\/`/);
  assert.doesNotMatch(slides, /working-tree root|`\/\.secrets\/`/);
});

test("matching-file cards use two columns in pages and four in slides", () => {
  const source = readFileSync(join(directory, "syntax.md"), "utf8");
  for (const [mode, columns] of [["pages", 2], ["slides", 4]]) {
    const text = selectMode(source, mode);
    const grid = text.match(/^::::\{grid\}([^\n]*)\n([\s\S]*?)^::::$/m);
    assert.ok(grid, mode);
    assert.equal(grid[1].trim(), String(columns), mode);
    assert.deepEqual(
      [...grid[2].matchAll(/^:::\{grid-item-card\} (.*)$/gm)].map(match => match[1]),
      ["`*.log`", "`temp.txt`", "`/build/`", "`build/`"],
    );
    structure(text);
  }
});

test("local pattern guidance states its scope and uses a working tree exception", () => {
  const source = readFileSync(join(directory, "syntax.md"), "utf8");
  const pages = selectMode(source, "pages");
  assert.match(pages, /directory containing (?:this|the) `\.gitignore`/);
  assert.match(pages, /operating system’s filesystem root/);
  assert.doesNotMatch(pages, /current directory only|ignored by \*\*both\*\*/);
  const directoryExample = pages.slice(pages.indexOf("{grid-item-card} Negate a Directory"));
  const patterns = directoryExample.match(/```(?:text)?\n([\s\S]*?)\n```/);
  assert.ok(patterns);
  assert.equal(patterns[1], "/*\n!/.gitignore\n!/src/");
  const characterExample = pages.slice(pages.indexOf("{dropdown} Character Classes"));
  const characterPatterns = characterExample.match(/```(?:text)?\n([\s\S]*?)\n```/);
  assert.ok(characterPatterns);
  assert.ok(characterPatterns[1].split("\n").includes("file[0-9].txt"));
});

test("diagnostics use supported flags and distinguish ignored from untracked files", () => {
  const source = readFileSync(join(directory, "debugging.md"), "utf8");
  assert.doesNotMatch(source, /--debug|Use absolute paths/);
  assert.match(source, /git status --porcelain --ignored/);
  assert.match(source, /List untracked, non-ignored files/);
  assert.match(source, /Uncommitted `\.gitignore` files work locally/);
  assert.match(source, /# !! \.env/);
});

test("debugging slides have one main command each and no reference-page material", () => {
  const expected = [
    ["debugging.md", "Ignored ≠ untracked", "git rm --cached file.txt"],
    ["debugging_patterns.md", "Why is this file ignored?", "git check-ignore -v logs/debug.log"],
  ];
  for (const [file, title, command] of expected) {
    const slides = selectMode(readFileSync(join(directory, file), "utf8"), "slides").trim();
    assert.deepEqual(
      structure(slides).map(({ level, text, inCard }) => ({ level, text, inCard })),
      [{ level: 3, text: title, inCard: false }],
    );
    assert.equal((slides.match(/^:{5}\{card\}$/gm) || []).length, 1);
    const commands = [...slides.matchAll(/```bash\n([\s\S]*?)\n```/g)];
    assert.equal(commands.length, 1);
    assert.equal(commands[0][1], command);
    assert.ok(slides.split(/\s+/).length <= 90, `${file}: keep slide copy brief`);
    assert.doesNotMatch(slides, /Self-Assessment|Troubleshooting|Common Mistakes|git status|git ls-files|--no-index|\{dropdown\}|\{grid\}/);
  }
  const tracked = selectMode(readFileSync(join(directory, "debugging.md"), "utf8"), "slides");
  assert.match(tracked, /already tracked/);
  assert.match(tracked, /local file/);
  assert.match(tracked, /history/);
  const patterns = selectMode(readFileSync(join(directory, "debugging_patterns.md"), "utf8"), "slides");
  assert.match(patterns, /\.gitignore:3:\*\.log\s+logs\/debug\.log/);
  assert.match(patterns, /source file.*line.*pattern/);
  assert.match(patterns, /`!`.*exception/);
});

test("the second debugging slide is navigable while the complete reference stays page-only", () => {
  const index = readFileSync(join(directory, "index.md"), "utf8");
  const slides = selectMode(index, "slides");
  assert.match(slides, /\.\/debugging\n\.\/debugging_patterns\n/);
  assert.doesNotMatch(selectMode(index, "pages"), /debugging_patterns/);
  const pages = selectMode(readFileSync(join(directory, "debugging.md"), "utf8"), "pages");
  for (const heading of ["The Tracked Files Problem", "Common Mistakes & Gotchas", "Debugging Tools", "Self-Assessment Questions", "Troubleshooting Guide"]) {
    assert.ok(pages.includes(`### ${heading}`), heading);
  }
  assert.match(pages, /git check-ignore -v --no-index/);
  assert.match(pages, /git status --porcelain --ignored/);
  assert.match(pages, /git ls-files --others --ignored --exclude-standard/);
  assert.equal((pages.match(/\{dropdown\} Question /g) || []).length, 5);
  assert.doesNotMatch(pages, /Ignored ≠ untracked|Why is this file ignored\?/);
});

test("common-mistake cards form three rows of two in pages and stay off slides", () => {
  const source = readFileSync(join(directory, "debugging.md"), "utf8");
  const pages = selectMode(source, "pages");
  const section = pages.slice(pages.indexOf("### Common Mistakes & Gotchas"));
  const grid = section.match(/^::::\{grid\}([^\n]*)\n([\s\S]*?)^::::$/m);
  assert.ok(grid);
  assert.equal(grid[1].trim(), "2");
  assert.equal((grid[2].match(/^:::\{grid-item-card\}/gm) || []).length, 6);
  assert.doesNotMatch(selectMode(source, "slides"), /Common Mistakes & Gotchas|\{grid-item-card\}/);
  structure(pages);
});

test("the production example does not accidentally ignore production configuration", () => {
  const source = readFileSync(join(directory, "best_practices.md"), "utf8");
  const section = source.slice(source.indexOf("#### Development vs. Production"));
  const patterns = section.match(/```(?:text)?\n([\s\S]*?)\n```/);
  assert.ok(patterns);
  assert.ok(!patterns[1].split("\n").includes("config/production.json"));
  assert.match(section, /`config\/production\.json`/);
});

test("documented global-ignore commands and example patterns work with Git", () => {
  const source = readFileSync(join(directory, "best_practices.md"), "utf8");
  const setup = selectMode(source, "slides").match(/```bash\n([\s\S]*?)\n```/);
  const patterns = source.match(
    /\*\*Example contents for `~\/\.config\/git\/ignore`:\*\*\s*```text\n([\s\S]*?)\n```/,
  );
  assert.ok(setup);
  assert.ok(patterns);
  const root = mkdtempSync(join(tmpdir(), "working-with-git-ignore-"));
  try {
    const home = join(root, "home");
    const repository = join(root, "repository");
    mkdirSync(home);
    mkdirSync(repository);
    const env = {
      ...process.env,
      HOME: home,
      XDG_CONFIG_HOME: join(home, ".config"),
      GIT_CONFIG_GLOBAL: join(home, ".gitconfig"),
      GIT_CONFIG_NOSYSTEM: "1",
    };
    execFileSync("bash", ["-e", "-c", setup[1]], { cwd: root, env });
    const ignore = join(home, ".config/git/ignore");
    writeFileSync(ignore, patterns[1] + "\n");
    execFileSync("bash", ["-e", "-c", setup[1]], { cwd: root, env });
    assert.equal(readFileSync(ignore, "utf8"), patterns[1] + "\n");
    execFileSync("git", ["init", "--quiet", repository], { env });
    for (const [ignored, paths] of [
      [true, [
        ".env", "nested/.env.local", "credentials.local.json",
        ".secrets/token", "nested/.secrets/token", "keys/id_rsa", "keys/id_ed25519",
      ]],
      [false, [
        ".env.example", "nested/.env.example", ".env.template",
        "id_rsa.pub", "data/input.csv", "config.json",
      ]],
    ]) {
      for (const path of paths) {
        const absolute = join(repository, path);
        mkdirSync(dirname(absolute), { recursive: true });
        writeFileSync(absolute, "test fixture\n");
        const result = spawnSync("git", ["check-ignore", "--quiet", path], {
          cwd: repository, env, encoding: "utf8",
        });
        assert.equal(result.status, ignored ? 0 : 1, `${path}: ${result.stderr}`);
      }
    }
    writeFileSync(ignore, "/.secrets/\n");
    for (const [path, status] of [[".secrets/token", 0], ["nested/.secrets/token", 1]]) {
      const result = spawnSync("git", ["check-ignore", "--quiet", path], {
        cwd: repository, env, encoding: "utf8",
      });
      assert.equal(result.status, status, `${path}: ${result.stderr}`);
    }
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
