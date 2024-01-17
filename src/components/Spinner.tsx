import { styled } from '@linaria/react'
import StyledFullscreen from './FullscreenUnderHeader'
import SpinnerIcon from './SpinnerIcon'

const Container = styled.div`
  background-color: #000;
  width: 100%;
  min-height: 100%;
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
    <StyledFullscreen>
      <Container>
        <SpinnerIcon />
        <Text>Loading...</Text>
      </Container>
    </StyledFullscreen>
  )
}

export default Spinner
