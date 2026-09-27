// Reverses the order of the whitespace-separated words in `text`.
export function reverseWords(text: string): string {
  return text.trim().split(/\s+/).filter(Boolean).reverse().join(' ');
}
