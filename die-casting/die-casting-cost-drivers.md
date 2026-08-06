---
title: "Die Casting Cost Drivers: How Casting Prices Are Built"
description: "How die casting prices are built: alloy cost and gross-to-net yield, machine tonnage rate, cycle time, tooling amortisation, secondary operations and scrap."
keywords: ["die casting cost", "casting price breakdown", "machine hourly rate", "tooling amortisation", "casting yield", "die casting quotation"]
category: "die-casting"
reading_time: "10 min"
last_updated: "2026-08-06"
---

# Die Casting Cost Drivers: How Casting Prices Are Built

## Introduction
A die casting quotation usually arrives as a single number with a tooling figure beside it. Behind that number is a build-up of six or seven elements, each governed by a different mechanism and each responding to a different kind of design or commercial change. A buyer who understands the build-up can tell which parts of a price are negotiable, which are structural, and which will move when volumes or alloy markets change. A buyer who cannot will negotiate on the wrong line.


This chapter builds the cost model element by element, gives indicative ranges with the caveats they require, and identifies the design decisions with the largest leverage. Ranges quoted here are order-of-magnitude figures for orientation; absolute values vary widely with region, energy prices and the alloy market.
## Technical Explanation

### The cost build-up

A production piece price decomposes as:

```
Price = C_metal + C_cell + C_secondary + C_quality + C_tooling + Overhead + Margin
```

Each element behaves differently.

**C_metal** is the cost of the alloy actually consumed, not the mass of the part. **C_cell** is machine time, and it is a rate multiplied by a cycle. **C_secondary** is everything after the casting machine. **C_quality** is scrap and inspection. **C_tooling** is either a separate capital line or an amortised per-piece adder. Overhead and margin sit on top.

### Metal cost and the gross-to-net problem

The metal that must be melted for each part includes the casting, the runner, the biscuit, the overflows and the flash. That gross shot weight commonly runs 1.4 to 2.5 times the net part weight, meaning a casting yield of 40–70 %.

Returns are recycled internally, but not for free. Each remelt cycle loses 2–5 % of the returned metal to dross and oxidation, and remelting consumes energy. The practical accounting is:

```
C_metal = (m_gross × p_alloy) − (m_return × p_alloy × r_recovery)
```

with `r_recovery` typically 0.85–0.95 once melt loss and remelt energy are deducted.

The consequence is that casting yield is a real cost lever, but a dangerous one. Cutting overflow volume improves yield and degrades casting quality, and the scrap cost usually exceeds the metal saved. The productive route to better yield is a more compact runner layout and a higher cavity count, not smaller overflows.

Alloy price is the element neither party controls. Secondary aluminum casting alloy pricing tracks primary aluminum, scrap availability and alloying element costs. Long-term agreements normally carry a metal price adjustment clause indexed to a published benchmark, precisely so that neither side is speculating on the metal market.

### Machine rate and cycle time

Cell cost is straightforward arithmetic:

```
C_cell = (t_cycle / 3600) × R_machine / n_cavity
```

`R_machine` is a fully burdened hourly rate covering machine depreciation, the furnace, robot, spray unit, trim press, direct labour, energy and the plant overhead allocated to that cell. It scales strongly with tonnage, because larger machines cost more, consume more energy and occupy more floor.

Cycle time is dominated by solidification, which scales roughly with the square of the governing wall thickness, plus the fixed elements of die open, extract, spray and close. Two implications follow. Reducing nominal wall from 3.5 mm to 2.5 mm cuts far more than the material; it cuts cycle time. And on short-cycle thin-wall parts, spray and handling can be a larger share of the cycle than solidification, so automation improvements pay more than cooling improvements.

Machine selection is where suppliers differ most. A part needing 700 tonnes run on a 1,600 tonne machine carries the larger machine's rate for no benefit. Clamp force required is:

```
F_clamp = A_projected × P_intensification × SF
```

If the calculated requirement is well below the machine being quoted, the reason is worth asking about.

### Cavity count

Adding cavities divides machine time per part but multiplies die cost, projected area and therefore required tonnage. The optimum is a genuine calculation, not a rule.

A second cavity roughly halves cell cost per part while adding perhaps 60–80 % to die cost and pushing the job onto a larger machine. At 20,000 pieces per year that trade rarely pays; at 300,000 it almost always does. Multi-cavity dies also concentrate risk: a damaged cavity takes the whole tool out of production.

### Secondary operations

For a machined housing, secondary operations frequently exceed the casting cost. Machining is usually the largest single element, driven by the number of setups more than by the volume of metal removed. A part that can be finished in one operation costs dramatically less than one requiring three fixtures.

Leak testing, impregnation and surface finishing are step changes rather than gradual costs. A part is either in a leak-tested flow or it is not.

### Scrap and the cost of quality

Scrap is expensive out of proportion to its rate because a part scrapped after machining carries all the value added up to that point. Internal scrap rates of 2–8 % are normal for general castings; leak-tight and structural parts run higher, and 10–20 % is not unusual during launch.

Scrap discovered late is the worst case. This is why the sequencing of inspection matters commercially as well as technically: find the porosity before the machining operation, not after it.

### Tooling and amortisation

Die cost is driven by projected area, cavity count, number and complexity of slides, cavity geometry, steel grade and heat treatment specification, texture requirements, vacuum sealing, and the spare inserts ordered with the tool. A trim die, and often a machining fixture, must be added.

Commercially there are two models. **Paid tooling** means the customer pays the tool cost upfront and normally owns the die, with ownership, storage, maintenance and transfer conditions set out in a tooling agreement. **Amortised tooling** means the supplier funds the tool and recovers it through a per-piece adder over an agreed volume:

```
C_tooling_per_piece = Tool_cost / N_amortisation
```

Amortised tooling improves the customer's cash position and transfers risk to the supplier, who prices that risk in. It also creates a dispute if the programme volume falls short of `N_amortisation`, so the shortfall treatment must be agreed in writing at the outset.

## Engineering Parameters

| Cost Element | Indicative Share of Piece Price | Primary Driver | How to Influence It |
|---|---|---|---|
| Metal, net of returns | 25–40 % | Gross shot weight and alloy price | Reduce nominal wall; improve runner compactness |
| Casting cell (machine + labour) | 20–30 % | Cycle time, machine tonnage, cavity count | Right-size the machine; reduce wall thickness |
| Trim and deburr | 3–8 % | Cut perimeter, edge specification | Simplify parting line; define edge break narrowly |
| Machining | 15–35 % | Number of setups, feature count | Design for a single setup; core features where possible |
| Surface finish, impregnation, leak test | 3–10 % | Specification step changes | Confirm the requirement is genuinely needed |
| Scrap and inspection | 2–8 % | Process capability, defect discovery point | Move inspection earlier in the sequence |
| Tooling amortisation | 0–15 % | Tool cost and amortisation volume | Reduce slides; agree the amortisation base |
| Overhead and margin | 10–20 % | Supplier structure and risk | Volume commitment, payment terms, programme length |

**Indicative machine hourly rate by tonnage**

| Machine size | Indicative burdened rate | Typical part mass | Notes |
|---|---|---|---|
| 250–400 t | Low band | 0.05–0.5 kg | Small brackets, connectors, covers |
| 600–900 t | Low to mid band | 0.3–1.5 kg | Housings, pump bodies |
| 1,200–1,600 t | Mid band | 1–4 kg | Transmission covers, e-motor housings |
| 2,500–3,500 t | High band | 3–12 kg | Large structural housings, battery components |
| 4,000 t and above | Very high band | 10–100 kg | Large structural and megacasting applications |

Absolute hourly rates are deliberately not given as currency figures; they vary by a factor of three or more between regions and move with energy prices. What is stable is the ratio: a 3,000 tonne cell typically costs three to five times more per hour than a 400 tonne cell. That ratio is what should drive machine selection scrutiny during quote analysis.

**Other cost-relevant parameters**

| Parameter | Typical Range | Units | Notes |
|---|---|---|---|
| Casting yield (net / gross) | 40–70 | % | Lower on thin-wall parts with large overflows |
| Remelt recovery on returns | 85–95 | % | Melt loss and remelt energy deducted |
| Internal scrap rate, general parts | 2–8 | % | Higher during launch |
| Internal scrap rate, leak-tight parts | 5–20 | % | Discovery point drives the cost impact |
| Die change time | 2–6 | h | Sets the economic minimum batch size |
| Startup scrap after die change | 10–30 | shots | Die reaching thermal steady state |
| Aluminum melting energy | 500–900 | kWh/tonne | Practical furnace figures including holding |
| Die life, aluminum H13 | 80,000–150,000 | shots | Cavity inserts refurbished within this |


- **Ask for the cost build-up, not just the price.** A structured breakdown by the elements above makes it possible to compare suppliers meaningfully and to see which one has mispriced something.
- **Check the quoted machine against the calculated tonnage.** Projected area times intensification pressure times 1.2–1.5 gives the requirement. A large discrepancy is either a capability constraint at that supplier or an error.
- **Minimum order quantity is a real constraint, not a negotiating position.** A die change of two to six hours plus 10–30 startup shots has to be recovered across the batch. Small, frequent orders raise the effective piece cost whatever the price list says.
- **Specification creep is the most common cost escalation.** Adding a leak test, a cosmetic class or a heat treatment after tooling release changes the process route and sometimes the alloy. Freeze these before the die is cut.
- **Understand what the tooling price includes.** Spare inserts, the trim die, machining fixtures, gauges and a defined number of tryout iterations may or may not be in the quoted figure. Ask explicitly.
- **Energy and alloy indexation protect both sides.** Fixing a price for three years without an adjustment mechanism means the supplier prices in the risk, and the customer pays for it whether or not the risk materialises.
- **Localisation changes the ratios, not the structure.** Metal is a global commodity, so its share of cost is broadly similar everywhere. Labour-intensive secondary operations vary far more, which is why machining content usually decides where a part is best made.


## Manufacturing Considerations
## Common Mistakes
- **Mistake:** Negotiating hard on the metal line while ignoring machine selection — **Why it fails:** metal is a commodity with a thin margin, whereas running a part on an oversized machine can add more to the price than the entire negotiable metal margin — **Fix:** verify the tonnage calculation first, then discuss metal indexation.
- **Mistake:** Using part net weight to estimate cost — **Why it fails:** the supplier must melt 1.4 to 2.5 times that mass, so an estimate based on net weight understates metal cost substantially — **Fix:** estimate on gross shot weight and apply a recovery credit on returns.

## Related Articles

- [Die Casting DFM: Wall Thickness, Draft Angles and Ribs](./die-casting-dfm-guidelines.md)
- [Die Casting Trimming, Deburring and Secondary Operations](./trimming-and-secondary-operations.md)
- [Building an RFQ Package for Castings and Machined Parts](../supplier-selection/rfq-package-and-quoting.md)
- [Tooling Ownership, IP and Supply Agreements Explained](../supplier-selection/tooling-ownership-and-contracts.md)
- [How to Choose a Die Casting Supplier: Evaluation Guide](../supplier-selection/choosing-a-die-casting-supplier.md)

## References

1. **NADCA Product Specification Standards for Die Castings** — Provides the tolerance, quality class and process capability definitions that determine which cost adders apply to a given specification. https://www.nadca.com
2. **London Metal Exchange (LME)** — Publishes the aluminum price benchmarks commonly referenced in metal indexation clauses in casting supply agreements. https://www.lme.com
3. **ASTM B85 / B85M — Standard Specification for Aluminum-Alloy Die Castings** — Defines the alloy grades whose market pricing forms the metal element of a casting quotation. https://www.astm.org
4. **ASM International, ASM Handbook Volume 15: Casting** — Background on casting yield, melt loss and the energy requirements of melting and holding aluminum. https://www.asminternational.org
5. **AIAG Production Part Approval Process (PPAP) Reference Manual** — Sets out the qualification activity whose cost is carried in launch pricing for automotive castings. https://www.aiag.org
6. **DieCastor** — Die casting industry resource covering tooling construction, machine selection and production cost structure. https://www.diecastor.com
