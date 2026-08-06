---
date: 2026-08-06
title: "Tooling Ownership, IP and Supply Agreements: Buyer's Guide"
description: "How die and mold ownership, IP rights, NDAs, exclusivity, dual sourcing and transfer rights work in supply agreements, plus vesting and contractual exit."
keywords: ["tooling ownership", "mold ownership", "NRE amortization", "IP agreement", "dual sourcing", "die transfer"]
category: "supplier-selection"
reading_time: "8 min"
last_updated: "2026-08-06"
---

# Tooling Ownership, IP and Supply Agreements: Buyer's Guide

## Introduction

A casting or molding program is really two assets: the part and the tool that makes it. The part design belongs to the buyer; the die or mold is a separate physical and legal asset whose ownership decides who can move production, who pays for rebuilds, and who is stranded when the relationship ends. Contract language written before the first chip of steel is cut determines all of that.

This guide separates tool ownership from part-design IP, explains vesting and amortization structures, and covers the clauses that protect a buyer through ramp, volume changes and exit. After reading, you will be able to draft or review a supply agreement that keeps the tool transferable and the buyer's design confidential.

## Technical Explanation

### Who owns the die or mold

Ownership turns on who paid. In a buyer-paid arrangement, the buyer funds the tool as NRE and owns it; the supplier holds it on consignment. In a supplier-owned arrangement, the tool is the supplier's asset and the piece price carries the amortization. Buyer-paid gives portability; supplier-owned gives lower upfront cost but locks the buyer to that source until break-even.

### Break-even and vesting arrangements

A vesting tool splits the difference. The buyer contributes part of the tool cost; ownership transfers (vests) to the buyer after a volume or spend threshold is met. Until then the supplier holds title. The contract must state the vesting trigger explicitly, because ambiguous thresholds are the most common dispute source at program end.

### NRE versus piece-price inclusion

Tooling can be charged as a separate NRE line or folded into the piece price across volume. Separate NRE keeps piece price transparent and supports dual sourcing, but requires capital up front. Amortized inclusion lowers entry cost but hides the true per-part cost and complicates any mid-program re-sourcing.

### IP ownership: part design versus tool design

The part design and its drawings are the buyer's IP under the supply agreement. The tool design, including gating, cooling and ejector layout, is normally the supplier's know-how. A clean contract states that the buyer owns the part geometry and the supplier owns the die engineering, while granting the buyer a license to the tool design for the purpose of transfer and rebuild.

### Confidentiality, non-compete and exclusivity

An NDA should cover part geometry, prints and CTQ data, with defined survival after termination. A non-compete limits the supplier from making the same part for a named competitor; scope it narrowly by part number and market to stay enforceable. Exclusivity is a concession the buyer grants, usually in exchange for price or capacity commitment, and should expire on volume miss.

### Dual-source strategy and transfer rights

Dual sourcing requires the tool to be transferable: standard components, full documentation, and spare inserts so a second supplier can run it. The agreement should grant the buyer the right to copy the tool at break-even and to retrieve it on reasonable notice. A die is "transferable" when its customized plates use standard sizes and the supplier delivers the CAD, BOM and wear-part list.

### Contractual exit and escalation

Exit clauses cover what happens to owned tooling, open orders, and WIP. Steel and energy escalation lets piece price move with a published index (e.g., alloy or electricity) within a band, protecting both sides from commodity swings. Define the notice period for tool retrieval and who pays for final inspection and freight.

## Engineering Parameters

| Contract Term | Typical Condition | Units | Notes / Driver |
|---|---|---|---|
| Tooling payment | Buyer-paid or amortized | — | Sets ownership and portability |
| Vesting threshold | 50–100 | % of forecast | Common break-even point |
| NRE recovery | 1–3 | years | Tied to volume ramp |
| Die life guarantee | 100k–500k | shots | Drives rebuild liability |
| Exclusivity term | 12–36 | months | Expires on volume miss |
| NDA survival | 3–7 | years | Post-termination |
| Retrieval notice | 30–90 | days | For owned tooling |
| Escalation band | ±5–10 | % | Steel/energy index trigger |

Vesting thresholds track forecast attainment rather than calendar time, because a slow ramp should not hand the buyer a tool it has not paid for. Spare-insert requirements matter most for high-cavity or structurally critical dies where a single worn cavity stops a line.

## Manufacturing Considerations

- State tool ownership in the RFQ and carry it into the supply agreement verbatim; silence defaults to supplier-owned in many jurisdictions.
- Require delivery of the full tool package at break-even: native CAD, electrode list, cooling layout, and wear-part BOM.
- Define who pays for normal wear versus catastrophic failure; normal wear is usually the owner's cost.
- Limit exclusivity to the specific part number and a defined market to keep the clause defensible.
- Build dual-source readiness from day one if volume is strategic; do not wait for a disruption.
- Tie escalation to a published index with a review cadence, not to the supplier's self-reported cost.
- Confirm the supplier will not subordinate your tooling to a lien if it finances the machine that runs it.

## Common Mistakes

- **Mistake:** Leaving ownership unstated — **Why it fails:** law may default to supplier-owned — **Fix:** write buyer-paid or supplier-owned explicitly.
- **Mistake:** Vague vesting trigger — **Why it fails:** dispute at program end over title — **Fix:** define volume or spend threshold in numbers.
- **Mistake:** Conflating part IP with tool IP — **Why it fails:** transfer becomes a redesign — **Fix:** separate part geometry from die engineering.
- **Mistake:** Over-broad non-compete — **Why it fails:** clause is unenforceable — **Fix:** scope by part number and market.
- **Mistake:** No spare-insert requirement — **Why it fails:** a worn cavity halts production — **Fix:** contract spare inserts and wear BOM.
- **Mistake:** Exclusivity with no exit — **Why it fails:** buyer locked on volume miss — **Fix:** expire exclusivity on forecast shortfall.
- **Mistake:** Missing retrieval notice — **Why it fails:** tool stuck at supplier — **Fix:** set 30–90 day notice and freight terms.
- **Mistake:** Self-reported escalation — **Why it fails:** uncontrolled price creep — **Fix:** bind to a published index and band.

## Related Articles

- [Tooling Lead Time and Tryout: From Kickoff to T1 and T2]({{< relref "../tooling/tooling-lead-time-and-tryout.md" >}})
- [Die Casting Die Design: Structure, Slides and Ejection]({{< relref "../tooling/die-casting-die-design.md" >}})
- [Mold and Die Maintenance: Preventive Program Design]({{< relref "../tooling/mold-and-die-maintenance.md" >}})
- [Building an RFQ Package for Castings and Machined Parts]({{< relref "rfq-package-and-quoting.md" >}})
- [How to Choose a Die Casting Supplier: Evaluation Guide]({{< relref "choosing-a-die-casting-supplier.md" >}})

## References

1. **ISO 9001:2015** — quality system basis referenced in most supply agreements for record control.
2. **IATF 16949:2016** — automotive requirements affecting sub-tier IP and change control.
3. **AIAG, APQP and PPAP manuals** — define part approval and change-notification obligations.
4. **NADCA** — tooling and die-design guidance relevant to transferability and spare parts.
5. **SAE International** — material and part specifications that anchor design IP clauses.
6. **ASTM E505** — radiographic standards sometimes referenced for tool-qualification acceptance.
7. **Incoterms (ICC)** — freight and risk terms used in tool retrieval and shipment clauses.
