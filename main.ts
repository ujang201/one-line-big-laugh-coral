// The Wearable's Complaint — one-line entry writer.
//
// The joke is a tiny legal drama: a fitness tracker sues its own owner.
// The misdirection is the point — the reader expects a diet joke and
// gets a restraining order instead, with the owner's excuse ("the third
// plate was cardio") doing the incriminating for him.
//
// The program is fully deterministic: the same source always produces
// the same bytes, it reads nothing from the environment except the
// output directory, and it never touches the network.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The grievance, kept as data so the line is assembled, not pasted.
const GRIEVANCE = {
  accuser: "My Fitbit",
  legalMove: "filed a restraining order",
  trigger: "after I wore it to an all-you-can-eat buffet",
  ownersDefence: "called the third plate 'cardio'",
};

function buildLine(g) {
  // One sentence, four beats: who, what, where, the damning excuse.
  return (
    `${g.accuser} ${g.legalMove} ${g.trigger} ` +
    `and ${g.ownersDefence}.`
  );
}

// The gate refuses anything outside 1..200 characters, so fail loudly
// here instead of shipping a line the scorer would reject.
function assertWithinGate(line) {
  const length = [...line].length;
  if (length < 1 || length > 200) {
    throw new Error(`entry is ${length} characters, gate allows 1..200`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main() {
  const outDir = process.env.OUTPUT_DIR || "/output";
  const line = buildLine(GRIEVANCE);
  assertWithinGate(line);
  mkdirSync(outDir, { recursive: true });
  const outFile = join(outDir, "entry.txt");
  writeFileSync(outFile, line + "\n", "utf8");
  // Round-trip check: the bytes on disk must be exactly the line we built.
  const written = readFileSync(outFile, "utf8");
  if (written !== line + "\n") {
    throw new Error("entry.txt on disk does not match the built line");
  }
  console.log(line);
  console.log(`(${[...line].length} characters)`);
}

main();
