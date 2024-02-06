import { format, addDays } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

type formatDateProps = string | Date | number

export const dateFormatter = {
  default: (date: formatDateProps) => format(new Date(date), 'dd/MM/yyyy'),

  defaultWithHour: (date: formatDateProps) =>
    format(new Date(date), 'dd/MM/yyyy HH:mm:ss'),

  monthNameAndYear: (date: formatDateProps) =>
    format(new Date(date), 'MMMM/yyyy', { locale: ptBR }),

  fullDate: (date: formatDateProps) =>
    format(new Date(date), "dd 'de' MMMM 'de' yyyy - HH:mm", {
      locale: ptBR,
    }),

  fullDateWithHyphen: (date: formatDateProps) =>
    format(new Date(date), 'yyyy-MM-dd HH:mm:ss'),

  dayAndMonth: (date: formatDateProps) => format(new Date(date), 'dd/MM'),

  hourAndMinute: (date: formatDateProps) => format(new Date(date), "HH'h'mm"),

  minuteAndSecond: (date: formatDateProps) => format(new Date(date), 'mm:ss'),
}

export const manipulateDate = {
  addDays: (date: Date, number: number) => addDays(date, number),
}

export const formatAudienceDate = (date: string, hour: string): string => {
  const [hora, minutos, segundos] = hour.split(':').map(Number)

  const dateFormated = new Date(date)
  dateFormated.setHours(hora, minutos, segundos)

  return dateFormated.toISOString()
}
