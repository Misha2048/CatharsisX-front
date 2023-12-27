import { styled } from '@linaria/react'

const StillageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  div:nth-child(2) {
    flex: 1 1 auto;
  }

  @media screen and (min-width: 1441px) {
    width: 1312px;
    margin: 0px auto;
  }
`

export default StillageWrapper
