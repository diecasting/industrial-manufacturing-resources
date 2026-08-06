---
title: "DFM Checklist: Design for Manufacture of Cast and Machined Parts"
description: "Design for manufacture checklist for cast and machined aluminium parts: wall thickness, draft, fillets, hole depth limits, tolerances, setups and standard tools."
keywords: ["DFM checklist", "design for manufacture", "die casting DFM", "machined part design"]
date: 2026-08-06
category: "reference"
reading_time: "7 min"
---

## Overview

Design for Manufacture (DFM) is the discipline of shaping a part so that it can be produced reliably and economically by the intended process. For aluminium high-pressure die castings (HPDC) followed by CNC machining, most cost and scrap is locked in at the drawing stage. This checklist gives the concrete numeric rules reviewers and designers use, and points to deeper process guidance in [Die Casting DFM Guidelines]({{< relref "../die-casting/die-casting-dfm-guidelines.md" >}}) and [CNC DFM Cost Reduction]({{< relref "../cnc-machining/cnc-dfm-cost-reduction.md" >}}).

## Casting Wall Thickness

- **Aluminium HPDC wall thickness 1.5–4 mm** in the as-cast sections. *Why:* too thin freezes before fill; too thick sinks and pores. *How:* bias toward 2.0–3.0 mm for structural zones.
- **Minimum practical wall 0.8–1.2 mm** only where necessary, with gating support. *Why:* below ~0.8 mm fill becomes unstable and scrap climbs.
- **Avoid thin walls under 0.8 mm** entirely on aluminium. *Note:* such features usually belong on a stamped or MIM part, not a casting.
- **Gradual thickness transitions** (taper or fillet) instead of sudden steps. *Why:* reduces hot-spot shrinkage and local stress.

## Draft and Release

- **External draft 1–3°**, **internal draft 2–5°**. *Why:* lets the part eject without dragging or scuffing the die.
- **Increase draft on textured or long cores.** *Note:* every added degree of texture finish needs roughly +1° of draft.
- **Avoid undercuts** that require side-actions or lost cores. *Why:* each slide adds cost, cycle time, and a maintenance point.

## Radii, Fillets, and Corners

- **Internal corner radii ≥ the cutter radius** used in machining. *Why:* a sharp internal corner cannot be milled by a round tool and forces EDM or a stress-raising cast edge.
- **Generous cast fillets at section changes** to feed metal and reduce stress concentration. *Why:* improves fatigue life of structural castings.
- **Uniform radii families** (e.g., 0.5, 1.0, 2.0, 3.0 mm) to limit tool changes. *Why:* fewer radii mean fewer setups and simpler fixtures.

## Holes, Pockets, and Depth Limits

- **Depth-to-diameter ratio < 4** for cored holes and milled pockets. *Why:* deep, narrow features deflect tools, build heat, and break drills.
- **Avoid blind holes near the parting line** that trap air or require fragile cores.
- **Cast holes only where beneficial**; many features are cheaper to drill in CNC than to core reliably. *Why:* cored holes add die complexity and flash risk.

## Tolerances and GD&T

- **Tolerance only what matters.** *Why:* each tight callout costs inspection and scrap; cast default ±0.3–0.5 mm is adequate for non-critical faces.
- **Assign tight tolerances to functional/datums only**, and define them with GD&T (position, profile) rather than ± on every dimension.
- **Reference the machining datum scheme** consistently between casting and CNC prints. *Why:* mismatch causes cumulative stack-up errors.

## Machining Setup Reduction

- **Minimize the number of setups** by orienting features toward one or two primary datums. *Why:* every setup is a locating error and a clamping cost.
- **Use standard tool diameters** (e.g., 6, 8, 10, 12 mm) rather than bespoke sizes. *Why:* standard tooling is stocked, cheaper, and faster to program.
- **Avoid text engraving** on functional surfaces; use surface-etched labels or separate tags. *Why:* engraving adds cycle time and can be a leak path on sealed faces.
- **Design fixtures-friendly locators** — three stable pads plus two clamps — so the part seats repeatably.

## DFM Summary Table

| Parameter | Recommended rule |
| --- | --- |
| Wall (alu HPDC) | 1.5–4 mm; min 0.8–1.2 mm |
| Draft (ext / int) | 1–3° / 2–5° |
| Internal radius | ≥ cutter radius |
| Hole depth:dia | < 4 |
| Thin wall | avoid < 0.8 mm |
| Setups | minimize; standard tools |

## Related Articles

- [Die Casting DFM Guidelines]({{< relref "../die-casting/die-casting-dfm-guidelines.md" >}})
- [CNC DFM Cost Reduction]({{< relref "../cnc-machining/cnc-dfm-cost-reduction.md" >}})
- [Aluminium Die Casting Alloys]({{< relref "../materials/aluminum-die-casting-alloys.md" >}})
- [Aluminium Die Casting Process Guide]({{< relref "../die-casting/aluminum-die-casting-process-guide.md" >}})

## References

- NADCA — Product Specification Standards for Die Castings
- AIAG — DFM / Casting Design Guidance (CQI-27 context)
- ISO 8015 — Geometrical Product Specifications (GPS): Fundamentals of GPS
- ISO 1101 — Geometrical Tolerancing: Datums and GD&T
