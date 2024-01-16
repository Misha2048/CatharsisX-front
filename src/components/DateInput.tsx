import { DatePicker } from '@mui/x-date-pickers'
import dayjs, { Dayjs } from 'dayjs'
import { useCallback } from 'react'

interface SetDateParams {
  name: string
  value: Dayjs
}

interface Props {
  name: string
  value: Dayjs
  setDate: (params: SetDateParams) => void
}

const minDate = dayjs('01-01-2024', 'DD-MM-YYYY')

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
      format='DD/MM/YYYY'
      name={name}
      value={value}
      onChange={setNewDate}
      minDate={minDate}
    />
  )
}

export default DateInput
