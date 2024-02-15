import { useCallback, useState } from 'react'
import { styled } from '@linaria/react'

import BlackOverlay from '@components/BlackOverlay'
import CloseBtn from '@components/CloseBtn'
import CloseBtnContainer from '@components/filter/CloseBtnContainer'
import ModalBody from '@components/modalWindow/ModalBody'
import ModalTitle from '@components/modalWindow/ModalTitle'
import Input from '@components/Input'
import ModalText from '@components/modalWindow/ModalText'
import Checkbox from '@components/Checkbox'
import ModalWindowBtn from '@components/ModalWindowBtn'

interface Props {
  isShow: boolean
  setIsShow: (value: boolean) => void
}

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ColorInput = styled.input<{ value: string }>`
  appearance: none;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  position: relative;
  margin-left: 16px;

  &::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${(props) => props.value};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:checked {
    border: 2px solid #fff;
  }
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

  const hideModal = useCallback((event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.preventDefault()
    setIsShow(false)
  }, [])

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }, [])

  const submitForm = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      console.log(formData) // TODO change it later
      // const resp = api.stillage.post(formData)
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
