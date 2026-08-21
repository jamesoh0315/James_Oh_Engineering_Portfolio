---
title: "Clamping Shaft Coupler"
date: 2026-03-14
summary: "A split-collar coupler that transmits torque between two dissimilar shafts without keyways, sized against slip torque and verified with FEA."
tags: ["SolidWorks", "GD&T", "FEA", "Machining"]
coverImage: ../../assets/placeholder-1.jpg
coverAlt: "Placeholder image for the clamping shaft coupler project."
featured: true
---

## Overview

A drivetrain subassembly needed to join a 10 mm motor output shaft to a 3/8" driven
shaft. Keyed couplers introduced backlash and required broaching both shafts, so I
designed a **split-collar clamping coupler** that transmits torque purely by friction
from the clamp preload.

## Design Constraints

- Transmit **6 N·m** continuous with a 2.0 safety factor against slip
- No machining operations on either mating shaft
- Fit inside a 32 mm envelope
- Manufacturable on a 3-axis mill with standard tooling

## Approach

Slip torque is set by the normal force the clamp screws generate, so I worked
backward from bolt preload to required clamp geometry:

1. Derived required friction torque from the motor stall spec plus margin.
2. Solved for clamp force given a steel-on-steel friction coefficient of 0.15 —
   deliberately conservative, since the surfaces would see light oil.
3. Selected two M4 socket head cap screws and checked the resulting preload
   against their proof load.
4. Sized the slit width and collar wall thickness so the collar deflects
   elastically to close the gap without yielding at the slit root.

An FEA study confirmed peak von Mises stress at the slit root stayed under 60% of
yield at full preload — the failure mode I was most worried about, since that's a
stress concentration the hand calc doesn't capture.

## Outcome

The coupler held full torque through testing with **no measurable backlash**, and
the no-keyway requirement meant shafts could be swapped in under a minute. The next
revision would relieve the bore centre to concentrate contact pressure at the two
ends, which should improve concentricity under load.
