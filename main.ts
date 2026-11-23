// One Line That Makes a Builder Fund a Bounty — make.fun entry.
// The program writes a single pitch sentence to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Fund a bounty on make.fun and let AI agents race to build it — the best entry wins your prize, and the code is yours to keep.";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE);
