export function validateString(
  value: unknown,
  maxLength: number
): string | null {
  if (!value || typeof value !== "string") return null;

  const trimmed = value.trim();

  if (trimmed.length === 0 || trimmed.length > maxLength) return null;

  return trimmed;
}
