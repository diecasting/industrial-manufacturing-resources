---
title: "Die Casting Tolerance Guide: NADCA Standards and Practical Limits"
description: "Die casting tolerances per NADCA for aluminum, zinc and magnesium: linear, parting-line and moving-die limits, plus draft angles and wall-thickness practical guidance for drawings."
keywords: ["die casting tolerance", "NADCA tolerance", "die casting draft angle", "wall thickness", "die casting dimensional limits"]
date: 2026-08-06
category: "reference"
reading_time: "8 min"
---

# Die Casting Tolerance Guide: NADCA Standards and Practical Limits

## Overview

Tolerance is where die casting programs lose money quietly. A drawing dimensioned to ±0.05 mm everywhere forces the supplier into 100% inspection, accelerated die wear and scrap that no one budgeted for. The NADCA Product Specification Standards give two linear tolerance classes — Class 1 (premium) and Class 2 (commercial) — that reflect what a well-maintained die casting machine and tool can hold repeatably. Features split by the parting line, or controlled by a moving die component (slider, core, unscrewing device), cannot hold the same numbers and must be toleranced separately.

This reference lists the practical limits most often mis-specified: linear dimensions, parting-line and moving-die-component variation, draft angles, and wall thickness. Values below are representative of aluminum HPDC; zinc holds tighter and magnesium sits between. Confirm against the controlling NADCA specification before release.

## Linear Tolerances (Aluminum, Approximate)

| Dimension (mm) | Class 1 ± (mm) | Class 2 ± (mm) |
|----------------|----------------|----------------|
| 0 - 25 | 0.10 | 0.15 |
| 25 - 50 | 0.13 | 0.20 |
| 50 - 100 | 0.18 | 0.28 |
| 100 - 200 | 0.30 | 0.43 |
| 200 - 400 | 0.55 | 0.75 |

## Parting-Line and Moving-Die-Component Tolerances

| Feature type | Typical ± (mm) | Note |
|--------------|----------------|------|
| Parting-line mismatch (flat) | 0.10 - 0.15 | Per side of shutoff |
| Parting-line mismatch (perpendicular) | 0.15 - 0.25 | Step at parting line |
| Slider / core (moving die) | 0.13 - 0.25 | Worse with wear |
| Ejector-pin witness | 0.05 - 0.15 | Bump height, not a dimension |

## Draft Angles and Wall Thickness

| Parameter | Practical range | Recommended |
|-----------|-----------------|-------------|
| External draft | 1° - 3° | 2° |
| Internal / core draft | 2° - 5° | 3° |
| Textured surfaces (add) | +1° - 2° | — |
| Wall thickness (typical) | 1.5 - 4.0 mm | 2.0 - 3.0 mm |
| Wall thickness (thin, achievable) | 0.8 - 1.2 mm | local only |

## How to use this reference

1. Dimension only what functions. Apply Class 2 (commercial) as the default and reserve Class 1 for fit and seal features.
2. Never tolerance a parting-line-split diameter to Class 1. Split it into two half-features or accept the parting-line band.
3. Give moving-die features (slides, cores) their own looser callout; do not co-locate a tight tolerance with a slider.
4. Hold draft to the recommended values. Removing draft to hit a cosmetic flat forces abrasive stripping that wears the tool.
5. Keep nominal walls in the 2.0-3.0 mm band. Pushing below 1.2 mm raises cold-shut and short-fill risk — see [Die Casting DFM Guidelines]({{< relref "../die-casting/die-casting-dfm-guidelines.md" >}}).
6. For machined features, switch to ISO 2768 or CNC limits — see [Tolerances and GD&T]({{< relref "../cnc-machining/tolerances-and-gdt.md" >}}).

## Related Articles

- [Die Casting DFM Guidelines]({{< relref "../die-casting/die-casting-dfm-guidelines.md" >}})
- [Die Casting vs Sand vs Gravity Casting]({{< relref "../die-casting/die-casting-vs-sand-vs-gravity-casting.md" >}})
- [Tolerances and GD&T]({{< relref "../cnc-machining/tolerances-and-gdt.md" >}})
- [Surface Treatment and Coatings]({{< relref "../materials/surface-treatment-and-coatings.md" >}})

## References

- NADCA Product Specification Standards for Die Castings — [https://www.diecasting.org/](https://www.diecasting.org/)
- ISO 2768-1, General tolerances for linear and angular dimensions
