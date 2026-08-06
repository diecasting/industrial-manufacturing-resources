---
date: 2026-08-06
title: "Die Casting DFM: Wall Thickness, Draft Angles and Ribs"
description: "Die casting design rules: wall thickness limits, draft angles, rib and boss proportions, fillets, cored holes, NADCA tolerances and parting line planning."
keywords: ["die casting DFM", "wall thickness die casting", "draft angle", "rib design", "NADCA tolerances", "cored hole design"]
category: "die-casting"
reading_time: "10 min"
last_updated: "2026-08-06"
---

# Die Casting DFM: Wall Thickness, Draft Angles and Ribs

## Introduction
Most of the cost and most of the quality risk in a die casting programme are fixed by the time the CAD model is released. Once a die is cut, wall thickness cannot be reduced, a draft angle cannot be added without welding and re-machining, and an undercut that requires a slide will require that slide for the life of the tool. Design for manufacture in die casting is therefore front-loaded to an unusual degree.


What follows is a set of design rules with numbers attached, organised by feature type, together with the tolerance framework that governs what can reasonably be put on a drawing. The intent is that a design engineer can use it to review a model before release, and a sourcing engineer can use it to interrogate a supplier's DFM feedback rather than simply accepting it.
## Technical Explanation

### Wall thickness: the master variable

Wall thickness governs fill, cycle time, porosity distribution and mass simultaneously. Two constraints bracket it.

The lower bound is flow. A thin wall chills quickly, and the metal front stops when its solid fraction reaches roughly 20–30 %. The distance metal can travel scales with thickness, giving a practical flow-length-to-wall ratio of about 100:1 to 200:1 for aluminum. A 1.5 mm wall can therefore be filled reliably for perhaps 150–300 mm from the gate, no further.

The upper bound is soundness. A thick section stores heat, solidifies last, and forms shrinkage porosity unless liquid metal can reach it through a gate that is still open. Since the gate is nearly always thinner than the wall, thick sections are structurally unreliable in HPDC. This is why the correct answer to "the part needs to be stiffer" is almost always a rib, not a thicker wall.

The second-order rule matters as much as the first: **uniformity**. Section changes should be kept within about ±25 % of nominal and blended over a length of at least three times the thickness difference. An abrupt step from 2 mm to 5 mm creates a hot spot on one side and a flow restriction on the other.

### Draft

Aluminum shrinks roughly 0.5–0.7 % linearly during cooling, so the casting grips every core and every internal wall. Draft provides clearance so that the moment the die opens, the casting separates instead of dragging.

Two rules govern the numbers. First, internal surfaces need more draft than external ones, because the casting shrinks **onto** a core but **away from** an external cavity wall. Second, required draft in degrees falls as depth increases, because the total clearance generated is depth multiplied by the tangent of the angle — a 2° draft over 100 mm produces 3.5 mm of clearance, which is more than enough and more than the designer usually wants to give away.

Textured surfaces need extra. As a working figure, add roughly 1° to 1.5° of draft for every 0.025 mm of texture depth, or the texture will drag and scuff on ejection.

### Ribs, bosses and gussets

Ribs convert a stiffness requirement into a small amount of well-placed material. Bending stiffness of a plate scales with the cube of section depth, so a rib standing three times the wall height above the surface is far more effective than doubling the wall.

The constraint is sink. A rib joins the wall at a T-junction, which is a local thermal mass. If the rib is too thick relative to the wall, that junction freezes last, contracts, and pulls the opposite face inward as a visible sink mark. Keeping rib thickness at 50–70 % of the wall for aluminum, with a modest root fillet, keeps the junction mass under control.

Bosses have the same problem in a more concentrated form. A solid boss is a sphere of hot metal attached to a thin wall. The fix is to core it out so the boss becomes an annulus of near-wall thickness, and to support it with gussets rather than by thickening its base.

### Fillets and corners

Sharp internal corners do three harmful things: they concentrate stress in the casting, they concentrate stress in the die steel where heat checking then initiates, and they disturb metal flow. A minimum internal radius of half the local wall thickness, and never below about 0.5 mm, is the working rule. External corners should carry the internal radius plus the wall thickness so that the section remains uniform through the corner.

### Cored holes, undercuts and the parting line

Cored holes save machining but constrain the die. A blind cored hole is formed by a pin heated on all sides but cooled from one end only, so it runs hot and wears. Depth-to-diameter ratios of about 3:1 for blind holes and 4:1 to 5:1 for through holes, where the pin can be supported at both ends, are the normal limits for aluminum.

Undercuts require slides, and slides carry a compound penalty: die cost, cycle time, maintenance, a looser tolerance on anything they form, and a flash witness where they seal. A design change that removes a slide is almost always worth more than the feature it deletes.

Parting line placement is a design decision, not a tooling detail. Put it on an edge where a flash witness is acceptable, keep critical dimensions entirely within one die half, and avoid running it across a sealing surface or a Class A cosmetic face.

## Engineering Parameters

**Wall thickness by alloy and casting size**

| Alloy | Small part (< 100 cm² surface) | Medium (100–500 cm²) | Large (> 500 cm²) | Thin-wall limit |
|---|---|---|---|---|
| Aluminum (A380 / ADC12) | 1.2–1.8 mm | 1.8–2.5 mm | 2.5–4.0 mm | 0.8–1.2 mm |
| Magnesium (AZ91D / AM60B) | 0.8–1.5 mm | 1.3–2.0 mm | 2.0–3.0 mm | 0.6–1.0 mm |
| Zinc (Zamak 3 / 5) | 0.6–1.0 mm | 1.0–1.5 mm | 1.5–2.5 mm | 0.4–0.6 mm |

**Draft angle guidance, aluminum**

| Surface type | Depth ≤ 25 mm | Depth 25–100 mm | Depth > 100 mm |
|---|---|---|---|
| External walls | 1.5–3° | 1–2° | 0.5–1° |
| Internal walls and cores | 2–5° | 1.5–3° | 1–2° |
| Cored holes below 5 mm diameter | 2–4° | not recommended | not recommended |
| Ribs (per side) | 1.5–3° | 1–2° | — |
| Textured surfaces | add 1–1.5° per 0.025 mm texture depth | | |

**Feature proportions**

| Feature | Recommended Value | Units | Notes / Driver |
|---|---|---|---|
| Rib thickness | 50–70 % of nominal wall | % | Above 70 % produces visible sink |
| Rib height | ≤ 3× nominal wall | ratio | Taller ribs need extra draft and risk drag |
| Rib spacing | ≥ 2× nominal wall | ratio | Closer spacing leaves a thin, un-fillable land |
| Rib root fillet | 0.25–0.5 × wall | ratio | Balances stress relief against added mass |
| Internal fillet radius | ≥ 0.5 × wall, min 0.5 | mm | Reduces die heat checking initiation |
| External corner radius | internal radius + wall | mm | Keeps section thickness uniform |
| Boss outside diameter | 2–2.5 × hole diameter | ratio | Cored, not solid |
| Boss wall thickness | 0.6–0.8 × nominal wall | ratio | Solid bosses form shrinkage voids |
| Minimum cored hole diameter | 2.5–3.0 | mm | Aluminum; smaller pins fail rapidly |
| Blind cored hole depth ratio | ≤ 3:1 | depth : diameter | Pin runs hot and is unsupported at the tip |
| Through cored hole depth ratio | ≤ 4:1–5:1 | depth : diameter | Pin supported in both halves |
| Section change blend length | ≥ 3 × thickness difference | ratio | Prevents hot spots and flow restriction |
| Machining stock, functional faces | 0.5–1.0 | mm | More stock exposes subsurface porosity |
| Dense skin depth | 0.3–1.0 | mm | Do not plan to machine through it |

**Dimensional tolerance framework**

| Characteristic | Typical Capability | Units | Notes / Driver |
|---|---|---|---|
| Linear dimension, first 25 mm, one die half | ±0.1 to ±0.25 | mm | Precision versus standard NADCA tolerance grade |
| Each additional 25 mm | ±0.025 | mm | Equivalent to ±0.001 in per inch |
| Additional allowance across the parting line | ±0.1 to ±0.3 | mm | Increases with projected area |
| Additional allowance on a slide-formed feature | ±0.1 to ±0.3 | mm | Slide wear and locking repeatability |
| Flatness | 0.05–0.10 per 25 mm | mm | Thermal distortion dominates on large flat faces |
| As-cast surface roughness | 0.8–3.2 | µm Ra | Degrades as heat checking develops |
| Flash witness after trim | 0.15–0.4 | mm | Depends on trim die condition and clamp tonnage |
| Ejector pin witness | 0.1–0.3 | mm | Specify recessed or flush on cosmetic faces |

Capability shifts with the process route. A vacuum-assisted structural casting can hold tighter dimensions than a general commercial part because die thermal control is usually better. A very large casting on a 4,000 tonne machine gives up tolerance because die deflection and thermal gradients are proportionally larger. Zinc holds tighter tolerances than aluminum across the board, since lower melt temperature means less die thermal cycling.


- **Specify tolerances only where they are needed.** Applying a general ±0.1 mm block tolerance to a casting drawing forces the supplier either to machine everything or to quote a scrap allowance. Identify the handful of functional dimensions and allocate them properly.
- **Datum strategy should reflect how the part is made and used.** Choose datums that lie in the same die half, are away from the parting line, and can be reached by a fixture in the machining operation.
- **Every slide has a running cost.** Budget for die cost, a longer cycle, an extra maintenance item and looser tolerance on the feature. Compare against machining the feature instead.
- **Cosmetic surfaces should be in the cover half.** Ejector pins live in the ejector half, so cosmetic faces placed there will carry witness marks.
- **Uniform wall reduces mass and cost together.** Removing 0.3 mm from a 2.5 mm nominal wall on a 2 kg casting removes both material cost and cycle time. The saving is compounded across every part.
- **Plan for thermal distortion on large flat faces.** A 300 mm flat surface on a die casting will not be flat to 0.1 mm as cast. Either machine it or design in relief so only bearing pads need to be flat.
- **Coordinate DFM with the machining plan early.** A boss located for casting convenience may be unreachable for a drill without a fifth axis. The lowest total cost usually comes from reviewing casting and machining together.


## Manufacturing Considerations
## Common Mistakes
- **Mistake:** Adding 1 mm to the nominal wall to satisfy an FEA stiffness result — **Why it fails:** it increases mass and cycle time, creates hot spots, and delivers far less stiffness than the same mass placed in ribs — **Fix:** re-run the analysis with a ribbed section at the original wall.
- **Mistake:** Modelling zero draft and expecting the tool shop to add it — **Why it fails:** draft changes every dimension and every mating interface; adding it late invalidates the assembly stack-up and can break clearance to neighbouring parts — **Fix:** model draft from the first release and define the pull direction in the CAD model.
- **Mistake:** Making ribs the same thickness as the wall — **Why it fails:** the T-junction becomes the thermal mass of the region and produces sink marks on the show face plus internal shrinkage — **Fix:** hold ribs at 50–70 % of wall with a root fillet of 0.25–0.5 × wall.
- **Mistake:** Specifying a solid 15 mm boss for a threaded insert — **Why it fails:** the boss freezes long after the surrounding wall and reliably contains shrinkage porosity where the thread will be cut — **Fix:** core the boss to a near-wall annulus and support it with three or four gussets.

## Related Articles

- [Aluminum Die Casting Process: Complete Engineering Guide]({{< relref "aluminum-die-casting-process-guide.md" >}})
- [Die Casting Die Design: Structure, Slides and Ejection]({{< relref "../tooling/die-casting-die-design.md" >}})
- [Die Casting Cost Drivers: How Casting Prices Are Built]({{< relref "die-casting-cost-drivers.md" >}})
- [CNC Tolerances and GD&T: Practical Specification Guide]({{< relref "../cnc-machining/tolerances-and-gdt.md" >}})
- [Machining Die Cast Components: Datums, Stock and Porosity]({{< relref "../cnc-machining/machining-die-cast-components.md" >}})

## References

1. **NADCA Product Specification Standards for Die Castings** — The primary source for linear, parting line and moving-die-component tolerance tables, draft recommendations and flatness guidance. https://www.nadca.com
2. **ISO 8062-3 — Geometrical product specifications: Dimensional and geometrical tolerances for moulded parts** — International tolerance grade system for castings, used alongside or instead of NADCA tables. https://www.iso.org
3. **ASME Y14.5 — Dimensioning and Tolerancing** — Defines the GD&T framework used to apply datums and profile controls to cast features.
4. **ASTM B85 / B85M — Standard Specification for Aluminum-Alloy Die Castings** — Alloy composition and general requirements referenced on most aluminum casting drawings. https://www.astm.org
5. **ASM International, ASM Handbook Volume 15: Casting** — Background on solidification, shrinkage and the geometric origins of casting defects. https://www.asminternational.org
6. **AlumCasting** — Manufacturing resource covering aluminum die casting design rules, draft and wall thickness practice for production tooling. https://www.alumcasting.com
