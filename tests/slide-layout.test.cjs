/*
 * SPDX-FileCopyrightText: 2023-2026 Jonas I. Liechti <j-i-l@t4d.ch>
 *
 * SPDX-License-Identifier: GPL-3.0-only
 */

/** Run with: node --test tests/slide-layout.test.cjs */
const assert = require("node:assert/strict");
const { readFileSync, readdirSync } = require("node:fs");
const { join } = require("node:path");
const { test } = require("node:test");

const css = readFileSync(join(__dirname, "../source/_static/slides.css"), "utf8");
const template = readFileSync(
  join(__dirname, "../source/_templates/page.html"),
  "utf8",
);

test("collapsed slide width has an editable responsive maximum", () => {
  assert.match(
    css,
    /:root\s*\{\s*--slide-collapsed-content-max-width:\s*min\(90%,\s*100rem\);\s*\}/,
  );
});

test("only collapsed desktop slides are constrained and horizontally centred", () => {
  assert.match(
    css,
    /@media\s*\(min-width:\s*992px\)\s*\{\s*#pst-primary-sidebar-checkbox:checked\s*~\s*\.bd-container\s+\.slide-frame\s*\{\s*max-width:\s*var\(--slide-collapsed-content-max-width\);\s*margin-inline:\s*auto;\s*\}\s*\}/,
  );
});

test("the slide wrapper uses CSS instead of an overriding inline width", () => {
  assert.match(
    template,
    /{% if build == "slides" %}\s*<div class="slide-frame">\s*<div id=['"]rescaled-text['"]>/,
  );
  assert.match(css, /\.slide-frame\s*\{[^}]*width:\s*95%;[^}]*\}/);
  assert.match(css, /\.slide-frame\s*\{[^}]*height:\s*80vh;[^}]*\}/);
});

test("only the eleven cycle-status headings opt into the shared slide-only styling", () => {
  const sourceDirectory = join(__dirname, "../source");
  const index = readFileSync(
    join(sourceDirectory, "content/update_cycle/index.md"), "utf8",
  );
  const toctree = index.match(/```\{toctree\}\n([\s\S]*?)\n```/);
  assert.ok(toctree);
  const expected = [...toctree[1].matchAll(/^\.\/(\S+)$/gm)]
    .map(match => `content/update_cycle/${match[1]}.md`);
  assert.equal(expected.length, 11);
  const actual = readdirSync(sourceDirectory, { recursive: true })
    .filter(name => name.endsWith(".md"))
    .filter(name => readFileSync(join(sourceDirectory, name), "utf8")
      .includes('class="update-cycle-status"'));
  assert.deepEqual(actual.sort(), [...expected].sort());
  for (const name of expected) {
    const source = readFileSync(join(sourceDirectory, name), "utf8");
    const slideOnly = source.match(/^{% if slide %}\n([\s\S]*?)\n{% endif %}/);
    assert.ok(slideOnly, name);
    assert.match(slideOnly[1], /```\{include\} \.\/_status_heading_style\.inc\n```/);
    const heading = slideOnly[1].match(/^### <span class="update-cycle-status">(.+)<\/span>$/m);
    assert.ok(heading, name);
    assert.equal((heading[1].match(/\{octicon\}`sync;0\.8em`/g) || []).length, 2, name);
    assert.doesNotMatch(source.replace(slideOnly[0], ""), /update-cycle-status|_status_heading_style/);
  }
});

test("the shared fragment hides only the generated number of a marked heading", () => {
  const fragment = readFileSync(
    join(__dirname, "../source/content/update_cycle/_status_heading_style.inc"), "utf8",
  );
  assert.match(fragment, /^```\{raw\} html\n<style>\n[\s\S]*\n<\/style>\n```\n$/);
  const rules = [...fragment.matchAll(/([^{}]+)\{([^{}]*)\}/g)]
    .filter(match => match[1].includes(".section-number"));
  assert.equal(rules.length, 1);
  const selector = rules[0][1].split("<style>\n")[1].trim();
  assert.equal(
    selector,
    ":is(h1, h2, h3, h4, h5, h6):has(> .update-cycle-status) > .section-number",
  );
  assert.equal(rules[0][2].trim(), "display: none;");
});

test("cycle-heading styling no longer depends on the standalone template or stylesheet", () => {
  assert.doesNotMatch(template, /cycle-status-slide|update-cycle-status|content\/update_cycle/);
  assert.doesNotMatch(css, /cycle-status-slide|update-cycle-status|\.section-number/);
});
