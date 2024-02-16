import { styled } from '@linaria/react'

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

export default ColorInput
