#!/usr/bin/env node
/**
 * Proves the autocomplete works, without opening an editor.
 *
 * VS Code, Cursor and every coding agent with a TypeScript language server ask
 * the same API this script asks: getCompletionsAtPosition and
 * getQuickInfoAtPosition. If the entries come back here, they render there.
 */
const fs = require('fs');
const path = require('path');

const DEMO = path.resolve(__dirname, '..', 'examples', 'demo');
const ts = require(path.join(DEMO, 'node_modules', 'typescript'));

const PROBE = path.join(DEMO, 'src', '__probe.ts');
const MARK = '/*<HERE>*/';

const options = {
  target: ts.ScriptTarget.ES2022,
  module: ts.ModuleKind.CommonJS,
  moduleResolution: ts.ModuleResolutionKind.Node10,
  strict: true,
  noEmit: true,
  skipLibCheck: true,
};

function service(files) {
  const host = {
    getScriptFileNames: () => files,
    getScriptVersion: () => '1',
    getScriptSnapshot: (f) =>
      fs.existsSync(f) ? ts.ScriptSnapshot.fromString(fs.readFileSync(f, 'utf8')) : undefined,
    getCurrentDirectory: () => DEMO,
    getCompilationSettings: () => options,
    getDefaultLibFileName: (o) => ts.getDefaultLibFilePath(o),
    fileExists: ts.sys.fileExists,
    readFile: ts.sys.readFile,
    readDirectory: ts.sys.readDirectory,
    directoryExists: ts.sys.directoryExists,
    getDirectories: ts.sys.getDirectories,
  };
  return ts.createLanguageService(host, ts.createDocumentRegistry());
}

function probe(source) {
  const pos = source.indexOf(MARK);
  if (pos < 0) throw new Error('probe marker missing');
  fs.writeFileSync(PROBE, source.replace(MARK, ''));
  const ls = service([PROBE]);
  const completions = ls.getCompletionsAtPosition(PROBE, pos, {}) || { entries: [] };
  const quickInfo = ls.getQuickInfoAtPosition(PROBE, pos - 1);
  // Some sandboxes refuse unlink inside a mounted folder. Blanking the file
  // is just as good, and leaves nothing for tsc to complain about.
  try {
    fs.unlinkSync(PROBE);
  } catch {
    fs.writeFileSync(PROBE, 'export {};\n');
  }
  return {
    entries: completions.entries.map((e) => e.name),
    quickInfo: quickInfo
      ? {
          type: ts.displayPartsToString(quickInfo.displayParts),
          doc: ts.displayPartsToString(quickInfo.documentation || []),
        }
      : null,
  };
}

let failed = 0;
function check(label, got, expected) {
  const missing = expected.filter((e) => !got.includes(e));
  const ok = missing.length === 0;
  if (!ok) failed++;
  console.log(`  ${ok ? 'PASS' : 'FAIL'}  ${label}`);
  console.log(`        ${got.length} completions, first 12: ${got.slice(0, 12).join(', ')}`);
  if (!ok) console.log(`        missing: ${missing.join(', ')}`);
}

console.log('Autocomplete, asked the same way an editor asks\n');

// 1. field completions on a scraper row
let r = probe(`
import type { ScraperOutput } from '@anil-bd/scraper-types';
const row: ScraperOutput<'amazon-products'> = {};
row.${MARK}
`);
check('Amazon product row offers its catalog fields', r.entries,
  ['title', 'brand', 'final_price', 'currency', 'asin']);

// 2. the scraper name union completes inside the string literal
r = probe(`
import type { ScraperOutput } from '@anil-bd/scraper-types';
type X = ScraperOutput<'${MARK}'>;
`);
check('Scraper names complete inside the type argument', r.entries,
  ['amazon-products', 'github-repository', 'linkedin-people-profiles', 'npmjs']);

// 3. a different scraper gives a different shape, so the types are real
r = probe(`
import type { ScraperOutput } from '@anil-bd/scraper-types';
const repo: ScraperOutput<'github-repository'> = {};
repo.${MARK}
`);
check('GitHub repo row offers repo fields, not product fields', r.entries,
  ['num_stared', 'code_language', 'num_pull_requests']);
if (r.entries.includes('final_price')) {
  console.log('  FAIL  shapes leaked between scrapers');
  failed++;
}

// 4. SCRAPERS map keys complete
r = probe(`
import { SCRAPERS } from '@anil-bd/scraper-types';
SCRAPERS['${MARK}'];
`);
check('SCRAPERS map completes on scraper name', r.entries, ['amazon-reviews', 'tiktok-posts']);

// 5. the catalog field description reaches the popup
const withDoc = probe(`
import type { ScraperOutput } from '@anil-bd/scraper-types';
const row: ScraperOutput<'amazon-products'> = {};
row.brand${MARK}
`);
const doc = withDoc.quickInfo && withDoc.quickInfo.doc;
const okDoc = Boolean(doc && doc.length > 0);
if (!okDoc) failed++;
console.log(`  ${okDoc ? 'PASS' : 'FAIL'}  Field description from the catalog shows in the hover`);
console.log(`        ${withDoc.quickInfo ? withDoc.quickInfo.type : 'no quickinfo'}`);
console.log(`        doc: ${doc || '(none)'}`);

console.log('');
process.exit(failed ? 1 : 0);
