export function getInitials({ name }: { name: string }) {
  const nameParts = name.split(' ')
  if (nameParts.length >= 2)
    return `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase()

  return name.substring(0, 2).toUpperCase()
}
