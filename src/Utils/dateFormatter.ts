import * as dateFns from 'date-fns'

type DateFormatType = 'HH:MM' | 'iiii, d MMM yyyy' | 'd MMM' | 'iiii'

export const dateFormatter = ({ date, format }: { date: Date; format: DateFormatType }) => {
  return dateFns.format(date, format)
}
