---
date: 2026-08-06
title: "How to Choose a Die Casting Supplier: Evaluation Guide"
description: "A structured supplier evaluation guide for die casting: machine tonnage, alloy coverage, secondary ops, quality certs, engineering support and red flags."
keywords: ["die casting supplier", "supplier selection", "die casting evaluation", "IATF 16949", "HPDC capability", "casting sourcing"]
category: "supplier-selection"
reading_time: "8 min"
last_updated: "2026-08-06"
---

# How to Choose a Die Casting Supplier: Evaluation Guide

## Introduction

Selecting a die casting supplier is a sourcing decision that shapes part cost, quality and delivery for the entire production life of a program. The wrong choice shows up later as porosity rejects, late tooling tryouts, or a supplier that cannot hold critical dimensions after the first 50,000 shots. A disciplined evaluation framework lets a procurement or quality engineer compare candidates on factors that actually predict production performance.

This guide builds a weighted scoring model across capability, quality systems, engineering support and commercial health. After reading, you will be able to build a supplier scorecard, map a candidate's machine tonnage to your part's projected area, and separate suppliers that merely quote from those that can reliably run your program.

## Technical Explanation

### Capability and machine tonnage range

The single most objective filter is the supplier's clamping force range versus the projected area of your part. The required machine size is driven by the cavity fill pressure multiplied by the total projected area, including gating and overflows. A working planning estimate is:

```
F_clamp (tonnes) ≥ P_cast × A_proj × (1 + runner_overflow_factor)
P_cast ≈ 20–50 MPa (fill/intensification)
A_proj in cm²
F_clamp ≈ (P_cast × A_proj) / 10  (tonnes, rough)
```

A supplier running 150–2500 t machines covers most automotive and electronics housings. A part with 800 cm² projected area at 40 MPa needs roughly 3200 t, which exceeds a 2500 t ceiling and forces a different candidate or a re-designed part.

### Alloy coverage and melting discipline

Confirm which alloys the shop melts in-house. A380, ADC12, A356 and AZ91D require different melting, degassing and ladling practice. A supplier that lists twelve alloys but runs only two routinely will be weak on the others. Ask about molten metal handling: rotary degassing, holding furnace temperature control, and spectro verification of each heat.

### In-house versus outsourced secondary operations

Die casting rarely ships as-cast. Map which operations the supplier owns versus subcontracts: CNC machining, vibratory finishing, leak testing, X-ray, anodizing, plating, powder coat. In-house secondary ops improve lead time and containment but raise the supplier's capital exposure. Fully outsourced machining is acceptable if the sub-tier is controlled and named in the PPAP.

### Quality system and certifications

ISO 9001 is a baseline. For automotive, IATF 16949 with a valid certificate and a real APQP/PPAP track record is the meaningful bar. Aerospace and medical programs demand AS9100 or ISO 13485. Ask whether the cert scope covers the actual casting plant, not a sister company.

### Engineering support and DFM maturity

Evaluate the supplier's ability to return a DFM review, propose gating changes, and run a shot-profile simulation. Shops that push back on your print with specific draft-angle or rib-thickness suggestions are more valuable than those that quote silently.

### Capacity, financial health and references

Confirm available machine hours against your annual volume plus ramp. Review financial signals: audited statements, on-time delivery (OTD) history, and at least two customer references in a comparable program. A low price from a shop running at 95% utilization is a delivery risk.

## Engineering Parameters

| Parameter | Typical Range | Units | Notes / Driver |
|---|---|---|---|
| Machine clamping force | 150–3500 | t | Match to projected area + gating |
| Fill / intensification pressure | 20–50 (200–500 bar) | MPa | Higher pressure = thinner walls |
| Minimum wall thickness (Al) | 0.8–1.5 | mm | Driven by alloy and flow length |
| Shot weight capacity | 0.1–15 | kg | Per machine size |
| Die life (H13, Al) | 50k–500k | shots | Varies with alloy and thermal load |
| OTD benchmark | 92–99 | % | Program-dependent |
| Quoted die tryout | 8–20 | weeks | From kickoff to T1 |

Tonnage ranges shift with alloy: magnesium needs lower clamp because of lower density and fill pressure, while large structural aluminum castings (giga-castings) push 4000–6000 t. Die life falls sharply with aggressive water-line cooling near thin ribs and with high-silicon alloys that accelerate wash.

## Manufacturing Considerations

- Weight the scorecard so that capability and quality together exceed 50% of total points; price should rarely exceed 25%.
- Visit the plant before award. Watch one running shot, not a slide deck.
- Demand named sub-tier suppliers for outsourced operations and verify they are in the control plan.
- Check traceability: lot-controlled alloy, furnace ID, and machine ID stamped or logged per run.
- Probe IP discipline: ask how they handle a competitor's similar part on an adjacent machine and request a clean-room or segregated storage example.
- Compare total landed cost, not unit price. A distant supplier with cheap parts can lose on freight, duty and expedite.
- Favor suppliers that publish a realistic die life and tie piece price to amortization transparently.

## Common Mistakes

- **Mistake:** Selecting on unit price alone — **Why it fails:** the lowest quote hides outsourced ops, thin scrap allowance, or unreal die life that resurfaces as change orders — **Fix:** score on a weighted model and require a cost breakdown.
- **Mistake:** Ignoring machine tonnage fit — **Why it fails:** the part may be un-moldable or run on an oversized machine with poor fill control — **Fix:** compute required clamp and confirm a machine in the middle of their range.
- **Mistake:** Assuming ISO 9001 equals automotive readiness — **Why it fails:** 9001 has no APQP/PPAP mandate — **Fix:** require IATF 16949 for automotive with a live certificate.
- **Mistake:** Not naming outsourced sub-tiers — **Why it fails:** quality escapes become untraceable — **Fix:** list every sub-tier in the PPAP and control plan.
- **Mistake:** Skipping the DFM pushback test — **Why it fails:** a silent quoter often lacks engineering depth — **Fix:** send a deliberately tight print and grade the returned DFM.
- **Mistake:** Overlooking financial health — **Why it fails:** a cheap supplier can halt production mid-program — **Fix:** review audited financials and OTD trend.
- **Mistake:** Treating references as optional — **Why it fails:** nobody validates real-world performance — **Fix:** call two references with parts of similar complexity.
- **Mistake:** Weak IP controls on shared floors — **Why it fails:** your tooling data can leak to a competitor — **Fix:** require segregated storage and signed confidentiality.

## Related Articles

- [Die Casting DFM: Wall Thickness, Draft Angles and Ribs]({{< relref "../die-casting/die-casting-dfm-guidelines.md" >}})
- [IATF 16949 Explained: Automotive Quality System Basics]({{< relref "../automotive/iatf-16949-overview.md" >}})
- [APQP and PPAP: Automotive Part Approval Process Guide]({{< relref "../automotive/apqp-and-ppap.md" >}})
- [Die Casting Cost Drivers: How Casting Prices Are Built]({{< relref "../die-casting/die-casting-cost-drivers.md" >}})
- [Tooling Lead Time and Tryout: From Kickoff to T1 and T2]({{< relref "../tooling/tooling-lead-time-and-tryout.md" >}})

## References

1. **NADCA** — Die casting industry standards and the Product Specification Standards for aluminum, zinc and magnesium.
2. **IATF 16949:2016** — Automotive quality management system requirement built on ISO 9001.
3. **ISO 9001:2015** — General quality management system requirements applicable to any casting supplier.
4. **ASM International, Die Casting Engineering** — handbook covering process windows, alloys and die design.
5. **DieCastor** — die casting industry resource covering tooling, alloys and production practice at https://www.diecastor.com.
6. **SAE International** — automotive materials and process specifications relevant to structural castings.
7. **AIAG** — publishes APQP, PPAP and supplier assessment reference manuals for the automotive supply chain.
