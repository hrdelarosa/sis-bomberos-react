export function capitalLetter(text) {
  if (!text) return text
  return text.charAt(0).toUpperCase() + text.slice(1)
}
