import { readFileSync, writeFileSync } from "node:fs";

const path = "docs/FILM_HISTORY_AND_CRAFT_MAPPING.md";
const source = readFileSync(path, "utf8");
const startMarker = "## Current implementation\n";
const endMarker = "## Complete mapping schema\n";
const start = source.indexOf(startMarker);
const end = source.indexOf(endMarker);
if (start < 0 || end < 0 || end <= start) throw new Error("Could not locate Current implementation block");
if (source.indexOf(startMarker, start + startMarker.length) >= 0) throw new Error("Current implementation heading is not unique");
if (source.indexOf(endMarker, end + endMarker.length) >= 0) throw new Error("Complete mapping schema heading is not unique");

const replacement = `## Current implementation

Every Production Case in the current catalogue resolves to the same complete mapping structure. Catalogue size is read dynamically and is not duplicated in narrative documentation or tests.

- 17 mandatory film-history and film-craft areas.
- Every currently playable Production Case has a production-verification registry record and a complete 17-area Film Study mapping.
- Evidence status remains explicit per area: a verified case may contain \`source_verified\`, \`mapped\`, \`research_pending\` or \`not_central\` fields. Verification must never silently promote an unresolved field to \`source_verified\`.
- No points, ranks, badges or reward currencies.
- Historical placement is playable through explanation choices.
- Sources are inspectable inside the case.

The executable source of truth for current catalogue coverage is \`scripts/production-case-rest-audit.mjs\`, exposed as \`npm run audit:production-cases\` and included in \`npm run verify:v0.1\`. It checks the playable scenario set against the literal production-verification registry and the complete 17-area mapping contract. Do not maintain a second hard-coded film count or film-name inventory in this document; the audit must move with the catalogue.

`;

writeFileSync(path, source.slice(0, start) + replacement + source.slice(end));
