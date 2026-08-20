# CST Controlled Ablation // 2026-08-20

**Status: MEASURED reference-model result with preserved nulls.**

This portfolio entry records a frozen, parameter-matched comparison of a plain Transformer against generic and CST-inspired dynamic-state/state-affinity conditions.

## The result in one screen

| Condition | Overall accuracy | Associative recall | XOR |
|---|---:|---:|---:|
| Transformer | 46.68% | 31.61% | 5.92% |
| EMA54 mixture | **66.81%** | **92.62%** | 6.22% |
| static54 mixture | 46.95% | 32.38% | 5.95% |
| dyn12 mixture | 57.89% | 65.42% | 6.25% |
| dyn42 mixture | 58.01% | 66.16% | 5.86% |
| dyn54 mixture | **61.15%** | **76.25%** | 5.36% |

Five seeds were used: `17, 23, 41, 73, 101`. Each condition received 500 updates and 2,048 held-out examples per seed. The Transformer-family conditions used 17,128 parameters and identical initialization hashes within each seed.

## What survived the ablation

- dyn12, dyn42, and dyn54 all improved the associative-memory stress test over the matched plain Transformer.
- dyn54 was strongest among dyn12/dyn42/dyn54.
- same-checkpoint gate-zero, shuffled-state, and static-state interventions materially hurt dyn54, showing that the trained checkpoint was using the aligned state pathway.

## What did **not** survive

The generic learned **EMA54** dynamic-state control beat dyn54 on **5/5 seeds**. The paired dyn54-minus-EMA54 overall-accuracy difference was **-5.65 percentage points**, bootstrap 95% CI **[-9.54, -2.02]**.

Static54 was effectively a null against the Transformer: **+0.27 pp**, bootstrap 95% CI **[-0.39, +0.98]**.

Delayed 4-bit XOR remained at or near its **6.25% chance level** across the Transformer/state conditions.

**22 null-result records are retained.**

## Bounded conclusion

The data support the narrower claim that **dynamic state passed through the shared Gaussian state-affinity mixture can materially help this synthetic associative-memory task**.

They do **not** support the stronger claim that the specific dyn12/dyn42/dyn54 equations are uniquely superior. In this run, the simpler generic EMA54 state was stronger.

This is a **public/reference-model mechanism experiment**, not the missing canonical PHOS checkpoint ablation and not a universal language-model superiority result.

## Receipts

- [Full result report](research/cst-controlled-ablation-2026-08-20/REPORT.md)
- [Frozen protocol](research/cst-controlled-ablation-2026-08-20/METHODS.md)
- [Machine-readable summary](research/cst-controlled-ablation-2026-08-20/summary.csv)
- [Null-result ledger](research/cst-controlled-ablation-2026-08-20/null_results.json)
- [Portfolio evidence standard](EVIDENCE.md)
- [Proof ledger](PROOF_LEDGER.md)

> **No more self-reported superiority. Same conditions. Same seeds. Keep the nulls. Publish what happened.**
