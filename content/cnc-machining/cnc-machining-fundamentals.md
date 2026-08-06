---
date: 2026-08-06
title: "CNC Machining Fundamentals: Processes, Axes and Control"
description: "A technical introduction to CNC machining covering milling, turning, machine axes, CNC control architecture, toolpath generation and process capability."
keywords: ["cnc machining", "cnc milling", "machine tool axes", "g-code", "chip formation", "machining process capability"]
category: "cnc-machining"
reading_time: "8 min"
last_updated: "2026-08-06"
---

# CNC Machining Fundamentals: Processes, Axes and Control

## Introduction

Computer numerical control machining is the dominant route for producing precise metal and plastic parts in volumes from one to a few hundred thousand. It removes material from solid stock or a near-net preform using a rotating tool or a rotating workpiece under coordinated multi-axis motion. Unlike casting or forming, the achievable geometry is limited mainly by tool access and rigidity rather than by flow behaviour, which is why machining remains the default for prototypes and for every feature needing a tolerance tighter than a casting can hold.

Commercially, machining is where a large share of unit cost is decided. A die casting may cost a few dollars in metal and cycle time, then absorb three times that in machining because someone specified a flatness callout that forces a second setup. Cycle time, setup count, tool consumption and inspection burden all trace back to design decisions made long before a purchase order exists.

This chapter defines the main process families, explains the axis conventions and control architecture that determine what geometry is reachable, walks through the chain from CAD model to finished surface, and gives realistic capability numbers. After reading it, an engineer should be able to look at a part model and predict roughly how many setups it needs and which features drive cost.

## Technical Explanation

### Chip formation and the mechanics of cutting

Machining is controlled fracture. A cutting edge with a defined rake angle is driven into the workpiece; ahead of the edge the material compresses until it shears along a narrow primary shear zone, forming a chip that slides up the rake face. Most of the mechanical energy becomes heat. In good conditions the majority of that heat leaves in the chip, which is why chip evacuation matters as much as coolant.

Three chip morphologies matter in practice. Continuous chips form in ductile materials at moderate speed and need breaking. Segmented chips appear in titanium and hardened steel through adiabatic shear, producing cyclic force and vibration. Discontinuous chips form in brittle materials such as high-silicon cast aluminium or grey iron. Built-up edge is a separate condition: workpiece material welds to the rake face at low speed, alters the effective geometry, then breaks away carrying tool substrate with it.

### Milling, turning and hole-making

In milling the tool rotates and the workpiece is fixed; the cut is interrupted, each tooth entering and leaving once per revolution. In turning the workpiece rotates and a single-point tool traverses; the cut is continuous and forces are steadier. Hole-making spans drilling, reaming and boring, each with different accuracy and depth capability. Grinding, honing and EDM take over where hardness, aspect ratio or finish exceed what a cutting edge can achieve economically.

### Axis conventions and machine configurations

ISO 841 defines the right-handed Cartesian convention. Z is parallel to the spindle axis, positive away from the workpiece; X is the longest travel perpendicular to Z; Y completes the set. Rotary axes A, B and C rotate about X, Y and Z. A vertical machining centre with three linear axes is the industry workhorse. A rotary table adds a fourth axis for indexing around a cylinder. Two rotary axes give 5-axis capability, either simultaneous or 3+2 positional. Turning centres add driven tooling and a Y axis, blurring the line with milling.

### From CAD model to finished surface

The production chain is more standardised than it looks:

1. The model plus a drawing or model-based definition fixes nominal geometry, tolerances and datums.
2. CAM programming selects stock, sets the datum origin, chooses tools and computes roughing, semi-finishing and finishing paths.
3. A post-processor translates the neutral toolpath into machine-specific G-code per ISO 6983 or a vendor dialect.
4. Fixturing is selected or designed; the workpiece is located and clamped.
5. Tools are measured on a presetter or probed in-machine and offsets are loaded.
6. The datum origin is found by edge-finder or touch probe and stored as a work offset.
7. The program is proven at reduced feed override, then run at full rate.
8. First-article inspection verifies the part before the batch releases.

### The control loop

A CNC controller interpolates along the programmed path and issues position commands to the servo drives at hundreds to thousands of blocks per second. Feedback comes from rotary encoders on the ballscrew (semi-closed loop) or linear scales on the axis (fully closed loop). Semi-closed loop is cheaper but inherits ballscrew thermal growth and pitch error. Look-ahead buffering lets the control decelerate before a corner so that programmed and actual paths agree, which is why block processing rate limits achievable feed on fine-tolerance 3D contours.

## Engineering Parameters

The basic relationship between spindle speed and cutting speed governs every parameter decision:

```
v_c = π × D × n / 1000      (m/min; D in mm, n in rpm)
n   = 1000 × v_c / (π × D)  (rpm)
v_f = f_z × z × n           (mm/min; f_z mm/tooth, z = flutes)
```

| Parameter | Typical Range | Units | Notes / Driver |
|---|---|---|---|
| VMC linear positioning accuracy | 0.005-0.015 | mm | Per ISO 230-2; scales improve to 0.003 mm |
| VMC repeatability | 0.002-0.008 | mm | Drives achievable feature-to-feature tolerance |
| Standard machined tolerance | ±0.125 (±0.005") | mm | No special process control needed |
| Precision tolerance | ±0.025 (±0.001") | mm | Requires temperature stability and probing |
| Tight tolerance | ±0.0125 (±0.0005") | mm | Often grinding or a dedicated finishing pass |
| Spindle speed, general VMC | 8,000-15,000 | rpm | Aluminium work favours 15,000-30,000 rpm |
| Spindle power, 40-taper VMC | 11-22 | kW | Limits depth of cut in steel |
| Rapid traverse | 24-60 | m/min | Affects air-cut time on large parts |
| Tool change time | 1.5-6 | s | Chip-to-chip; multiplies across tool count |
| Coolant pressure, through-spindle | 2-7 (20-70 bar) | MPa | High pressure aids deep-hole chip evacuation |

Cutting speed bands shift strongly with workpiece material. Aluminium with polished uncoated carbide runs 300-1,000 m/min and far higher on light finishing cuts. Mild steel with coated carbide sits at 150-250 m/min, austenitic stainless at 80-150 m/min, and Ti-6Al-4V at only 40-80 m/min because heat concentrates at the edge. Machine size matters too: a large gantry mill will not hold the positional accuracy of a compact VMC, and thermal drift over a shift can exceed the part tolerance in an uncontrolled shop.

## Manufacturing Considerations

- **Setup count dominates cost at low volume.** Each setup adds fixturing, datum establishment and program proving. Features on five faces of a prism typically need two setups on a 3-axis machine, or one on a 5-axis machine.
- **Tolerance between setups is not the machine tolerance.** Relating a feature cut in setup two to a datum from setup one adds relocation error, commonly 0.02-0.05 mm with conventional workholding.
- **Volume break-points.** Below roughly 50 parts, soft jaws and standard vises win. From a few hundred parts, a dedicated fixture pays back. Above several thousand, evaluate whether casting or forging should supply a near-net blank.
- **Tooling consumption** runs a few percent of machining cost in aluminium and can exceed 15 percent in titanium or hardened steel.
- **Inspection scales with callouts.** True position on a bolt circle is cheap to verify; profile of a surface referenced to three datums needs CMM time on every piece.
- **Chip recycling** recovers most of the metal value in aluminium, but a poor buy-to-fly ratio still wastes energy. Near-net blanks cut both cycle time and swarf volume.

## Common Mistakes

- **Mistake:** Applying a blanket ±0.05 mm to every dimension on the drawing. — **Why it fails:** It forces precision-class process control on features that do not need it, inflating cycle time and inspection. — **Fix:** Use ISO 2768-m as the general tolerance and call out tight limits only on mating and sealing features.
- **Mistake:** Modelling sharp internal corners in pockets. — **Why it fails:** No rotating cutter can produce a zero-radius internal corner; the shop either EDMs it or asks for a deviation. — **Fix:** Add a corner radius at least equal to the intended cutter radius, preferably larger.
- **Mistake:** Distributing features across all six faces without considering access. — **Why it fails:** Each orientation is another setup and another tolerance stack. — **Fix:** Consolidate critical features onto one or two faces.
- **Mistake:** Copying spindle rpm between machines. — **Why it fails:** rpm is meaningless without diameter; the physical variable is surface speed. — **Fix:** Transfer v_c and f_z, then recalculate n for the actual tool.
- **Mistake:** Ignoring stock condition on plate material. — **Why it fails:** Rolled plate carries residual stress; asymmetric material removal warps the part after unclamping. — **Fix:** Use stress-relieved plate such as 6061-T651 and rough both sides before finishing.
- **Mistake:** Leaving no clearance for tool holder bodies in deep cavities. — **Why it fails:** The cutting edge fits but the holder collides, forcing a longer, less rigid tool. — **Fix:** Check holder envelope, not just tool diameter, during design review.
- **Mistake:** Sending only a STEP file with no tolerance definition. — **Why it fails:** The supplier defaults to their own general tolerance, which may not match your assumption. — **Fix:** Supply a drawing or a fully annotated model-based definition with datums.

## Related Articles

- [CNC Milling vs CNC Turning: How to Choose the Process]({{< relref "cnc-milling-vs-turning.md" >}})
- [Speeds and Feeds: Cutting Parameter Calculation Guide]({{< relref "speeds-and-feeds-guide.md" >}})
- [CNC Tolerances and GD&T: Practical Specification Guide]({{< relref "tolerances-and-gdt.md" >}})
- [5-Axis CNC Machining: Kinematics, Uses and Trade-offs]({{< relref "five-axis-machining-guide.md" >}})
- [CNC Machining DFM: Design Rules That Cut Cost]({{< relref "cnc-dfm-cost-reduction.md" >}})

## References

1. **ISO 841 — Industrial automation systems and integration, numerical control of machines, coordinate system and motion nomenclature** — defines the standard axis naming used by machine tool builders and CAM post-processors. https://www.iso.org
2. **ISO 6983-1 — Numerical control of machines, program format and definition of address words** — the basis of conventional G-code addressing still used by most controls.
3. **ISO 230 series — Test code for machine tools** — specifies how positioning accuracy, repeatability and thermal behaviour are measured and reported.
4. **Machinery's Handbook, Erik Oberg et al., Industrial Press** — reference for cutting data, thread and fit tables, and shop mathematics.
5. **Metal Cutting Principles, Milton C. Shaw, Oxford University Press** — shear zone mechanics, tool wear and cutting temperature.
6. **ASM Handbook, Volume 16: Machining, ASM International** — machinability data across ferrous and non-ferrous alloys. https://www.asminternational.org
