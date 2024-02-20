import { useCallback, useState } from 'react'
import { styled } from '@linaria/react'
import { useDispatch, useSelector } from 'react-redux'

import BlackOverlay from '@components/BlackOverlay'
import CloseBtn from '@components/CloseBtn'
import CloseBtnContainer from '@components/filter/CloseBtnContainer'
import ModalBody from '@components/modalWindow/ModalBody'
import ModalTitle from '@components/modalWindow/ModalTitle'
import Input from '@components/Input'
import ModalText from '@components/modalWindow/ModalText'
import Checkbox from '@components/Checkbox'
import ModalWindowBtn from '@components/ModalWindowBtn'
import ColorInput from '@components/ColorInput'
import { RootState } from '@redux/store'
import { setHint } from '@redux/slices/hintSlice'
import { api } from '@api/index'
import { addLibraryItem } from '@redux/slices/librarySlice'

interface Props {
  isShow: boolean
  setIsShow: (value: boolean) => void
}

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  align-self: flex-start;
  user-select: none;
`

const initialFormData = {
  stillageName: '',
  color: '#019C56',
  isPrivate: true,
}

function CreateStillageModal({ isShow, setIsShow }: Props) {
  const [formData, setFormData] = useState(initialFormData)
  const dispatch = useDispatch()
  const stillagesList = useSelector((state: RootState) => state.library.list)

  const hideModal = useCallback((event?: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event?.preventDefault()
    setIsShow(false)
  }, [])

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }, [])

  const submitForm = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      if (stillagesList?.some((stillage) => stillage.name === formData.stillageName)) {
        return dispatch(
          setHint({
            message: 'A stillage already exists. Please specify another name.',
          }),
        )
      }

      const resp = await api.stillages.post({
        stillage_name: formData.stillageName,
        color: formData.color,
        private: formData.isPrivate,
      })
      if (resp.id && resp.color && resp.name) {
        dispatch(addLibraryItem(resp))
        setTimeout(() => {
          setFormData(initialFormData)
        }, 300)
        hideModal()
      }
    },
    [formData],
  )

  return (
    <>
      <BlackOverlay show={isShow} onClick={hideModal} />
      <form onSubmit={submitForm}>
        <ModalBody show={isShow}>
          <ModalTitle>New stillage</ModalTitle>
          <CloseBtnContainer>
            <CloseBtn size='small' onClick={hideModal} />
          </CloseBtnContainer>
          <Input
            label='Stillage name'
            type='text'
            name='stillageName'
            value={formData.stillageName}
            onChange={handleChange}
            required
            minLength={1}
            maxLength={150}
          />
          <FlexContainer>
            <ModalText>Color</ModalText>
            <div>
              <ColorInput
                type='radio'
                name='color'
                value='#019C56'
                checked={formData.color === '#019C56'}
                onChange={handleChange}
              />
              <ColorInput
                type='radio'
                name='color'
                value='#FD6F51'
                checked={formData.color === '#FD6F51'}
                onChange={handleChange}
              />
              <ColorInput
                type='radio'
                name='color'
                value='#BF9BFA'
                checked={formData.color === '#BF9BFA'}
                onChange={handleChange}
              />
            </div>
          </FlexContainer>
          <CheckboxContainer>
            <Checkbox name='isPrivate' checked={formData.isPrivate} onChange={handleChange} />
            <ModalText>Private</ModalText>
          </CheckboxContainer>
          <ModalWindowBtn alignCenter type='submit'>
            Create
          </ModalWindowBtn>
        </ModalBody>
      </form>
    </>
  )
}

export default CreateStillageModal
