---
date: 2026-08-06
title: "Tool Steels for Dies: H13 Selection and Heat Treatment"
description: "Selecting and heat treating hot work tool steels for die casting dies: H13 grades, ESR quality, vacuum hardening, tempering and surface treatments."
keywords: ["H13 tool steel", "hot work tool steel", "die steel heat treatment", "vacuum hardening", "NADCA 207", "nitriding dies"]
category: "tooling"
reading_time: "7 min"
last_updated: "2026-08-06"
---

# Tool Steels for Dies: H13 Selection and Heat Treatment

## Introduction

The steel specification on a die drawing is often one line: "H13, 46-48 HRC". That line hides a supply chain, metallurgical and thermal processing decision. Two inserts with identical chemistry and final hardness can differ in service life by a factor of three, purely because of melting route, forging reduction and quench rate.

Hot-work die steels work in an unusual regime. The surface reaches 500-650 °C on contact with liquid aluminium and falls back to 150-250 °C under die spray, twice a minute, tens of thousands of times, while the bulk carries clamping and injection load. The steel needs hot yield strength, thermal fatigue resistance, toughness and dimensional stability. No single property optimises a die; the combination does.

This chapter covers the grades used in production tooling, what steel quality standards mean commercially, the heat treat route from annealed bar to finished insert, and the surface engineering that extends life.

## Technical Explanation

### Why H13 is the baseline

H13 (1.2344 in DIN/EN, SKD61 in JIS) is a 5 % chromium hot-work steel with roughly 0.40 % C, 1.0 % Si, 1.3 % Mo and 1.0 % V. Its behaviour rests on **secondary hardening**: during tempering above about 500 °C, fine vanadium and molybdenum carbides precipitate from the martensite and hardness rises again after the initial drop. Those carbides are stable at die operating temperature, so the steel resists softening in service.

Chromium also gives moderate oxidation resistance and allows thick sections to be through-hardened by gas quenching rather than oil, which matters for large inserts. H13 is neither the toughest nor the most thermal-fatigue-resistant hot-work steel; it has the best combination for the largest number of applications, so deviating from it should be a justified choice.

### Steel quality: melting route and cleanliness

Chemistry is only the entry ticket. **Melting route**: conventional electric arc melting leaves sulphide and oxide inclusions and centreline segregation, while ESR (electroslag remelting) and VAR (vacuum arc remelting) progressively re-melt the electrode to give a cleaner, more homogeneous ingot with finer carbides. **Hot work reduction**: adequate forging breaks up as-cast carbide networks, while insufficient reduction leaves banded stringers that act as crack paths and give anisotropic toughness, poor in the transverse direction facing the cavity.

**NADCA Publication #207** turns this into purchasable acceptance criteria: tighter chemistry than the base AISI grade, annealed hardness, microcleanliness ratings, carbide segregation classes and impact toughness requirements. Specifying "H13 per NADCA #207 premium quality" converts an unverifiable claim into an inspectable one.

### The heat treat route

A correctly processed insert follows this sequence:

1. **Rough machine** from annealed stock, leaving 1.5-3 mm on critical surfaces.
2. **Stress relieve** at 600-650 °C, slow cool, so hardening distortion becomes predictable.
3. **Semi-finish machine** back to near-net.
4. **Vacuum harden**: staged preheats around 650 °C and 850 °C to equalise temperature, then austenitise at 1,010-1,040 °C.
5. **High-pressure gas quench**, nitrogen at 5-10 bar. Quench rate through the critical range matters more than final hardness; too slow and carbides precipitate on prior austenite grain boundaries, collapsing toughness.
6. **Temper twice, preferably three times**, two hours per 25 mm of section, cooling below 50 °C between cycles, **above** the secondary hardening peak so service exposure cannot harden the steel further.
7. **Finish machine, EDM and polish**, then optional surface treatment.

### Grade alternatives

**H11 / 1.2343** has lower carbon and vanadium, higher toughness and slightly lower hot hardness; it suits very large blocks and tools where gross cracking rather than heat checking is the failure. **1.2367** carries higher molybdenum for better high-temperature strength and thermal fatigue resistance, common on high-thermal-load inserts and magnesium tooling. **Maraging steel** such as 18Ni300 hardens by ageing at 480-500 °C rather than quenching, giving high toughness with minimal distortion; it suits thin cores and thermal-shock-critical details, but solders more readily with aluminium. **P20 / 1.2311** and **1.2738** at 28-34 HRC belong in holder blocks and plastic mould bases, not die casting cavities.

### Surface engineering

Gas or plasma nitriding produces a 0.10-0.20 mm diffusion case at 1,000-1,200 HV that resists soldering and erosion. The brittle compound layer cracks early, so on heat-check-critical surfaces it should be minimised; plasma nitriding controls it better than gas. PVD coatings (CrN, AlTiN) are 2-5 µm at 400-500 °C and do not temper the substrate. A hard coating on a soft substrate fails by eggshell collapse, so **duplex treatment** — nitride then PVD — is standard on aggressive applications.

## Engineering Parameters

| Parameter | Typical Range | Units | Notes / Driver |
|---|---|---|---|
| Austenitising temperature, H13 | 1,010-1,040 | °C | High end for hot strength, low for toughness |
| Austenitising soak | 30-60 | min at temperature | Plus equalisation holds during ramp |
| Gas quench pressure, N₂ | 5-10 | bar (0.5-1.0 MPa) | Higher for large sections |
| Quench rate, 1,040 → 550 °C | ≥ 28, ideally ≥ 40 | °C/min | Slow quench gives grain boundary carbides |
| As-quenched hardness | 52-56 | HRC | Before tempering |
| Tempering temperature | 560-620 | °C | Above the secondary hardening peak |
| Tempering cycles | 2-3 | cycles | 2 h per 25 mm, cool below 50 °C between |
| Working hardness, aluminium HPDC | 44-48 | HRC | Balances toughness and erosion resistance |
| Working hardness, magnesium HPDC | 46-50 | HRC | Lower thermal load allows harder steel |
| Working hardness, zinc HPDC | 46-52 | HRC | Wear-driven rather than fatigue-driven |
| Nitrided case depth | 0.10-0.20 | mm | Deeper cases embrittle thin details |
| PVD coating thickness | 2-5 | µm | On a nitrided substrate for load support |
| Surface finish before service | 0.1-0.4 | µm Ra | Polishing removes EDM recast layer |

```
Tempering: hardness falls roughly 1-2 HRC per 15-20 °C
above the secondary hardening peak (~510-530 °C for H13).
```

Section size shifts everything; a 400 mm block cannot be gas quenched at the rate of a 100 mm insert, so large blocks are specified slightly softer and tougher. Brass and copper alloy dies run at 40-44 HRC because the extreme thermal load demands toughness over hardness.

## Manufacturing Considerations

- **Buy to a standard, not a name.** Purchase orders should cite grade, quality level per NADCA #207 or an equivalent premium specification, delivery hardness, and certificate content including melting route and cleanliness rating.
- **Demand the heat treat chart.** A time-temperature-vacuum trace showing preheats, austenitising, quench pressure and each temper is the only evidence the cycle ran as specified; hardness cannot distinguish a good quench from a slow one.
- **Orient grain flow.** Where practical, present the longitudinal direction to the cavity surface rather than the short transverse direction.
- **Treat welding as a controlled repair.** Preheat to 350-400 °C, use matching filler, hold interpass temperature, and post-weld temper below the original tempering temperature.
- **Verify hardness on the insert**, in a non-functional area, not only on a coupon that saw a different quench path.
- **EDM leaves untempered recast.** Finish with fine settings, then stone or polish 0.05-0.15 mm off the affected surface before service.

## Common Mistakes

- **Mistake:** Specifying only "H13, 46-48 HRC" on the tool drawing. — **Why it fails:** Chemistry-compliant but dirty, poorly forged bar meets the spec and fails early with transverse cracking. — **Fix:** Add a quality level, cleanliness and impact toughness requirements, and demand mill certificates traceable to the heat.
- **Mistake:** Single tempering to save furnace time. — **Why it fails:** Retained austenite transforms in service to untempered martensite, which is brittle and grows dimensionally. — **Fix:** Two tempers minimum, three for large or critical inserts, with full cooling between cycles.
- **Mistake:** Tempering below the secondary hardening peak to reach target hardness. — **Why it fails:** The die hardens further in service and toughness collapses. — **Fix:** Reach the target from the high-temperature side of the curve.
- **Mistake:** Accepting a slow gas quench because hardness reads correctly. — **Why it fails:** Carbides precipitate on prior austenite grain boundaries; hardness is unaffected but impact toughness can halve, and the die cracks rather than crazes. — **Fix:** Specify a minimum cooling rate through the critical range and verify it on the furnace chart.
- **Mistake:** Machining a full cavity from annealed stock straight into hardening. — **Why it fails:** Locked-in machining stresses release during austenitising and distort the cavity. — **Fix:** Stress relieve after roughing and re-cut to near-net before hardening.
- **Mistake:** Nitriding large cosmetic cavity surfaces. — **Why it fails:** The brittle compound layer crazes under thermal cycling and prints a fine crack pattern onto every casting. — **Fix:** Restrict nitriding to cores, slides, gates and runners; keep cosmetic surfaces polished or thinly PVD coated.

## Related Articles

- [Die Life and Thermal Fatigue: Heat Checking Explained]({{< relref "die-life-and-thermal-fatigue.md" >}})
- [Die Casting Die Design: Structure, Slides and Ejection]({{< relref "die-casting-die-design.md" >}})
- [Mold and Die Maintenance: Preventive Program Design]({{< relref "mold-and-die-maintenance.md" >}})
- [Heat Treatment of Aluminum Castings: T5, T6 and T7]({{< relref "../materials/heat-treatment-of-castings.md" >}})
- [Die Thermal Management: Cooling Lines and Die Temperature]({{< relref "../die-casting/die-thermal-management.md" >}})

## References

1. **NADCA Publication #207 — Special Quality Die Steels and Heat Treatment Acceptance Criteria** — Primary purchasing and acceptance specification for die steel quality and heat treat validation. https://www.nadca.com
2. **ASM International, ASM Handbook Volume 4: Heat Treating** — Austenitising, quenching, tempering and secondary hardening behaviour of tool steels. https://www.asminternational.org
3. **ASTM A681 — Standard Specification for Tool Steels Alloy** — Chemistry and general requirements for H-series hot-work tool steels. https://www.astm.org
4. **Roberts, G., Krauss, G. and Kennedy, R., *Tool Steels*, 5th edition** — Reference text on tool steel metallurgy, alloy design and heat treat response.
5. **ISO 4957 — Tool steels** — European grade designations including 1.2344, 1.2343 and 1.2367. https://www.iso.org
