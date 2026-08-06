---
date: 2026-08-06
title: "Die Thermal Management: Cooling Lines and Die Temperature"
description: "Die thermal management for die casting: heat balance, cooling line sizing, jet cooling, temperature control units, spray strategy and heat checking control."
keywords: ["die temperature control", "die casting cooling lines", "die thermal management", "heat checking", "temperature control unit", "die spray"]
category: "die-casting"
reading_time: "10 min"
last_updated: "2026-08-06"
---

# Die Thermal Management: Cooling Lines and Die Temperature

## Introduction
A die casting die is a heat exchanger that happens to have a part-shaped hole in it. Every shot deposits a large quantity of thermal energy into a few hundred kilograms of steel, and every cycle must remove the same quantity again or the die drifts. Where and how fast that energy is removed determines cycle time, dimensional repeatability, where shrinkage porosity forms, whether the casting solders to the steel, and how long the die lasts before heat checking makes its surface unusable.


This chapter builds the heat balance from first principles, sizes cooling circuits using flow and heat transfer criteria rather than habit, explains where jet cooling and high-conductivity inserts belong, and treats die spray as the thermal control element it actually is rather than as a lubrication step.
## Technical Explanation

### The heat balance

The energy delivered per shot is the sum of superheat removal, latent heat of solidification and cooling of the solid to ejection temperature:

```
Q_shot = m × [ c_p,l × (T_pour − T_liq) + L_f + c_p,s × (T_sol − T_eject) ]
```

For aluminum the constants are roughly `c_p,l` = 1.18 kJ/kg·K, `L_f` = 390 kJ/kg and `c_p,s` = 0.96 kJ/kg·K. Take a 3 kg shot poured at 680 °C, freezing near 580 °C and ejected at 400 °C:

- Superheat: 1.18 × 100 = 118 kJ/kg
- Latent: 390 kJ/kg
- Solid cooling: 0.96 × 180 = 173 kJ/kg
- Total: about 681 kJ/kg, or roughly 2,040 kJ for the shot

On a 45 second cycle that is an average thermal load of about 45 kW that must leave the die continuously. Latent heat alone is well over half of it, which is why shortening cycle time by ejecting hotter yields much less than intuition suggests.

That energy leaves by three routes. Internal cooling circuits typically remove 40–70 %, die spray 20–40 %, and radiation, convection and conduction into the machine platens the remainder. A die that relies on spray for most of its cooling will be thermally unstable, because spray is applied to the surface and cools the skin far more than the bulk.

### The temperature that matters

There are at least four temperatures in play and they are routinely confused.

**Coolant temperature** is what the controller displays. **Bulk die temperature** is the steady-state temperature of the block, measured a few centimetres in. **Die surface temperature before fill** is what the metal front actually meets, and it is the number that governs fill and cold shut — the target for aluminum is 180–250 °C. **Peak surface temperature during fill** is a transient that reaches 400–550 °C for a few tens of milliseconds and then decays. That transient, repeated every cycle, is what drives thermal fatigue.

The surface temperature swing is large but shallow. At 3 mm below the surface the amplitude is a small fraction of the surface swing; at 20 mm it is essentially flat. Cooling lines therefore control the bulk and the recovery rate, not the peak. Only spray and the surface geometry itself influence the peak.

### Cooling line design

Standard practice for drilled circuits:

- **Diameter** 8–12 mm for cavity blocks, up to 16 mm for large structural dies.
- **Distance from the cavity surface** of 1.5 to 3 times the channel diameter, so 15–35 mm for a 10 mm line. Closer gives more aggressive local cooling but concentrates stress and risks a blowout through a heat-checked surface.
- **Pitch between adjacent lines** of 3 to 5 times the diameter. Wider spacing leaves warm bands between circuits that show up as thermal stripes on a die thermal image.
- **Circuit length** kept short enough that coolant temperature rise across the circuit stays below about 5 °C; long serpentine circuits deliver very different cooling at inlet and outlet.

Flow must be turbulent to be effective. The Reynolds number is:

```
Re = ρ × v × D / µ
```

Water at 80 °C in a 10 mm channel at 2 m/s gives Re of roughly 50,000, comfortably turbulent. Below about Re = 10,000 heat transfer falls off sharply, so the practical requirement is a coolant velocity of at least 1 m/s and preferably 2–3 m/s. Flow rate, not supply pressure, is the quantity to verify — a partly scaled circuit can hold pressure while passing almost nothing.

Coolant choice follows the target die temperature. Pressurised water units run to 90–140 °C. Where a section needs to sit above that, hot oil circulating at 150–300 °C is used instead, most often to heat rather than cool a thin-wall region.

### Cores, pins and hot spots

Slender cores cannot be drilled with a through circuit. Three approaches cover most cases:

1. **Bubblers and baffles.** A concentric inner tube delivers coolant to the tip of a blind hole; return flow passes up the annulus. Suitable for cores from roughly 12 mm diameter upward.
2. **Jet cooling.** A high-velocity jet is directed at the inside of a small blind bore through a fine nozzle. Used where a bubbler will not fit, typically on pins from about 6 mm.
3. **High-conductivity inserts.** H13 conducts heat at roughly 25 W/m·K. Copper-based die insert alloys conduct at four to five times that rate, and refractory metal pins conduct better than H13 while resisting erosion. Replacing a hot-spot insert with a high-conductivity material moves heat out without needing a channel at all, at the cost of lower wear resistance.

Additively manufactured inserts with conformal channels that follow the cavity contour are now routine for problem regions. They resolve hot spots that drilled straight lines geometrically cannot reach, and their cost is justified when a hot spot is otherwise limiting cycle time.

### Spray as a control element

Die spray does three things: it deposits a release film, it cools the surface, and it leaves water that must be blown off. Only the first is strictly necessary; the second is often being used to compensate for insufficient internal cooling.

Over-spraying has direct costs. It drops surface temperature below the flow temperature in thin-wall areas, producing cold shut and chill marks. Residual water flashes to steam on contact with metal, adding gas porosity. It lengthens cycle time. And the thermal shock of water on a 400 °C surface is itself a major contributor to heat checking.

The correct sequence is to design internal cooling to carry the thermal load, then reduce spray to the minimum that gives reliable release, then extend blow-off until the surface is visibly dry.

## Engineering Parameters

| Parameter | Typical Range | Units | Notes / Driver |
|---|---|---|---|
| Die surface temperature before fill, aluminum | 180–250 | °C | 220–250 °C for walls below 2 mm |
| Die surface temperature, magnesium | 200–280 | °C | Higher than aluminum practice |
| Die surface temperature, zinc | 150–200 | °C | Hot chamber process, lower heat input |
| Peak surface temperature during fill | 400–550 | °C | Transient; drives thermal fatigue |
| Die preheat before first shot | 200–250 | °C | Prevents thermal shock cracking of a cold die |
| Cooling channel diameter | 8–16 | mm | 8–12 mm typical for cavity blocks |
| Channel distance from cavity surface | 1.5–3 × diameter | mm | 15–35 mm for a 10 mm line |
| Channel pitch | 3–5 × diameter | mm | Wider spacing leaves warm bands |
| Coolant velocity | 1–3 | m/s | Below 1 m/s heat transfer collapses |
| Reynolds number target | > 10,000 | — | Turbulent flow required |
| Coolant temperature rise per circuit | ≤ 5 | °C | Longer circuits cool unevenly |
| Pressurised water unit range | 60–140 | °C | Standard for cavity and core circuits |
| Hot oil unit range | 150–300 | °C | Used where a region must be kept hot |
| Heat input per kg of aluminum | 650–750 | kJ/kg | Superheat plus latent plus solid cooling |
| Fraction removed by internal cooling | 40–70 | % | Remainder by spray, radiation and conduction |
| Spray time | 0.5–3 | s | Minimise; over-spray causes chill marks and gas |
| H13 thermal conductivity | 24–29 | W/m·K | Reference for insert material comparisons |
| Number of independently controlled zones | 4–12 | zones | Larger structural dies at the upper end |

The balance shifts with geometry. A thin-walled heat sink deposits little energy per shot but demands a high surface temperature, so some circuits run as heaters. A heavy housing deposits several times more energy and is cycle-limited by how fast its thickest section cools to ejection temperature. Multi-cavity dies need each cavity balanced independently, because a thermal difference between cavities appears directly as a dimensional difference between parts.


- **Design cooling with the gating, not after it.** Overflows, ejector pins, slides and cooling lines all compete for the same space. Cooling loses that competition when it is added last.
- **Instrument the die.** Thermocouples 3–5 mm behind the cavity surface at three or four representative points cost little at build time and are impossible to retrofit. Logged alongside the shot trace they explain most process drift.
- **Use thermal imaging at every die tryout.** An image taken immediately after ejection, before spray, maps the real thermal field and finds hot spots faster than any simulation review.
- **Scale and corrosion are the main degradation mode.** Untreated water deposits scale that insulates the channel wall; a 0.5 mm scale layer can halve local heat transfer. Water treatment and periodic descaling belong in the preventive maintenance plan.
- **Balance cavities by flow measurement.** Fitting a flow meter on each circuit, not just a pressure gauge, is the only reliable way to confirm that each zone receives what it was designed for.
- **Cycle time is usually thermally limited.** Before buying a faster machine, calculate whether the existing die can shed the heat. In most cases the constraint is cooling capacity in the heaviest section.
- **Die temperature affects dimensions.** A die running 30 °C hotter than at PPAP expands measurably and produces parts at a different size. Dimensional drift across a shift is often a thermal problem wearing a dimensional disguise.


## Manufacturing Considerations
## Common Mistakes
- **Mistake:** Drilling cooling lines wherever space remains after ejector layout — **Why it fails:** the circuits end up far from the regions that actually need cooling, leaving hot spots that no process adjustment can clear — **Fix:** lay out cooling against a predicted thermal map at the design stage and treat ejector positions as the flexible element.

## Related Articles

- [Die Life and Thermal Fatigue: Heat Checking Explained]({{< relref "../tooling/die-life-and-thermal-fatigue.md" >}})
- [Tool Steels for Dies: H13 Selection and Heat Treatment]({{< relref "../tooling/tool-steels-and-heat-treatment.md" >}})
- [Mold and Die Maintenance: Preventive Program Design]({{< relref "../tooling/mold-and-die-maintenance.md" >}})
- [High Pressure Die Casting Parameters: HPDC Process Control]({{< relref "high-pressure-die-casting-parameters.md" >}})
- [Die Casting Surface Defects: Troubleshooting Guide]({{< relref "surface-defects-troubleshooting.md" >}})

## References

1. **NADCA Special Quality Die Steel and Heat Treatment Acceptance Criteria for Die Casting Dies** — Defines the steel quality and heat treatment requirements that determine a die's resistance to thermal fatigue. https://www.nadca.com
2. **ASM International, ASM Handbook Volume 15: Casting** — Covers heat flow in permanent moulds, interfacial heat transfer coefficients and solidification timing. https://www.asminternational.org
3. **G. Roberts, G. Krauss and R. Kennedy, "Tool Steels" (ASM International)** — Reference on H13 metallurgy, tempering response and elevated-temperature property retention.
4. **ASTM A681 — Standard Specification for Tool Steels Alloy** — Chemical composition requirements for H13 and related hot-work die steels. https://www.astm.org
5. **VDI 3400 / ISO 25178 surface texture references** — Used when specifying cavity surface condition, which changes as heat checking develops. https://www.iso.org
6. **F. P. Incropera and D. P. DeWitt, "Fundamentals of Heat and Mass Transfer" (Wiley)** — Source for the convective heat transfer and Reynolds number relationships applied to cooling channel sizing.
