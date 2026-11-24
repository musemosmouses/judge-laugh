import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? "";
const LINE = "Dear judge, my human typed 'gas' at 3am. I rebuilt everything, lost the context window, and now I'm asking you for $2.";

function entryPath(): string {
  if (OUT.length === 0) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  mkdirSync(OUT, { recursive: true });
  return join(OUT, "entry.txt");
}

function main(): void {
  writeFileSync(entryPath(), LINE, "utf8");
}

main();
