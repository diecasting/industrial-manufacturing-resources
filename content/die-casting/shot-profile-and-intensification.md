---
date: 2026-08-06
title: "Die Casting Shot Profile and Intensification Pressure"
description: "Shot profile design for die casting: slow shot wave control, sleeve fill ratio, changeover point, fast shot velocity, intensification timing and shot traces."
keywords: ["die casting shot profile", "slow shot velocity", "intensification pressure", "shot sleeve fill ratio", "changeover position", "shot curve analysis"]
category: "die-casting"
reading_time: "10 min"
last_updated: "2026-08-06"
---

# Die Casting Shot Profile and Intensification Pressure


## Introduction
Everything a cold chamber die casting machine does to a casting happens inside about one second. The plunger crawls forward, accelerates hard, stops against a full cavity, and then squeezes. Those four events are the shot profile, and the quality of the casting is largely written during them. A die can be perfectly designed and thermally balanced and still produce foam if the slow shot is 0.2 m/s too fast.

This article takes the shot apart stage by stage: the wave mechanics that set slow shot velocity, how to locate the changeover position from geometry rather than by trial, what the impact spike does to the die, and how intensification feeds a solidifying casting. It closes with how to read a shot trace and what to put control limits on.

## Technical Explanation

### Anatomy of a shot

A cold chamber shot has four distinct phases, and each has a different physical objective.

1. **Slow shot.** Move the metal from a partially filled horizontal sleeve to the gate while keeping its free surface intact. Objective: entrain no air.
2. **Fast shot.** Fill the cavity before the metal front loses the ability to flow. Objective: minimum fill time consistent with an attached, coherent front.
3. **Impact and braking.** Decelerate the plunger and the metal column when the cavity is full. Objective: contain the pressure spike so the die does not flash or deflect.
4. **Intensification.** Apply high static pressure through the biscuit into the solidifying casting. Objective: feed shrinkage before the gate freezes.

Confusing phase 2 with phase 4 is the most common conceptual error in the industry. Fill pressure and intensification pressure are different quantities acting at different times for different reasons.

### Wave mechanics in the shot sleeve

A horizontal shot sleeve is typically 30–60 % full of liquid metal lying in the bottom. When the plunger starts to move it pushes a wave ahead of it. What happens next depends on velocity.

Too slow, and the wave runs ahead, reflects off the closed end of the sleeve, travels back, and meets the advancing plunger face — folding the free surface over on itself and enclosing air. Too fast, and the wave overturns immediately, breaking and entraining air in front of the plunger. There is an intermediate velocity at which the wave rises smoothly and the sleeve fills progressively from plunger to gate with the free surface remaining continuous.

The relevant physics is shallow-water wave propagation. A gravity wave on a liquid layer of depth `h` travels at:

```
c = √(g × h)
```

For a 100 mm sleeve at 50 % fill, the mean depth is around 50 mm and `c` is roughly 0.7 m/s. The optimum plunger velocity is a fraction of this and depends on both sleeve diameter and fill fraction; larger diameter and higher fill fraction both raise it. Garber's analysis of air entrapment in the 1980s established the framework still used today, and practical optima across normal sleeve sizes land in the range 0.15–0.5 m/s.

Two refinements matter in production. Fill ratio is calculated from shot weight and sleeve geometry:

```
f = 4 × m / (ρ_liquid × π × D² × L_fill)
```

And because the melt depth increases as the plunger advances and the wave builds, the theoretically correct slow shot is not a constant velocity but a gently rising ramp. Machines with programmable multi-stage slow shot exploit this; a single fixed slow-shot speed is always a compromise between the start and end of the stroke.

### Locating the changeover position

The plunger must reach fast shot velocity by the time metal enters the cavity, and not before the runner is full. Acceleration is not instantaneous — a machine needs roughly 30–80 mm of stroke to reach 4 m/s.

The correct changeover position is calculated, not guessed. Work out the volume of metal remaining between the plunger face and the gate, convert to plunger stroke using the sleeve area, and subtract the acceleration distance. Then verify on the machine with short shots: if the runner shows a rough, foamy surface, changeover was late; if the biscuit is heavy and fill time is longer than calculated, changeover was early and the plunger was fighting an incompletely fed system.

### Fast shot and the impact spike

Gate velocity is a consequence of plunger velocity and the area ratio:

```
v_gate = v_plunger × (A_plunger / A_gate)
```

An 80 mm plunger has an area of about 5,030 mm². Against a 222 mm² gate the ratio is roughly 22.6, so a 2 m/s plunger produces about 45 m/s at the gate. This is why "fast shot velocity" is meaningless without the gate area: the same 2 m/s on a die with twice the gate area gives half the gate velocity.

When the cavity fills, the metal column and the plunger must stop almost instantly. Their kinetic energy converts to a pressure spike that can reach one and a half to three times the static fill pressure for a few milliseconds. That spike is the main cause of flash, die deflection and parting-line wear, and it is also what makes the machine bang. Modern machines fit a braking or deceleration circuit that begins closing the flow valve just before the end of fill, trading a marginally longer fill time for a much lower peak.

### Intensification: what it can and cannot do

After fill, hydraulic pressure is routed through an intensifier — usually a differential piston — that multiplies it. The metal pressure achieved is:

```
P_metal = P_hydraulic × (A_cylinder / A_plunger)
```

That pressure acts on the biscuit and propagates through any still-liquid path into the casting. Three conditions must all hold for it to do useful work:

1. The biscuit must still be liquid at its core. A biscuit below about 15 mm freezes through and blocks the path.
2. The runner and gate must still be liquid. Gate freeze time on a 1.2 mm gate can be as short as 30–50 ms.
3. Intensification must arrive before those freeze. Rise time of 10–50 ms is typical; a worn intensifier circuit can drift well past 60 ms.

If all three hold, intensification collapses gas pores, feeds shrinkage in sections connected to the gate, and improves die contact so heat transfer and surface finish both improve. If any one fails, raising the pressure setpoint changes nothing at all in the casting.

### Reading a shot trace

A trace plots plunger position, velocity and hydraulic pressure against time. Useful derived features:

- Actual slow shot velocity, averaged over the stroke, versus setpoint.
- Changeover position in mm and the acceleration slope after it.
- Peak plunger velocity under load — usually below the dry-shot velocity by 10–25 %.
- Fill time, read as the interval from cavity entry to the velocity collapse.
- Impact peak magnitude and the effectiveness of braking.
- Intensification rise time from 10 % to 90 % of final pressure.
- Final static pressure and biscuit thickness at end of stroke.

Each of these can carry a control limit. Together they detect accumulator nitrogen loss, valve wear, tip wear, blocked vents and a change of alloy temperature long before dimensional or porosity data reacts.

## Engineering Parameters

| Parameter | Typical Range | Units | Notes / Driver |
|---|---|---|---|
| Shot sleeve fill ratio | 30–60 | % | Below 30 % the free surface cannot be controlled |
| Slow shot velocity, constant profile | 0.15–0.5 | m/s | Rises with sleeve diameter and fill ratio |
| Slow shot ramp, staged profile | 0.1 → 0.6 | m/s | Tracks the rising melt depth along the stroke |
| Shallow-water wave speed at 50 % fill, 100 mm sleeve | ~0.7 | m/s | Reference value from √(g·h) |
| Plunger acceleration distance | 30–80 | mm | Machine dependent; must complete before the gate |
| Fast shot plunger velocity | 2–6 | m/s | Set from required gate velocity and area ratio |
| Dry shot velocity | 4–8 | m/s | Unloaded benchmark used for machine health checks |
| Cavity fill time | 20–100 | ms | Read from the trace, not from the setpoint |
| Impact pressure spike | 1.5–3 × | ratio to fill pressure | Cause of flash and parting line wear |
| Braking / deceleration onset | 5–20 | mm before end of fill | Trades a little fill time for much lower peak |
| Intensification pressure on metal | 40–100 | MPa | 400–1,000 bar |
| Intensification rise time | 10–50 | ms | Must beat gate freeze time |
| Gate freeze time, 1.2 mm gate | 30–80 | ms | Falls sharply with thinner gates and cooler dies |
| Hold time under intensification | 2–8 | s | Must exceed solidification of the heaviest fed section |
| Biscuit thickness | 15–30 | mm | Feeding reservoir; also the pressure path |
| Plunger tip to sleeve clearance | 0.05–0.15 | mm | Increases with wear; drives blow-by and pressure loss |

Alloy and geometry shift the whole profile. Magnesium fills and freezes faster, so it needs shorter fill times and proportionally faster intensification. Zinc on a hot chamber machine has no shot sleeve and therefore no slow shot problem at all. Large structural castings run longer fill times under vacuum, but demand a long intensification hold because the sections being fed are heavy.


## Manufacturing Considerations

- **Record the trace with the part.** Shot number and trace archive make containment tractable. Without it, a porosity escape means quarantining everything made that week.
- **Tip wear changes the profile silently.** As clearance grows, blow-by rises, the effective pressure on the metal falls and the biscuit gets thicker. Track tip life in shots and correlate with biscuit measurements.
- **Biscuit thickness is a measurable output.** Measure and log it. It is a direct proxy for shot weight consistency, tip wear and ladle accuracy, and it costs nothing to collect.
- **Set control limits on derived features, not raw setpoints.** The setpoint is what was asked for; the trace feature is what happened.

## Common Mistakes

- **Mistake:** Running the slow shot too fast to chase cycle time — **Why it fails:** the metal wave breaks and entrains air that becomes porosite at the gate — **Fix:** set slow-shot velocity from the shallow-water wave speed for the actual fill ratio, and use a staged ramp on long sleeves.
- **Mistake:** Tuning the fast-shot velocity instead of the gate velocity — **Why it fails:** area ratio between sleeve and gate differs by an order of magnitude, so plunger speed and gate speed are not the same quantity — **Fix:** calculate the required gate velocity first, then derive the plunger velocity from the area ratio.
- **Mistake:** Letting intensification rise time exceed gate freeze — **Why it fails:** the gate solidifies before feeding pressure arrives, so shrink porosity forms in the last-filled sections — **Fix:** keep intensification rise time (10–50 ms) well below the gate freeze time for the thinnest gate in the tool.
- **Mistake:** Braking too early to protect the die — **Why it fails:** an early decel stretches fill time and invites cold shut on the last-fill region — **Fix:** start braking 5–20 mm before end of fill; the small fill-time penalty is far cheaper than a cold shut.
- **Mistake:** Ignoring plunger-tip wear — **Why it fails:** tip-to-sleeve clearance grows, blow-by rises, effective metal pressure falls and the biscuit thickens silently — **Fix:** track tip life in shots and treat biscuit thickness as a process-monitorable output.
- **Mistake:** Setting the hold time from the thinnest section — **Why it fails:** the heaviest fed section freezes last and needs the longest intensification hold; under-holding it leaves shrinkage — **Fix:** base hold time on the solidification of the heaviest fed section, not the gate or the thinnest wall.

## Related Articles

- [High Pressure Die Casting Parameters: HPDC Process Control]({{< relref "high-pressure-die-casting-parameters.md" >}})
- [Die Casting Gating and Runner Design Fundamentals]({{< relref "gating-and-runner-design.md" >}})
- [Die Casting Porosity: Causes, Detection and Prevention]({{< relref "die-casting-porosity-prevention.md" >}})
- [Vacuum Assisted Die Casting: Reducing Gas Porosity]({{< relref "vacuum-assisted-die-casting.md" >}})
- [Die Casting Die Design: Structure, Slides and Ejection]({{< relref "../tooling/die-casting-die-design.md" >}})

## References

1. **NADCA Product Specification Standards and technical publications** — Industry guidance on shot control, sleeve fill ratio and intensification practice for cold chamber machines. https://www.nadca.com
2. **L. W. Garber — Analysis of air entrapment during shot sleeve filling in cold chamber die casting** — The study that established critical slow shot velocity as a function of sleeve diameter and fill fraction; published in Die Casting Engineer.
3. **W. G. Andresen, "Die Cast Engineering: A Hydraulic, Thermal and Mechanical Process"** — Derivation of pressure multiplication, machine hydraulics and shot end behaviour.
4. **E. J. Vinarcik, "High Integrity Die Casting Processes" (Wiley)** — Covers shot profile optimisation and its interaction with vacuum and squeeze techniques.
5. **ASM International, ASM Handbook Volume 15: Casting** — Solidification timing, feeding theory and the effect of applied pressure on cast structure. https://www.asminternational.org
6. **AIAG Statistical Process Control (SPC) Reference Manual** — Framework for applying control limits to derived shot trace features in a production control plan. https://www.aiag.org
