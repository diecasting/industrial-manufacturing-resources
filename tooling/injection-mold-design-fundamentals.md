---
title: "Injection Mold Design Fundamentals for Plastic Parts"
description: "Core principles of injection mold design: plate configurations, cavity layout, gate types, shrinkage compensation, venting, cooling and steel choice."
keywords: ["injection mold design", "two plate vs three plate mold", "gate types injection molding", "mold shrinkage compensation", "mold cooling design", "mold steel selection"]
category: "tooling"
reading_time: "7 min"
last_updated: "2026-08-06"
---

# Injection Mold Design Fundamentals for Plastic Parts

## Introduction

An injection mould converts polymer melt into a dimensionally controlled solid, thousands of times, at cycle times measured in seconds. It runs at far lower temperature and pressure than a die casting die, but tolerance expectations are often tighter relative to part size, and the material behaves in ways metal does not: it shrinks anisotropically, orients its molecules and fibres along flow, and remembers its thermal history.

Mould decisions propagate far. Cavity count sets machine size and hourly rate; gate location sets weld line positions, fibre orientation and warpage; cooling layout sets cycle time, usually the dominant piece-price term on a high-volume part. A designer who understands these couplings can influence unit cost by a factor of two before steel is cut.

This chapter covers mould architecture, cavity layout and runner balance, gate types, shrinkage compensation, venting, cooling geometry and steel selection.

## Technical Explanation

### Architecture: two-plate, three-plate and stack

A **two-plate mould** has one parting line; runner and part sit in the same plane and eject together, degated manually or by a sub-gate. It is the simplest and most robust configuration and covers most production tooling.

A **three-plate mould** adds a second parting plane so the runner feeds pinpoint gates into the top surface, giving central gating where a side gate is unacceptable, at the cost of extra plates and stroke.

A **stack mould** places two or more parting planes back to back; because projected areas oppose, clamp force does not scale with levels, so a machine produces two or four times the parts. Stack moulds suit high-volume, low-profile parts such as closures.

### Cavity layout and runner balance

Multi-cavity moulds produce interchangeable parts only if every cavity fills at the same time, pressure and temperature. A **naturally balanced** layout uses symmetric H or X branching so every cavity is the same flow length from the sprue. An **artificially balanced** layout compensates unequal flow lengths with different runner diameters but drifts when melt temperature or injection speed changes.

Even geometrically balanced layouts suffer **shear-induced imbalance**. Melt near the runner wall is hotter and less viscous from shear heating, and at each branch that hot layer splits unevenly between daughter channels, so outer cavities in a 16 or 32 cavity tool fill differently from inner ones despite identical geometry. Melt rotation inserts correct this.

Full round runners have the lowest pressure drop but must be machined in both halves; trapezoidal runners are cut into one half only and are the pragmatic default; half-round should be avoided.

### Gate types

**Edge gates** are the general-purpose choice on flat parts and the easiest to modify. **Submarine (tunnel) gates** degate automatically on ejection and mark a side wall; the **cashew** variant reaches hidden surfaces such as a boss underside. **Direct sprue gates** give maximum packing on large single-cavity parts at the cost of a heavy vestige. **Fan gates** spread flow on wide flat parts where a point gate would jet, and **diaphragm gates** give concentricity on cylindrical parts with no weld line. From a hot runner, **hot tips** leave a small round vestige and **valve gates** a flush one while allowing sequential fill control.

Gate location should send melt from thick to thin, place weld lines where tolerable, and ensure the gate freezes after the section it feeds so packing is not cut short.

### Shrinkage, venting and cooling

The cavity is cut larger than nominal by expected shrinkage, and getting this wrong is the most common reason a tool needs rework. Amorphous polymers have no crystalline phase to collapse and shrink modestly; semi-crystalline polymers shrink far more because crystallisation densifies the material. Glass fibre cuts shrinkage but makes it **anisotropic**: fibres align with flow and restrain shrinkage along it while transverse shrinkage stays high, so a part gated at one end can shrink three times as much across flow as along it — a warpage mechanism, not a size offset.

Air trapped ahead of the melt front compresses adiabatically and can exceed 300 °C, scorching the resin. Vents are shallow lands at the parting line and runner ends, 1-3 mm long, relieved to 0.3-0.5 mm beyond.

```
t_cool ≈ (s² / (π² × α)) × ln[ (8/π²) × (T_melt − T_mould) / (T_eject − T_mould) ]
s = wall thickness;  α = thermal diffusivity ≈ 0.7-1.3 × 10⁻⁷ m²/s
```

Doubling wall thickness roughly quadruples cooling time. Cores and thin ribs need bubblers, baffles or high-conductivity thermal pins.

## Engineering Parameters

| Parameter | Typical Range | Units | Notes / Driver |
|---|---|---|---|
| Shrinkage, amorphous (ABS, PC, PS) | 0.3-0.7 | % | Low pack pressure pushes toward the high end |
| Shrinkage, PP / PE | 1.2-2.5 | % | Highly sensitive to mould temperature |
| Shrinkage, POM | 1.8-2.5 | % | Plan for post-mould shrinkage |
| Shrinkage, PA6 / PA66 unfilled | 0.8-1.8 | % | Add moisture conditioning growth separately |
| Shrinkage, 30 % GF PA66 along flow | 0.2-0.5 | % | Transverse value 2-4× higher |
| Vent depth, PA / POM | 0.010-0.015 | mm | Low viscosity flashes easily |
| Vent depth, ABS / PC / filled | 0.020-0.030 | mm | Higher viscosity tolerates deeper lands |
| Cooling line diameter | 8-12 | mm | 10 mm typical, larger on big plates |
| Cooling line pitch | 3-5 | × line diameter | Controls surface temperature uniformity |
| Line centre to cavity surface | 1.5-3 | × line diameter | Closer risks deflection and marking |
| Draft, smooth surfaces | 0.5-2 | ° | 0.5° is a minimum, not a target |
| Draft, textured surfaces | +1.5 | ° per 0.025 mm depth | Added on top of base draft |
| Edge gate thickness | 0.5-0.8 | × local wall | Land length 0.5-1.5 mm |
| P20 / 1.2311 mould base | 28-34 | HRC | Pre-hardened, no post-machining heat treat |
| S136 / 420SS cavity hardness | 48-54 | HRC | Corrosive resins and optical polish |

A 5,000-piece prototype tool in P20 is a different object from a 2,000,000-cycle production tool in through-hardened S136 with a hot runner.

## Manufacturing Considerations

- **Derive cavity count, do not assume it.** Compare annual volume, cycle time, machine hourly rate and tool cost across 1, 2, 4 and 8 cavities; the optimum often sits lower than instinct suggests.
- **Steel follows resin chemistry.** PVC, POM and flame-retardant compounds release corrosive species; a P20 cavity pits within months where a stainless grade will not.
- **Tolerance to a moulding standard** such as DIN 16742. Cutting a cavity to ±0.005 mm is routine; holding ±0.05 mm on a 200 mm semi-crystalline part is not.
- **Ejection area matters more than force.** Deep-draw parts in stiff resins need stripper plates or sleeve ejection; concentrated pins punch through when vacuum resists release. Mark every cavity with its number so a dimensional issue traces to one cavity.

## Common Mistakes

- **Mistake:** Applying a single shrinkage value to a glass-filled part. — **Why it fails:** Fibre alignment makes shrinkage directional, so the part is undersized across flow and warped. — **Fix:** Use direction-specific values from mould flow analysis and cut steel-safe on transverse dimensions.
- **Mistake:** Gating a thin section and expecting it to pack a thick boss downstream. — **Why it fails:** The thin section freezes first and isolates the boss from holding pressure, giving voids or sinks that pressure cannot cure. — **Fix:** Gate into the thickest section so flow always runs thick to thin.
- **Mistake:** Cutting vents at a uniform 0.03 mm for all resins. — **Why it fails:** PA66 and POM flash into a 0.03 mm vent immediately, creating a burr on every part. — **Fix:** Set vent depth by resin and open in steps during tryout rather than starting deep.
- **Mistake:** Routing cooling around obstacles so a core runs uncooled. — **Why it fails:** The core becomes the cycle bottleneck, runs hot, and causes local overshrink and sticking. — **Fix:** Design cooling before ejector layout and use bubblers or thermal pins where drilled lines will not fit.
- **Mistake:** Specifying 0.5° draft on a textured sidewall. — **Why it fails:** Texture peaks act as undercuts and scuff the visible surface on every ejection. — **Fix:** Add roughly 1.5° per 0.025 mm of texture depth and confirm with the texture house before cutting steel.
- **Mistake:** Leaving ejector pin locations to the toolmaker. — **Why it fails:** Pins land on cosmetic surfaces or unsupported thin walls, and witness marks surface at T1. — **Fix:** Agree pin positions and permissible witness height on the part drawing.

## Related Articles

- [Hot Runner vs Cold Runner Systems: Selection Guide](./hot-runner-vs-cold-runner.md)
- [Injection Molding Process Parameters and Process Window](./injection-molding-process-parameters.md)
- [Injection Molding Defects: Diagnosis and Correction](./injection-molding-defects.md)
- [Tooling Lead Time and Tryout: From Kickoff to T1 and T2](./tooling-lead-time-and-tryout.md)
- [CNC Surface Finish: Ra Values, Processes and Costs](../cnc-machining/surface-finish-guide.md)

## References

1. **Kazmer, D., *Injection Mold Design Engineering*** — Systematic treatment of cavity layout, feed system sizing, cooling design and ejection with supporting equations.
2. **Menges, G., Michaeli, W. and Mohren, P., *How to Make Injection Molds*** — Reference on mould construction, standard components and tolerancing practice.
3. **DIN 16742 — Plastics moulded parts: tolerances and acceptance conditions** — Tolerance grade system appropriate to moulded rather than machined features.
4. **ASTM D955 — Measuring Shrinkage from Mold Dimensions of Thermoplastics** — Basis for published resin shrinkage values and their measurement conditions. https://www.astm.org
5. **ISO 294 series — Plastics: injection moulding of test specimens** — Standard conditions under which shrinkage and property data are generated. https://www.iso.org
6. **Society of Plastics Engineers** — Technical papers on mould design, gating and cooling optimisation. https://www.4spe.org
