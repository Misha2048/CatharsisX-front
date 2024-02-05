import { styled } from '@linaria/react'
import { PropsWithChildren, useCallback } from 'react'
import { NavigateFunction } from 'react-router-dom'

interface Props extends PropsWithChildren {
  navigate: NavigateFunction
}

const StyledContainer = styled.div`
  cursor: pointer;
`

function RedirectHomeContainer({ children, navigate }: Props) {
  const redirectToHome = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault()
    navigate('/')
  }, [])

  return <StyledContainer onClick={redirectToHome}>{children}</StyledContainer>
}

export default RedirectHomeContainer
