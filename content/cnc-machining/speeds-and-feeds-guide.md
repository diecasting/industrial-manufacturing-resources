---
date: 2026-08-06
title: "Speeds and Feeds: Cutting Parameter Calculation Guide"
description: "Calculate CNC speeds and feeds correctly: cutting speed, feed per tooth, table feed, material removal rate, chip thinning and depth of cut selection."
keywords: ["speeds and feeds", "cutting speed calculation", "feed per tooth", "chip thinning", "material removal rate", "trochoidal milling"]
category: "cnc-machining"
reading_time: "9 min"
last_updated: "2026-08-06"
---

# Speeds and Feeds: Cutting Parameter Calculation Guide

## Introduction

Cutting parameters decide tool life, surface quality, cycle time and whether a job runs unattended or needs babysitting. They are also where most shop-floor folklore lives. Numbers get copied from one machine to another, scaled by feel, and then blamed on the tool when an edge fails after twenty minutes. The underlying relationships are simple arithmetic; what makes them difficult is knowing which quantity is fixed by physics, which by the machine, and which by the tool supplier's warranty.

The physical variable that governs tool wear is surface speed at the cutting edge, not spindle rpm. The variable that governs edge loading is chip thickness, not programmed feed rate. Both are derived quantities and both are commonly mishandled. A 6 mm endmill and a 20 mm endmill at the same rpm in the same material operate in completely different regimes.

This chapter sets out the calculations, gives defensible parameter bands for common workpiece materials, explains radial and axial chip thinning, and covers the strategy choices that determine whether those parameters are achievable at all.

## Technical Explanation

### The core relationships

Everything derives from four equations. Cutting speed links tool or workpiece diameter to spindle speed. Table feed links feed per tooth to flute count and spindle speed. Material removal rate links the engagement geometry to volumetric productivity. Cutting power links removal rate to the specific cutting force of the material.

```
v_c = π × D × n / 1000              cutting speed, m/min (D mm, n rpm)
n   = 1000 × v_c / (π × D)          spindle speed, rpm
v_f = f_z × z × n                   table feed, mm/min
MRR = a_p × a_e × v_f               milling removal rate, mm³/min
P_c = MRR × k_c / (60 × 10⁶)        spindle power at the cut, kW (k_c N/mm²)
```

Work in this order: choose v_c from the material and tool substrate, compute n for the actual tool diameter, choose f_z from the tool size and material, then compute v_f. Never start from rpm.

### Radial chip thinning

Maximum chip thickness equals feed per tooth only when radial engagement is exactly half the cutter diameter. Below that, the tooth enters and leaves before reaching full penetration, and the actual chip is thinner:

```
h_ex = f_z × 2 × √( (a_e/D) × (1 − a_e/D) )
CTF  = 1 / ( 2 × √( (a_e/D) × (1 − a_e/D) ) )     chip thinning factor
f_z(adjusted) = f_z(nominal) × CTF                 applies when a_e < D/2
```

At 25 percent radial engagement the factor is about 1.15; at 10 percent it is about 1.67; at 5 percent it approaches 2.3. Ignoring this is the most common reason light radial cuts wear tools faster than heavy ones: the chip becomes too thin, the edge rubs instead of cutting, and heat goes into the tool rather than the chip.

Ball nose and round-insert cutters suffer the axial equivalent. Effective diameter at a shallow axial depth is `D_eff = 2 × √(a_p × (D − a_p))`, and cutting speed must be recomputed from D_eff, not from the nominal diameter.

### Climb versus conventional milling

In climb milling the tooth enters at maximum chip thickness and exits at zero. Cutting force pushes the workpiece into the fixture, heat leaves in the chip, and surface finish is better. In conventional milling the tooth enters at zero thickness, rubs before it cuts, work hardens the surface, and lifts the workpiece. On any machine with preloaded ballscrews, climb milling is the default. Conventional milling remains useful only on worn manual machines with backlash, on hard cast skin where the tooth is better entering below the abrasive layer, and on some work-hardening stainless finishing passes.

### High-engagement versus high-speed strategies

Two productive regimes exist. Conventional roughing uses large radial engagement (50-100 percent of diameter) and modest axial depth, concentrating wear in one band of the flute. Trochoidal or dynamic milling inverts this: radial engagement drops to 5-15 percent of diameter while axial depth rises to 1.5-3 times diameter, spreading wear along the whole flute and keeping the engagement angle low and constant. Removal rates are comparable or better, spindle load is smoother, and tool life often doubles. It requires chip thinning compensation, CAM that holds constant engagement angle, and adequate rapid traverse and look-ahead.

### Working sequence for a new job

1. Identify the workpiece material group and condition, including hardness.
2. Select the tool substrate and coating, then read the supplier v_c band for that combination.
3. Choose the strategy: full slot, shoulder, trochoidal, or finishing pass.
4. Set a_p and a_e from the strategy and the tool's usable flute length.
5. Compute n from v_c and the actual cutting diameter.
6. Select f_z from the tool diameter and material, then apply the chip thinning factor if a_e < D/2.
7. Compute v_f, MRR and P_c; check P_c against available spindle power with derating for low rpm.
8. Run a test cut, listen for chatter, inspect the chip colour and shape, then adjust in single-variable steps.

## Engineering Parameters

| Material | v_c, coated carbide (m/min) | f_z, 10 mm endmill (mm/tooth) | k_c1 (N/mm²) | Notes |
|---|---|---|---|---|
| Aluminium 6061-T6 | 300-1,000 | 0.08-0.20 | 700-900 | HSM light cuts reach 3,000+ m/min |
| Aluminium 7075-T6 | 300-800 | 0.08-0.18 | 800-950 | Less gummy than 6061, good chip break |
| Cast A380 / ADC12 | 200-500 | 0.06-0.15 | 800-1,000 | Si content is abrasive; PCD for volume |
| Mild steel 1018/S235 | 150-250 | 0.05-0.15 | 1,500-1,800 | Coated carbide, flood or air blast |
| Alloy steel 4140, 28-32 HRC | 120-200 | 0.05-0.12 | 1,800-2,100 | Reduce f_z as hardness rises |
| Stainless 304 | 80-150 | 0.04-0.12 | 2,000-2,400 | Work hardens; avoid dwelling and rubbing |
| Stainless 17-4 PH H900 | 60-110 | 0.04-0.10 | 2,200-2,600 | Sharp edge prep, positive geometry |
| Ti-6Al-4V | 40-80 | 0.05-0.12 | 1,300-1,600 | Heat stays at the edge; high-pressure coolant |
| H13, 45-55 HRC | 60-120 | 0.02-0.06 | 2,400-3,000 | Solid carbide, AlTiN, low radial engagement |
| Grey cast iron GG25 | 100-200 | 0.10-0.25 | 900-1,200 | Dry cutting is normal, abrasive dust |

Feed per tooth scales roughly with tool diameter. A 3 mm endmill takes about a third of the f_z of a 12 mm tool in the same material, because the flute core cannot carry the same bending load. Long-reach tooling needs further reduction: at 5 times diameter overhang, expect to halve both f_z and a_e relative to a stub-length tool. Uncoated polished carbide is preferred for aluminium because coating thickness dulls the edge radius and encourages built-up edge, while coated grades are mandatory in steel where crater wear dominates. Spindle power at low rpm is often the real constraint: many 40-taper machines deliver full torque only above 1,000-1,500 rpm, so a large face mill in steel may be torque limited well below its nominal power rating.

## Manufacturing Considerations

- **Chip colour is a live diagnostic.** In steel, silver to light straw indicates a healthy balance; dark blue or purple means excessive speed or insufficient chip load carrying the heat away.
- **Adjust one variable at a time.** If tool life is short, reduce v_c first; if the finish is poor or the tool deflects, address f_z, engagement and overhang.
- **Chatter is a stability problem, not a feed problem.** Changing spindle speed by 10-20 percent frequently eliminates it by moving out of a resonance lobe, whereas simply reducing feed can make rubbing worse.
- **Coolant delivery matters more than coolant brand.** Through-spindle supply at 2-7 MPa is the difference between a workable and an unworkable deep pocket. In aluminium, air blast or minimum quantity lubrication often beats flood.
- **Recutting chips destroys tools.** In deep aluminium pockets, chips falling back into the cut are a leading cause of sudden edge failure.
- **Programmed feed is not actual feed.** On tight 3D contours the control decelerates at every corner, so measured cycle time can be double the calculated figure.
- **Record parameters as v_c and f_z.** Only those transfer between machines and tool diameters.

## Common Mistakes

- **Mistake:** Using the same feed rate when switching from a 12 mm to a 6 mm endmill. — **Why it fails:** The smaller tool has roughly one eighth the section stiffness and cannot carry the same chip load. — **Fix:** Recalculate n from v_c and scale f_z with diameter.
- **Mistake:** Running light radial cuts at the catalogue feed per tooth. — **Why it fails:** Chip thinning makes the real chip too thin, so the edge rubs and heat builds in the tool. — **Fix:** Apply the chip thinning factor whenever a_e is below half the diameter.
- **Mistake:** Slotting at full diameter with a standard endmill in steel. — **Why it fails:** 180 degrees of engagement traps chips, doubles radial force and invites chatter. — **Fix:** Use trochoidal entry with 10 percent stepover and full axial depth.
- **Mistake:** Reducing feed when chatter appears. — **Why it fails:** Lower chip load increases rubbing and can worsen the instability. — **Fix:** Change spindle speed, shorten the tool, or reduce radial engagement.
- **Mistake:** Applying thick coated tooling to aluminium finishing. — **Why it fails:** The larger edge radius promotes built-up edge and smears the surface. — **Fix:** Use polished uncoated or diamond-coated grades with high rake.
- **Mistake:** Computing cutting speed from nominal diameter on a ball nose cutter at shallow depth. — **Why it fails:** Effective diameter is much smaller, so real surface speed is a fraction of the intended value. — **Fix:** Use D_eff = 2√(a_p(D − a_p)).
- **Mistake:** Ignoring the spindle torque curve. — **Why it fails:** A calculated 15 kW cut is impossible at 800 rpm on a machine that makes full torque only above 1,200 rpm. — **Fix:** Check the power and torque chart before committing to depth of cut.

## Related Articles

- [CNC Machining Fundamentals: Processes, Axes and Control]({{< relref "cnc-machining-fundamentals.md" >}})
- [Machining Aluminum Alloys: Parameters and Tooling]({{< relref "machining-aluminum-alloys.md" >}})
- [CNC Surface Finish: Ra Values, Processes and Costs]({{< relref "surface-finish-guide.md" >}})
- [Workholding and Fixture Design for CNC Machining]({{< relref "workholding-and-fixture-design.md" >}})
- [Tool Steels for Dies: H13 Selection and Heat Treatment]({{< relref "../tooling/tool-steels-and-heat-treatment.md" >}})

## References

1. **ISO 3685 — Tool-life testing with single-point turning tools** — defines the wear criteria and test conditions behind published tool life curves.
2. **ISO 8688-1 and 8688-2 — Tool life testing in milling** — face milling and end milling test methods used for comparative cutter data.
3. **Machinery's Handbook, Industrial Press** — extensive speed and feed tables organised by material group and tool material.
4. **Metal Cutting Principles, Milton C. Shaw, Oxford University Press** — derivation of specific cutting energy, chip thickness and temperature relationships.
5. **ASM Handbook, Volume 16: Machining, ASM International** — machinability ratings and recommended parameter ranges by alloy family. https://www.asminternational.org
6. **Manufacturing Automation, Yusuf Altintas, Cambridge University Press** — chatter stability lobe theory and dynamic modelling of milling.
