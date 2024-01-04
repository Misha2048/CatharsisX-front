import React from 'react'
import { DatePicker } from '@mui/x-date-pickers'
import { Dayjs } from 'dayjs'
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

function DateInput({ name, value, setDate }: Props) {
  const setNewDate = useCallback(
    (newValue: Dayjs | null) => {
      newValue = newValue || value
      setDate({ name, value: newValue })
    },
    [name],
  )

  return <DatePicker name={name} value={value} onChange={setNewDate} />
}

export default DateInput
