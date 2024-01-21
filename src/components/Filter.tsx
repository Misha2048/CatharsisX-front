import React, { useCallback, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { useDispatch } from 'react-redux'

import FilterBody from '@components/filter/FilterBody'
import FilterHeading from '@components/filter/FilterHeading'
import CloseBtnContainer from '@components/filter/CloseBtnContainer'
import CloseBtn from '@components/CloseBtn'
import FilterForm from '@components/filter/FilterForm'
import FilterInputsContainer from '@components/filter/FilterInputsContainer'
import Checkbox from '@components/Checkbox'
import Input from '@components/Input'
import FilterText from '@components/filter/FilterText'
import DateInput from '@components/DateInput'
import FilterButtonsRow from '@components/filter/FilterButtonsRow'
import BlackOverlay from '@components/BlackOverlay'
import ModalWindowBtn from '@components/ModalWindowBtn'
import ToolTip from '@components/ToolTip'
import { setHint } from '@redux/slices/hintSlice'
import { maxDate, minDate } from '@const'
import { RequestParams } from '@helpers/filterTypes'
import '@assets/datePicker.css'

interface Props {
  isShow: boolean
  setIsShow: (value: boolean) => void
  fetchData: (RequestParams: RequestParams) => Promise<void>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  additionalParams?: { [key: string]: any }
}

interface SetDateParams {
  name: string
  value: Dayjs
}

const todayDate = dayjs()

function isDateValid(date: Dayjs) {
  return !date.isBefore(minDate) && !date.isAfter(maxDate) && date.isValid()
}

const validDateDescription = `The minimum date is ${minDate.format(
  'DD.MM.YYYY',
)}, and the maximum date is ${maxDate.format('DD.MM.YYYY')}.`

const initialFormData = {
  shelfName: '',
  uploadDateFrom: todayDate,
  uploadDateTo: todayDate,
  creationDateFrom: todayDate,
  creationDateTo: todayDate,
  nameCheckbox: true,
  uploadDateCheckbox: false,
  creationDateCheckbox: false,
}

function Filter({ isShow, setIsShow, additionalParams, fetchData }: Props) {
  const [formData, setFormData] = useState(initialFormData)
  const dispatch = useDispatch()

  const hideFilter = useCallback(() => {
    setIsShow(false)
  }, [])

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }, [])

  const setDate = useCallback(({ name, value }: SetDateParams) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }, [])

  const resetFormData = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    setFormData(initialFormData)
  }, [])

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const requestBody: RequestParams = additionalParams ? { ...additionalParams } : {}
      if (formData.nameCheckbox) {
        requestBody.name = formData.shelfName
      }
      if (formData.uploadDateCheckbox) {
        if (!isDateValid(formData.uploadDateFrom)) {
          return dispatch(
            setHint({
              message: `Invalid start date for the upload date interval! ${validDateDescription}`,
            }),
          )
        }
        if (!isDateValid(formData.uploadDateTo)) {
          return dispatch(
            setHint({
              message: `Invalid end date for the upload date interval! ${validDateDescription}`,
            }),
          )
        }
        requestBody.last_upload_at = [
          formData.uploadDateFrom.format('YYYY-MM-DD'),
          formData.uploadDateTo.format('YYYY-MM-DD'),
        ]
      }
      if (formData.creationDateCheckbox) {
        if (!isDateValid(formData.creationDateFrom)) {
          return dispatch(
            setHint({
              message: `Invalid start date for the creation date interval! ${validDateDescription}`,
            }),
          )
        }
        if (!isDateValid(formData.creationDateTo)) {
          return dispatch(
            setHint({
              message: `Invalid end date for the creation date interval! ${validDateDescription}`,
            }),
          )
        }
        requestBody.created_at = [
          formData.creationDateFrom.format('YYYY-MM-DD'),
          formData.creationDateTo.format('YYYY-MM-DD'),
        ]
      }

      fetchData(requestBody)

      // set the initial form data after the filter's been hidden
      setTimeout(() => {
        setFormData(initialFormData)
      }, 300)
      hideFilter()
    },
    [formData, additionalParams, fetchData],
  )

  return (
    <>
      <FilterBody show={isShow}>
        <CloseBtnContainer>
          <CloseBtn size='small' onClick={hideFilter} />
        </CloseBtnContainer>
        <FilterHeading>Filter by:</FilterHeading>
        <FilterForm onSubmit={handleSubmit}>
          <FilterInputsContainer centered={true}>
            <Checkbox name='nameCheckbox' checked={formData.nameCheckbox} onChange={handleChange} />
            <Input
              label='Name'
              name='shelfName'
              type='text'
              minLength={1}
              maxLength={50}
              required={formData.nameCheckbox}
              value={formData.shelfName}
              onChange={handleChange}
            />
          </FilterInputsContainer>
          <FilterInputsContainer>
            <Checkbox
              name='uploadDateCheckbox'
              checked={formData.uploadDateCheckbox}
              onChange={handleChange}
            />
            <div>
              <FilterText>Last upload date:</FilterText>
              <FilterInputsContainer centered={true}>
                <DateInput
                  name='uploadDateFrom'
                  value={formData.uploadDateFrom}
                  setDate={setDate}
                />
                <FilterText noMargin>-</FilterText>
                <DateInput name='uploadDateTo' value={formData.uploadDateTo} setDate={setDate} />
              </FilterInputsContainer>
            </div>
          </FilterInputsContainer>
          <FilterInputsContainer>
            <Checkbox
              name='creationDateCheckbox'
              checked={formData.creationDateCheckbox}
              onChange={handleChange}
            />
            <div>
              <FilterText>Creation date:</FilterText>
              <FilterInputsContainer centered={true}>
                <DateInput
                  name='creationDateFrom'
                  value={formData.creationDateFrom}
                  setDate={setDate}
                />
                <FilterText noMargin>-</FilterText>
                <DateInput
                  name='creationDateTo'
                  value={formData.creationDateTo}
                  setDate={setDate}
                />
              </FilterInputsContainer>
            </div>
          </FilterInputsContainer>
          <FilterButtonsRow>
            <ModalWindowBtn type='submit'>Apply</ModalWindowBtn>
            <ModalWindowBtn onClick={resetFormData}>Reset</ModalWindowBtn>
          </FilterButtonsRow>
        </FilterForm>
      </FilterBody>
      <BlackOverlay show={isShow} onClick={hideFilter} />
      <ToolTip />
    </>
  )
}

export default Filter
