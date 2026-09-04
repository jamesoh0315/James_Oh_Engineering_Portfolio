---
title: "Carrier Bearing Tab"
order: 6
summary: "A sheet metal mounting tab redesigned around a fatigue crack, using a stress analysis to find the real failure driver before changing geometry."
tags: ["Sheet Metal", "Stress Analysis", "DFM", "SolidWorks"]
coverImage: ../../assets/placeholder-4.jpg
coverAlt: "Placeholder image for the carrier bearing tab project."
---

## Overview

A bent sheet metal tab locating a carrier bearing was cracking in service. I
redesigned it around the actual failure mechanism rather than simply adding
material.

## Design Constraints

- Keep the existing bolt pattern and bearing centreline
- Single-piece **3 mm 5052 aluminium**, one bend
- Survive the full load cycle without visible cracking
- No added weight over the original part

## Approach

Every crack initiated at the same place: the inside corner of the bend, right where
it met the bolt hole. That's two stress concentrations stacked on top of each
other, and no amount of extra thickness fixes a geometry problem.

- Confirmed the bend radius was below the recommended minimum for 5052 in the
  transverse grain direction — the material was already work-hardened before it
  ever saw load.
- Opened the bend radius to 1.5× thickness and rotated the blank so the bend ran
  **across** the grain.
- Added a relief notch to move the hole out of the bend's heat-affected geometry.
- Ran a static study to confirm the notch relocated peak stress into the flat web,
  away from the bend.

## Outcome

Peak stress dropped roughly **40%** with no thickness increase, and the relief
notch actually reduced the blank area slightly — so the part came out marginally
lighter. The lesson I keep coming back to: when a part cracks in one repeatable
spot, that's geometry talking, not a material problem.
