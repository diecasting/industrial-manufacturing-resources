---
title: "Magnesium Die Casting: Alloys, Parameters and Design Rules"
description: "Magnesium die casting explained: AZ91D, AM60B and AS41B alloys, hot and cold chamber settings, cover gas control, thin wall limits and design rules."
keywords: ["magnesium die casting", "AZ91D", "AM60B", "hot chamber magnesium", "cover gas SF6 replacement", "thin wall magnesium casting"]
category: "die-casting"
reading_time: "9 min"
last_updated: "2026-08-06"
---

# Magnesium Die Casting: Alloys, Parameters and Design Rules

## Introduction
Magnesium is the lightest structural metal in common industrial use, with a density of about 1.74 g/cm³ against 2.70 for aluminum. For a part whose stiffness is governed by bending of a plate, that density advantage translates into real mass reduction even after the wall is thickened to recover section modulus. Steering wheel armatures, instrument panel beams, camera bodies, laptop chassis and seat frames all exploit this.


This article covers the commercial alloy set and what distinguishes them, the differences between hot chamber and cold chamber magnesium production, realistic process windows, and the design rules that separate a manufacturable magnesium casting from a redesigned aluminum one. It assumes familiarity with high pressure die casting in general.
## Technical Explanation

### The commercial alloy set

Magnesium die casting alloys are dominated by the Mg-Al system. Aluminum content controls the trade-off between castability and ductility.

**AZ91D** carries 8.3–9.7 % Al with about 0.7 % Zn and a controlled manganese addition. It is the most castable grade, the strongest of the common set, and the best in salt spray provided the high-purity limits on iron, nickel and copper are respected. Those limits exist because Fe, Ni and Cu form cathodic particles that drive galvanic corrosion inside the casting itself. The "D" suffix denotes exactly that high-purity chemistry.

**AM60B** drops aluminum to 5.5–6.5 %, trading roughly a quarter of the yield strength for a large gain in elongation and energy absorption. It is the standard for parts with a crash or impact duty, such as steering wheel cores and seat structures. **AM50A**, at 4.4–5.4 % Al, goes further in the same direction and is used where ductility dominates.

Where service temperature exceeds about 120 °C, the Mg-Al eutectic phase Mg₁₇Al₁₂ softens and the alloy creeps under bolt load. **AS41B** adds silicon to form a more stable Mg₂Si network, and rare-earth alloys such as **AE44** extend usable temperature further. These grades cast less easily and cost more, so they appear mainly in powertrain and transmission housings.

### Hot chamber and cold chamber routes

Magnesium is the only major die casting metal routinely run both ways.

Hot chamber machines submerge a gooseneck in the melt. Magnesium's low iron solubility means the steel gooseneck survives, so the machine can inject directly without ladling. The result is a short, highly repeatable cycle, small shot-to-shot variation and excellent thin-wall capability. Practical shot weight is limited to roughly 2–3 kg, and injection pressure is lower than a cold chamber machine can deliver.

Cold chamber machines are used above that shot weight and where high intensification pressure is needed for thicker structural sections. The penalty is the ladle transfer step: magnesium exposed in an open shot sleeve oxidises and burns unless the sleeve is inerted, so cold chamber magnesium cells need more elaborate gas handling.

### Melt protection and the cover gas question

Molten magnesium oxidises continuously, and the oxide film is porous rather than protective. Historically SF₆ was used as a cover gas because it forms a coherent fluoride-rich film on the melt surface. SF₆ has a global warming potential in the region of 22,800 times CO₂ and is now restricted or phased out in most jurisdictions.

Current practice uses one of:

1. **HFC-134a** in a dry air or CO₂ carrier — effective, far lower GWP, but decomposes into hydrofluoric acid requiring extraction.
2. **FK-5-1-12 (fluoroketone, sold as Novec 612)** — GWP close to 1, now the most common replacement, used at very low concentration.
3. **SO₂** — cheap and effective, but a respiratory hazard demanding tight ventilation control.

Concentration is typically a fraction of a percent in the carrier gas; the operating point is set by melt surface area and furnace turnover, not by a universal recipe.

### Why magnesium fills thinner

Three factors combine. Magnesium's volumetric heat content is lower, so it deposits less energy into the die per unit volume filled. Its dynamic viscosity in the melt is low. And because die castings freeze from the surface inward, the thinner solid shell that forms during a 15 ms fill leaves a larger open channel. In practice this means walls of 0.6–1.5 mm are routine on magnesium where aluminum needs 1.5 mm as a floor, and electronics housings reach 0.5 mm locally over short flow lengths.

## Engineering Parameters

| Parameter | Typical Range | Units | Notes / Driver |
|---|---|---|---|
| Melt temperature, AZ91D | 640–700 | °C | Liquidus near 595 °C; superheat set by wall thickness |
| Melt temperature, AM60B | 650–700 | °C | Slightly higher superheat for thin sections |
| Die surface temperature | 200–280 | °C | Higher than aluminum practice; thin-wall work at the top of the band |
| Gate velocity | 40–90 | m/s | Higher than aluminum; low density reduces erosion energy |
| Cavity fill time | 10–40 | ms | Short fill is mandatory for sub-1 mm walls |
| Intensification pressure (metal) | 30–80 | MPa | Hot chamber machines sit at the low end |
| Nominal wall thickness | 1.0–3.0 | mm | 0.6–1.5 mm achievable; 0.5 mm over short flow paths |
| Minimum draft, external | 1–2 | degrees | Lower than aluminum owing to reduced shrink onto cores |
| Rib thickness | 50–75 | % of wall | Higher ratio tolerated than aluminum before sink appears |
| Cored hole depth to diameter | ≤ 3:1 | ratio | Beyond this, core cooling and ejection force become limiting |
| Solidification shrinkage | 4–5 | % | Similar to aluminum; feed thick sections through the gate |
| Cycle time, hot chamber | 15–40 | s | Small housings; no ladle step |
| Cycle time, cold chamber | 40–80 | s | Structural parts above 2–3 kg shot weight |

The mass benefit is easiest to evaluate on specific stiffness rather than on density alone. For a flat panel loaded in bending, the mass required for a given bending stiffness scales as:

```
m ∝ ρ / E^(1/3)
```

Magnesium (E ≈ 45 GPa, ρ = 1.74 g/cm³) and aluminum (E ≈ 71 GPa, ρ = 2.70 g/cm³) give index values of roughly 0.49 and 0.65 respectively, a genuine advantage of about 25 % — much smaller than the 36 % density difference suggests, but real. For parts limited by yield strength rather than stiffness, the advantage shrinks further, which is why magnesium wins on covers, brackets and housings more often than on load paths.

Alloy choice shifts the window. AM-series alloys run 10–20 °C hotter than AZ91D for equivalent fill because of their lower aluminum content and narrower freezing behaviour. Creep-resistant AS and AE grades need higher die temperatures and more attention to gate freeze time.


- **Galvanic corrosion at joints.** Magnesium is anodic to almost everything it will be bolted to. Steel fasteners in a magnesium housing need aluminum or coated washers, insulating sleeves, or a conversion coating plus sealant at the interface. This is a design decision, not a plating shop decision.
- **Surface treatment.** Chrome-free conversion coatings and anodic processes such as those in the Keronite and Tagnite families, plus e-coat, are the usual routes. Bare magnesium in a humid environment will bloom within weeks.
- **Machining and swarf.** Magnesium machines fast with low cutting forces, but fine dry chips ignite readily and burn at temperatures water will not extinguish. Cells need dedicated chip handling, Class D extinguishing media and no water-based coolant mist in the swarf stream.
- **Joining.** Magnesium is weldable with GTAW using matching filler, but HPDC parts contain entrapped gas and will blow the weld pool. Mechanical fastening, flow-drill screws and adhesive bonding are the normal production answers.
- **Threaded joints.** Direct tapping into magnesium is acceptable at moderate torque; for high-load or repeatedly serviced joints use steel inserts, and specify the boss to resist creep relaxation at temperature.
- **Recycling.** Runners and biscuits are recycled internally with tight control on flux and iron pickup. Contaminated scrap loses the high-purity chemistry that AZ91D depends on for corrosion resistance, so class separation matters more than it does for aluminum.
- **Fire and safety governance.** A magnesium cell requires melt loss detection, dry sand or Class D powder at the machine, and clear procedures for a furnace leak. Insurers usually treat magnesium foundries as a distinct risk category.


## Manufacturing Considerations
## Common Mistakes
- **Mistake:** Porting an aluminum design to magnesium by direct substitution — **Why it fails:** the section that met a stiffness target in aluminum is under-stiff in magnesium, and the anticipated mass saving evaporates once walls are thickened locally — **Fix:** re-run the structural case with E = 45 GPa and redistribute material into ribs before quoting mass.
- **Mistake:** Specifying commercial AZ91 rather than AZ91D — **Why it fails:** without the high-purity limits on Fe, Ni and Cu, salt spray performance can degrade by an order of magnitude — **Fix:** call out AZ91D to ASTM B94 and require ingot certificates showing the trace element limits.
- **Mistake:** Using AZ91D for a bolted joint running at 150 °C — **Why it fails:** Mg₁₇Al₁₂ at grain boundaries creeps, the joint loses clamp load and the assembly loosens in service — **Fix:** move to AS41B or an AE-grade, or redesign the joint with a steel compression limiter.

## Related Articles

- [Magnesium Alloys AZ91D and AM60B: Properties and Use](../materials/magnesium-alloys-az91d-am60b.md)
- [Aluminum vs Magnesium vs Zinc for Die Cast Parts](../materials/aluminum-vs-magnesium-vs-zinc.md)
- [Automotive Lightweighting: Materials and Process Strategy](../automotive/automotive-lightweighting.md)
- [Surface Treatment for Castings: Anodizing, Coating, Plating](../materials/surface-treatment-and-coatings.md)
- [Die Casting DFM: Wall Thickness, Draft Angles and Ribs](./die-casting-dfm-guidelines.md)

## References

1. **ASTM B94 — Standard Specification for Magnesium-Alloy Die Castings** — Defines chemical and mechanical requirements for AZ91D, AM60B, AM50A and AS41B, including high-purity trace element limits. https://www.astm.org
2. **ISO 16220 — Magnesium and magnesium alloys: Magnesium alloy ingots and castings** — International designation system and composition limits for cast magnesium alloys. https://www.iso.org
3. **ASM International, ASM Specialty Handbook: Magnesium and Magnesium Alloys** — Covers alloy metallurgy, corrosion mechanisms, creep behaviour and casting practice. https://www.asminternational.org
4. **NADCA Product Specification Standards for Die Castings** — Includes magnesium-specific tolerance, draft and surface finish tables alongside aluminum and zinc. https://www.nadca.com
5. **International Magnesium Association** — Industry body publishing guidance on melt protection, cover gas alternatives to SF₆ and foundry fire safety practice.
6. **SAE J465 — Cast Magnesium Alloys** — Provides the SAE designation cross-reference used in automotive material specifications. https://www.sae.org
