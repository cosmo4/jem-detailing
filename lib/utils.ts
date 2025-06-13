/**
 * Combines multiple class names into a single string
 */
export function cn(...inputs: string[]) {
  return inputs.filter(Boolean).join(' ');
}
