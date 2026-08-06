---
title: "OEM Supplier Audit Checklist for Casting and Machined Parts"
description: "OEM supplier audit checklist for casting and machined-part suppliers: QSA vs QPA, IATF 16949, machine tonnage, in-house machining, SPC/CMM, 8D/CAPA and molten-metal safety."
keywords: ["OEM supplier audit", "casting supplier audit", "machined parts audit", "QSA QPA audit"]
date: 2026-08-06
category: "reference"
reading_time: "8 min"
---

## Overview

Selecting a casting or CNC machining supplier for an automotive or industrial program is a risk decision, not a price decision. A structured on-site audit before award and at periodic intervals protects launch timing, part conformity, and downstream warranty cost. This checklist separates the **Quality System Audit (QSA)** from the **Quality Process Audit (QPA)**, then drills into the capabilities that most often determine whether a supplier can hold critical characteristics on aluminium castings and their machined features.

Use this page alongside your sourcing process. For the controlled-quality planning that follows award, see [APQP and PPAP]({{< relref "../automotive/apqp-and-ppap.md" >}}) and the [IATF 16949 overview]({{< relref "../automotive/iatf-16949-overview.md" >}}).

## Audit Structure: QSA vs QPA

- **QSA (Quality System Audit)** — Evaluate the management system against IATF 16949 / ISO 9001. *Why:* confirms documented, repeatable processes rather than reactive firefighting. *How:* review procedures, management review minutes, internal audit records, and objective evidence of deployment.
- **QPA (Process / Product Audit)** — Evaluate the actual production line, tooling, and part conformity at the workstation. *Why:* a strong QMS on paper can still ship non-conforming parts. *How:* observe a live run, pull first-article and SPC records, and physically inspect parts and gauges.

A passing QSA with a failing QPA should block production-part approval until the process gaps are closed.

## Quality Certifications

- **Valid IATF 16949 certificate** issued by an accredited certification body. *Why:* baseline expectation for automotive casting and machining supply. *How:* check the certificate number and accreditation logo; verify scope and expiry.
- **ISO 9001** for non-automotive or standalone secondary operations. *Note:* not a substitute for IATF 16949 on automotive programs.
- **Certificate scope matches the audited site** — the casting and machining processes at the visited plant must be in scope, not a sister facility. *Why:* a group certificate covering only a different plant gives no assurance for your parts.

## Equipment and Clamp Tonnage

- **Machine clamp tonnage covers the required projected area.** *Why:* required clamp force ≈ projected area × specific cavity pressure (roughly 40–90 MPa for aluminium high-pressure die casting). Undersized machines cause flash, short fills, and dimensional drift. *How:* compute required force from part envelope and compare to the machine's rated lock.
- **Tonnage class matches the part type.** *Note:* general HPDC spans ~150–3500 t; structural and mega-castings require 2000–6000 t class machines.
- **Machine condition and maintenance** — tie-bar stretch calibration, platen parallelism logs, and documented preventive maintenance. *Why:* worn platens distort the die parting line and wreck repeatability.

## In-House vs Outsourced Operations

- **CNC machining capability in-house.** *Why:* in-house machining shortens lead time and tightens process control and traceability versus sub-contracted finishing. *How:* confirm number and control of machines, and that critical features are not silently outsourced.
- **Surface treatment / plating.** *Note:* if outsourced, require sub-supplier approval and flow-down of the control plan, plus valid environmental permits.
- **Leak testing (for housings).** *Why:* pressure-decay or helium leak testing is decisive for enclosures. Confirm the method, acceptance limit, and test frequency are in the control plan.
- **X-ray / CT (NDT).** *Why:* porosity and homogeneity verification for structural castings. Confirm NDT level, equipment, and inspection frequency, in-house or contracted.

## Measurement and Inspection Capability

- **CMM and probing with calibrated equipment** and an **ISO/IEC 17025 accredited laboratory** for material and mechanical testing. *Why:* ensures reported Cpk and tensile/elongation results are trustworthy.
- **Active SPC on critical characteristics** with **Cpk ≥ 1.33 for critical** and **≥ 1.67 for safety** characteristics. *Note:* ask for live control charts and recent studies, not just a policy statement.
- **Calibration system** — gauges calibrated on schedule and traceable to national standards; gauge R&R performed on key features. *Why:* undetected gauge error masks real process shifts.

## Problem Solving and CAPA Maturity

- **8D discipline maturity.** *Why:* immature containment predicts repeat escapes. *How:* review three recent 8D reports for structured root cause (5 Why / Ishikawa) and verified effectiveness.
- **CAPA closure rate and on-time delivery** of corrective actions. *Note:* chronic overdue actions signal weak management commitment.
- **Lessons-learned linkage** to PFMEA and control plan updates. *Why:* a closed loop prevents recurrence across programs.

## Site, Safety, and Financial Health

- **5S and housekeeping** on the shop floor. *Why:* a disorganized cell correlates with mixed parts and calibration lapses.
- **Molten-metal safety** — PPE, melt-house guarding, pyrotechnic/explosion controls, and furnace venting. *Why:* casting plants carry inherent thermal and chemical risk that affects continuity.
- **Financial health** — years in business, customer concentration, and capacity utilization. *Why:* a low-quote supplier that fails mid-program is far more expensive than a stable one.
- **Business continuity plan** covering melt disruption, key-machine breakdown, and logistics.

## Audit Summary Table

| Area | Pass criterion |
| --- | --- |
| QSA | IATF 16949 valid; scope matches audited site |
| QPA | Cpk ≥ 1.33 critical / ≥ 1.67 safety; live SPC |
| Equipment | Lock tonnage ≥ required clamp force; maintained |
| In-house ops | Machining/leak-test in control; sub-suppliers approved |
| Inspection | ISO 17025 lab; calibrated CMM; gauge R&R |
| CAPA | 8D with verified root cause; on-time closure |
| Site/safety | 5S; molten-metal controls; BCP present |

## Related Articles

- [APQP and PPAP]({{< relref "../automotive/apqp-and-ppap.md" >}})
- [IATF 16949 Overview]({{< relref "../automotive/iatf-16949-overview.md" >}})
- [Die Casting DFM Guidelines]({{< relref "../die-casting/die-casting-dfm-guidelines.md" >}})
- [CNC DFM Cost Reduction]({{< relref "../cnc-machining/cnc-dfm-cost-reduction.md" >}})

## References

- IATF 16949:2016 — Automotive Quality Management System Standard
- ISO 9001:2015 — Quality Management Systems — Requirements
- ISO/IEC 17025:2017 — General Requirements for the Competence of Testing and Calibration Laboratories
- AIAG CQI-27 — Special Process: Casting System Assessment
- AIAG — Advanced Product Quality Planning (APQP) and Production Part Approval Process (PPAP) Reference Manuals
