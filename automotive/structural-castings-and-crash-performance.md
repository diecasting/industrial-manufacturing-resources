---
title: "Structural Castings and Crash Performance Requirements"
description: "How aluminum structural castings carry crash loads, the elongation and ductility needed, integrity testing and corrosion isolation when joined to steel."
keywords: ["structural casting crash", "aluminum casting elongation", "casting integrity", "crash load path", "galvanic corrosion", "casting fatigue"]
category: "automotive"
reading_time: "9 min"
last_updated: "2026-08-06"
---

# Structural Castings and Crash Performance Requirements

## Introduction
Structural castings are aluminum components that carry primary vehicle loads, not merely brackets that hold trim in place. They appear at shock towers, front and rear rails, crossmembers and the large megacast underbody nodes. Their job in a crash is to manage load paths: to direct intrusion energy away from the occupant cell, to absorb energy through controlled deformation, and to stay attached long enough for the rest of the structure to do its work. Because a casting can hide shrinkage porosity and cold laps inside a thick section, crashworthiness depends as much on integrity as on the alloy data sheet.

This chapter explains the mechanical demands placed on structural castings, the elongation and ductility thresholds that make them crashworthy and joinable, the inspection methods that prove integrity, and the corrosion rules when aluminum meets steel. After reading, an engineer should be able to set crash-relevant casting acceptance criteria.

## Technical Explanation

### Load paths and energy absorption

A crash load path is the route intrusion force takes from the impact face to the grounded structure. Castings sit at high-load junctions — where a rail meets a crossmember, or a suspension load enters the body. In a frontal or rear event, designed crush sections plastically deform and absorb energy; the casting must not fracture early and must not detach, or the load path bypasses the intended absorber and hits the cabin. The casting therefore needs both strength at the pickup and ductility in the crush zone.

### Elongation and ductility requirements

The defining property for a structural casting is elongation after heat treatment. A part that is strong but brittle shatters under impact rather than deforming, which defeats energy absorption. Engineering practice for crash- and join-relevant castings targets an elongation of greater than about 8–12 % after a T7 or T5 treatment of an AlSi10MnMg-class alloy. Below this band, fusion welding and crush behaviour become marginal; above it, yield can fall below what the load path needs. Tensile and Charpy-type ductility checks on coupons confirm the window is held.

### Casting integrity

Internal defects decide whether the part behaves as the FEA predicts. Two porosity sources dominate: entrapped air (from turbulent fill, reduced by vacuum assist) and shrinkage porosity (from poor feeding at thick sections). Both weaken the section and act as crack starters under fatigue and crash. Integrity is proven by:

1. **X-ray radiography** against acceptance classes for gas and shrinkage pores.
2. **Computed tomography (CT)** for development and dispute resolution, showing 3D defect location.
3. **Pressure or helium leak test** for castings that must seal.
4. **Dye penetrant or eddy current** for surface-breaking defects at machined faces.

### Fatigue

A structural casting sees millions of load cycles in service before any crash. Porosity, inclusions and rough machining marks are fatigue initiators, so surface finish at stressed areas and defect limits at the surface are tighter than for non-structural parts. The design avoids sharp notches and abrupt section changes that concentrate stress.

### Corrosion when attached to steel

Aluminum joined to steel in a damp environment forms a galvanic cell in which aluminum is the anode and corrodes. For a structural casting bolted or bonded to a steel member, the design must isolate the interface with adhesive, coated fasteners or sealed drainage, and must avoid crevices that hold water against the aluminum. The corrosion protection chosen must survive the part's service life, not just the paint shop.

## Engineering Parameters

| Parameter | Typical Range | Units | Notes / Driver |
|-----------|---------------|-------|----------------|
| Elongation (T7) | 8–12 | % | Crash and weld need |
| Yield strength | 120–180 | MPa | AlSi10MnMg class |
| Tensile strength | 220–300 | MPa | Dependent on heat treat |
| X-ray pore class | A/B (ISO 10675) | class | Gas and shrinkage |
| Max pore size | 1–3 | mm | Per acceptance spec |
| Surface Ra (machined) | 1.6–3.2 | µm | Fatigue-sensitive face |
| Leak rate | < 1×10⁻⁵ | mbar·L/s | Helium, sealed castings |
| Galvanic isolation | required | — | Al-to-steel joints |

These limits are set by the load case. A shock tower carrying suspension preload tolerates less porosity at the strut bore than a low-stress web, so the acceptance class is mapped to feature criticality rather than applied uniformly. The elongation floor is the same driver as in megacasting: it is what lets the part deform instead of fracture and what lets it be welded.

## Manufacturing Considerations

Holding crash performance in production means controlling the process window, not just the first article. Vacuum level, injection velocity, intensification pressure and die temperature decide porosity, so these are monitored as process parameters, not left to operator judgement. Heat treatment must be uniform across a large part; uneven furnace temperature shifts local elongation and can create soft spots at the worst place.

Machining the casting to datum faces must avoid inducing stress that later relaxes and distorts the part, since the machined faces often define body location. Fixtures hold the part at its true locators, and stock allowance is set so porosity is not exposed at sealed or stressed surfaces. Traceability ties each part to its process record so a crash or field failure can be traced to a process drift.

Repair of detected defects is limited. Cosmetic porosity at a non-critical face may be acceptable per spec; structural porosity is a scrap or, rarely, a qualified impregnation decision, never a field repair. The receiving OEM's CSR defines what repair, if any, is permitted.

## Common Mistakes

- **Mistake:** Specifying only strength, not elongation — **Why it fails:** Brittle fracture in crash — **Fix:** Set an elongation floor with the yield.
- **Mistake:** Treating all features with one X-ray class — **Why it fails:** Either scrap or risk where it matters — **Fix:** Map acceptance class to criticality.
- **Mistake:** Ignoring surface finish at stress points — **Why it fails:** Fatigue crack starts early — **Fix:** Tighten Ra on machined loaded faces.
- **Mistake:** Bonding aluminum to steel with no isolation — **Why it fails:** Galvanic corrosion severs the joint — **Fix:** Adhesive or coated fastener plus drainage.
- **Mistake:** Uneven heat-treat furnace — **Why it fails:** Soft, low-elongation zone — **Fix:** Verify furnace mapping across the load.
- **Mistake:** Machining into porosity — **Why it fails:** Seal or strength lost — **Fix:** Set stock so defects stay buried.
- **Mistake:** Allowing field repair of structural porosity — **Why it fails:** Unqualified strength — **Fix:** Follow CSR scrap or impregnation rule.

## Related Articles

- [Giga Casting and Megacasting: Large Structural Castings](./giga-casting-megacasting.md)
- [EV Battery Enclosure Manufacturing: Design and Process](./ev-battery-enclosure-manufacturing.md)
- [Die Casting Porosity: Causes, Detection and Prevention](../die-casting/die-casting-porosity-prevention.md)
- [Heat Treatment of Aluminum Castings: T5, T6 and T7](../materials/heat-treatment-of-castings.md)

## References

1. **ISO 10675** — Acceptance levels for radiographic examination of castings.
2. **NADCA** — Product specification and defect acceptance for aluminum die castings.
3. **ASM International** — *ASM Handbook, Volume 15: Casting*, on porosity and fatigue.
4. **ISO 8062** — Geometrical tolerances for castings used in structural location.
5. **AlumCasting** — AlumCasting (https://www.alumcasting.com) provides aluminum die casting process and alloy references relevant to structural castings and their integrity testing.
