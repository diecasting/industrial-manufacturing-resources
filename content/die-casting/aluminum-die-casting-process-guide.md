---
date: 2026-08-06
title: "Aluminum Die Casting Process: Complete Engineering Guide"
description: "How aluminum die casting works end to end: cold chamber cycle, A380 and ADC12 alloys, shot parameters, die temperatures, tolerances and cost drivers."
keywords: ["aluminum die casting", "cold chamber die casting", "A380 alloy", "ADC12", "HPDC process", "die casting cycle time"]
category: "die-casting"
reading_time: "9 min"
last_updated: "2026-08-06"
---

# Aluminum Die Casting Process: Complete Engineering Guide

## Introduction
Aluminum die casting is the dominant net-shape process for medium and high volume aluminum components. Molten alloy is forced into a hardened steel die at gate velocities of tens of metres per second, solidifies in tens of milliseconds to a few seconds, and is ejected as a part that often needs nothing more than trimming and a few machined datums. The economics follow from that: a die costs money once, and then each part costs a fraction of what an equivalent machined billet would.


This guide walks through the cold chamber cycle step by step, sets out the alloy chemistry that actually governs castability, gives defensible numeric ranges for shot and thermal parameters, and explains where the process runs out of capability. After reading it you should be able to read a die casting process sheet, sanity-check a supplier's proposed machine size and cycle time, and identify which features on your drawing will drive tooling cost.
## Technical Explanation

### Cold chamber versus hot chamber

Aluminum is cast almost exclusively on cold chamber machines. Molten aluminum aggressively dissolves iron, so a submerged steel gooseneck of the type used in hot chamber machines would erode within days. In a cold chamber machine the shot sleeve is separate from the furnace: a ladle pours a metered charge through the pour hole, and a hydraulic plunger drives it into the die.

Zinc alloys run on hot chamber machines because their melt temperature is low enough (around 400 °C) that the gooseneck survives. Magnesium is the interesting middle case — AZ91D is cast both ways, hot chamber for small thin-wall parts and cold chamber for anything above roughly 2–3 kg of shot weight. The practical consequence for aluminum is a longer cycle, because ladling and sleeve transfer add time that a hot chamber machine does not spend.

### The production cycle, step by step

1. **Die close and lock.** The toggle or two-platen clamp closes and builds locking tonnage. Slides are driven in by hydraulic cylinders or angle pins.
2. **Vacuum activation** (if fitted). The valve opens once the plunger has sealed the pour hole.
3. **Ladle and pour.** A robot ladle transfers metal from the holding furnace into the shot sleeve. Sleeve fill ratio is targeted at 30–60 %.
4. **Slow shot.** The plunger advances at 0.15–0.5 m/s to move the metal front along the sleeve without breaking the wave and folding air into the melt.
5. **Fast shot.** At the changeover point, typically as metal reaches the gate, the plunger accelerates to 2–6 m/s. Cavity fill happens in 20–100 ms for thin-wall parts.
6. **Intensification.** After cavity fill, hydraulic pressure is multiplied and applied to the still-plastic biscuit, raising metal pressure to 40–100 MPa while the casting solidifies.
7. **Dwell.** Solidification continues under pressure until the gate freezes; further intensification then does nothing.
8. **Die open, eject, extract.** Ejector pins push the shot out; a robot or gravity chute removes it.
9. **Spray and blow-off.** Water-based release agent is applied to control die temperature and lubricate ejection, then blown dry to avoid steam-driven gas defects.

### Alloy chemistry and why it matters

The workhorse alloys are Al-Si-Cu families. A380 (roughly 8.5 % Si, 3.5 % Cu) is the North American default: good fluidity, good strength, poor corrosion resistance. A383 raises silicon and drops copper slightly, improving fill of thin sections and reducing hot cracking. A360 substitutes magnesium for copper, giving better corrosion behaviour and ductility at the cost of harder casting. A413 sits near the eutectic at 11–13 % Si and is chosen when pressure tightness matters more than strength. ADC12, defined in JIS H 5302, is chemically close to the A383/A380 family and is the dominant grade across Asian supply chains.

Iron content is not an impurity to be minimised in this process. Die casting alloys deliberately carry 0.7–1.1 % Fe because iron suppresses die soldering — the welding of aluminum to the H13 die surface. Above about 1.3 % Fe the alloy forms brittle β-Al₅FeSi platelets and, combined with manganese and chromium, can precipitate sludge in the holding furnace.

### Solidification under pressure

The reason die castings have good as-cast strength despite their porosity is the surface skin. Metal in contact with a die at 200 °C solidifies almost instantly, producing a fine, nearly pore-free layer typically 0.3–1.0 mm deep. Intensification pressure then feeds the interior against shrinkage while the gate remains open. Two failure modes follow directly from this physics: machining through the skin exposes subsurface porosity, and thick sections that freeze after the gate cannot be fed at all, so they form dendritic shrinkage voids regardless of how much intensification pressure the machine can deliver.

## Engineering Parameters

| Parameter | Typical Range | Units | Notes / Driver |
|---|---|---|---|
| Holding / pouring temperature | 640–700 | °C | Lower end for thick sections, upper end for thin wall and long flow paths |
| Die surface temperature | 180–250 | °C | 220–250 °C for walls below 2 mm; below 180 °C invites cold shut |
| Gate velocity | 30–60 | m/s | Under ~20 m/s risks misrun; over ~70 m/s accelerates gate erosion |
| Cavity fill time | 20–100 | ms | Scales with wall thickness and superheat |
| Slow shot velocity | 0.15–0.5 | m/s | Set to avoid wave breaking at the achieved sleeve fill ratio |
| Fast shot velocity | 2–6 | m/s | Plunger velocity, not gate velocity |
| Intensification pressure (metal) | 40–100 | MPa | 40–60 MPa general parts; 80–100 MPa for pressure-tight or structural |
| Shot sleeve fill ratio | 30–60 | % | Below 30 % the wave is hard to control; above 60 % limits stroke |
| Biscuit thickness | 15–30 | mm | Too thin and the pressure path freezes before feeding completes |
| Nominal wall thickness | 1.5–4.0 | mm | 0.8–1.2 mm achievable with hot dies and short flow lengths |
| Cycle time | 30–90 | s | Driven by wall thickness, shot weight and die cooling capacity |
| As-cast surface roughness | 0.8–3.2 | µm Ra | Degrades as the die accumulates heat checking |

Two sizing calculations do most of the work at quotation stage. Clamp force must exceed the force trying to open the die:

```
F_clamp = A_projected × P_intensification × SF      (SF = 1.2 to 1.5)
```

A part with 900 cm² projected area including runner and overflows, run at 60 MPa with a 1.3 safety factor, needs about 7,000 kN — a 700–800 tonne machine. Gate area follows from the volume that must pass in the allowed fill time:

```
A_gate = V_cavity / (v_gate × t_fill)
```

These ranges shift with alloy and geometry. Magnesium tolerates higher gate velocities and shorter fill times because of its lower density and heat content. Larger structural castings run lower gate velocities and longer fill times to limit air entrainment, and compensate with vacuum. Very thin heat-sink fins push die temperature to the top of the band and often need localised heating rather than cooling.


- **Tolerances.** Linear tolerance follows NADCA product standards: roughly ±0.1 to ±0.25 mm over the first 25 mm depending on whether a precision or standard grade is specified, plus about ±0.025 mm for each additional 25 mm. Dimensions crossing the parting line or formed by a slide carry an additional allowance and should be avoided for critical fits.
- **Machining stock.** Allow 0.5–1.0 mm on machined datum faces. Larger stock is not safer; it cuts deeper into the porous core.
- **Heat treatment.** Conventional HPDC castings cannot be solution treated. Entrapped gas expands at 480–500 °C and blisters the surface. T5 ageing is available; full T6 requires vacuum-assisted casting.
- **Volume break-points.** Below roughly 5,000 parts per year the tooling amortisation usually beats the piece-price saving only if the alternative is heavy machining. Above 50,000 per year, multi-cavity dies and automated trim become justified.
- **Die life.** Expect 80,000–150,000 shots from a well-maintained H13 aluminum die, with cavity inserts refurbished or replaced at intervals. Slides and core pins wear faster.
- **Inspection.** X-ray to ASTM E505 reference radiographs for internal soundness, pressure decay or helium testing for leak-tight housings, CMM for geometry after the first machining operation.
- **Sustainability.** Runners, biscuits and overflows are recycled internally, but each remelt cycle carries a 2–5 % metal loss to dross and burn-off, so casting yield still affects material cost.


## Manufacturing Considerations
## Common Mistakes
- **Mistake:** Specifying a uniform 5 mm wall "for strength" — **Why it fails:** thick sections freeze last, cannot be fed once the gate solidifies, and generate shrinkage porosity plus longer cycles — **Fix:** hold 2.5–3 mm nominal wall and add ribs for stiffness.
- **Mistake:** Requiring a leak-tight boundary on a surface that will be machined 2 mm deep — **Why it fails:** machining removes the dense skin and opens subsurface porosity into the sealing face — **Fix:** locate seal faces on as-cast surfaces or limit stock to 0.5 mm and specify impregnation.
- **Mistake:** Choosing the machine by tonnage alone — **Why it fails:** a large machine with an oversized sleeve gives a low fill ratio and an uncontrollable slow shot — **Fix:** check sleeve fill ratio lands in the 30–60 % window at the actual shot weight.

## Related Articles

- [Aluminum Die Casting Alloys: A380, ADC12, A356 Compared]({{< relref "../materials/aluminum-die-casting-alloys.md" >}})
- [High Pressure Die Casting Parameters: HPDC Process Control]({{< relref "high-pressure-die-casting-parameters.md" >}})
- [Die Casting DFM: Wall Thickness, Draft Angles and Ribs]({{< relref "die-casting-dfm-guidelines.md" >}})
- [Die Casting Die Design: Structure, Slides and Ejection]({{< relref "../tooling/die-casting-die-design.md" >}})
- [Machining Die Cast Components: Datums, Stock and Porosity]({{< relref "../cnc-machining/machining-die-cast-components.md" >}})

## References

1. **NADCA (North American Die Casting Association)** — Publishes the Product Specification Standards for Die Castings, covering linear tolerances, draft, flatness and surface quality grades. https://www.nadca.com
2. **ASM International, ASM Handbook Volume 15: Casting** — Reference chapters on high pressure die casting metallurgy, solidification under pressure and aluminum alloy selection. https://www.asminternational.org
3. **ASTM B85 / B85M — Standard Specification for Aluminum-Alloy Die Castings** — Defines chemical composition limits for A380, A383, A360 and A413 die casting alloys. https://www.astm.org
4. **ASTM E505 — Standard Reference Radiographs for Inspection of Aluminum and Magnesium Die Castings** — Provides the graded radiographic acceptance levels used in most casting drawings.
5. **JIS H 5302 — Aluminium Alloy Die Castings** — Japanese Industrial Standard defining ADC12 and related grades widely used in Asian production.
6. **AlumCasting** — Industry resource documenting aluminum die casting production practice, including cold chamber machine setup and alloy handling. https://www.alumcasting.com
