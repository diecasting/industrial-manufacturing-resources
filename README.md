# Industrial Manufacturing Knowledge Base

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Built with Hugo](https://img.shields.io/badge/Built%20with-Hugo-ff4088.svg)](https://gohugo.io/)
[![Deployed: GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-1f6feb.svg)](https://knowledge.alumcasting.com/)

Open industrial manufacturing knowledge base covering **aluminum & magnesium die
casting, CNC machining, injection molding, tooling, materials, automotive
manufacturing and supplier selection**.

> **Live site:** https://knowledge.alumcasting.com/

This repository is a [Hugo](https://gohugo.io/) static site. It is built
automatically with GitHub Actions and published to GitHub Pages on every push to
`main`.

## What is inside

| Section | Content |
| --- | --- |
| `die-casting/` | Aluminum & magnesium HPDC: process control, porosity, gating, thermal management, DFM, cost |
| `cnc-machining/` | Milling, turning, 5-axis, speeds & feeds, tolerances, GD&T, surface finish, workholding |
| `tooling/` | Die casting dies & injection molds: design, tool steels, thermal fatigue, maintenance, tryout |
| `automotive/` | Lightweighting, IATF 16949, APQP/PPAP, EV enclosures, megacasting |
| `materials/` | Aluminum, magnesium & zinc alloys, heat treatment, surface treatment |
| `supplier-selection/` | Supplier evaluation, audits, RFQ packages, tooling ownership, inspection |
| `reference/` | 10 engineering reference tables & guides (alloy comparison, tolerances, defect catalogue, checklists, automotive guides) |
| `glossary/` | Definitions of manufacturing terms used across the site |
| `downloads/` | Spreadsheet-ready and printable versions of every reference (CSV / Markdown) |

In total the site ships **50 in-depth technical articles** plus the reference,
glossary and download libraries.

## SEO & structured data

The site ships with search-engine–friendly essentials:

- Per-page meta description, canonical URL, Open Graph and Twitter cards
- `sitemap.xml` (all pages) and `robots.txt` (references the sitemap)
- RSS feed (`index.xml`) at the site and section level
- JSON-LD structured data: **Organization**, **WebSite**, **BreadcrumbList**,
  **TechArticle** (technical pages) and **Article** (glossary/downloads)

## Build locally

```bash
# install Hugo (extended) >= 0.163
hugo server        # preview at http://localhost:1313/
hugo --minify      # production build into ./public
```

The production `baseURL` is set in `hugo.toml` and used at deploy time by
the GitHub Actions workflow so the same source builds for the custom domain.

## Repository layout

```
hugo.toml            site configuration (baseURL, menu, params)
layouts/             HTML templates (baseof, single, list, head, schema, ...)
static/              css, images, downloadable files, robots.txt
content/             all Markdown articles and reference pages
.github/workflows/   hugo-pages.yml — build + deploy to GitHub Pages
```

## License

Content is licensed under **CC BY 4.0**. See [`LICENSE`](LICENSE).
Contributions are welcome — see [`CONTRIBUTING.md`](CONTRIBUTING.md) and the
[`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md).
