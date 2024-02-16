import { styled } from '@linaria/react'

interface Props {
  type?: string
  name: string
  value: string
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const StyledInput = styled.input<{ value: string }>`
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

function ColorInput({ type = 'radio', name, value, checked, onChange }: Props) {
  return <StyledInput type={type} name={name} value={value} checked={checked} onChange={onChange} />
}

export default ColorInput
