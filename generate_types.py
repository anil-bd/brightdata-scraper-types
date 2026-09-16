#!/usr/bin/env python3
"""
Generate a TypeScript types package from the Bright Data scraper catalog.

Coding agents do not browse a catalog. They write code in an editor that already
knows the shape of the data. This turns each scraper's input_schema and
output_fields into interfaces, carrying the field descriptions through as JSDoc
so they surface in the autocomplete popup.

Types only. No runtime dependency, nothing to keep in sync at request time.
"""
import json, re, sys, os, shutil

# The sample. The generator handles all 1,078, this keeps the repo readable.
SAMPLE = [
    "gd_l7q7dkf244hwjntr0",    # Amazon products
    "gd_le8e811kzy4ggddlq",    # Amazon Reviews
    "gd_l1viktl72bvl7bjuj0",   # LinkedIn people profiles
    "gd_l1vikfnt1wgvvqz95w",   # LinkedIn company information
    "gd_l1vikfch901nx3by4",    # Instagram Profiles
    "gd_lu702nij2f790tmv9h",   # TikTok Posts
    "gd_lk56epmy2i5g7lzu0k",   # YouTube Videos
    "gd_lfqkr8wm13ixtbd8f5",   # Zillow properties listing
    "gd_m8ebnr0q2qlklc02fz",   # Google Maps full information
    "gd_lyrexgxc24b3d4imjt",   # Github repository
    "gd_mk57m0301khq4jmsul",   # npmjs
    "gd_l1vijqt9jfj7olije",    # Crunchbase companies
]

TS_TYPE = {
    "text": "string", "url": "string", "date": "string", "country": "string",
    "image": "string", "image_url": "string", "string": "string",
    "html2markdown": "string", "html2text": "string", "html2html": "string",
    "html2ldjson": "string", "warning": "string", "warning_code": "string",
    "error": "string", "error_code": "string",
    "number": "number", "price": "number",
    "boolean": "boolean",
    "array": "unknown[]",
    "object": "Record<string, unknown>",
}
IDENT = re.compile(r"^[A-Za-z_$][A-Za-z0-9_$]*$")
RESERVED = {"default", "delete", "function", "class", "new", "return", "type"}


def ts_type(t):
    return TS_TYPE.get((t or "").lower(), "unknown")


def kebab(s):
    s = re.sub(r"[^A-Za-z0-9]+", "-", (s or "").strip()).strip("-").lower()
    return re.sub(r"-+", "-", s) or "scraper"


def pascal(s):
    return "".join(p[:1].upper() + p[1:] for p in kebab(s).split("-"))


def key(name):
    name = str(name)
    return name if IDENT.match(name) and name not in RESERVED else json.dumps(name)


def jsdoc(desc, indent="  "):
    if not desc:
        return ""
    text = " ".join(str(desc).split())
    if len(text) > 200:
        text = text[:197] + "..."
    return f"{indent}/** {text} */\n"


def fields_block(fields, required_only=False, optional_all=True):
    seen, out = set(), []
    for f in fields or []:
        if not isinstance(f, dict) or not f.get("name"):
            continue
        n = str(f["name"])
        if n in seen:
            continue
        seen.add(n)
        req = bool(f.get("required"))
        mark = "" if (required_only and req) else "?"
        out.append(jsdoc(f.get("description")) + f"  {key(n)}{mark}: {ts_type(f.get('type'))};")
    return "\n".join(out) or "  [field: string]: unknown;"


def emit_scraper(rec):
    title = rec.get("name") or rec["id"]
    name = kebab(title)
    cls = pascal(title)
    scrapers = rec.get("scrapers") or {}
    lines = [
        "// Generated from the Bright Data scraper catalog. Do not edit by hand.",
        f"// scraper: {title}",
        f"// id:      {rec['id']}",
        f"// domain:  {rec.get('domain')}",
        "",
    ]

    # one input interface per collection method
    inputs = []
    for t, spec in scrapers.items():
        if not isinstance(spec, dict):
            continue
        iface = f"{cls}{pascal(t)}Input"
        inputs.append((t, iface))
        lines += [
            f"/** Input for `{title}` via `{t}`. */",
            f"export interface {iface} {{",
            fields_block(spec.get("input_schema"), required_only=True),
            "}",
            "",
        ]

    # outputs are merged across methods: one row shape per scraper
    merged, seen = [], set()
    for spec in scrapers.values():
        if isinstance(spec, dict):
            for f in spec.get("output_fields") or []:
                if isinstance(f, dict) and f.get("name") and f["name"] not in seen:
                    seen.add(f["name"])
                    merged.append(f)
    lines += [
        f"/** One row returned by `{title}`. Fields are optional because a scrape",
        " *  can legitimately come back without them. */",
        f"export interface {cls}Output {{",
        fields_block(merged),
        "}",
        "",
    ]
    if inputs:
        union = " | ".join(i for _, i in inputs)
        lines += [f"export type {cls}Input = {union};", ""]
    return name, cls, [t for t, _ in inputs], "\n".join(lines)


def build(src, out="packages/scraper-types", ids=None):
    records = {r["id"]: r for r in json.load(open(src))}
    ids = ids or SAMPLE
    missing = [i for i in ids if i not in records]
    if missing:
        sys.exit(f"not in catalog: {missing}")

    if os.path.isdir(out):
        shutil.rmtree(out)
    os.makedirs(f"{out}/types", exist_ok=True)

    # Four scraper names collide across the catalog (sephora-products appears on
    # both sephora.fr and sephora.com, and three more like it). Disambiguate with
    # the domain, then with the id, so no generated file is silently overwritten.
    taken, chosen = {}, {}
    counts = {}
    for sid in ids:
        counts[kebab(records[sid].get("name") or sid)] = counts.get(kebab(records[sid].get("name") or sid), 0) + 1
    for sid in ids:
        rec = records[sid]
        base = kebab(rec.get("name") or sid)
        name = base
        if counts[base] > 1:
            host = kebab((rec.get("domain") or "").replace("www.", "").rsplit(".", 1)[0])
            name = f"{base}-{host}"
        while name in taken:
            name = f"{base}-{sid[-6:]}"
        taken[name] = sid
        chosen[sid] = name

    meta = []
    for sid in ids:
        rec = records[sid]
        name, cls, types, body = emit_scraper(rec)
        name = chosen[sid]
        open(f"{out}/types/{name}.d.ts", "w").write(body)
        meta.append({"id": sid, "name": name, "cls": cls, "title": rec.get("name"),
                     "domain": (rec.get("domain") or "").replace("www.", ""),
                     "types": types})

    # index.d.ts: the union, the maps, and the two helper types that make this
    # package worth installing.
    L = ["// Generated from the Bright Data scraper catalog. Do not edit by hand.", ""]
    for m in meta:
        L.append(f"import type {{ {m['cls']}Output, {m['cls']}Input }} from './types/{m['name']}';")
    L.append("")
    for m in meta:
        L.append(f"export type {{ {m['cls']}Output, {m['cls']}Input }};")
    L += ["", "/** Every scraper in this package, by its short name. */",
          "export type ScraperName =", ]
    L += [f"  | '{m['name']}'" for m in meta]
    L[-1] += ";"
    L += ["", "export interface ScraperMeta {",
          "  /** The catalog id you pass to the Bright Data API. */",
          "  readonly id: string;",
          "  readonly name: ScraperName;",
          "  /** Human readable name as it appears in the catalog. */",
          "  readonly title: string;",
          "  /** Canonical host this scraper targets. */",
          "  readonly domain: string;",
          "  /** Collection methods this scraper supports. */",
          "  readonly types: readonly string[];",
          "}", "",
          "/** Row shape returned by a scraper. */",
          "export type ScraperOutput<N extends ScraperName> = OutputByName[N];", "",
          "/** Accepted input for a scraper. */",
          "export type ScraperInput<N extends ScraperName> = InputByName[N];", "",
          "interface OutputByName {"]
    L += [f"  '{m['name']}': {m['cls']}Output;" for m in meta]
    L += ["}", "", "interface InputByName {"]
    L += [f"  '{m['name']}': {m['cls']}Input;" for m in meta]
    L += ["}", "",
          "export declare const SCRAPERS: { readonly [N in ScraperName]: ScraperMeta };", "",
          "/** Scrapers that target a host. Accepts 'www.' prefixes and full URLs. */",
          "export declare function byDomain(hostOrUrl: string): ScraperMeta[];", ""]
    open(f"{out}/index.d.ts", "w").write("\n".join(L))

    # index.js: the only runtime code, the lookup table
    js = ["// Generated from the Bright Data scraper catalog. Do not edit by hand.",
          "'use strict';", "", "const SCRAPERS = {"]
    for m in meta:
        js.append(f"  '{m['name']}': {json.dumps({'id': m['id'], 'name': m['name'], 'title': m['title'], 'domain': m['domain'], 'types': m['types']})},")
    js += ["};", "",
           "function canon(hostOrUrl) {",
           "  let h = String(hostOrUrl || '').trim().toLowerCase();",
           "  h = h.replace(/^https?:\\/\\//, '').split('/')[0].split(':')[0];",
           "  return h.replace(/^www\\./, '');",
           "}", "",
           "function byDomain(hostOrUrl) {",
           "  const host = canon(hostOrUrl);",
           "  return Object.values(SCRAPERS).filter((s) => s.domain === host);",
           "}", "",
           "module.exports = { SCRAPERS, byDomain };", ""]
    open(f"{out}/index.js", "w").write("\n".join(js))

    pkg = {
        "name": "@anil-bd/scraper-types",
        "version": "0.1.0",
        "description": "TypeScript types for Bright Data scrapers, generated from the scraper catalog.",
        "main": "index.js",
        "types": "index.d.ts",
        "files": ["index.js", "index.d.ts", "types/"],
        "keywords": ["bright-data", "web-scraping", "types", "typescript"],
        "license": "MIT",
        "repository": {"type": "git", "url": "git+https://github.com/anilkk/brightdata-scraper-types.git"},
        "publishConfig": {"access": "public"},
    }
    json.dump(pkg, open(f"{out}/package.json", "w"), indent=2)

    print(f"generated {len(meta)} scrapers into {out}")
    for m in meta:
        print(f"  {m['name']:<28} {m['domain']:<16} {m['id']}")


if __name__ == "__main__":
    build(sys.argv[1] if len(sys.argv) > 1 else "api-response.json")
