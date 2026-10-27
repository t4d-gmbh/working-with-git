/*
 * SPDX-FileCopyrightText: 2023-2026 Jonas I. Liechti <j-i-l@t4d.ch>
 *
 * SPDX-License-Identifier: GPL-3.0-only
 */

/** Run with: node --test tests/slide-layout.test.cjs */
const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
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
    /{% if build == "slides" %}\s*<div class="slide-frame">\s*<div id=['"]rescaled-text['"][^>]*>/,
  );
  assert.match(css, /\.slide-frame\s*\{[^}]*width:\s*95%;[^}]*\}/);
  assert.match(css, /\.slide-frame\s*\{[^}]*height:\s*80vh;[^}]*\}/);
});

test("only the eleven cycle-status slide documents receive the numbering marker", () => {
  const index = readFileSync(
    join(__dirname, "../source/content/update_cycle/index.md"), "utf8",
  );
  const toctree = index.match(/```\{toctree\}\n([\s\S]*?)\n```/);
  assert.ok(toctree);
  const expected = [...toctree[1].matchAll(/^\.\/(\S+)$/gm)]
    .map(match => `content/update_cycle/${match[1]}`);
  assert.equal(expected.length, 11);
  const scope = template.match(
    /{% if pagename in \[([\s\S]*?)\] %} class="cycle-status-slide"{% endif %}/,
  );
  assert.ok(scope, "Use an explicit allowlist, not a chapter-wide path prefix");
  const actual = [...scope[1].matchAll(/"([^"]+)"/g)].map(match => match[1]);
  assert.deepEqual(actual, expected);
  for (const excluded of [
    "content/update_cycle/index", "content/update_cycle/future_step", "content/gitignore/syntax",
  ]) {
    assert.ok(!actual.includes(excluded), excluded);
  }
  const slides = template.match(/{% if build == "slides" %}\s*<div class="slide-frame">([\s\S]*?)\n{% else %}/);
  assert.ok(slides);
  assert.ok(slides[1].includes(scope[0]), "The marker must be slide-only and inside the body wrapper");
  assert.match(slides[1], /<div id='rescaled-text'{% if pagename in/);
  assert.equal((template.match(/cycle-status-slide/g) || []).length, 1);
});

test("the numbering rule targets only the first main heading's generated number", () => {
  const rules = [...css.matchAll(/([^{}]+)\{([^{}]*)\}/g)]
    .filter(match => match[1].includes(".section-number"));
  assert.equal(rules.length, 1);
  const selector = rules[0][1].replace(/\/\*[\s\S]*?\*\//g, "").trim();
  assert.equal(
    selector,
    ".cycle-status-slide > section:first-of-type > :is(h1, h2, h3, h4, h5, h6):first-child > .section-number",
  );
  assert.equal(rules[0][2].trim(), "display: none;");
});
