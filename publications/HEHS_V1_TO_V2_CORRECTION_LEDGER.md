# HEHS // V1 → V2 CORRECTION LEDGER

**Historical artifact:** `HEHS_Weekend_Prototype_Guide.md.pdf`  
**SHA-256:** `b0e572dcc334aca09396695583075080f4dfe953b42e964fce5964b9fb8033a3`  
**Current engineering reference:** `HEHS_v2_Engineering_Prototype_Guide`  
**DOCX SHA-256:** `6628ae27052f7ad57ac971a2d3d78ec6aa732f42bcbd12180ca7e38f0796566c`  
**PDF SHA-256:** `2b316c4d1cc31fce51b70fc2a3fbd555e0569517a22a937f59505bd3b6c0b7e6`

This ledger exists so the portfolio does not silently erase early engineering mistakes. **Where v1 and v2 conflict, v2 supersedes v1.**

| Topic | Historical v1 position | v2 correction | Why it matters |
|---|---|---|---|
| Power expectations | Broad 1–50 mW headline and scenario estimates before characterization | No source-specific power claim until vibration/RF source and intended load are measured | Energy harvesters are source-dependent systems; a blanket promise is not defensible. |
| Piezo front end | General TPS61200 boost path after a bridge | Dedicated piezo/harvester PMIC such as LTC3588-1 class, or source-appropriate nano-power management after rectification | High-impedance intermittent AC sources have different startup/loading behavior from ordinary low-voltage DC sources. |
| Storage voltage | 10 F / 2.7 V supercap shown around 3.3/5 V output concepts | Storage must be voltage-rated for the actual bus or use correct protected/balanced topology | Prevents overvoltage and unsafe design. |
| 2.4 GHz dipole | Two ~6 cm arms | Start near ~31 mm per arm for a center-fed half-wave dipole; tune for construction | Corrects wavelength/element geometry. |
| Golden-ratio resonators | Presented as automatically minimizing interference/maximizing total power | Phi spacing is an experiment only; compare against equal spacing and spectrum-targeted tuning | Removes an unsupported design law and makes it falsifiable. |
| Multiple piezos | Raw outputs could be combined directly | Condition matched groups separately, then combine on DC side unless phase/impedance is deliberately controlled | Avoids cancellation/loading interaction. |
| Ambient Wi-Fi | Broad milliwatt-like expectations in some scenarios | Treat ambient far-field RF as low-power supplemental harvesting unless a controlled compliant source is used | Aligns design targets with link budget and conversion reality. |
| Phone charging | Included as an experimental/use case path | Not a normal acceptance criterion for this scale; target intermittent sensors/telemetry/stored-energy proof | Makes the load match the available energy budget. |
| Proof metric | Voltage/current demonstrations mixed with power expectations | Primary proof is stored energy into known capacitance/load, repeatability, leakage baseline, and duty-cycle energy balance | Open-circuit voltage can be high while useful power is tiny. |
| Resonance optimization | Strong fixed-ratio framing | Measure actual source spectrum and tune mass/geometry empirically | Resonance should match the real excitation source. |

## Why preserve v1?

Because a public engineering portfolio becomes more credible when it records **how a design changed under scrutiny**.

```text
EARLY IDEA
   ↓
build assumptions
   ↓
identify unsafe / unsupported / weak assumptions
   ↓
correct electrical + RF architecture
   ↓
replace promises with measurements
   ↓
publish both lineage and current reference
```

V1 remains useful as historical provenance. It is **not** the recommended current build guide.

## Current rule

For an HEHS implementation, begin with [`HEHS_V2_ENGINEERING_GUIDE.md`](HEHS_V2_ENGINEERING_GUIDE.md) and verify the exact source artifact against [`../ARTIFACTS.sha256`](../ARTIFACTS.sha256).
