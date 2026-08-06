---
date: 2026-08-06
title: "Low Pressure Die Casting: Process, Applications and Limits"
description: "Low pressure die casting explained: sealed furnace and riser tube mechanics, 0.02-0.1 MPa fill, wheel and cylinder head applications, yield and cycle limits."
keywords: ["low pressure die casting", "LPDC process", "aluminum wheel casting", "riser tube", "permanent mold casting", "A356 T6"]
category: "die-casting"
reading_time: "9 min"
last_updated: "2026-08-06"
---

# Low Pressure Die Casting: Process, Applications and Limits

## Introduction
Low pressure die casting fills a permanent metal mould from below, using a modest gas pressure applied to the surface of a sealed melt bath. Nothing about it resembles the violent, millisecond fill of a high pressure machine. Metal rises up a ceramic or titanium riser tube and enters the cavity at velocities measured in centimetres per second, displacing air ahead of it rather than trapping it.


This article describes how the pressure system actually works, why directional solidification is the organising principle of every low pressure mould, what numbers a process engineer should expect to see, and where the process reaches its limits — because it is not a general replacement for high pressure casting.
## Technical Explanation

### The pressure system

The furnace is a sealed vessel holding molten aluminum. A riser tube, also called a stalk, dips into the melt and connects at its top to the sprue of a mould mounted directly above. When dry air or nitrogen is admitted into the sealed furnace, the pressure differential pushes metal up the tube.

The pressure needed to lift the metal is simply hydrostatic:

```
P = ρ × g × h
```

With liquid aluminum at roughly 2,400 kg/m³ and a lift height of 1.0 m from bath surface to the top of the cavity, P is about 24 kPa, or 0.024 MPa. Add flow losses and the working range across the whole cycle sits between 0.02 and 0.1 MPa. That is two to three orders of magnitude below HPDC intensification pressure, which is the single fact that explains everything else about the process.

Because pressure is applied to the whole bath rather than to a plunger, metal is drawn from below the surface. Dross and oxide floating on the bath never enter the riser tube. This is a genuine metallurgical advantage over gravity pouring, where the pour stream passes through and entrains the surface film.

### The pressure profile in a cycle

1. **Riser fill.** Pressure ramps slowly until metal reaches the top of the stalk and touches the ingate. Ramp rate is deliberately gentle to avoid a surge into the cavity.
2. **Cavity fill.** A second, controlled ramp drives metal into the mould at an ingate velocity of roughly 0.1–0.5 m/s. Fill takes 5–20 s for a wheel.
3. **Pressurisation.** Once full, pressure is raised to the top of the working range and held. This feeds solidification shrinkage from the bath through the still-liquid sprue.
4. **Hold and solidify.** Pressure is maintained while the casting freezes from the rim inward and downward toward the ingate.
5. **Depressurisation.** Furnace pressure is released. Metal still liquid inside the riser tube drains back to the bath.
6. **Mould open and extract.** The casting is removed, the mould is coated where needed, and the cycle repeats.

Step 5 is what makes the yield so good. In gravity or sand casting, the entire feeding system solidifies as scrap. In low pressure, only the small sprue stub remains attached, so casting yield — the ratio of finished casting weight to total metal poured — commonly reaches 85–95 % against 40–70 % for high pressure die casting.

### Directional solidification as a design constraint

Feeding in LPDC travels one path: from the bath, up the stalk, through the sprue, into the casting. For that path to work, the casting must freeze progressively away from the ingate and toward it last. The design rule that follows is a deliberate thermal gradient — thinnest and coldest at the top and outer extremities, thickest and hottest near the ingate.

On a wheel this is visible in the geometry. The rim flange freezes first, then the spokes, then the hub, which sits directly over the sprue. Mould cooling is arranged to reinforce that order: water or air cooling in the rim, heating or insulation near the hub. Get the gradient backwards and an isolated liquid pocket forms, cut off from the bath, and shrinkage porosity appears in exactly the region that carries the highest service stress.

### Moulds, coatings and cores

Moulds are usually H13 or a hot-work steel for high volume, sometimes grey cast iron for lower volume. They run hot — typically 300–450 °C — and are sprayed with a refractory coating that both insulates and controls local heat flux. Coating thickness is a real process variable: a thicker coat in the rim slows freezing there, a thinner coat accelerates it.

Unlike HPDC, low pressure moulds tolerate sand cores. This is the reason cylinder heads with complex water jackets are made this way. Resin-bonded or, increasingly, inorganic-binder cores are set into the mould each cycle and shaken out afterwards.

## Engineering Parameters

| Parameter | Typical Range | Units | Notes / Driver |
|---|---|---|---|
| Furnace pressure, fill stage | 0.02–0.05 | MPa | Set by metallostatic head; 0.2–0.5 bar |
| Furnace pressure, hold stage | 0.05–0.10 | MPa | Feeds shrinkage; upper limit set by mould sealing |
| Pressure ramp rate | 1–10 | kPa/s | Slower for thin sections and long flow paths |
| Ingate velocity | 0.1–0.5 | m/s | Two orders of magnitude below HPDC; keeps the front laminar |
| Cavity fill time | 5–20 | s | Wheel-sized castings; scales with volume |
| Melt temperature | 690–730 | °C | Higher than HPDC because fill is slow and heat loss is larger |
| Mould temperature | 300–450 | °C | Graded deliberately across the casting for directional freezing |
| Cycle time | 3–8 | min | Solidification and hold dominate |
| Casting yield (gross to net) | 85–95 | % | Only the sprue stub is returned |
| Minimum wall thickness | 3–5 | mm | Below 3 mm the front freezes before the cavity fills |
| Typical wall thickness | 4–10 | mm | Wheels and heads sit in this band |
| Linear tolerance | ±0.4–1.0 | mm | Roughly ISO 8062 grade DCTG 7–9 |
| Surface roughness, as cast | 3.2–12.5 | µm Ra | Coating texture transfers to the casting |
| Riser tube life | 1,000–20,000 | cycles | Material dependent; titanium and silicon nitride at the top end |

Mechanical properties are the reason the process is chosen. A356 (AlSi7Mg0.3) cast at low pressure and heat treated to T6 typically reaches 260–300 MPa tensile strength, 200–240 MPa yield and 5–10 % elongation. Conventional A380 HPDC reaches comparable tensile strength but rarely exceeds 3 % elongation and cannot be solution treated at all. For a wheel subjected to rotary bending fatigue and kerb impact, elongation is the property that matters.

Ranges shift with casting size and alloy. A large cylinder head with sand cores runs at the top of the mould temperature band and needs a longer, flatter pressure ramp. Thin-walled decorative castings push fill velocity up and accept a lower yield from additional ingates. Counter-pressure casting, a variant in which both the furnace and the mould chamber are pressurised and the differential drives the fill, allows higher effective feeding pressure and finer structure at the cost of considerable equipment complexity.


- **Heat treatability is the core benefit.** Because gas content is low, T6 solution treatment at 530–540 °C does not blister the casting. If a design does not need heat treatment or weldability, low pressure is probably the wrong process and HPDC will be cheaper per part.
- **Tooling cost sits between sand and HPDC.** A permanent mould set is expensive relative to a sand pattern but cheaper than a comparable HPDC die, because there is no need to withstand 70 MPa or a high-velocity metal stream.
- **Machine tonnage is not the sizing parameter.** There is no clamp force requirement in the HPDC sense; the mould only needs enough closing force to resist a fraction of a bar acting on the projected area plus core reaction. Selection is driven by mould platen size, riser tube length and furnace capacity.
- **Riser tube management is a production discipline.** Coated cast iron tubes are cheap but contaminate the melt with iron over time. Titanium and ceramic tubes cost more and last longer. Tube failure dumps mould contents and is a safety event, so life is tracked in cycles.
- **Melt cleanliness still needs work upstream.** Drawing from below the surface avoids dross but does nothing about dissolved hydrogen. Rotary degassing with argon or nitrogen before transfer, plus a ceramic foam filter in the sprue, are normal.
- **Volume break-points.** Low pressure becomes attractive above roughly 5,000–20,000 parts per year, with multi-station carousels used to overcome the long cycle at high volumes. Wheel plants run large banks of single-mould machines rather than one fast machine.
- **X-ray sampling is expected.** Wheels are typically 100 % or heavily sampled radiographed at the hub and spoke junctions, since those are the shrinkage-prone regions and also the fatigue-critical ones.


## Manufacturing Considerations
## Common Mistakes
- **Mistake:** Specifying a 2.5 mm wall on an LPDC part — **Why it fails:** at ingate velocities below 0.5 m/s the front loses superheat long before it reaches the extremity, producing a misrun — **Fix:** hold 4 mm minimum, or move the feature to a high pressure process.
- **Mistake:** Placing the thickest boss furthest from the ingate — **Why it fails:** the boss becomes an isolated liquid island with no feeding path once the intervening section freezes — **Fix:** re-orient the casting in the mould so that section thickness increases monotonically toward the sprue.
- **Mistake:** Using a uniform mould coating thickness for convenience — **Why it fails:** the coating is a primary control on local heat flux; a uniform coat gives an uncontrolled freezing sequence — **Fix:** define coating thickness by zone in the process sheet and audit it, because it is re-applied by hand.

## Related Articles

- [Die Casting vs Sand Casting vs Gravity Casting Compared]({{< relref "die-casting-vs-sand-vs-gravity-casting.md" >}})
- [Heat Treatment of Aluminum Castings: T5, T6 and T7]({{< relref "../materials/heat-treatment-of-castings.md" >}})
- [Aluminum Die Casting Alloys: A380, ADC12, A356 Compared]({{< relref "../materials/aluminum-die-casting-alloys.md" >}})
- [Die Thermal Management: Cooling Lines and Die Temperature]({{< relref "die-thermal-management.md" >}})
- [Automotive Lightweighting: Materials and Process Strategy]({{< relref "../automotive/automotive-lightweighting.md" >}})

## References

1. **ASTM B108 / B108M — Standard Specification for Aluminum-Alloy Permanent Mold Castings** — Covers chemistry and mechanical property requirements for A356 and related alloys produced in metal moulds. https://www.astm.org
2. **ISO 8062-3 — Geometrical product specifications: Dimensional and geometrical tolerances for moulded parts** — Defines the DCTG casting tolerance grade system used to specify permanent mould castings. https://www.iso.org
3. **EN 1706 — Aluminium and aluminium alloys: Castings, chemical composition and mechanical properties** — European property tables for AlSi7Mg and related low pressure casting alloys.
4. **ASM International, ASM Handbook Volume 15: Casting** — Chapters on permanent mould and low pressure casting practice, directional solidification and riser design. https://www.asminternational.org
5. **American Foundry Society (AFS)** — Technical publications and training on melt treatment, degassing and permanent mould coating practice. https://www.afsinc.org
6. **SAE J175 — Wheels: Impact Test Procedures, Road Vehicles** — Representative of the impact and fatigue qualification requirements that drive integrity targets for cast wheels. https://www.sae.org
