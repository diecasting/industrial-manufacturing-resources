---
date: 2026-08-06
title: "Vacuum Assisted Die Casting: Reducing Gas Porosity"
description: "How vacuum assisted die casting works: valve types, evacuation timing, 50-150 mbar targets, high vacuum below 50 mbar and heat treatable castings."
keywords: ["vacuum die casting", "high vacuum HPDC", "gas porosity reduction", "vacuum valve", "chill vent", "heat treatable die casting"]
category: "die-casting"
reading_time: "9 min"
last_updated: "2026-08-06"
---

# Vacuum Assisted Die Casting: Reducing Gas Porosity

## Introduction
A conventional high pressure die casting cavity is full of air when the shot begins. So is the runner, and so is the unfilled part of the shot sleeve. The metal front arrives at 40 m/s and has roughly 40 milliseconds to push all of that gas out through vents whose total cross-section is a small fraction of the gate. Some of it escapes. The rest is compressed, folded into the melt and trapped as porosity.


This article covers the gas physics that sets the target pressure, the hardware that achieves it, the timing window that makes or breaks a vacuum system, and how residual gas content is actually measured. It also distinguishes ordinary vacuum assistance, which is a broad quality improvement, from high vacuum practice, which is a different engineering commitment.
## Technical Explanation

### Why residual pressure translates directly into porosity

Treat the trapped gas as ideal. A volume `V₁` of air at cavity pressure `P₁` becomes, after intensification to metal pressure `P₂`, a compressed volume:

```
V₂ = V₁ × (P₁ / P₂)
```

At atmospheric cavity pressure (1,013 mbar) and 70 MPa intensification (700,000 mbar), any air that fails to escape shrinks by a factor of about 690. That sounds reassuring until the part is heated. During T6 solution treatment at 530 °C the casting's yield strength collapses, the compressed gas expands back toward equilibrium, and the result is a blistered surface.

Evacuating the cavity to 100 mbar reduces the starting quantity of gas by a factor of ten. Going to 30 mbar reduces it by more than thirty. The porosity that remains is dominated by shrinkage rather than gas, and shrinkage does not expand on heating. That single distinction is why the mbar figure on a vacuum controller correlates so directly with whether a part can be heat treated.

### What has to be evacuated, and how fast

The evacuated volume is not just the cavity. It includes runner, overflows, the vacuum channels themselves, and the free volume remaining in the shot sleeve above the metal. On a 4 kg structural casting this can total several litres.

The available time window is short and precisely bounded:

1. Metal is ladled into the sleeve. The pour hole is open, so no vacuum is possible.
2. The plunger advances and covers the pour hole. This is the earliest moment vacuum can be applied.
3. Slow shot proceeds — typically 0.3–1.5 s. This is the main evacuation window.
4. Fast shot begins. Metal reaches the vacuum valve within tens of milliseconds.
5. The valve must be closed before liquid metal enters it, or the vacuum line floods and the system is damaged.

Everything about vacuum system design follows from the fact that useful pumping happens only during step 3. A pump alone cannot evacuate several litres in one second through a long, narrow line. The standard solution is a vacuum tank held continuously at low pressure by the pump, with a fast-acting valve connecting it to the die. Tank volume is sized at roughly ten to twenty times the evacuated volume so that opening the valve drops die pressure almost instantaneously by expansion alone.

### Valve types

**Chill vents** (also called wave blocks or cooling blocks) are passive. They present a long, narrow, serpentine channel, typically 0.8–1.5 mm deep, with heavy cooling. Gas flows out freely; metal entering the channel loses heat rapidly, slows and freezes before it can travel far. Simple, robust, no moving parts, but they leak into the vacuum line for the last few milliseconds of fill, which limits achievable vacuum.

**Mechanical shut-off valves** are closed by the arriving metal itself, usually by a spring-loaded piston or a pivoting element displaced by the metal front. They seal harder than a chill vent but their response depends on metal front velocity and they need maintenance.

**Externally actuated valves** are closed by a signal — a plunger position trigger, a timer or a metal-contact sensor in a sacrificial position upstream. Because closure timing is commanded rather than reactive, they can be closed marginally before the metal arrives, which is what makes high vacuum practical.

High vacuum systems normally combine an actuated valve with a very well sealed die.

### Sealing the die

A vacuum system is only as good as its leaks. On a production die the leak paths are numerous: the parting line itself, ejector pins, core slides, sleeve-to-die interface, the plunger tip clearance, and the sprue bushing. Ordinary vacuum assistance tolerates these and settles at 100–250 mbar. High vacuum requires the parting line to be sealed with a heat-resistant cord seal, the ejector housing to be enclosed and separately evacuated, slides to run in sealed guides, and the shot sleeve to be sealed at the die face.

That is a significant increase in die cost and maintenance load, and it is why high vacuum is specified selectively rather than as a default.

### Measuring the result

Vacuum level in the die is measured directly by a pressure transducer in the vacuum channel, logged shot by shot. This is the primary process signal and should carry control limits.

Residual gas content in the casting is measured separately, usually by vacuum fusion or by density comparison of a machined sample against a pore-free reference. Results are reported in cm³ of gas per 100 g of metal. Conventional HPDC typically returns 10–30 cm³/100 g. Weldable and heat-treatable castings generally need to be below about 5 cm³/100 g, and the best high vacuum practice reaches 1–3 cm³/100 g.

The practical shop-floor test is simpler: solution treat sample castings for 30 minutes at 480–500 °C and inspect for blisters. No blisters means the gas content is low enough to heat treat.

## Engineering Parameters

| Parameter | Typical Range | Units | Notes / Driver |
|---|---|---|---|
| Residual cavity pressure, standard vacuum | 100–250 | mbar | Chill vents, unsealed parting line |
| Residual cavity pressure, good practice | 50–150 | mbar | Actuated valve, partly sealed die |
| Residual cavity pressure, high vacuum | < 50 | mbar | Fully sealed die; 20–40 mbar achievable |
| Evacuated volume | 1–8 | litres | Cavity, runner, overflows, free sleeve volume |
| Vacuum tank to die volume ratio | 10:1–20:1 | ratio | Enables pressure drop by expansion, not pumping |
| Vacuum pump capacity | 100–500 | m³/h | Must restore tank pressure within one cycle |
| Vacuum line internal diameter | 25–50 | mm | Conductance, not pump size, usually limits performance |
| Evacuation window | 0.3–1.5 | s | Equal to slow shot duration after pour hole is sealed |
| Chill vent channel depth | 0.8–1.5 | mm | Deeper channels vent better but freeze metal less reliably |
| Valve closing response | 5–20 | ms | Must precede metal arrival at the valve |
| Gas content, conventional HPDC | 10–30 | cm³/100 g | Measured by vacuum fusion or density comparison |
| Gas content, high vacuum | 1–5 | cm³/100 g | Threshold for weldability and T6 |
| Blister test condition | 480–500 °C, 30 min | °C / min | Pass criterion is a blister-free surface |

Vacuum changes what else can be relaxed. With a well-evacuated cavity, gate velocity can be reduced toward 25–35 m/s without the usual air-entrainment penalty, which in turn reduces gate erosion and die soldering. Fill time can be extended slightly, easing the load on the machine for large castings. Structural alloys in the AlSi10MnMg and AlSi9MnMoZr families, and the AlMg5Si2Mn ductile grades, are formulated on the assumption that vacuum is present; running them without it wastes the alloy premium.


- **Vacuum is a die design decision, not a machine option.** Retrofitting vacuum to a die that was laid out with conventional overflows rarely achieves better than 200 mbar, because the vent path, valve position and seal grooves have to be planned with the runner.
- **Valve position follows the fill pattern.** The valve must sit at the last point to fill. If the fill simulation shows the front arriving there early, the valve closes early and the remaining gas has nowhere to go.
- **Overflows still matter.** Vacuum removes gas but does not remove the cold, oxidised leading edge of the metal front. Overflows remain necessary to capture it.
- **Maintenance load is real.** Actuated valves are consumable assemblies; parting line seals degrade with heat checking; vacuum lines accumulate metal splash and release agent condensate. A vacuum system with no maintenance schedule reverts to atmospheric performance within weeks.
- **Log vacuum per shot and reject on it.** A vacuum trace that fails to reach target is the earliest possible indicator of a leaking seal or a stuck valve, and it can be used as an automatic part-reject criterion.
- **Cost impact.** Expect a meaningful increase in die cost for a sealed high vacuum die, plus the vacuum unit itself, plus consumables. Justification comes from enabling heat treatment, welding or a leak specification, not from a marginal porosity improvement.
- **Interaction with release agent.** Excess water-based release agent flashes to steam and loads the vacuum system with a gas the pump has to remove during the same short window. Spray optimisation and blow-off time are part of vacuum performance.


## Manufacturing Considerations
## Common Mistakes
- **Mistake:** Buying a larger vacuum pump to reach a lower mbar figure — **Why it fails:** the limiting factor during the shot is line conductance and tank volume, not steady-state pump throughput — **Fix:** enlarge the line, shorten it, and increase tank capacity before changing the pump.
- **Mistake:** Applying vacuum from the moment the ladle finishes pouring — **Why it fails:** the pour hole is still open, so the system draws air through the sleeve and sucks the melt surface — **Fix:** interlock valve opening to plunger position past the pour hole.
- **Mistake:** Relying on a chill vent to deliver high vacuum — **Why it fails:** a passive vent is open to the cavity until metal freezes inside it, so cavity pressure rises during the last milliseconds of fill — **Fix:** use an actuated or mechanically triggered valve when the target is below 50 mbar.

## Related Articles

- [Die Casting Porosity: Causes, Detection and Prevention]({{< relref "die-casting-porosity-prevention.md" >}})
- [Die Casting Gating and Runner Design Fundamentals]({{< relref "gating-and-runner-design.md" >}})
- [Giga Casting and Megacasting: Large Structural Castings]({{< relref "../automotive/giga-casting-megacasting.md" >}})
- [Structural Castings and Crash Performance Requirements]({{< relref "../automotive/structural-castings-and-crash-performance.md" >}})
- [Heat Treatment of Aluminum Castings: T5, T6 and T7]({{< relref "../materials/heat-treatment-of-castings.md" >}})

## References

1. **NADCA Product Specification Standards for Die Castings** — Includes guidance on vacuum die casting practice, vent design and the quality classes achievable with evacuated cavities. https://www.nadca.com
2. **E. J. Vinarcik, "High Integrity Die Casting Processes" (Wiley)** — Dedicated treatment of vacuum, squeeze and semi-solid routes, including valve types and evacuation timing.
3. **ASM International, ASM Handbook Volume 15: Casting** — Background on gas solubility, entrapment mechanisms and porosity classification in pressure die castings. https://www.asminternational.org
4. **ASTM E505 — Standard Reference Radiographs for Inspection of Aluminum and Magnesium Die Castings** — Graded radiographic levels used to verify the porosity reduction achieved by vacuum. https://www.astm.org
5. **EN 1706 — Aluminium and aluminium alloys: Castings** — Property requirements for the heat-treatable die casting alloys that depend on low gas content.
6. **ISO 8062 — Dimensional and geometrical tolerances for moulded parts** — Reference for the tolerance classes applicable to structural die castings produced under vacuum. https://www.iso.org
