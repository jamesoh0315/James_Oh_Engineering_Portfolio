---
title: "Autonomous Claw — APSC 101"
date: 2025-11-28
summary: "A four-bar gripper on a rack-driven lift, built to retrieve and sort objects autonomously within a fixed cost and footprint budget."
tags: ["Mechanism Design", "Prototyping", "Arduino", "Onshape"]
coverImage: ../../assets/placeholder-2.jpg
coverAlt: "Placeholder image for the APSC 101 autonomous claw project."
featured: true
---

## Overview

A term-long cornerstone design project: build an autonomous device that locates,
grips, and sorts objects on a marked field. Our team's entry paired a **four-bar
linkage gripper** with a rack-and-pinion vertical lift.

## Design Constraints

- Fit within a 300 × 300 mm footprint at rest
- Total bill of materials under **$60**
- Fully autonomous — no operator input after start
- Grip objects ranging 40–90 mm across without retooling

## Approach

The gripper geometry drove everything. A parallel four-bar keeps the jaw faces
parallel through the full sweep, so contact stays flat regardless of object width —
that single choice removed the need for compliant pads and let one mechanism cover
the whole size range.

I owned the linkage synthesis and the lift:

- Laid out the four-bar in Onshape and swept the transmission angle across the
  full range, targeting a minimum of 40° to avoid binding near the closed position.
- Sized the rack module against the lift load, then added a **torsion spring
  counterbalance** so the servo held position without stalling.
- Printed three jaw revisions; the final one added a shallow V-groove that
  self-centres cylindrical objects as the jaws close.

## Outcome

The device completed the full sort sequence in **under 90 seconds** on the
evaluation run and came in at $47 of the $60 budget. The main lesson was
mechanical: our first lift used a lead screw for the holding torque, and swapping
to rack-and-pinion with a counterbalance cut cycle time nearly in half.
