---
title: "Workholding and Fixture Design for CNC Machining"
description: "Workholding and fixture design for CNC: the 3-2-1 locating principle, vises, soft jaws, vacuum chucks, clamping distortion and repeatability versus accuracy."
keywords: ["workholding", "fixture design", "3-2-1 locating principle", "soft jaws", "vacuum chuck", "clamping distortion"]
category: "cnc-machining"
reading_time: "8 min"
last_updated: "2026-08-06"
---

# Workholding and Fixture Design for CNC Machining

## Introduction

The machine tool sets the upper bound on accuracy; the fixture decides how much of that bound survives. A machining centre repeating to 0.003 mm delivers nothing if the workpiece shifts 0.05 mm under cutting load, or springs back 0.1 mm when the clamps release. Most persistent dimensional problems in a machine shop turn out to be workholding problems wearing a machining costume.

Fixture design also drives cost more directly than most engineers expect. Load and unload time is dead time on a machine with an hourly rate. A part that takes four minutes to indicate in and clamp, then two minutes to cut, is spending two thirds of its cycle producing nothing. At a few hundred pieces the arithmetic already justifies a dedicated fixture, and at a few thousand it justifies pallet changing.

This chapter covers the kinematics of locating a rigid body, the practical difference between locating and clamping, the main workholding families and their repeatability, and the two mechanisms that ruin thin-walled and plate parts: clamping distortion and residual stress release. After reading it you should be able to specify workholding that matches the tolerance actually required, without paying for accuracy the part does not need.

## Technical Explanation

### Degrees of freedom and the 3-2-1 principle

An unconstrained rigid body has six degrees of freedom: translation along X, Y and Z, and rotation about each. Full location requires removing all six, and the classical scheme does it with six point contacts.

Three points on the primary locating surface define a plane and remove one translation plus two rotations. Two points on a secondary surface, perpendicular to the first, remove one translation and one rotation. One point on a tertiary surface removes the last translation. Clamps then hold the part against those six locators. The scheme is deterministic: with exactly six contacts there is one and only one position the part can occupy.

Adding a seventh contact over-constrains the part. If the fixture has four supports under a plate rather than three, the plate rocks or is forced flat by the clamps, and the flatness you machine will not be the flatness you get after release. Where extra support is genuinely needed for rigidity, use adjustable or spring-loaded supports that are locked after the part seats, so they carry load without defining position.

### Locating and clamping are different jobs

Locators establish position. Clamps supply the friction and preload that resist cutting forces. Confusing the two produces fixtures where the clamping force pushes the part off its locators. Clamping force should be directed into the primary locating surface, never across it, and the clamp contact should sit over a supported region rather than an unsupported span.

Required clamping force follows from friction:

```
F_clamp ≥ (F_cut × S) / µ        µ ≈ 0.1-0.2 smooth steel, 0.2-0.3 serrated
F_cut ≈ k_c × a_p × f_z          approximate tangential force per engaged tooth
```

with a safety factor S of 1.5-2.5. In practice the geometry usually helps: a positive stop absorbing the feed direction load reduces the friction the clamps must provide.

### Workholding families

Machine vises with hard jaws are fast, rigid and repeatable, and handle prismatic stock well. Soft jaws machined in place extend that to irregular and cast parts, with excellent repeatability because they are bored on the machine that will cut the part. Vacuum chucks suit flat, thin, large-area parts where mechanical clamps would distort the workpiece. Magnetic chucks apply to ferrous parts, particularly in grinding. Dedicated fixtures answer high volume, awkward geometry, or multi-part loading. Tombstones and pallet systems raise spindle utilisation by allowing loading during cutting.

### Clamping distortion and residual stress

Two distinct mechanisms deform parts. The first is elastic distortion under clamping load. A thin-wall aluminium housing gripped across its open end deforms into an oval, gets bored round in that state, then springs back to an oval bore when released. The fix is to reduce clamping force, spread it over more contacts, clamp on a rigid feature such as a boss or flange, or add a sacrificial rib that is removed last.

The second is residual stress in the stock. Rolled and quenched plate carries a balanced internal stress field. Removing material asymmetrically unbalances it and the part bows, sometimes by several tenths of a millimetre on a long plate. This has nothing to do with the fixture and cannot be clamped away. Mitigations: specify stress-relieved material such as 6061-T651, rough both sides to keep removal symmetric, leave 0.5-1.0 mm of finishing stock, release clamps and re-clamp lightly before the finishing pass, and where flatness is critical add an intermediate stress relief between roughing and finishing.

### Designing a fixture

1. Identify the datum reference frame from the drawing and locate on those features.
2. Choose the primary locating surface: the largest, flattest, most stable face.
3. Place three supports as far apart as the part allows to maximise angular stability.
4. Add secondary and tertiary locators to remove the remaining degrees of freedom.
5. Position clamps so their force vector drives the part into the locators.
6. Check tool and holder access to every feature in the setup, including approach and retract.
7. Verify chip evacuation and coolant drainage; chips trapped under a locator destroy repeatability.
8. Add a poka-yoke feature so the part cannot be loaded in the wrong orientation.
9. Prove the fixture with a first article, then measure repeatability across several load cycles.

## Engineering Parameters

| Workholding type | Repeatability | Typical clamp force | Load time | Relative cost | Best fit |
|---|---|---|---|---|---|
| Standard machine vise, hard jaws | 0.02-0.05 mm | 10-40 kN | 20-60 s | low | Prismatic stock, prototypes |
| Machined soft jaws | 0.010-0.025 mm | 10-30 kN | 20-45 s | low | Irregular and cast parts, second ops |
| Self-centring pneumatic vise | 0.010-0.020 mm | 8-25 kN | 5-15 s | medium | Repeat production, consistent force |
| Zero-point / quick-change pallet | 0.005-0.010 mm | 15-50 kN | 5-20 s | high | Frequent changeover, pallet pools |
| Vacuum chuck | 0.02-0.05 mm | 0.05-0.07 MPa | 10-30 s | medium | Thin plates, large flat covers |
| Magnetic chuck | 0.01-0.03 mm | 0.08-0.15 MPa | 5-15 s | medium | Ferrous plates, grinding |
| Dedicated multi-part fixture | 0.010-0.030 mm | design dependent | 30-120 s | high | Volume production, family parts |
| 3-jaw scroll chuck | 0.05-0.10 mm | 15-50 kN | 10-20 s | low | Turning, non-critical concentricity |
| Collet chuck | 0.005-0.015 mm | 10-30 kN | 5-15 s | medium | Turning bar stock, high concentricity |

Vacuum holding force is simply pressure difference times area: a 200 mm × 150 mm part sealed at 0.06 MPa effective vacuum generates about 1.8 kN normal force, which is ample for light aluminium finishing but marginal for heavy roughing, and it provides no resistance to lifting if the seal is breached by a chip. Repeatability and accuracy are separate properties. A chuck that repeats to 0.005 mm may still be 0.05 mm off nominal; repeatability is what matters for production consistency, and absolute accuracy can be corrected once with a work offset or a probing cycle.

## Manufacturing Considerations

- **Fixture cost amortises against load time saved.** A fixture that removes two minutes per part pays for itself quickly at 500 pieces and is essential at 5,000.
- **Probing replaces indicating.** An in-machine touch probe establishes the work offset in seconds and tolerates a rougher fixture, shifting cost from hardware to cycle time.
- **Design for chip clearance.** Locators should be relieved and drained. Enclosed pockets that collect swarf cause intermittent 0.05 mm errors that are difficult to diagnose.
- **Stack tolerances through the fixture.** Locator wear, pin clearance and clamp deflection all add to the part tolerance and must be budgeted, not assumed away.
- **Cast and moulded parts need net-shape-tolerant locating.** Locate on features held tightly by the tool, not on surfaces crossing a parting line or affected by die wear.
- **Thin walls want more, lighter clamps** rather than fewer, harder ones, and benefit from machining the wall last with a light finishing pass.
- **Document clamping torque.** If the drawing depends on low distortion, the process sheet must state clamp torque rather than leaving it to the operator.

## Common Mistakes

- **Mistake:** Supporting a plate on four pads instead of three. — **Why it fails:** The over-constrained part rocks or is bent flat by the clamps and springs back after release. — **Fix:** Use three fixed supports plus lockable adjustable supports for rigidity.
- **Mistake:** Clamping a thin-wall housing across its open end. — **Why it fails:** The bore is machined round in the distorted state and becomes oval when released. — **Fix:** Clamp axially on a flange, use an expanding internal mandrel, or reduce force and finish light.
- **Mistake:** Machining a large plate from non-stress-relieved stock. — **Why it fails:** Asymmetric material removal releases rolling stress and the part bows well beyond the flatness callout. — **Fix:** Specify T651 temper plate, rough both faces symmetrically and finish after a stress-relief pause.
- **Mistake:** Locating on an as-cast surface that crosses the parting line. — **Why it fails:** Die mismatch and flash move the locating point from part to part. — **Fix:** Locate on a single die-half feature or on machined datum pads created in the first operation.
- **Mistake:** Directing clamping force away from the primary locator. — **Why it fails:** The clamp lifts the part off its supports, so position depends on clamp sequence. — **Fix:** Orient clamp vectors into the locating surface and specify a tightening sequence.
- **Mistake:** Choosing a 3-jaw scroll chuck for a concentricity-critical second operation. — **Why it fails:** Scroll chuck repeatability of 0.05-0.10 mm is coarser than most concentricity callouts. — **Fix:** Use a collet, a machined soft jaw set, or complete both diameters in one chucking.
- **Mistake:** Relying on vacuum alone for roughing. — **Why it fails:** Holding force scales with sealed area, and a chip under the seal collapses it mid-cut. — **Fix:** Rough with mechanical clamps or side stops and use vacuum only for finishing.
- **Mistake:** Ignoring holder clearance when placing clamps. — **Why it fails:** The program crashes into a clamp or forces a longer, less rigid tool. — **Fix:** Include the fixture in the CAM model and run a full collision simulation.

## Related Articles

- [CNC Machining Fundamentals: Processes, Axes and Control](./cnc-machining-fundamentals.md)
- [Machining Die Cast Components: Datums, Stock and Porosity](./machining-die-cast-components.md)
- [CNC Tolerances and GD&T: Practical Specification Guide](./tolerances-and-gdt.md)
- [5-Axis CNC Machining: Kinematics, Uses and Trade-offs](./five-axis-machining-guide.md)
- [CNC Machining DFM: Design Rules That Cut Cost](./cnc-dfm-cost-reduction.md)

## References

1. **Fundamentals of Tool Design, Society of Manufacturing Engineers** — standard treatment of locating principles, clamping mechanisms and jig and fixture practice.
2. **ISO 1101 — Geometrical product specifications, geometrical tolerancing** — defines the datum concepts that fixture locating schemes must reproduce.
3. **ASME Y14.5 — Dimensioning and Tolerancing** — datum feature simulators and the relationship between inspection fixturing and machining fixturing.
4. **ASM Handbook, Volume 16: Machining, ASM International** — cutting force data used to size clamping loads. https://www.asminternational.org
5. **Machinery's Handbook, Industrial Press** — clamping element load ratings, thread torque relationships and locating pin standards.
6. **ASTM B918 / B918M — Heat treatment of wrought aluminum alloys** — background on tempers such as T651 that include a stress-relief stretch. https://www.astm.org
