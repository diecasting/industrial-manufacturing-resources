---
date: 2026-08-06
title: "CNC Surface Finish: Ra Values, Processes and Costs"
description: "CNC surface finish explained: typical Ra values by process, the turning finish formula, secondary finishing options and how finish specifications drive cost."
keywords: ["surface finish", "ra value", "surface roughness", "scallop height", "machining finish", "bead blasting"]
category: "cnc-machining"
reading_time: "8 min"
last_updated: "2026-08-06"
---

# CNC Surface Finish: Ra Values, Processes and Costs

## Introduction

Surface finish is the most frequently over-specified property on machined drawings and one of the least understood. Ra 0.8 µm gets written on a drawing because it looks like a reasonable number, not because anything in the design needs it. On a large milled face, that single callout can add a semi-finish pass, a dedicated finishing cutter, a slower feed and a profilometer check on every piece.

Finish matters when it changes function. Dynamic seal grooves need controlled roughness so the elastomer neither leaks nor tears. Fatigue-loaded surfaces need a smooth profile because machining marks are stress raisers. Sliding interfaces need enough texture to retain lubricant but not so much that they wear their counterface. Bonded joints often need more roughness, not less. Outside these cases, the finish a normal roughing and finishing sequence produces is almost always adequate.

This chapter covers what Ra actually measures, the geometry that sets achievable finish in turning and milling, realistic bands for each process, and the cost step changes between as-machined, ground and polished surfaces. It also addresses cosmetic finishes such as bead blasting and brushing, which are specified visually rather than numerically and therefore need physical reference samples.

## Technical Explanation

### What Ra measures and what it hides

Ra is the arithmetic mean deviation of the roughness profile from its mean line over a defined evaluation length. It is robust and easy to measure, but it is an average and therefore blind to profile shape. A surface with occasional deep scratches and one with uniform fine texture can share the same Ra while behaving completely differently in a seal. Rz, the mean peak-to-valley height over five sampling lengths, captures that information better. As a rough conversion, Rz falls between four and seven times Ra for typical machined surfaces, but the ratio is not fixed and should not be used for acceptance.

Filtering matters as much as the value. The cut-off wavelength λc separates roughness from waviness; the ISO 4288 default is 0.8 mm for Ra between 0.1 and 2 µm. Specifying a value without stating the cut-off invites disagreement between supplier and customer measurements of the same surface.

### Turning: finish is set by feed and nose radius

In single-point turning the tool traces a helical groove whose profile is the nose radius. Theoretical roughness follows directly from the geometry:

```
Ra ≈ f² / (32 × r_ε) × 1000      µm   (f in mm/rev, r_ε in mm)
Rt ≈ f² / (8 × r_ε) × 1000       µm   peak-to-valley
```

Halving the feed reduces Ra by a factor of four; doubling the nose radius halves it. This is why a finishing pass at 0.08 mm/rev with a 0.8 mm nose radius produces around 0.25 µm theoretical Ra, while roughing at 0.30 mm/rev with the same insert gives about 3.5 µm. Real values run higher than theory because of built-up edge, vibration and tool wear. A larger nose radius also increases radial force, so on slender parts the finish gain is offset by deflection and chatter.

### Milling: scallop height and cutter marks

A face mill leaves a pattern set by insert runout, so the finish is limited by how well the inserts are aligned rather than by feed alone. A single-insert wiper or a fly cutter often gives a better face finish than an eight-insert cutter with 0.02 mm axial runout. On 3D contours cut with a ball nose tool, the dominant term is scallop height between passes:

```
h ≈ a_e² / (8 × R)      scallop height (R = ball radius, a_e = stepover)
```

A 6 mm ball nose with a 0.3 mm stepover leaves about 3.8 µm of scallop, which dominates any roughness the cutting edge produces. Reducing the stepover to 0.1 mm drops the scallop to roughly 0.4 µm but triples the path length.

### Secondary and cosmetic processes

Grinding, honing and lapping reach finishes that cutting cannot. Bead blasting, tumbling, brushing and hand polishing are cosmetic operations judged by appearance. These have no reliable Ra equivalent, because blasting can raise Ra while making the surface look uniform. Anodising adds 5-25 µm per surface and slightly increases roughness; hard anodising more so. Any finish requirement on a plated or anodised part must state whether it applies before or after coating.

### Getting a finish specification right

1. Identify the functional reason: sealing, fatigue, sliding, bonding, or appearance.
2. Select Ra, Rz or a visual standard accordingly, not by default.
3. State the applicable surface, not the whole part, using a surface texture symbol with an extent indication.
4. State the cut-off length where the value is below 1.6 µm.
5. Specify direction of lay only if it matters, such as circumferential lay for a rotary seal.
6. For cosmetic surfaces, agree a physical boundary sample rather than a number.
7. Confirm whether the requirement applies before or after surface treatment.

## Engineering Parameters

| Process | Typical Ra (µm) | Ra (µin) | Relative cost | Notes / Driver |
|---|---|---|---|---|
| As-cast die casting surface | 1.6-6.3 | 63-250 | baseline | Depends on die condition and coating |
| Rough milled | 3.2-6.3 | 125-250 | 1.0 | Roughing pass only, visible tool marks |
| Standard as-milled | 1.6-3.2 | 63-125 | 1.0-1.1 | Default shop finish, no extra operation |
| Fine milled | 0.8-1.6 | 32-63 | 1.3-1.6 | Dedicated finish pass, reduced stepover |
| Precision milled | 0.4-0.8 | 16-32 | 1.8-2.5 | Sharp tooling, high rpm, light depth |
| Rough turned | 1.6-3.2 | 63-125 | 1.0 | Feed 0.2-0.3 mm/rev |
| Finish turned | 0.4-0.8 | 16-32 | 1.2-1.5 | Feed 0.08-0.12 mm/rev, 0.8 mm nose |
| Reamed hole | 0.8-1.6 | 32-63 | 1.2 | Follows the drilled axis |
| Bored hole, finish pass | 0.4-1.6 | 16-63 | 1.3 | Corrects position as well as finish |
| Surface or cylindrical ground | 0.2-0.4 | 8-16 | 3-5 | Separate setup and fixture |
| Honed bore | 0.1-0.4 | 4-16 | 4-6 | Cross-hatch pattern for lubrication |
| Lapped or polished | < 0.1 | < 4 | 6-15 | Often manual, hard to control on contours |
| Bead blasted | 1.0-3.0 | 40-120 | 1.1-1.3 | Cosmetic, uniform matte appearance |

Material changes what is achievable at a given cost. Free-machining brass and 7075-T6 aluminium finish cleanly, while 1100 and 5052 aluminium tear and smear because they are soft and ductile, often producing worse Ra at the same parameters. Austenitic stainless work hardens under a rubbing edge, so a dull tool degrades finish rapidly. Cast aluminium with 9-12 percent silicon gives a matte surface with hard primary silicon particles that can pull out, and porosity intersecting a finished face shows up as pits no amount of feed reduction will remove. Tool wear also shifts the result: a turning insert at the end of its life typically produces two to three times the Ra it produced when new.

## Manufacturing Considerations

- **Finish callouts on large areas are expensive.** Ra 0.8 µm on a 300 mm × 200 mm face adds a semi-finish pass and a fine stepover finishing pass, often several minutes of cycle time.
- **Restrict the callout to the functional zone.** A seal land 6 mm wide can carry a tight finish while the surrounding face stays as-milled.
- **Ground finishes require a second machine and fixture.** Below about Ra 0.4 µm on flat faces, the part usually leaves the machining centre.
- **Measurement adds cost.** A stylus profilometer reading takes a minute per surface and needs access; internal features may need replica tape.
- **Deburring is not finishing.** Edge break callouts such as 0.2-0.5 mm chamfer should be stated separately from surface texture.
- **Blasting and tumbling round edges.** Sharp features and thread crests soften, and thin sections can distort in a vibratory bowl.
- **Coating changes the number.** Anodising, plating and painting all modify measured roughness, so state the inspection point in the process sequence.
- **Cosmetic acceptance needs samples.** Words like "uniform matte, no visible tool marks" cannot be resolved by measurement and generate disputes without a signed boundary sample.

## Common Mistakes

- **Mistake:** Applying Ra 0.8 µm to every surface on the drawing. — **Why it fails:** Most surfaces never contact anything, and the callout forces a finishing pass across the whole part. — **Fix:** Leave surfaces unmarked so the general note applies, and call out only functional zones.
- **Mistake:** Specifying Ra without a cut-off length on fine surfaces. — **Why it fails:** Different λc settings give different values on the same surface, so supplier and customer data disagree. — **Fix:** State λc per ISO 4288 whenever Ra is below 1.6 µm.
- **Mistake:** Expecting a fine finish from a ball nose finishing pass without reducing stepover. — **Why it fails:** Scallop height, not edge sharpness, dominates the profile. — **Fix:** Size the stepover from h ≈ a_e²/(8R) for the target value.
- **Mistake:** Increasing nose radius to improve finish on a slender turned shaft. — **Why it fails:** Radial force rises with nose radius and the part deflects or chatters, worsening the surface. — **Fix:** Reduce feed instead, or support the part with a tailstock or steady rest.
- **Mistake:** Assuming bead blasting improves roughness. — **Why it fails:** Blasting produces a uniform matte appearance but usually raises Ra. — **Fix:** Treat blasting as a cosmetic operation and do not attach an Ra limit to it.
- **Mistake:** Specifying a tight finish on a die cast surface that will not be machined. — **Why it fails:** As-cast texture follows die condition and release coating, and cannot be held to a machined-surface value. — **Fix:** Machine the area or accept the as-cast band.
- **Mistake:** Ignoring lay direction on rotary seal surfaces. — **Why it fails:** A helical turned lay acts as a screw pump and drives lubricant along the shaft. — **Fix:** Specify plunge grinding or circumferential lay with no helical component.
- **Mistake:** Measuring finish only on the first article. — **Why it fails:** Tool wear degrades Ra progressively, so later parts in the batch drift out. — **Fix:** Sample through the run and tie tool change intervals to the finish requirement.

## Related Articles

- [CNC Milling vs CNC Turning: How to Choose the Process]({{< relref "cnc-milling-vs-turning.md" >}})
- [Speeds and Feeds: Cutting Parameter Calculation Guide]({{< relref "speeds-and-feeds-guide.md" >}})
- [CNC Tolerances and GD&T: Practical Specification Guide]({{< relref "tolerances-and-gdt.md" >}})
- [Surface Treatment for Castings: Anodizing, Coating, Plating]({{< relref "../materials/surface-treatment-and-coatings.md" >}})
- [Die Casting Trimming, Deburring and Secondary Operations]({{< relref "../die-casting/trimming-and-secondary-operations.md" >}})

## References

1. **ISO 4287 — Geometrical product specifications, surface texture: profile method, terms, definitions and surface texture parameters** — defines Ra, Rz and related parameters.
2. **ISO 4288 — Rules and procedures for the assessment of surface texture** — specifies cut-off wavelengths and evaluation lengths for each roughness range. https://www.iso.org
3. **ISO 1302 — Indication of surface texture in technical product documentation** — the drawing symbol conventions for texture callouts.
4. **ASME B46.1 — Surface Texture: Surface Roughness, Waviness and Lay** — the North American equivalent, including µin parameter definitions.
5. **ASM Handbook, Volume 5: Surface Engineering, ASM International** — coverage of blasting, polishing and coating effects on surface condition. https://www.asminternational.org
6. **Machinery's Handbook, Industrial Press** — theoretical and practical surface finish tables for turning, milling and grinding.
