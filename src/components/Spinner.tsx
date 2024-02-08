import { styled } from '@linaria/react'

import SpinnerIcon from '@components/SpinnerIcon'
import Page from '@components/Page'
import FullscreenUnderHeader from '@components/FullscreenUnderHeader'

const Container = styled(FullscreenUnderHeader)`
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding-bottom: 40px;
`

const Text = styled.h1`
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  letter-spacing: 0.1rem;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`

function Spinner() {
  return (
    <Page hasHeader>
      <Container>
        <SpinnerIcon />
        <Text>Loading...</Text>
      </Container>
    </Page>
  )
}

export default Spinner
