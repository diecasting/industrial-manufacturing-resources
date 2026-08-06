---
title: "Manufacturing Supplier Audit Checklist for Buyers: QSA and QPA"
description: "A buyer's on-site supplier audit checklist covering QSA system review, QPA process audit, calibration, traceability, FMEA, control plan and corrective action maturity."
keywords: ["supplier audit", "QSA audit", "QPA audit", "supplier checklist", "SPC", "8D corrective action"]
category: "supplier-selection"
reading_time: "8 min"
last_updated: "2026-08-06"
---

# Manufacturing Supplier Audit Checklist for Buyers: QSA and QPA

## Introduction

A supplier audit is the verification step that turns a promising quote into a controlled production risk. Quotes and certificates describe intent; an on-site audit observes practice. For casting and machined-part buyers, the audit answers one question: can this plant hold your critical-to-quality characteristics across a full production run, and can it prove it?

This checklist separates the system audit (QSA) from the process audit (QPA), then gives a floor-by-floor on-site routine and a scoring method. After reading, you will be able to run a half-day audit, read a process FMEA and control plan for real content, and judge whether a supplier's corrective-action system is mature enough to trust.

## Technical Explanation

### QSA versus QPA

The Quality System Audit (QSA) examines the management system: documented procedures, calibration program, training records, and corrective action. The Quality Process Audit (QPA) examines the actual shop floor: how a real part is made, measured, and contained today. A clean QSA with a messy QPA means the system exists on paper only. Plan both on the same visit.

### Incoming inspection and material control

Start at receiving. Confirm incoming alloy is lot-identified and that certificates of analysis are matched to furnace/lot before issue. Check that non-conforming material is segregated physically, not just flagged in software. Rejected material should have a quarantine area with limited access.

### In-process SPC and process control

Walk the production line. The meaningful evidence is a live SPC chart with control limits, not a stack of printed reports. Look for X-bar and R charts on critical dimensions, with operators able to explain out-of-control rules. Subgroups should be sized and sampled at a rate tied to the control plan.

### Gage calibration and ISO 17025

Every measuring device used for acceptance must be on a calibrated schedule with traceability to a national standard. The reference laboratory performing calibration should operate to ISO/IEC 17025. Check the gage ID tags, due dates, and out-of-tolerance handling: when a gage fails, the supplier must know which parts it last measured.

### Maintenance, traceability and training

A preventive maintenance program keeps machines within process windows; look for PM logs tied to machine ID. Traceability means lot control from alloy heat through machine, die cavity, and inspection result. Training records should show operators qualified on the specific operation, not just generic onboarding.

### Reading the FMEA and control plan

During the audit, open the process FMEA and the control plan for a similar part. The FMEA must list real failure modes (e.g., cold shut, soldering, porosity) with occurrence, severity and detection rankings and current controls. The control plan must map each characteristic to a measurement method, sample size and reaction plan. Vague entries like "inspect visually" with no criteria are a red flag.

### Corrective action maturity (8D / CAPA)

Ask for three closed corrective actions. A mature supplier uses an 8D or CAPA format with root cause (not recurrence of symptom), containment, and verification of effectiveness. Immature responses stop at "operator retrained" with no systemic fix.

## Engineering Parameters

| Audit Element | Target / Method | Units | Notes / Driver |
|---|---|---|---|
| QSA score threshold | ≥ 85 | % | Below this, conditional award |
| QPA score threshold | ≥ 80 | % | Floor process performance |
| Calibration due compliance | 100 | % | ISO/IEC 17025 traceable |
| SPC subgroup size | 3–5 | pcs | Tied to control plan |
| Sampling interval | 1–4 | hr | By process stability |
| Cpk acceptance | ≥ 1.33 | — | ≥ 1.67 for critical CTQ |
| CAPA closure time | 30–90 | days | By severity |
| Open finding re-audit | 1 | cycle | Before full PPAP |

Scorecard weighting should put process control and traceability highest because they predict field performance. A shop scoring 95 on paperwork but 70 on the floor should not be awarded without a documented improvement plan and re-audit.

## Manufacturing Considerations

- Run QSA in the morning with quality and engineering managers, then QPA on the floor in the afternoon.
- Request a sample audit of a part similar to yours, not your own, to see real behavior without a staged setup.
- Verify molten-metal safety: furnace guards, spill containment, and MSDS availability for fluxes and plating chemistries.
- Assess 5S and cleanliness, especially near machining and leak-test stations where contamination drives escapes.
- Check environmental and health controls: ventilation at die lube spray, PPE at the casting bench, and wastewater handling for plating.
- Confirm the reaction plan is real: ask what happens when a chart signals out of control during your observation.
- Document every finding with a photo and a record number so the closure can be verified later.

## Common Mistakes

- **Mistake:** Auditing only the QSA — **Why it fails:** paper systems hide a chaotic floor — **Fix:** always pair with a QPA on a live process.
- **Mistake:** Accepting "operator retrained" as root cause — **Why it fails:** the systemic cause remains — **Fix:** require 8D with verified effectiveness.
- **Mistake:** Not checking calibration out-of-tolerance impact — **Why it fails:** unknown quantities may have shipped — **Fix:** trace last-measured lots and quarantine.
- **Mistake:** Treating the control plan as a formality — **Why it fails:** characteristics go unmeasured — **Fix:** map each CTQ to a method and sample size on the floor.
- **Mistake:** Skipping the similar-part sample audit — **Why it fails:** your part is staged and unrepresentative — **Fix:** audit a running comparable program.
- **Mistake:** Ignoring molten-metal safety — **Why it fails:** serious injury and shutdown risk — **Fix:** confirm guards, spill plan and MSDS.
- **Mistake:** Weak traceability checks — **Why it fails:** a recall cannot be contained — **Fix:** follow one lot from heat to inspection record.
- **Mistake:** No re-audit of open findings — **Why it fails:** issues drift unresolved — **Fix:** close and verify before PPAP sign-off.

## Related Articles

- [APQP and PPAP: Automotive Part Approval Process Guide](../automotive/apqp-and-ppap.md)
- [IATF 16949 Explained: Automotive Quality System Basics](../automotive/iatf-16949-overview.md)
- [Mold and Die Maintenance: Preventive Program Design](../tooling/mold-and-die-maintenance.md)
- [Inspection and Acceptance Criteria for Production Parts](./inspection-and-acceptance-criteria.md)
- [How to Choose a Die Casting Supplier: Evaluation Guide](./choosing-a-die-casting-supplier.md)

## References

1. **ISO/IEC 17025:2017** — General requirements for the competence of testing and calibration laboratories.
2. **IATF 16949:2016** — automotive QMS incorporating process, product and system audit expectations.
3. **AIAG, CQI-series manuals** — supplier audit and special-process references for casting and heat treat.
4. **ASQ, CQE Handbook** — statistical process control, gage R&R and acceptance sampling methods.
5. **ISO 9001:2015** — clause 9 and 10 covering monitoring, measurement and corrective action.
6. **SAE International, AS13004** — process failure mode and effects analysis (PFMEA) for manufacturing.
7. **AIAG & VDA, FMEA Handbook** — seven-step FMEA method aligned with current automotive practice.
