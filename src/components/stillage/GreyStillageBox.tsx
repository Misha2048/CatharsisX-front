import { styled } from '@linaria/react'

const GreyStillageBox = styled.div`
  min-height: 100%;
  background-color: #333;
  padding: 16px 20px;

  @media screen and (min-width: 375px) {
    padding: 20px;
    border-radius: 16px;
  }

  @media screen and (min-width: 1440px) {
    padding: 24px;
  }
`

export default GreyStillageBox
