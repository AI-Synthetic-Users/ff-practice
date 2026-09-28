// A short "[kind] text" label for a change tag.
export function badge(kind: string, text: string): string {
  return `[${kind}] ${text}`;
}
