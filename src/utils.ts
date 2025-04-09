export function formatDate(date: Date) {
  const dateFormatted = date.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const timeFormatted = date.toLocaleTimeString("ru-RU", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${dateFormatted} ${timeFormatted}`;
}
