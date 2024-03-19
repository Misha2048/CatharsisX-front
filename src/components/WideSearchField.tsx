import { styled } from '@linaria/react'
import { useCallback } from 'react'

import searchIcon from '@assets/searchIcon.svg'

interface Props {
  placeholder: string
  text: string
  setText: React.Dispatch<React.SetStateAction<string>>
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

const SearchFieldBody = styled.form`
  background-color: #333;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 8px 15px;
  width: 100%;
  border-radius: 15px;
`

const Button = styled.button`
  width: 14px;
  height: 14px;
  background-color: transparent;
  pointer-events: all;
  cursor: pointer;

  & > img {
    width: inherit;
    height: inherit;
  }
`

const Input = styled.input`
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 19.6px;
  width: 100%;
  background: transparent;

  &:placeholder {
    color: #fff;
    opacity: 0.5;
    font-size: 14px;
    line-height: 19.6px;
  }
`

function WideSearchField({ placeholder, text, setText, onSubmit }: Props) {
  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setText(event.target.value)
  }, [])

  return (
    <SearchFieldBody onSubmit={onSubmit}>
      <Button type='submit' disabled={onSubmit === undefined}>
        <img src={searchIcon} alt='search icon' />
      </Button>
      <Input type='text' placeholder={placeholder} value={text} onChange={onChange} />
    </SearchFieldBody>
  )
}

export default WideSearchField
