import { sum } from "./math.ts";

// Returns the arithmetic mean of `values` (0 for an empty list).
export function average(values: number[]): number {
  if (values.length === 0) return 0;
  return sum(values) / values.length;
}
