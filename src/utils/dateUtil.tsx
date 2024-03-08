export function convertToLocalDate(date: string) {
  const dateObj = new Date(date)
  if (!(dateObj instanceof Date) || Number.isNaN(dateObj.valueOf())) return ''

  if (dateObj.setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0)) {
    return 'today'
  }
  return dateObj
    .toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
    .replace(/ /g, '-')
}
