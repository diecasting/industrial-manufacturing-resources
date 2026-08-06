---
title: "Machining Die Cast Components: Datums, Stock and Porosity"
description: "Machining die cast components: datum strategy on as-cast surfaces, machining stock allowances, subsurface porosity on sealing faces and silicon tool wear."
keywords: ["machining die castings", "datum targets", "machining stock allowance", "subsurface porosity", "adc12 machining", "pcd tooling"]
category: "cnc-machining"
reading_time: "9 min"
last_updated: "2026-08-06"
---

# Machining Die Cast Components: Datums, Stock and Porosity

## Introduction

A die casting arrives at the machining cell as a near-net part with a dense skin, an unpredictable interior, and dimensional variation that follows die wear, thermal state and shot-to-shot process drift rather than a machine tool's repeatability. Treating it as a block of billet with some material already removed is the fastest route to scrap. Almost every recurring problem in this operation traces back to one of three decisions: where the datums are, how much stock was left, and whether anyone considered what lies under the skin.

The commercial stakes are significant because machining frequently costs more than the casting itself. Yield losses appear late, after value has been added, when a bore breaks into a gas pore or a sealing face fails a pressure test. Those failures are usually designed in rather than caused on the shop floor.

This chapter covers datum strategy on as-cast surfaces, realistic stock allowances, the metallurgy of the cast skin and why removing too much of it is worse than removing too little, the behaviour of porosity intersecting machined features, and the tooling implications of 8 to 12 percent silicon.

## Technical Explanation

### The casting is not a billet

High pressure die casting fills a steel die in tens of milliseconds and solidifies under intensification pressure. The metal touching the die face cools fastest and forms a fine-grained, low-porosity chill layer typically 0.3 to 0.7 mm thick, with dendrite arm spacing far finer than the interior. That skin is the strongest, densest and most pressure-tight material in the part. Below it, solidification is slower, and both entrapped-gas porosity and shrinkage porosity concentrate towards the thermal centre of each section.

The design implication is direct: every millimetre of stock removed from a cast face trades away the best material and moves the machined surface closer to the porous core. Machining allowance should be the minimum that reliably cleans up, not a comfortable margin.

### Datum strategy and the first-operation transfer

Cast surfaces vary. Draft angles, die wear, parting line mismatch, ejector pin witness marks and flash all shift the local geometry from shot to shot. Locating on such surfaces without discipline produces parts that measure differently depending on which point the fixture happened to touch.

The accepted method is datum targets as defined in ASME Y14.5: specific points, lines or small areas on the as-cast surface, dimensioned in the drawing and reproduced exactly in the fixture. Six targets in a 3-2-1 arrangement fully constrain the casting. Choose targets on surfaces formed by a single die half, never across the parting line, and never on a slide-formed face if a fixed-half alternative exists, because slide position adds its own variation.

A robust sequence looks like this:

1. Casting supplier holds the as-cast tolerance at the datum target locations and controls flash there.
2. Operation 10 locates on the as-cast datum targets and machines a set of pads, a face and two holes.
3. Those machined features become datums A, B and C for everything downstream.
4. Operation 20 locates on the machined datums, giving normal machining repeatability for the remaining features.
5. Inspection references the same machined datum reference frame used in operation 20.

This transfer from cast targets to machined datums is what decouples downstream accuracy from casting variation. Skipping it, and locating every operation on cast features, is a common cause of drifting position results across a production run.

### Cast skin, flash and interrupted cutting

The first pass across an as-cast face is an interrupted cut through a hard, sometimes oxidised layer that may carry flash, die release residue and embedded particles. Entry shock chips edges. Practical measures: use a tougher insert grade for the first pass rather than the finishing grade, reduce feed on entry, program the cutter to engage over an edge rather than plunging into the skin, set depth of cut deep enough to pass beneath the outer layer rather than skimming it, and specify deflashing before machining where flash exceeds a few tenths of a millimetre.

### Porosity where it matters

Porosity is unavoidable in conventional HPDC; the question is where it is and whether machining exposes it. Sealing faces, bore surfaces, tapped holes and any feature carrying a pressure boundary are the sensitive locations. A pore that was harmless at 2 mm below the surface becomes a leak path once a face is machined down to it.

Design responses, in order of preference: keep the pressure boundary in as-cast skin where possible; place machined sealing faces over sections that fill early and solidify under pressure, away from the last-to-freeze thermal centre; keep tapped holes shallow and away from heavy junctions; and where leakage risk remains, specify vacuum resin impregnation as a planned process step rather than a rework. Casting process choices matter too: vacuum assistance and high-integrity variants substantially reduce gas porosity and widen the machinable envelope.

Conventional HPDC also cannot be solution treated. Heating to the 480-540 °C range needed for T6 expands entrapped gas and raises surface blisters, so strength recovery after machining is limited to a T5 artificial age at roughly 150-250 °C. Only vacuum or squeeze cast parts with low gas content tolerate full T6.

### Silicon and tool wear

A380 and ADC12 contain 8 to 12 percent silicon, present as eutectic and sometimes primary particles with hardness comparable to the carbide grains in a cutting tool. Wear is abrasive and continuous rather than thermal. Carbide works at moderate speeds but tool life is short by wrought-aluminium standards. In volume production, polycrystalline diamond tooling is the standard answer, delivering tool life measured in tens of thousands of parts on face milling and boring operations. Copper content in A380 also raises hardness slightly compared with lower-copper ADC12 equivalents.

## Engineering Parameters

| Parameter | Typical Range | Units | Notes / Driver |
|---|---|---|---|
| Machining stock, general cast face | 0.3-1.0 | mm | Below 0.3 mm risks non-cleanup on draft |
| Machining stock, sealing or bearing face | 0.5-1.0 | mm | Must clear draft and parting line mismatch |
| Machining stock, cored hole to be bored | 0.5-1.5 | mm on diameter | Cored holes carry draft of 1-2° |
| Chill layer (skin) depth | 0.3-0.7 | mm | Densest, most pressure-tight material |
| As-cast linear tolerance, NADCA precision | ±0.1-0.4 | mm | Size dependent, per NADCA tolerance tables |
| Parting line mismatch allowance | 0.1-0.4 | mm | Add to stock on faces crossing the split |
| Draft angle on machined cast faces | 1-3 | degrees | Stock must cover the draft over the face |
| v_c, carbide in A380 / ADC12 | 200-500 | m/min | Abrasive Si limits life |
| v_c, PCD in A380 / ADC12 | 600-1,500 | m/min | Standard for volume production |
| f_z, 10 mm endmill | 0.06-0.15 | mm/tooth | Reduce on interrupted first passes |
| Tapped hole depth in cast wall | 1.5-2.0 × D | — | Deeper engagement meets porosity |
| Leak test pressure, typical housing | 0.05-0.5 (0.5-5 bar) | MPa | Air-under-water or pressure decay |

Stock allowance scales with part size and casting class. Small precision castings under 100 mm can run 0.3-0.5 mm on critical faces; large structural castings above 500 mm need 0.8-1.5 mm because die thermal distortion and part shrinkage variation are larger. Alloy matters as well: ADC12 and A380 behave similarly, while A356 gravity or low-pressure castings have lower silicon, cut more like wrought aluminium, and accept full T6 heat treatment, which changes both machinability and the sequence in which machining should occur.

## Manufacturing Considerations

- **Agree the datum scheme jointly.** The casting drawing, the machining fixture and the inspection fixture must all use the same datum targets. Divergence here produces parts that pass at one supplier and fail at the next.
- **Machine after heat treatment, not before**, where any thermal process is used, because dimensional movement during ageing exceeds most machined tolerances.
- **Budget for cored hole runout.** A cored hole can be displaced by core pin deflection; boring must have enough stock on the worst-case side, not the nominal side.
- **Do not form tap A380.** Elongation of around 3 percent is too low for cold forming threads reliably; use cut taps with adequate chip evacuation.
- **Consider leak test placement.** Testing before machining catches casting defects cheaply; testing after machining is the only test that reflects the finished pressure boundary. High-value parts often get both.
- **Plan for impregnation capacity** if the design places sealing faces over thick sections. Retrofitting impregnation into a running programme is disruptive.
- **Track die life against machining yield.** As the die ages, dimensional drift and flash increase, and non-cleanup rejects usually rise before the casting supplier's own inspection flags a problem.
- **Vacuum assist widens the machining envelope.** Lower gas content permits deeper cuts into the casting and reduces impregnation demand.

## Common Mistakes

- **Mistake:** Specifying 2-3 mm of machining stock on cast faces to be safe. — **Why it fails:** It removes the dense chill layer and cuts into the porous core, converting a sound face into a leak path. — **Fix:** Set stock at 0.3-1.0 mm and control casting dimensional capability instead.
- **Mistake:** Locating the machining fixture on a surface that crosses the parting line. — **Why it fails:** Die mismatch and flash shift the contact point between shots, so the whole coordinate frame moves. — **Fix:** Place datum targets on features formed entirely by one die half.
- **Mistake:** Carrying as-cast datums through every operation. — **Why it fails:** Every operation inherits casting variation instead of machine repeatability. — **Fix:** Machine a datum set in the first operation and reference all later work to it.
- **Mistake:** Putting a machined O-ring groove over the thickest section of the casting. — **Why it fails:** The thermal centre is where shrinkage porosity concentrates, so the groove root intersects voids. — **Fix:** Move the sealing feature onto a thinner, earlier-solidifying region, or seal on as-cast skin.
- **Mistake:** Specifying T6 temper on a conventional high pressure die casting. — **Why it fails:** Solution treatment above about 480 °C expands entrapped gas and blisters the surface. — **Fix:** Use T5 ageing, or move to vacuum, squeeze or semi-solid casting if T6 properties are essential.
- **Mistake:** Running wrought-aluminium cutting speeds on A380. — **Why it fails:** Silicon particles abrade the edge and carbide tool life collapses. — **Fix:** Use 200-500 m/min with carbide, or PCD tooling for production volumes.
- **Mistake:** Deep tapped holes into heavy bosses. — **Why it fails:** Thread engagement extends into the porous centre, so torque capability scatters and threads strip. — **Fix:** Limit engagement to 1.5-2 diameters and place bosses on ribs rather than solid masses.
- **Mistake:** Treating a non-cleanup reject as a machining problem. — **Why it fails:** The root cause is casting dimensional drift or insufficient allowance, and shop-floor adjustment cannot recover it. — **Fix:** Feed the data back to casting process control and review the stock model.
- **Mistake:** Skipping deflashing before the first machining pass. — **Why it fails:** Flash at the parting line creates severe interrupted cuts that chip inserts on entry. — **Fix:** Specify trimming and deflashing limits on the casting drawing.

## Related Articles

- [Die Casting DFM: Wall Thickness, Draft Angles and Ribs](../die-casting/die-casting-dfm-guidelines.md)
- [Die Casting Porosity: Causes, Detection and Prevention](../die-casting/die-casting-porosity-prevention.md)
- [Aluminum Die Casting Alloys: A380, ADC12, A356 Compared](../materials/aluminum-die-casting-alloys.md)
- [Machining Aluminum Alloys: Parameters and Tooling](./machining-aluminum-alloys.md)
- [Workholding and Fixture Design for CNC Machining](./workholding-and-fixture-design.md)

## References

1. **NADCA Product Specification Standards for Die Castings** — publishes the standard and precision tolerance tables, draft requirements and machining stock guidance used across the industry. https://www.nadca.com
2. **ASME Y14.5 — Dimensioning and Tolerancing** — defines datum targets, the mechanism for locating on as-cast surfaces in a repeatable way.
3. **ASTM B85 / B85M — Standard Specification for Aluminum-Alloy Die Castings** — chemistry and general requirements for A380 and related alloys. https://www.astm.org
4. **ASM Handbook, Volume 15: Casting, ASM International** — solidification behaviour, chill layer formation and porosity mechanisms in pressure die casting. https://www.asminternational.org
5. **[AlumCasting](https://www.alumcasting.com)** — an aluminium die casting manufacturer resource covering alloy selection, casting process control and the machining allowances applied to cast components.
6. **MIL-I-17563 — Impregnation of porous nonferrous metal castings** — the long-standing specification governing resin impregnation of leaking castings.
7. **ASM Handbook, Volume 16: Machining, ASM International** — cutting data and tool material selection for high-silicon aluminium casting alloys.
