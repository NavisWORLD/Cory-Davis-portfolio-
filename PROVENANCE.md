# Portfolio Provenance and Attribution

This repository is the public presentation, publication-index, and proof-navigation layer for **Cory Shane Davis / NavisWORLD**. It links to a larger body of work whose files do not all share one origin, license, date, or evidence level.

## What this repository owns

The original portfolio-specific static site code, ASCII rendering layer, navigation, résumé presentation, project summaries, publication reader editions, proof/timeline/offering indexes, and portfolio-specific tests/documentation in this repository are released under this repository's MIT License unless a file explicitly states otherwise.

## What this repository does not automatically relicense

A link, summary, reader edition, or hash in this portfolio does **not** change the license, ownership, or attribution requirements of:

- COSMOS historical/runtime files;
- Davis CST repositories and historical artifacts;
- model weights or Hugging Face artifacts;
- third-party or upstream source code;
- datasets;
- external images, media, papers, provider records, or hardware reference material;
- adapted/derived code in linked repositories;
- source Word/PDF publications distributed under a different project license.

Each linked project remains governed by its own license and provenance record.

---

## Public attribution labels

- **CORY-AUTHORED / VERIFIED** — supported by primary source and/or reliable commit/source history.
- **ADAPTED / DERIVED** — Cory-directed or Cory-modified work with identifiable upstream ancestry.
- **UPSTREAM / THIRD PARTY** — external work retained with its own attribution/license.
- **RECONSTRUCTION / REFERENCE** — newly written teaching/rebuild code expressing a documented mechanism; not claimed as a byte-for-byte historical implementation.
- **EXPERIMENTAL** — active mechanism/prototype whose significance remains under test.
- **UNKNOWN / NEEDS AUDIT** — attribution is not yet strong enough for a confident claim.

### Explicit upstream/fork example

`NavisWORLD/hermes-agent` is included in the public repository universe because it is relevant to the agent/integration ecosystem, but it is a fork/upstream lineage reference and is **not** presented as wholly Cory-authored source.

## Rule for reviewers

**File presence is not proof of authorship.**

For mixed-lineage repositories, inspect commit history, licenses, file headers, upstream references, source records, and the actual transformation history before attributing a component.

---

## Source-publication artifact policy

The portfolio now records cryptographic SHA-256 identities for primary source Word/PDF documents in [`ARTIFACTS.sha256`](ARTIFACTS.sha256).

### What the digest means

A SHA-256 digest answers:

> Is this candidate file byte-for-byte identical to the source artifact that was hashed?

It does **not** by itself prove:

- scientific truth;
- authorship;
- date of first creation;
- peer review;
- originality of every embedded idea or dependency.

### Repository reader editions

Files under [`publications/`](publications/) are repository-native reader/teaching companions derived from the source documents for navigation and public review.

They are intentionally described as **reader editions**, not as byte-identical replacements for the original DOCX/PDF. Verify source-file identity against `ARTIFACTS.sha256` when exact-source provenance matters.

### Current primary source-artifact set

- `COSMOS_CST_UNIVERSE_MANUAL.docx`
- `Reality_Bridge_Alien_Conductor_Local_AI_Band_Engineering_Book(1).docx`
- `HEHS_v2_Engineering_Prototype_Guide.docx`
- `HEHS_v2_Engineering_Prototype_Guide.pdf`
- `HEHS_Weekend_Prototype_Guide.md.pdf` — retained as historical/superseded engineering lineage

The canonical catalog and current/superseded status are in [`PUBLICATIONS.md`](PUBLICATIONS.md).

---

## Timeline provenance policy

[`TIMELINE.md`](TIMELINE.md) deliberately keeps multiple clocks separate:

1. **career dates** from the public résumé/work history;
2. **research-lineage dates** stated inside project/manual history;
3. **public artifact dates** independently visible in GitHub/deposit metadata.

A research manual stating `2018 → 2024 → 2026` is preserved as project-history provenance. It is not rewritten as a GitHub timestamp. Conversely, a repository created in 2026 is not used to claim the underlying idea began only in 2026.

---

## DOI / deposit provenance

The portfolio links to the deposited research record:

**12-Dimensional Cosmic Synapse Theory**  
DOI: `10.5281/zenodo.17574447`

The DOI establishes a stable deposited/citable record. It does not substitute for experimental validation or prove every interpretation attached to the research program.

---

## Corrections and superseded artifacts

Historical artifacts are not silently deleted merely because later engineering corrected them.

The HEHS weekend prototype guide is retained/hashable as historical provenance, while the v2 guide is explicitly the current engineering reference. [`publications/HEHS_V1_TO_V2_CORRECTION_LEDGER.md`](publications/HEHS_V1_TO_V2_CORRECTION_LEDGER.md) identifies the corrections.

Preserving an old artifact is **not endorsement of an old claim**.

The same principle applies to software experiments: null results, no-op mechanisms, retractions, and replaced implementations are retained when they are useful to understand the lineage.

---

## Public / private boundary

The portfolio intentionally does **not** publish private material simply to create a larger “proof pile.”

Private-by-default categories include:

- private repositories and research logs;
- API keys, credentials, tokens, `.env` values;
- personal/private conversations;
- family/private correspondence and records;
- travel records;
- raw camera/audio/biosignal streams;
- private paired conversation datasets;
- personal astrology documents;
- subjective or interpretive personal analyses unless separately reviewed/consented and clearly labeled;
- any source whose publication would create unnecessary privacy or safety risk.

Reproducibility should use code versions, schemas, hashes, aggregate measurements, controlled datasets, seeds/configuration, and necessary evidence without exposing irrelevant personal data.

---

## Public repository universe

The canonical current public index is [`REPOSITORY_UNIVERSE.md`](REPOSITORY_UNIVERSE.md). As of the 2026-08-12 portfolio consolidation, it records 24 public NavisWORLD repositories and explicitly labels fork/upstream context where known.

Private repositories are intentionally omitted rather than “redacted into visibility.”

---

## Evidence is a separate question from provenance

Provenance asks **where did the artifact come from?**  
Evidence asks **what does the artifact/test support?**

Use [`EVIDENCE.md`](EVIDENCE.md) and [`PROOF_LEDGER.md`](PROOF_LEDGER.md) for claim strength, benchmarks, nulls, and proof-layer distinctions.

## Canonical review surfaces

- [`README.md`](README.md) — complete navigation/start point
- [`REPOSITORY_UNIVERSE.md`](REPOSITORY_UNIVERSE.md) — public source graph
- [`PUBLICATIONS.md`](PUBLICATIONS.md) — publication/manual catalog
- [`ARTIFACTS.sha256`](ARTIFACTS.sha256) — exact source-file identities
- [`TIMELINE.md`](TIMELINE.md) — career/research/artifact clocks
- [`PROOF_LEDGER.md`](PROOF_LEDGER.md) — proof model and bounded claim anchors
- [`EVIDENCE.md`](EVIDENCE.md) — evidence/claim standard
- [`CITATION.cff`](CITATION.cff) — portfolio citation metadata
- https://github.com/NavisWORLD/Cosmos — central public runtime/reconstruction source

The purpose of this portfolio is to make the strongest attributable engineering easier to find **without pretending every historical artifact has one author, one license, one date, or one evidence level**.
