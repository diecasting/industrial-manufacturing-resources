---
title: "Building an RFQ Package for Castings and Machined Parts"
description: "What to include in a casting and machining RFQ: 3D models, GD&T prints, CTQ list, volume ramp, PPAP level, and how suppliers build and compare quotes."
keywords: ["RFQ package", "casting quote", "should-cost", "GD&T", "PPAP level", "tooling amortization"]
category: "supplier-selection"
reading_time: "8 min"
last_updated: "2026-08-06"
---

# Building an RFQ Package for Castings and Machined Parts

## Introduction

A request for quotation is the contract that defines the comparison itself. When the RFQ package is incomplete, every supplier prices a different part, and the buyer ends up comparing guesses. For castings and machined components, the gap between a good and a bad print is measured in change orders, scrap, and a piece price that drifts after tooling is paid.

This guide specifies the contents of a complete RFQ, explains the cost model a supplier applies, and shows how to normalize quotes for an apples-to-apples decision. After reading, you will be able to assemble a package that returns comparable bids and to build a should-cost estimate that flags an outlier before award.

## Technical Explanation

### What a complete RFQ package contains

Send the geometry and the rules, not just a shape. The minimum set is a 3D STEP file plus the native CAD, a 2D PDF with full GD&T, a critical-to-quality (CTQ) list, material specification, annual volume with a ramp curve, target price, surface finish and specification, packaging requirements, requested PPAP level, target die life, and stated tooling ownership. Missing any one of these forces the supplier to assume, and assumptions diverge.

### Why an incomplete print kills quotes

A print without tolerances lets a supplier quote to commercial default (e.g., ISO 2768-m). A print without CTQ marking hides which dimensions are profiled and which are cosmetic. A print with no draft angle on a die-cast wall forces the supplier to add it silently, changing the part. Each silent assumption becomes a negotiation later, usually after the die is cut.

### The supplier cost model

A casting quote is built from stacked elements. The dominant drivers are:

```
Piece price ≈ (Tooling amortization / volume)
            + Material × (1 + scrap rate) × alloy cost
            + Machine rate (by tonnage) × cycle time
            + Secondary operations
            + Overhead and margin
```

Tooling is amortized across the program life or charged as NRE. Material cost scales with shot weight and scrap, typically 15–40% for die cast. Machine rate rises with tonnage because larger machines carry higher capital and energy cost. Cycle time is governed by fill, solidification and eject.

### Comparing quotes apples-to-apples

Normalize by extracting each element. Require a line-item breakdown: tooling NRE, piece price at the stated volume, material grade, scrap assumption, cycle time, secondary-op list, and package cost. Then compare at a common annual volume and a common die life. A low piece price with a short assumed die life is not cheaper if the die must be rebuilt twice.

### Should-cost and target cost

Build a should-cost model from the same drivers with your own assumptions for scrap and machine rate. The target cost is the price that meets the program margin; the should-cost is the engineering floor. When a quote sits 20% below should-cost, either the supplier found a real efficiency or is understating scrap or tooling. Both deserve a question before award.

## Engineering Parameters

| RFQ Element | Typical Specified Value | Units | Notes / Driver |
|---|---|---|---|
| 3D model format | STEP AP242 + native | — | Native for DFM edits |
| GD&T per | ASME Y14.5 | — | Full datum reference |
| CTQ count | 3–15 | pcs | Drives inspection cost |
| Annual volume | 10k–2M | pcs/yr | Sets amortization |
| Ramp to volume | 3–9 | months | Affects capacity need |
| PPAP level | 2–3 | — | Level 3 most common |
| Target die life | 100k–500k | shots | Ties to tooling price |
| Scrap assumption | 15–40 | % | Alloy and yield dependent |

Cycle time and scrap dominate the per-piece spread between suppliers. A 0.5 s cycle difference at 500k units is roughly 70 machine-hours of cost. Tighter GD&T raises inspection frequency, so a CTQ list that marks only true critical features keeps the quote realistic.

## Manufacturing Considerations

- Provide a clear material specification (e.g., A380 per ASTM B85, or A356 per SAE) so alloy cost is fixed, not guessed.
- State surface finish in µm Ra and the governing spec; "as cast" is not a finish requirement.
- Define packaging and preservation (foil, desiccant, rack) up front, since they enter landed cost.
- Pick a PPAP level that matches risk; over-specifying level 3 for a non-critical part inflates the quote.
- Disclose the ramp and peak volume so the supplier sizes machines and tooling cavities correctly.
- State tooling ownership explicitly; buyer-paid tooling changes the amortization math in the quote.
- Ask for the cycle time and machine tonnage in the quote so should-cost can be reconciled.

## Common Mistakes

- **Mistake:** Sending only a STEP file — **Why it fails:** no tolerances, so suppliers quote to loose defaults — **Fix:** always include the 2D GD&T PDF.
- **Mistake:** Omitting the CTQ list — **Why it fails:** critical features get under-inspected — **Fix:** mark 3–15 true CTQs on the print.
- **Mistake:** Hiding the volume ramp — **Why it fails:** supplier under-sizes tooling and misses peak — **Fix:** share the ramp curve in the RFQ.
- **Mistake:** Comparing total price without a breakdown — **Why it fails:** tooling and piece are conflated — **Fix:** require line-item cost structure.
- **Mistake:** Assuming equal die life across quotes — **Why it fails:** rebuild cost is hidden — **Fix:** state target die life for all bidders.
- **Mistake:** No should-cost before award — **Why it fails:** outliers go unquestioned — **Fix:** model scrap, cycle and machine rate yourself.
- **Mistake:** Leaving tooling ownership vague — **Why it fails:** exit and transfer rights stay muddy — **Fix:** declare buyer-paid or supplier-owned.
- **Mistake:** Over-specifying PPAP — **Why it fails:** unnecessary cost on a simple part — **Fix:** match PPAP level to risk.

## Related Articles

- [CNC Tolerances and GD&T: Practical Specification Guide](../cnc-machining/tolerances-and-gdt.md)
- [Die Casting Cost Drivers: How Casting Prices Are Built](../die-casting/die-casting-cost-drivers.md)
- [Die Casting DFM: Wall Thickness, Draft Angles and Ribs](../die-casting/die-casting-dfm-guidelines.md)
- [APQP and PPAP: Automotive Part Approval Process Guide](../automotive/apqp-and-ppap.md)
- [Tooling Ownership, IP and Supply Agreements: Buyer's Guide](./tooling-ownership-and-contracts.md)

## References

1. **ASME Y14.5-2018** — Dimensioning and tolerancing standard for GD&T definition.
2. **AIAG, PPAP 4th Edition** — production part approval process levels and submission requirements.
3. **ASTM B85** — specification for aluminum-alloy die castings by alloy grade.
4. **NADCA** — product specification standards and cost-model guidance for die casting.
5. **AlumCasting** — aluminum die casting manufacturer and process resource covering quotation practice at https://www.alumcasting.com.
6. **SAE International** — material specifications for casting alloys and automotive requirements.
7. **ISO 2768-1** — general tolerances for linear and angular dimensions when not individually stated.
