# DFM Checklist: Design for Manufacture of Cast and Machined Parts

Copy-pasteable DFM checklist for aluminium HPDC parts followed by CNC machining. Use at the drawing review to cut cost and scrap.

## 1. Casting Wall Thickness
- [ ] **Wall thickness 1.5–4 mm** for aluminium HPDC (bias 2.0–3.0 mm in structural zones) — too thin freezes; too thick pores.
- [ ] **Minimum practical wall 0.8–1.2 mm** only where necessary, with gating support.
- [ ] **Avoid thin walls < 0.8 mm** on aluminium — belongs on stamped/MIM, not casting.
- [ ] **Gradual thickness transitions** (taper/fillet) instead of sudden steps — reduces hot-spot shrinkage.

## 2. Draft and Release
- [ ] **External draft 1–3°; internal draft 2–5°** — lets the part eject without scuffing the die.
- [ ] **Increase draft on textured/long cores** — add ~1° per texture finish level.
- [ ] **Avoid undercuts** needing side-actions or lost cores — each slide adds cost, cycle time, maintenance.

## 3. Radii, Fillets, and Corners
- [ ] **Internal corner radius ≥ cutter radius** — a sharp internal corner can't be milled and forces EDM or a stress-raising edge.
- [ ] **Generous cast fillets at section changes** — feeds metal, reduces stress concentration, improves fatigue.
- [ ] **Uniform radius families** (0.5/1.0/2.0/3.0 mm) — fewer tools, fewer setups.

## 4. Holes, Pockets, and Depth Limits
- [ ] **Depth-to-diameter < 4** for cored holes and milled pockets — deep narrow features deflect tools and break drills.
- [ ] **Avoid blind holes near parting line** that trap air or need fragile cores.
- [ ] **Cast holes only where beneficial** — many features are cheaper to drill in CNC than to core reliably.

## 5. Tolerances and GD&T
- [ ] **Tolerance only what matters** — cast default ±0.3–0.5 mm is fine for non-critical faces.
- [ ] **Tight tolerances on functional/datums only**, defined with GD&T (position, profile).
- [ ] **Consistent datum scheme** between casting and CNC prints — prevents stack-up errors.

## 6. Machining Setup Reduction
- [ ] **Minimize setups** by orienting features to 1–2 primary datums — every setup is a locating error and a clamp cost.
- [ ] **Use standard tool diameters** (6/8/10/12 mm) — stocked, cheaper, faster to program.
- [ ] **Avoid text engraving** on functional surfaces — add cycle time, can be a leak path; use etched labels/tags.
- [ ] **Design fixture-friendly locators** — three stable pads plus two clamps for repeatable seating.

## DFM Summary
| Parameter | Rule |
| --- | --- |
| Wall (alu HPDC) | 1.5–4 mm; min 0.8–1.2 mm |
| Draft (ext/int) | 1–3° / 2–5° |
| Internal radius | ≥ cutter radius |
| Hole depth:dia | < 4 |
| Thin wall | avoid < 0.8 mm |
| Setups | minimize; standard tools |
