// Never Say It Out Loud — one funny confession line, written to /output/entry.txt
// The line is a deadpan confession: skimming, guessing, and hoping nobody notices.
// Kept short on purpose: a tie on win rate goes to the smaller text.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "I skimmed your file, guessed the rest, and hoped you wouldn't notice.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
