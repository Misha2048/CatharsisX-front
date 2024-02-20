import { styled } from '@linaria/react'

const StillageHeading = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  color: #fff;
  font-size: 24px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  @media screen and (min-width: 375px) {
    max-width: calc(100% - 50px);
  }
  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`

export default StillageHeading
