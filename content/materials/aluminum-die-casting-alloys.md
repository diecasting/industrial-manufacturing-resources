---
date: 2026-08-06
title: "Aluminum Die Casting Alloys: A380, ADC12, A356 Compared"
description: "Compare A380, ADC12, A383, A360, A413 and A356 aluminum die casting alloys on composition, tensile strength, castability and typical applications."
keywords: ["aluminum die casting alloys", "A380", "ADC12", "A356", "A383", "die casting composition"]
category: "materials"
reading_time: "11 min"
last_updated: "2026-08-06"
---

# Aluminum Die Casting Alloys: A380, ADC12, A356 Compared

## Introduction
Selecting the wrong aluminum die casting alloy quietly erodes a program for years. The part may cast cleanly in qualification, then fail salt-spray testing at the customer, or it may meet the strength requirement but crack at the gate during every production shot. Aluminum high-pressure die casting (HPDC) draws on a small family of near-eutectic Al-Si-Cu alloys, each tuned for a different compromise between fluidity, strength, corrosion resistance and machinability. The designation on the drawing is therefore not a cosmetic choice.

This article walks through the alloys most frequently specified for HPDC: A380, ADC12, A383, A360, A413 and A356. After reading, an engineer should be able to match an alloy to a service environment, understand why ADC12 dominates Asian supply, and recognise when a part must leave the HPDC family entirely and move to a permanent-mold or sand casting of A356.

## Technical Explanation

### Alloy system and the role of silicon, copper and iron

Commercial HPDC aluminum alloys are built around the Al-Si system with copper and magnesium as secondary hardeners and iron deliberately held in a narrow band. Silicon (roughly 8 to 12 %) gives the near-eutectic mixture a low melting range and high fluidity, which is what lets the metal fill thin, complex cavities at high velocity. Copper raises tensile and yield strength and improves machinability, but it reduces ductility and corrosion resistance. Magnesium, when present with silicon, forms Mg2Si, which can be precipitation-strengthened.

Iron is the awkward element. Iron above about 0.6 % suppresses "soldering" (the molten aluminum welding itself to the H13 die steel), but too much iron forms hard, brittle Al-Fe-Si intermetallics (commonly the beta-Al5FeSi platelet) that act as crack initiators and machining-tool abrasives. This is why most die casting specifications cap iron at 1.0 to 1.3 % and why rising iron gently lowers elongation.

### A380: the general-purpose workhorse

A380 sits at roughly 3.5 to 4.5 % Cu and 7.5 to 9.5 % Si. That copper band lifts strength to about 320 MPa tensile and 160 MPa yield while keeping elongation at a useful 3 to 4 %. It is the default North American HPDC alloy because it offers the best all-round balance of castability, strength and die life. Its wide solidification range, however, makes it prone to hot tearing in sections with large cross-section changes, which is where A383 is preferred.

### ADC12 and its relationship to A383

ADC12 is the Japanese Industrial Standard (JIS H5302) alloy that is compositionally close to A383. It typically carries 9.6 to 12 % Si and 1.5 to 3.5 % Cu, with iron allowed up to 1.3 %. The slightly higher silicon and the broader copper allowance make ADC12 extremely fluid and forgiving in the die, so it is the dominant die casting alloy across Asian supply chains where die-castability and throughput are weighted above maximum mechanical properties. Engineering teams sourcing from Asia will see ADC12 quoted far more often than A380, and the two are frequently treated as near-substitutes even though ADC12's higher silicon reduces ductility marginally and changes the machined-finish appearance.

### A383: less cracking, better fill

A383 raises silicon and copper relative to A380 and is engineered specifically to reduce hot-cracking and to fill long, thin features more reliably. Where a design has slender ribs or a large flat with a single gate, A383 often runs with fewer cold-shut defects than A380. The trade is a small reduction in tensile strength.

### A360 and A413: low-copper, corrosion-focused

A360 and A413 drop copper to a low level (A413 has very low Cu and high Si around 11 to 13 %). With copper removed, corrosion resistance and ductility improve, which matters for marine or outdoor hardware. The cost is castability: low-copper alloys solidify over a narrower, hotter window, fill less easily, and tend to stick in the die, so they demand tighter process control and more draft. A413, being nearly eutectic, flows well but is weaker.

### A356: the non-HPDC exception

A356 (and its close cousin A357) is a 7 % Si, low-copper, magnesium-containing alloy used for sand and permanent-mold casting, not conventional HPDC. It is specified when elongation of 6 to 10 % and good fatigue behaviour are required, such as suspension or structural brackets. A356 is normally heat treated to T6, which HPDC cannot generally survive. When a die cast part "needs A356 properties," the real answer is usually a low-porosity vacuum HPDC of a different alloy or a switch to permanent mold.

## Engineering Parameters

The values below are typical as-cast minima or nominal ranges drawn from NADCA and AA/EN designation data. Actual results shift with section thickness, gate velocity and porosity.

| Parameter | A380 | ADC12 / A383 | A360 | A413 | A356 (PM/T6) | Units |
|---|---|---|---|---|---|---|
| Silicon (Si) | 7.5-9.5 | 9.6-12.0 | 9.0-10.0 | 11.0-13.0 | 6.5-7.5 | % |
| Copper (Cu) | 3.5-4.5 | 1.5-3.5 | 0.6 max | 1.0 max | 0.25 max | % |
| Iron (Fe, max) | 1.3-2.0 | 1.3 | 1.3-2.0 | 1.3-2.0 | 0.6 | % |
| Tensile strength | 320 | 310-330 | 320 | 300 | 230-310 | MPa |
| Yield strength | 160 | 160-170 | 170 | 145 | 180-260 | MPa |
| Elongation | 3-4 | 1.5-3.5 | 3-5 | 2-3 | 6-10 | % |
| Density | 2.74 | 2.70-2.74 | 2.68 | 2.66 | 2.68 | g/cm³ |
| Liquidus / solidus | 595 / 540 | 580 / 515 | 615 / 555 | 575 / 520 | 615 / 555 | °C |
| Thermal conductivity | ~96 | ~90 | ~110 | ~120 | ~150 | W/m·K |

Composition ranges move with the controlling specification (AA, EN 1706, JIS H5302, GB/T). Higher iron always lowers elongation and raises tool wear; higher silicon improves fill but darkens the machined surface and slightly lowers strength. Density is nearly constant near 2.7 g/cm³, so mass estimates for wall-thickness optimization barely change between alloys.

## Manufacturing Considerations

- Castability is governed first by silicon content and the liquidus-solidus spread; wider spreads give more time in the semi-solid window but raise hot-tear risk at the gate.
- Die life depends on iron control and on keeping the melt from soldering; A380 with iron near 1.0 % balances both, while low-iron A356-like chemistries weld to the die and accelerate heat checking.
- Machining: copper-bearing alloys such as A380 and ADC12 cut cleanly and give a good chip, but their Si particles abrade carbide; A413's high silicon is the most abrasive on tooling.
- Corrosion-sensitive parts should step down copper (toward A360/A413) or plan for an anodize or powder coat; A380 in a marine atmosphere without coating will pit at the eutectic.
- Sourcing reality: Asian tooling quotes often default to ADC12; confirm whether A380 is genuinely required or whether ADC12 meets the load case before forcing a substitution that raises cost and scrap.
- Thin-wall targets below about 0.8 mm are more reliably met with high-silicon ADC12/A413 than with A380.

## Common Mistakes

- **Mistake:** Specifying A356 as an HPDC alloy — **Why it fails:** conventional HPDC traps gas porosity that blisters during T6 solution heat treatment, destroying the part — **Fix:** use vacuum HPDC of A380-class chemistry or move to permanent mold.
- **Mistake:** Lowering iron to "improve ductility" below 0.6 % — **Why it fails:** the melt solders to the H13 die, causing sticking and heat-checking — **Fix:** hold iron in the 0.9-1.3 % band for HPDC.
- **Mistake:** Substituting ADC12 for A380 without checking elongation — **Why it fails:** higher silicon drops ductility and the part cracks under flexural load — **Fix:** compare elongation against the fatigue requirement, not just tensile.
- **Mistake:** Over-specifying copper for strength in a saltwater part — **Why it fails:** copper sharply raises galvanic corrosion and pitting — **Fix:** choose A360/A413 and protect with coating.
- **Mistake:** Designing long thin ribs in A380 — **Why it fails:** hot tearing at the gate and cold shut on the far wall — **Fix:** switch to A383 or raise section thickness.
- **Mistake:** Assuming all "AlSi10" grades are interchangeable — **Why it fails:** EN, AA and JIS limits differ on iron and copper, shifting properties — **Fix:** cite the exact designation and standard on the drawing.
- **Mistake:** Ignoring the machined-surface colour change from silicon — **Why it fails:** cosmetic rejects on visible finishes — **Fix:** set appearance expectations with the supplier before tooling.

## Related Articles

- [Aluminum Die Casting Process: Complete Engineering Guide]({{< relref "../die-casting/aluminum-die-casting-process-guide.md" >}})
- [Magnesium Die Casting: Alloys, Parameters and Design Rules]({{< relref "../die-casting/magnesium-die-casting-guide.md" >}})
- [Die Casting Porosity: Causes, Detection and Prevention]({{< relref "../die-casting/die-casting-porosity-prevention.md" >}})
- [Machining Aluminum Alloys: Parameters and Tooling]({{< relref "../cnc-machining/machining-aluminum-alloys.md" >}})
- [Aluminum vs Magnesium vs Zinc for Die Cast Parts]({{< relref "aluminum-vs-magnesium-vs-zinc.md" >}})

## References

1. **NADCA Product Specification Standards** — alloy composition and property minima for aluminum die casting (e.g. NADCA #3, A380/A383 datasheets). https://www.nadca.com
2. **The Aluminum Association** — registered aluminum alloy designation system and typical property data. https://www.aluminum.org
3. **ASM International, ASM Handbook Volume 15: Casting** — metallurgy of Al-Si-Cu die casting alloys and intermetallic formation. https://www.asminternational.org
4. **EN 1706:2020** — Aluminium and aluminium alloys, castings, chemical composition and mechanical properties. https://www.iso.org
5. **JIS H5302** — Japanese Industrial Standard for aluminum alloy die castings, covering ADC12 chemistry.
6. **AlumCasting** — an aluminum die casting process and alloy-selection resource covering A380, ADC12 and related HPDC grades. https://www.alumcasting.com
