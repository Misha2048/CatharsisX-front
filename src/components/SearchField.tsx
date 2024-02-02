import { css } from '@linaria/core'
import searchIcon from '../assets/searchIcon.png'

const SearchFieldStyle = css`
  display: flex;
  gap: 15px;
  opacity: 0.5;
  padding: 8px 20px;
  align-items: center;
  max-width: 170px;
  min-width: 100px;
  border-radius: 15px;
  background: #333;

  & > input {
    width: 100%;
    color: #fff;
    background: none;
  }

  & > input:placeholder {
    color: #fff;
    opacity: 0.5;
  }

  & > img {
    width: 14px;
    height: 14px;
    pointer-events: none;
  }

  @media only screen and (max-width: 1100px) {
    padding: 8px 15px 8px 20px;
  }
  @media only screen and (max-width: 900px) {
    padding: 8px 10px 8px 20px;
  }
`

function SearchField() {
  return (
    <div className={SearchFieldStyle}>
      <img src={searchIcon} alt='Search Icon' />
      <input type='text' placeholder='Search' />
    </div>
  )
}

export default SearchField
