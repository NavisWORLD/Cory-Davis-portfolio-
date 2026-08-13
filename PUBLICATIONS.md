# CORY DAVIS // PUBLICATION & MANUAL ARCHIVE

```text
╔══════════════════════════════════════════════════════════════════════════════╗
║ PUBLICATION BUS // MANUALS // PAPERS // HASHES // REBUILD GUIDES           ║
║ claims follow instrumentation                                               ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

This is the canonical portfolio index for public books, manuals, papers, engineering guides, teaching material, and publication-grade technical documentation associated with Cory Shane Davis / NavisWORLD.

## How proof is represented

This archive deliberately separates four different things:

1. **Artifact identity** — SHA-256 establishes whether two files contain the exact same bytes.
2. **Version history** — Git commits establish a timestamped public history of repository states.
3. **Deposited publication record** — the Zenodo DOI establishes a citable deposited research record.
4. **Scientific evidence** — benchmarks, controls, replications, measurements, and nulls determine whether a technical claim is supported.

A hash is not a scientific result. A commit is not proof of authorship for every byte. A DOI is not peer-review by itself. This portfolio keeps those distinctions visible.

See [`ARTIFACTS.sha256`](ARTIFACTS.sha256), [`EVIDENCE.md`](EVIDENCE.md), and [`PROVENANCE.md`](PROVENANCE.md).

---

## 01 // COSMOS / CST — The Universe Manual

**Artifact:** `COSMOS_CST_UNIVERSE_MANUAL.docx`  
**Source SHA-256:** `26292a4e63b3fa5838865fc384682049a93a0e159f72359ec2977be4da46a36a`  
**Edition:** Canonical teaching edition, research lineage marked `2018 → 2024 → 2026`  
**Status:** PUBLIC ENGINEERING / TEACHING MANUAL  
**Publication repo:** https://github.com/NavisWORLD/Volume-I-The-COSMOS-CST-Universe-Manual.  
**Core runtime:** https://github.com/NavisWORLD/Cosmos  
**Deposited research record:** https://doi.org/10.5281/zenodo.17574447  
**Model/research surface:** https://huggingface.co/phera-ra/QC67_cosmo

### Scope

Architecture, loops, memory, state, sensory systems, quantum provenance, validation, reproducibility, runtime operations, the 12D/42D/54D state ladder, CNS, heartbeat/reconciliation, autonomous lanes, failure analysis, rebuild order, and a twelve-week teacher study guide.

### Why it matters

The manual does not require the reader to accept the early theory language. Its central rule is **claims follow instrumentation**. It translates the project from conceptual language into mechanisms that can be implemented, broken deliberately, benchmarked, and reproduced.

### Key bounded results recorded by the manual

- In the documented seven-rung frozen-corpus small-model state ladder, `dyn12` was the strongest tested mechanism rung and the most parameter-efficient of the dynamic-state variants.
- More dimensions did **not** monotonically improve the model.
- Quantum-derived provenance is auditable for specific artifacts, but matched tests did **not** establish a general predictive/accuracy advantage from quantum randomness.
- The paired measured sensory/internal-state conditioning benchmark did **not** beat plain attention and remains a documented NULL result.
- Persistent memory, autonomous loops, internal summaries, or self-description do not establish machine consciousness.

### Reader edition

See [`publications/COSMOS_CST_UNIVERSE_MANUAL_READER.md`](publications/COSMOS_CST_UNIVERSE_MANUAL_READER.md).

---

## 02 // Reality Bridge / Alien Conductor — Local AI Band Engineering Book

**Artifact:** `Reality_Bridge_Alien_Conductor_Local_AI_Band_Engineering_Book(1).docx`  
**Source SHA-256:** `eee3cb7bac40d20b1481c1a88701a58dabe6739cb151e058c23ba8cbb04d450f`  
**Edition:** Open Publication Edition  
**Status:** PUBLIC ENGINEERING BOOK  
**Repository:** https://github.com/NavisWORLD/-reality-bridge-alien-conductor-local-ai-band  
**Browser ancestry:** https://github.com/NavisWORLD/REALITY_BRIDGE_ALIEN_CONDUCTOR_III_SOUND_FIXED

### Scope

Real-time audio kernel, look-ahead scheduling, performance event bus, microphone/audio analysis, pitch/chroma/key/chord/tempo inference, phrase memory, physical-model-style guitar, piano/bass/drum/vocal agent architecture, conductor logic, musical-space management, event/audio looping, persistence, browser/iPhone implementation, C++/Python boundaries, telemetry, validation, standalone instrument extraction, and full local-band architecture.

### Accuracy boundary

The working browser ancestry is described as local DSP + music-theory logic + confidence scoring + adaptive state + generative rules + real-time interaction. The larger modular multi-agent band is explicitly separated as an engineering architecture/roadmap where a capability is not yet present.

### Reader edition

See [`publications/ALIEN_CONDUCTOR_ENGINEERING_BOOK_READER.md`](publications/ALIEN_CONDUCTOR_ENGINEERING_BOOK_READER.md).

---

## 03 // HEHS v2.0 — Harmonic Energy Harvesting System

**Artifact (Word):** `HEHS_v2_Engineering_Prototype_Guide.docx`  
**SHA-256:** `6628ae27052f7ad57ac971a2d3d78ec6aa732f42bcbd12180ca7e38f0796566c`  
**Artifact (PDF):** `HEHS_v2_Engineering_Prototype_Guide.pdf`  
**SHA-256:** `2b316c4d1cc31fce51b70fc2a3fbd555e0569517a22a937f59505bd3b6c0b7e6`  
**Status:** MEASUREMENT-FIRST ENGINEERING PROTOTYPE GUIDE

### Scope

A buildable vibration-energy-harvesting prototype using a piezoelectric cantilever, source-appropriate energy-harvesting PMIC, protected storage, power-good/load gating, and an optional independently conditioned RF harvesting channel.

### What v2 corrects

The v2 document explicitly replaces several early simplifications with safer and more defensible engineering:

- no fixed power promise before source/load characterization;
- no claim that golden-ratio spacing inherently maximizes harvested power;
- no default raw-piezo → ordinary boost-converter shortcut;
- no unsafe 2.7 V supercapacitor assumption on a 3.3/5 V rail;
- corrected 2.4 GHz antenna geometry;
- raw AC piezos conditioned separately before DC-side combining;
- ambient RF treated as a low-power supplement rather than a phone-charging source;
- success measured in stored joules, repeatability, load operation, and energy balance.

### Reader edition

See [`publications/HEHS_V2_ENGINEERING_GUIDE.md`](publications/HEHS_V2_ENGINEERING_GUIDE.md).

---

## 04 // HEHS Weekend Prototype Guide — Historical / Superseded

**Artifact:** `HEHS_Weekend_Prototype_Guide.md.pdf`  
**SHA-256:** `b0e572dcc334aca09396695583075080f4dfe953b42e964fce5964b9fb8033a3`  
**Status:** HISTORICAL / SUPERSEDED / PRESERVED FOR LINEAGE

This early guide is retained because an engineering record should preserve what was corrected, not silently erase it. Several specific early claims and circuit assumptions are superseded by HEHS v2.0. The v2 guide is the current engineering reference.

See [`publications/HEHS_V1_TO_V2_CORRECTION_LEDGER.md`](publications/HEHS_V1_TO_V2_CORRECTION_LEDGER.md).

---

## 05 // COSMOS HEARTLIGHT

**Status:** IMPLEMENTED PUBLIC OPEN-SOURCE EDUCATION / ACCESSIBILITY TOOLKIT  
**Repository:** https://github.com/NavisWORLD/COSMOS-HEARTLIGHT

HEARTLIGHT turns the COSMOS/CST systems lineage into a local-first support platform for inclusive classrooms. The public repository contains a standalone HTML application, installable PWA, C++17 core/C ABI, Rust core/FFI, platform integration guides, teacher/family/student/clinician material, educator and engineering books, a study workbook, privacy/safety documentation, research/validation guidance, and CI.

Hard boundary: HEARTLIGHT is not presented as a medical device, diagnosis engine, psychotherapy replacement, automated discipline tool, or automated IEP authority. Learner preference and human review outrank sensor/software suggestions.

See [`publications/HEARTLIGHT_PRODUCT_BRIEF.md`](publications/HEARTLIGHT_PRODUCT_BRIEF.md).

---

## 06 // COSMOS Cosmic Quantum Video & Picture Generator

**Status:** RESEARCH + ENGINEERING RELEASE  
**Repository:** https://github.com/NavisWORLD/Cosmic-quantum-video-picture-generator-

A local-first media engine and integration layer with first-party native rendering, deterministic receipts/provenance, 12D CST-inspired continuity state, branch search, long-form chunk planning/checkpoint/resume, storybook scene generation, JSONL/HTTP integration, Rust/C++ reference cores, PWA, and optional IBM Quantum measurement-derived entropy/provenance.

The repository uses `multiverse` for computational candidate branches. It does not claim physical multiverse access, cross-universe injection, machine consciousness, or quantum performance advantage.

See [`publications/COSMOS_MEDIA_ENGINE_BRIEF.md`](publications/COSMOS_MEDIA_ENGINE_BRIEF.md).

---

## 07 // Subsystem manuals and open teaching library

The broader public documentation is intentionally decomposed so engineers can adopt or review one mechanism without importing the entire project mythology or runtime.

| Area | Public surface |
|---|---|
| Persistent / reconciliation memory | https://github.com/NavisWORLD/Cosmic-reconciliation-manual- |
| CNS / seven-organ adaptive connector | https://github.com/NavisWORLD/CNS-central-nervous-system-adaptive-connector- |
| Bio / sensory integration | https://github.com/NavisWORLD/Bio-integration-pipeline- |
| IBM/Azure quantum provenance bridge | https://github.com/NavisWORLD/Quantum-azure-ibm-bridge-attachment- |
| Python / C++ / Rust CST libraries | https://github.com/NavisWORLD/Python-cst-libraries- |
| Universe / probe simulation engine | https://github.com/NavisWORLD/Reality-bridge-universal-probe-engine-sim- |
| Living Universe simulation | https://github.com/NavisWORLD/Cosmic-synapse-the-living-universe-sim-engine- |
| 12D transformer lineages | https://github.com/NavisWORLD/The-Cosmic-Davis-12D-Hebbian-Transformer-ver.4.2 |
| CST theory lineage | https://github.com/NavisWORLD/The-theory-of-CST |

---

## 08 // Archival material that is not promoted as technical proof

The working Library contains personal and/or interpretive documents that are intentionally **not** placed into the primary engineering evidence archive merely because they exist. Personal travel records, astrology reports, private records, raw family material, biometric/media data, and subjective third-party/AI analyses do not become engineering proof by being uploaded.

If an archival analysis is ever published, it should be clearly labeled **ARCHIVAL / INTERPRETIVE / NOT INDEPENDENT VERIFICATION** and separately consented for public release.

---

## Verification

On macOS/Linux:

```bash
sha256sum FILE
# or
shasum -a 256 FILE
```

On PowerShell:

```powershell
Get-FileHash .\FILE -Algorithm SHA256
```

Compare the resulting digest to [`ARTIFACTS.sha256`](ARTIFACTS.sha256).

---

**BUILD STRANGE // HASH THE ARTIFACT // MEASURE THE CLAIM // PRESERVE THE NULL**
