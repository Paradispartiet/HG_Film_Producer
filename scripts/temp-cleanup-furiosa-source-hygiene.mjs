import { readFileSync, writeFileSync } from "node:fs";

const path = "src/core/chapterNineteenFuriosaExpansion.ts";
const source = readFileSync(path, "utf8");
const before = '"kna pman_sixel_coediting".replace(" ", "")';
const after = '"knapman_sixel_coediting"';
if (!source.includes(before)) throw new Error("Furiosa hygiene anchor not found");
if (source.indexOf(before) !== source.lastIndexOf(before)) throw new Error("Furiosa hygiene anchor is not unique");
writeFileSync(path, source.replace(before, after));
