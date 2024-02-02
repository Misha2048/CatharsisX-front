import { styled } from '@linaria/react'

export const FullscreenUnderHeaderStyles = {
  width: '100vw',
  minHeight: 'calc(100vh - 80px)',
  '@media screen and (min-width: 821px)': {
    minHeight: 'calc(100vh - 100px)',
  },
}

const FullscreenUnderHeader = styled.div`
  ${FullscreenUnderHeaderStyles}
`

export default FullscreenUnderHeader
