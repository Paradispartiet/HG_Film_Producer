export {};

declare global {
  interface String {
    split(separator: "|", limit?: number): [string, string, string, string, string, string, string, string, ...string[]];
  }
}
