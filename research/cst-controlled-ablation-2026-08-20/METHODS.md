# Controlled CST Reference Ablation — Frozen Protocol

Scope: a controlled reference-model mechanism stress test of the public Beast Box state-family equations and Gaussian state-affinity mixture. It is **not** the missing canonical PHOS checkpoint experiment.

## Frozen conditions

- `transformer`: ordinary causal self-attention, state branch present but unused.
- `ema54_mix`: generic learned 54D EMA token state passed through the same Gaussian state-affinity mixture; generic dynamic-state control.
- `static54_mix`: deterministic non-dynamic 54D projection passed through the same mixture.
- `dyn12_mix`: public dyn12 reference update + Gaussian mixture.
- `dyn42_mix`: public 42D coupled state + Gaussian mixture.
- `dyn54_mix`: concatenated public dyn12 + dyn42 state + Gaussian mixture.
- `gru`: parameter-near recurrent control.

For the Transformer-family conditions, architecture and parameter count are identical (17,128 parameters), including the otherwise-unused state branch. Within each seed, their complete initial parameter-state hashes are identical.

## Tasks

All conditions receive the same deterministically generated batches and ordering.

1. Delayed copy, 16-way final-token classification.
2. Associative recall, 16-way final-token classification.
3. Delayed 4-bit XOR, 16-way final-token classification.

Chance accuracy for each task is 1/16 = 0.0625.

## Optimization and evaluation

- Seeds: 17, 23, 41, 73, 101.
- 500 AdamW updates per seed/condition.
- Batch size: 64.
- Sequence length: 24.
- Learning rate: 0.002.
- Weight decay: 0.01.
- Gradient clipping: 1.0.
- Evaluation: 32 fixed batches × 64 examples = 2,048 held-out examples per seed/condition.
- Every training step is logged.
- Every held-out prediction is retained as JSONL in the full run bundle used to generate this portfolio summary.
- Null results are retained in `null_results.json` rather than filtered from the report.

## Same-checkpoint causal controls

Each trained `dyn54_mix` checkpoint is re-evaluated without retraining under five interventions: mixture gate zero, shuffled state, static state substitution, dyn12 branch substitution, and dyn42 branch substitution. These controls test whether the trained checkpoint actually uses the aligned state pathway.

## Statistics

Reported primary values are mean ± sample SD over the five training seeds. Differences use paired seed deltas because each seed shares initialization and data order across Transformer-family conditions. `boot95` is a paired-seed bootstrap 95% interval. The report does not upgrade this small synthetic stress test into broad language-model evidence.

## Evidence boundary

This directory is a portfolio-facing summary of the controlled reference-model run. It preserves the frozen protocol, summary table, and null-result ledger. It does **not** claim to be the canonical PHOS checkpoint experiment, and it does not establish universal model superiority.
