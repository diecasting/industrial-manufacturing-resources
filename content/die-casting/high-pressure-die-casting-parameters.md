---
date: 2026-08-06
title: "High Pressure Die Casting Parameters: HPDC Process Control"
description: "A parameter-level guide to HPDC process control: shot profile, gate velocity, fill time, intensification, die temperature, clamp force and process windows."
keywords: ["HPDC parameters", "die casting process control", "gate velocity", "intensification pressure", "PQ2 diagram", "fill time calculation"]
category: "die-casting"
reading_time: "10 min"
last_updated: "2026-08-06"
---

# High Pressure Die Casting Parameters: HPDC Process Control

## Introduction
A high pressure die casting machine exposes perhaps forty adjustable settings, but only a handful of them determine whether a casting is sound. The rest are consequences. Process control in HPDC is largely the discipline of identifying which few variables are causal, expressing them as metal-side quantities rather than machine-side ones, and then holding them inside a window that has been demonstrated to produce conforming parts.


The sections below separate machine parameters from metal parameters, show how the two are linked through the PQ² relationship, give defensible target ranges and control bands, and describe what a usable HPDC process window looks like in practice. Readers should come away able to interrogate a supplier's process sheet rather than accept it.
## Technical Explanation

### Machine-side and metal-side parameters

Every parameter belongs to one of three layers.

**Machine parameters** are what the operator types: hydraulic accumulator pressure, plunger position setpoints, velocity stages, valve timings, die temperature controller setpoints, spray duration. These are convenient but not transferable — the same numbers on a different machine give a different casting.

**Metal parameters** are what the alloy actually experiences: gate velocity, cavity fill time, metal pressure during intensification, metal temperature at the gate, die surface temperature at the instant of fill. These are transferable and are what a process design should specify.

**Part outcomes** — porosity level, dimensional conformance, surface class, leak rate — are what the customer buys. Control is the act of holding metal parameters constant by adjusting machine parameters when equipment state changes.

The translation between the first two layers involves geometry. Metal pressure is not hydraulic pressure:

```
P_metal = P_hydraulic × (A_cylinder / A_plunger)
```

A machine at 16 MPa hydraulic with a 200 mm injection cylinder and a 90 mm plunger tip multiplies pressure by (200/90)² ≈ 4.94, giving about 79 MPa on the metal. Change the tip diameter to 100 mm on the same die and metal pressure drops to about 64 MPa with no change to the operator's setpoint.

### The PQ² relationship

The machine can deliver a range of flow rates, but pressure and flow trade off against each other. Hydraulic machine capability is well approximated by:

```
P_machine = P_max × [1 − (Q / Q_max)²]
```

The die presents the opposite behaviour. Flow through the runner and gate is resisted by friction and by the sudden contraction at the gate, so the pressure required rises with the square of flow:

```
P_die = k_die × Q²
```

Plotting both against Q gives a machine line falling from left to right and a die line rising. Their intersection is the operating point — the flow rate that machine and die will actually settle at. The practical use of this is diagnostic: if the required fill time demands a flow rate to the right of the intersection, the machine cannot deliver it, and the answer is either a larger gate, a larger machine, or a longer fill time with the thermal consequences that implies.

### Fill time and the thermal criterion

Fill time is not a free choice. It is bounded below by the machine and above by heat loss. The metal front must still be able to flow when it reaches the last point in the cavity, which means its solid fraction must remain below roughly 20–30 %. NADCA's empirical fill-time relationship expresses this:

```
t = k × T × [ (T_i − T_f) + S × Z ] / (T_f − T_d)
```

where `T` is nominal wall thickness, `T_i` the metal temperature entering the cavity, `T_f` the minimum flow temperature, `T_d` the die surface temperature at the start of injection, `S` the allowable percentage solids at the end of fill, and `Z` an alloy-specific solidification factor. `k` is an empirical constant reflecting die material and heat transfer.

Read the structure rather than the constants. Fill time scales linearly with wall thickness — halve the wall and you halve the time available. It rises as die temperature rises toward the flow temperature, which is why hot dies are a legitimate tool for filling thin sections. And it is insensitive to machine size, which is why buying a bigger machine does not fix a misrun.

### The intensification window

Once the cavity is full, the plunger nearly stops and the system switches to intensification. Hydraulic pressure is multiplied and applied through the biscuit and runner to the still-liquid interior of the casting. The useful work happens only while a liquid path from biscuit to hot spot remains open.

Three timing quantities matter. **Rise time** is how long the intensifier takes to reach full pressure, typically 10–50 ms; a slow intensifier on a thin-wall part arrives after the gate has frozen and contributes nothing. **Gate freeze time** depends on gate thickness and die temperature and is often only 30–80 ms on thin gates. **Hold time** must exceed the solidification time of the thickest section being fed.

The sequence during the shot is therefore:

1. Slow shot moves metal to the gate without folding air into it.
2. Fast shot fills the cavity in 20–100 ms.
3. The pressure spike at end of fill is damped by the braking circuit to limit flash.
4. Intensification rises to 40–100 MPa within tens of milliseconds.
5. Pressure is held until gate freeze, after which it is released and the die opens on its cooling timer.

### Process capability and drift

Recorded shot traces — plunger position, velocity and hydraulic pressure against time — are the primary control record. Useful derived features include actual fast-shot velocity, actual changeover position, biscuit thickness, peak impact pressure and intensification rise time. Setting statistical control limits on those derived features detects accumulator nitrogen loss, valve wear and tip wear well before parts fail inspection. Cavity pressure sensors give a more direct signal but require die modification and survive a limited number of shots.

## Engineering Parameters

| Parameter | Typical Range | Units | Notes / Driver |
|---|---|---|---|
| Slow shot velocity | 0.15–0.5 | m/s | Set from sleeve diameter and fill ratio to avoid wave breaking |
| Changeover position | Gate ± 10–30 | mm of stroke | Late changeover entrains air; early changeover wastes fill time |
| Fast shot (plunger) velocity | 2–6 | m/s | Derived from required gate velocity and gate area |
| Gate velocity, aluminum | 30–60 | m/s | 40–50 m/s is the usual working target |
| Gate velocity, magnesium | 40–90 | m/s | Lower density permits higher velocity before erosion |
| Cavity fill time | 20–100 | ms | 20–40 ms below 2 mm wall; 60–100 ms above 3 mm |
| Intensification pressure (metal) | 40–100 | MPa | 400–1,000 bar; upper band for pressure-tight and structural parts |
| Intensification rise time | 10–50 | ms | Must complete before gate freeze |
| Hydraulic accumulator pressure | 12–20 | MPa | Machine-side; translate to metal pressure before comparing suppliers |
| Plunger tip diameter | 50–150 | mm | Sets both pressure multiplication and sleeve fill ratio |
| Shot sleeve fill ratio | 30–60 | % | Below 30 % the free surface is uncontrollable |
| Biscuit thickness | 15–30 | mm | Thin biscuits freeze and block the intensification path |
| Metal temperature at ladle | 640–700 | °C | Aluminum; measure at the ladle, not the furnace bath |
| Die surface temperature | 180–250 | °C | Aluminum; 200–280 °C for magnesium |
| Clamp force utilisation | 60–85 | % of rating | Below 60 % suggests the wrong machine; above 85 % risks flash |
| Cycle time | 30–90 | s | Solidification-dominated above 3 mm wall |

Clamp force is the sizing calculation that most often decides which cell a job runs on:

```
F_clamp ≥ A_projected × P_intensification × SF        (SF = 1.2–1.5)
```

`A_projected` is the full shadow of casting, runner, biscuit and overflows on the parting plane, not just the part. Slides that generate a wedge reaction add to the requirement.

Ranges move with alloy and geometry. Zinc runs cooler at every stage, with die temperature near 150–200 °C and lower intensification. Large structural aluminum castings deliberately reduce gate velocity toward 25–35 m/s to limit air entrainment, accepting longer fill times and compensating with vacuum and higher die temperature. Thin heat-sink geometry pushes in the opposite direction, toward maximum die temperature and the shortest fill the machine can produce.


- **Specify metal parameters in the control plan, not machine setpoints.** A control plan that lists "injection pressure 15 MPa" is unauditable across machines; "gate velocity 45 ± 5 m/s, metal pressure 70 MPa minimum" is.
- **Plunger tip wear is a silent process shift.** As the tip wears, blow-by increases, effective intensification drops and biscuit thickness drifts. Track tip life in shots and change on a schedule.
- **Accumulator condition governs fast shot.** Nitrogen pre-charge falls slowly. A machine that met its velocity target at installation may miss it by 20 % two years later with no alarm raised.
- **Die temperature must be measured, not assumed.** Controller setpoint is water or oil temperature, not die surface temperature. Thermocouples 3–5 mm behind the cavity surface, or a thermal camera reading immediately after ejection, give the real number.
- **First-article process windows should be mapped, not found.** A short designed experiment across fill time and intensification pressure at production intent identifies the edges of the window and is far more valuable at PPAP than a single capable run at one setting.
- **Capability targets.** Automotive programmes generally expect Cpk ≥ 1.33 on designated significant characteristics, with 1.67 during initial qualification. Dimensional capability in HPDC is usually limited by die thermal state rather than by machine repeatability.
- **Traceability.** Recording shot number, die temperature, alloy heat and machine ID against each part allows containment to be scoped to hours rather than to a whole shipment when a defect escapes.


## Manufacturing Considerations
## Common Mistakes
- **Mistake:** Comparing two suppliers on quoted injection pressure — **Why it fails:** hydraulic pressure without cylinder and plunger diameters says nothing about the pressure on the metal — **Fix:** ask for the intensification pressure on the metal in MPa and the tip diameter used.
- **Mistake:** Increasing fast shot velocity to cure a misrun — **Why it fails:** misrun is usually a thermal problem; more velocity adds air entrainment and gate erosion while the last-fill region still freezes short — **Fix:** raise die temperature and metal temperature, or shorten the flow path with a second gate.
- **Mistake:** Setting changeover by trial without knowing metal front position — **Why it fails:** if the plunger accelerates while the runner is still part empty, the fast shot atomises the front and injects a foam — **Fix:** calculate the position at which metal reaches the gate from sleeve geometry and fill ratio, then confirm on short shots.

## Related Articles

- [Die Casting Shot Profile and Intensification Pressure]({{< relref "shot-profile-and-intensification.md" >}})
- [Die Casting Gating and Runner Design Fundamentals]({{< relref "gating-and-runner-design.md" >}})
- [Die Thermal Management: Cooling Lines and Die Temperature]({{< relref "die-thermal-management.md" >}})
- [Die Casting Porosity: Causes, Detection and Prevention]({{< relref "die-casting-porosity-prevention.md" >}})
- [APQP and PPAP: Automotive Part Approval Process Guide]({{< relref "../automotive/apqp-and-ppap.md" >}})

## References

1. **NADCA Product Specification Standards for Die Castings** — Source of the empirical fill-time relationship, gate velocity guidance and process capability recommendations used across the industry. https://www.nadca.com
2. **E. J. Vinarcik, "High Integrity Die Casting Processes" (Wiley)** — Detailed treatment of shot control, vacuum and squeeze casting variants with process parameter discussion.
3. **W. G. Andresen, "Die Cast Engineering: A Hydraulic, Thermal and Mechanical Process"** — Explains PQ² analysis, pressure multiplication and machine selection from first principles.
4. **ASM International, ASM Handbook Volume 15: Casting** — Fundamentals of mould filling, solidification kinetics and defect formation in pressure die casting. https://www.asminternational.org
5. **AIAG Statistical Process Control (SPC) Reference Manual** — Defines the Cp, Cpk and Ppk methodology applied to die casting significant characteristics. https://www.aiag.org
6. **DieCastor** — Technical resource covering die casting machine configuration, shot parameter setup and production process monitoring. https://www.diecastor.com
