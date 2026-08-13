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
  'publications.html',
  'timeline.html',
  'proof.html',
  'offerings.html',
];
const requiredRuntime = ['app.js', 'os.js', 'ascii-ui.js', 'ascii-ui.css', 'styles.css'];
const requiredRecords = [
  'README.md',
  'REPOSITORY_UNIVERSE.md',
  'PUBLICATIONS.md',
  'TIMELINE.md',
  'PROOF_LEDGER.md',
  'OFFERINGS.md',
  'EVIDENCE.md',
  'PROVENANCE.md',
  'ARTIFACTS.sha256',
  'CITATION.cff',
  'publications/README.md',
  'publications/COSMOS_CST_UNIVERSE_MANUAL_READER.md',
  'publications/ALIEN_CONDUCTOR_ENGINEERING_BOOK_READER.md',
  'publications/HEHS_V2_ENGINEERING_GUIDE.md',
  'publications/HEHS_V1_TO_V2_CORRECTION_LEDGER.md',
  'publications/HEARTLIGHT_PRODUCT_BRIEF.md',
  'publications/COSMOS_MEDIA_ENGINE_BRIEF.md',
];

const fail = (message) => {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
};
const pass = (message) => console.log(`PASS: ${message}`);

for (const file of [...requiredPages, ...requiredRuntime, ...requiredRecords]) {
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
for (const route of ['publications.html', 'timeline.html', 'proof.html', 'offerings.html']) {
  if (!app.includes(route)) fail(`app.js command/navigation layer missing ${route}`);
  else pass(`app.js exposes ${route}`);
}

const renderer = fs.readFileSync(path.join(root, 'ascii-ui.js'), 'utf8');
for (const forbidden of ['.replaceWith(', '.remove()', 'outerHTML =']) {
  if (renderer.includes(forbidden)) fail(`ASCII renderer contains destructive DOM operation: ${forbidden}`);
  else pass(`renderer avoids ${forbidden}`);
}
for (const label of ['PUBLICATIONS', 'TIMELINE', 'PROOF', 'OFFERINGS']) {
  if (!renderer.includes(label)) fail(`ASCII renderer missing record-page label ${label}`);
  else pass(`ASCII renderer supports ${label}`);
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

const expectedHashes = [
  '26292a4e63b3fa5838865fc384682049a93a0e159f72359ec2977be4da46a36a',
  'eee3cb7bac40d20b1481c1a88701a58dabe6739cb151e058c23ba8cbb04d450f',
  '6628ae27052f7ad57ac971a2d3d78ec6aa732f42bcbd12180ca7e38f0796566c',
  '2b316c4d1cc31fce51b70fc2a3fbd555e0569517a22a937f59505bd3b6c0b7e6',
  'b0e572dcc334aca09396695583075080f4dfe953b42e964fce5964b9fb8033a3',
];
const hashManifest = fs.readFileSync(path.join(root, 'ARTIFACTS.sha256'), 'utf8');
for (const digest of expectedHashes) {
  if (!hashManifest.includes(digest)) fail(`artifact manifest missing expected digest ${digest}`);
  else pass(`artifact digest present ${digest.slice(0, 12)}…`);
}

const universe = fs.readFileSync(path.join(root, 'REPOSITORY_UNIVERSE.md'), 'utf8');
for (const repo of ['COSMOS-HEARTLIGHT', 'Cosmic-quantum-video-picture-generator-', 'hermes-agent']) {
  if (!universe.includes(repo)) fail(`repository universe missing ${repo}`);
  else pass(`repository universe includes ${repo}`);
}
if (!/24 public repositories/i.test(universe)) fail('repository universe does not declare 24 public repositories');
else pass('repository universe declares 24 public repositories');
if (!/fork\/upstream/i.test(universe)) fail('repository universe does not preserve fork/upstream provenance boundary');
else pass('fork/upstream provenance boundary is visible');

const publications = fs.readFileSync(path.join(root, 'PUBLICATIONS.md'), 'utf8');
for (const phrase of ['claims follow instrumentation', 'HISTORICAL / SUPERSEDED', 'SHA-256']) {
  if (!publications.toLowerCase().includes(phrase.toLowerCase())) fail(`publication index missing boundary phrase: ${phrase}`);
  else pass(`publication boundary present: ${phrase}`);
}

if (!process.exitCode) {
  console.log('\nPORTFOLIO OS + ASCII + PUBLIC RECORD SMOKE TEST: PASS');
}
