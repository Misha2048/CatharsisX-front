import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import BlackOverlay from '@components/BlackOverlay'
import CloseBtn from '@components/CloseBtn'
import Input from '@components/Input'
import ModalWindowBtn from '@components/ModalWindowBtn'
import CloseBtnContainer from '@components/filter/CloseBtnContainer'
import ModalBody from '@components/modalWindow/ModalBody'
import ModalTitle from '@components/modalWindow/ModalTitle'
import { api } from '@api/index'
import { addStillageItem } from '@redux/slices/stillageSlice'
import { RootState } from '@redux/store'
import { setHint } from '@redux/slices/hintSlice'

interface Props {
  stillageId: string
  isShow: boolean
  setIsShow: (value: boolean) => void
}

function CreateShelfModal({ stillageId, isShow, setIsShow }: Props) {
  const [shelfName, setShelfName] = useState('')
  const dispatch = useDispatch()
  const shelvesList = useSelector((state: RootState) => state.stillage.list)

  const hideModal = useCallback((event?: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event?.preventDefault()
    setIsShow(false)
  }, [])

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setShelfName(event.target.value)
  }, [])

  const submitForm = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      if (shelvesList?.some((shelf) => shelf.name === shelfName)) {
        return dispatch(
          setHint({
            message: `A shelf already exists. Please specify another name.`,
          }),
        )
      }

      const resp = await api.shelves.post({ shelfName, stillageId })
      if (resp.id && resp.userId && resp.name) {
        dispatch(addStillageItem(resp))
        setTimeout(() => {
          setShelfName('')
        }, 300)
        hideModal()
      }
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
