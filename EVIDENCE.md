# Portfolio Evidence Standard

The portfolio is designed to sell the engineering **without inflating the science**.

## Evidence labels

- **IMPLEMENTED** — inspectable code or artifact exists.
- **OBSERVED** — captured runtime evidence shows execution or persistent state.
- **MEASURED** — a declared benchmark produced a metric.
- **NULL** — the declared success condition was not supported.
- **HYPOTHESIS** — a falsifiable interpretation that still needs evidence.
- **METAPHOR / MODEL** — useful system language, not a literal biological or physical claim.

## Proof-layer distinction

Different records answer different questions:

| Record | Supports | Does not support by itself |
|---|---|---|
| SHA-256 | exact byte identity/integrity | scientific truth, authorship |
| Git commit | public source/version lineage | originality of every dependency/upstream byte |
| DOI | stable deposited publication record | peer review or correctness of every claim |
| Runtime log/test | a path executed under captured conditions | broad generalization |
| Controlled benchmark | result for declared model/data/seeds/metric | universal superiority |
| Independent replication | repeatability in the replicated scope | untested adjacent claims |

See [`PROOF_LEDGER.md`](PROOF_LEDGER.md) and [`ARTIFACTS.sha256`](ARTIFACTS.sha256).

---

## Current bounded statements

### COSMOS

**Implemented / observed in documented project lineages:** local model serving, persistent memory/state stores, adaptive/plasticity mechanisms, local services, browser/sensory prototypes, heartbeat-style maintenance, evidence tooling, and modular controller concepts.

**Not established:** machine consciousness, sentience, a literal biological nervous system, or a physical cosmological mechanism merely because those terms appear in architecture metaphors.

### Dynamic state / dyn12

**Measured, bounded result:** in the documented frozen-corpus seven-rung state-ladder experiments, dyn12 produced the strongest mean validation loss among the tested mechanism rungs, improved over the no-state baseline across the three reported seeds, and was cheap in parameter cost.

**Important boundary:** this is not a claim that twelve channels are universally optimal, that dyn12 beats every static architecture on absolute loss, or that more state dimensions always help. The documented ladder itself showed that more dimensions did **not** monotonically improve the result.

### Controlled dyn12 / dyn42 / dyn54 reference ablation — 2026-08-20

**MEASURED, reference-model stress test.** Seven conditions were trained under a frozen protocol across seeds `17, 23, 41, 73, 101`, with 500 AdamW updates per seed/condition and 2,048 held-out examples per run. The Transformer-family conditions were parameter-matched at 17,128 parameters and shared identical initialization hashes within each seed.

On overall held-out accuracy:

| Condition | Accuracy | Assoc. recall | XOR | Δ vs Transformer |
|---|---:|---:|---:|---:|
| Transformer | 46.68% | 31.61% | 5.92% | — |
| EMA54 mixture | **66.81%** | **92.62%** | 6.22% | **+20.13 pp** |
| static54 mixture | 46.95% | 32.38% | 5.95% | +0.27 pp |
| dyn12 mixture | 57.89% | 65.42% | 6.25% | +11.21 pp |
| dyn42 mixture | 58.01% | 66.16% | 5.86% | +11.33 pp |
| dyn54 mixture | **61.15%** | **76.25%** | 5.36% | **+14.47 pp** |

The strongest falsification result is that **generic learned EMA54 state outperformed dyn54 on all 5/5 seeds**. The paired dyn54-minus-EMA54 accuracy difference was `-5.65 pp`, bootstrap 95% CI `[-9.54, -2.02]`.

The important nulls were preserved:

- static54 vs Transformer: `+0.27 pp`, bootstrap 95% CI `[-0.39, +0.98]`;
- XOR remained at or near the 6.25% chance level across Transformer, EMA54, static54, dyn12, dyn42, and dyn54;
- 22 null-result records remain in the machine-readable null ledger.

Same-checkpoint dyn54 interventions also showed that the trained model was using the state pathway: gate-zero, shuffled-state, and static-state substitutions all reduced accuracy materially relative to dyn54 ON.

**Bounded conclusion:** dynamic state passed through the shared state-affinity mixture helped the associative-memory stress test, and dyn54 was strongest among dyn12/dyn42/dyn54. **Not supported:** a claim that the specific dyn equations are uniquely superior, because the simpler generic EMA54 dynamic-state control was stronger.

**Evidence boundary:** this is the public/reference-model mechanism experiment. It is **not** relabeled as the missing canonical PHOS checkpoint ablation and does not establish broad language-model superiority.

Portfolio evidence package: [`research/cst-controlled-ablation-2026-08-20/`](research/cst-controlled-ablation-2026-08-20/).

### Mechanism preflight

A task metric is not trusted until the intended mechanism is shown to be alive. The public documentation preserves silent-failure cases including wrong-axis normalization, gate saturation/clamping, near-identity Gaussian kernels, corpus drift, telemetry schema loss, and invalid text/state causal pairing.

### Paired sensory/internal-state conditioning

**NULL versus plain attention** in the documented 2026-07-30 benchmark. Aligned state outperformed some destroyed-pairing conditioned controls but did not satisfy the declared success criterion against plain attention. The null remains part of the record.

### Quantum provenance

**Supported for specific archived paths:** measured quantum records can be preserved as provenance/nondeterminism sources and deterministically transformed into downstream seeds/initialization artifacts.

**Not established:** a general predictive, creative, or machine-learning accuracy advantage from quantum randomness in the current matched public tests.

### Lorenz / nonlinear state

A correct Lorenz implementation can be validated mathematically and numerically. That validation does not establish literal dark-matter physics or a cosmological mechanism.

### Sensory / bio interfaces

Phone microphone, motion, camera-derived pulse proxies, tap timing, and optional native heart-rate bridges can be used as expressive/control inputs. Camera-derived pulse estimation is not presented as medical-grade sensing, and phone sensor paths are not quantum measurements.

### Persistent memory and self-monitoring

Durable state, retrieval, scheduled maintenance, internal summaries, and self-monitoring are software mechanisms. They do not establish machine consciousness. “Forever memory” means durable retention plus retrieval from retained records, not infinite model context.

### Reality Bridge prediction research

Prediction locks, walk-forward testing, baselines, deterministic seeds, and append-only evidence can make a prediction experiment auditable. They do not make inherently random processes reliably predictable or justify guaranteed-win claims.

---

## HEHS v2 // correction as evidence

The historical HEHS weekend guide is preserved but **superseded where v2 corrects it**.

The current v2 engineering position replaces several early assumptions with measurable, safer criteria:

- source/load characterization before power claims;
- source-appropriate harvester PMICs rather than an ordinary boost shortcut from raw piezo;
- voltage-rated/protected storage;
- corrected RF antenna starting geometry;
- phi/golden-ratio spacing treated as an experiment rather than a power-maximizing law;
- separately conditioned piezo sources before DC-side combining;
- ambient RF treated as low-power supplemental harvesting;
- stored joules, leakage baselines, repeatability, and duty-cycle energy balance as proof metrics.

**Current status:** engineering prototype/reference guide until a specific physical implementation publishes its raw source/load measurements and repeatability data.

See [`publications/HEHS_V1_TO_V2_CORRECTION_LEDGER.md`](publications/HEHS_V1_TO_V2_CORRECTION_LEDGER.md).

---

## COSMOS HEARTLIGHT

**Implemented:** public PWA/reference software, C++17 and Rust reference cores/FFI paths, documentation, tests/CI, stakeholder guides, privacy/safety architecture.

**Not established by software tests:** clinical efficacy, diagnosis accuracy, legal/accessibility certification, hidden emotional truth, behavior-risk prediction, or authority to automate discipline/IEP/medical decisions.

HEARTLIGHT intentionally treats learner communication and human review as higher-authority signals than automated observations.

---

## COSMOS Media Engine

**Implemented engineering surface:** local-first media orchestration/rendering, continuity state, deterministic receipts, computational candidate branches, long-form chunk/checkpoint workflows, storybook generation, API/JSONL integration, cross-language planning cores, optional IBM provenance.

**Term boundary:** `multiverse` refers to computational candidate branches. It is not evidence of physical multiverse access or cross-universe injection.

**Quantum boundary:** measurement-derived provenance/entropy can be recorded; quantum creative/performance advantage is not established by the existence of that source.

---

## Publications and hashed source artifacts

Primary document hashes are recorded in [`ARTIFACTS.sha256`](ARTIFACTS.sha256). Repository-native reader editions live under [`publications/`](publications/).

The source-document SHA proves whether a candidate source file is byte-identical to the hashed artifact. The Markdown reader editions are navigation/teaching companions, not byte-identical substitutes for the DOCX/PDF.

The historical HEHS source remains hashable even though its engineering recommendations are superseded. **Preserving a file does not endorse its old claims.**

---

## Privacy evidence boundary

Reproducibility does not require maximum personal-data disclosure.

The portfolio does not treat private conversations, credentials, family records, travel records, raw camera/audio/biosignal data, private paired datasets, personal astrology documents, or subjective personal analyses as engineering proof simply because they exist in a working archive.

Publish the mechanism, code version, data schema/fingerprint, aggregate benchmark, controls, seeds, and necessary reproducibility metadata while minimizing unnecessary personal exposure.

---

## Review path

1. [`PROOF_LEDGER.md`](PROOF_LEDGER.md)
2. [`PROVENANCE.md`](PROVENANCE.md)
3. [`PUBLICATIONS.md`](PUBLICATIONS.md)
4. [`ARTIFACTS.sha256`](ARTIFACTS.sha256)
5. exact project repository / commit
6. mechanism preflight / failure archive
7. baseline + controls + per-seed result
8. null/retraction history
9. portable/reference implementation and CI where available

## Standard

A result becomes more valuable when a reviewer can tell exactly what would falsify it.

```text
IMPLEMENT → INSTRUMENT → FREEZE COMPARISON → TEST → PRESERVE NULLS → REPLICATE → EXPAND CLAIM
```

Nulls, retractions, mechanism failures, corrections, and unresolved provenance remain visible rather than being edited out of the story.