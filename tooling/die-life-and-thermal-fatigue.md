---
title: "Die Life and Thermal Fatigue: Heat Checking Explained"
description: "Why die casting dies fail: thermal fatigue and heat checking mechanisms, soldering, erosion and cracking, plus realistic die life expectations by alloy."
keywords: ["heat checking", "thermal fatigue die casting", "die life expectancy", "die soldering", "gate washout", "die failure analysis"]
category: "tooling"
reading_time: "7 min"
last_updated: "2026-08-06"
---

# Die Life and Thermal Fatigue: Heat Checking Explained

## Introduction

Dies rarely fail suddenly. They degrade along a predictable curve: a faint orange-peel texture after a few thousand shots, a visible crazed network by twenty thousand, and eventually one surface crack becomes a leak path, a stuck casting or a fractured insert.

That curve carries commercial weight. Tool amortisation is spread across a contracted shot quantity, and the piece price assumes the die reaches it at acceptable quality. If heat checking prints onto a Class A surface at 40 % of that quantity, someone absorbs a replacement insert.

This chapter explains the mechanisms that consume die life — thermal fatigue, soldering, erosive washout, gross cracking and waterline corrosion — then gives realistic alloy-dependent life expectations and the levers that move them.

## Technical Explanation

### The thermal fatigue mechanism

Every shot subjects the die surface to a violent temperature excursion. Aluminium at 660-700 °C contacts steel at 200-250 °C, and within milliseconds the top 0.1-0.5 mm rises to 500-600 °C while steel 5 mm below barely moves. The hot skin wants to expand, is restrained by the cold bulk, and yields in **compression**; die spray then cools the surface faster than the bulk, pulling the plastically shortened skin into **tension**.

That is low-cycle thermal fatigue: a plastic strain reversal every cycle. Cracks initiate where strain range and stress concentrators are highest — EDM recast, machining marks, nitride compound layer, sharp radii — and grow into the interconnected network called **heat checking**, printing on the casting as raised veins.

```
Δε_plastic ∝ α × ΔT              α = thermal expansion coefficient
N_initiation ∝ (Δε_plastic)^(−1/c)   c ≈ 0.5-0.7 for hot work steels
ΔT = peak surface temperature − minimum surface temperature after spray
```

The relationship is Coffin-Manson type: cycles to initiation fall steeply as ΔT rises, so halving ΔT multiplies initiation life several-fold — why temperature control outperforms upgrading steel. Once established, cracks accelerate as aluminium penetrates, solidifies and pries them open next cycle, which argues for early intervention.

### Soldering

Soldering is metallurgical, not mechanical. Molten aluminium dissolves iron from the die surface and forms intermetallic layers such as Fe₂Al₅ and Fe-Al-Si phases that bond the casting to the steel. It is driven by high local temperature, high velocity and long contact time, and concentrates at gates, at the base of deep cores, and at hot spots left by poor thermal design. Consequences escalate from drag marks to torn surfaces to castings that will not eject. Countermeasures are surface engineering, local cooling and adequate spray coverage; conventional alloys with 0.8-1.1 % iron suppress pickup, while low-iron structural alloys need more aggressive coating.

### Erosion, cracking and corrosion

At the ingate, metal accelerates to 40-60 m/s carrying primary silicon and oxide, abrading steel while heating it to the top of its range. The gate widens, velocity falls, fill pattern changes, and porosity appears where castings were sound. Gate erosion is a process-drift mechanism as much as wear, so gate inserts should be replaceable from the start.

**Gross cracking** is a through-section fracture, distinct from the fine network, with structural causes: sharp internal corners at the cavity or cooling line intersections; inadequate quench leaving grain boundary carbides; hydrogen embrittlement from pickling, plating or improper welding; untempered EDM white layer on a stressed surface; thermal shock from first shots into a cold die; and a heat-check network coalescing into one dominant crack.

Corner radii are the cheapest available fix. Opening a cooling line intersection or cavity corner from 0.5 mm to 2-3 mm can move a die from cracking-limited to heat-check-limited life.

Cooling channels degrade from the inside. Scale insulates the channel, heat extraction falls and surface ΔT rises; under the deposit, oxygen cells drive pitting that becomes crack initiation on the thin wall to the cavity. Dies that appear to fail from thermal fatigue occasionally failed from a blocked, unmeasured circuit.

## Engineering Parameters

| Parameter | Typical Range | Units | Notes / Driver |
|---|---|---|---|
| Die surface temperature, aluminium | 200-280 | °C | Measured after spray and blow, before shot |
| Peak surface temperature at contact | 480-620 | °C | Drives the thermal fatigue strain range |
| Effective surface ΔT per cycle | 250-400 | °C | The primary heat checking driver |
| Die temperature control unit setpoint | 150-250 | °C (oil) | Water units limited to about 120-160 °C |
| Die preheat before production start | 180-250 | °C | Prevents first-shot thermal shock cracking |
| Aluminium die life, typical | 80,000-150,000 | shots | Over 200,000 with premium steel and good thermal control |
| Aluminium die life, Class A cosmetic | 30,000-80,000 | shots to first refresh | Cosmetic limits bite before structural failure |
| Magnesium die life | 200,000-500,000 | shots | Lower melt temperature, lower iron solubility |
| Zinc die life | 500,000-1,000,000+ | shots | Hot chamber, roughly 400-420 °C melt |
| Brass / copper alloy die life | 10,000-50,000 | shots | Severe thermal load |
| Gate insert replacement interval | 20,000-60,000 | shots | Erosion-driven, alloy and velocity dependent |
| EDM recast layer to remove | 0.05-0.15 | mm | By stoning, polishing or fine finishing passes |
| Coolant hardness limit | < 100-150 | ppm CaCO₃ | Above this, scaling accelerates markedly |
| Cavity corner radius, minimum | 1.5-3.0 | mm | Below 1 mm, cracking risk rises sharply |

Figures shift with geometry and duty; a thin-wall cosmetic housing with a deep core loads a die far harder than a compact bracket of the same weight. Cycle time matters both ways: short cycles raise average die temperature toward soldering, long cycles increase ΔT per shot toward heat checking. Vacuum-assisted processes run hotter dies to improve fill, trading thermal fatigue life for quality.

## Manufacturing Considerations

- **Define the end-of-life criterion contractually.** "100,000 shots" is meaningless without stating the acceptance condition: cosmetic grade, dimensional capability or structural function. Most disputes are about the criterion, not the count.
- **Measure die temperature.** Thermal imaging every few thousand shots maps hot spots long before they show as soldering; a fixed thermocouple gives cheap trend data.
- **Spray is a parameter with a tolerance.** Spray time, nozzle position, dilution and blow-off all affect ΔT; excess spray deepens the cold end of the cycle and increases strain range.
- **Stone early and lightly.** Removing an incipient network at 20,000 shots costs an hour; waiting until cracks are 0.3 mm deep means welding, and welds create a soft heat-affected zone that becomes the next failure site.
- **Match steel investment to the constraint.** If dies crack, buy toughness and bigger radii; if they craze, buy thermal control first, then thermal fatigue resistance.
- **Track shots per insert, not per die.** After the first insert change, a die-level counter stops being informative.

## Common Mistakes

- **Mistake:** Starting production on a die warmed only by a few sacrificial shots. — **Why it fails:** Cold steel against 700 °C metal creates a strain excursion far outside the design cycle, initiating cracks in the first hour that govern die life. — **Fix:** Preheat to 180-250 °C and verify with a contact pyrometer before the first shot.
- **Mistake:** Treating die spray as the primary cooling system. — **Why it fails:** Spray cools only the surface, maximising the through-thickness gradient and strain range, while residue blocks vents. — **Fix:** Carry the bulk heat load on internal circuits and use spray mainly for lubrication.
- **Mistake:** Leaving EDM surfaces unpolished because the finish looks acceptable. — **Why it fails:** Recast layer is untempered martensite in tensile stress; it cracks within a few thousand cycles and hands the crack to the substrate. — **Fix:** Remove 0.05-0.15 mm by stoning or polishing and consider a low-temperature stress relief.
- **Mistake:** Ignoring cooling water chemistry. — **Why it fails:** Even thin scale sharply cuts circuit heat extraction, raising surface ΔT across the whole insert while pitting attacks the channel wall. — **Fix:** Treat and monitor coolant, descale on a shot-count schedule, and flow-test each circuit rather than only checking for leaks.
- **Mistake:** Responding to soldering by increasing release agent concentration. — **Why it fails:** Soldering is caused by a local hot spot; more lubricant masks it briefly while the intermetallic layer keeps growing, and heavy lubricant causes gas porosity. — **Fix:** Thermal image the area, add local cooling or a bubbler, and apply a duplex nitride plus PVD treatment.
- **Mistake:** Running on with a growing single crack because parts still pass. — **Why it fails:** Trapped aluminium wedges the crack open each cycle, so a repairable 2 mm crack becomes a split insert and an unplanned stoppage. — **Fix:** Set a documented crack length threshold that triggers scheduled repair, and inspect at defined shot intervals.

## Related Articles

- [Tool Steels for Dies: H13 Selection and Heat Treatment](./tool-steels-and-heat-treatment.md)
- [Die Thermal Management: Cooling Lines and Die Temperature](../die-casting/die-thermal-management.md)
- [Mold and Die Maintenance: Preventive Program Design](./mold-and-die-maintenance.md)
- [Die Casting Surface Defects: Troubleshooting Guide](../die-casting/surface-defects-troubleshooting.md)
- [High Pressure Die Casting Parameters: HPDC Process Control](../die-casting/high-pressure-die-casting-parameters.md)

## References

1. **NADCA — North American Die Casting Association** — Publishes die materials, die life and thermal fatigue guidance alongside die steel acceptance criteria. https://www.nadca.com
2. **ASM International, ASM Handbook Volume 11: Failure Analysis and Prevention** — Thermal fatigue, crack initiation from surface layers, and tool failure investigation methodology. https://www.asminternational.org
3. **ASM International, ASM Handbook Volume 15: Casting** — Background on die soldering, intermetallic layer formation and gate erosion.
4. **ASTM E606 — Standard Test Method for Strain-Controlled Fatigue Testing** — Basis for the low-cycle strain-controlled data underpinning thermal fatigue life estimation. https://www.astm.org
5. **[AlumCasting](https://www.alumcasting.com)** — Aluminum die casting manufacturer and process resource covering die temperature control practice and tooling condition in aluminium HPDC production.
