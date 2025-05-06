export function calculateDuration({
  startTime,
  endTime,
}: {
  startTime: string
  endTime: string
}) {
  const [startHours, startMinutes] = startTime.split(':').map(Number)
  const [endHours, endMinutes] = endTime.split(':').map(Number)

  const totalMinutesStart = startHours * 60 + startMinutes
  let totalMinutesEnd = endHours * 60 + endMinutes

  if (totalMinutesEnd < totalMinutesStart) totalMinutesEnd += 24 * 60

  const diffMinutes = totalMinutesEnd - totalMinutesStart
  const hours = Math.floor(diffMinutes / 60)
  const minutes = diffMinutes % 60

  return `${hours}h ${minutes}m`
}
