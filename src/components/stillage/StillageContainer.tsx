import { styled } from '@linaria/react'

const StillageContainer = styled.div`
  padding: 10px 0 0 0;
  min-height: 100%;
  background-color: #000;
  display: flex;
  flex-direction: column;

  & > div {
    flex-grow: 1;
  }

  @media screen and (min-width: 375px) {
    padding: 20px;
  }
  @media screen and (min-width: 768px) {
    padding: 20px 64px 32px 64px;
  }
  @media screen and (min-width: 1440px) {
    padding: 40px 64px;
  }
`

export default StillageContainer
