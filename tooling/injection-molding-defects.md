---
title: "Injection Molding Defects: Diagnosis and Correction"
description: "Diagnosing injection molding defects: short shots, flash, sink marks, voids, weld lines, jetting, burn marks, splay, warpage and their corrections."
keywords: ["injection molding defects", "sink marks and voids", "weld line strength", "splay moisture streaks", "warpage plastic parts", "burn marks dieseling"]
category: "tooling"
reading_time: "8 min"
last_updated: "2026-08-06"
---

# Injection Molding Defects: Diagnosis and Correction

## Introduction

Defect troubleshooting on a moulding floor tends to follow an unproductive pattern: a defect appears, someone changes a machine setting, the defect moves, and three shifts later the process bears no resemblance to the qualified one. The root problem is that most moulding defects have several causes spread across four domains — part design, tool design, process settings and material condition — and only one can be changed from the operator panel.

Correct diagnosis begins with classification rather than correction. A sink from an early-frozen gate is a tooling problem wearing a process costume; raising hold pressure chases it for months. Splay from wet resin looks identical to splay from shear burning at the gate but demands opposite responses. Getting the classification right converts troubleshooting from guesswork into engineering.

This chapter works through the defects accounting for most moulding scrap, giving the mechanism, the diagnostic evidence that separates each from lookalikes, and the corrective hierarchy — what to try from the process, what needs the tool opened, and what needs a redesign.

## Technical Explanation

### Filling defects: short shot, flash, jetting

A **short shot** is an incompletely filled cavity. If the cushion is zero, the shot size is wrong; if the machine reached its pressure limit, the process lost velocity control; if the short is at the far end of a thin part, the melt froze before arrival. A missed fourth cause is trapped gas with nowhere to vent — it creates back pressure that stalls the front as effectively as low pressure, and the tell-tale is a scorched edge at the short.

**Flash** is melt escaping at the parting line or ejector clearance. Flash at end of fill points to a pressure spike from late V/P switchover; flash worsening over months points at parting line wear or mould deflection; flash in only one cavity points at imbalance overpacking it.

**Jetting** is a worm-track from the gate: melt injected fast through a small gate into an open cavity shoots as a free stream, cools, then is buried by following melt. The cause is the gate-size-to-velocity ratio, not the resin.

### Shrinkage defects: sink marks and voids

Both come from shrinkage with no compensating melt, differing only in which surface gave way. A soft skin pulled inward by internal tension forms a **sink**; a rigid frozen skin forces an internal **void**. Thick sections, ribs at show surfaces and bosses are classic sites. Diagnose in order: (1) did the gate seal before the section finished shrinking, (2) did pressure reach the section, (3) is the rib thicker than about 60 % of the wall it joins — the last is the most common root cause and cannot be cured by process.

### Weld lines, thermal and material defects

A **weld line** (fronts colliding head-on) or **meld line** (shallow-angle merge) forms where flow splits. Joint strength depends on molecular diffusion, which needs hot, pressurised fronts free of release films. An unfilled amorphous weld may keep 80-95 % strength; a 30 % glass-filled one can drop below 50 % because fibres align parallel to the plane and none bridge it. Relocate the gate, raise temperatures, add an overflow tab, or use sequential valve gating.

**Burn marks (dieseling)** come from adiabatic gas compression ahead of the front, exceeding 300 °C and pyrolysing polymer. Increasing speed makes it worse; vent or slow the final fill stage. **Splay** is surface streaking from moisture, degradation volatiles or entrained air. Moisture splay is widespread; degradation splay worsens after a stoppage. **Delamination** — peeling flakes — signals contamination, a material failure not a process one. **Black specks** come from dead spots in the barrel or manifold; they worsen after stoppages.

### Warpage

Warpage is differential shrinkage. Sources: differential cooling between halves, differential wall thickness, orientation (glass-filled parts shrink far more across flow, so a flat plate gated at one end saddles), and packing gradients. Because fibre orientation is set when the gate is chosen, process adjustment only trims warpage; it does not solve it.

## Engineering Parameters

| Defect | Primary driver | Diagnostic indicator | First-line correction | Typical shift |
|---|---|---|---|---|
| Short shot | Volume, pressure, freeze | Cushion, peak vs limit, location | Verify shot and cushion | Melt +10-20 °C |
| Short shot, scorched edge | Trapped gas | Burn at front | Open vents | Vent 0.02-0.03 mm |
| Flash | Clamp vs cavity pressure | Onset location and timing | Transfer earlier | Transfer 95-98 % fill |
| Jetting | Gate velocity vs size | Worm track from gate | Slow first stage | −30-60 % velocity |
| Sink mark | Local thickness, gate seal | Weight plateau early | Pack to gate seal | Pack 60-80 % peak |
| Void | Rigid skin | Internal cavity | Raise mould temp | Mould +10-20 °C |
| Weld line, cosmetic | Front temperature | Predictable line | Raise temps, velocity | Melt +10-20 °C |
| Weld line, filled | Fibre orientation | Fracture under load | Relocate gate, tab | Tool change |
| Burn mark | Gas compression | Brown at last-fill | Vent; decelerate | Final vel −30-50 % |
| Splay, moisture | Resin moisture | Widespread streaking | Dry to spec | PA ≤0.20 %, PC ≤0.02 % |
| Warpage | Differential shrinkage | Sign of distortion | Balance half temps | ΔT halves ≤5-10 °C |

Drying targets are absolute: polycarbonate at 0.05 % moisture hydrolyses and loses molecular weight permanently, so an impact test fails though the part looks fine. Polyamide tolerates 0.2 % but absorbs moisture afterwards and grows dimensionally; handle that by conditioning, not drying alone.

## Manufacturing Considerations

- **Change one variable at a time and log it against shot count.** This separates a solved problem from a permanently drifting process.
- **Sort defects by domain before touching the machine.** If two of design, tool, process and material are implicated, the process cannot fix it alone.
- **Use staged short shots as a diagnostic.** Fills at 20, 40, 60, 80 and 95 % reveal fill pattern, gas traps, weld positions and imbalance in about fifteen minutes.
- **Cavity pressure traces separate causes fast.** A normal fill with collapsed pack points to gate freeze; a spike at end of fill points to late transfer.
- **Agree cosmetic limits at PPAP.** Words like "no visible sink" cause disputes; physical limit samples, distance, lighting and orientation should be fixed.
- **Measure warpage on a defined fixture and datum.** Free-state measurement of a flexible part yields numbers nobody can reproduce.

## Common Mistakes

- **Mistake:** Increasing injection speed to cure a burn mark. — **Why it fails:** Faster fill compresses trapped gas harder, raising its temperature and deepening the burn. — **Fix:** Vent the trap and slow the final velocity stage.
- **Mistake:** Raising hold pressure to remove a sink over a thick rib. — **Why it fails:** The rib freezes last but the gate sealed before, so pressure never reaches it and flash appears elsewhere. — **Fix:** Reduce rib to 50-60 % of the wall, or core out the section.
- **Mistake:** Treating all splay as a drying problem. — **Why it fails:** Degradation and entrained air streak identically; days are lost drying dry material. — **Fix:** Check dew point and moisture, then compare splay before and after a stoppage.
- **Mistake:** Polishing across the draw direction to remove drag marks. — **Why it fails:** Cross lines act as microscopic undercuts and worsen dragging while removing steel. — **Fix:** Polish in the draw direction and fix the draft angle.
- **Mistake:** Accepting a weld line location because the part fills. — **Why it fails:** In filled resins the weld keeps under half the strength and becomes a late warranty failure. — **Fix:** Place welds in flow analysis, move them from load paths, test to failure.
- **Mistake:** Correcting warpage with a holding fixture. — **Why it fails:** Residual stress remains; parts creep back over time or at service temperature, adding labour forever. — **Fix:** Balance half temperatures, equalise walls, reconsider gate location.
- **Mistake:** Chasing black specks by purging alone. — **Why it fails:** A manifold dead spot returns them after a few hundred shots. — **Fix:** Correlate onset with stoppages, inspect nozzle, check ring and manifold for stagnation.
- **Mistake:** Fixing cavity-specific defects with global settings. — **Why it fails:** Raising pack to fill the starved cavity overpacks the rest, causing flash and sticking. — **Fix:** Run a cavity balance study, then correct runner or gate geometry.

## Related Articles

- [Injection Molding Process Parameters and Process Window](./injection-molding-process-parameters.md)
- [Injection Mold Design Fundamentals for Plastic Parts](./injection-mold-design-fundamentals.md)
- [Hot Runner vs Cold Runner Systems: Selection Guide](./hot-runner-vs-cold-runner.md)
- [Mold and Die Maintenance: Preventive Program Design](./mold-and-die-maintenance.md)
- [Inspection and Acceptance Criteria for Production Parts](../supplier-selection/inspection-and-acceptance-criteria.md)

## References

1. **Malloy, R. A., *Plastic Part Design for Injection Molding*** — Links rib proportion and wall transitions to sink marks, voids and warpage.
2. **Rosato, D. V. and Rosato, M. G., *Injection Molding Handbook*** — Defect cause-and-effect tables covering filling, packing and material defects.
3. **ASTM D3641 — Standard Practice for Injection Molding Test Specimens** — Reference conditions for comparing material behaviour across trials. https://www.astm.org
4. **ISO 294-4 — Plastics: determination of moulding shrinkage** — Defines how shrinkage, the driver behind sink and warpage, is measured. https://www.iso.org
5. **AIAG — Measurement Systems Analysis (MSA) Reference Manual** — Whether a system can reliably resolve warpage and dimensional defects. https://www.aiag.org
6. **Society of Plastics Engineers (SPE)** — Work on weld line strength in filled thermoplastics and gas-trap venting. https://www.4spe.org
