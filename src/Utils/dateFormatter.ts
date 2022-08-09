import * as dateFns from 'date-fns'

type DateFormatType =
  | 'HH:MM'
  | 'iiii, d MMM yyyy'
  | 'd MMM'
  | 'iiii'
  | 'iii'
  | 'd'
  | 'MMMM yyyy'
  | 'd MMMM yyyy'

export const dateFormatter = ({ date, format }: { date: Date; format: DateFormatType }) => {
  return dateFns.format(date, format)
}
