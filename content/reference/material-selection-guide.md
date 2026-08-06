---
title: "Material Selection Guide: Die Cast Alloy Decision Logic"
description: "Material selection logic for die cast parts: compare aluminum, magnesium, zinc and engineering plastics on strength, weight, wall thickness, corrosion, service temperature, cost and plating."
keywords: ["material selection", "aluminum vs magnesium vs zinc", "die cast alloy", "engineering plastic", "lightweighting"]
date: 2026-08-06
category: "reference"
reading_time: "9 min"
---

# Material Selection Guide: Die Cast Alloy Decision Logic

## Overview

Choosing between aluminum, magnesium, zinc and an engineering plastic is rarely a single-variable decision. Weight, strength, wall thickness, corrosion resistance, service temperature, cost and the need to plate or paint the surface all pull in different directions. This reference gives a decision-logic matrix: read down the driver column, then across to the material that satisfies it, and the right choice is usually the material that wins on the two or three drivers that actually govern the application.

The four candidates cover the common envelope: aluminum HPDC for strength and temperature, magnesium (AZ91D/AM60B) for weight, zinc (Zamak) for thin walls and plating, and engineering plastics for corrosion immunity and cost.

## Decision Logic Matrix

| Driver | Choose Aluminum | Choose Magnesium | Choose Zinc | Choose Engineering Plastic |
|--------|-----------------|------------------|-------------|----------------------------|
| Strength needed | High | Medium | High (Zamak) | Low - Medium |
| Weight critical | Good | Best (35% lighter) | Poor | Best |
| Min wall thickness | 0.8 - 1.2 mm | 0.8 - 1.5 mm | 0.5 - 0.8 mm | 0.5 mm + |
| Corrosion resistance | Good (low-Cu alloys) | Fair, needs coating | Good | Excellent |
| Service temperature | <200 °C | <120 °C | <100 °C | Varies by grade |
| Relative cost | Medium | High | Low - Medium | Low - Medium |
| Plating / finish | Anodize, paint | Needs pre-treatment | Easy, direct plate | Paint only |

## Working the Logic

**If weight dominates** and the part is structurally loaded, magnesium AZ91D or AM60B is the answer — roughly 35% lighter than aluminum at equivalent stiffness, but limited to about 120 °C service and reliant on coating for corrosion protection. See [Magnesium Alloys AZ91D and AM60B]({{< relref "../materials/magnesium-alloys-az91d-am60b.md" >}}).

**If strength and temperature dominate**, aluminum HPDC (A380/ADC12/A383) is the default, holding service temperatures near 200 °C and good strength. See [Aluminum Die Casting Alloys]({{< relref "../materials/aluminum-die-casting-alloys.md" >}}).

**If thin walls and a cosmetic plated face dominate**, zinc (Zamak 3/5) fills the thinnest sections (0.5-0.8 mm) and plates directly without pre-treatment, at the cost of weight and a low ~100 °C limit. See [Zinc Die Casting Alloys]({{< relref "../materials/zinc-die-casting-alloys.md" >}}).

**If corrosion immunity and low cost dominate** and loads are light, an engineering plastic removes the plating and salt-spray problem entirely.

## How to use this reference

1. List the three drivers that actually matter for the part; ignore the rest.
2. Eliminate materials that fail a hard limit (e.g., service temp above 100 °C rules out zinc).
3. Break ties with cost and plating requirements.
4. Confirm the wall-thickness minimum against DFM before committing — see [Die Casting DFM Guidelines]({{< relref "../die-casting/die-casting-dfm-guidelines.md" >}}).
5. For a full property trade across the three metals, see [Aluminum vs Magnesium vs Zinc]({{< relref "../materials/aluminum-vs-magnesium-vs-zinc.md" >}}).

## Related Articles

- [Aluminum vs Magnesium vs Zinc]({{< relref "../materials/aluminum-vs-magnesium-vs-zinc.md" >}})
- [Aluminum Die Casting Alloys]({{< relref "../materials/aluminum-die-casting-alloys.md" >}})
- [Magnesium Alloys AZ91D and AM60B]({{< relref "../materials/magnesium-alloys-az91d-am60b.md" >}})
- [Zinc Die Casting Alloys]({{< relref "../materials/zinc-die-casting-alloys.md" >}})

## References

- NADCA Material Selection resources — [https://www.diecasting.org/](https://www.diecasting.org/)
- SAE International, Lightweight materials standards — [https://www.sae.org/](https://www.sae.org/)
