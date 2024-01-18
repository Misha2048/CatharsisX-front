import React from 'react'
import { whiteColor } from './colors'
import { styled } from '@linaria/react'

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  label: string
  value: string
  name: string
  type: string
  required?: boolean
  maxLength?: number
  minLength?: number
  width?: string
}

const StyledInputField = styled.input`
  position: relative;
  display: block;
  width: ${(props) => props.width || 'calc(100% - 10px)'};
  border: 1px solid ${whiteColor};
  padding: 10px 0;
  padding-left: 10px;
  border-radius: 5px;
  transition: border-color 0.3s ease-out;

  &::placeholder {
    color: #000;
    opacity: 70%;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 10px;
    letter-spacing: 0.42px;
  }
`

const Input: React.FC<InputProps> = ({
  label,
  name,
  type,
  value,
  onChange,
  width,
  required = false,
  maxLength = 30,
  minLength = 0,
}) => {
  return (
    <StyledInputField
      type={type}
      name={name}
      id={name}
      onChange={onChange}
      value={value}
      required={required}
      maxLength={maxLength}
      minLength={minLength}
      placeholder={label}
      width={width}
    />
  )
}

export default Input
