---
title: "EV Battery Housing Manufacturing Guide"
description: "Manufacturing guide for EV battery enclosures: pack vs structural pack (CTP/CTB), IP67 seal, thermal-runaway barrier, HV isolation, extrusion plus HPDC nodes and cooling plate."
keywords: ["EV battery housing", "battery enclosure", "structural pack CTP CTB", "thermal runaway barrier"]
date: 2026-08-06
category: "reference"
reading_time: "9 min"
---

## Overview

The battery housing (enclosure) is the largest single structural part of an electric vehicle and one of the most cross-functional to specify: it must seal, crash, cool, insulate high voltage, and survive thermal runaway. This guide summarizes the manufacturing choices and the acceptance requirements engineers use, building on the process detail in [EV Battery Enclosure Manufacturing]({{< relref "../automotive/ev-battery-enclosure-manufacturing.md" >}}) and the structural-casting fundamentals in [Automotive Lightweighting]({{< relref "../automotive/automotive-lightweighting.md" >}}).

## Architecture: Pack vs Structural Pack

- **Conventional pack** — cells in modules, modules in a non-structural tray. *Why:* simpler isolation and serviceability; *trade-off:* heavier and taller.
- **Structural pack (CTP / CTB)** — cell-to-pack or cell-to-body where the enclosure is a **structural member** of the vehicle. *Why:* removes module hardware and lowers mass and height; *trade-off:* the housing must meet body stiffness and crash load paths, raising casting and joining requirements.
- **Decide early**, because structural-pack housings need the elongation, weldability, and crash qualification of a true structural casting.

## Sealing and Ingress Protection

- **Specify IP67 (and often IP6K9K for wash)** ingress protection. *Why:* water and dust ingress short-circuits the pack. *How:* define compression gasket, seal-channel geometry, and a verified torque/compression pattern.
- **Define leak-test method and limit** (pressure-decay or helium) on the control plan. *Why:* a single leak path is a safety and warranty event.

## Thermal-Runaway Protection

- **Require a thermal-runaway barrier** between cells and the enclosure. *Why:* propagation from one cell to neighbours is a regulatory and safety failure. *How:* specify barrier material and validate against the applicable protocol.
- **Reference the relevant standards context** — UL 2580 (USA), GB 38031 (China), and ECE R100 (UN) define thermal, electrical, and propagation expectations for the pack. *Why:* the housing design must support the-certified pack architecture.

## High-Voltage Isolation and Creepage

- **Define HV creepage and isolation distances** from live parts to the conductive enclosure. *Why:* the aluminium tray is grounded; inadequate isolation risks shock and fault. *How:* specify creepage/clearance per the HV standard and verify with the insulation resistance test.
- **Insulation resistance test** on the control plan (typically megohm-level at test voltage).

## Manufacturing Route

- **Aluminium extrusion + stamping + HPDC nodes** is the common route: extruded side/long rails for stiffness, stamped floor and cover, HPDC corner and busbar nodes for geometry. *Why:* balances cost, stiffness, and crash.
- **Mega-casting alternative** consolidates the tray into one large casting. *Why:* fewer parts and joints; *trade-off:* huge tool and machine investment, suited to high volume (see [Giga-Casting and Mega-Casting]({{< relref "../automotive/giga-casting-megacasting.md" >}})).
- **Choose by volume and crash strategy**, not by fashion.

## Cooling-Plate Integration

- **Integrate the cooling plate** into the tray (plate bonded or brazed to the floor). *Why:* thermal management of cells depends on tight, uniform contact. *How:* define flatness, bond integrity check, and a coolant leak test separate from the pack seal test.
- **Confirm coolant chemistry compatibility** with aluminium and seal materials to avoid galvanic or chemical attack.

## Quality and Traceability

- **IATF 16949 production** with APQP/PPAP as for any structural automotive part; see [APQP and PPAP]({{< relref "../automotive/apqp-and-ppap.md" >}}).
- **Cpk ≥ 1.33 critical / ≥ 1.67 safety** on seal, HV-isolation, and crash features.
- **Full material and process traceability** — alloy lot, weld/adhesive batch, torque records — for warranty and recall analysis.

## EV Housing Summary Table

| Requirement | Target |
| --- | --- |
| Ingress | IP67 (often IP6K9K) |
| Thermal | Barrier; UL 2580 / GB 38031 / ECE R100 context |
| HV isolation | Creepage/clearance per HV std; IR test |
| Structure | Pack or structural (CTP/CTB) |
| Route | Extrusion+stamp+HPDC nodes or mega-cast |
| Cooling | Integrated plate; separate coolant leak test |

## Related Articles

- [EV Battery Enclosure Manufacturing]({{< relref "../automotive/ev-battery-enclosure-manufacturing.md" >}})
- [Structural Castings and Crash Performance]({{< relref "../automotive/structural-castings-and-crash-performance.md" >}})
- [Giga-Casting and Mega-Casting]({{< relref "../automotive/giga-casting-megacasting.md" >}})
- [Automotive Lightweighting]({{< relref "../automotive/automotive-lightweighting.md" >}})

## References

- UL 2580 — Standard for Safety: Batteries for Use in Electric Vehicles
- GB 38031 — Electric Vehicles Traction Battery Safety Requirements (China)
- UN ECE R100 — Uniform Provisions Concerning EV Approval (electrical safety / thermal)
- IEC 60664 — Insulation Coordination for Equipment Within Low-Voltage Systems (creepage/clearance)
- IATF 16949:2016 — Automotive Quality Management System
