---
date: 2026-08-06
title: "Magnesium Alloys AZ91D and AM60B: Properties and Use"
description: "AZ91D and AM60B magnesium die casting alloys compared on composition, tensile strength, ductility, corrosion and process safety for thin-wall structural parts."
keywords: ["magnesium die casting", "AZ91D", "AM60B", "AZ31", "magnesium alloy properties", "lightweight casting"]
category: "materials"
reading_time: "10 min"
last_updated: "2026-08-13"
---

# Magnesium Alloys AZ91D and AM60B: Properties and Use

## Introduction
Magnesium is the lightest structural metal in production use, at roughly 1.81 g/cm³, about 36 % lighter than aluminum and 78 % lighter than zinc per unit volume. That density advantage is why magnesium die casting keeps reappearing wherever mass reduction directly earns money: laptop enclosures, chain-saw housings, steering-column brackets and seat frames. The engineering catch is that magnesium's properties depend entirely on alloy choice and on how carefully the molten metal is handled.

This article covers the two workhorse die casting alloys, AZ91D and AM60B, plus where AM50 and wrought AZ31 fit. After reading, an engineer should be able to choose between AZ91D and AM60B on the ductility-versus-strength axis, specify the melt-protection chemistry required, and avoid the corrosion and flammability errors that have historically given magnesium a bad name.

## Technical Explanation

### The Mg-Al-Zn system and the role of aluminum

Die cast magnesium uses the Mg-Al-Zn family, where aluminum is the primary soluble hardener. Aluminum raises room-temperature strength and improves castability, but it also forms the Mg17Al12 intermetallic at grain boundaries. As aluminum rises, strength climbs and ductility falls, which is the central trade that separates AZ91D from AM60B. Zinc adds a little solution strengthening and refines grains, while manganese is added specifically to tie up iron and nickel impurities that would otherwise destroy corrosion resistance.

### AZ91D: the default structural magnesium

AZ91D contains 8.5 to 9.5 % Al, 0.45 to 0.9 % Zn and 0.17 to 0.35 % Mn, with iron and nickel held to trace maxima (Fe typically below 0.004 %, Ni below 0.001 %). In the as-cast state it delivers about 230 to 250 MPa tensile with elongation of 3 to 7 %. It is the most common magnesium die casting alloy because it fills thin walls well and gives a good combination of strength and corrosion behaviour. The "D" suffix denotes the die casting grade with tight impurity limits, as opposed to ingot grades that tolerate more contamination.

### AM60B: ductility for crash and energy absorption

AM60B drops aluminum to 5.5 to 6.5 % and keeps manganese at 0.24 to 0.6 %. With less Mg17Al12 at the grain boundaries, elongation rises to roughly 6 to 12 %, while tensile falls to about 200 to 230 MPa. That extra ductility is what makes AM60B the choice for parts that must absorb energy or bend rather than shatter: steering column housings, seat frames, and instrument-panel beams. A part that only needs to be light but must not fail in a crash event is usually an AM60B part, not an AZ91D part.

### AM50 and wrought AZ31

AM50 is a further step down in aluminum (about 4.5 to 5.3 %), giving still higher elongation for extreme formability needs. AZ31 belongs to the wrought family (roughly 3 % Al, 1 % Zn) and is rolled or extruded, not die cast; it appears in the same programs as cast magnesium when a bracket needs to be bent or formed after production. The split matters because a design team will sometimes specify "magnesium" loosely when only one of these forms is actually manufacturable for the geometry.

### Corrosion grades and high-temperature options

For under-hood use where temperatures exceed about 120 °C, the standard AZ/AM alloys lose creep strength because Mg17Al12 softens. Rare-earth-containing grades such as AE44 or the AJ (Alkaline earth) family are used where creep resistance is needed. These are specialty alloys with higher cost and tighter melting practice, so they are reserved for powertrain brackets rather than general enclosures.

## Engineering Parameters

Figures are typical as-cast values; tensile properties vary with section thickness and gate quality.

| Parameter | AZ91D | AM60B | AM50 | AZ31 (wrought) | Units |
|---|---|---|---|---|---|
| Aluminum (Al) | 8.5-9.5 | 5.5-6.5 | 4.5-5.3 | 2.5-3.5 | % |
| Zinc (Zn) | 0.45-0.9 | 0.20-0.35 | 0.20-0.35 | 0.7-1.3 | % |
| Manganese (Mn) | 0.17-0.35 | 0.24-0.6 | 0.26-0.6 | 0.2 min | % |
| Tensile strength | 230-250 | 200-230 | 200-220 | 250-280 | MPa |
| Yield strength | 150-160 | 120-140 | 110-130 | 150-200 | MPa |
| Elongation | 3-7 | 6-12 | 10-15 | 12-21 | % |
| Density | 1.81 | 1.80 | 1.78 | 1.77 | g/cm³ |
| Melting (solidus-liquidus) | 470 / 595 | 455 / 600 | 450 / 605 | 525 / 630 | °C |
| Thermal conductivity | ~72 | ~70 | ~68 | ~96 | W/m·K |

Density stays near 1.8 g/cm³ across the family, so weight savings versus aluminum scale directly with the volume replaced. Impurity limits dominate corrosion performance: the iron-to-manganese ratio must stay below roughly 0.032 to avoid catastrophic galvanic attack, which is why melt chemistry control, not just alloy choice, governs field life.

## Manufacturing Considerations

- Melt protection is mandatory: molten magnesium reacts with atmospheric oxygen and ignites, so the melt is covered with SF6, SO2, or increasingly with Ar-based or HFC-134a blends, plus flux covers, in a sealed or hooded furnace.
- No water, no damp tooling, no green sand: magnesium reacts violently with water to form hydrogen. Only dry sand, dry dies and controlled lubricants are permitted; fire response uses Class D powder, never water or CO2.
- Fill is excellent: magnesium's low heat content and high fluidity allow wall thicknesses down to about 0.6 mm, thinner than practical aluminum HPDC, which is a key reason for thin consumer electronics housings.
- Corrosion control starts at the melt: keep Fe, Ni, Cu impurities trace-low; the "D" grade exists for this reason, and re-melt scrap must be segregated from aluminum scrap.
- Coating is usually required for field parts: chromate conversion (declining under RoHS) or trivalent passivation plus paint; bare AZ91D outdoors will corrode in humid, salt-laden environments.
- Die materials follow the same H13 practice as aluminum HPDC, but ejection and cooling must account for magnesium's faster solidification and lower shrinkage drag.

## Common Mistakes

- **Mistake:** Using AZ91D where the part must absorb crash energy — **Why it fails:** its lower elongation means brittle fracture instead of controlled bending — **Fix:** switch to AM60B or AM50 for energy-absorbing brackets.
- **Mistake:** Allowing aluminum scrap into the magnesium melt — **Why it fails:** aluminum raises iron pickup and breaks the Fe/Mn balance, causing intergranular corrosion — **Fix:** dedicated fleet, labelled ingot and strict melt segregation.
- **Mistake:** Spraying water-based extinguisher on a magnesium fire — **Why it fails:** water evolves hydrogen and intensifies the fire — **Fix:** train on Class D powder and dry-sand cover only.
- **Mistake:** Specifying a chrome conversion coating without RoHS review — **Why it fails:** hexavalent chromium is banned in many markets, blocking export — **Fix:** qualify trivalent passivation or paint early.
- **Mistake:** Assuming magnesium beats aluminum on stiffness — **Why it fails:** modulus (~45 GPa) is far below aluminum (~70 GPa), so thin walls deflect — **Fix:** design for stiffness with ribs or local thickening, not just mass.
- **Mistake:** Picking AZ91D for under-hood brackets above 120 °C — **Why it fails:** creep relaxation of Mg17Al12 loosens the joint — **Fix:** move to AE44 or an AJ rare-earth grade.
- **Mistake:** Leaving bare cast magnesium in marine service — **Why it fails:** galvanic and pitting corrosion attack exposed grain boundaries — **Fix:** specify a sealed coating system and isolate from dissimilar metals.

## Related Articles

- [Magnesium Die Casting: Alloys, Parameters and Design Rules]({{< relref "../die-casting/magnesium-die-casting-guide.md" >}})
- [Aluminum Die Casting Alloys: A380, ADC12, A356 Compared]({{< relref "aluminum-die-casting-alloys.md" >}})
- [Aluminum vs Magnesium vs Zinc for Die Cast Parts]({{< relref "aluminum-vs-magnesium-vs-zinc.md" >}})
- [Die Casting DFM: Wall Thickness, Draft Angles and Ribs]({{< relref "../die-casting/die-casting-dfm-guidelines.md" >}})
- [Automotive Lightweighting: Materials and Process Strategy]({{< relref "../automotive/automotive-lightweighting.md" >}})

## References

1. **NADCA Magnesium Die Casting Reference** — alloy data and melting practice for AZ91D and AM60B. https://www.nadca.com
2. **ASM International, ASM Handbook Volume 2: Properties and Selection of Nonferrous Alloys** — magnesium alloy metallurgy and corrosion behaviour. https://www.asminternational.org
3. **ASTM B94** — Standard specification for magnesium alloy die castings. https://www.astm.org
4. **SAE International** — automotive magnesium specifications and creep-resistant alloy development. https://www.sae.org
5. **International Magnesium Association** — process safety and melt-protection guidance for molten magnesium. https://www.intlmag.org
6. **EN 1753:2022** — Magnesium and magnesium alloys, castings, chemical composition and mechanical properties. https://www.iso.org
