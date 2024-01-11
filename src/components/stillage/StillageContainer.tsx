import { styled } from '@linaria/react'

const StillageContainer = styled.div`
  padding: 10px 0 0 0;
  min-height: calc(100vh - 79px);
  background-color: #000;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 375px) {
    padding: 20px;
  }
  @media screen and (min-width: 768px) {
    padding: 20px 32px 32px 32px;
  }
  @media screen and (min-width: 821px) {
    min-height: calc(100vh - 107.59px);
  }
  @media screen and (min-width: 1440px) {
    padding: 40px 64px;
  }
`

export default StillageContainer
