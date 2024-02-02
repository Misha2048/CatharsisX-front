import { styled } from '@linaria/react'

const FullscreenUnderHeader = styled.div`
  width: 100vw;
  height: calc(100vh - 80px);
  display: flex;
  @media screen and (min-width: 821px) {
    height: calc(100vh - 100px);
  }
`

export default FullscreenUnderHeader
