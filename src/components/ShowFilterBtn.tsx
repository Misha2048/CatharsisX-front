import React from 'react'
import { styled } from '@linaria/react'

import settingsIcon from '@assets/settings-icon.svg'

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const StyledShowFilterBtn = styled.button`
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

function ShowFilterBtn({ onClick: showFilter }: Props) {
  return (
    <StyledShowFilterBtn onClick={showFilter}>
      <img src={settingsIcon} alt='' />
      Filter
    </StyledShowFilterBtn>
  )
}

export default ShowFilterBtn
