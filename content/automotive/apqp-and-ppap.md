---
date: 2026-08-06
title: "APQP and PPAP: Automotive Part Approval Process Guide"
description: "How APQP phases gate product and process development, with MSA and SPC targets, the 18 PPAP elements and submission levels for part approval."
keywords: ["APQP", "PPAP", "part approval process", "production part approval", "measurement systems analysis", "statistical process control"]
category: "automotive"
reading_time: "9 min"
last_updated: "2026-08-06"
---

# APQP and PPAP: Automotive Part Approval Process Guide

## Introduction
Bringing an automotive part from concept to validated production is governed by two linked frameworks. APQP (Advanced Product Quality Planning) is the phased method that plans and proves the product and its manufacturing process before volume starts. PPAP (Production Part Approval Process) is the evidence package that demonstrates the process, running at the quoted rate with production tooling, can consistently make the part to print. Together they convert engineering intent into a controlled, repeatable supply. For suppliers, PPAP sign-off is the gate that unlocks shipment; for OEMs, it is the control that prevents uncontrolled launches.

This guide walks through the five APQP phases, the link to DFMEA and PFMEA, the acceptance maths for measurement and process capability, and the structure of a PPAP submission. After reading, the engineer should be able to schedule an APQP program and assemble a defensible PPAP file.

## Technical Explanation

### The five APQP phases

APQP is organized as a sequence with gateways between phases. Each gateway requires defined outputs before the next phase begins.

1. **Plan and define program** — capture voice of customer, define scope, build the team, set milestones and the initial bill of material.
2. **Product design and development** — complete DFMEA, design reviews, prototyping, and verify the design meets function and regulation.
3. **Process design and development** — design the process: PFMEA, process flow, layout, fixture and gauge plan, and the control plan draft.
4. **Product and process validation** — build parts at the real process, run MSA and SPC, validate capability, and prove the process at rate.
5. **Feedback, assessment and corrective action** — launch, monitor field and line performance, and close the loop with continuous improvement.

The phased structure exists so that risk is retired early. A late-discovered tooling flaw is far costlier than the same flaw caught in phase two.

### DFMEA, PFMEA and design reviews

The DFMEA owns design risk: what happens if a feature fails, and how severe, frequent and detectable that is. The PFMEA owns process risk: what happens at the machine, and how the control plan catches it. Design reviews at each gateway confirm that actions from both analyses are closed and that the prototype evidence supports moving on. The control plan is the living document that records the characteristics to control, the method, the frequency and the reaction plan.

### Measurement Systems Analysis

Before trusting any dimensional or feature data, the measurement system must be proven. A Gage R&R study quantifies repeatability and reproducibility as a percentage of study variation (%GRR). The accepted target is %GRR ≤ 10 % for a capable system, with up to 30 % tolerated only where the characteristic is non-critical and the risk is accepted. A second metric, the number of distinct categories (ndc), should be ≥ 5 so the gauge can distinguish parts. A third view, the precision-to-tolerance (P/T) ratio, should be < 10 %. A gauge that fails MSA invalidates every capability number built on it.

### Statistical Process Control and capability

SPC applies control charts to detect special-cause variation in real time. Capability indices then summarize the process spread against the tolerance. A common acceptance is Cpk ≥ 1.33 for critical characteristics and Cpk ≥ 1.67 for safety- or regulatory-critical characteristics, implying the process sits comfortably inside the tolerance band. These thresholds are CSRs, so the exact value must be read from the customer.

```
Cpk = min( (USL - μ) / (3σ), (μ - LSL) / (3σ) )
```

### PPAP elements and submission

A full PPAP file contains up to 18 elements, including the design record, authorized engineering change, customer engineering approvals, DFMEA and PFMEA, process flow diagram, control plan, dimensional results, material and performance test results, laboratory qualification, MSA studies, process capability studies, production trial run, initial process studies, qualifying balancing, compliant labeling, sample product, master sample, and the Part Submission Warrant (PSW). Submission levels 1 through 5 set how much of this the customer receives, from a PSW only (level 1) to the full file with samples and records (level 3, the default) up to retained-at-supplier with full evidence available (level 5). The PSW is the supplier's sign-off that the part meets all requirements.

## Engineering Parameters

The table lists the numeric acceptance gates most often contested at validation.

| Parameter | Typical Target | Units | Notes / Driver |
|-----------|----------------|-------|----------------|
| Gage R&R (%GRR) | ≤ 10 (≤30 max) | % | MSA study variation |
| ndc | ≥ 5 | count | Distinct categories |
| P/T ratio | < 10 | % | Precision to tolerance |
| Cpk critical | ≥ 1.33 | index | Two-sided characteristic |
| Cpk safety | ≥ 1.67 | index | Regulatory/safety |
| PPAP levels | 1–5 | level | 3 default submission |
| Run-at-rate | 1–8 | hours | Customer-defined |
| Trial build QTY | 300 | pieces | Typical PPAP sample |

These numbers shift with customer and characteristic class. A non-critical cosmetic feature may carry no Cpk requirement, while a crimp that retains a high-voltage busbar will demand 1.67 with documented reaction plans. The run-at-rate duration is set by the OEM's CSR and is the proof that takt time is real, not theoretical.

## Manufacturing Considerations

APQP success depends on cross-functional timing more than on any single document. The process, tooling and quality plans must be ready before the validation build, or the trial run produces unusable data. Tooling tryout (see tooling lead-time guidance) must be scheduled so that production-intent dies, not prototype soft tools, make the PPAP parts.

Capacity verification is a manufacturing deliverable. PPAP is rejected if the process cannot hold rate, so line balancing, fixture availability and operator training must be proven during the trial. Secondary operations such as trimming, machining and coating must also be at production intent, because a PPAP made on a bench process does not represent the shipping process.

Record retention matters. Customers may audit PPAP evidence years into production, so the master sample, control plan revisions and MSA files should be archived against the part number and change level.

## Common Mistakes

- **Mistake:** Running PPAP on prototype tooling — **Why it fails:** Does not represent production capability — **Fix:** Use production-intent dies and process.
- **Mistake:** Skipping MSA before capability — **Why it fails:** Cpk built on a bad gauge is meaningless — **Fix:** Qualify the gauge first with %GRR and ndc.
- **Mistake:** Treating level 3 as maximum disclosure — **Why it fails:** Some CSRs demand level 5 retention — **Fix:** Confirm submission level per customer.
- **Mistake:** Signing PSW before all elements complete — **Why it fails:** Warrant becomes false — **Fix:** Close every element and attach evidence.
- **Mistake:** No reaction plan in control plan — **Why it fails:** Out-of-control point has no defined action — **Fix:** Write the response for each characteristic.
- **Mistake:** Freezing DFMEA but not PFMEA — **Why it fails:** Process risk stays invisible — **Fix:** Maintain both through launch.
- **Mistake:** Missing run-at-rate proof — **Why it fails:** Takt unverified, line overloads — **Fix:** Demonstrate sustained rate with data.

## Related Articles

- [IATF 16949 Explained: Automotive Quality System Basics]({{< relref "iatf-16949-overview.md" >}})
- [Building an RFQ Package for Castings and Machined Parts]({{< relref "../supplier-selection/rfq-package-and-quoting.md" >}})
- [Inspection and Acceptance Criteria for Production Parts]({{< relref "../supplier-selection/inspection-and-acceptance-criteria.md" >}})
- [Tooling Lead Time and Tryout: From Kickoff to T1 and T2]({{< relref "../tooling/tooling-lead-time-and-tryout.md" >}})

## References

1. **AIAG** — APQP Reference Manual, the phased planning method used across the supply chain.
2. **AIAG** — PPAP Reference Manual, defining the 18 elements and submission levels.
3. **AIAG** — MSA Reference Manual, covering Gage R&R, ndc and P/T acceptance.
4. **AIAG** — SPC Reference Manual, describing control charts and Cpk indices.
5. **ISO 7870** — Control charts, general guidance for SPC practice.
