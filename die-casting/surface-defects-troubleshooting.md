---
title: "Die Casting Surface Defects: Troubleshooting Guide"
description: "Identify and correct die casting surface defects: cold shut, flow lines, soldering, blisters, flash, sink marks, drag marks and heat check veins on castings."
keywords: ["die casting defects", "cold shut", "die soldering", "flow lines casting", "blisters die casting", "flash troubleshooting"]
category: "die-casting"
reading_time: "10 min"
last_updated: "2026-08-06"
---

# Die Casting Surface Defects: Troubleshooting Guide

## Introduction
Surface defects are the fastest feedback loop in a die casting cell. Internal porosity needs sectioning or radiography to find; a cold shut is visible on the part as it leaves the trim press. That immediacy makes surface condition the most practical daily indicator of whether the process is in control, provided the person looking at the part can tell one defect from another.


This guide is organised the way a diagnosis actually proceeds: by what the defect looks like and where it sits, then by mechanism, then by countermeasure in the order that costs least to try. It covers the defects that appear on the casting surface. Internal porosity and dimensional problems are treated separately.
## Technical Explanation

### Fill-related defects

**Cold shut (cold lap)** appears as a smooth, rounded seam where two metal fronts met without fusing. Under magnification the seam has a rounded lip rather than a torn edge, and it is usually oriented across the direction of flow. It occurs at the far end of a flow path, at the junction of two gates, or around a core pin where the stream divided and rejoined. The metal was too cold, too slow, or had travelled too far. Every countermeasure raises the temperature of the front when it arrives: hotter die, hotter metal, shorter fill time, shorter flow path, or a relocated gate.

**Misrun** is the same mechanism carried to completion — the cavity simply did not fill and the edge is rounded and incomplete. Distinguish it from a broken or trimmed feature by the rounded, flowed edge.

**Flow lines and swirl marks** are cosmetic surface traces where the front slowed, restarted or changed direction. Unlike a cold shut there is no separation, only a visible boundary. They point to marginal fill conditions rather than failure, and they are the first thing to appear when die temperature drifts down.

**Lamination** looks like a thin flake or skin lifting from the surface. It forms when metal that solidified early — often against a cold sleeve or in an over-fast slow shot — is carried into the cavity as a solid film and pressed onto the surface. Fixing it means going back to sleeve and slow-shot conditions, not to the die.

**Jetting** produces a rope-like or worm-track pattern radiating from the gate. The stream entered as a free jet, broke up, and the individual droplets oxidised before re-fusing. The gate is directed into open space or the gate velocity is too high for the geometry.

### Interface defects

**Soldering** is a metallurgical weld between the aluminum and the die steel. Iron and aluminum form intermetallic layers at the interface, and once a patch has formed it grows on every subsequent shot. On the casting it appears as a rough, torn area with material missing; on the die it appears as a raised aluminum deposit. Soldering concentrates where die temperature is highest and metal velocity is greatest, so gate regions, core pin tips and thin core sections suffer first.

Three defences work together. Alloy iron content of 0.7–1.1 % saturates the interface reaction and is the classical suppressant. Local die temperature must be kept down, because the reaction accelerates sharply above roughly 480 °C at the surface. Surface engineering — nitriding, or a PVD coating such as CrN or AlTiN on inserts and pins — provides a barrier.

**Erosion (washout)** is mechanical, not metallurgical: the high-velocity stream abrades the steel, usually at the gate or directly opposite it. The eroded profile then transfers to every casting as a raised lump. Erosion and soldering often occur together and are frequently confused; erosion leaves a smooth crater in the steel, soldering leaves a raised deposit.

**Drag marks and scoring** are longitudinal scratches in the ejection direction. They mean the casting was pulled across the steel rather than releasing cleanly: insufficient draft, a polished-in the wrong direction surface, a galled core, or unbalanced ejection.

### Gas-related surface defects

**Blisters** are raised, rounded bumps that appear after heating rather than at ejection. Subsurface gas, compressed during intensification, expands when the casting is heated and the metal softens. A part that ejects clean and blisters in the paint bake oven has a gas content problem, not a paint problem.

**Chill marks and water marks** are dull, mottled patches caused by residual release agent or water flashing to steam at the moment the metal front arrives. They track directly with spray volume and blow-off time.

### Geometry-related defects

**Sink marks** are shallow depressions on a surface opposite a thicker feature — typically the back of a rib or boss. The heavy junction solidifies last, contracts, and pulls the adjacent skin inward. They are a design and thermal problem; no process parameter fixes a sink caused by a rib at full wall thickness.

**Flash** is metal that escaped between die faces. Its position identifies the cause: flash all around the parting line means clamp force is insufficient or the impact spike is too high; flash in one region means the die is deflecting locally or the faces have worn; flash at a slide means the locking wedge is worn or contaminated.

### Die-condition defects

**Heat check veins** are fine raised lines forming a network on the casting, reproducing cracks in the die surface. They are irreversible in the die and progress over its life. Their onset rate is governed by die steel quality, heat treatment, the surface temperature amplitude per cycle and the severity of spray quenching.

**Ejector pin witness** and **parting line witness** are not defects unless they exceed the specified limits, but they need to be defined on the drawing or they will be argued about at every shipment.

## Engineering Parameters

| Parameter | Working Window | Units | Defect it Controls |
|---|---|---|---|
| Die surface temperature, aluminum | 180–250 | °C | Below 180 °C: cold shut, flow lines. Above 260 °C: soldering |
| Metal temperature at ladle | 640–700 | °C | Low end: misrun. High end: soldering, die erosion, longer cycle |
| Gate velocity | 30–60 | m/s | Below 20 m/s: cold shut. Above 70 m/s: erosion, jetting |
| Cavity fill time | 20–100 | ms | Long fill: cold shut and flow lines on the last-fill region |
| Alloy iron content | 0.7–1.1 | % | Below 0.6 %: rapid soldering. Above 1.3 %: brittle β-phase |
| Sludge factor, %Fe + 2×%Mn + 3×%Cr | ≤ 1.8 | index | Above this, sludge precipitates in the holding furnace |
| Clamp force utilisation | 60–85 | % of rating | Above 85 %: parting line flash under the impact spike |
| Impact pressure spike | 1.5–3 × fill pressure | ratio | Uncontrolled spike drives flash and parting line wear |
| Release agent dilution | 1:50–1:150 | ratio | Rich mix: chill marks and gas. Lean mix: drag and soldering |
| Spray time | 0.5–3 | s | Excess spray produces chill marks and lowers die temperature |
| Blow-off time | 1–3 | s | Insufficient blow-off leaves water that flashes to steam |
| Draft, external surfaces | 1–3 | degrees | Insufficient draft causes drag marks and scoring |
| Draft, cores and internal walls | 2–5 | degrees | The casting shrinks onto cores and grips them |
| Blister screening test | 480–500 °C for 30 | °C / min | Pass criterion for heat-treatable and painted parts |
| Nitrided case depth on inserts | 0.1–0.2 | mm | Soldering and erosion resistance on gate inserts and pins |
| Flash witness after trim | 0.15–0.4 | mm | Specify on the drawing or it will be disputed |

The windows interact, which is why single-parameter troubleshooting so often fails. Raising die temperature cures a cold shut and simultaneously moves the process toward soldering. Increasing gate velocity cures a cold shut and moves toward erosion and jetting. Adding spray cures a soldering patch and introduces chill marks and gas. The productive approach is to identify which constraint is actually binding — usually thermal — and relieve it in the die rather than trading one defect for another at the control panel.


- **Keep a physical defect reference set.** Boundary samples for each defect type, agreed with the customer and stored at the machine, resolve more disputes than any written specification.
- **Log defects by zone, not by count.** A tally of "12 cold shuts" tells nobody anything. A marked-up drawing showing where they occur points straight at the fill pattern.
- **Separate die-condition defects from process defects in the reporting.** Heat check veins and worn parting lines get worse monotonically; they belong in the maintenance plan, not in the daily process review.
- **Inspect the die, not only the part.** Soldering, erosion and heat checking are all visible on the steel at a die change and can be measured with a silicone impression before they become part defects.
- **Surface engineering has a clear cost case on consumable inserts.** Nitriding or a PVD coating on gate inserts and core pins typically extends the interval between polish-outs several times over, at modest cost.
- **Cosmetic requirements need a defined life context.** As-cast finish degrades through the die's life. A specification of Ra 1.6 µm should state whether it applies at T1 or at 100,000 shots, or the requirement is unenforceable.
- **Trim condition affects apparent surface quality.** A worn trim punch tears rather than shears, leaving a witness that gets reported as a casting defect. Check the trim die before investigating the casting process.


## Manufacturing Considerations
## Common Mistakes
- **Mistake:** Raising metal temperature to cure a cold shut — **Why it fails:** superheat is lost within a few milliseconds of contact with the die, so the effect on the front temperature at the far end of the cavity is small, while soldering and die wear increase immediately — **Fix:** raise die temperature instead, and shorten the flow path or fill time.
- **Mistake:** Polishing a soldered area on the die and returning to production unchanged — **Why it fails:** soldering is a thermal and chemical condition, so the patch re-forms in the same place within hours — **Fix:** check alloy iron content and local die temperature, then apply a coated or nitrided insert at that location.

## Related Articles

- [Die Casting Porosity: Causes, Detection and Prevention](./die-casting-porosity-prevention.md)
- [Die Thermal Management: Cooling Lines and Die Temperature](./die-thermal-management.md)
- [Die Casting Gating and Runner Design Fundamentals](./gating-and-runner-design.md)
- [Die Life and Thermal Fatigue: Heat Checking Explained](../tooling/die-life-and-thermal-fatigue.md)
- [Surface Treatment for Castings: Anodizing, Coating, Plating](../materials/surface-treatment-and-coatings.md)

## References

1. **NADCA Product Specification Standards for Die Castings** — Contains the surface quality grade definitions and cosmetic classification system used to specify acceptable casting surfaces. https://www.nadca.com
2. **ASM International, ASM Handbook Volume 15: Casting** — Mechanisms of defect formation during rapid filling and solidification, including soldering and interface reactions. https://www.asminternational.org
3. **John Campbell, "Castings" (Butterworth-Heinemann)** — Explains oxide film entrainment and its role in laminations, cold shuts and surface discontinuities.
4. **ASTM B85 / B85M — Standard Specification for Aluminum-Alloy Die Castings** — Composition limits, including the iron content ranges relevant to soldering behaviour. https://www.astm.org
5. **ISO 25178 — Geometrical product specifications: Surface texture, areal** — Framework for specifying and measuring as-cast and machined surface condition. https://www.iso.org
6. **ASTM A681 — Standard Specification for Tool Steels Alloy** — Reference for the H13 die steel whose surface condition governs heat check and erosion defects.
