export function isDeveloperToolsEnabled(search: string): boolean {
  const params = new URLSearchParams(search);
  return params.get("dev") === "1";
}
