// Reverses the order of the whitespace-separated words in `text`.
export function reverseWords(text: string): string {
  const trimmed = text.trim();
  if (trimmed.length === 0) return '';
  return trimmed.split(/\s+/).reverse().join(' ');
}
