#!/usr/bin/env node
/**
 * Counts how often each design token is referenced in src/, and writes the
 * result to src/data/tokenUsage.json for the /system page to display.
 *
 * This has to run at build time: the page renders in a browser, which has no
 * view of the source tree. A hand-typed count would rot the same way the
 * /library palette did.
 *
 *   npm run tokens
 *
 * It is a static text scan, so it sees literal references only. A token
 * reached through a variable is invisible to it, and the count excludes this
 * script and the /system page itself.
 */

const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, '..', 'src');
const OUT = path.join(SRC, 'data', 'tokenUsage.json');

// the reference page would otherwise count itself for every token it prints
const SKIP = ['pages/DesignSystem.js', 'theme.js'];

const walk = (dir, files = []) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'stories') walk(full, files);
    } else if (/\.jsx?$/.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
};

const countAll = (haystack, needle) => {
  if (!needle) return 0;
  // escape the pattern so brackets and dots are literal
  const escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return (haystack.match(new RegExp(escaped, 'g')) || []).length;
};

const files = walk(SRC)
  .filter((f) => !SKIP.some((skip) => f.endsWith(skip)))
  .map((f) => ({ path: f, body: fs.readFileSync(f, 'utf8') }));

const sources = files.map((f) => f.body).join('\n');

const usage = {
  fontSizes: {},
  colors: {},
  layout: {},
  text: {},
  space: {},
  gap: {},
  maxWidth: 0,
};

// fontSize={[n]} and the named alias
const FONT_ALIASES = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'];
for (let i = 0; i < 7; i += 1) {
  usage.fontSizes[i] =
    countAll(sources, `fontSize={[${i}]}`) +
    countAll(sources, `fontSize="${i}"`) +
    countAll(sources, `fontSizes.${FONT_ALIASES[i]}`);
}

// p/m props in every direction. Both the shorthands and the longhands that
// styled-system also accepts - `padding={...}` counts just as much as `p`,
// and leaving the longhands out undercounted this by a third.
const SPACE_PROPS = [
  'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py',
  'm', 'mt', 'mr', 'mb', 'ml',
  'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft',
  'paddingX', 'paddingY',
  'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft',
  'marginX', 'marginY',
];

const COLORS = ['nav10','nav20','nav30','yel10','yel20','yel30','gre10','gre20',
  'blk00','blk10','blk20','blk30','blk40','blk50','blk60','blk70'];
for (const name of COLORS) {
  usage.colors[name] =
    countAll(sources, `'${name}'`) +
    countAll(sources, `"${name}"`) +
    countAll(sources, `colors.${name}`);
}

for (const name of ['fullHeight','fitContent','fontStack']) {
  usage.layout[name] = countAll(sources, `layout.${name}`);
}

// A step is reached two ways: as a theme read inside a styled component, and
// as a styled-system prop on a call site. Both are references to the token.
for (const step of ['none', 'tight', 'snug', 'loose']) {
  const asProp = SPACE_PROPS.reduce(
    (total, prop) =>
      total + countAll(sources, `${prop}="${step}"`) + countAll(sources, `${prop}='${step}'`),
    0
  );
  usage.space[step] = countAll(sources, `layout.space.${step}`) + asProp;
  usage.gap[step] = countAll(sources, `layout.gap.${step}`);
}

// maxWidth sits at the root of the theme, not inside layout
usage.maxWidth = countAll(sources, 'theme.maxWidth') + countAll(sources, 'base.maxWidth');

// Type tokens are reached as props on <Type>, plus direct theme reads for
// the UI chrome that takes a size without the responsive step-up.
for (const size of ['S', 'M', 'L']) {
  usage.text[`size.${size}`] =
    countAll(sources, `size="${size}"`) + countAll(sources, `text.size.${size}`);
}
for (const weight of ['reg', 'bold']) {
  usage.text[`weight.${weight}`] =
    countAll(sources, `weight="${weight}"`) + countAll(sources, `text.weight.${weight}`);
}
for (const lead of ['tight', 'snug', 'loose']) {
  usage.text[`leading.${lead}`] =
    countAll(sources, `leading="${lead}"`) + countAll(sources, `text.leading.${lead}`);
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, `${JSON.stringify(usage, null, 2)}\n`);

const total = Object.values(usage).reduce(
  (sum, group) =>
    sum +
    (typeof group === 'number' ? group : Object.values(group).reduce((a, b) => a + b, 0)),
  0
);
console.log(`token-usage: ${total} references across ${Object.keys(usage).length} scales -> ${path.relative(process.cwd(), OUT)}`);
