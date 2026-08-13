import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const requiredPages = [
  'index.html',
  'projects.html',
  'works.html',
  'universe.html',
  'library.html',
  'resume.html',
];
const requiredRuntime = ['app.js', 'ascii-ui.js', 'ascii-ui.css', 'styles.css'];

const fail = (message) => {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
};
const pass = (message) => console.log(`PASS: ${message}`);

for (const file of [...requiredPages, ...requiredRuntime]) {
  if (!fs.existsSync(path.join(root, file))) fail(`missing required file: ${file}`);
  else pass(`exists ${file}`);
}

for (const page of requiredPages) {
  const source = fs.readFileSync(path.join(root, page), 'utf8');
  if (!source.includes('app.js')) fail(`${page} does not load app.js; global ASCII layer would not boot`);
  else pass(`${page} loads app.js`);
}

const app = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
if (!app.includes('ascii-ui.css')) fail('app.js does not load ascii-ui.css');
else pass('app.js loads ascii-ui.css');
if (!app.includes('ascii-ui.js')) fail('app.js does not load ascii-ui.js');
else pass('app.js loads ascii-ui.js');

const renderer = fs.readFileSync(path.join(root, 'ascii-ui.js'), 'utf8');
for (const forbidden of ['.replaceWith(', '.remove()', 'outerHTML =']) {
  if (renderer.includes(forbidden)) fail(`ASCII renderer contains destructive DOM operation: ${forbidden}`);
  else pass(`renderer avoids ${forbidden}`);
}

// Validate relative href targets that look like repository files. This deliberately
// ignores remote, mailto, tel, javascript, data, and in-page fragment links.
const internalTargets = new Set();
for (const page of requiredPages) {
  const source = fs.readFileSync(path.join(root, page), 'utf8');
  for (const match of source.matchAll(/href=["']([^"']+)["']/g)) {
    const href = match[1].trim();
    if (!href || href.startsWith('#') || /^(https?:|mailto:|tel:|javascript:|data:)/i.test(href)) continue;
    const clean = href.split('#')[0].split('?')[0];
    if (!clean) continue;
    internalTargets.add(clean);
  }
}

for (const target of internalTargets) {
  const local = path.normalize(path.join(root, target));
  if (!local.startsWith(root)) {
    fail(`relative link escapes repository root: ${target}`);
    continue;
  }
  if (!fs.existsSync(local)) fail(`broken internal href target: ${target}`);
  else pass(`internal href exists ${target}`);
}

if (!process.exitCode) {
  console.log('\nASCII PORTFOLIO SMOKE TEST: PASS');
}
