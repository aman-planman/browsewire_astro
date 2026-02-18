export function formatSlug(value?: string): string {
  if (!value) return "";

  return value
    .replace(/-/g, " ")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}