---
date: 2026-08-06
title: "Inspection and Acceptance Criteria for Production Parts"
description: "Define acceptance for production parts: AQL sampling, CMM and FAIR dimensional checks, CTQ control, nonconformance handling, leak and X-ray testing, and traceability."
keywords: ["acceptance criteria", "AQL sampling", "CMM inspection", "FAIR", "nonconformance", "X-ray porosity"]
category: "supplier-selection"
reading_time: "8 min"
last_updated: "2026-08-06"
---

# Inspection and Acceptance Criteria for Production Parts

## Introduction

Acceptance criteria are the line between a part that ships and a part that scraps. For castings and machined components, that line is drawn before production in the control plan, not decided at the dock. A clear criteria set protects the buyer from escapes and protects the supplier from arbitrary rejection, which is why it belongs in the supply agreement and the PPAP.

This guide covers sampling plans, dimensional verification, attribute versus variable data, nonconformance flow, and the special tests that cast parts require. After reading, you will be able to write an acceptance section that a supplier can quote, run, and defend in a dispute.

## Technical Explanation

### AQL sampling plans

Attribute inspection uses Acceptable Quality Limit sampling per ANSI/ASQ Z1.4. A typical plan is level II normal inspection with AQL 1.0–2.5 for appearance and AQL 0.65–1.0 for critical characteristics. The standard gives sample size and accept/reject numbers by lot size; switching rules move to tightened inspection after repeated rejects. Critical (safety) characteristics are often inspected 100%.

### Dimensional inspection and first article

Routine dimensional checks use a CMM against the datum reference frame, sampling features from the control plan. First article inspection (FAI) is a separate, full-layout activity: every dimension on the print is measured and recorded in a FAIR structured per AS9102-style format, or as the dimensional report within a PPAP submission. FAI proves the process can make the print before series runs begin.

### Attribute versus variable data

Attribute data are pass/fail (porosity present, leak or not). Variable data are measured values (bore diameter 25.012 mm) that support SPC and Cpk. Critical CTQs should be variable-measured so trends are visible before a lot fails. Attribute-only inspection hides drift and should be limited to cosmetic features.

### CTQ control and monitoring

Each critical-to-quality characteristic must map to a measurement method, gauge, sample size, and reaction plan in the control plan. CTQs get tighter acceptance (often full inspection or Cpk ≥ 1.67) than non-critical features. The buyer should agree the CTQ list with the supplier at PPAP so inspection effort matches real risk.

### Nonconformance handling

A detected nonconformance enters a Material Review Board (MRB) flow with defined dispositions: use-as-is, rework, repair, or scrap. Use-as-is requires buyer concession; rework must return the part to print; repair (deviation from print) needs engineering approval. The system must quarantine, identify, and record every nonconforming lot with a corrective action reference.

### Leak and pressure testing

Pressure-containing parts need leak verification. Air-decay and pressure-decay test a filled part against a pressure drop over time; helium mass-spectrometry detects far smaller leaks for demanding seals. Acceptance is a maximum allowable drop (e.g., ≤ 0.01 MPa over 30 s) defined by the function, not a generic pass.

### X-ray porosity acceptance

Castings are screened for internal porosity by radiography. Acceptance follows a reference such as ASTM E505 discontinuity classes, or a customer spec with severity limits by location. Porosity near a machined seal face or load path is rejected more strictly than porosity in a non-critical boss. The criteria must state class and region.

## Engineering Parameters

| Criterion | Typical Acceptance | Units | Notes / Driver |
|---|---|---|---|
| AQL, appearance | 1.0–2.5 | % | Z1.4 level II normal |
| AQL, critical | 0.65–1.0 | % | Or 100% inspect |
| Cpk, CTQ | ≥ 1.33 (1.67) | — | Higher for safety |
| CMM accuracy | ±0.005–0.02 | mm | Per machine capability |
| Leak, pressure-decay | ≤ 0.01 drop | MPa/30 s | By function |
| Helium leak | ≤ 1×10⁻⁶ | mbar·L/s | Tight seals |
| X-ray class | A/B per region | — | ASTM E505 |
| FAIR coverage | 100 | % of dims | Full layout at FAI |

Sample sizes scale with lot size under Z1.4; a 2000-piece lot at level II normal draws 125 pieces for an AQL 1.0 plan. Porosity limits tighten where machining exposes the void, because a vented pore becomes a leak path or a weak section.

## Manufacturing Considerations

- Write acceptance criteria into the PO and the control plan so the supplier quotes the true inspection load.
- Separate cosmetic from functional CTQs; over-inspecting cosmetics wastes cost without reducing risk.
- Require CoC and CoA with every lot: certificate of conformance plus alloy analysis tied to heat number.
- Enforce lot traceability from alloy heat through machine, cavity, and inspection record for recall containment.
- Define packaging and preservation (foil, desiccant, racks) as acceptance, since corrosion is a nonconformance.
- Agree the MRB response time and required documentation before production, not during a dispute.
- Keep radiography criteria regional; a single class across the whole part is either too loose or too costly.

## Common Mistakes

- **Mistake:** One AQL for all features — **Why it fails:** critical traits get too much or too little inspection — **Fix:** tier AQL by criticality.
- **Mistake:** Attribute-only on CTQs — **Why it fails:** drift is invisible until failure — **Fix:** variable-measure CTQs for SPC.
- **Mistake:** Skipping FAI — **Why it fails:** process never proven to print — **Fix:** full FAIR or PPAP dimensional report first.
- **Mistake:** Vague leak spec — **Why it fails:** "no leak" is untestable — **Fix:** state pressure, time and max drop.
- **Mistake:** Single X-ray class — **Why it fails:** wrong cost or risk balance — **Fix:** regional classes per ASTM E505.
- **Mistake:** No CoA per lot — **Why it fails:** material cannot be traced — **Fix:** require heat-linked certificate.
- **Mistake:** Unwritten MRB rules — **Why it fails:** escapes stall in debate — **Fix:** predefine dispositions and timing.
- **Mistake:** Ignoring preservation — **Why it fails:** corrosion rejects at receiving — **Fix:** specify packaging in acceptance.

## Related Articles

- [Machining Die Cast Components: Datums, Stock and Porosity]({{< relref "../cnc-machining/machining-die-cast-components.md" >}})
- [Die Casting Porosity: Causes, Detection and Prevention]({{< relref "../die-casting/die-casting-porosity-prevention.md" >}})
- [APQP and PPAP: Automotive Part Approval Process Guide]({{< relref "../automotive/apqp-and-ppap.md" >}})
- [Manufacturing Supplier Audit Checklist for Buyers: QSA and QPA]({{< relref "supplier-audit-checklist.md" >}})
- [CNC Tolerances and GD&T: Practical Specification Guide]({{< relref "../cnc-machining/tolerances-and-gdt.md" >}})

## References

1. **ANSI/ASQ Z1.4** — sampling procedures for inspection by attributes and AQL plans.
2. **AS9102** — first article inspection (FAI) reporting format and requirements.
3. **AIAG, PPAP 4th Edition** — production part approval including dimensional results.
4. **ASTM E505** — standard reference radiographs for steel and other castings discontinuity classes.
5. **ISO 2859-1** — international attribute sampling standard aligned with Z1.4.
6. **ASTM E1417** — liquid penetrant testing for surface discontinuity detection.
7. **ISO 9001:2015** — clause 8 covering inspection, identification and traceability of product.
