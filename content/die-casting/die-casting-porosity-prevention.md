---
date: 2026-08-06
title: "Die Casting Porosity: Causes, Detection and Prevention"
description: "Die casting porosity explained: gas versus shrinkage mechanisms, hydrogen, blistering, X-ray and CT detection, leak testing, impregnation and prevention."
keywords: ["die casting porosity", "gas porosity", "shrinkage porosity", "X-ray casting inspection", "leak testing castings", "vacuum impregnation"]
category: "die-casting"
reading_time: "10 min"
last_updated: "2026-08-06"
---

# Die Casting Porosity: Causes, Detection and Prevention

## Introduction
Porosity is the defect that defines the commercial boundaries of high pressure die casting. Nearly every die casting contains some. The engineering question is never whether pores exist but where they are, how large they are, what created them, and whether the part's function tolerates them. A cover plate with 3 % internal void fraction may be entirely acceptable; the same void fraction under a machined sealing face makes the part scrap.


This article sets out the mechanisms, gives the visual and metallographic signatures that let an engineer identify which one is present, reviews the detection methods and what each can and cannot resolve, and describes the practical prevention hierarchy from part design through to impregnation.
## Technical Explanation

### Gas porosity from entrapped air

The dominant source in conventional HPDC is simply the air that was in the runner and cavity. A turbulent metal front folds gas into itself in the shot sleeve during an over-fast slow shot, at the gate where the jet breaks up, and wherever two flow fronts meet and enclose a pocket.

The signature is characteristic: pores are **rounded or spherical**, have **smooth internal walls**, and often lie in a **subsurface layer** a millimetre or two below the skin. They cluster where flow fronts converged. Under intensification they are compressed to a small fraction of their original volume, so a machined section can look clean until heat is applied and the gas expands.

### Gas from lubricant and hydrogen

Water-based release agent that has not been blown dry flashes to steam on contact with a 220 °C die. Plunger lubricant decomposes in the sleeve. Both add gas at exactly the wrong moment. This source is easy to identify because it correlates with spray settings and with position relative to the sprayed area.

Dissolved hydrogen is the third contributor. Aluminum dissolves roughly twenty times more hydrogen in the liquid state than in the solid, so hydrogen is rejected at the solidification front and precipitates as fine, evenly distributed round pores. In HPDC the effect is smaller than in gravity casting because solidification is very fast and pressure is high, but a wet furnace, damp charge material or a long holding time will produce it. Melt hydrogen level is assessed with a reduced pressure test: a sample solidifies under about 80 mbar, and the density difference against a sample solidified at atmosphere gives a density index.

### Shrinkage porosity

Aluminum contracts by roughly 4–6 % on freezing. If liquid cannot flow into the region that is contracting, the deficit appears as a void. Shrinkage pores look nothing like gas pores: they are **irregular, angular, often interconnected**, and their walls show **dendrite arms** under magnification.

Location is diagnostic. Shrinkage sits at thermal hot spots — thick bosses, rib-wall intersections, the last region to solidify, and just behind the gate where the metal remained hottest. It is a geometry and thermal problem, not a filling problem.

The feeding chain during solidification runs from the biscuit, through the runner, through the gate, into the casting. Once any link in that chain freezes, everything downstream is isolated. This is why a thin gate that freezes in 50 ms leaves a 6 mm boss unfed no matter how high intensification pressure is set.

### Reading the evidence

A structured diagnosis takes four steps:

1. **Section and polish** through the suspect region rather than judging from a broken face.
2. **Classify pore morphology** at 25–100×: rounded and smooth means gas, dendritic and irregular means shrinkage.
3. **Map location** against the fill simulation and against a thermal image of the die at ejection.
4. **Correlate with process data** — vacuum level, spray time, die temperature, intensification rise time — for the specific shot if traceability allows.

Mixed defects are common. A hot spot may contain shrinkage that was enlarged by gas coming out of solution into the void as it opened. In that case the shrinkage is the primary target.

### Blistering

Blisters are not a separate defect but a symptom. Subsurface gas, compressed to high pressure during intensification, expands when the casting is heated and the surrounding metal softens. Paint bake cycles at 180–200 °C raise small blisters; T6 solution treatment at 480–530 °C raises severe ones. A 30-minute exposure at 480–500 °C is the standard screening test, and passing it is the practical definition of a gas-free casting.

## Engineering Parameters

| Parameter | Typical Range / Value | Units | Notes / Driver |
|---|---|---|---|
| Solidification shrinkage, aluminum | 4–6 | % by volume | Sets the total volume that must be fed |
| Hydrogen solubility ratio, liquid to solid | ~20:1 | ratio | Drives hydrogen rejection at the freezing front |
| Melt hydrogen, acceptable | 0.10–0.25 | cm³/100 g | Measured by reduced pressure test or probe |
| Total gas content, conventional HPDC | 10–30 | cm³/100 g | Vacuum fusion or density comparison |
| Total gas content, heat treatable | < 5 | cm³/100 g | Threshold for blister-free T6 |
| Dense skin depth | 0.3–1.0 | mm | Machining beyond this exposes subsurface porosity |
| Maximum pore diameter, machined seal face | 0.3–0.8 | mm | Typical customer limit; often with a spacing rule |
| Pore area fraction on a sectioned face | 1–5 | % | Common acceptance band for general structural areas |
| X-ray film / digital detector resolution | 0.05–0.2 | mm | Detects voids above roughly 1–2 % of wall thickness |
| Industrial CT voxel size | 50–200 | µm | Gives 3D pore size distribution and true maximum |
| Pressure decay leak test | 0.5–3 | bar | Resolves roughly 1 × 10⁻³ mbar·L/s |
| Helium mass spectrometry | — | — | Resolves down to 1 × 10⁻⁶ mbar·L/s |
| Blister test | 480–500 °C for 30 | °C / min | Pass = no visible surface blistering |
| Squeeze pin diameter | 8–25 | mm | Local feeding of an isolated thick section |

Detection capability and acceptance criteria are separate things and should be specified separately. Two-dimensional radiography compares an image against graded reference standards and is fast enough for production sampling, but it integrates through the thickness and can miss a flat void oriented parallel to the beam. Computed tomography resolves pore geometry and position in three dimensions and is the right tool for process development and for correlating porosity with fatigue results, but throughput and cost keep it out of most production streams.

Acceptance limits shift with function. A fatigue-loaded structural node needs a limit on maximum pore size and on pore proximity to the surface, because a near-surface pore acts as a crack initiator. A hydraulic housing needs a leak rate limit and cares about interconnected paths rather than pore size. A cosmetic housing cares only about what appears after machining and painting.


- **Design first.** Uniform wall thickness removes hot spots before any process parameter is touched. Coring out a thick boss is more effective than any amount of intensification.
- **Gate for feeding, not just filling.** The gate must remain liquid longer than the section it feeds. A thicker gate at a thick section costs trim effort and buys soundness.
- **Vacuum addresses gas only.** It has no effect on shrinkage. A part that is porous at a boss will remain porous under vacuum.
- **Local squeeze pins work where geometry cannot change.** A hydraulically driven pin advances into a thick section shortly after fill, forcing liquid metal into the shrinking region. Timing is critical: too early and it displaces liquid metal into the cavity, too late and the region has already frozen.
- **Melt handling.** Rotary degassing with argon or nitrogen, clean charge stock, dry tools and controlled holding time keep hydrogen down. Fluxing and dross removal reduce oxide inclusions that act as pore nucleation sites.
- **Machining strategy.** Keep stock at 0.5 mm or less on faces that must remain sound, and locate sealing surfaces where the fill simulation shows early, well-fed metal.
- **Impregnation as a controlled remedy.** Vacuum-pressure impregnation with a methacrylate resin seals interconnected microporosity and is standard practice for pressure-tight housings. It is a legitimate production step when specified in advance, not a rework to hide a process problem, and it does nothing for structural strength.
- **Sampling plan.** Correlate a radiographic or CT sample with a destructive section at PPAP, then run production on the faster method with periodic destructive verification.


## Manufacturing Considerations
## Common Mistakes
- **Mistake:** Raising intensification pressure to cure rounded subsurface pores — **Why it fails:** compressing trapped air makes it invisible on a section but it re-expands during paint bake or heat treatment — **Fix:** remove the gas at source through vacuum, vent redesign and slow-shot correction.
- **Mistake:** Adding vents to fix a void at a thick boss — **Why it fails:** the void is dendritic shrinkage caused by an isolated hot spot; there was never any gas to vent — **Fix:** section and classify the pore morphology before selecting a countermeasure.
- **Mistake:** Judging porosity from a fracture surface — **Why it fails:** the crack path follows the weakest plane and preferentially links pores, exaggerating both size and quantity — **Fix:** section, mount and polish, then measure area fraction by image analysis.
- **Mistake:** Specifying "porosity free" on a drawing — **Why it fails:** the requirement is unmeasurable and unachievable in HPDC, so the supplier either prices in a huge scrap allowance or ignores it — **Fix:** specify a graded radiographic level per ASTM E505 by zone, or a maximum pore size and leak rate on defined surfaces.

## Related Articles

- [Vacuum Assisted Die Casting: Reducing Gas Porosity]({{< relref "vacuum-assisted-die-casting.md" >}})
- [Die Casting Shot Profile and Intensification Pressure]({{< relref "shot-profile-and-intensification.md" >}})
- [Die Thermal Management: Cooling Lines and Die Temperature]({{< relref "die-thermal-management.md" >}})
- [Machining Die Cast Components: Datums, Stock and Porosity]({{< relref "../cnc-machining/machining-die-cast-components.md" >}})
- [Inspection and Acceptance Criteria for Production Parts]({{< relref "../supplier-selection/inspection-and-acceptance-criteria.md" >}})

## References

1. **ASTM E505 — Standard Reference Radiographs for Inspection of Aluminum and Magnesium Die Castings** — Defines the graded discontinuity levels most casting drawings reference for internal soundness. https://www.astm.org
2. **ASTM E2422 — Standard Digital Reference Images for Inspection of Aluminum Castings** — Digital equivalent used with modern radiographic detectors and automated evaluation.
3. **NADCA Product Specification Standards for Die Castings** — Provides quality class definitions and guidance on porosity expectations by casting zone. https://www.nadca.com
4. **ASM International, ASM Handbook Volume 15: Casting** — Covers hydrogen solubility, gas entrapment mechanisms and shrinkage feeding theory. https://www.asminternational.org
5. **MIL-STD-276 — Impregnation of Porous Nonferrous Metal Castings** — Long-standing reference defining vacuum-pressure impregnation practice and acceptance.
6. **DieCastor** — Die casting industry resource covering defect classification, radiographic evaluation practice and production countermeasures. https://www.diecastor.com
