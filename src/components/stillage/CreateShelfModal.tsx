import BlackOverlay from '@components/BlackOverlay'
import CloseBtn from '@components/CloseBtn'
import Input from '@components/Input'
import ModalWindowBtn from '@components/ModalWindowBtn'
import CloseBtnContainer from '@components/filter/CloseBtnContainer'
import ModalBody from '@components/modalWindow/ModalBody'
import ModalTitle from '@components/modalWindow/ModalTitle'
import { useCallback, useState } from 'react'

interface Props {
  isShow: boolean
  setIsShow: (value: boolean) => void
}

function CreateShelfModal({ isShow, setIsShow }: Props) {
  const [shelfName, setShelfName] = useState('')

  const hideModal = useCallback((event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.preventDefault()
    setIsShow(false)
  }, [])

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setShelfName(event.target.value)
  }, [])

  const submitForm = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      console.log(shelfName)
      // const resp = api.shelves.post(shelfName) // TODO change it later
    },
    [shelfName],
  )

  return (
    <>
      <BlackOverlay show={isShow} onClick={hideModal} />
      <form onSubmit={submitForm}>
        <ModalBody show={isShow}>
          <ModalTitle>New shelf</ModalTitle>
          <CloseBtnContainer>
            <CloseBtn size='small' onClick={hideModal} />
          </CloseBtnContainer>
          <Input
            label='Shelf name'
            type='text'
            name='shelfName'
            value={shelfName}
            onChange={handleChange}
            required
            minLength={1}
            maxLength={150}
          />
          <ModalWindowBtn alignCenter type='submit'>
            Create
          </ModalWindowBtn>
        </ModalBody>
      </form>
    </>
  )
}

export default CreateShelfModal
