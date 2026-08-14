# Portfolio Provenance and Attribution

This repository is the public presentation, publication-index, and proof-navigation layer for **Cory Shane Davis / NavisWORLD**. It links to a larger body of work whose files do not all share one origin, license, date, or evidence level.

## What this repository owns

The original portfolio-specific static site code, ASCII rendering layer, navigation, resume presentation, project summaries, publication reader editions, proof/timeline/offering indexes, and portfolio-specific tests/documentation in this repository are released under this repository's MIT License unless a file explicitly states otherwise.

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

- **CORY-AUTHORED / VERIFIED** - supported by primary source and reliable commit/source history.
- **ADAPTED / DERIVED** - Cory-directed or Cory-modified work with identifiable upstream ancestry.
- **MIXED LINEAGE** - a repository contains substantial source/commit ancestry from more than one origin and requires file/commit-level attribution.
- **UPSTREAM / THIRD PARTY** - external work retained with its own attribution/license.
- **RECONSTRUCTION / REFERENCE** - newly written teaching/rebuild code expressing a documented mechanism, not claimed as a byte-for-byte historical implementation.
- **EXPERIMENTAL** - active mechanism/prototype whose significance remains under test.
- **PLACEHOLDER / RESERVED** - public repository exists but the present public implementation is not yet substantial enough to market as a completed system.
- **UNKNOWN / NEEDS AUDIT** - attribution is not yet strong enough for a confident claim.

## Rule for reviewers

**File presence is not proof of authorship. Repository creation is not proof of mechanism priority. A filename is not a timestamp.**

For mixed-lineage repositories, inspect commit history, actual commit author, licenses, file headers, upstream references, source records and transformation history before attributing a component.

The portfolio now applies five chronology checks to technical claims:

1. repository creation date;
2. platform-native commit date;
3. first commit where the actual mechanism is inspectable;
4. actual author/upstream identity for that commit or file;
5. whether later moves/imports/reorganizations could create a false appearance of earlier provenance.

---

# Specific mixed-lineage findings from the 2026-08-13 audit

## `NavisWORLD/hermes-agent`

This repository is a fork/upstream ecosystem reference. Upstream Hermes-Agent code remains upstream code unless a specific Cory-authored modification is established.

The `evidence/cst-cosmos-prior-art/` archive is Cory/NavisWORLD documentary work added to the fork and should be distinguished from upstream Hermes implementation.

## `NavisWORLD/The-Cosmic-Davis-12D-Hebbian-Transformer-ver.4.2`

Repository creation: **2026-02-28T10:33:19Z**.

The audit found identifiable third-party/Farnsworth history inside this repository. A concrete example is a **2026-01-25** commit by **Timo White** adding files described as `Q1 2025 Enhanced Memory features`.

That means:

- the text `Q1 2025` in a filename, comment or commit description does not make the implementation a Cory Q1-2025 receipt;
- imported third-party commit history must retain its actual authorship;
- later Cory modifications can be attributed to Cory at their actual dates;
- this repository is useful for later COSMOS/dynamic-state integration and benchmark work, but it is not the preferred historical anchor for Cory's 2025 priority chronology.

Clean earlier Cory/NavisWORLD chronology instead relies on the independently dated Jan/Feb/May/Oct/Nov 2025 source receipts documented in [`TECHNICAL_LINEAGE.md`](TECHNICAL_LINEAGE.md).

## `NavisWORLD/Cosmos`

Repository creation: **2026-02-28T23:45:11Z**.

The audit found clear Farnsworth ancestry inside the repository, including README material identifying **Farnsworth** and linking `timowhite88/Farnsworth` surfaces.

Accordingly, `Cosmos` is treated as a **later mixed-lineage integration/consolidation repository**. COSMOS-specific additions may be attributable to Cory at their own commits, but the whole repository is not presented as wholly Cory-authored historical source.

This distinction is especially important for memory, swarm, RAG, infrastructure and agent components that may have upstream ancestry.

## `NavisWORLD/Cosmic-nova-os-GGUF-model-and-system-`

Current audit status: **PLACEHOLDER / RESERVED**.

The public repository currently exposes essentially the repository/title/rights surface rather than a substantial inspectable GGUF/model implementation. It remains listed in the public universe for completeness but is not marketed here as a completed model system until implementation evidence exists.

---

# Clean historical source anchors

For the 2025 technical chronology, the portfolio prefers these independently dated source receipts:

- `PHERACLEASE/test` - Jan. 30, 2025 rolling/adaptive memory + `cosmic_brain.json`; identity caveat retained.
- `NavisWORLD/CosmicSynapse` - Feb. 26, 2025 bounded CST-LM memory + save/load + initialization restoration.
- `NavisWORLD/The-theory-of-CST` - May 21, 2025 evolving persistent simulated world state, sensory/audio input and Python/Unity bridge.
- `NavisWORLD/cosmic-synapse-A-lmi` - Oct. 28, 2025 02:21:23Z autonomous knowledge-gap/hypothesis/action/data/knowledge loop with Milvus/MinIO/Neo4j memory architecture.
- `NavisWORLD/cosmic-synapse-A-lmi-v.2` - later same-day expanded perception/cognition/action architecture.
- `NavisWORLD/infinite-adaptive-audio-12d-universe-engine` - Nov. 2025 online learning, local persistence and bounded pattern-memory receipts.
- `NavisWORLD/The-Cosmic-Davis-12D-Hebbian-Transformer-` - Nov. 2025 episodic retrieval and autonomous-study receipts.

These source anchors are stronger for historical chronology precisely because they do not require importing a later mixed repository and pretending its whole tree has one origin.

---

## Source-publication artifact policy

The portfolio records cryptographic SHA-256 identities for primary source Word/PDF documents in [`ARTIFACTS.sha256`](ARTIFACTS.sha256).

A SHA-256 digest answers:

> Is this candidate file byte-for-byte identical to the source artifact that was hashed?

It does **not** by itself prove:

- scientific truth;
- authorship;
- date of first creation;
- peer review;
- originality of every embedded idea or dependency.

Files under [`publications/`](publications/) are repository-native reader/teaching companions. They are reader editions, not claims of byte-identical equivalence to the original DOCX/PDF.

---

## Timeline provenance policy

[`TIMELINE.md`](TIMELINE.md) deliberately keeps multiple clocks separate:

1. **career dates** from the public resume/work history;
2. **research-lineage dates** stated inside project/manual history;
3. **repository creation dates** from platform metadata;
4. **mechanism receipt dates** from inspectable historical commits;
5. **later consolidation/import dates** for mixed repositories.

A manual stating `2018 -> 2024 -> 2026` is preserved as project-history provenance, not rewritten as a GitHub timestamp. Conversely, a repository created in 2026 is not used to claim that an independently verified 2025 mechanism began in 2026.

The reverse is equally important: importing an older third-party commit into a 2026 repository does not make that third-party feature a Cory 2025 implementation.

---

## DOI / deposit provenance

The portfolio links to the deposited research record:

**12-Dimensional Cosmic Synapse Theory**  
DOI: `10.5281/zenodo.17574447`

The DOI establishes a stable deposited/citable record. It does not substitute for experimental validation, authorship analysis or mechanism-specific source chronology.

---

## Corrections and superseded artifacts

Historical artifacts are not silently deleted merely because later engineering corrected them.

The HEHS weekend prototype guide is retained/hashable as historical provenance, while the v2 guide is explicitly the current engineering reference. [`publications/HEHS_V1_TO_V2_CORRECTION_LEDGER.md`](publications/HEHS_V1_TO_V2_CORRECTION_LEDGER.md) identifies the corrections.

Preserving an old artifact is **not endorsement of an old claim**.

The same principle applies to software experiments: null results, no-op mechanisms, retractions, replaced implementations and provenance corrections are retained when they help explain the lineage.

---

## Public / private boundary

The portfolio intentionally does **not** publish private material simply to create a larger proof pile.

Private-by-default categories include:

- private repositories and research logs;
- API keys, credentials, tokens and `.env` values;
- personal/private conversations;
- family/private correspondence and records;
- travel records;
- raw camera/audio/biosignal streams;
- private paired conversation datasets;
- personal astrology documents;
- subjective or interpretive personal analyses unless separately reviewed/consented and clearly labeled;
- any source whose publication would create unnecessary privacy or safety risk.

Reproducibility should use code versions, schemas, hashes, aggregate measurements, controlled datasets, seeds/configuration and necessary evidence without exposing irrelevant personal data.

---

## Public repository universe

The canonical current public index is [`REPOSITORY_UNIVERSE.md`](REPOSITORY_UNIVERSE.md).

**Audit count as of 2026-08-13:** **27 public repositories** are listed there. The connected account also exposes 4 private repositories to the audit connection, for 31 accessible repositories total. Private repositories are intentionally omitted from the public index.

---

## Evidence is a separate question from provenance

Provenance asks **where did the artifact come from?**  
Evidence asks **what does the artifact/test support?**

Use [`EVIDENCE.md`](EVIDENCE.md) and [`PROOF_LEDGER.md`](PROOF_LEDGER.md) for claim strength, benchmarks, nulls and proof-layer distinctions.

## Canonical review surfaces

- [`README.md`](README.md) - complete navigation/start point
- [`REPOSITORY_UNIVERSE.md`](REPOSITORY_UNIVERSE.md) - public source graph
- [`TECHNICAL_LINEAGE.md`](TECHNICAL_LINEAGE.md) - corrected source-level chronology
- [`PUBLICATIONS.md`](PUBLICATIONS.md) - publication/manual catalog
- [`ARTIFACTS.sha256`](ARTIFACTS.sha256) - exact source-file identities
- [`TIMELINE.md`](TIMELINE.md) - career/research/repository/mechanism clocks
- [`PROOF_LEDGER.md`](PROOF_LEDGER.md) - proof model and bounded claim anchors
- [`EVIDENCE.md`](EVIDENCE.md) - evidence/claim standard
- [`CITATION.cff`](CITATION.cff) - portfolio citation metadata

The purpose of this portfolio is to make the strongest attributable engineering easier to find **without pretending every historical artifact has one author, one license, one date or one evidence level**.