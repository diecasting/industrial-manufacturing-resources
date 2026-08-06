---
date: 2026-08-06
title: "Heat Treatment of Aluminum Castings: T5, T6 and T7"
description: "Why conventional HPDC aluminum castings are not heat treated, and how T5, T6 and T7 tempers work for low-porosity and vacuum die cast structural parts."
keywords: ["aluminum casting heat treatment", "T6 temper", "T5", "T7", "vacuum die casting", "solution treatment"]
category: "materials"
reading_time: "10 min"
last_updated: "2026-08-13"
---

# Heat Treatment of Aluminum Castings: T5, T6 and T7

## Introduction
Heat treatment is what converts an ordinary aluminum casting into a structural one. The T5, T6 and T7 tempers precipitation-strengthen the metal by putting magnesium and silicon into solution, then precipitating fine Mg2Si particles that block dislocation motion. The catch for die casters is that conventional high-pressure die casting traps gas in the shrinkage and entrained-air porosity, and that gas expands violently during the 495 to 540 °C solution soak, blistering the surface and distorting the part. This single phenomenon is why most HPDC parts ship in the as-cast (F) condition and why heat-treatable structural castings require vacuum-assisted or low-porosity processes.

This article explains the metallurgy of the T-tempers, why HPDC normally avoids them, and where T5, T6 and T7 are correctly applied. After reading, an engineer should know when to specify a temper, what property shift to expect, and why porosity governs the entire decision.

## Technical Explanation

### The precipitation sequence

In Al-Mg-Si and Al-Si-Mg systems the strengthening mechanism is age hardening. Solution treatment heats the part to roughly 495 to 540 °C, holding long enough to dissolve Mg and Si into a supersaturated solid solution. Quenching freezes that solution at room temperature. Aging then lets finely dispersed Mg2Si precipitates form; their spacing determines strength. Under-aging leaves strength low, peak-aging maximizes it, and over-aging coarsens the precipitates, trading some strength for stability and toughness.

### T5: stabilize and age, no solution soak

T5 skips solution treatment. The casting is cooled from the die, then artificially aged, typically 3 to 6 hours near 150 to 180 °C. T5 relieves residual stress and slightly raises strength and stability without the high-temperature soak that would blister porosity. It is the only temper safely applied to many conventional HPDC parts and is common for dimensional-stability-critical components that cannot tolerate distortion.

### T6: full solution plus age

T6 is the peak-strength temper: solution treat, quench, then age (commonly 6 to 8 hours at 150 to 170 °C). It is standard for sand and permanent-mold castings of A356/A357, lifting tensile from about 230 MPa as-cast to 300 MPa or more with elongation of 6 to 10 %. Applied to a porous HPDC part, the solution soak makes entrapped gas expand, the surface balloons into blisters, and thin sections warp. T6 on HPDC therefore requires vacuum-assisted casting with porosity below roughly 1-2 % and validated gas content.

### T7: overage for stability

T7 adds a longer or hotter aging step beyond peak, intentionally over-aging the precipitate. Strength drops a little below T6, but ductility and especially thermal and dimensional stability improve. T7 is chosen for structural castings that see elevated temperature or must hold tight dimensions over the product life, such as vacuum-cast nodes in vehicle structures where residual stress relief matters more than maximum strength.

### The porosity constraint

The mechanism is simple: gas in a pore follows the ideal-gas law, so at 500 °C the internal pressure is roughly double the room-temperature value while the surrounding metal softens. The pore grows and the skin bulges. Lowering porosity by vacuum-assisting the shot (pulling cavity pressure toward a few kPa) shrinks pore size and gas volume enough that T6 becomes feasible. This is the technical foundation of vacuum HPDC structural parts used in crash and battery-enclosure applications.

## Engineering Parameters

Typical ranges for A356-class castings; HPDC values shown where applicable.

| Temper | Solution (°C) | Quench | Age (°C × h) | Tensile (MPa) | Elongation (%) | Use case |
|---|---|---|---|---|---|---|
| F (as-cast) | none | none | none | 230 | 3-5 | general HPDC |
| T5 | none | none | 150-180 × 3-6 | 240-260 | 3-6 | stress relief, HPDC-safe |
| T6 | 495-540 | water/polymer | 150-170 × 6-8 | 300-310 | 6-10 | PM/sand, vacuum HPDC |
| T7 | 495-540 | water/polymer | 200-250 × 4-8 | 270-290 | 8-12 | stability, structurals |

Quench rate matters: too slow allows coarse precipitate at grain boundaries and loses strength; too fast risks distortion on thin sections. Polymer quench reduces warpage versus water for delicate geometries. The aging window is narrow; over-running the oven by 20 °C and several hours pushes T6 into T7 territory unintentionally, so furnace control is a quality item, not a detail.

## Manufacturing Considerations

- Porosity screening is mandatory before any T6 on HPDC: use X-ray or density-index (Archimedes) checks and a vacuum-assist shot record; a part that passes tensile may still blister in the oven.
- Furnace capability: solution ovens must hold ±5 °C across the load, and the quench tank must be sized so the load does not raise bath temperature enough to soften the quench.
- Distortion allowance: even low-porosity T6 parts move; build post-heat CNC stock and fixtures, and plan straightening only where the alloy permits.
- Process choice: specify sand or permanent mold when maximum properties are needed and volume is low-to-mid; reserve vacuum HPDC T6 for high-volume structural parts where tooling cost is justified.
- Cost: heat treatment adds furnace time, quench, potential straightening and re-inspection; it is a real per-part cost that must appear in the quote, not assumed free.
- Traceability: temper must be recorded on the drawing and the lot; shipping T6-labeled parts that were only T5 is a recurring conformity failure.

## Common Mistakes

- **Mistake:** Calling for T6 on a standard HPDC A380 part — **Why it fails:** baked-in porosity blisters and warps in the solution oven — **Fix:** use vacuum HPDC or accept T5/as-cast.
- **Mistake:** Assuming T6 always beats T5 in every metric — **Why it fails:** T7/T5 give better stability and the part may not need peak strength — **Fix:** match temper to the governing requirement.
- **Mistake:** Skipping porosity verification before heat treat — **Why it fails:** a visually fine part blisteres in the oven, scrapping the lot — **Fix:** X-ray or density-index gate the furnace load.
- **Mistake:** Over-aging by losing oven control — **Why it fails:** the part drifts into T7, losing specified strength — **Fix:** validate furnace calibration and soak recipe.
- **Mistake:** Water quenching thin delicate sections — **Why it fails:** thermal shock distorts the casting beyond recovery — **Fix:** use polymer quench or redesign for stiffness.
- **Mistake:** Heat treating without post-CNC stock — **Why it fails:** distortion leaves no material to true the datum — **Fix:** add machining allowance and dedicated fixtures.
- **Mistake:** Labeling as-cast parts "T6" on the CoC — **Why it fails:** conformity audit fails and field strength is short — **Fix:** tie temper to a verified process record.

## Related Articles

- [Vacuum Assisted Die Casting: Reducing Gas Porosity]({{< relref "../die-casting/vacuum-assisted-die-casting.md" >}})
- [Die Casting Porosity: Causes, Detection and Prevention]({{< relref "../die-casting/die-casting-porosity-prevention.md" >}})
- [Aluminum Die Casting Alloys: A380, ADC12, A356 Compared]({{< relref "aluminum-die-casting-alloys.md" >}})
- [Structural Castings and Crash Performance Requirements]({{< relref "../automotive/structural-castings-and-crash-performance.md" >}})
- [Tool Steels for Dies: H13 Selection and Heat Treatment]({{< relref "../tooling/tool-steels-and-heat-treatment.md" >}})

## References

1. **Aluminum Association, Aluminum Standards and Data** — T-temper definitions and typical property limits. https://www.aluminum.org
2. **ASM International, ASM Handbook Volume 4: Heat Treating** — solution treatment, quench and aging of Al castings. https://www.asminternational.org
3. **NADCA Heat Treatment Practice for Die Castings** — porosity limits and T5/T6 feasibility for HPDC. https://www.nadca.com
4. **ASTM B597** — Standard practice for heat treatment of aluminum alloys. https://www.astm.org
5. **ISO 3522 / EN 1706** — casting alloy designation and temper codes for aluminum. https://www.iso.org
6. **SAE AMS2771** — heat treatment of aluminum alloy castings, process requirements. https://www.sae.org
