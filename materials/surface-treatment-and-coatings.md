---
title: "Surface Treatment for Castings: Anodizing, Coating, Plating"
description: "Anodizing, conversion coating, powder coat, e-coat and plating for aluminum, magnesium and zinc die castings, with porosity, adhesion and RoHS constraints."
keywords: ["casting surface treatment", "anodizing", "powder coating", "conversion coating", "plating die castings", "RoHS"]
category: "materials"
reading_time: "11 min"
last_updated: "2026-08-13"
---

# Surface Treatment for Castings: Anodizing, Coating, Plating

## Introduction
A die cast part leaves the die with a cast skin that is rarely the final surface. Depending on the service environment it may need corrosion protection, abrasion resistance, electrical insulation, paint adhesion or a decorative finish. The choice of surface treatment is dictated by the base metal: aluminum anodizes well but needs pre-treatment for plating, zinc plates superbly, and magnesium needs careful conversion chemistry and impurity control or it corrodes under the coating. Porosity in the casting skin is the hidden variable that defeats many finishes, because entrapped gas and voids break the continuity of an otherwise good coating.

This article surveys conversion coatings, anodizing, paint systems and plating for the three common die casting metals. After reading, an engineer should be able to specify a finish that survives the field, anticipate porosity-related rejects, and stay inside RoHS and REACH limits.

## Technical Explanation

### Conversion coatings: chromate and trivalent passivation

Conversion coatings grow a thin chemically formed layer on the metal. Traditional yellow and clear chromate (hexavalent chromium, CrVI) gave excellent corrosion resistance and paint base, but CrVI is carcinogenic and restricted under RoHS and REACH, so it is being replaced by trivalent (CrIII) passivation and non-chrome alternatives. Trivalent films are thinner and slightly less protective, so they are usually topped with paint or a sealer for outdoor duty. On magnesium, a chrome-free conversion layer plus a sealed topcoat is the standard field protection.

### Anodizing: Type II and Type III

Anodizing grows a controlled aluminum oxide (Al2O3) layer electrolytically. Type II sulfuric anodize gives 5 to 25 µm of porous oxide, often dyed and sealed. Type III (hardcoat) builds 25 to 100 µm of dense, abrasive-resistant oxide. The problem with HPDC aluminum is the silicon particles: they make Type II anodize come out grey and uneven, and any porosity in the skin reads through as pits and staining. Sealing closes the pores but traps no benefit over voids. Anodizing works best on low-silicon or machined surfaces where the substrate is uniform.

### Paint systems: powder coat and electrocoat

Powder coating applies charged polymer powder baked into a 30 to 80 µm film, giving strong color and corrosion cover; e-coat (electrophoretic deposition) throws uniformly into recesses at 15 to 35 µm and is the automotive baseline. Both need a clean, etched or blasted substrate and a conversion primer for adhesion. On castings, the risk is outgassing: pores under the film vent during the bake and leave pinholes, so vacuum-cast or well-impregnated parts coat far more reliably than porous HPDC.

### Plating: best on zinc, hard on aluminum

Electroplating follows the rule that zinc is the easiest substrate (it accepts bright nickel-chrome directly and uniformly), magnesium needs a special zinc or tin immersion sequence, and aluminum needs a zincate strike before any copper/nickel layer will adhere. Common stacks are zinc-cobalt or zinc-nickel for corrosion, tin for solderability, and decorative nickel-chrome. Porosity in aluminum shows as blistering under the plate during thermal cycles, so plated aluminum castings usually come from low-porosity or machined stock.

### Thermal spray and specialist coatings

For severe wear or corrosion, HVOF (high-velocity oxygen fuel) tungsten carbide or similar thermal spray builds a dense wear layer, and PTFE or PVdF topcoats add chemical resistance. These are niche choices for valve and pump bodies rather than high-volume consumer parts, but they illustrate that the coating decision scales with duty.

## Engineering Parameters

| Process | Typical thickness | Base metals | Corrosion | Notes / constraint |
|---|---|---|---|---|
| Trivalent passivation | 0.1-1 µm | Al, Mg, Zn | fair-good | RoHS-compliant, seal for outdoor |
| Type II anodize | 5-25 µm | Al (low Si best) | good | grey/uneven on HPDC Si |
| Type III hardcoat | 25-100 µm | Al | very good | wear, dimensional build |
| Powder coat | 30-80 µm | Al, Zn, Mg | good | needs clean, etched base |
| E-coat | 15-35 µm | Al, Zn, Mg | good | uniform throw, automotive |
| Nickel-chrome plate | 10-40 µm | Zn best, Al w/ zincate | excellent | decorative, porosity blisters |
| Zincate + Cu/Ni | 5-30 µm | Al | good | pre-treatment for Al plating |

Thickness drives both protection and fit: a 100 µm hardcoat can close a 50 µm clearance, so mating dimensions must be offset before coating. Bake temperatures for powder and e-coat (about 160 to 200 °C) are below the aluminum solution range, so they do not blister porosity the way T6 does, but they still reveal pores as pinholes. Process temperature and coating build must be stated on the drawing tolerance block.

## Manufacturing Considerations

- Specify the substrate condition: machined-and-anodized aluminum looks and performs differently from as-cast-and-anodized; call out which the finish applies to.
- Porosity control upstream: vacuum-assist or impregnation before coating cuts pinholing; dealing with it at the coater is more expensive and less reliable.
- RoHS/REACH compliance: ban CrVI and restrict certain passivators; confirm the supplier's chemical register before qualification, especially for EU or California-bound parts.
- Adhesion testing: specify cross-hatch (ISO 2409) for paint and tape/thermal-cycle tests for plate; agree the acceptance class up front to avoid disputes.
- Masking and datums: coaters need clear mask zones for threads, sealing surfaces and datums; design features that survive a 30-80 µm build.
- Cost stacking: conversion + e-coat + topcoat is a multi-step cost; for indoor decorative zinc, a single plate may beat a three-coat paint system.

## Common Mistakes

- **Mistake:** Anodizing as-cast high-silicon HPDC aluminum — **Why it fails:** Si particles give grey, streaky, pitted appearance and the customer rejects it — **Fix:** machine the face or switch to low-Si alloy / powder coat.
- **Mistake:** Plating aluminum without zincate — **Why it fails:** the plate has no adhesion and lifts in service — **Fix:** specify zincate immersion strike before copper.
- **Mistake:** Using hexavalent chromate for an EU program — **Why it fails:** RoHS blocks the part at import — **Fix:** qualify trivalent or non-chrome conversion.
- **Mistake:** Coating porous castings without impregnation — **Why it fails:** outgassing leaves pinholes and rust blooms — **Fix:** vacuum-assist or resin-impregnate first.
- **Mistake:** Forgetting coating build on a press-fit — **Why it fails:** the 50 µm film seizes the assembly — **Fix:** offset the datum/tolerance for the finish.
- **Mistake:** Specifying Mg finish like aluminum — **Why it fails:** magnesium corrodes under a poorly bonded coating — **Fix:** require Mg-specific conversion and sealed topcoat.
- **Mistake:** No adhesion acceptance class agreed — **Why it fails:** supplier and buyer disagree on a "pass" — **Fix:** cite ISO 2409 class and thermal-cycle count in the PO.

## Related Articles

- [Zinc Die Casting Alloys: Zamak 3, 5 and ZA Grades](./zinc-die-casting-alloys.md)
- [Aluminum Die Casting Alloys: A380, ADC12, A356 Compared](./aluminum-die-casting-alloys.md)
- [Magnesium Alloys AZ91D and AM60B: Properties and Use](./magnesium-alloys-az91d-am60b.md)
- [Die Casting Surface Defects: Troubleshooting Guide](../die-casting/surface-defects-troubleshooting.md)
- [Machining Die Cast Components: Datums, Stock and Porosity](../cnc-machining/machining-die-cast-components.md)

## References

1. **NADCA Surface Finishing for Die Castings** — anodize, conversion and plating guidance for cast substrates. https://www.nadca.com
2. **ASM International, ASM Handbook Volume 5: Surface Engineering** — anodizing, plating and coating metallurgy. https://www.asminternational.org
3. **ASTM B117** — Standard practice for salt spray (fog) testing of coatings. https://www.astm.org
4. **ISO 2409** — Paints and varnishes, cross-cut test for coating adhesion. https://www.iso.org
5. **ISO 4520** — Chromate conversion coatings on zinc and cadmium, including trivalent practice. https://www.iso.org
6. **SAE AMS2470 / AMS2469** — anodic and chemical films on aluminum, process requirements. https://www.sae.org
