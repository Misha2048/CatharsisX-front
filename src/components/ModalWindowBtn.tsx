import { styled } from '@linaria/react'
import { greyColor } from './colors'
const ModalWindowBtn = styled.button`
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  letter-spacing: -0.56px;
  border-radius: 8px;
  background-color: #3ec290;
  padding: 8px 12px;

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

export default ModalWindowBtn
