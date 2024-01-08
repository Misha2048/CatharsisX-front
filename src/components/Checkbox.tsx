import React from 'react'
import { styled } from '@linaria/react'

import checkboxIcon from '@assets/checkbox.png'

interface Props {
  name: string
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const StyledCheckbox = styled.input`
  appearance: none;
  background-color: #fff;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  position: relative;

  &::before {
    content: '';
    background: url(${checkboxIcon}) center/contain no-repeat;
    width: 16px;
    height: 16px;
    border-radius: 3px;
    visibility: hidden;
    opacity: 0;
  }

  &:checked::before {
    visibility: visible;
    opacity: 1;
  }
`

function Checkbox({ checked, name, onChange }: Props) {
  return <StyledCheckbox type='checkbox' name={name} checked={checked} onChange={onChange} />
}

export default Checkbox
