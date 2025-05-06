export function formatTime(time: string) {
  if (!time) return '00:00'

  const [hours, minutes, seconds] = time.split(':')
  const formattedSeconds = seconds.split('.')[0]

  if (Number.parseInt(hours) > 0)
    return `${Number.parseInt(hours)}h ${Number.parseInt(
      minutes
    )}m ${Number.parseInt(formattedSeconds)}s`

  return `${Number.parseInt(minutes)}m ${Number.parseInt(formattedSeconds)}s`
}
