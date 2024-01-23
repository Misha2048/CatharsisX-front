import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

export const minDate = dayjs('01-01-2024', 'DD-MM-YYYY')
export const maxDate = dayjs('31-12-2099', 'DD-MM-YYYY')
