# HEHS v2.0 // HARMONIC ENERGY HARVESTING SYSTEM
## Measurement-First Engineering Guide — Repository Edition

**Cory Shane Davis**  
**Source DOCX SHA-256:** `6628ae27052f7ad57ac971a2d3d78ec6aa732f42bcbd12180ca7e38f0796566c`  
**Source PDF SHA-256:** `2b316c4d1cc31fce51b70fc2a3fbd555e0569517a22a937f59505bd3b6c0b7e6`

> Current engineering reference. This v2 guide supersedes the earlier weekend prototype assumptions where the two conflict.

## Objective

Build a vibration-energy-harvesting system that produces **measurable stored DC energy** from a repeatable mechanical source, then optionally add an independently conditioned RF harvesting path.

The design philosophy is simple:

```text
CHARACTERIZE SOURCE
      ↓
TUNE TRANSDUCER
      ↓
CONDITION WITH SOURCE-APPROPRIATE PMIC
      ↓
STORE ENERGY SAFELY
      ↓
GATE LOAD WITH HYSTERESIS
      ↓
MEASURE JOULES / DUTY CYCLE / REPEATABILITY
```

No power level is promised before the source and load are characterized.

---

## Architecture

```text
MECHANICAL SOURCE
      │
      ▼
PIEZO CANTILEVER(S)
      │
      ▼
PIEZO ENERGY-HARVESTING PMIC
(rectifier + UVLO + regulated transfer)
      │
      ├─────────────────────────────┐
      ▼                             │
PROTECTED STORAGE BUS               │
capacitor / supercapacitor          │
      │                             │
      ▼                             │
POWER-GOOD / LOAD GATE              │
      │                             │
      ▼                             │
LOW-POWER SENSOR / MCU              │
                                    │
OPTIONAL RF CHANNEL                 │
RF → antenna → match → rectifier → energy manager
                                    │
                                    └──→ storage domain
```

The load must not repeatedly brown out the harvester. Energy accumulates above a high threshold before the load wakes; the load shuts down below a lower threshold.

---

## Corrections that define v2

The current guide explicitly corrects earlier simplifications:

| Early simplification | v2 position |
|---|---|
| Generic boost converter directly after raw piezo bridge | Prefer a PMIC designed for weak/high-impedance harvesting; the LTC3588-1 class is a reference path for piezo. |
| 2.7 V supercap placed on 3.3/5 V node | Storage voltage rating must exceed bus voltage or use proper protected/balanced topology. |
| Two 6 cm wires called a 2.4 GHz half-wave dipole | Start near ~31 mm per arm for a center-fed half-wave dipole and tune the real build. |
| Golden-ratio spacing automatically maximizes power | Treat phi spacing as an experimental array to compare against equal and spectrum-targeted spacing. |
| Raw AC piezos simply paralleled | Rectify/condition separately or in deliberately matched groups, then combine on the DC side. |
| Ambient Wi-Fi as a normal milliwatt source | Treat far-field ambient RF as a low-power supplement unless a compliant dedicated source is used. |
| Phone charging as a normal acceptance target | Target intermittent sensors, wake-on-event systems, telemetry, or stored-energy proof. |

The engineering goal is not to protect a theory. It is to close the energy budget.

---

## Recommended first build

### Highest-probability vibration path

- piezoelectric bender/bimorph or proper cantilever transducer;
- rigid clamp;
- removable tip-mass set;
- dedicated piezo energy-harvesting PMIC / evaluation board;
- appropriately voltage-rated input and output storage;
- optional protected supercapacitor;
- power-good/load switch;
- known load such as a sensor/MCU or LED pulse;
- DMM; oscilloscope strongly preferred.

### Why resonance is empirical

Measure the actual vibration spectrum, choose a repeatable peak, adjust mass/geometry, and score configurations by **net energy stored over a fixed interval**, not open-circuit voltage alone.

For a multi-resonant array, compare:

1. spectrum-targeted resonators;
2. uniformly staggered resonators;
3. phi-spaced experimental resonators.

Hold mechanical input, total piezo area, mass, conditioning, storage, and test duration constant.

---

## Proving harvested energy

Open-circuit voltage is not enough.

For a capacitor:

```text
E = 1/2 C V²
```

For a rise from `V1` to `V2` during `Δt`:

```text
P_stored = [1/2 C (V2² - V1²)] / Δt
```

This net storage measurement naturally includes rectifier/converter/leakage losses that matter to the application.

### Minimum test matrix

- **A — no vibration:** measure leakage baseline.
- **B — target vibration / no load:** measure charge curve `V(t)`.
- **C — target vibration / known resistor:** calculate delivered power.
- **D — real gated load:** demonstrate charge → wake → task → sleep.
- **E — off-resonance control:** compare to tuned configuration.

Run repeated trials under the same source condition.

---

## Load architecture

```text
while storage_voltage < V_HIGH:
    load_off()

load_on()
sample_or_transmit()

when storage_voltage <= V_LOW:
    load_off()
```

`V_HIGH` and `V_LOW` require hysteresis. Without it, brownout chatter can waste most of the harvested energy.

The useful system question is not “can I see volts?” but:

> Does average harvested energy exceed average load energy at the selected duty cycle?

---

## RF extension

RF harvesting is real but GHz rectifiers are layout-sensitive. The robust path is an evaluation/reference design with a known antenna/matching/rectifier/energy-management chain.

At 2.4 GHz, physical PCB geometry and nonlinear input impedance are part of the circuit. Breadboard success should not be assumed.

Recommended acceptance test:

1. characterize storage with RF source off;
2. repeat with controlled RF source on at known geometry/distance;
3. demonstrate a stored-energy increase above the off baseline;
4. document antenna, frequency, source, distance, matching, storage, duration, and measured joules.

---

## Realistic target tiers

These are engineering target bands, not guarantees:

| Tier | Example net stored power | Interpretation |
|---|---:|---|
| P0 | measurable joules from taps/impacts | conversion/storage proof |
| P1 | 10–100 µW avg | weak/ambient vibration; very low-duty sensing |
| P2 | 0.1–1 mW avg | useful continuous vibration; periodic telemetry |
| P3 | 1–10+ mW avg | strong matched machine vibration; larger buffer/more frequent load |
| RF | commonly µW-class ambient | supplemental energy / slow storage |

The decisive measurement is the actual source-transducer-electronics-load system under its real environmental condition.

---

## Definition of “works”

HEHS v2 succeeds when a third party can reproduce a positive net-energy measurement under a defined source condition and the stored energy performs a defined task.

Checklist:

- source characterized;
- transducer output measured;
- storage-energy increase measured;
- leakage baseline measured;
- power/joules calculated;
- load duty cycle measured;
- at least three repeat runs;
- tuned-vs-control comparison;
- voltage ratings respected;
- raw measurement data retained.

A blinking LED can be a first proof. A duty-cycled wireless sensor is a stronger second proof. Phone charging is not the sensible acceptance criterion for this prototype scale.

---

## Safety boundaries

- Do not sand/grind damaged piezo ceramic; some materials may contain lead compounds.
- Respect potentially high piezo open-circuit voltage and PMIC input protection.
- Never exceed capacitor/supercapacitor voltage ratings.
- Lithium storage requires chemistry-appropriate charging/protection.
- Use compliant RF transmitters and legal power levels.
- Prototype on safe low-energy fixtures before installing on industrial machinery; follow appropriate electrical/mechanical safety and lockout procedures.

---

## Engineering position

```text
MEASURE FIRST.
TUNE TO THE REAL SOURCE.
USE THE RIGHT POWER ELECTRONICS.
STORE SAFELY.
GATE THE LOAD.
PROVE IT IN JOULES.
PUBLISH THE RESULT EVEN WHEN IT IS SMALLER THAN HOPED.
```

That is HEHS v2.
