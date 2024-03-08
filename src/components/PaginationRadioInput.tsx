import { styled } from '@linaria/react'

interface Props {
  type?: string
  id: string
  name: string
  value: number
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const StyledInput = styled.input`
  display: none;

  & + label {
    cursor: pointer;
    padding: 5px 8px;
    border: 1px solid;
    border-radius: 5px;
    border-color: #fff;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:checked + label {
    border-color: #3ec290;
    color: #3ec290;
  }
`

function PaginationRadioInput({ type = 'radio', id, name, value, checked, onChange }: Props) {
  return (
    <>
      <StyledInput
        type={type}
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{value}</label>
    </>
  )
}

export default PaginationRadioInput
