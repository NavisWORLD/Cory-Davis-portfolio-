# Controlled CST Reference Ablation — Results

Scope: reference-model mechanism stress test. Not canonical PHOS checkpoint evidence.

Seeds: [17, 23, 41, 73, 101]. 500 updates per seed/condition. 2048 held-out examples per seed. Chance accuracy = 0.0625.

| condition | params | acc mean ± sd | NLL | copy | assoc | xor | Δacc vs Transformer | boot95 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| transformer | 17128 | 0.4668 ± 0.0105 | 1.5863 | 0.9997 | 0.3161 | 0.0592 | — | — |
| ema54_mix | 17128 | 0.6681 ± 0.0498 | 1.0129 | 1.0000 | 0.9262 | 0.0622 | +0.2013 | [+0.1492, +0.2324] |
| static54_mix | 17128 | 0.4695 ± 0.0077 | 1.6433 | 1.0000 | 0.3238 | 0.0595 | +0.0027 | [-0.0039, +0.0098] |
| dyn12_mix | 17128 | 0.5789 ± 0.0619 | 1.2699 | 1.0000 | 0.6542 | 0.0625 | +0.1121 | [+0.0576, +0.1666] |
| dyn42_mix | 17128 | 0.5801 ± 0.0590 | 1.2630 | 1.0000 | 0.6616 | 0.0586 | +0.1133 | [+0.0617, +0.1692] |
| dyn54_mix | 17128 | 0.6115 ± 0.0470 | 1.1878 | 1.0000 | 0.7625 | 0.0536 | +0.1447 | [+0.1009, +0.1886] |
| gru | 17312 | 0.0596 ± 0.0047 | 2.7765 | 0.0540 | 0.0604 | 0.0646 | -0.4072 | [-0.4192, -0.3968] |

## Same-checkpoint dyn54 controls
- dyn54_gate0: Δacc vs dyn54 ON -0.2050, boot95 [-0.2603, -0.1497], task deltas {'copy': -0.03323863600000001, 'assoc': -0.59732143, 'xor': 0.007440473999999997}
- dyn54_shuffle: Δacc vs dyn54 ON -0.1864, boot95 [-0.2415, -0.1349], task deltas {'copy': -0.013920453999999994, 'assoc': -0.561607142, 'xor': 0.008035711999999997}
- dyn54_static_eval: Δacc vs dyn54 ON -0.2162, boot95 [-0.2692, -0.1556], task deltas {'copy': -0.058522728, 'assoc': -0.60089286, 'xor': 0.0032738079999999974}
- dyn12_mix: Δacc vs dyn54 ON -0.0950, boot95 [-0.1202, -0.0698], task deltas {'copy': -0.010795453999999993, 'assoc': -0.281845238, 'xor': 0.003571425999999998}
- dyn42_mix: Δacc vs dyn54 ON -0.0588, boot95 [-0.0755, -0.0421], task deltas {'copy': 0.0, 'assoc': -0.183035714, 'xor': 0.0038690459999999984}

Null-result records: 22. See `null_results.json`.

## Pairwise against generic EMA54 mixture
- transformer: Δacc vs EMA54 = -0.2013, boot95 [-0.2324, -0.1492], wins 0/5 seeds
- static54_mix: Δacc vs EMA54 = -0.1985, boot95 [-0.2283, -0.1505], wins 0/5 seeds
- dyn12_mix: Δacc vs EMA54 = -0.0892, boot95 [-0.1377, -0.0453], wins 0/5 seeds
- dyn42_mix: Δacc vs EMA54 = -0.0880, boot95 [-0.1257, -0.0514], wins 0/5 seeds
- dyn54_mix: Δacc vs EMA54 = -0.0565, boot95 [-0.0954, -0.0202], wins 0/5 seeds
- gru: Δacc vs EMA54 = -0.6085, boot95 [-0.6301, -0.5678], wins 0/5 seeds

## Interpretation

The reference dyn12/dyn42/dyn54 pathways produced measurable gains over the parameter-matched plain Transformer on this synthetic associative-memory stress test, with dyn54 strongest among those three. However, the generic learned EMA54 state passed through the same Gaussian state-affinity mixture outperformed dyn54 on all five seeds. Static54 was indistinguishable from the plain Transformer, and delayed 4-bit XOR remained at or near chance across the Transformer/state conditions.

The bounded conclusion is therefore **dynamic state + state-affinity mixture can matter on this task**, not that the specific dyn equations are uniquely superior. This run must not be relabeled as the missing canonical PHOS checkpoint ablation.
