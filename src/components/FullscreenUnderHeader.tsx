import { styled } from '@linaria/react'

const FullscreenUnderHeader = styled.div`
  width: 100vw;
  height: calc(100vh - 79px);
  display: flex;
  @media screen and (min-width: 821px) {
    height: calc(100vh - 107px);
  }
`

export default FullscreenUnderHeader
