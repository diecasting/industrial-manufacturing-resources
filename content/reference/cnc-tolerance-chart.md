---
title: "CNC Tolerance Chart: Capability by Process and Feature"
description: "CNC machining tolerance chart by process: ISO 2768-m/f, standard ±0.125 mm shop capability, ±0.025 precision, ±0.0125 tight, and hole grades H7/H8 by ream and bore."
keywords: ["CNC tolerance", "ISO 2768", "machining tolerance", "H7 hole", "CNC capability", "tolerance chart"]
date: 2026-08-06
category: "reference"
reading_time: "8 min"
---

# CNC Tolerance Chart: Capability by Process and Feature

## Overview

CNC machining tolerances are commonly quoted three ways: a general ISO 2768 class, a flat ± value agreed with the shop, or a feature-specific grade such as an H7 bore. The right choice depends on the feature. A flat ±0.125 mm is a reasonable shop default for general milling and turning; pushing to ±0.025 mm (precision) and ±0.0125 mm (tight) multiplies setup, inspection and scrap cost. Holes are best specified by grade (H7, H8) because the diameter itself sets the allowed band.

This reference lists realistic capabilities by process and feature. Treat the numbers as achievable on a well-maintained 3-axis machine with normal fixturing; tighter values require jig-boring, temperature control and CMM verification.

## Capability by Process and Feature

| Process / Feature | Typical ± (mm) | Notes |
|-------------------|----------------|-------|
| General CNC (standard) | ±0.125 | Shop default; ISO 2768-m equivalent |
| Precision CNC | ±0.025 | Tight setup, qualified machine |
| Tight CNC | ±0.0125 | Jig-bored, CMM verified |
| Turned diameter (standard) | ±0.025 | CNC lathe |
| Milled pocket (standard) | ±0.05 | 3-axis mill |
| Surface profile (3-axis) | ±0.05 | Position dependent |
| Flatness (ground) | 0.01 / 100 mm | Per reference length |
| Hole, drilled | ±0.125 | As-drilled |
| Hole, reamed | H8 - H9 (±0.025) | Reaming after drill |
| Hole, bored / reamed H7 | H7 (±0.012 - 0.021) | Per nominal size |
| Hole, ground | H6 | Precision bore |

## ISO 2768 Linear Tolerances

| Nominal length (mm) | Class m ± (mm) | Class f ± (mm) |
|---------------------|----------------|----------------|
| 0 - 30 | 0.10 | 0.05 |
| 30 - 120 | 0.15 | 0.075 |
| 120 - 400 | 0.20 | 0.10 |
| 400 - 1000 | 0.30 | 0.15 |

## How to use this reference

1. Use ISO 2768-m as the drawing default and only tighten the features that function. A blanket ±0.0125 mm on every dimension is wasteful.
2. Specify bores by grade (H7, H8), not by a flat ± — the grade scales correctly with diameter.
3. Reserve ±0.0125 mm (tight) for seal and bearing interfaces; verify those on a CMM rather than with calipers.
4. Remember that tolerance and surface finish interact: a tight bore also needs a ground or fine-bored finish — see [Surface Finish Guide]({{< relref "../cnc-machining/surface-finish-guide.md" >}}).
5. For GD&T framing of these limits, see [Tolerances and GD&T]({{< relref "../cnc-machining/tolerances-and-gdt.md" >}}).

## Related Articles

- [Tolerances and GD&T]({{< relref "../cnc-machining/tolerances-and-gdt.md" >}})
- [Surface Finish Guide (CNC)]({{< relref "../cnc-machining/surface-finish-guide.md" >}})
- [CNC DFM Cost Reduction]({{< relref "../cnc-machining/cnc-dfm-cost-reduction.md" >}})
- [Speeds and Feeds Guide]({{< relref "../cnc-machining/speeds-and-feeds-guide.md" >}})

## References

- ISO 2768-1, General tolerances for linear and angular dimensions without individual tolerance indications
- ISO 2768-2, General tolerances for geometrical tolerances
