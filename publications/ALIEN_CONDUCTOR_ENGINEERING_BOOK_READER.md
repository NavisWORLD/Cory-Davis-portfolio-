# REALITY BRIDGE // ALIEN CONDUCTOR // LOCAL AI BAND
## Engineering Book — Repository Reader Edition

**Cory Shane Davis**  
**Source:** Open Publication Edition  
**Reference lineage:** Reality Bridge Alien Conductor II + Sound Fixed III  
**Source DOCX SHA-256:** `eee3cb7bac40d20b1481c1a88701a58dabe6739cb151e058c23ba8cbb04d450f`

This is a repository-native reader companion to the hashed Word edition.

---

## The system in one loop

```text
HUMAN
  ↓
PERCEPTION
  ↓
MUSICAL STATE + CONFIDENCE
  ↓
MUSICIAN / CONDUCTOR DECISION
  ↓
SCHEDULED EVENT
  ↓
SOUND
  ↓
HUMAN
  ↺
```

Alien Conductor is not primarily “prompt → song.” It is an adaptive feedback instrument intended to listen to a performer, estimate musical context, decide whether/how to participate, schedule sound, then listen again.

## Current implementation vs expansion

The source book makes this distinction explicit.

### Present in the browser ancestry

- Web Audio synthesis/routing;
- look-ahead scheduling;
- physical-model-style guitar;
- microphone analysis;
- pitch and phrase memory;
- key/chord/tempo inference;
- generated accompaniment;
- media analysis;
- granular texture;
- event looping;
- recording;
- state persistence;
- mobile audio-unlock/recovery handling.

### Expanded architecture

The full local AI band modularizes that ancestry into independent packages and musician agents and can optionally add trained local models. It is not presented as already implemented where it is still architecture/roadmap.

---

# 01 // Prime design rules

1. **Real-time first** — no slow model blocks the audio clock.
2. **One shared musical reality** — pitch/harmony/tempo/phrase/confidence are shared state.
3. **Separate perception from performance** — listener measures; agents choose; renderers sound.
4. **Confidence is data** — uncertainty changes behavior.
5. **Space is musical information** — deciding not to play is a valid action.
6. **Modularity over monoliths** — guitar/piano/bass/drums/vocal can run independently.
7. **Local operation by default** — microphone/media processing need not leave the device.
8. **Seeded behavior** — stochastic choices can be reproduced for debugging/research.
9. **Graceful degradation** — optional models/features may fail without killing the instrument.
10. **Instrument honesty** — show actual confidence and implementation state.

---

# 02 // Package architecture

```text
input waveform / taps / local media
               │
               ▼
           LISTENER
               │
               ▼
        MUSICAL WORLD
               │
      ┌────────┼─────────┐
      ▼        ▼         ▼
   HARMONY   PHRASE    MEMORY
      └────────┼─────────┘
               ▼
         MUSICIAN AGENTS
 guitar / piano / bass / drums / vocal
               │ proposals
               ▼
           CONDUCTOR
 density / roles / tension / conflicts
               │ accepted events
               ▼
        CLOCK + SCHEDULER
               │
               ▼
           RENDERERS
               │
               ▼
          AUDIO ENGINE
```

Primary packages:

- Audio Kernel
- Clock / Scheduler
- Event Bus
- Listener
- Musical World
- Harmony Engine
- Musician Agents
- Conductor
- Renderers
- Persistence
- UI / Telemetry

---

# 03 // Shared Musical World

The shared state carries transport, harmony, performer state, arrangement state, band activity, memory, and confidence.

```text
MusicalWorld {
  transport: bpm / beat / bar / subdivision / phase / confidence
  harmony: root / mode / scale / chord / tones / confidence
  human: active / phrase / pitch / energy / register / brightness /
         articulation / motion / onsetRate
  structure: section / tension / density / sectionAge
  band: per-instrument activity
  memory: notes / motifs / chords / phrases
}
```

### Conservative uncertainty

High-confidence harmonic state can support richer voicing. Medium confidence favors reversible/ambiguous support. Low confidence should reduce density or wait rather than confidently force a wrong interpretation.

---

# 04 // Real-time kernel

## Master graph

```text
instrument buses
   ↓
per-bus gain / pan
   ↓
master filter / EQ
   ↓
dynamics
   ↓
safety ceiling / limiter
   ↓
master gain
   ├── analyzer / telemetry
   ├── recording tap
   └── speakers / headphones
```

The audio path owns hardware/output, DSP buses, node lifetime, safe gains, recording, and panic/recovery. High-level musician logic emits events rather than manipulating arbitrary audio nodes.

## Look-ahead scheduling

The browser ancestry repeatedly schedules future events into the `AudioContext` time horizon rather than trusting JavaScript timer callbacks to be sample-accurate.

```text
while nextTime < audioClock + lookahead:
    dispatch(step, nextTime)
    step += 1
    nextTime += secondsPerQuarter / 4
```

**One master clock.** Individual musicians can vary musical behavior and microtiming, but should not drift on independent timing systems.

## Event bus

A normalized performance event can carry source, event type, musical/audio time, pitch/voicing payload, velocity, duration, confidence, and ID. This allows JavaScript, Python, C++, MIDI, or other renderers to speak the same musical protocol.

---

# 05 // Listener / perception

Minimum useful feature set described by the book:

- RMS energy;
- peak amplitude;
- spectral centroid;
- spectral flux;
- pitch + confidence;
- chroma / pitch-class energy;
- onsets;
- articulation;
- register;
- phrase activity;
- tempo candidates;
- key/chord candidates + confidence.

Useful equations include:

```text
RMS = sqrt((1/N) Σ x_i²)
centroid = Σ(f_k magnitude_k) / Σ(magnitude_k)
flux_t = Σ max(0, X_t(k) - X_(t-1)(k))
MIDI = 69 + 12 log2(f / 440)
BPM ≈ 60 / onset_interval
cents_error = 1200 log2(f_est / f_true)
```

The contract matters more than one detector. A native implementation can replace an autocorrelation pitch estimator with YIN/pYIN/SWIPE/local ML without changing the rest of the band if it returns the same typed state.

---

# 06 // Musician modules

## Gravity Guitar

The strongest standalone instrument in the documented browser lineage uses a Karplus–Strong-family plucked-string approach, tunings, body/filter modeling, damping/brightness, and sympathetic responses.

Agent roles can include Follow, Strum, Fingerstyle, Arpeggiate, Countermelody, Ambient, Power Chord, Rhythm Chop, and Call + Response.

## Piano

The architecture treats voicing as constrained optimization over movement, performer-register collision, hand span, density, and melodic continuity. The agent remains independent from the renderer, so a lightweight synth can later be swapped for samples or a richer physical model.

## Bass

Bass is deliberately conservative: low harmonic confidence favors roots/fifths/pedals; higher confidence allows passing and approach tones. It shares groove state with drums instead of trying to infer the drummer after the fact.

## Drums

A deterministic groove skeleton can be varied by section energy, density, fill probability, swing, ghost notes, performer onsets, and phrase boundaries. “Humanization” is bounded musical microtiming, not arbitrary sloppiness.

## Vocal bandmate

The agent emits renderer-neutral pitch/duration/intensity/phoneme-like/harmony events. Phrase memory stores relative interval/rhythm structure so motifs can transpose and transform.

## Experimental modules

- Orbit touch instrument
- Granular local-media instrument
- Media-to-music feature modulation
- Event loops and raw-audio loops

---

# 07 // Conductor

The conductor is an arrangement/attention manager rather than another synthesizer.

Responsibilities include:

- sections;
- density;
- tension;
- performer interaction;
- instrument allocation;
- motif management;
- conflict resolution;
- deciding when silence is the best accompaniment.

Conflicting proposals can be scored using musical role, harmonic value, phrase value, novelty, register collision, and density cost. The conductor may reject, delay, transpose, thin, or re-voice a proposal.

---

# 08 // Memory and musician personality

Memory exists at multiple timescales: notes/chords, phrases, sections, full session, and optional persistent non-sensitive musical preferences.

Motifs are best stored relatively (intervals + rhythm + contour) so they can reappear in another key.

Musician personalities are interpretable parameter sets, for example:

- guitar assertiveness/complexity/register/space;
- piano voicing width/extensions/pedal/density;
- bass root loyalty/approach rate/register;
- drums swing/ghost notes/fill rate/complexity;
- vocal harmony preference/response rate/register/density.

---

# 09 // Where ML belongs

The book recommends three timing domains:

| Brain | Latency | Responsibility |
|---|---|---|
| Reflex | milliseconds | DSP, onsets, pitch, immediate ducking, rendering |
| Musician | tens–hundreds ms | next note/chord, voicing, groove/phrase response |
| Composer | seconds/bars | sections, motifs, long-range planning/style |

A slow composer can miss a deadline without stopping the music. Optional intelligence should never become a single point of failure for the real-time audio path.

---

# 10 // Browser, iPhone, C++, Python

## Browser/iPhone

The single-file ancestry remains useful because it is portable and inspectable. Mobile requirements include:

- user-gesture audio unlock;
- explicit microphone permission;
- HTTPS/localhost for protected APIs;
- visibility-state recovery;
- safe-area-aware UI;
- large touch controls;
- careful memory use;
- diagnostics and panic.

## Native split

**C++ / real-time:** audio device callback, buffers/DSP, physical models/samplers, MIDI/event queue, master clock, mixer/effects.  
**Python / slower intelligence:** feature research, model inference where latency allows, training/dataset tooling, agent planning, evaluation/logging, style/motif/composition research.

Python may schedule future events. It should not be required to finish before the next audio buffer can play.

---

# 11 // Testing

## Listener validation

Known-tone pitch tests, cents error, detection latency, key/chord accuracy, tempo ambiguity, phrase boundaries, and confidence calibration.

## Band validation

- register collision;
- interruption during performer phrases;
- harmonic agreement;
- timing error;
- phrase-response latency;
- unnecessary repetition;
- state stability;
- subsystem recovery.

Human A/B evaluation can compare fixed accompaniment with adaptive accompaniment, but subjective preference is reported as subjective, not converted into a fake objective metric.

---

# 12 // Shipping map

Standalone products can be extracted without the whole monolith:

1. Play-Along Guitar
2. Play-Along Piano
3. Bass + Drums Rhythm Section
4. Vocal / Harmony Ghost
5. Orbit / Granular / Media instruments
6. Full Local Band

**Engineering priority:** extraction before expansion. Stabilize `AudioEngine`, `Clock`, `EventBus`, `MusicalWorld`, `Listener`, `HarmonyEngine`, and `PhraseMemory`; then grow musician modules around those contracts.

---

## Public source

- Local AI Band: https://github.com/NavisWORLD/-reality-bridge-alien-conductor-local-ai-band
- Sound Fixed III: https://github.com/NavisWORLD/REALITY_BRIDGE_ALIEN_CONDUCTOR_III_SOUND_FIXED
- Adaptive Audio Universe lineage: https://github.com/NavisWORLD/infinite-adaptive-audio-12d-universe-engine

## Core idea

```text
The computer should become a musician that listens before deciding what to play.
```
