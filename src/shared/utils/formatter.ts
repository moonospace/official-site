import dayjs from 'dayjs'

export function formatReadableDate(
  stringDate: string,
  format?: string,
): string {
  const formattedDate = dayjs(stringDate).format(format)
  return formattedDate
}
