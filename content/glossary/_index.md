---
title: "Glossary of Manufacturing Terms"
description: "Definitions of the die casting, CNC machining, tooling, materials and automotive manufacturing terms used throughout the knowledge base, with links to dedicated articles where available."
keywords: ["manufacturing glossary", "die casting terms", "CNC terms", "GD&T glossary", "casting defect terms", "automotive manufacturing terms"]
date: 2026-08-06
sitemap:
  priority: 0.7
  changefreq: monthly
---

# Glossary of Manufacturing Terms

A working glossary of the abbreviations and process terms used across the
knowledge base. Terms are grouped by discipline. Where a term has a dedicated
article, a link is provided.

## Die casting

- **HPDC (High Pressure Die Casting)** — casting process where molten metal is
  forced into a steel die at high velocity and pressure. See
  [High Pressure Die Casting Parameters]({{< relref "../die-casting/high-pressure-die-casting-parameters.md" >}}).
- **Cold chamber** — HPDC variant where molten metal is ladled into a shot
  sleeve; used for aluminum and magnesium. See
  [Aluminum Die Casting Process]({{< relref "../die-casting/aluminum-die-casting-process-guide.md" >}}).
- **Hot chamber** — HPDC variant with an integral gooseneck; used for zinc and
  low-melting alloys.
- **Shot sleeve** — cylinder in a cold-chamber machine that holds the poured
  shot before the plunger pushes it into the die.
- **Plunger / ram** — piston that accelerates and intensifies the metal in the
  shot sleeve.
- **Gate velocity** — metal speed through the gate; typically 30–60 m/s for
  aluminum HPDC.
- **Fill time** — time to fill the cavity, usually 20–100 ms for thin-wall
  parts.
- **Intensification pressure** — final hydraulic-amplified pressure on the
  solidifying metal, typically 40–100 MPa on the metal.
- **Vacuum assist** — evacuating the die cavity (to ~50–150 mbar, super-vacuum
  below ~50 mbar) to reduce gas porosity. See
  [Vacuum Assisted Die Casting]({{< relref "../die-casting/vacuum-assisted-die-casting.md" >}}).
- **Porosity** — voids in the casting; *gas porosity* (rounded, from trapped
  air) vs *shrinkage porosity* (dendritic, at hot spots). See
  [Die Casting Porosity]({{< relref "../die-casting/die-casting-porosity-prevention.md" >}}).
- **Blister** — surface bubble from expanding trapped gas, often during heat
  treatment.
- **Soldering** — molten metal welding to the die steel, controlled by Fe
  content (0.7–1.1% in A380/ADC12).
- **Heat checking** — networks of surface cracks from cyclic thermal stress.
  See [Die Life and Thermal Fatigue]({{< relref "../tooling/die-life-and-thermal-fatigue.md" >}}).
- **Draft angle** — taper on walls to aid ejection; 1–3° external, 2–5°
  internal/cores. See
  [Die Casting DFM]({{< relref "../die-casting/die-casting-dfm-guidelines.md" >}}).
- **Parting line** — interface where the two die halves meet.
- **Runner / gate / overflow / vent** — feed, entrance, scrap reservoir and gas
  escape features. See
  [Gating and Runner Design]({{< relref "../die-casting/gating-and-runner-design.md" >}}).
- **ADC12 / A380 / A383 / A356** — common die casting alloys. See
  [Aluminum Die Casting Alloys]({{< relref "../materials/aluminum-die-casting-alloys.md" >}}).
- **AZ91D / AM60B** — magnesium die casting alloys. See
  [Magnesium Alloys]({{< relref "../materials/magnesium-alloys-az91d-am60b.md" >}}).
- **Zamak** — family of zinc die casting alloys. See
  [Zinc Die Casting Alloys]({{< relref "../materials/zinc-die-casting-alloys.md" >}}).
- **T5 / T6 / T7** — precipitation treatments; conventional HPDC is normally
  not heat treated because porosity blisters. See
  [Heat Treatment of Castings]({{< relref "../materials/heat-treatment-of-castings.md" >}}).

## CNC machining

- **CNC** — computer numerical control of machine tools.
- **Milling** — rotating cutter removes material; see
  [CNC Milling vs Turning]({{< relref "../cnc-machining/cnc-milling-vs-turning.md" >}}).
- **Turning** — single-point tool cuts a rotating workpiece.
- **5-axis** — machine with two rotational axes; see
  [5-Axis Machining]({{< relref "../cnc-machining/five-axis-machining-guide.md" >}}).
- **Cutting speed (v_c)** — surface speed at the cutter, m/min; `v_c = π·D·n/1000`.
- **Feed per tooth (f_z)** — advance per cutter tooth; table feed `v_f = f_z·z·n`.
- **Speeds and feeds** — the complete set of spindle speed and feed parameters.
  See [Speeds and Feeds Guide]({{< relref "../cnc-machining/speeds-and-feeds-guide.md" >}}).
- **GD&T** — geometric dimensioning and tolerancing. See
  [Tolerances and GD&T]({{< relref "../cnc-machining/tolerances-and-gdt.md" >}}).
- **Datum** — reference feature for measurement.
- **Surface finish (Ra)** — arithmetic mean roughness; see
  [Surface Finish Guide]({{< relref "../cnc-machining/surface-finish-guide.md" >}}).
- **DFM** — design for manufacture. See
  [CNC DFM]({{< relref "../cnc-machining/cnc-dfm-cost-reduction.md" >}}).

## Tooling & molding

- **H13** — standard hot-work tool steel for dies and molds. See
  [Tool Steels]({{< relref "../tooling/tool-steels-and-heat-treatment.md" >}}).
- **Die casting die** — the steel tool; see
  [Die Casting Die Design]({{< relref "../tooling/die-casting-die-design.md" >}}).
- **Hot runner / cold runner** — mold melt-delivery systems. See
  [Hot Runner vs Cold Runner]({{< relref "../tooling/hot-runner-vs-cold-runner.md" >}}).
- **Weld / knit line** — where two flow fronts meet and fuse incompletely.
- **Sink mark** — surface depression from shrinkage at thick sections.
- **Tryout** — proving a tool; T1, T2 are successive sampling iterations. See
  [Tooling Lead Time and Tryout]({{< relref "../tooling/tooling-lead-time-and-tryout.md" >}}).

## Quality & automotive

- **IATF 16949** — automotive QMS standard built on ISO 9001. See
  [IATF 16949 Overview]({{< relref "../automotive/iatf-16949-overview.md" >}}).
- **APQP** — advanced product quality planning. See
  [APQP and PPAP]({{< relref "../automotive/apqp-and-ppap.md" >}}).
- **PPAP** — production part approval process (18 elements, submission levels).
- **FMEA** — failure mode and effects analysis (DFMEA / PFMEA).
- **SPC** — statistical process control; **MSA** — measurement systems analysis.
- **Cpk / Ppk** — process capability indices; ≥1.33 critical, ≥1.67 safety.
- **AQL** — acceptable quality limit (sampling). See
  [Inspection and Acceptance]({{< relref "../supplier-selection/inspection-and-acceptance-criteria.md" >}}).
- **RFQ** — request for quotation. See
  [RFQ Package]({{< relref "../supplier-selection/rfq-package-and-quoting.md" >}}).
- **NRE** — non-recurring engineering (tooling/development cost).
- **Megacasting / giga casting** — very large structural die castings. See
  [Giga Casting]({{< relref "../automotive/giga-casting-megacasting.md" >}}).
- **Lightweighting** — reducing mass to cut energy use and emissions. See
  [Automotive Lightweighting]({{< relref "../automotive/automotive-lightweighting.md" >}}).
