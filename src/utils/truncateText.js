export function truncateText(text, length = 40) {
  return text.length > length ? text.substring(0, length + 1).trim() + "..." : text;
}
