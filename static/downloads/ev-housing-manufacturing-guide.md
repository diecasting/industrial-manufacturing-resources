# EV Battery Housing Manufacturing Guide

Copy-pasteable manufacturing and acceptance checklist for EV battery enclosures (housings).

## 1. Architecture: Pack vs Structural Pack
- [ ] **Choose pack vs structural pack (CTP/CTB) early** — structural-pack housings must meet body stiffness/crash, raising casting and joining requirements.
- [ ] **Conventional pack** — cells in modules in a non-structural tray; simpler isolation, heavier/taller.
- [ ] **Structural pack (CTP/CTB)** — enclosure is a vehicle structural member; removes module hardware, lowers mass/height.

## 2. Sealing and Ingress Protection
- [ ] **Specify IP67 (often IP6K9K for wash)** — water/dust ingress short-circuits the pack.
- [ ] **Define compression gasket and seal-channel geometry** plus verified torque/compression pattern.
- [ ] **Leak-test method and limit on control plan** — pressure-decay or helium; one leak path is a safety event.

## 3. Thermal-Runaway Protection
- [ ] **Require a thermal-runaway barrier** between cells and enclosure — prevents propagation.
- [ ] **Validate against applicable protocol** — UL 2580 (USA), GB 38031 (China), ECE R100 (UN) define thermal/electrical/propagation expectations.

## 4. High-Voltage Isolation and Creepage
- [ ] **Define HV creepage and isolation distances** from live parts to the conductive (grounded) enclosure.
- [ ] **Insulation resistance test on control plan** (megohm-level at test voltage) per IEC 60664 creepage/clearance.

## 5. Manufacturing Route
- [ ] **Extrusion + stamping + HPDC nodes** — extruded rails for stiffness, stamped floor/cover, HPDC corner/busbar nodes.
- [ ] **Mega-casting alternative** — consolidates tray into one casting; huge tool/machine investment, best at high volume.
- [ ] **Select by volume and crash strategy**, not fashion.

## 6. Cooling-Plate Integration
- [ ] **Integrate cooling plate** into tray (bonded/brazed to floor) — thermal management needs tight uniform contact.
- [ ] **Define flatness, bond integrity, and a separate coolant leak test** from the pack seal test.
- [ ] **Confirm coolant chemistry compatibility** with aluminium and seal materials.

## 7. Quality and Traceability
- [ ] **IATF 16949 with APQP/PPAP** as for any structural automotive part.
- [ ] **Cpk ≥ 1.33 critical / ≥ 1.67 safety** on seal, HV-isolation, and crash features.
- [ ] **Full material/process traceability** — alloy lot, weld/adhesive batch, torque records.

## Requirement Summary
| Requirement | Target |
| --- | --- |
| Ingress | IP67 (often IP6K9K) |
| Thermal | Barrier; UL 2580 / GB 38031 / ECE R100 |
| HV isolation | Creepage/clearance per HV std; IR test |
| Structure | Pack or structural (CTP/CTB) |
| Route | Extrusion+stamp+HPDC nodes or mega-cast |
| Cooling | Integrated plate; separate coolant leak test |
