---
date: 2026-08-06
title: "CNC Tolerances and GD&T: Practical Specification Guide"
description: "Practical guidance on CNC tolerances and GD&T: ISO 2768 general tolerances, achievable shop capability, datum reference frames, MMC and bonus tolerance."
keywords: ["cnc tolerances", "gd&t", "iso 2768", "datum reference frame", "maximum material condition", "true position"]
category: "cnc-machining"
reading_time: "9 min"
last_updated: "2026-08-06"
---

# CNC Tolerances and GD&T: Practical Specification Guide

## Introduction

A tolerance is a statement about how much variation a function can absorb. It is not a statement about how well a machine shop works, and it is not a safety margin to be tightened when a designer feels uncertain. Every limit on a drawing converts directly into process control, inspection effort and scrap risk, and the conversion rate is steeply non-linear. Moving a dimension from ±0.125 mm to ±0.0125 mm does not cost ten times more; it changes which machine runs the job, whether the shop needs a temperature-controlled room, and whether inspection is a caliper reading or a CMM routine.

Geometric dimensioning and tolerancing exists because coordinate tolerances describe the wrong thing. A four-hole pattern toleranced ±0.1 mm in X and Y defines a square acceptance zone whose diagonal is 41 percent larger than its side, so identical parts pass or fail depending on which way the error happens to point. Position tolerance replaces that with a round zone matched to the actual assembly condition, and adds the ability to gain tolerance when features are made away from their worst case.

This chapter covers what each control class costs, what a competent shop can actually hold, how to build a datum reference frame that constrains the right degrees of freedom, and how maximum material condition generates bonus tolerance. It also explains why over-tolerancing is consistently the single largest avoidable cost on machined parts.

## Technical Explanation

### General tolerances and why they belong on every drawing

ISO 2768 provides default limits for dimensions carrying no individual tolerance. Class m (medium) is the normal choice for machined parts; class f (fine) suits precision work; class c (coarse) suits weldments and rough castings. The linear table is size-banded: for class m, 6 to 30 mm carries ±0.2 mm, 30 to 120 mm carries ±0.3 mm, and 120 to 400 mm carries ±0.5 mm. Part 2 of the standard adds general geometric tolerances for straightness, flatness, perpendicularity, symmetry and runout under classes H, K and L.

Specifying the general class costs nothing and removes ambiguity from perhaps 90 percent of the dimensions on a typical drawing. Without it, the supplier applies their internal default, which may be tighter or looser than intended.

### The four control types

Size controls a two-point local measurement. Form controls the shape of a single feature and needs no datum: flatness, straightness, circularity, cylindricity. Orientation controls the angular relationship to a datum: perpendicularity, parallelism, angularity. Location controls where a feature sits within a datum reference frame: position, concentricity, symmetry, and profile of a surface. Profile is the most versatile control because it simultaneously bounds size, form, orientation and location within a single zone.

### Datum reference frames and degrees of freedom

A rigid body has six degrees of freedom: three translations and three rotations. A complete datum reference frame constrains all six. The classical arrangement mirrors the 3-2-1 locating principle: a primary planar datum removes one translation and two rotations, a secondary datum removes one translation and one rotation, and a tertiary datum removes the last translation.

Order matters. Listing datums as A|B|C rather than B|A|C changes which surface the part sits on during inspection and can change the measured result on the same physical part. Datums should be chosen to reflect how the part is located in the assembly, not which surface is convenient to machine.

### Material condition modifiers and bonus tolerance

Applied at maximum material condition, a position tolerance grows as the feature departs from its worst-case size:

```
Bonus tolerance = | actual mating size − MMC size |
Total positional tolerance = stated tolerance + bonus
```

A 10.0-10.2 mm clearance hole with position 0.2 mm at MMC has an MMC size of 10.0 mm. Produced at 10.15 mm, it gains 0.15 mm of bonus, giving 0.35 mm total. This is not a loophole: a larger clearance hole genuinely tolerates more positional error while still assembling. MMC also permits functional gauging, which is far cheaper per part than CMM measurement at production volumes. Use MMC on clearance holes and pilot features; do not use it where the fit is an interference or a seal.

### Specifying a part in the right order

1. Identify the mating interfaces and how the part is located in the assembly.
2. Assign datum features to those interfaces, in order of functional importance.
3. Apply the general tolerance class covering everything non-critical.
4. Add size limits only where a fit is defined, using ISO 286 codes such as H7 or g6.
5. Add geometric controls only where the general geometric class is insufficient.
6. Apply MMC to clearance features that assemble on a bolt pattern.
7. Run a worst-case or statistical stack-up on the assembly to confirm the set closes.
8. Review every remaining tight callout and ask what physically fails if it is loosened.

## Engineering Parameters

| Tolerance class | Typical limit | Process needed | Relative cost | Typical use |
|---|---|---|---|---|
| ISO 2768-c | ±0.5 to ±1.2 mm | As-cast, sawn, rough milled | 1.0 | Non-functional surfaces |
| ISO 2768-m | ±0.1 to ±0.5 mm | Standard CNC, single pass | 1.0-1.1 | Drawing default for machined parts |
| ISO 2768-f | ±0.05 to ±0.2 mm | Finish pass, controlled tooling | 1.2-1.4 | Precision housings |
| Standard shop | ±0.125 mm (±0.005") | Any competent CNC shop | 1.0 | General machined features |
| Precision | ±0.025 mm (±0.001") | Finish pass, probing, stable temperature | 1.5-2.5 | Bearing seats, pilots |
| Tight | ±0.0125 mm (±0.0005") | Grinding, honing, climate control | 3-6 | Hydraulic bores, gauge features |

| Hole production method | Achievable tolerance | ISO grade | Typical Ra | Notes |
|---|---|---|---|---|
| Twist drill, as-drilled | +0.1 to +0.3 mm | IT11-IT13 | 3.2-6.3 µm | Oversize and prone to wander |
| Drill then ream | ±0.013 to ±0.025 mm | IT7-IT8 | 0.8-1.6 µm | Follows the pilot hole axis |
| Bored on a lathe or mill | ±0.010 to ±0.020 mm | IT6-IT7 | 0.4-1.6 µm | Corrects axis location, H7 routine |
| Ground or honed | ±0.005 mm | IT5-IT6 | 0.1-0.4 µm | Separate operation and fixture |
| Flatness, milled face | 0.05-0.15 mm per 100 mm | — | 1.6-3.2 µm | Depends on clamping and stress |
| Flatness, ground face | 0.005-0.020 mm per 100 mm | — | 0.2-0.4 µm | Requires stress-relieved stock |

These bands assume a stable workpiece and a single setup. Anything measured across two setups inherits relocation error, commonly 0.02-0.05 mm, which must be added to the machine capability before comparing against the callout. Large parts add thermal effects: aluminium expands about 23 µm per metre per °C, so a 500 mm part measured at 28 °C and assembled at 20 °C differs by roughly 0.09 mm. Capability is normally demonstrated with Cpk, where Cpk = min[(USL − µ)/3σ, (µ − LSL)/3σ], and automotive programmes typically require Cpk ≥ 1.33 on designated special characteristics.

## Manufacturing Considerations

- **Tolerance only what carries load, seals, aligns or assembles.** Everything else belongs under the general class.
- **Match the tolerance to the process that will produce the feature.** Asking for ±0.01 mm on a drilled hole guarantees a reaming operation that nobody quoted.
- **Wall thickness tolerances stack.** Toleranced from opposite faces, two ±0.1 mm dimensions give ±0.2 mm on the wall between them. Dimension the wall directly if it matters.
- **Avoid concentricity and symmetry callouts.** Both require deriving median points and are slow to verify. Position or runout gives equivalent functional control at a fraction of the inspection cost.
- **Runout is cheap on turned parts** because it is measured with an indicator on centres, no CMM required.
- **Datum features must be real and accessible.** A datum on a surface that is clamped, coated or painted after machining cannot be verified at final inspection.
- **Declare the inspection temperature** for parts above roughly 300 mm in aluminium, or expect disputes over conforming parts.

## Common Mistakes

- **Mistake:** Applying a uniform tight tolerance to every dimension. — **Why it fails:** It forces precision process control on hundreds of features that never interact with anything, multiplying cost with no functional gain. — **Fix:** Use the general tolerance class as the baseline and justify each exception.
- **Mistake:** Using coordinate tolerances on bolt hole patterns. — **Why it fails:** The square zone rejects conforming parts along the axes and accepts non-conforming ones on the diagonal. — **Fix:** Use position tolerance at MMC referenced to a proper datum frame.
- **Mistake:** Omitting the datum reference frame from an orientation or location callout. — **Why it fails:** The control is meaningless without a reference, so the inspector guesses. — **Fix:** Every orientation and location control needs at least a primary datum.
- **Mistake:** Choosing datums for machining convenience. — **Why it fails:** The part is inspected relative to features that do not control the assembly fit, so conforming parts still fail to assemble. — **Fix:** Derive datums from the mating interfaces.
- **Mistake:** Calling out flatness tighter than the size tolerance that contains it. — **Why it fails:** The form control is already limited by the size envelope, so the extra callout adds inspection but no control. — **Fix:** Only refine form where the envelope is genuinely insufficient.
- **Mistake:** Specifying H7 on a hole that only needs clearance. — **Why it fails:** H7 mandates reaming or boring on a feature a drill could have produced. — **Fix:** Use a nominal clearance size with the general tolerance class.
- **Mistake:** Ignoring the setup boundary when relating features. — **Why it fails:** A 0.02 mm position callout between features cut in different orientations exceeds normal relocation capability. — **Fix:** Group tightly related features into one setup or move to 5-axis.
- **Mistake:** Applying MMC to a press fit or a seal diameter. — **Why it fails:** Bonus tolerance assumes clearance improves with size, which is false for interference fits and static seals. — **Fix:** Use regardless of feature size on those features.

## Related Articles

- [CNC Machining Fundamentals: Processes, Axes and Control]({{< relref "cnc-machining-fundamentals.md" >}})
- [CNC Machining DFM: Design Rules That Cut Cost]({{< relref "cnc-dfm-cost-reduction.md" >}})
- [CNC Surface Finish: Ra Values, Processes and Costs]({{< relref "surface-finish-guide.md" >}})
- [Inspection and Acceptance Criteria for Production Parts]({{< relref "../supplier-selection/inspection-and-acceptance-criteria.md" >}})
- [APQP and PPAP: Automotive Part Approval Process Guide]({{< relref "../automotive/apqp-and-ppap.md" >}})

## References

1. **ISO 2768-1 and ISO 2768-2 — General tolerances for linear and angular dimensions and for geometrical features** — the default tolerance classes referenced on most metric drawings. https://www.iso.org
2. **ISO 1101 — Geometrical product specifications, geometrical tolerancing** — the international definition of form, orientation, location and run-out controls.
3. **ASME Y14.5 — Dimensioning and Tolerancing** — the North American GD&T standard covering datum reference frames, material condition modifiers and bonus tolerance.
4. **ISO 286-1 and ISO 286-2 — ISO code system for tolerances on linear sizes** — the source of IT grades and shaft and hole fit designations such as H7 and g6.
5. **AIAG Statistical Process Control (SPC) Reference Manual** — definitions of Cp, Cpk and Ppk used in automotive capability reporting. https://www.aiag.org
6. **Geometric Dimensioning and Tolerancing for Mechanical Design, Gene Cogorno** — practical worked examples of datum selection and tolerance stack-up.
