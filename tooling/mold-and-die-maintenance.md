---
title: "Mold and Die Maintenance: Preventive Program Design"
description: "Building a preventive maintenance program for molds and dies: shot count triggers, level 1-3 tasks, waterline descaling, lubrication and storage."
keywords: ["mold maintenance program", "die preventive maintenance", "shot counter", "waterline descaling", "tooling maintenance levels", "mold storage corrosion"]
category: "tooling"
reading_time: "7 min"
last_updated: "2026-08-06"
---

# Mold and Die Maintenance: Preventive Program Design

## Introduction

Tooling maintenance is unglamorous yet one of the few engineering tasks with easily demonstrated return. A production tool generates revenue only while it is in a press making conforming parts. Every hour in the toolroom for an unplanned repair is lost capacity, and every unplanned repair costs more than the scheduled one that would have prevented it, because it happens under time pressure with whatever parts are on hand.

Most plants have something they call a maintenance program; fewer trigger on anything but failure. A real preventive programme is scheduled against **shot count**, not the calendar or symptoms, and the work content at each trigger is defined in advance rather than decided when the tool is opened. This chapter sets out the three-level task structure, how to set shot-count triggers, the technical content of each task, and the record-keeping that makes the program auditable.

## Technical Explanation

### Why shot count, not calendar

Tool wear is driven by cycles, not days. A mould on two shifts degrades roughly four times faster than one at half capacity, yet a calendar schedule treats them identically. Shot count aligns the trigger with the physics: thermal fatigue cycles, ejector sliding distance, gate erosion, parting line impact.

The enabling instrument is a **shot counter mounted on the tool**, not the machine. Machine counters reset and lose meaning when the tool moves. A tool-mounted counter — ideally electronic with a non-resettable lifetime total plus a resettable maintenance total — ties the count permanently to the asset and can flag excessive cycle time.

### The three-level structure

**Level 1 — in-press.** Performed by the setter without removing the tool: parting line inspection, vent cleaning at the face, guide pillar wipe and re-grease, rust preventive during stoppages, leak checks, ejector verification. Minutes.

**Level 2 — bench, main parting opened.** Clean all cavity and core surfaces, clear vents and overflows, lubricate the ejector system, check pins and return pins, inspect slides and gibs for galling, blue-in shut-offs, lightly stone incipient heat check, measure critical dimensions, flow-test cooling circuits. Half a shift to a shift.

**Level 3 — full teardown.** Replace all wear items regardless of apparent condition (pins, springs, seals, O-rings), de-scale cooling circuits, re-machine or replace gate and high-erosion inserts, weld repair and re-texture as needed, verify against the tool drawing, and tryout before return. A project, not a task.

A **level 0** predictive layer follows cycle time trend, scrap rate, pressure drift and cooling water ΔT — leading indicators that flag problems thousands of shots before a defect appears.

### Cooling circuits, ejection and storage

Scale, rust and biological growth degrade channels continuously. The consequence is thermal: long before flow drops, heat transfer falls sharply because scale conductivity is about two orders of magnitude below steel. The diagnostic is **flow rate per circuit** against the acceptance baseline plus inlet-outlet ΔT, not "does water come out". Descale with an inhibited acid, neutralise, blow dry, and re-measure. Prevention beats descaling — treated closed-loop water at 7.5-9.0 pH, hardness below ~100-150 ppm CaCO₃, filtered.

Ejector galling is adhesive transfer between similar-hardness sliding steels. Prevent it by a 5-10 HRC pin-to-bushing hardness difference, nitrided or coated surfaces, then lubrication — in that order. Injection moulds (40-120 °C) use NLGI 1-2 grease, NSF H1 where food-contact; die casting dies (200-280 °C) need high-temperature grease with graphite, PTFE or MoS₂, applied thinly.

Storage protocol: clean all surfaces, dry and displace cooling circuits with rust preventive, coat cavity and core (soft film short-term, hard wax long-term), store closed and tagged with tool number, last shot count and condition, below 60 % RH, re-inspected annually for long-term.

## Engineering Parameters

| Task | Trigger interval | Units | Notes / Driver |
|---|---|---|---|
| Level 1, injection mould | 5,000-25,000 | shots or run end | Whichever first |
| Level 1, die casting die | 2,000-8,000 | shots or shift | Higher thermal load |
| Level 2, injection mould | 50,000-250,000 | shots | Lower for filled resins |
| Level 2, die casting die | 15,000-40,000 | shots | Aluminium HPDC |
| Level 3, injection mould | 500,000-1,000,000 | shots | Or major quality escape |
| Level 3, die casting die | 60,000-100,000 | shots | Align with insert refresh |
| Cooling flow degradation limit | ≤ 10-15 | % below baseline | Beyond this, descale |
| Cooling water hardness | < 100-150 | ppm CaCO₃ | Above, scaling accelerates |
| Cooling water pH | 7.5-9.0 | pH | With inhibitor |
| Reynolds number, cooling | > 4,000-10,000 | — | Turbulent flow required |
| Ejector grease, mould | NLGI 1-2, to 150 | °C | NSF H1 where required |
| Ejector grease, die | to 250-300 | °C | Solid-lubricant carrier |
| Pin-to-bushing hardness diff | 5-10 | HRC | Prevents galling |
| Vent land, HPDC | 0.10-0.30 | mm | Clean before re-cutting |
| Storage relative humidity | < 60 | % RH | Prevents condensation |

Turbulent flow is the overlooked parameter. Heat transfer rises steeply once flow is turbulent and is poor below it; a circuit throttled to balance a manifold may run laminar and extract a fraction of the design heat. Design for Re > 4,000 minimum, Re > 10,000 as circuits age.

Trigger intervals shift with duty. Glass-filled resins above 20 % filler can halve the Level 2 interval; low-iron aluminium alloys accelerate soldering; zinc hot-chamber dies tolerate intervals several times longer than aluminium.

## Manufacturing Considerations

- **Key records to the tool number, not the part number.** A history filed under the part becomes unusable after the first engineering change.
- **Establish a baseline at tool acceptance** — circuit flows, critical dimensions, shut-off pattern, ejector stroke, hardness. Without it, later measurements are uninterpretable.
- **Photograph condition at every Level 2.** A time series reveals heat check progression and erosion a dimensional check misses.
- **Stock spares with the tool** — pins, springs, O-rings, wear plates, gate inserts, slide gibs built to the same spec. Sourcing a match two years later is slow and inexact.
- **Cost-model the programme** against historic unplanned downtime and pre-failure drift scrap; the comparison favours prevention.
- **Digital shot counters pay for themselves** by ending disputes over how many shots a tool has run, central to amortisation and warranty.

## Common Mistakes

- **Mistake:** Scheduling on a monthly calendar. — **Why it fails:** Busy and idle tools get identical attention, so one is under-maintained and the other disturbed needlessly. — **Fix:** Trigger on shot count from a tool-mounted counter, with calendar only for stored-tool corrosion checks.
- **Mistake:** Judging cooling by water flow. — **Why it fails:** Scale cuts heat transfer long before it restricts flow, so the circuit passes but extracts half its load and lengthens cycle. — **Fix:** Measure flow and ΔT per circuit against baseline; descale at 10-15 % degradation.
- **Mistake:** Using standard grease on die casting pins. — **Why it fails:** At 250 °C it carbonises into abrasive paste that accelerates the wear it should prevent, and pins seize. — **Fix:** Use high-temperature grease with a solid-lubricant carrier above die operating temperature, applied thinly.
- **Mistake:** Blowing out cavities and returning to the rack. — **Why it fails:** Shop air carries moisture; condensation in a warm closed tool rusts the cavity within days. — **Fix:** Clean, dry, apply rust preventive suited to storage duration, store closed and tagged.
- **Mistake:** Cleaning vents with a scraper. — **Why it fails:** Vent lands are 0.01-0.30 mm; scraping deepens them locally, causing flash blamed on the machine. — **Fix:** Use soft brass or approved chemical cleaner, then re-measure depth.
- **Mistake:** Deferring Level 3 while parts are still good. — **Why it fails:** Wear is non-linear; marginal slides gall and a bench job becomes a multi-week insert replacement. — **Fix:** Set the Level 3 trigger from shot count and hold to it.
- **Mistake:** Letting the toolroom set scope on arrival. — **Why it fails:** Scope varies by technician, events are incomparable, and spring replacement gets skipped. — **Fix:** Write a per-tool per-level checklist with sign-off and measurements.
- **Mistake:** Replacing a broken pin with a stock item. — **Why it fails:** The original may have been ground, nitrided or corrected at tryout; a stock pin changes fit and dimension. — **Fix:** Order spares against the tool drawing at build and control them as tool-specific.

## Related Articles

- [Die Life and Thermal Fatigue: Heat Checking Explained](./die-life-and-thermal-fatigue.md)
- [Tool Steels for Dies: H13 Selection and Heat Treatment](./tool-steels-and-heat-treatment.md)
- [Die Thermal Management: Cooling Lines and Die Temperature](../die-casting/die-thermal-management.md)
- [Tooling Ownership, IP and Supply Agreements Explained](../supplier-selection/tooling-ownership-and-contracts.md)
- [Manufacturing Supplier Audit Checklist for Buyers](../supplier-selection/supplier-audit-checklist.md)

## References

1. **NADCA — North American Die Casting Association** — Die maintenance, temperature control and tooling condition guidance for HPDC. https://www.nadca.com
2. **SPI / Plastics Industry Association mould standards** — Injection mould build classes with expected life and maintenance expectations.
3. **ASM International, ASM Handbook Volume 18: Friction, Lubrication, and Wear Technology** — Galling, adhesive wear and lubricant selection at temperature. https://www.asminternational.org
4. **ISO 55000 — Asset management** — Framework for treating tooling as a managed asset with defined maintenance strategy. https://www.iso.org
5. **IATF 16949 — tooling management and preventive maintenance** — Automotive expectations for tool identification, maintenance planning and records. https://www.iatfglobaloversight.org
6. **ASTM water treatment practices** — Background on water chemistry control relevant to cooling circuit scaling. https://www.astm.org
