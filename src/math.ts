// Adds every value in `values`.
export function sum(values: number[]): number {
  return values.reduce((total, value) => total + value, 0);
}

// Clamps `value` into the inclusive range [min, max].
export function clamp(value: number, min: number, max: number): number {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}
