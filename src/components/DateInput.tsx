import { DatePicker } from '@mui/x-date-pickers'
import { Dayjs } from 'dayjs'
import { useCallback } from 'react'

import { maxDate, minDate } from '@const'

interface SetDateParams {
  name: string
  value: Dayjs
}

interface Props {
  name: string
  value: Dayjs
  setDate: (params: SetDateParams) => void
}

function DateInput({ name, value, setDate }: Props) {
  const setNewDate = useCallback(
    (newValue: Dayjs | null) => {
      newValue = newValue || value
      setDate({ name, value: newValue })
    },
    [name],
  )

  return (
    <DatePicker
      format='DD.MM.YYYY'
      name={name}
      value={value}
      onChange={setNewDate}
      minDate={minDate}
      maxDate={maxDate}
    />
  )
}

export default DateInput
