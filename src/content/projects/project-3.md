---
title: "VEX Robotics Drivetrain"
order: 3
summary: "An 8-wheel drivetrain iterated across a competition season, tuning gear ratio and weight distribution against real match telemetry."
tags: ["CAD", "Gear Trains", "Iterative Testing", "Fabrication"]
coverImage: ../../assets/placeholder-3.jpg
coverAlt: "Placeholder image for the VEX robotics drivetrain project."
---

## Overview

Across a competition season I rebuilt our drive base three times. The final
revision was an **8-wheel drive** on a welded aluminium chassis, geared for the
pushing matches that decided most of our losses.

## Design Constraints

- 18" cube starting envelope
- Six motors total, shared between drive and manipulator
- Survive repeated robot-to-robot impact
- Rebuildable between matches with hand tools

## Approach

The first base was geared for speed and lost every pushing match. Rather than
guess, I instrumented it — logging motor current during matches showed we were
spending most contact time near stall, where the motors produce heat instead of
torque.

That reframed the problem as a gear ratio question:

- Recalculated the ratio to put sustained pushing near the motors' **peak power
  point** instead of stall.
- Moved from 4 to 8 wheels to spread traction and reduce per-wheel slip.
- Shifted the battery and manipulator mass rearward to load the drive wheels
  during pushes.
- Replaced bolted chassis joints with welded gussets after fatigue cracks appeared
  at the bolt holes mid-season.

## Outcome

Pushing matches went from a reliable loss to a **strength**, and the welded chassis
finished the season without a structural failure. The bigger takeaway was process:
the instrumented match data made the ratio decision obvious in a way that another
round of guess-and-rebuild never would have.
