import { css } from '@linaria/core'
import { styled } from '@linaria/react'
import { useCallback } from 'react'

import searchIcon from '@assets/searchIcon.svg'

interface Props {
  text: string
  setText: React.Dispatch<React.SetStateAction<string>>
  onIconClick?: (event: React.FormEvent<HTMLFormElement>) => void
}

const SearchFieldStyle = css`
  display: flex;
  gap: 15px;
  opacity: 0.5;
  padding: 12px 20px;
  align-items: center;
  border-radius: 20px;
  background: #333;

  & > input {
    width: 100%;
    color: #fff;
    background: none;
  }

  & > input:placeholder {
    color: #fff;
  }

  & button {
    width: 14px;
    height: 14px;
    background-color: transparent;
    cursor: auto;
  }

  & img {
    width: inherit;
    height: inherit;
  }

  @media only screen and (max-width: 1100px) {
    padding: 12px 15px 12px 20px;
  }
  @media only screen and (max-width: 900px) {
    padding: 12px 10px 12px 20px;
  }
`

const Icon = styled.img<{ isClickable: boolean }>`
  pointer-events: ${(props) => (props.isClickable ? 'all' : 'none')};
  cursor: pointer;
`

function SearchField({ text, setText, onIconClick }: Props) {
  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setText(event.target.value)
  }, [])

  return (
    <form className={SearchFieldStyle} onSubmit={onIconClick}>
      <button type='submit' disabled={onIconClick === undefined}>
        <Icon src={searchIcon} alt='Search Icon' isClickable={onIconClick !== undefined} />
      </button>
      <input type='text' placeholder='Search' value={text} onChange={onChange} />
    </form>
  )
}

export default SearchField
