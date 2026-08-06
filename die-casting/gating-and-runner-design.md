---
title: "Die Casting Gating and Runner Design Fundamentals"
description: "Gating and runner design for die casting: gate area calculation, gate velocity targets, tapered runners, overflow and vent sizing, PQ2 and fill simulation."
keywords: ["die casting gating", "runner design", "gate area calculation", "overflow design", "die casting venting", "fill simulation"]
category: "die-casting"
reading_time: "10 min"
last_updated: "2026-08-06"
---

# Die Casting Gating and Runner Design Fundamentals

## Introduction
The gating system is the only part of a die that never appears on the customer drawing and yet determines most of what the customer will complain about. Cold shuts, flow lines, entrapped air, gate erosion, soldering, uneven shrinkage and dimensional variation all trace back to how metal was delivered into the cavity. A die with a well-designed runner and a mediocre cooling layout will usually outperform the reverse.


This chapter works through the calculations that size a gate, the geometry rules that keep a runner full and non-turbulent, how gate position dictates the fill pattern, and how overflows and vents complete the system. It assumes the reader already understands basic shot control.
## Technical Explanation

### What the system must achieve

Four requirements, in tension with one another:

1. Pass the cavity volume within the thermally allowable fill time.
2. Keep the metal stream attached and coherent, avoiding jetting and atomisation.
3. Remain molten long enough after cavity fill to transmit intensification pressure.
4. Be removable in a trim operation without damaging the casting.

Requirement 3 is the one most often forgotten. A gate is not merely a nozzle; it is the feeding path during solidification. Sizing it purely for fill velocity produces a gate that freezes in 40 ms and leaves the casting unfed.

### Gate area and gate velocity

The governing relationship is continuity. Volumetric flow rate is cavity volume divided by fill time, and gate area follows from the target velocity:

```
Q = V_cavity / t_fill
A_gate = Q / v_gate = V_cavity / (v_gate × t_fill)
```

A 500 cm³ casting filled in 50 ms requires 10,000 cm³/s. At a 45 m/s gate velocity, gate area is 10,000 / 4,500 ≈ 2.2 cm², or 222 mm². Spread across a 150 mm gate width, that is a gate thickness of about 1.5 mm.

Gate velocity has a working window. Below roughly 20 m/s the front loses coherence in a different way — it advances slowly enough to chill, giving cold shuts and poor surface. Above roughly 70 m/s the jet erodes the die at the gate, accelerates soldering, and atomises the metal into a spray that entrains air even in an evacuated cavity. The usual aluminum target is 40–50 m/s; large structural castings under vacuum run lower, at 25–35 m/s, precisely to reduce entrainment.

Gate thickness relative to wall thickness matters for feeding. A ratio of 0.4–0.8 of the local wall is the normal band. Thin gates trim cleanly but freeze early; thick gates feed well but leave a heavy witness mark and need more trim force.

### Runner geometry

The runner should be treated as a pressurised duct that must stay completely full of liquid metal from the moment fast shot begins.

**Cross-section.** Trapezoidal with a depth-to-width ratio between roughly 1:2 and 1:3, with the deeper section on the side that will be trimmed. Deep, narrow runners lose less heat per unit volume than wide, shallow ones, but wide runners are easier to machine and eject.

**Progressive area reduction.** Total cross-sectional area should decrease steadily from biscuit to gate, commonly by 10–30 % at each stage. A runner whose area increases anywhere creates a low-pressure region where the stream separates from the wall and pulls in air. Metal should accelerate continuously.

**Thickness hierarchy.** Runner thickness should be roughly two to four times the gate thickness so the runner remains liquid after the gate has begun to freeze, preserving the pressure path.

**Direction changes.** Sharp corners cause separation, cavitation and steel erosion. Use tangential transitions with generous radii — a change of direction should be made with an arc whose radius is at least 1.5 times the runner depth, not with a mitre.

**Branching.** Branches should split at shallow angles and should be balanced in both area and length so that all gates begin flowing at the same instant. Unbalanced branches produce sequential filling and a flow front collision inside the cavity.

### Gate position and the fill pattern

Gate position sets everything about how the cavity fills, and it is the most consequential single decision in die layout. Guidelines that hold consistently:

- Direct the incoming stream **along a wall**, not into open space. A jet fired into a void breaks up before it reaches anything, and the resulting droplets oxidise and fold together as laminations.
- Gate at the **thickest section** where possible, so the feeding path connects to the region that solidifies last.
- Aim for a **single coherent front** that sweeps the cavity in one direction and terminates at the overflows. Two fronts meeting mid-cavity produce a cold shut or an oxide-lined weld line.
- Keep the **flow length to wall thickness ratio** within reach: for aluminum, roughly 100:1 to 200:1 depending on die and metal temperature. A 2 mm wall can carry metal 200–400 mm from the gate before it stops flowing.
- Avoid gating directly at a **core pin or slide face**; the concentrated stream erodes it and the resulting washout transfers to every subsequent casting.

### Overflows and vents

Overflows are reservoirs outside the cavity, connected by a thin gate, positioned where the metal front terminates. They do three jobs: they receive the cold, oxidised leading edge of the front so it does not remain in the casting; they act as thermal ballast to keep a locally cold die region warm; and they provide the connection point for vents.

Vents carry gas out. Total vent cross-section must be large enough that air can leave at less than sonic velocity during the fill time, otherwise the cavity pressurises and the last region cannot fill:

```
A_vent ≥ V_cavity / (v_air × t_fill)
```

Since air cannot usefully exceed about 340 m/s, this sets a hard floor. In practice, vent area of 30–50 % of gate area is a reasonable starting point for non-vacuum dies. Vent land thickness runs 0.1–0.4 mm, thin enough that metal freezes before it travels far, and vents terminate in a chill block or vacuum valve.

## Engineering Parameters

| Parameter | Typical Range | Units | Notes / Driver |
|---|---|---|---|
| Gate velocity, aluminum | 30–60 | m/s | 40–50 m/s standard; 25–35 m/s for vacuum structural |
| Gate velocity, magnesium | 40–90 | m/s | Lower density tolerates higher velocity |
| Gate velocity, zinc | 25–50 | m/s | Lower melting point, lower erosion tolerance |
| Gate thickness, aluminum | 0.8–2.5 | mm | 0.4–0.8 × local wall thickness |
| Gate land length | 1.5–3.0 | mm | Short land reduces pressure drop and eases trimming |
| Runner depth to width ratio | 1:2–1:3 | ratio | Trapezoidal section, deeper side toward the ejector half |
| Runner to gate thickness ratio | 2:1–4:1 | ratio | Keeps the feeding path open after gate freeze |
| Runner area reduction per stage | 10–30 | % | Maintains acceleration and keeps the duct full |
| Direction change radius | ≥ 1.5 × runner depth | mm | Prevents separation and steel erosion |
| Fan gate total expansion angle | ≤ 45–60 | degrees | Wider angles cause flow separation at the edges |
| Flow length to wall ratio | 100:1–200:1 | ratio | Aluminum; higher with hot dies and high superheat |
| Overflow volume, thin wall parts | 20–40 | % of casting volume | Captures cold front metal and balances die temperature |
| Overflow gate thickness | 0.6–1.5 | mm | Thin enough to snap off in trim |
| Vent land thickness | 0.1–0.4 | mm | Freezes metal while passing gas |
| Total vent area | 30–50 | % of gate area | Non-vacuum dies; reduced when a vacuum valve is fitted |
| Biscuit thickness | 15–30 | mm | Feeding reservoir and pressure path |

These figures move with process intent. Cosmetic parts and thin heat sinks push toward higher gate velocity, thinner gates and larger overflow volume. Structural castings intended for heat treatment move the other way: lower velocity, thicker gates that stay open for feeding, and vacuum instead of large vent areas. Zinc, filling at lower temperature into a cooler die, tolerates longer flow paths per unit wall thickness than aluminum does.

Casting simulation is the normal way to converge on a layout. Its value lies in comparing candidate gate positions and predicting where fronts will meet and air will be trapped, rather than in producing an exact fill time. Validate the result with short shots: a series of progressively larger partial fills reveals the real front sequence.


- **Trim implications drive gate placement.** A gate on a curved or inclined surface needs a shaped trim punch and often leaves a witness that must be machined. Placing the gate on a flat, accessible edge reduces both trim die cost and secondary work.
- **Yield versus soundness.** Runners and overflows are remelted, but each cycle loses 2–5 % of the returned metal to dross and burn-off. Cutting overflow volume improves apparent yield while degrading casting quality — an easy trade to make badly.
- **Runner layout constrains die size.** A balanced multi-cavity runner increases die base dimensions and therefore machine platen requirement, sometimes pushing a job onto a larger machine and a higher hourly rate.
- **Erosion is a maintenance cost.** Gate inserts should be separate, replaceable pieces in high-volume tooling so a washed-out gate does not require reworking a whole cavity block.
- **Balance is checked by weighing.** On a multi-cavity die, weigh the parts from a short shot. Unequal weights show unbalanced branches long before dimensional or porosity data does.
- **Document the layout as a controlled drawing.** Gate area, runner section areas and overflow volumes should be recorded so that a die repair does not quietly change the fill pattern.


## Manufacturing Considerations
## Common Mistakes
- **Mistake:** Sizing the gate only for fill velocity — **Why it fails:** a thin gate freezes before intensification pressure can feed the casting, producing shrinkage at every thick section — **Fix:** check gate freeze time against the solidification time of the heaviest section fed through it.
- **Mistake:** Increasing runner cross-section somewhere in the middle to "reduce pressure loss" — **Why it fails:** the expansion causes the stream to separate from the wall and aspirate air into the melt — **Fix:** enforce monotonic area reduction from biscuit to gate.

## Related Articles

- [High Pressure Die Casting Parameters: HPDC Process Control](./high-pressure-die-casting-parameters.md)
- [Die Casting Shot Profile and Intensification Pressure](./shot-profile-and-intensification.md)
- [Die Casting Die Design: Structure, Slides and Ejection](../tooling/die-casting-die-design.md)
- [Die Casting Surface Defects: Troubleshooting Guide](./surface-defects-troubleshooting.md)
- [Vacuum Assisted Die Casting: Reducing Gas Porosity](./vacuum-assisted-die-casting.md)

## References

1. **NADCA Gating Manual and Product Specification Standards** — The primary industry source for gate area calculation, fill time relationships and runner proportioning in high pressure die casting. https://www.nadca.com
2. **John Campbell, "Castings" (Butterworth-Heinemann)** — Treatment of surface turbulence, bifilm formation and the consequences of an incoherent metal front, applicable across casting processes.
3. **W. G. Andresen, "Die Cast Engineering: A Hydraulic, Thermal and Mechanical Process"** — Covers PQ² analysis, runner resistance and the interaction between machine capability and die design.
4. **ASM International, ASM Handbook Volume 15: Casting** — Fundamentals of mould filling, flow visualisation and defect formation during rapid cavity filling. https://www.asminternational.org
5. **ASTM B85 / B85M — Standard Specification for Aluminum-Alloy Die Castings** — Provides the alloy property context in which gating decisions on fluidity and freezing range are made. https://www.astm.org
6. **ISO 8062 — Dimensional and geometrical tolerances for moulded parts** — Relevant when assessing how fill pattern and thermal balance affect achievable dimensional grades. https://www.iso.org
