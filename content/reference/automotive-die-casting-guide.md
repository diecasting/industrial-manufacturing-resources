---
title: "Automotive Die Casting Guide: Specifying Structural Castings"
description: "Guide to specifying automotive structural die castings: IATF 16949, APQP/PPAP, vacuum HPDC, elongation after T7, crash load paths and Al-on-steel corrosion isolation."
keywords: ["automotive die casting", "structural castings", "vacuum HPDC", "APQP PPAP automotive"]
date: 2026-08-06
category: "reference"
reading_time: "8 min"
---

## Overview

Structural castings — shock-tower brackets, front and rear rails, door inners, and cross-members — carry crash and stiffness loads that were once stamped-and-welded assemblies. Specifying them correctly means writing a print and a quality plan that survive both the foundry and the crash lab. This guide connects the commercial-quality requirements ([IATF 16949 overview]({{< relref "../automotive/iatf-16949-overview.md" >}}), [APQP and PPAP]({{< relref "../automotive/apqp-and-ppap.md" >}})) with the metallurgical and geometric choices covered in [Structural Castings and Crash Performance]({{< relref "../automotive/structural-castings-and-crash-performance.md" >}}) and [Automotive Lightweighting]({{< relref "../automotive/automotive-lightweighting.md" >}}).

## Quality System Requirements

- **IATF 16949 certification** at the producing site. *Why:* non-negotiable for automotive structural supply; governs the whole management system.
- **Full APQP with PPAP submission** of the 18 PPAP elements. *Why:* demonstrates the process is validated before series. *How:* require PSW sign-off, capacity study, and process FMEA at gate reviews.
- **Process capability** with **Cpk ≥ 1.33 on critical** and **≥ 1.67 on safety/significant** characteristics. *Why:* structural joints are safety items; marginal capability is unacceptable.

## Process Selection: Vacuum HPDC

- **Vacuum-assisted HPDC for weldable or heat-treatable structural parts.** *Why:* vacuum removes entrained gas, enabling T7 heat treatment and cosmetic welding without blistering. *How:* specify vacuum level and verify with porosity X-ray against an ASTM E505 reference.
- **Confirm gating and thermal balance** support a sound, gas-free fill. *Note:* vacuum alone cannot fix a poor gating design.
- **Consider mega-casting strategy** where consolidation justifies it; see [Giga-Casting and Mega-Casting]({{< relref "../automotive/giga-casting-megacasting.md" >}}).

## Metallurgy and Heat Treatment

- **Specify post-cast heat treatment (typically T7)** to reach the ductility structural crash parts require. *Why:* as-cast tempers are too brittle for energy absorption.
- **Elongation > 8–12% after T7** for structural crash members. *Why:* ductility, not just strength, determines how the part folds and absorbs energy. *How:* require transverse tensile coupons from production castings, tested per ASTM B557 / equivalent.
- **Alloy selection** matched to the casting method and required properties; see [Aluminium Die Casting Alloys]({{< relref "../materials/aluminum-die-casting-alloys.md" >}}).

## Geometry for Crash Load Paths

- **Define crash load paths explicitly** on the print and in the CAE sign-off. *Why:* the caster must place material where energy is absorbed, not uniformly.
- **Local wall thickening at attachment and crush zones**, with filleted transitions. *Why:* concentrates strength where bolts and crush initiate.
- **Avoid stress-raising sharp corners** in load paths; use generous radii.

## Joining and Corrosion Isolation

- **Specify Al-on-steel corrosion isolation** wherever aluminium casting meets steel body structure. *Why:* galvanic corrosion between dissimilar metals destroys joints over service life. *How:* require insulated spacers, sealants, or coated fasteners, and validate in corrosion cycling.
- **Weld or adhesive bond preparation** defined for the chosen joining method (MIG, rivet-bond, structural adhesive). *Why:* vacuum HPDC gives weldable surfaces; ordinary HPDC does not.
- **Confirm coating/ pretreatment compatibility** with the assembly paint process.

## Inspection and Acceptance

- **Porosity acceptance by X-ray** against a referenced standard (e.g., ASTM E505 / NADCA).
- **Leak and dimensional checks** against the control plan; CMM on datums.
- **Traceability** of alloy lot, furnace, and machine per part or batch for recall and warranty analysis.

## Related Articles

- [Structural Castings and Crash Performance]({{< relref "../automotive/structural-castings-and-crash-performance.md" >}})
- [Automotive Lightweighting]({{< relref "../automotive/automotive-lightweighting.md" >}})
- [Giga-Casting and Mega-Casting]({{< relref "../automotive/giga-casting-megacasting.md" >}})
- [Aluminium Die Casting Alloys]({{< relref "../materials/aluminum-die-casting-alloys.md" >}})

## References

- IATF 16949:2016 — Automotive Quality Management System
- AIAG — APQP and PPAP Reference Manuals (PPAP 18 elements; Cpk 1.33 / 1.67)
- ASTM E505 — Standard Reference Radiographs for Inspection of Aluminium and Magnesium Die Castings
- ASTM B557 — Tension Testing of Aluminium Alloy Products
- NADCA — Structural Die Casting Design and Process Standards
