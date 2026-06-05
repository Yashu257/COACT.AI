/** Shared easing curve used across all detail-page animations. */
export const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Convert a hex colour (#rrggbb) to an "r, g, b" string for use inside
 * rgba(...) expressions — e.g. hexToRgb("#22c55e") -> "34, 197, 94".
 */
export function hexToRgb(hex: string): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}
