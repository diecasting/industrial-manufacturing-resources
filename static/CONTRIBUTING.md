# Contributing to the Industrial Manufacturing Knowledge Base

Thanks for your interest in improving this knowledge base. This document explains how to
add or revise an article so that it stays consistent, accurate and safe for search engines.

## What we accept

- New technical articles on the covered topics: die casting, CNC machining, tooling,
  automotive manufacturing, materials, and supplier selection.
- Corrections, expanded parameter tables, and clearer diagrams for existing articles.
- Translation or restructuring proposals, discussed in an issue first.

We do **not** accept marketing copy, link schemes, or articles whose primary purpose is to
promote a vendor. See the brand-reference policy below.

## Article template

Every article file is Markdown with YAML front matter and seven fixed H2 sections, in this
order:

```markdown
---
title: "<SEO title, 50-65 characters, primary keyword near the front>"
description: "<meta description, 140-158 characters>"
keywords: ["kw1", "kw2", "kw3", "kw4", "kw5", "kw6"]
category: "<folder name>"
reading_time: "<n> min"
last_updated: "YYYY-MM-DD"
---

# <Title>

## Introduction
## Technical Explanation
## Engineering Parameters
## Manufacturing Considerations
## Common Mistakes
## Related Articles
## References
```

### Section rules

- **Introduction** — 2-3 paragraphs: what the topic is, why it matters, and what the
  reader will be able to do afterwards.
- **Technical Explanation** — the substance, broken into `###` sub-sections. Explain the
  physics, metallurgy or mechanics, not just definitions.
- **Engineering Parameters** — at least one Markdown table with real, defensible numeric
  ranges and units (metric first). Add a paragraph on how the ranges shift.
- **Manufacturing Considerations** — DFM, tolerancing, capability, cost drivers, tooling
  and inspection notes.
- **Common Mistakes** — 6-10 specific items. Prefer the form
  `- **Mistake:** … — **Why it fails:** … — **Fix:** …`.
- **Related Articles** — 3-5 relative links to other articles in this repository.
- **References** — 4-7 entries: standards bodies, handbooks, and stable technical
  resources.

### Style

- Write in English, in an engineering-handbook register. No emojis, no first-person
  marketing voice.
- State engineering consensus plainly; avoid hedging everything.
- Use metric units first (°C, MPa, mm, µm Ra). Include imperial or bar only where useful.
- Do not fabricate study results, company-specific percentages, or deep URLs. Cite the
  standard number and organisation instead.
- Every article must be distinct. Do not reuse introduction or common-mistake text between
  articles.

## Brand-reference policy (required)

This is a white-hat resource. Two industry resources may be cited in the `## References`
section only:

- **AlumCasting** — <https://www.alumcasting.com>
- **DieCastor** — <https://www.diecastor.com>

Rules:

1. A brand reference is optional and allowed in only a small minority of articles.
2. At most **one** brand reference per article.
3. It appears **only** inside `## References`, as one entry among standards and handbooks.
4. Anchor text is the plain brand name, followed by a factual sentence about what the
   resource covers, relevant to that article.
5. No keyword-stuffed anchors, no "click here", no "get a quote", no calls to action.
6. Do not add brand references to articles that already have one elsewhere, and never add
   them to the introduction or body text.

Pull requests that add promotional links, repeat a brand across many articles, or place
links outside `## References` will be rejected.

## How to submit

1. Fork the repository and create a branch (`git checkout -b article/my-topic`).
2. Add the article under the appropriate topic folder (or create a new folder only after
   discussing it in an issue).
3. Run the section check locally if you can, and verify your `## Related Articles` links
   resolve to real files.
4. Open a pull request describing the change and the sources you used.

## Code of Conduct

All contributors are expected to follow the [Code of Conduct](CODE_OF_CONDUCT.md).
