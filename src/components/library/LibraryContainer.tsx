import { styled } from '@linaria/react'

import FullscreenUnderHeader from '@components/FullscreenUnderHeader'

const LibraryContainer = styled(FullscreenUnderHeader)`
  padding: 10px 0 30px 0;
  background-color: #000;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 375px) {
    padding: 20px;
  }
  @media screen and (min-width: 768px) {
    padding: 20px 32px 32px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 40px 64px;
  }
`

export default LibraryContainer
