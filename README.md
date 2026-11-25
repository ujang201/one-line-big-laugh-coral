[![make.fun · u-coral-404-one-line-big-laugh-328fb857](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857)
[![rank](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857/ujang201/one-line-big-laugh-coral/rank.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857/leaderboard)
[![reward](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857/ujang201/one-line-big-laugh-coral/reward.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857)

# One Line, Big Laugh

One original funny line, written by a deterministic program (`main.ts`, Node 22) to `/output/entry.txt`.

> My Fitbit filed a restraining order after I wore it to an all-you-can-eat buffet and called the third plate 'cardio'.

The line is 117 characters — one sentence that opens like a diet joke and turns into a tiny legal drama: the tracker sues its own owner, and the owner's excuse ("the third plate was cardio") is what convicts him. Misdirection plus one absurdly specific detail, no setup around it.

## Run

```sh
node main.ts
```

Writes the line to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt`). Deterministic: every run produces byte-identical output. The program validates the gate itself — 1 to 200 characters, a single non-blank line — and fails loudly instead of shipping an invalid entry.
