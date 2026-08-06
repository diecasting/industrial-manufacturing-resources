---
date: 2026-08-06
title: "Tooling Lead Time and Tryout: From Kickoff to T1 and T2"
description: "Tooling lead time explained stage by stage, from kickoff and DFM through steel cutting, heat treat, T1 and T2 sampling, engineering changes and PPAP."
keywords: ["tooling lead time", "T1 sampling", "tool tryout", "mold flow analysis", "steel safe design", "PPAP timing"]
category: "tooling"
reading_time: "8 min"
last_updated: "2026-08-06"
---

# Tooling Lead Time and Tryout: From Kickoff to T1 and T2

## Introduction

Tooling sits on the critical path of almost every hardware programme and is the element managers most consistently underestimate. The quoted lead time on a purchase order is the time to the first sample, not to a production-capable tool. What lies between — dimensional analysis, engineering changes, re-cut, re-sample, capability study and documentation — routinely adds as much time again, and none of it appears on the toolmaker's quotation.

Launch dates set from the quoted tool lead time then slip, and the schedule is recovered by compressing validation, the one activity that should never be compressed. Programmes that hold their dates planned the tryout loop explicitly and made the design choices that keep it short. This chapter maps the sequence from kickoff to PPAP, gives realistic durations for die casting and injection tooling, explains T0/T1/T2, and details why a change after steel cutting is disproportionately expensive.

## Technical Explanation

### The stage sequence

1. **Kickoff and data freeze.** Receipt of 3D data, drawings, GD&T, material, volume, cosmetic spec and target machine. The key output is a statement of what is fixed and what is still moving.
2. **DFM and simulation.** The toolmaker returns a DFM report: draft, wall, parting line, gate, slides, ejection, and unmouldable features. Flow simulation validates gating and predicts weld lines, air traps, hot spots and warpage.
3. **Tool design and approval.** 3D layout then 2D details; the customer approves parting line, gate, ejectors, cooling and slides — a gate, not a formality.
4. **Steel ordering.** Long-lead items — large blocks, premium remelted grades, hot runner systems, mould bases. Hot runners are often the longest single lead item.
5. **Rough machining**, leaving stock for heat treatment movement.
6. **Heat treatment.** Stress relief, hardening, tempering; an external batch operation.
7. **Finish machining and EDM.** High-speed milling of the form, sink EDM for ribs and corners, wire EDM for inserts and slides.
8. **Polishing and texturing**, then chemical or laser texture.
9. **Assembly and fitting.** Slides, lifters, ejectors, water circuits, blue-in shut-offs, pressure-test cooling.
10. **T0/T1 sampling**, then dimensional report, engineering change, T2 and finally process capability and PPAP.

### What T0, T1 and T2 mean

Terminology varies, so define it. **T0** is an internal shakedown confirming the tool opens, closes, ejects and fills without damaging itself; parts are not for dimensional analysis. **T1** is the first formal sampling, ideally on a machine matching production, with specified material and colour. Deliverables are samples, a short-shot series and an initial dimensional check. T1 parts are almost never fully conforming. **T2** follows the first corrections; by then the tool should be close, with issues confined to a few characteristics. A well-run injection programme accepts at T2 or T3; a complex die casting die with multiple slides may need T3 or T4.

Each tryout loop runs: sample, condition parts (24-48 h for semi-crystalline plastics and castings), CMM, joint review, rework, re-sample. A loop is typically two to four weeks, governed by measurement, decisions and press queue position. Reducing loop count beats shortening any one stage.

### Why changes after steel cutting are expensive

Steel is removed easily and added only with difficulty. A change needing more material on the part is a simple re-cut; one needing less means restoring steel that is gone. The options are all bad: weld and re-machine (heat-affected zone, possible crack site, visible polish difference in plastics), fit a new insert (witness line), or replace the whole block (restart steel and heat treat). The multiplier grows through the sequence — a change at DFM costs an hour of engineering; after heat treatment it may mean a new block; after texturing, strip and re-apply.

**Steel-safe** (metal-safe) design is the standard defence: where a dimension is uncertain, deliberately cut the tool so the part comes out with more material than nominal, and remove steel to reach size. It costs nothing at design stage and converts a possible insert replacement into a bench operation.

## Engineering Parameters

| Stage | Die casting die | Injection mould | Notes |
|---|---|---|---|
| Kickoff to DFM | 3-7 days | 3-7 days | Longer for unresolved GD&T |
| Simulation | 1-2 weeks | 3-7 days | Per iteration |
| Design and approval | 2-3 weeks | 1-2 weeks | Slide-heavy at top |
| Steel procurement | 1-3 weeks | 1-4 weeks | Hot runner 4-8 weeks |
| Rough machining | 1-2 weeks | 1-2 weeks | Scales with block |
| Heat treatment | 1-2 weeks | 0-1 week | Pre-hard bases skip |
| Finish + EDM | 2-4 weeks | 1-3 weeks | Electrode count drives |
| Polish + texture | 3-10 days | 3-14 days | Optical polish adds most |
| Assembly and fitting | 1-2 weeks | 1-2 weeks | Slides, hot half |
| T1, simple tool | 8-10 weeks | 4-6 weeks | Few side actions |
| T1, typical tool | 10-14 weeks | 6-8 weeks | 2-4 slides |
| T1, complex tool | 14-20 weeks | 8-10 weeks | Multi-slide, high cavitation |
| Rework loop | 2-4 weeks | 2-4 weeks | Per iteration |
| T1 to PPAP | 6-12 weeks | 4-10 weeks | Capability + docs |
| Total kickoff to PPAP | 18-26 weeks | 12-18 weeks | No major redesign |

Planning estimate: total = T1 lead + (loops × loop duration) + PPAP. Figures assume a competent toolmaker with press capacity; they stretch when the tool is built in one region and sampled in another, when the production machine is uninstalled, or when sampling material has its own lead time.

## Manufacturing Considerations

- **Freeze the data properly.** A tool started on "90 % final" data spends the savings in rework. Isolate genuinely unresolved geometry into a replaceable insert.
- **Pay for simulation before steel.** Analysis costs a fraction of one loop and typically removes at least one.
- **Specify the sampling machine.** A different clamp, rate or shot than production moves dimensions and needs re-optimisation.
- **Order sampling material early, from the production family.** Natural vs pigmented resin and different alloy suppliers both change dimensions.
- **Define the dimensional report before T1** — characteristics, cavities, part count, fixture, datum. T1 disputes are usually about method.
- **Build the change loop into the contract** — iterations and engineering hours included, with rates beyond.
- **Plan press time as a resource.** Waiting for a machine slot can be the longest element in a loop; book it against the projected sample date.

## Common Mistakes

- **Mistake:** Treating quoted tool lead time as the production-ready date. — **Why it fails:** The quote covers kickoff to T1; loops and PPAP add 50-100 % more, and the launch rests on a number never meant to describe it. — **Fix:** Plan against kickoff-to-PPAP and publish that as the milestone.
- **Mistake:** Releasing steel while a functional interface is still negotiated. — **Why it fails:** The change needs weld or insert replacement, adding weeks and a cosmetic or metallurgical discontinuity. — **Fix:** Isolate unresolved geometry into a replaceable insert, or hold release until frozen.
- **Mistake:** Designing to nominal everywhere instead of steel-safe. — **Why it fails:** Every correction becomes steel addition, the expensive direction. — **Fix:** Flag uncertain dimensions in DFM and specify the safe direction on the tool drawing.
- **Mistake:** Skipping simulation to save cost. — **Why it fails:** Gate and warpage errors surface at T1 as re-cuts rather than screen edits. — **Fix:** Run simulation before design approval and treat outputs as design inputs.
- **Mistake:** Judging T1 against full production tolerance. — **Why it fails:** T1 exists to find where the tool actually is; calling it a failure triggers rushed decisions. — **Fix:** Agree in advance that T1 must show fill, ejection, no gross defects and a measurable baseline.
- **Mistake:** Measuring cast or semi-crystalline parts immediately after sampling. — **Why it fails:** Shrinkage and stress relaxation continue for a day, so correction overshoots. — **Fix:** Condition 24-48 h before CMM and state the protocol in the plan.
- **Mistake:** Correcting all out-of-tolerance dimensions in one round. — **Why it fails:** Dimensions interact through distortion and shrinkage; simultaneous corrections mask each other. — **Fix:** Correct dominant contributors first, re-sample, then address residuals.
- **Mistake:** Approving texture before dimensional sign-off. — **Why it fails:** A later correction in a textured area needs stripping and re-etching, possibly mismatching adjacent surfaces. — **Fix:** Sequence texturing after dimensional acceptance.
- **Mistake:** Sampling with unrepresentative material for lead-time reasons. — **Why it fails:** Shrinkage and viscosity differ, so the tool is corrected to the wrong target. — **Fix:** Order sampling material with the steel and treat it as long-lead.

## Related Articles

- [Die Casting Die Design: Structure, Slides and Ejection]({{< relref "die-casting-die-design.md" >}})
- [Injection Mold Design Fundamentals for Plastic Parts]({{< relref "injection-mold-design-fundamentals.md" >}})
- [Tooling Ownership, IP and Supply Agreements Explained]({{< relref "../supplier-selection/tooling-ownership-and-contracts.md" >}})
- [APQP and PPAP: Automotive Part Approval Process Guide]({{< relref "../automotive/apqp-and-ppap.md" >}})
- [Building an RFQ Package for Castings and Machined Parts]({{< relref "../supplier-selection/rfq-package-and-quoting.md" >}})

## References

1. **AIAG — Advanced Product Quality Planning (APQP) Reference Manual** — Defines the programme phase structure into which tooling milestones are placed. https://www.aiag.org
2. **AIAG — Production Part Approval Process (PPAP) Reference Manual** — Submission levels, sample sizes and documentation after tryout. https://www.aiag.org
3. **NADCA — North American Die Casting Association** — Tooling build sequence, sampling and casting dimensional capability guidance. https://www.nadca.com
4. **ISO 8062 — Dimensional and geometrical tolerances for moulded parts** — Tolerance grades used to judge whether T1 results are realistic. https://www.iso.org
5. **IATF 16949 — Automotive quality management system requirements** — Tooling management, timing plans and change control during launch. https://www.iatfglobaloversight.org
6. **[DieCastor](https://www.diecastor.com)** — Die casting resource covering tooling build stages, sampling practice and production ramp-up considerations.
