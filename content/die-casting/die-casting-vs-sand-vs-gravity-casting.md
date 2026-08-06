---
date: 2026-08-06
title: "Die Casting vs Sand Casting vs Gravity Casting Compared"
description: "Compare die casting, sand casting and gravity die casting on tolerance, wall thickness, mechanical properties, tooling cost, volume break-even and lead time."
keywords: ["die casting vs sand casting", "gravity die casting", "permanent mold casting", "casting process selection", "casting tolerance comparison", "casting cost comparison"]
category: "die-casting"
reading_time: "10 min"
last_updated: "2026-08-06"
---

# Die Casting vs Sand Casting vs Gravity Casting Compared

## Introduction
Process selection for an aluminum casting is usually settled by three questions: how many parts per year, how thin can the walls be, and does the part need to be heat treated or welded. Answer those honestly and the choice between high pressure die casting, gravity die casting and sand casting largely makes itself. Answer them optimistically and the programme discovers the mismatch at tool tryout, when changing course costs months.


This comparison sets out the differences quantitatively, explains the metallurgical reasons behind them, and gives break-even guidance for the volume ranges where more than one route is genuinely viable. It deliberately avoids declaring a winner, because the correct answer depends entirely on the part.
## Technical Explanation

### Mould material, fill mechanism and cooling rate

Sand moulds are formed around a pattern from silica sand bonded with clay and water (green sand) or with a chemical binder. Thermal conductivity is low, so the casting cools slowly — of the order of 0.1 to 1 K/s in a typical section.

Gravity die casting, also called permanent mould casting, pours metal into a preheated steel or cast iron mould under nothing but the head of the pouring basin. Cooling rates land roughly between 1 and 20 K/s. A tilt-pour variant rotates the mould during filling to keep the metal front calm.

High pressure die casting injects metal into a water-cooled steel die and holds it under 40–100 MPa while it freezes. Local cooling rates at the die face reach several hundred kelvin per second.

Cooling rate governs microstructure. Secondary dendrite arm spacing, the standard measure of structural fineness, runs roughly 50–100 µm in sand castings, 25–50 µm in gravity castings and 5–15 µm in die castings. Finer structure raises strength and improves fatigue behaviour, which is why an as-cast die casting can match the tensile strength of a heat-treated sand casting.

### The heat treatment divide

That advantage is offset by gas. Metal injected at 40 m/s entrains air, and the resulting pores are compressed to a small volume under intensification. Heat the casting above about 450 °C and the compressed gas expands, blistering the surface. Conventional HPDC parts therefore cannot be solution treated, and for the same reason they cannot reliably be fusion welded.

Sand and gravity castings fill slowly with an intact metal front and contain far less entrapped gas. Both are routinely solution treated and aged to T6, which for A356 raises yield strength substantially and, more importantly, delivers elongation in the 5–10 % range rather than 2–3 %.

Vacuum-assisted die casting closes part of this gap. Evacuating the cavity below about 50 mbar reduces gas content enough that structural alloys can be heat treated and welded, at the cost of a sealed die and a vacuum system.

### Tolerance and surface finish

Dimensional capability follows mould rigidity and repeatability. A sand mould is made fresh each cycle from a pattern, so pattern wear, ramming variation, mould wall movement under metallostatic pressure and core shift all contribute. ISO 8062 casting tolerance grades of DCTG 9–12 are typical for green sand, improving to DCTG 8–10 with chemically bonded sand.

A permanent mould does not vary between cycles except thermally, giving DCTG 7–9. A die casting die is more rigid still and thermally controlled, giving DCTG 4–6.

Surface finish follows the mould surface. Sand grain size sets a floor of roughly 6.3–25 µm Ra. A coated permanent mould gives 3.2–12.5 µm Ra, the coating texture being the limit. A polished die gives 0.8–3.2 µm Ra as cast.

The practical consequence is machining stock: 2–6 mm for sand, 1.5–3 mm for gravity, 0.5–1.0 mm for die casting. On a part with many machined faces, that difference alone can decide the economics.

### Geometric freedom and cores

Here the ranking reverses. Sand casting can form almost any internal cavity, because the core is destroyed after the pour and does not need to be withdrawn. Undercuts, re-entrant passages and complex water jackets are all straightforward.

Gravity die casting keeps most of that freedom by setting sand cores into a metal mould each cycle — the reason cylinder heads are made this way.

High pressure die casting cannot use conventional sand cores; the injection pressure would destroy them. Internal features must be formed by steel slides and pins that withdraw along a straight line. Anything that cannot be withdrawn must be machined afterwards or designed out. Soluble salt cores exist and are used in specific applications, but they remain a specialised solution rather than a general capability.

### Volume, tooling and lead time

The economics are a straightforward trade of tooling investment against piece cost. A sand pattern and core box set is comparatively inexpensive and can be produced in a few weeks. A gravity die costs several times more. A production HPDC die with slides, sealed for vacuum, costs several times more again and takes months to build and prove out.

Against that, cycle times differ by more than an order of magnitude, and so do labour content and machining stock. The crossover points depend on part size and complexity, but as a working guide sand dominates below roughly 1,000 pieces per year, gravity occupies the broad middle from about 1,000 to 20,000, and high pressure die casting takes over above roughly 10,000 to 20,000 where the geometry permits it.

## Engineering Parameters

| Characteristic | Sand Casting | Gravity Die Casting | High Pressure Die Casting |
|---|---|---|---|
| Mould type | Expendable sand | Reusable metal, coated | Reusable steel, water cooled |
| Fill mechanism | Gravity head | Gravity head or tilt pour | Injection at 30–60 m/s gate velocity |
| Applied pressure during freezing | None | None | 40–100 MPa |
| Cooling rate (typical section) | 0.1–1 K/s | 1–20 K/s | 100–1,000 K/s |
| Secondary dendrite arm spacing | 50–100 µm | 25–50 µm | 5–15 µm |
| Minimum wall thickness | 4–8 mm | 3–6 mm | 1.5–4 mm (0.8–1.2 mm thin wall) |
| Typical linear tolerance | ±0.8–2.0 mm | ±0.4–1.0 mm | ±0.1–0.3 mm |
| ISO 8062 tolerance grade | DCTG 8–12 | DCTG 7–9 | DCTG 4–6 |
| As-cast surface roughness | 6.3–25 µm Ra | 3.2–12.5 µm Ra | 0.8–3.2 µm Ra |
| Machining stock | 2–6 mm | 1.5–3 mm | 0.5–1.0 mm |
| Draft angle, external | 1–3° | 2–3° | 1–3° |
| Sand cores permitted | Yes, unrestricted | Yes | No (steel slides only) |
| Heat treatable to T6 | Yes | Yes | Only with vacuum assistance |
| Weldable | Yes | Yes | Not reliably, unless vacuum cast |
| Typical alloys | A356, A319, A206 | A356, A319, AlSi7Mg | A380, ADC12, A360, A413 |
| Cycle time per mould | 10–60 min | 3–10 min | 30–90 s |
| Casting yield (gross to net) | 40–60 % | 50–70 % | 40–70 % |
| Practical part size | Unlimited, tonnes | Up to roughly 50 kg | Typically under 10 kg; 100 kg on very large presses |
| Tooling lead time | 2–6 weeks | 8–16 weeks | 10–20 weeks |
| Relative tooling cost index | 1 | 3–8 | 10–30 |
| Economic annual volume | Below ~1,000 | ~1,000–20,000 | Above ~10,000–20,000 |

**Representative mechanical properties, aluminum**

| Route and condition | Tensile strength | Yield strength | Elongation |
|---|---|---|---|
| A356-T6, sand cast | 230–260 MPa | 165–200 MPa | 3–5 % |
| A356-T6, gravity die cast | 270–310 MPa | 200–240 MPa | 5–10 % |
| A380 / ADC12, HPDC as cast | 300–330 MPa | 150–170 MPa | 2–3 % |
| AlSi10MnMg, vacuum HPDC, T7 | 250–290 MPa | 120–160 MPa | 10–15 % |

The property table repays careful reading. Conventional HPDC has the highest tensile strength on the list and the lowest elongation. If the design case is stiffness or static strength, that is acceptable. If it is crash energy absorption, fatigue near a stress raiser, or any application requiring plastic deformation before failure, the low elongation is disqualifying and the choice narrows to gravity, sand or vacuum HPDC with a structural alloy.

Ranges shift with section size and quality level. A thin, well-fed die casting section outperforms these figures; a heavy section with shrinkage porosity falls well below them. Sand casting properties improve substantially with chills, filtered pouring and hot isostatic pressing where the application justifies it.


- **Prototype route rarely matches production route.** A sand-cast or machined-from-billet prototype will not reproduce the microstructure, porosity or dimensional behaviour of a production die casting. Plan for a properties gap and validate on production-intent parts.
- **Design for one process, not for all three.** A geometry drafted to be castable by every route ends up with sand-casting wall thicknesses and die-casting tooling cost. Commit early.
- **Total cost, not piece price.** Machining stock, scrap rate, heat treatment and leak testing move the comparison substantially. A sand casting with 4 mm of stock on six faces can cost more to finish than a die casting costs in total.
- **Volume forecasts should be interrogated.** The break-even between gravity and HPDC is sensitive to annual volume and to programme life. A five-year programme at 15,000 per year amortises a die comfortably; an 18-month programme at the same rate may not.
- **Supply base differs.** Sand foundries, gravity foundries and HPDC plants are largely different companies with different equipment, quality systems and engineering strengths. Switching route usually means switching supplier.
- **Sustainability comparison is not one-sided.** HPDC consumes more energy per kilogram at the machine but wastes far less metal in machining and produces lighter parts. Sand casting has lower embodied tooling energy but higher scrap and reclamation load.
- **Hybrid strategies work.** Launching at low volume in gravity and transferring to HPDC at ramp is a legitimate plan, provided the part is designed to HPDC rules from the outset and the property difference is validated in both conditions.


## Manufacturing Considerations
## Common Mistakes
- **Mistake:** Selecting HPDC for a 3,000 per year programme because the piece price looks attractive — **Why it fails:** die amortisation across 3,000 parts dominates the piece price and the total cost exceeds gravity casting — **Fix:** calculate landed cost including tooling amortised over the actual programme volume, not the theoretical capacity.
- **Mistake:** Specifying T6 temper on a part quoted as conventional high pressure die casting — **Why it fails:** solution treatment blisters the casting, so the supplier either deviates to T5 or moves the part to a vacuum process at higher cost mid-programme — **Fix:** decide the heat treatment requirement before selecting the casting route.
- **Mistake:** Carrying a sand casting's 6 mm wall into a die casting conversion — **Why it fails:** the thick section forms shrinkage porosity, extends cycle time and wastes the mass saving that justified the conversion — **Fix:** redesign to 2.5–3 mm nominal with ribs before requesting HPDC quotes.

## Related Articles

- [Low Pressure Die Casting: Process, Applications and Limits]({{< relref "low-pressure-die-casting-guide.md" >}})
- [Die Casting Cost Drivers: How Casting Prices Are Built]({{< relref "die-casting-cost-drivers.md" >}})
- [Aluminum Die Casting Alloys: A380, ADC12, A356 Compared]({{< relref "../materials/aluminum-die-casting-alloys.md" >}})
- [Heat Treatment of Aluminum Castings: T5, T6 and T7]({{< relref "../materials/heat-treatment-of-castings.md" >}})
- [Building an RFQ Package for Castings and Machined Parts]({{< relref "../supplier-selection/rfq-package-and-quoting.md" >}})

## References

1. **ISO 8062-3 — Geometrical product specifications: Dimensional and geometrical tolerances for moulded parts** — Defines the DCTG grade system used throughout this comparison to express achievable tolerance by process. https://www.iso.org
2. **ASTM B26 / B26M — Standard Specification for Aluminum-Alloy Sand Castings** — Property requirements for sand cast aluminum alloys including A356 in various tempers. https://www.astm.org
3. **ASTM B108 / B108M — Standard Specification for Aluminum-Alloy Permanent Mold Castings** — Property requirements for gravity and low pressure permanent mould castings.
4. **ASTM B85 / B85M — Standard Specification for Aluminum-Alloy Die Castings** — Composition and general requirements for A380, A383, A360 and A413.
5. **ASM International, ASM Handbook Volume 15: Casting** — Comparative treatment of casting processes, solidification rates and the resulting microstructure and properties. https://www.asminternational.org
6. **American Foundry Society (AFS)** — Technical guidance on sand and permanent mould practice, casting yield and process selection. https://www.afsinc.org
7. **AlumCasting** — Aluminum casting resource describing production capability differences between high pressure, gravity and sand casting routes. https://www.alumcasting.com
