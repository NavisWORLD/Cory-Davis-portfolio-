# CORY DAVIS // VERIFIED PUBLIC TECHNICAL LINEAGE

> **Purpose:** give hiring managers, engineers, and research reviewers a fast, source-linked view of how CST/COSMOS evolved from early adaptive-memory experiments into persistent state, evolving world state, autonomous agent loops, bounded learning systems, retrievable memory, and later reusable engineering surfaces.

This page is intentionally about **engineering lineage, not disputes**.

It answers one hiring question:

> **What technical problems did Cory keep returning to, and when did they become inspectable source mechanisms?**

The recurring motifs are visible in source history: persistent memory, adaptive internal state, feedback-driven learning, evolving environment state, sensory input, multi-store memory, perception/cognition/action loops, bounded retention, retrieval, continuous study, and later cross-language productization.

---

## The short version

```text
adaptive state
     ↓
rolling / bounded memory
     ↓
persistent state on disk
     ↓
automatic restoration
     ↓
evolving environment / world state
     ↓
sensory input + networked simulation
     ↓
autonomous hypothesis → action → data → knowledge
     ↓
vector / object / graph memory
     ↓
continuous learning + pattern memory
     ↓
episodic retrieval + autonomous study
     ↓
COSMOS reusable runtime / evaluation / teaching stack
     ↓
Synapse Flow / Synapse OS productization
```

The hiring signal is not that every early implementation was perfect. It is that the same systems problem was repeatedly **implemented, revised, bounded, measured, corrected, and decomposed into more reusable architecture**.

---

# 2025-01-30 // Early adaptive memory + learning receipt

**Public source:** `PHERACLEASE/test`  
**Commit:** [`10e86764c6d743b5ceaaaf1baab7279a0d6f0ba5`](https://github.com/PHERACLEASE/test/commit/10e86764c6d743b5ceaaaf1baab7279a0d6f0ba5)  
**Public timestamp:** `2025-01-30T07:13:05Z`

The 1,908-line source snapshot contains:

- an explicit `LearningMechanism`;
- fixed-size / rolling particle memory;
- memory updated from frequency-derived information;
- memory-informed adaptive behavior;
- neural-network output participating in adaptation;
- feedback-driven evolution of mathematical parameters;
- `cosmic_brain.json` accumulation of timestamped state data;
- loaders for JSON, SQLite, BA2 and pickle sources.

### Hiring signal

Incoming information changes retained internal state, retained state participates in later computation, and the process writes evolving state outside the running process.

### Provenance note

Cory identifies `PHERACLEASE` as a legacy account. The public GitHub record independently establishes the source and timestamp, while the identity link is kept as a separate provenance statement because the inspected public profile metadata did not independently cross-link `PHERACLEASE` and `NavisWORLD`.

---

# 2025-02-26 // Persistent model memory across executions

**Repository:** [`NavisWORLD/CosmicSynapse`](https://github.com/NavisWORLD/CosmicSynapse)  
**Commit:** [`f4e7da1f1bf3fba07a23a3de932e675bea5078bd`](https://github.com/NavisWORLD/CosmicSynapse/commit/f4e7da1f1bf3fba07a23a3de932e675bea5078bd)  
**Public timestamp:** `2025-02-26T03:46:15Z`

CST-LM makes the persistence architecture explicit:

- `self.memory = []`;
- `self.state_file = "cst_lm_state.json"`;
- `self.load_state()` during initialization;
- `learn(...)` appending retained items;
- memory bounded to 1,000 entries;
- `save_state()` serializing vocabulary + memory;
- `load_state()` restoring serialized state.

The larger CST simulation committed at the same time also carries multiple retained histories and a `cosmic_brain.json` state surface.

### Hiring signal

This is the clean transition into a recognizable stateful software architecture:

**learn -> retain -> bound -> serialize -> later initialize -> restore**.

### Code-quality boundary

The historical standalone source is strong disclosure evidence for the architecture. It is not presented as pristine production packaging, and later engineering work should be evaluated separately from this early artifact.

---

# 2025-05-21 // Evolving simulated world state + sensory bridge

**Repository:** [`NavisWORLD/The-theory-of-CST`](https://github.com/NavisWORLD/The-theory-of-CST)  
**Commit:** [`b96a56501cb447cb68e2683915d22024a0c526dd`](https://github.com/NavisWORLD/The-theory-of-CST/commit/b96a56501cb447cb68e2683915d22024a0c526dd)  
**Public timestamp:** `2025-05-21T08:04:53Z`

This milestone was missing from earlier portfolio versions and materially improves the engineering chronology.

The historical Python/Unity source contains:

- entities with persistent/evolving state such as position, velocity, energy/synaptic variables and ecosystem information;
- high-dimensional simulation variables projected into a live interactive environment;
- microphone/audio-derived input feeding the state update path;
- TCP communication between the Python simulation backend and Unity;
- procedural generation of planets, atmospheres, ecosystems and visual properties;
- `MemoryNodeLog` / tokenized logging surfaces for timestamped state observations;
- continuously interacting entities rather than a single stateless render.

### Hiring signal

The research line expands from **memory inside a model/process** into **state maintained about an evolving environment**.

That is relevant to present-day world-state and spatial-intelligence engineering: persistent scene/entity state, sensory updates, temporal evolution, simulation, and action-relevant representations.

### Claim boundary

This is **not** presented as proof that Cory invented world models, model-based RL, or spatial intelligence. Those fields have older literature and systems. The supported statement is that Cory's public work independently developed a persistent, sensory-driven, evolving environment architecture by May 2025.

---

# 2025-10-28 02:21:23Z // Original A-LMI autonomous learning architecture

**Repository:** [`NavisWORLD/cosmic-synapse-A-lmi`](https://github.com/NavisWORLD/cosmic-synapse-A-lmi)  
**Commit:** [`527cd7084d25c40275af77b5b7a5397a31ed6179`](https://github.com/NavisWORLD/cosmic-synapse-A-lmi/commit/527cd7084d25c40275af77b5b7a5397a31ed6179)  
**Public timestamp:** `2025-10-28T02:21:23Z`

This is now the **primary A-LMI chronology anchor**, earlier than the v2 receipt previously used in this portfolio.

The source/documented implementation includes:

- web and audio perception;
- LightToken processing;
- Milvus vector memory;
- MinIO raw/object storage;
- Neo4j temporal knowledge graph;
- knowledge-gap discovery;
- hypothesis generation;
- action/experiment planning;
- a closed loop from **hypothesis -> action -> data -> knowledge**;
- autonomous learning tests and subsystem tests.

### Hiring signal

The system is no longer only retaining state. It is organized around **finding what it does not know, creating work to reduce the gap, storing the result, and repeating**.

That is directly relevant to agent infrastructure, research automation, orchestration, retrieval systems, local AI and experimental R&D.

---

# 2025-10-28 17:05:40Z // A-LMI v2 expansion

**Repository:** [`NavisWORLD/cosmic-synapse-A-lmi-v.2`](https://github.com/NavisWORLD/cosmic-synapse-A-lmi-v.2)  
**Commit:** [`8af672ff74f5506d1f9d26ae94ddaf1ca91a7962`](https://github.com/NavisWORLD/cosmic-synapse-A-lmi-v.2/commit/8af672ff74f5506d1f9d26ae94ddaf1ca91a7962)  
**Public timestamp:** `2025-10-28T17:05:40Z`

`a_lmi/core/agent.py` explicitly separates continuous lanes for:

- perception;
- cognition;
- vector/object/graph memory storage;
- reasoning triggers;
- action;
- autonomous hypothesis investigation;
- learning-goal handling.

### Hiring signal

v2 remains an important expansion, but it is no longer used to make the original A-LMI look later than it was.

---

# 2025-11-10 // Adaptive memory + persistence inside a realtime engine

**Repository:** [`NavisWORLD/infinite-adaptive-audio-12d-universe-engine`](https://github.com/NavisWORLD/infinite-adaptive-audio-12d-universe-engine)  
**Commit:** [`5172412deec6c037b058ba489c9676a4553a4efe`](https://github.com/NavisWORLD/infinite-adaptive-audio-12d-universe-engine/commit/5172412deec6c037b058ba489c9676a4553a4efe)  
**Public timestamp:** `2025-11-10T01:55:35Z`

The commit adds/integrates:

- a `NeuralNetworkAdapter` with forward/backward updates;
- `updateMemoryFromNeighbors()` for Hebbian-like neighbor-memory adaptation;
- live audio-frequency information written into memory slots;
- `saveTokensToStorage()` / `loadTokensFromStorage()`;
- automatic local persistence every 60 seconds;
- restoration of saved tokens on initialization.

### Hiring signal

The architecture is reused in a different domain: **realtime creative/simulation software where learned state affects a continuously running system rather than only a chat interface.**

---

# 2025-11-15 // Bounded pattern memory + continuous adaptation

**Repository:** [`NavisWORLD/infinite-adaptive-audio-12d-universe-engine`](https://github.com/NavisWORLD/infinite-adaptive-audio-12d-universe-engine)  
**Commit:** [`bbae16f878252f722112f3b1dcc5750daea6124c`](https://github.com/NavisWORLD/infinite-adaptive-audio-12d-universe-engine/commit/bbae16f878252f722112f3b1dcc5750daea6124c)  
**Correct public timestamp:** `2025-11-15T21:13:25Z`

The continuous-learning music system adds a fixed-capacity `RingBuffer` and a `BandLearningSystem` with retained pattern memory, confidence, successful-pattern tracking, key-frequency history and tempo history.

### Hiring signal

A clean example of **bounded memory functioning as an active control signal** in a realtime adaptive application.

---

# 2025-11-21 / 22 // Episodic retrieval + autonomous study

**Repository:** [`NavisWORLD/The-Cosmic-Davis-12D-Hebbian-Transformer-`](https://github.com/NavisWORLD/The-Cosmic-Davis-12D-Hebbian-Transformer-)  
**Model-lineage commit:** [`68a00b2718ee1ddaf339933f237edba06f4c3a8c`](https://github.com/NavisWORLD/The-Cosmic-Davis-12D-Hebbian-Transformer-/commit/68a00b2718ee1ddaf339933f237edba06f4c3a8c)  
**Autonomous-study commit:** [`dd70bc60faf841a51bfbc9dac1014e0462d45658`](https://github.com/NavisWORLD/The-Cosmic-Davis-12D-Hebbian-Transformer-/commit/dd70bc60faf841a51bfbc9dac1014e0462d45658)

The transformer lineage includes an explicit `EpisodicMemory` with:

- fixed memory capacity;
- circular overwrite behavior;
- stored embeddings + compact internal-state values;
- semantic similarity retrieval;
- internal-state similarity retrieval;
- retrieved memory blended back into model processing.

The following autonomous-study experiment continuously selects curriculum/source material, trains models, logs outcomes and saves checkpoints.

### Hiring signal

The architecture progresses from **memory that survives or accumulates** to **memory retrieved because it is relevant**, alongside a separate system that continues studying and preserving training progress.

### Boundary

The in-process `EpisodicMemory` is not used as the portfolio's strongest cross-restart receipt because its pointer/fill tracking is ordinary runtime state. February CST-LM remains cleaner for the automatic restoration proposition.

The autonomous study loop is also not represented as an earlier exact implementation of Hermes's later agent-authored reusable `SKILL.md` format.

---

# 2026 // Consolidation and provenance correction

Two major later repositories require special attribution handling.

## `The-Cosmic-Davis-12D-Hebbian-Transformer-ver.4.2`

Created `2026-02-28T10:33:19Z`.

The repository contains useful later Cory/COSMOS integration work, but its Git history also contains identifiable third-party/Farnsworth ancestry. One concrete example is a Jan. 25, 2026 Timo White commit adding files described as Q1-2025 enhanced-memory features.

Therefore the portfolio does **not**:

- use a filename such as `test_q1_2025_features.py` to backdate Cory's work;
- relabel Timo White/Farnsworth commits as Cory-authored;
- use imported history to establish Cory priority that is already better supported by independent 2025 source receipts.

## `Cosmos`

Created `2026-02-28T23:45:11Z`.

This is a later integration/consolidation surface with clear Farnsworth ancestry as well as COSMOS-specific additions. File presence inside `Cosmos` is therefore not automatically equivalent to Cory authorship or a 2025 date.

### Hiring signal

This correction strengthens the portfolio. A reviewer can see that **provenance is audited rather than flattened** and that strong 2025 claims rely on cleaner independent source history.

---

# 2026-08 // From research lineage to reusable engineering surfaces

The August 2026 work is the productization/decomposition phase. Earlier motifs are split into reusable public systems across:

- persistent/semantic memory;
- CNS-style adapters;
- bio/sensory integration;
- quantum provenance bridges;
- realtime music;
- simulation;
- media continuity;
- Rust / C++ / Python integration;
- accessibility and human-reviewed workflows;
- manuals, teaching guides and evidence ledgers.

## Synapse Flow / Synapse OS

[`NavisWORLD/Synapse-os-`](https://github.com/NavisWORLD/Synapse-os-) adds a distinct 2026 systems layer. Commit `d11bc54263f240b1b2cb01159a0a3d23086c7995` on `2026-08-13T19:21:59Z` promotes Synapse Flow into a bounded state-oriented `.syn` language with state, expressions, control flow, procedures, modules, assertions, deterministic limits, allowlisted expression evaluation, tests and OS-facing control statements.

This is presented as a **2026 language/runtime achievement**, not retroactively inserted into the 2025 priority chain.

---

# Why this matters to a hiring team

| Engineering problem | Verified public lineage |
|---|---|
| Stateful systems | rolling state -> serialized state -> restored state |
| Environment/world state | evolving entities -> sensory updates -> networked simulation |
| Long-running memory | bounded lists -> ring buffers -> episodic retrieval |
| Agent architecture | perception -> memory -> hypothesis -> action -> new data |
| Retrieval | vector/object/graph memory -> episodic similarity search |
| Continuous adaptation | explicit memory updates -> neighbor learning -> pattern confidence |
| Autonomous work | knowledge-gap investigation -> continuous study loops |
| Reproducibility | Git history -> hashes -> DOI -> benchmark/proof ledgers |
| Provenance discipline | independent source receipts -> mixed-lineage correction -> explicit attribution boundaries |
| Engineering maturity | preserve early versions -> find failures -> correct -> modularize -> teach |

The hiring case is broader than any single algorithm:

> **Cory repeatedly takes an unusual systems concept, makes it executable, preserves the lineage, discovers where it breaks, and turns the surviving mechanism into something another engineer can inspect and reuse.**

---

# Prior-art / defensive-publication note

Some dated source records may have defensive-publication relevance because they are dated technical disclosures. This page does not use the phrase "prior art" to claim ownership of abstract ideas, global first invention, copying by another party, patent invalidity, or legal exclusivity.

Patent relevance is claim-specific and depends on applicable law, effective filing dates, historical public accessibility, enablement and what each reference actually teaches.

For this portfolio, the simpler point is enough:

**the source history exists, the mechanisms can be inspected, the attribution boundaries are stated, and the engineering evolution can be dated.**

---

# Review path

1. Open the linked historical commits.
2. Read [`TIMELINE.md`](TIMELINE.md) for the full multi-clock chronology.
3. Read [`PROVENANCE.md`](PROVENANCE.md) for attribution boundaries.
4. Read [`PROOF_LEDGER.md`](PROOF_LEDGER.md) for implementation/measurement/null standards.
5. Continue to [`projects.html`](projects.html) or [`offerings.html`](offerings.html) for the present-day systems and hiring map.

**BUILD STRANGE // MEASURE HARD // LEAVE A MAP**