export function formatDateService({ date }: { date: string }) {
  const formatDate = new Date(date)
  return new Intl.DateTimeFormat('es-MX', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(formatDate)
}
