# COSMOS HEARTLIGHT // PRODUCT + ENGINEERING BRIEF

**Repository:** https://github.com/NavisWORLD/COSMOS-HEARTLIGHT  
**Status:** public open-source reference implementation  
**License in project repository:** Apache-2.0

## Mission

HEARTLIGHT applies the broader COSMOS/CST systems vocabulary to a much more concrete human problem: helping learners communicate needs and helping adults respond with low-risk, observable, human-reviewed support.

```text
CHILD / LEARNER SIGNAL
        ↓
COMMUNICATION CHOICE + CONTEXT
        ↓
HUMAN UNDERSTANDING
        ↓
SAFE SUPPORT OPTIONS
        ↓
OBSERVE RESPONSE
        ↓
ADAPT / ERASE UNNEEDED DATA
```

The reference system is local-first and intentionally avoids hidden child scoring, advertising, account dependence, and automated punishment/diagnosis pathways.

---

## Technical stack

### Universal application layer

- standalone HTML build;
- installable PWA;
- offline/local-first interaction;
- touch/mobile-friendly interface;
- shared state contract.

### C++17

The public repository contains a portable C++17 core with static/shared builds, tests, and a stable C ABI intended for integration from Swift, Kotlin/JNI, C#, Python `ctypes`, desktop shells, game engines, research tools, or assistive hardware.

### Rust

The Rust workspace provides a dependency-light support-state core and FFI/static-library path using the same conceptual contract.

### Platform integration

Documentation covers Android, Apple platforms, Windows, and the general layered strategy: PWA for immediate universal UI plus native cores where platform integration or hardware access requires it.

---

## Shared support-state contract

The documented 12 dimensions are present-context support variables such as sensory load, movement need, focus access, transition need, communication load, social-space need, body comfort, predictability, recovery, engagement, and regulation confidence.

They are **not** diagnosis labels, personality scores, misconduct-risk scores, or automated eligibility decisions.

---

## Human workflow

Teacher/support workflow:

```text
ASK
LISTEN
OFFER
WAIT
OBSERVE
CHECK
ADAPT
ERASE
```

The important product principle is that the learner's communication and response are higher-authority signals than an ambient sensor or automated suggestion.

---

## Documentation as product architecture

HEARTLIGHT includes separate entry points for:

- teachers;
- behavioral aides / paraeducators;
- learners;
- families;
- OT / SLP / therapist / clinician adjunct use;
- schools/district deployment;
- developers;
- researchers;
- recruiters / product reviewers.

The learning library includes educator and engineering books, a study workbook, classroom scenarios, stimming/support material, printable support menus, therapy/clinician guides, privacy/safety docs, native architecture, data dictionary, research/validation material, and deployment guidance.

---

## Hard safety boundaries

The reference project does **not** present itself as:

- a medical device;
- a diagnosis engine;
- psychotherapy replacement;
- crisis service;
- lie detector;
- facial emotion-recognition system;
- behavior-risk predictor;
- restraint/seclusion recommender;
- automated IEP authority;
- automated discipline or medication decision system.

Any optional sensor value remains an observation/input, not an excuse to infer hidden emotion, danger, compliance, misconduct, or diagnosis.

---

## Privacy architecture

The public reference build intentionally avoids:

- ad tracking;
- analytics SDK dependence;
- cloud child-profile database;
- facial recognition;
- microphone surveillance;
- permanent hidden scoring;
- automatic long-term retention of every check-in.

Student check-ins are treated as session state. Persistent observations require explicit human action and can be exported/erased locally. Real schools still need their own legal, accessibility, privacy, security, and deployment review.

---

## Validation boundary

The repository includes static audits and native C++/Rust tests/CI. Those tests establish software behavior; they are not clinical-efficacy evidence or legal/accessibility certification by themselves.

---

## What this demonstrates in the portfolio

HEARTLIGHT shows the ability to combine:

- product framing for a real user population;
- accessible/offline web application design;
- C++ and Rust systems work;
- FFI and cross-platform integration thinking;
- deterministic/shared contracts;
- privacy constraints enforced in architecture;
- documentation for multiple stakeholder types;
- open-source governance and CI;
- strict boundaries against unsupported automated inference.

The engineering value is not “AI knows what a child feels.” The value is building **better communication and support infrastructure without turning uncertainty into surveillance**.
