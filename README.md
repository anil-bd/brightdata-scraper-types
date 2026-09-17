# brightdata-scraper-types

A POC. Generates TypeScript types from the Bright Data scraper catalog, so a
coding agent writing an integration gets autocomplete, inline field docs and
type checking in the editor.

Package name: `@anil-bd/scraper-types`. Not published. This repo is the argument,
not the product.

## What is generated

For each scraper, from its `input_schema` and `output_fields`:

- one input interface per collection method, with required fields non-optional
- one output interface, with the catalog's field description carried through as
  JSDoc so it appears in the hover and the completion popup
- a `ScraperName` union, a `SCRAPERS` lookup table and a `byDomain()` helper

Types only. The single runtime file is the lookup table.

```ts
import { byDomain, type ScraperOutput } from '@anil-bd/scraper-types';

const [scraper] = byDomain('https://www.amazon.com/dp/B0CHX1W1XY');
//    ^ { id: 'gd_l7q7dkf244hwjntr0', title: 'Amazon products', ... }

type Product = ScraperOutput<'amazon-products'>;
//   107 fields, each with its catalog description attached
```

## Size

| Scope | Files | Packed | Unpacked |
| --- | --- | --- | --- |
| This sample, 12 scrapers | 15 | 17.1 kB | 75 kB |
| Whole catalog, 1,078 scrapers | 1,081 | 380.6 kB | 3.7 MB |

380 kB for the entire catalog, versioned, cached by npm, installed once per
project rather than fetched per session.

## Proof that the autocomplete works

`tools/completions-test.js` asks the TypeScript language service the same two
questions an editor asks: `getCompletionsAtPosition` and
`getQuickInfoAtPosition`. If the entries come back here, VS Code renders them.

```
PASS  Amazon product row offers its catalog fields
      107 completions: about_the_author, all_badges, amazon_choice, asin, ...
PASS  Scraper names complete inside the type argument
      12 completions: amazon-products, amazon-reviews, linkedin-people-profiles, ...
PASS  GitHub repo row offers repo fields, not product fields
      20 completions: breadcrumbs, code, code_language, num_fork, num_issues, ...
PASS  SCRAPERS map completes on scraper name
PASS  Field description from the catalog shows in the hover
      (property) AmazonProductsOutput.brand?: string | undefined
      doc: Product brand
```

`tools/error-check.sh` proves the reverse, that a field that does not exist is
rejected before anything runs:

```
checks/wrong-field.ts(8,14): error TS2339:
  Property 'prodcut_title' does not exist on type 'AmazonProductsOutput'.
```

## The one end-to-end example

`examples/demo/src/run.ts` resolves a URL to a scraper, builds a typed payload,
triggers the scrape, polls the snapshot and prints typed rows. It runs without a
token, in which case it prints the request instead of sending it.

```
$ npx tsx src/run.ts
scraper : Amazon products
id      : gd_l7q7dkf244hwjntr0
methods : collect_by_url, discover_by_keyword, discover_by_category_url, ...
target  : https://www.amazon.com/dp/B0CHX1W1XY

BRIGHTDATA_API_TOKEN is not set, so this is a dry run.

POST https://api.brightdata.com/datasets/v3/trigger?dataset_id=gd_l7q7dkf244hwjntr0&include_errors=true
[ { "url": "https://www.amazon.com/dp/B0CHX1W1XY" } ]
```

Set `BRIGHTDATA_API_TOKEN` and it runs for real. Pass any other URL and
`byDomain()` still resolves it:

```
$ npx tsx src/run.ts https://github.com/anthropics/claude-code
scraper : Github repository
id      : gd_lyrexgxc24b3d4imjt
This example only sends requests for amazon-products. Resolved github-repository, stopping here.
```

## Run it

```bash
python3 generate_types.py catalog-sample.json   # regenerate packages/scraper-types
cd examples/demo && npm install
npx tsc --noEmit -p .                           # types compile
node ../../tools/completions-test.js            # autocomplete assertions
../../tools/error-check.sh                      # bad field is rejected
npx tsx src/run.ts                              # end-to-end example, dry run
```

`catalog-sample.json` holds the 12 scrapers used here. Point the generator at the
full `/scrapers` response to build all 1,078.

## Why types and not a fetch

Writing the demo against generated types caught a wrong field name before a
single request went out. A catalog entry is the contract, and a contract the
editor can check is worth more to a coding agent than one it reads at runtime.

The generator normalises the catalog as it builds: hosts are canonicalised, and
names that collide once slugged are disambiguated by domain and then by id.

## Not done here

- Not published to npm. That needs a name decision and a token.
- No versioning story. A generated package needs to regenerate and republish when
  the catalog changes, and that is the part worth arguing about.
- Python and Go equivalents would come from the same generator.
