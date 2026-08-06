---
title: "Aluminum Die Casting Alloy Comparison: A380, ADC12, A383, A360, A413, A356"
description: "Compare A380, ADC12, A383, A360, A413 and A356 aluminum casting alloys on composition, tensile strength, density and castability to select the right alloy for die casting."
keywords: ["aluminum die casting alloy", "A380", "ADC12", "A383", "A360", "A356", "alloy comparison"]
date: 2026-08-06
category: "reference"
reading_time: "9 min"
---

# Aluminum Die Casting Alloy Comparison: A380, ADC12, A383, A360, A413, A356

## Overview

Aluminum high-pressure die casting (HPDC) draws on a small family of near-eutectic Al-Si-Cu alloys. Each alloy is tuned for a different compromise between fluidity, strength, corrosion resistance, machinability and die-filling behaviour. Specifying the wrong alloy is rarely obvious at qualification — it shows up later as premature gate cracking, failed salt-spray testing, or porosity that cannot be welded out.

This reference consolidates the six alloys most often requested by design engineers — A380, ADC12, A383, A360, A413 and A356 — into one comparable table. ADC12 is the Japanese Industrial Standard (JIS) analogue of the A383 family and dominates Asian supply chains; A356 is included because it is the natural upgrade path when a die-cast part needs strength and elongation that HPDC alloys cannot reach, even though it is normally cast by permanent mold or sand and heat treated.

The values below are representative nominal/designation ranges and typical as-cast mechanical properties. Confirm against the controlling specification (NADCA, ASTM B85, JIS H5302) before release.

## Composition and Mechanical Properties

| Alloy | Si % | Cu % | Mg % | Fe max % | Tensile MPa | Yield MPa | Elong % | Density g/cm3 | Typical use |
|-------|------|------|------|----------|-------------|-----------|---------|---------------|-------------|
| A380 | 7.5-9.5 | 3.5-4.5 | ≤0.10 | 1.3 (2.0 des) | 320 | 160 | 3-4 | 2.71 | General HPDC, brackets, housings |
| ADC12 | 9.6-12.0 | 1.5-3.5 | ≤0.30 | 1.3 | 310 | 150 | 1-3 | 2.70 | Asian-supply HPDC, thin walls |
| A383 | 9.5-11.5 | 2.0-3.0 | ≤0.10 | 1.3 | 300 | 150 | 2-3 | 2.70 | Complex dies, hard-to-fill shapes |
| A360 | 9.0-10.0 | ≤0.60 | 0.40-0.60 | 1.3 | 320 | 170 | 3-5 | 2.68 | Corrosion-resistant, pressure-tight |
| A413 | 11.0-13.0 | ≤1.0 | ≤0.10 | 1.3 | 280 | 140 | 3-4 | 2.66 | High fluidity, very thin sections |
| A356 | 6.5-7.5 | ≤0.20 | 0.25-0.45 | 0.6 | 310 (T6) | 230 (T6) | 6-10 | 2.69 | Structural, heat treated (T5/T6) |

## Reading the Table

**Silicon (Si)** drives fluidity and hot-tearing resistance. Higher Si improves die fill and reduces shrinkage but lowers machinability and can raise the tendency for silicon segregation. A413 (11-13% Si) fills the thinnest sections; A380 offers a more balanced 7.5-9.5%.

**Copper (Cu)** raises strength and hardness and improves machinability, but it reduces corrosion resistance and ductility. A380's 3.5-4.5% Cu is the reason it is strong yet less salt-spray friendly than A360. Low-copper alloys (A360, A413, A356) are chosen when corrosion resistance matters.

**Magnesium (Mg)** enables precipitation hardening. A356's 0.25-0.45% Mg is what allows T5/T6 heat treatment to lift yield to ~230 MPa and elongation to 6-10%. HPDC alloys keep Mg low because magnesium picks up hydrogen porosity readily in the die-casting environment.

**Iron (Fe)** is an impurity-controlled element. It prevents die soldering but forms brittle Al-Fe-Si platelets; the "design" maximum (2.0% for A380) is used when soldering is a risk, while the stricter 1.3% limit is preferred for mechanical properties.

**Density** is near-constant at ~2.7 g/cm3 across the family. Aluminum selection is therefore about properties and castability, not weight — see [Aluminum vs Magnesium vs Zinc]({{< relref "../materials/aluminum-vs-magnesium-vs-zinc.md" >}}) for the weight-vs-strength trade against magnesium and zinc.

## How to use this reference

1. Start from the failure mode: if corrosion or pressure tightness dominates, prefer A360 or A356. If strength and low cost dominate, A380.
2. Match supply: if your tool shop quotes ADC12, treat it as the A383 family and verify the Cu band (1.5-3.5%) meets your strength need.
3. For thin-wall (<1.2 mm) parts, move toward A413 or ADC12 for fluidity.
4. When the part must carry structural load with high elongation, leave HPDC and specify A356 by permanent mold or sand with T5/T6 heat treatment — see [Heat Treatment of Castings]({{< relref "../materials/heat-treatment-of-castings.md" >}}).
5. Download the CSV in the [Downloads](/downloads/) section to build a first-pass material spec sheet.

## Related Articles

- [Aluminum Die Casting Alloys]({{< relref "../materials/aluminum-die-casting-alloys.md" >}})
- [Aluminum vs Magnesium vs Zinc]({{< relref "../materials/aluminum-vs-magnesium-vs-zinc.md" >}})
- [Heat Treatment of Castings]({{< relref "../materials/heat-treatment-of-castings.md" >}})
- [Aluminum Die Casting Process Guide]({{< relref "../die-casting/aluminum-die-casting-process-guide.md" >}})

## References

- NADCA Product Specification Standards for Die Castings — [https://www.diecasting.org/](https://www.diecasting.org/)
- ASTM B85 / B85M, Standard Specification for Aluminum-Alloy Die Castings
- JIS H5302, Aluminum alloy die castings
