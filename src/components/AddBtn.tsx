import { styled } from '@linaria/react'
import { PropsWithChildren } from 'react'

import ModalWindowBtn from '@components/ModalWindowBtn'
import plusIcon from '@assets/plus-icon.svg'

interface Props extends PropsWithChildren {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  alignCenter?: boolean
}

const BtnContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const PlusIcon = styled.img`
  width: 16px;
  height: 16px;
`

function AddBtn({ children, onClick, alignCenter }: Props) {
  return (
    <ModalWindowBtn alignCenter={alignCenter} onClick={onClick}>
      <BtnContent>
        <PlusIcon src={plusIcon} alt='' />
        <span>{children}</span>
      </BtnContent>
    </ModalWindowBtn>
  )
}

export default AddBtn
