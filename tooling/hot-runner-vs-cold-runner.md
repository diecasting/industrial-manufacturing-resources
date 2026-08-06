---
title: "Hot Runner vs Cold Runner Systems: Selection Guide"
description: "Comparing hot runner and cold runner injection molds on cost, cycle time, material waste, resin compatibility, maintenance risk and program volume."
keywords: ["hot runner vs cold runner", "hot runner system", "valve gate", "runner scrap", "injection mold feed system", "hot half manifold"]
category: "tooling"
reading_time: "7 min"
last_updated: "2026-08-06"
---

# Hot Runner vs Cold Runner Systems: Selection Guide

## Introduction

The feed system delivers melt from the machine nozzle to the cavity. The binary choice — keep the melt hot to the gate, or let it freeze and eject as scrap — reaches into material cost, cycle time, part quality, tool price, downtime risk and even regulatory compliance. Few tooling decisions have such a wide blast radius for so little drawing area.

The usual commercial framing is a simple payback: a hot runner costs more up front and saves runner material every shot. That sum is real but incomplete; it ignores cycle time gains, regrind-loop cost and the extra failure modes a hot half introduces. This chapter explains how each system works and how to choose, including when a hybrid is the right answer.

## Technical Explanation

### How a cold runner works

Sprue, runner and gate are cut into the steel at the parting line. Melt flows through them, freezes with the part, and ejects as a solid, then goes to regrind or to waste.

Because the runner solidifies each cycle it must stay molten long enough to transmit packing pressure: the runner has to freeze **after** the gate, or packing stops prematurely. On thick-walled parts the runner can outweigh the part — a 12 g closure fed by a 20 g runner in an eight-cavity tool is unremarkable — and it lengthens the cycle because the machine cannot open until the thickest section is rigid enough to eject.

The advantages are structural. There is nothing to fail: no heaters, thermocouples, controller or melt seal. Colour and material changes are quick because the whole melt path purges every shot, and any resin can run, including heat-sensitive and highly filled grades.

### How a hot runner works

A heated **manifold** and heated **nozzles** keep melt above processing temperature from machine nozzle to gate. Nothing solidifies except the part.

The manifold is a steel plate with drilled and plugged flow channels, heated by cartridge or tubular elements and suspended on insulating pads so it can expand without leaking at the nozzle interfaces. Managing that expansion is the heart of hot runner engineering: a manifold at 280 °C in a 60 °C plate grows roughly 1 mm per metre, and the seal must stay tight through every start-up.

**Thermal gates** (hot tips) rely on a small frozen plug at the orifice that re-melts each injection; they are simple and leave a small round vestige. **Valve gates** use a pneumatically or hydraulically driven pin to open and close the orifice, leaving a flush vestige and allowing **sequential valve gating**, where gates open in a programmed order so the melt front sweeps across a large part such as a bumper without weld lines.

Most hot runner damage happens at start-up: bring the mould plates to operating temperature; soak the manifold and nozzles at 100-150 °C to drive moisture from the heaters; ramp to setpoint and **soak 10-20 minutes** so polymer is uniformly molten; only then inject. Injecting into a partially molten channel spikes pressure that shears nozzle tips and unseats seals.

### Where the differences bite

**Material waste.** Runner mass ranges from under 10 % of shot weight on a large single-cavity part to over 100 % on small multi-cavity parts; hot runners eliminate it.

**Regrind is not free.** Grinding, storing, blending and dosing scrap needs equipment, floor space and labour, adds contamination risk, and gives the polymer extra thermal history; medical, optical and some food-contact applications prohibit it outright.

**Cycle time.** Removing the thickest frozen section shortens cooling; eliminating runner ejection and the three-plate opening stroke shortens dry cycle, with gains of 10-30 % common on small parts.

**Residence time.** A hot runner holds melt continuously at process temperature; on a low-throughput application that melt may sit for many minutes, and rigid PVC, some flame-retardant compounds and POM at the top of its range degrade under those conditions.

**Failure modes.** Heaters, thermocouples, controllers, wiring and valve gate actuation can all fail mid-production; the worst case is a polymer leak into the manifold pocket requiring a full hot half strip-down.

## Engineering Parameters

| Parameter | Cold Runner | Hot Runner | Units / Notes |
|---|---|---|---|
| Feed system scrap per shot | 10-100+ | ~0 | % of part weight |
| Incremental tool cost | baseline | +30-100 | % over an equivalent cold runner tool |
| Cycle time effect | baseline | −10 to −30 | % on small and thin-wall parts |
| Sprue / main runner diameter | 5-10 | n/a | mm |
| Nozzle melt channel bore | n/a | 6-16 | mm, sized to shot volume |
| Manifold operating temperature | n/a | 180-320 | °C, resin dependent |
| Manifold thermal growth | n/a | ~1 | mm per metre at 250 °C ΔT |
| Melt residence in feed system | < 1 cycle | 2-30+ | cycles, manifold volume vs shot size |
| Colour change purge quantity | 1-3 | 10-50+ | shots equivalent |
| Valve pin stroke | n/a | 6-12 | mm |
| Valve gate actuation pressure | n/a | 0.6-0.8 | MPa (6-8 bar) pneumatic |
| Gate vestige height | 0.3-1.5 | 0.00-0.50 | mm; valve gates essentially flush |
| Practical minimum programme volume | any | 100,000-250,000 | parts, below which payback is doubtful |
| Nozzle heater watt density | n/a | 10-25 | W/cm², affects hot spot risk |
| Thermocouple control tolerance | n/a | ±2-5 | °C at the nozzle tip |

```
Payback (parts) = ΔTool_cost / ( m_runner × (C_resin − C_regrind_value)
                                 + Δt_cycle × R_machine / 3600 )
```

When regrind is prohibited, `C_regrind_value` is zero and payback shortens sharply. For a high-cost engineering resin, hot runners can pay back in tens of thousands of parts; for a commodity PP closure with in-line regrind, savings alone may never justify it, and the case rests on cycle time and cavitation.

## Manufacturing Considerations

- **Match manifold volume to shot size.** Residence time is manifold melt volume divided by shot volume. Oversized manifolds on small-shot tools are the usual cause of degradation and black specks.
- **Insist on a dead-spot-free manifold layout.** Sharp intersections and unplugged drilling ends hold polymer indefinitely and later release as a defect.
- **Wiring is a real failure source.** Specify high-temperature wiring routed from hot surfaces, strain-relieved and zone-labelled; a miswired zone can cook a nozzle in minutes on start-up.
- **Buy spares with the tool** — nozzle heater, thermocouple, tip, valve pin and seal set. Component lead times of several weeks are normal.
- **Consider the hybrid.** A hot sprue bushing feeding a short cold runner captures most of the scrap saving on a four- or eight-cavity tool at a fraction of the cost and complexity of a full hot half.

## Common Mistakes

- **Mistake:** Justifying a hot runner on material savings alone. — **Why it fails:** The calculation omits grinding labour, contamination scrap and degraded regrind quality cost, so viable projects get rejected. — **Fix:** Build payback on virgin resin cost, regrind handling, cycle time and scrap rate together.
- **Mistake:** Fitting a hot runner to a low-throughput, heat-sensitive resin. — **Why it fails:** Melt sits in the manifold for many cycles and degrades, producing black specks and gas defects no process change can remove. — **Fix:** Calculate residence time first and use a cold runner or smaller manifold if it exceeds guidance.
- **Mistake:** Powering the manifold to full setpoint from cold in one step. — **Why it fails:** Heater moisture flashes and can fail them, and differential expansion stresses the seals. — **Fix:** Follow a staged soft start with a moisture bake at 100-150 °C before ramping.
- **Mistake:** Injecting as soon as the controller reaches setpoint. — **Why it fails:** The thermocouple reads steel, not polymer; channel-centre melt may still be partly solid, so pressure spikes and cracks the tip. — **Fix:** Soak 10-20 minutes after the controller stabilises.
- **Mistake:** Sizing a cold runner as small as possible to cut scrap. — **Why it fails:** The runner freezes before the gate, packing pressure cuts off early, and parts sink and run undersized. — **Fix:** Size so runner solidification exceeds the gate's, then shorten length not diameter.
- **Mistake:** Specifying valve gates without confirming sequencing and air supply. — **Why it fails:** The tool needs a sequence controller the plant lacks, gates fire together, and the weld-line benefit is lost. — **Fix:** Confirm machine and utility capability during design and include the controller in scope.
- **Mistake:** Treating the hot half as the moulder's problem after handover. — **Why it fails:** Without zone maps, wiring diagrams and start-up procedures, operators improvise and leaks follow. — **Fix:** Require a documentation pack with zone layout, settings, start-up and shutdown procedures and a spare list at acceptance.

## Related Articles

- [Injection Mold Design Fundamentals for Plastic Parts](./injection-mold-design-fundamentals.md)
- [Injection Molding Process Parameters and Process Window](./injection-molding-process-parameters.md)
- [Injection Molding Defects: Diagnosis and Correction](./injection-molding-defects.md)
- [Mold and Die Maintenance: Preventive Program Design](./mold-and-die-maintenance.md)
- [Die Casting Gating and Runner Design Fundamentals](../die-casting/gating-and-runner-design.md)

## References

1. **Beaumont, J. P., *Runner and Gating Design Handbook*** — Runner sizing, shear-induced imbalance and gate selection for cold and hot systems.
2. **Kazmer, D., *Injection Mold Design Engineering*** — Hot runner manifold layout, thermal expansion management and feed system economics.
3. **Rosato, D. V. and Rosato, M. G., *Injection Molding Handbook*** — Feed system alternatives, machine interfaces and processing economics.
4. **ISO 294-1 — Plastics: injection moulding of test specimens of thermoplastic materials** — Reference conditions for melt temperature and residence time control. https://www.iso.org
5. **Society of Plastics Engineers** — Literature on sequential valve gating, manifold balancing and hot runner reliability. https://www.4spe.org
