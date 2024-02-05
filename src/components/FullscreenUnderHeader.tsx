import { styled } from '@linaria/react'

const FullscreenUnderHeader = styled.div`
  width: 100vw;
  min-height: calc(100vh - 80px);

  @media screen and (min-width: 821px) {
    min-height: calc(100vh - 100px);
  }
`

export default FullscreenUnderHeader
