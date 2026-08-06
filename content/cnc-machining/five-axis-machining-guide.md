---
date: 2026-08-06
title: "5-Axis CNC Machining: Kinematics, Uses and Trade-offs"
description: "5-axis CNC machining explained: machine kinematics, 3+2 positional versus simultaneous milling, RTCP compensation, setup reduction and programming risk."
keywords: ["5-axis machining", "3+2 machining", "rtcp", "trunnion table", "machine kinematics", "simultaneous milling"]
category: "cnc-machining"
reading_time: "9 min"
last_updated: "2026-08-06"
---

# 5-Axis CNC Machining: Kinematics, Uses and Trade-offs

## Introduction

Adding two rotary axes to a machining centre changes what is reachable, not what is inherently accurate. That distinction is the source of most disappointment with 5-axis investment. Buyers expect tighter parts and instead get the same tolerances from fewer setups, which is a genuine benefit but a different one. The tolerance improvement, where it appears, comes from eliminating relocation error between setups rather than from the machine being more precise.

The real advantages are concrete. Features on five faces of a prismatic part can be cut in one clamping, so every dimension shares a single datum origin. Tools can be tilted to reach undercuts and steep walls with short, rigid holders instead of long overhangs. On sculpted surfaces, tilting a ball nose cutter away from its dead centre restores cutting speed at the contact point and improves both finish and tool life. Cycle times fall because air moves and tool changes are shared across what used to be several operations.

The costs are equally concrete: higher machine price, more demanding programming, a post-processor that must be validated rather than assumed, collision risk in a much larger motion envelope, and a calibration regime that most 3-axis shops have never needed. This chapter explains the kinematic configurations, the difference between positional and simultaneous work, how RTCP compensation functions, and where 5-axis genuinely pays.

## Technical Explanation

### What the rotary axes do

A 3-axis machine can position a tool anywhere in a working volume but always with the tool axis parallel to Z. Two rotary axes add orientation, so the tool axis can point along any vector within the machine's angular travel. That gives five degrees of freedom out of the six a rigid body has; the missing one, rotation about the tool axis, does not matter for a rotationally symmetric cutter.

### Kinematic configurations

Three arrangements dominate, and each has a different character.

Table-table machines place both rotaries on the workpiece side, typically a trunnion carrying an A axis with a C-axis rotary table mounted on it. The spindle stays vertical and rigid. This is the most common configuration for small to medium parts, offers excellent stiffness, and is the easiest to program. Its limit is part size and mass, since the whole workpiece plus fixture swings.

Head-head machines put both rotaries in the spindle head, usually a B and C combination on a gantry or bridge. The workpiece stays stationary, so very large and heavy parts can be machined. The trade-off is a less rigid spindle carrier and lower usable torque.

Head-table machines split the difference, with one rotary in the head (commonly B) and one in the table (C). This suits medium parts, keeps swing mass moderate, and is widespread on horizontal 5-axis machines.

### Positional (3+2) versus simultaneous

In 3+2 machining, the rotaries index to an orientation, clamp, and the part is then cut with conventional 3-axis motion in that tilted frame. The rotary brakes carry the cutting load, so rigidity is close to a 3-axis machine. Programming is straightforward, most existing toolpath strategies apply, and the benefit is access and setup reduction. The great majority of production 5-axis work is 3+2.

In simultaneous 5-axis machining, all five axes interpolate together. This is required for genuinely sculpted surfaces such as impellers, blisks, turbine blades and complex mould cores, and for swarf cutting with the side of a tapered tool. Rotary axes must move under load with brakes released, so stiffness is lower, feed rates are limited by rotary dynamics, and small linear moves near a rotary centre can demand very high rotary velocity.

### RTCP and why it matters

Rotating a part or a head moves the tool tip away from the programmed point unless the control compensates. Rotary Tool Centre Point management, also called TCPM or tool centre point control, makes the control solve the machine's kinematic chain in real time so the programmed coordinates always refer to the tool tip in workpiece coordinates.

With RTCP active, the operator can change tool length or adjust the work offset without reposting the program. Without it, the CAM system must bake machine-specific kinematics and tool length into the output, and any tool length change invalidates the file. This is why the kinematic model stored in the control and the post-processor must agree exactly.

### Error sources and calibration

A 5-axis machine has all the error terms of a 3-axis machine plus rotary axis location errors: the offset of each rotary centreline from the nominal position, squareness between rotary and linear axes, and axis-of-rotation tilt. These couple with the tool and part position, so an error of 0.02 mm in the trunnion centreline can produce a much larger deviation at the tool tip when the table is at 90 degrees.

Calibration typically follows this sequence:

1. Verify linear axis positioning and squareness with laser interferometry per ISO 230-2.
2. Run a ballbar test in the three principal planes to confirm servo matching and backlash.
3. Measure rotary axis location errors using a probe and a calibrated sphere, following the ISO 10791-6 test methods.
4. Load the resulting kinematic offsets into the control's machine model.
5. Re-run the sphere test to confirm the residual error at multiple rotary positions.
6. Cut and inspect a standard test artefact such as a cone frustum or the NAS 979 circle-diamond-square.
7. Repeat periodically, and always after a crash.

## Engineering Parameters

| Attribute | Table-table (trunnion) | Head-head (gantry) | Head-table | Notes / Driver |
|---|---|---|---|---|
| Typical part envelope | 200-800 mm | 1,000-6,000 mm | 400-1,500 mm | Swing mass limits trunnion size |
| Typical payload | 100-1,000 kg | Effectively unlimited | 300-3,000 kg | Includes fixture mass |
| Relative rigidity | High | Moderate | Moderate to high | Affects achievable a_p in steel |
| A/B rotary travel | −30 to +120° typical | ±100 to ±120° | ±100° | Determines undercut access |
| C rotary travel | 360° continuous | 360° continuous | 360° continuous | Continuous rotation needed for turning cycles |
| Rotary positioning accuracy | 4-10 arc sec | 6-15 arc sec | 5-12 arc sec | Couples with radius to tool tip |
| Rotary indexing repeatability | 2-6 arc sec | 4-10 arc sec | 3-8 arc sec | Dominates 3+2 feature-to-feature error |
| Rotary rapid speed | 25-100 rpm | 15-50 rpm | 20-80 rpm | Limits simultaneous feed near centres |
| Typical setup reduction | 3-4 setups to 1 | 2-3 to 1 | 3 to 1 | The main economic justification |
| Relative machine cost | 1.8-3× a 3-axis VMC | 4-10× | 2.5-5× | Before tooling and CAM licences |

Angular error translates into linear error through the distance from the rotary centreline to the tool tip. At 300 mm, 10 arc seconds is about 0.015 mm; at 800 mm the same angular error gives roughly 0.039 mm. Tall fixtures therefore amplify rotary error, which argues for keeping the part close to the trunnion centre. Tilting also restores cutting speed on ball nose finishing: at the exact tool centre, surface speed is zero and the tool burnishes rather than cuts, so a lead or tilt angle of 10-15 degrees is standard practice and typically improves both finish and tool life substantially.

## Manufacturing Considerations

- **Setup reduction is the primary payback.** Each eliminated setup removes fixturing, datum establishment, program proving and a relocation tolerance stack of 0.02-0.05 mm.
- **Shorter tools follow from tilting.** Reaching a deep feature at an angle often allows a stub tool where a 3-axis approach needed five diameters of overhang, and stiffness scales with the cube of the length ratio.
- **Simulation is mandatory, not optional.** A full machine model including trunnion, fixture, clamps and holder should be verified against the posted G-code, not the neutral toolpath.
- **Post-processor validation is a project.** Kinematic offsets, rotary limits, shortest-angular-path handling and singularity behaviour must all be tested on cuts in soft material before production.
- **Singularities cause surprises.** When the tool axis aligns with the C-axis centreline, the C position becomes indeterminate and the control can command a violent rotation. Good CAM output avoids passing exactly through that point.
- **Probing is more valuable here.** With one setup carrying all features, an in-cycle probe both establishes the datum and verifies critical results before the part leaves the machine.
- **Volume break-point.** 5-axis usually wins below a few hundred parts because setup cost dominates, and again at any volume for genuinely sculpted geometry. In the middle, dedicated fixtures on 3-axis machines can be cheaper per piece.
- **Operator skill is the scarce resource.** The machine is rarely the constraint; experienced programmers and setters are.

## Common Mistakes

- **Mistake:** Buying 5-axis capability to achieve tighter tolerances. — **Why it fails:** Extra rotary joints add error sources rather than removing them; the gain is from fewer setups. — **Fix:** Justify the purchase on setup elimination and access, then invest in calibration to protect accuracy.
- **Mistake:** Programming simultaneous 5-axis where 3+2 would do. — **Why it fails:** Rotary axes cut with brakes released, so rigidity, feed and finish all suffer for no functional benefit. — **Fix:** Reserve simultaneous motion for surfaces that genuinely require a continuously changing tool vector.
- **Mistake:** Assuming a generic post-processor is safe. — **Why it fails:** Rotary sign conventions, limits and pivot distances vary by builder, and a wrong offset drives the tool into the fixture. — **Fix:** Commission the post with dry runs and soft-material cuts at every rotary extreme.
- **Mistake:** Mounting the part on a tall riser to gain clearance. — **Why it fails:** Distance from the rotary centreline amplifies angular error and reduces stiffness. — **Fix:** Keep the workpiece close to the trunnion centre and gain clearance by tool selection.
- **Mistake:** Skipping rotary calibration after a collision. — **Why it fails:** A crash shifts rotary centrelines by amounts that pass unnoticed in 3-axis work but wreck 3+2 feature alignment. — **Fix:** Re-run the sphere probing routine and reload kinematic offsets.
- **Mistake:** Finishing with a ball nose cutter perpendicular to the surface. — **Why it fails:** Surface speed at the tool centre is zero, so the tip rubs, generates heat and leaves a poor finish. — **Fix:** Apply a 10-15 degree lead or tilt angle.
- **Mistake:** Ignoring rotary axis feed limits in simultaneous paths. — **Why it fails:** A short linear move near the rotary centre can demand rotary speeds the machine cannot deliver, so the control slows the whole move and the surface shows a witness mark. — **Fix:** Reposition the part away from the rotary centre or limit angular change rate in CAM.
- **Mistake:** Retaining a separate inspection fixture that uses different datums. — **Why it fails:** Single-setup machining accuracy is lost if inspection re-establishes the frame differently. — **Fix:** Inspect against the same datum reference frame the program used.

## Related Articles

- [CNC Machining Fundamentals: Processes, Axes and Control]({{< relref "cnc-machining-fundamentals.md" >}})
- [Workholding and Fixture Design for CNC Machining]({{< relref "workholding-and-fixture-design.md" >}})
- [CNC Machining DFM: Design Rules That Cut Cost]({{< relref "cnc-dfm-cost-reduction.md" >}})
- [CNC Tolerances and GD&T: Practical Specification Guide]({{< relref "tolerances-and-gdt.md" >}})
- [Die Casting Die Design: Structure, Slides and Ejection]({{< relref "../tooling/die-casting-die-design.md" >}})

## References

1. **ISO 230-1 and ISO 230-2 — Test code for machine tools: geometric accuracy and positioning accuracy** — the basis for linear axis verification on multi-axis machines. https://www.iso.org
2. **ISO 10791-6 — Test conditions for machining centres: accuracy of feeds, speeds and interpolations** — includes the rotary axis test procedures used for 5-axis kinematic calibration.
3. **ISO 230-4 — Circular tests for numerically controlled machine tools** — defines the ballbar method for servo matching and squareness assessment.
4. **NAS 979 — Uniform Cutting Tests, Aerospace Industries Association** — source of the circle-diamond-square test artefact widely used for 5-axis acceptance.
5. **Machine Tool Metrology, Alan Wilson and Wasim Tahir** — practical treatment of volumetric error, rotary axis errors and compensation.
6. **Manufacturing Automation, Yusuf Altintas, Cambridge University Press** — kinematic modelling, interpolation and dynamics relevant to multi-axis motion.
