---
date: 2026-08-06
title: "Die Casting Die Design: Structure, Slides and Ejection"
description: "How high pressure die casting dies are built: cover and ejector halves, cavity inserts, slides, lifters, ejection systems, venting and overflow design."
keywords: ["die casting die design", "die casting die structure", "slides and lifters", "ejector system design", "overflow and venting", "HPDC tooling"]
category: "tooling"
reading_time: "7 min"
last_updated: "2026-08-06"
---

# Die Casting Die Design: Structure, Slides and Ejection

## Introduction

A high pressure die casting die is three machines in one lump of steel: a pressure vessel containing 60-100 MPa of intensification pressure, a heat exchanger pulling several hundred kilojoules out of every aluminium shot, and a precision fixture holding cavity geometry within hundredths of a millimetre while thermally shocked twice a minute.

The die is usually the largest non-recurring cost and the longest lead item. It also fixes most recurring cost: cycle time, scrap rate, trim complexity and downstream machining are decided on the tool design drawing. A die that fills badly cannot be rescued by process engineering, because the shot profile only works inside the window the gating geometry allows.

This chapter covers die architecture, the metal path, side actions, ejection, and the thermal and local-pressure features that go with them. After reading it you should review a tool layout critically and recognise the geometry that drives cost and risk.

## Technical Explanation

### Die set architecture

An HPDC die splits into a **cover half** on the fixed platen, carrying the shot sleeve interface, and an **ejector half** on the moving platen. Each is built from a plain steel **holder block**, pocketed to receive **cavity and core inserts** in hot-work tool steel. Separating cheap holder steel from expensive insert steel lets a cracked insert be replaced without scrapping the die.

Guide pillars and bushes give coarse alignment only, because platen deflection and thermal growth exceed pillar clearance. **Taper interlocks** close to the cavity, ideally on all four sides, carry the real alignment duty. Support pillars behind the ejector housing stop the backing plate bowing under injection pressure, which opens the parting line and produces flash that looks like a tonnage problem.

### The metal path

For a cold chamber machine each cycle runs:

1. Metal is ladled into the horizontal **shot sleeve**.
2. The plunger advances at 0.15-0.5 m/s to expel air without wave breaking.
3. It accelerates to fast shot velocity as metal reaches the gate.
4. Metal passes the **biscuit** and **runner**, accelerating through the **ingate**.
5. The cavity fills in 20-100 ms, displacing air into overflows and vents.
6. **Intensification pressure** feeds shrinkage through the still-liquid gate.
7. The casting solidifies; the die opens, slides withdraw, pins eject.

The runner tapers continuously from biscuit to gate so metal accelerates and never separates from the wall; any increase in cross-section aspirates air. The ingate is deliberately the thinnest section, controlling velocity and simplifying trim.

### Overflows, vents and chill blocks

Overflows are pockets outside the cavity on short thin necks. They receive the cold oxide-laden metal front, park air, and act as thermal ballast keeping thin areas hot enough to avoid cold shuts. Ejector pins usually sit in them so castings are pushed without marking cosmetic faces.

Vents run from overflows to the die edge. The **vent land**, the shallow flat that meters escaping gas, runs 0.10-0.30 mm deep for aluminium. Below about 0.08 mm it chokes; above about 0.35 mm liquid metal flashes out. Beyond the land, a **chill vent** with a serpentine or waffle pattern freezes any metal reaching it, which makes generous vent areas and vacuum connection practical.

### Slides, lifters and locking

A **slide** travels perpendicular to die opening on gibs, cammed outward by an **angle pin** fixed in the opposite half. The pin cannot resist metal pressure on the slide face during injection; the **heel block** does that. Its locking face is cut 2-3° steeper than the pin so the slide wedges solid before the pin sees load. Reversing that relationship shows as flash on the slide shut-off within a few thousand shots.

**Lifters** release internal undercuts, tilting as the ejector plate rises. Thin, hot and a common wear point, they are usually nitrided or coated and run against a plate of dissimilar hardness to avoid galling. Large slides on structural castings are driven hydraulically instead, because the stroke exceeds a reasonable angle pin length and cylinders allow sequencing.

### Ejection and squeeze pins

The ejector plate carries **ejector pins**, **return pins** and sometimes **ejector sleeves**. Return pins push the plate to zero before the die closes; positive return couplings are added when lifters could crash into the cover half. **Squeeze pins** press hydraulically into a thick isolated section while it is still pasty, closing shrinkage porosity in a boss or bearing seat, and work only if triggered before the section skins over.

## Engineering Parameters

| Parameter | Typical Range | Units | Notes / Driver |
|---|---|---|---|
| Vent land depth, aluminium | 0.10-0.30 | mm | Shallower for high-velocity thin-wall fill |
| Vent land depth, magnesium | 0.05-0.15 | mm | Lower viscosity flashes more readily |
| Total vent area | 30-50 | % of ingate area | Higher with vacuum assist |
| Overflow volume, thin-wall parts | 20-50 | % of casting weight | Thick-wall parts 10-25 % |
| Ingate velocity | 30-60 | m/s | Thick sections at the low end |
| Ingate thickness | 0.8-2.5 | mm | Roughly 0.3-0.6× local wall |
| Angle pin angle | 15-25 | ° | Long strokes favour lower angles |
| Heel block locking angle | 17-28 | ° | Always 2-3° steeper than the pin |
| Ejector stroke | part depth + 5-10 | mm | Must clear all standing cores |
| Cooling line diameter | 8-14 | mm | 10 mm common on inserts |
| Line centre to cavity surface | 15-30 | mm | Roughly 1.5-3× line diameter |
| Jet cooler / bubbler tube OD | 4-10 | mm | Cores below about 20 mm diameter |
| Insert shut-off flatness | 0.01-0.02 | mm | Controls parting line flash |
| Squeeze pin diameter | 8-25 | mm | Roughly 1.0-1.5× local section |

Required machine locking force follows from projected area:

```
F_lock ≥ p_intensification × A_projected × k
k = 1.1-1.3;  A_projected = casting + runner + overflows on the parting plane
```

Ranges move with alloy. Magnesium fills faster and flashes at smaller gaps, so vents and shut-offs tighten. Zinc tolerates thinner gates but needs more ejection points. Large structural castings push cooling toward high-density or conformal circuits as natural conduction paths grow too long.

## Manufacturing Considerations

- **Insert size drives cost more than part size.** Rounding an insert up 20 mm to hit a standard mill plate usually beats the machining saved by an odd size.
- **Design metal-safe.** Where a dimension is uncertain, leave steel in the die; adding it back means welding, which risks a soft heat-affected zone and heat check initiation.
- **Parting line placement decides trim cost.** A flat line trims in a simple die; a stepped line needs a shaped trim die and gives variable burr.
- **Slide faces need their own draft**, 1-3° relative to slide travel. Drawings noting only draw draft routinely miss this.
- **Specify die inspection**, not just part inspection: cavity CMM data, waterline pressure test records and insert hardness verification.

## Common Mistakes

- **Mistake:** Sizing overflows by rule of thumb rather than fill analysis. — **Why it fails:** The cold oxide front stays in the casting, giving cold shuts and laminations. — **Fix:** Place overflows at simulated last-fill and weld-line locations, 20-50 % of casting weight on thin-wall parts.
- **Mistake:** Cutting the heel block at the same angle as the angle pin. — **Why it fails:** The pin takes injection load in bending, deflects, and the shut-off flashes. — **Fix:** Cut the heel 2-3° steeper and verify contact with blueing at assembly.
- **Mistake:** Running a cooling line close to an insert corner without checking wall thickness. — **Why it fails:** Thin steel cracks under cycling and floods the cavity with water. — **Fix:** Keep at least 1.5× line diameter of steel and radius line intersections.
- **Mistake:** Adding vents at die spotting rather than on the layout. — **Why it fails:** Late vents are short, badly connected to last-fill regions and easily blocked by spray residue, causing chronic gas porosity. — **Fix:** Lay out vent land depth, width, routing and chill block at design stage.
- **Mistake:** Placing ejector pins where they are mechanically convenient. — **Why it fails:** Unbalanced force tilts the casting, causing drag marks, flange distortion and plate cocking. — **Fix:** Distribute pins around the centre of ejection resistance, favouring overflows and non-cosmetic bosses. Agree witness height, commonly ±0.1-0.25 mm, before cutting steel.
- **Mistake:** Feeding a wide thin part through one large gate. — **Why it fails:** Metal jets across the cavity instead of advancing as a front, folding in oxide and creating a soldering hot spot. — **Fix:** Use a fan gate or multiple ingates spread across the width.

## Related Articles

- [Die Casting Gating and Runner Design Fundamentals]({{< relref "../die-casting/gating-and-runner-design.md" >}})
- [Die Thermal Management: Cooling Lines and Die Temperature]({{< relref "../die-casting/die-thermal-management.md" >}})
- [Tool Steels for Dies: H13 Selection and Heat Treatment]({{< relref "tool-steels-and-heat-treatment.md" >}})
- [Die Life and Thermal Fatigue: Heat Checking Explained]({{< relref "die-life-and-thermal-fatigue.md" >}})
- [Die Casting DFM: Wall Thickness, Draft Angles and Ribs]({{< relref "../die-casting/die-casting-dfm-guidelines.md" >}})

## References

1. **NADCA — North American Die Casting Association** — Publishes product specification standards and die design guidance covering gating, venting, overflows and ejection. https://www.nadca.com
2. **ASM International, ASM Handbook Volume 15: Casting** — Covers die construction, metal flow and thermal behaviour in die casting. https://www.asminternational.org
3. **Andresen, B., *Die Casting Engineering: A Hydraulic, Thermal and Mechanical Process*** — Treats the die as a coupled hydraulic and thermal system, including shot sleeve and gate behaviour.
4. **ISO 8062 — Dimensional and geometrical tolerances for moulded parts** — Basis for specifying the cast tolerances a die must deliver. https://www.iso.org
5. **[DieCastor](https://www.diecastor.com)** — Die casting industry resource with reference material on die construction, slide and lifter mechanisms and production tooling practice.
