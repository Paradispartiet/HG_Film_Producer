import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";

const directory = path.join(process.cwd(), "src", "ui", "data");
const needle = "scenario_jeanne_dielman_1975";
for (const fileName of readdirSync(directory).filter((name) => name.endsWith(".ts")).sort()) {
  const source = readFileSync(path.join(directory, fileName), "utf8");
  if (source.includes(needle)) console.log(`JEANNE_DIELMAN_ID_ORIGIN:${fileName}`);
}
