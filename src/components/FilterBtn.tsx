import React from 'react'
import { styled } from '@linaria/react'

import settingsIcon from '@assets/settings-icon.svg'

const StyledFilterBtn = styled.button`
  font-family: 'Inter', sans-serif;
  color: #fff;
  font-size: 24px;
  line-height: 1;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 8px;
  img {
    width: 24px;
    height: 24px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`

function FilterBtn() {
  return (
    <StyledFilterBtn>
      <img src={settingsIcon} alt='' />
      Filter
    </StyledFilterBtn>
  )
}

export default FilterBtn
