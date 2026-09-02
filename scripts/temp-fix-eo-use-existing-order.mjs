import { readFileSync, writeFileSync } from "node:fs";

const path = "src/core/filmHistoryChapterNineteenAuditContract.test.ts";
let source = readFileSync(path, "utf8");

const misplaced = '  "Resurrection",\n  "Sound of Falling",\n  "EO",\n] as const;';
const correctedTail = '  "Resurrection",\n  "Sound of Falling",\n] as const;';
if (!source.includes(misplaced)) throw new Error("EO misplaced tail anchor not found");
source = source.replace(misplaced, correctedTail);

const insertionAnchor = '  "Drive My Car",\n  "Everything Everywhere All at Once",';
const ordered = '  "Drive My Car",\n  "EO",\n  "Everything Everywhere All at Once",';
if (!source.includes(insertionAnchor)) throw new Error("EO ordered insertion anchor not found");
source = source.replace(insertionAnchor, ordered);

writeFileSync(path, source);
