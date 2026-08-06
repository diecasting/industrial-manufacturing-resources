---
title: "Injection Molding Process Parameters and Process Window"
description: "Setting injection molding process parameters: melt and mold temperature, injection velocity, V/P switchover, pack pressure, cooling and process windows."
keywords: ["injection molding parameters", "V/P switchover", "scientific molding", "process window", "pack and hold pressure", "gate seal study"]
category: "tooling"
reading_time: "8 min"
last_updated: "2026-08-06"
---

# Injection Molding Process Parameters and Process Window

## Introduction

An injection moulding machine exposes perhaps forty adjustable settings, but only a handful describe what the polymer actually experiences. The polymer cares about melt temperature, how fast it is sheared into the cavity, how much pressure holds it against the steel while it cools, and how quickly the mould extracts heat. Everything else on the controller is a means of achieving those four things on a particular machine.

This matters commercially: processes set by machine numbers do not transfer. A tool moved between two 200 tonne presses with identical setpoints will produce different parts because screw geometry, check ring behaviour and hydraulic response differ. Processes built on polymer variables requalify with far less work, which is worth real money in a multi-site or dual-source supply chain. The aim is to establish, document and defend a process that holds Cpk ≥ 1.33 on the dimensions that matter.

## Technical Explanation

### The barrel: profile and melt preparation

The barrel is divided into feed, compression, metering and nozzle zones. A conventional increasing profile raises temperature toward the nozzle, letting pellets convey before softening. A reverse profile, hotter at the rear, suits heat-sensitive resins and very small shots with long residence time.

Most melting energy comes from **viscous shear**, not barrel heaters. This is why screw speed and back pressure influence melt temperature more than heater setpoints, and why the only reliable melt reading is a purge shot into an insulated cup with a fast probe. **Back pressure** compacts the melt pool, improves colour dispersion and drives out air, at the cost of extra shear and longer recovery.

**Residence time** is the time polymer spends at melt temperature:

1. Estimate: (barrel capacity / shot weight) × cycle time.
2. Target the resin supplier's stated limit, commonly 4-8 min for engineering thermoplastics.
3. Keep shot size in the 20-80 % band of barrel capacity; outside it, melting and cushion control degrade.

### Filling: velocity control and the viscosity curve

Filling should be **velocity controlled**, not pressure controlled. The machine drives the screw at a commanded speed; whatever pressure is needed to reach it is applied up to the limit. Polymers are shear thinning, so plotting relative viscosity against velocity gives the **viscosity curve**. Run near or just past its knee — to the left, small speed changes cause large viscosity swings; to the right, viscosity is flat and the process tolerates resin and speed drift.

### V/P switchover and packing

The **V/P switchover** (transfer) point hands control from velocity to pressure and is the most important setting on the machine. Switch at **95-99 % volumetric fill** so the cavity fills by velocity and only final compaction uses pressure. Position-based switchover is most repeatable.

Packing feeds melt through the gate to compensate for shrinkage. Pack pressure is **50-80 % of the observed peak fill pressure**, not the machine maximum. Holding must continue only until the **gate seals**; the **gate seal study** plots part weight against hold time, and production hold time is set just past the plateau.

### Cooling and the six-study sequence

Cooling dominates the cycle on all but the thinnest parts and scales with wall thickness squared. For semi-crystalline resins, mould temperature sets crystallinity, hence stiffness, chemical resistance and post-mould shrinkage. Scientific moulding fixes variables in sequence: viscosity curve, cavity balance, pressure drop, process window, gate seal, then cooling optimisation. The output is a window, not a point — a process centred in a broad window tolerates resin lot, ambient and machine drift.

## Engineering Parameters

| Parameter | Typical Range | Units | Notes / Driver |
|---|---|---|---|
| Melt temperature, PP | 200-250 | °C | Lower end for thick sections |
| Melt temperature, ABS | 220-260 | °C | Above 260 °C risks degradation |
| Melt temperature, PC | 280-320 | °C | Requires thorough drying |
| Melt temperature, PA66 | 280-300 | °C | Narrow window, sharp melting point |
| Melt temperature, POM | 190-215 | °C | Above 220 °C releases formaldehyde |
| Mould temperature, PP | 20-60 | °C | Higher improves gloss and crystallinity |
| Mould temperature, ABS | 50-80 | °C | Drives surface finish and weld line strength |
| Mould temperature, PC | 80-110 | °C | Low mould temperature raises residual stress |
| Mould temperature, POM | 80-120 | °C | Controls post-mould shrinkage |
| Injection velocity (screw) | 20-150 | mm/s | Set from the viscosity curve knee |
| V/P switchover point | 95-99 | % volumetric fill | Position-based control preferred |
| Pack / hold pressure | 50-80 | % of peak fill pressure | Verified by gate seal study |
| Hold time | gate seal + 10-20 | % margin | From part weight plateau |
| Shot size vs barrel capacity | 20-80 | % | Outside this band, control degrades |
| Residence time | 4-8 | min | Shorter for PVC and POM |
| Process capability target | Cpk ≥ 1.33 | — | 1.67 for safety-critical characteristics |

Glass-filled grades need 10-20 °C higher melt and mould temperature than the unfilled base resin and raise required injection pressure. A 0.8 mm thin-wall part sits near the top of every band; a 6 mm technical part needs the opposite, plus longer hold and cooling.

## Manufacturing Considerations

- **Document the process in polymer variables** — melt temperature by purge probe, fill time, peak pressure at transfer, cushion and cycle. Machine setpoints are the appendix, not the specification.
- **Cavity pressure sensing is the highest-value instrumentation.** Sensors near the gate and at end of fill give an unambiguous fill and pack signature and enable real-time short-shot sorting.
- **Machine selection is a process parameter.** Tonnage from projected area, barrel capacity from the 20-80 % rule, injection rate from required fill time. Tonnage-only selection causes residence time problems.
- **Drying is mandatory for hygroscopic resins.** PA, PC, PET, PBT and TPU need a desiccant dryer with verified dew point; measure moisture rather than trusting the timer.
- **Regrind and colour concentrate are process variables.** Fix the regrind percentage and qualify with production colour, because a process qualified on 100 % virgin drifts when 20 % regrind arrives.

## Common Mistakes

- **Mistake:** Setting injection speed to a round number and never running a viscosity curve. — **Why it fails:** The process may sit on the steep part of the shear-thinning curve, where small variations cause large fill and dimensional scatter. — **Fix:** Run the rheology study, find the knee, set velocity at or just past it.
- **Mistake:** Switching over at 100 % fill. — **Why it fails:** The cavity fills under velocity control to the steel, spiking pressure that flashes the parting line and overpacks the gate. — **Fix:** Establish transfer at 95-99 % fill with pack off, verified by short shots.
- **Mistake:** Using pack pressure as a percentage of machine maximum. — **Why it fails:** On a machine below capacity, 60 % of maximum can exceed fill pressure and overpack every cavity. — **Fix:** Read actual peak pressure at transfer, set pack at 50-80 % of that.
- **Mistake:** Extending hold time after the gate has sealed. — **Why it fails:** No melt enters a sealed gate, so sinks remain while the cycle grows for nothing. — **Fix:** Run a gate seal study; persistent sinks mean gate size, wall or mould temperature issues.
- **Mistake:** Running a semi-crystalline resin cold to shorten cycle. — **Why it fails:** Incomplete crystallisation at ejection means parts keep shrinking and distorting for weeks. — **Fix:** Hold the supplier's mould temperature range; recover cycle from cooling design.
- **Mistake:** Copying settings when moving a tool between machines. — **Why it fails:** Different screws and hydraulic response give different melt from identical setpoints. — **Fix:** Re-run the viscosity curve and transfer position, matching fill time and melt temperature.
- **Mistake:** Treating drying time as proof of dryness. — **Why it fails:** A failed desiccant bed runs full time and delivers wet resin, causing splay and, in PC and PET, molecular weight loss. — **Fix:** Monitor dew point and verify moisture by loss-on-drying or Karl Fischer at qualification.
- **Mistake:** Optimising each parameter independently. — **Why it fails:** Melt, pack and mould temperature interact strongly on shrinkage; one-factor tuning finds a local optimum with no window. — **Fix:** Run a designed experiment across the main interacting factors.

## Related Articles

- [Injection Molding Defects: Diagnosis and Correction](./injection-molding-defects.md)
- [Injection Mold Design Fundamentals for Plastic Parts](./injection-mold-design-fundamentals.md)
- [Hot Runner vs Cold Runner Systems: Selection Guide](./hot-runner-vs-cold-runner.md)
- [APQP and PPAP: Automotive Part Approval Process Guide](../automotive/apqp-and-ppap.md)

## References

1. **Rosato, D. V. and Rosato, M. G., *Injection Molding Handbook*** — Coverage of machine behaviour, melt preparation and process variable relationships.
2. **Osswald, T. A., Turng, L.-S. and Gramann, P. J., *Injection Molding Handbook*** — Polymer processing fundamentals including shear thinning and cooling analysis.
3. **ISO 294-1 — Plastics: injection moulding of test specimens of thermoplastic materials** — Standard moulding conditions and terminology. https://www.iso.org
4. **AIAG — Statistical Process Control (SPC) Reference Manual** — Defines Cp, Cpk and Ppk calculation and sampling. https://www.aiag.org
5. **ASTM D3641 — Standard Practice for Injection Molding Test Specimens** — Reference practice for controlled specimen moulding. https://www.astm.org
6. **Society of Plastics Engineers (SPE)** — Technical literature on decoupled moulding and process window development. https://www.4spe.org
