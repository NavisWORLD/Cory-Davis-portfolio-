# CORY DAVIS // VERIFIED PUBLIC TECHNICAL LINEAGE

> **Purpose:** give hiring managers, engineers, and research reviewers a fast, source-linked view of how the CST/COSMOS architecture evolved from early adaptive-memory experiments into persistent state, autonomous agent loops, bounded learning systems, and retrievable memory.

This page is intentionally about **engineering lineage**, not disputes.

It answers a simple hiring question:

> **What technical ideas did Cory keep returning to, and when did they become inspectable public mechanisms?**

The answer is visible in source history: persistent memory, adaptive internal state, feedback-driven learning, multi-store memory, perception/cognition/action loops, bounded retention, retrieval, and continuous study all appear as recurring design themes across the public lineage.

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
perception → cognition → action
     ↓
vector / object / graph memory
     ↓
continuous learning + pattern memory
     ↓
episodic retrieval + autonomous study
     ↓
COSMOS reusable runtime / evaluation / teaching stack
```

For a hiring reviewer, the important signal is not that every early implementation was perfect. It is that the same systems problem was repeatedly **implemented, revised, bounded, measured, and decomposed into more reusable architecture**.

---

# 2025-01-30 // Early adaptive memory + learning receipt

**Public source:** `PHERACLEASE/test`  
**Commit:** [`10e86764c6d743b5ceaaaf1baab7279a0d6f0ba5`](https://github.com/PHERACLEASE/test/commit/10e86764c6d743b5ceaaaf1baab7279a0d6f0ba5)  
**Public timestamp:** `2025-01-30T07:13:05Z`

The 1,908-line source snapshot contains several ideas that later become recurring COSMOS/CST motifs:

- an explicit `LearningMechanism`;
- fixed-size / rolling particle memory;
- memory updated from frequency-derived information;
- a neural network used for particle adaptation;
- feedback-driven evolution of mathematical parameters;
- a `cosmic_brain.json` persistence path that accumulates timestamped state data;
- loaders for JSON, SQLite, binary BA2, and pickle sources.

### Hiring signal

This is the early stage of the architecture: **incoming information changes retained internal state, retained state participates in future computation, and the system writes evolving state outside the running process.**

### Provenance note

This portfolio treats the PHERACLEASE source as an earlier archive in the research lineage supplied by Cory Davis. The public GitHub record independently establishes the code and timestamp; identity/attribution questions should still be evaluated through the portfolio's normal provenance standard rather than inferred from file presence alone.

---

# 2025-02-26 // Persistent model memory across executions

**Repository:** [`NavisWORLD/CosmicSynapse`](https://github.com/NavisWORLD/CosmicSynapse)  
**Commit:** [`f4e7da1f1bf3fba07a23a3de932e675bea5078bd`](https://github.com/NavisWORLD/CosmicSynapse/commit/f4e7da1f1bf3fba07a23a3de932e675bea5078bd)  
**Public timestamp:** `2025-02-26T03:46:15Z`

The CST-LM implementation makes the persistence architecture much clearer:

- `self.memory = []`;
- `self.state_file = "cst_lm_state.json"`;
- `self.load_state()` is called during initialization;
- `learn(...)` appends new retained items;
- memory is bounded to 1,000 entries by removing the oldest entry;
- `save_state()` serializes vocabulary + memory;
- `load_state()` restores the serialized state.

The larger simulation committed at the same time also carries multiple retained histories and a `cosmic_brain.json` state surface.

### Hiring signal

This is a concrete transition from experimental memory into a recognizable software architecture:

**learn → retain → bound → serialize → restart → restore**.

That pattern remains one of the strongest through-lines in the later COSMOS work.

---

# 2025-10-28 // Autonomous perception → cognition → action

**Repository:** [`NavisWORLD/cosmic-synapse-A-lmi-v.2`](https://github.com/NavisWORLD/cosmic-synapse-A-lmi-v.2)  
**Commit:** [`8af672ff74f5506d1f9d26ae94ddaf1ca91a7962`](https://github.com/NavisWORLD/cosmic-synapse-A-lmi-v.2/commit/8af672ff74f5506d1f9d26ae94ddaf1ca91a7962)  
**Public timestamp:** `2025-10-28T17:05:40Z`

`a_lmi/core/agent.py` explicitly describes an **A-LMI Autonomous Agent Loop** and implements separate continuous lanes for:

- **Perception:** web and audio inputs become Light Tokens;
- **Cognition:** processed tokens are stored and checked for reasoning triggers;
- **Memory:** vector database, object storage, and knowledge-graph clients are used as separate retained stores;
- **Action:** reasoning results can produce responses, investigations, and learning-goal updates;
- **Autonomous investigation:** hypotheses can initiate additional data-gathering work.

### Hiring signal

By this point, the work is no longer just about keeping state. It is becoming a **systems architecture for an agent that senses, stores, reasons, acts, and creates additional work for itself**.

This is especially relevant to roles in agent infrastructure, local AI, orchestration, retrieval, autonomous workflows, and experimental R&D.

---

# 2025-11-10 // Adaptive memory + persistence inside a realtime engine

**Repository:** [`NavisWORLD/infinite-adaptive-audio-12d-universe-engine`](https://github.com/NavisWORLD/infinite-adaptive-audio-12d-universe-engine)  
**Commit:** [`5172412deec6c037b058ba489c9676a4553a4efe`](https://github.com/NavisWORLD/infinite-adaptive-audio-12d-universe-engine/commit/5172412deec6c037b058ba489c9676a4553a4efe)  
**Public timestamp:** `2025-11-10T01:55:35Z`

The commit adds and integrates:

- a `NeuralNetworkAdapter` with forward/backward learning;
- `updateMemoryFromNeighbors()` for Hebbian-like neighbor-memory adaptation;
- live audio-frequency information written into memory slots;
- `saveTokensToStorage()` / `loadTokensFromStorage()`;
- automatic token persistence to local storage every 60 seconds;
- restoration of saved tokens on initialization.

### Hiring signal

The architectural idea is being tested in a different domain: **realtime creative/simulation software where memory and learned state affect a continuously running system rather than only a chat interface.**

That cross-domain reuse matters. It shows the design motif was not tied to one UI or one model wrapper.

---

# 2025-11-15 // Bounded pattern memory + continuous adaptation

**Repository:** [`NavisWORLD/infinite-adaptive-audio-12d-universe-engine`](https://github.com/NavisWORLD/infinite-adaptive-audio-12d-universe-engine)  
**Commit:** [`bbae16f878252f722112f3b1dcc5750daea6124c`](https://github.com/NavisWORLD/infinite-adaptive-audio-12d-universe-engine/commit/bbae16f878252f722112f3b1dcc5750daea6124c)  
**Public timestamp:** `2025-11-15T21:13:25Z`

The continuous-learning music system adds a fixed-capacity `RingBuffer` and a `BandLearningSystem` with retained pattern memory, confidence, successful-pattern tracking, key-frequency history, and tempo history.

The retained learning state feeds future musical decisions and the live state calculation instead of existing only as a passive log.

### Hiring signal

This is a clean example of **bounded memory used as an active control signal** in a realtime adaptive application.

---

# 2025-11-21 / 22 // Episodic retrieval + autonomous study

**Repository:** [`NavisWORLD/The-Cosmic-Davis-12D-Hebbian-Transformer-`](https://github.com/NavisWORLD/The-Cosmic-Davis-12D-Hebbian-Transformer-)  
**Model-lineage commit:** [`68a00b2718ee1ddaf339933f237edba06f4c3a8c`](https://github.com/NavisWORLD/The-Cosmic-Davis-12D-Hebbian-Transformer-/commit/68a00b2718ee1ddaf339933f237edba06f4c3a8c)  
**Autonomous-study commit:** [`dd70bc60faf841a51bfbc9dac1014e0462d45658`](https://github.com/NavisWORLD/The-Cosmic-Davis-12D-Hebbian-Transformer-/commit/dd70bc60faf841a51bfbc9dac1014e0462d45658)

The transformer lineage introduces an explicit `EpisodicMemory` with:

- fixed memory capacity;
- circular overwrite behavior;
- stored embeddings + compact internal-state values;
- semantic similarity retrieval;
- internal-state similarity retrieval;
- retrieved memory blended back into model processing.

The following autonomous-study experiment implements a continuously running, self-directed study loop that selects curriculum material, trains models, logs outcomes, and saves checkpoints.

### Hiring signal

The architecture has now progressed from **memory that survives** to **memory that is retrieved because it is relevant**, alongside a separate loop that can continue studying and preserving progress.

---

# 2026 // From research lineage to reusable engineering surfaces

The 2026 portfolio is the decomposition phase.

The earlier ideas are separated into reusable systems and documentation across:

- local AI runtime and serving;
- persistent / semantic memory;
- compact dynamic state;
- agent and tool lanes;
- CNS-style adapters;
- bio/sensory integration;
- evaluation and mechanism-liveness testing;
- realtime music systems;
- media-generation continuity;
- simulation;
- Rust / C++ / Python integration;
- accessibility and human-reviewed workflows;
- manuals, teacher guides, build guides, proof ledgers, and provenance records.

The portfolio intentionally preserves failed experiments and null results alongside the surviving architecture.

---

# Why this matters to a hiring team

A recruiter does not need to believe every hypothesis in CST to evaluate the engineering signal.

The public timeline demonstrates repeated work on problems that are now central to modern AI systems:

| Engineering problem | Public lineage |
|---|---|
| Stateful systems | rolling state → serialized state → restored state |
| Long-running memory | bounded lists → ring buffers → episodic retrieval |
| Agent architecture | perception → cognition → memory → reasoning → action |
| Retrieval | vector memory / object storage / graph memory → episodic similarity search |
| Continuous adaptation | explicit learning updates → neighbor learning → pattern confidence |
| Autonomous work | hypothesis-triggered investigation → continuous study loops |
| Reproducibility | Git history → hashes → DOI → benchmark/proof ledgers |
| Engineering maturity | preserve early versions → find failures → correct → modularize → teach |

The hiring case is therefore broader than any one algorithm:

> **Cory repeatedly takes an unusual systems concept, makes it executable, keeps the historical lineage, discovers where it breaks, and turns the surviving mechanism into something another engineer can inspect and reuse.**

That is the portfolio's strongest through-line.

---

# Prior-art / defensive-publication note

Some of these dated public source records may also have **defensive prior-art value** because they are publicly accessible technical disclosures.

That is not the purpose of this page, and this portfolio does not use the phrase "prior art" to claim ownership of an abstract idea, copying by another party, patent invalidity, or legal exclusivity.

Patent relevance is claim-specific and depends on applicable law, effective filing dates, public accessibility, enablement, and what each reference actually teaches.

For this portfolio, the simpler point is enough:

**the source history exists, the mechanisms can be inspected, and the evolution of the engineering can be dated.**

---

# Review path

For a fast technical review:

1. Start with this page.
2. Open the linked historical commits.
3. Read [`TIMELINE.md`](TIMELINE.md) for the larger career/research/public-artifact clock.
4. Read [`PROVENANCE.md`](PROVENANCE.md) for attribution boundaries.
5. Read [`PROOF_LEDGER.md`](PROOF_LEDGER.md) for what counts as implementation, observation, measurement, NULL, or hypothesis.
6. Continue to [`projects.html`](projects.html) or [`offerings.html`](offerings.html) for the present-day systems and hiring map.

**BUILD STRANGE // MEASURE HARD // LEAVE A MAP**
