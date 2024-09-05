export const getMonthName = (
  month: number,
  option: Intl.DateTimeFormatOptions['month'] = 'short'
) => {
  const formatter = new Intl.DateTimeFormat('en', { month: option })
  const name = formatter.format(new Date().setMonth(month))
  return name
}
