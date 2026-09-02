import { readFileSync, writeFileSync } from "node:fs";

const path = "src/core/filmHistoryChapterNineteenAuditContract.test.ts";
let source = readFileSync(path, "utf8");

const misplaced = '  "Resurrection",\n  "Sound of Falling",\n  "EO",\n] as const;';
const correctedTail = '  "Resurrection",\n  "Sound of Falling",\n] as const;';
if (!source.includes(misplaced)) throw new Error("EO misplaced tail anchor not found");
source = source.replace(misplaced, correctedTail);

const insertionAnchor = '  "Guillermo del Toro\'s Pinocchio",\n  "Oppenheimer",';
const ordered = '  "Guillermo del Toro\'s Pinocchio",\n  "EO",\n  "Oppenheimer",';
if (!source.includes(insertionAnchor)) throw new Error("EO ordered insertion anchor not found");
source = source.replace(insertionAnchor, ordered);

writeFileSync(path, source);
