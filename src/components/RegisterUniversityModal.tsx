import { useCallback, useState } from 'react'

import AddUniversityBody from '@components/registerUniversity/AddUniversityBody'
import CloseBtnContainer from '@components/filter/CloseBtnContainer'
import CloseBtn from '@components/CloseBtn'
import Input from '@components/Input'
import ModalWindowBtn from '@components/ModalWindowBtn'
import AddUniversityMessage from '@components/registerUniversity/AddUniversityMessage'
import AddUniversityForm from '@components/registerUniversity/AddUniversityForm'
import AddUniversityHeading from '@components/registerUniversity/AddUniversityHeading'
import { api } from '@api/index'

interface Props {
  isShow: boolean
  setIsShow: (value: boolean) => void
}

function RegisterUniversityModal({ isShow, setIsShow }: Props) {
  const [universityName, setUniversityName] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setUniversityName(event.target.value)
  }, [])

  const hideModalWindow = useCallback(() => {
    setTimeout(() => {
      setSuccessMessage('')
    }, 300)
    setIsShow(false)
  }, [])

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      await api.mail.newUniversityLetter({ name: universityName })
      setSuccessMessage('Thank you, we will process your request soon.')
      setUniversityName('')
    },
    [universityName],
  )

  return (
    <AddUniversityBody show={isShow}>
      <CloseBtnContainer>
        <CloseBtn size='small' onClick={hideModalWindow} />
      </CloseBtnContainer>
      {successMessage ? (
        <AddUniversityMessage>{successMessage}</AddUniversityMessage>
      ) : (
        <AddUniversityForm onSubmit={handleSubmit}>
          <AddUniversityHeading>Register university:</AddUniversityHeading>
          <Input
            label='University name'
            name='universityName'
            type='text'
            minLength={3}
            value={universityName}
            onChange={handleChange}
            required
          />
          <ModalWindowBtn type='submit'>Ok</ModalWindowBtn>
        </AddUniversityForm>
      )}
    </AddUniversityBody>
  )
}

export default RegisterUniversityModal
