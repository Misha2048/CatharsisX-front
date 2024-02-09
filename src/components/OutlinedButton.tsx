import React from 'react'
import { greyColor, primaryColor, whiteColor } from './colors'
import { styled } from '@linaria/react'

interface OutlinedButtonProps {
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
}

const StyledOutlinedButton = styled.button`
  border: 3px solid ${primaryColor};
  color: ${whiteColor};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  width: 100%;
  padding: 11px 0;
  border-radius: 8px;
  background: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &.disabled {
    background-color: ${greyColor};
    cursor: not-allowed;
  }
  &:hover {
    opacity: 0.8;
    background: inherit;
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }
`

const OutlinedButton: React.FC<OutlinedButtonProps> = ({ children, onClick }) => {
  return <StyledOutlinedButton onClick={onClick}>{children}</StyledOutlinedButton>
}

export default OutlinedButton
