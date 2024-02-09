import React from 'react'
import { greyColor, primaryColor, whiteColor } from './colors'
import { styled } from '@linaria/react'

interface ButtonProps {
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
}

const StyledButton = styled.button`
  background-color: ${primaryColor};
  color: ${whiteColor};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  width: 100%;
  padding: 11px 0;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &.disabled {
    background-color: ${greyColor};
    cursor: not-allowed;
  }
  &:hover {
    filter: brightness(90%);
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }
`

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}

export default Button
