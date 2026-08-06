---
title: "Surface Finish Guide: Ra Values, Processes and Specification"
description: "Surface roughness Ra values by process for die cast and machined parts: as-cast, milled, turned, ground, polished, bead blast and coating build-up, with how to specify finish."
keywords: ["surface finish", "Ra value", "surface roughness", "CNC surface finish", "bead blast", "powder coat thickness"]
date: 2026-08-06
category: "reference"
reading_time: "7 min"
---

# Surface Finish Guide: Ra Values, Processes and Specification

## Overview

Surface finish is specified in micrometers of arithmetic average roughness (Ra). The same number means different things depending on the process that produced it: an as-cast Ra of 3.2 µm is a frozen metal-skin texture, while a milled Ra of 3.2 µm is a directional toolpath. Calling out a number without the process leaves the supplier to choose, and the cheapest process that meets the number is rarely the one the designer imagined.

This reference lists typical Ra bands by process for aluminum die castings and CNC-machined features, plus the coating build-up that a secondary finish adds on top of the substrate roughness. Values are typical shop ranges; the drawing should name both the Ra target and the process.

## Surface Roughness by Process

| Process | Ra (µm) | Typical application |
|---------|---------|---------------------|
| As-cast | 3.2 - 6.3 | Die cast, no secondary finish |
| Bead blast | 3.0 - 6.0 | Matte, uniform appearance |
| Turning (CNC) | 1.6 (0.8 - 3.2) | Round, revolved features |
| Milling (standard) | 0.8 - 3.2 | General CNC features |
| Milling (fine) | 0.8 | High-speed, sharp tooling |
| Grinding | 0.2 - 0.4 | Seal faces, bearing seats |
| Polishing | <0.1 | Cosmetic, optical, sliding |
| Powder coat (build-up) | +25 - 60 µm | Adds thickness, not Ra |

## Coating and Treatment Build-Up

Secondary finishes sit on top of the substrate roughness rather than replacing it. A powder coat adds 25-60 µm of build, which hides scratches but still follows the underlying profile. Conversion coatings (e.g., chromate or anodize) add only microns, so the substrate Ra still reads through. When a cosmetic Class A face is required, specify a fine mill or polish first, then the coating.

## How to use this reference

1. Specify Ra and process together: "Ra 1.6 µm by CNC milling", not just "Ra 1.6".
2. Do not call out ground-class finish (Ra 0.2-0.4) on a die-cast face you have no plan to machine — it implies a grinding operation that adds cost.
3. For sealing faces and bearing bores, call grinding (0.2-0.4 µm) on the machined feature only, defined in [Tolerances and GD&T]({{< relref "../cnc-machining/tolerances-and-gdt.md" >}}).
4. Match the cosmetic target to the coating: bead blast for a uniform matte, polished substrate under a clear coat for a bright look.
5. For die-cast substrate finish limits, see [Surface Treatment and Coatings]({{< relref "../materials/surface-treatment-and-coatings.md" >}}).

## Related Articles

- [Surface Treatment and Coatings]({{< relref "../materials/surface-treatment-and-coatings.md" >}})
- [Tolerances and GD&T]({{< relref "../cnc-machining/tolerances-and-gdt.md" >}})
- [CNC DFM Cost Reduction]({{< relref "../cnc-machining/cnc-dfm-cost-reduction.md" >}})
- [Surface Finish Guide (CNC)]({{< relref "../cnc-machining/surface-finish-guide.md" >}})

## References

- ISO 4287 / ISO 21920, Geometrical product specifications — surface texture
- NADCA Product Specification Standards for Die Castings — [https://www.diecasting.org/](https://www.diecasting.org/)
